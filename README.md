# Gnosis Mutlisig Wallet tutorial and playground with JavaScript and web3.js

For educational purposes.

Used with a local [Parity client](https://github.com/paritytech/parity-ethereum) version 1.11.8

### Dependencies

- Connection to an ethereum test network with Multisig factory deployed. I use Volta. For a tutorial on how to set up a local [Parity client](https://github.com/paritytech/parity-ethereum) and connect to the network, check [here](https://energyweb.atlassian.net/wiki/spaces/EWF/pages/702414910/Volta+Setting+Up+Local+Nodes+Accounts).
  - If you don't need the factory, ganache is installed as a local dependency and a convenience script is provided.
- 3 accounts with some test Ethers in it. 
- node 8+ and npm, Python 3.6 with pip

### Setup

#### Step 1 - Clone the repo and install depenencies

```bash
git clone https://github.com/ngyam/tutorial-multisigwallet-js.git
cd tutorial-multisigwallet-js
npm install
```

You need [Jupyter notebook](http://jupyter.org/install). The easiest way is just to use python's package manager:

```
pip install jupyter
(or pip3 install jupyter)
```
Then you need the [Javascript (node) kernel](https://github.com/n-riesco/ijavascript) for Jupyter. A script is prepared for you:
```
npm run install:kernel
```

If things didn't work for some reason, alternatiely you can follow the guide here for your distribution for a more manual setup: https://github.com/n-riesco/ijavascript#installation

#### Step 2
Make sure the multisig contracts are compiled. The postinstall script should already have done it. If not, you can manually do it by running:
```
npm run compile
```
The Multisig repo was added as a local dependency. The built contracts can be found in `node_modules/multisig-wallet-gnosis/build/contracts`.

### How to use the tutorial
 1. Make sure your Parity client is running and configured to connect to Volta, or to a network of your choice
    - If you do not want to use the already deployed factory or just want to sandbox on a local dev network with ganache, run:
      ```
      npm run ganache
      ```
      This starts ganache with 10 pre-funded test accounts.
 2. Open the [ipynb](./MultisigWalletTutorialJs.ipynb) file in Jupyter notebook and play around.
    ```bash
    cd tutorial-multisigwallet-js
    npm run start
    
    # alternatively
    jupyter notebook
    ```

### Resources

[Energy Web Foundation](http://www.energyweb.org/)

[Parity client](https://github.com/paritytech/parity-ethereum)

[Gnosis Multisig Wallet UI](https://wallet.gnosis.pm/#/wallets)

[Gnosis Multisig Wallet repo](https://github.com/gnosis/MultiSigWallet)

[web3.js documentation](https://web3js.readthedocs.io)
