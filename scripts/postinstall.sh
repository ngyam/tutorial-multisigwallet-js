#!/usr/bin/env bash

cdir="$( cd "$(dirname "$0")" ; pwd -P )"

cd ${cdir}/../node_modules/multisig-wallet-gnosis
npx truffle compile --all

echo "Done"
