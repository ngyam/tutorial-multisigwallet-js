// A hacky solution to decode log event data
// Taken form here https://github.com/barkthins/ether-pudding/blob/master/index.js#L52 then modified
var SolidityEvent = require("web3/lib/web3/event.js");

function toAscii(hex) {
    var str = '',
        i = 0,
        l = hex.length;
    if (hex.substring(0, 2) === '0x') {
        i = 2;
    }
    for (; i < l; i += 2) {
        var code = parseInt(hex.substr(i, 2), 16);
        if (code === 0) continue; // this is added
        str += String.fromCharCode(code);
    }
    return str;
}

function logParser(logs, abi, eventname) {

    // pattern similar to lib/web3/contract.js:  addEventsToContract()
    var decoders = abi.filter(function (json) {
        return json.type === 'event';
    }).map(function (json) {
        // note first and third params only required only by enocde and execute;
        // so don't call those!
        return new SolidityEvent(null, json, null);
    });

    var parsedLogs = logs.map(function (log) {
        var decoder = decoders.find(function (decoder) {
            return (decoder.signature() == log.topics[0].replace("0x", ""));
        })
        if (decoder) {
            return decoder.decode(log);
        } else {
            return log;
        }
    }).map(function (log) {
        abis = abi.find(function (json) {
            return (json.type === 'event' && log.event === json.name);
        });
        if (abis && abis.inputs) {
            abis.inputs.forEach(function (param, i) {
                if (param.type == 'bytes32') {
                    log.args[param.name] = toAscii(log.args[param.name]);
                }
            })
        }
        return log;
    });

    if (eventname !== null && eventname !== "") {
        return parsedLogs.filter(function (log) {
            return log.event === eventname;
        })
    } else {
        return parsedLogs;
    }
}


module.exports = {
    logParser,
    toAscii
}