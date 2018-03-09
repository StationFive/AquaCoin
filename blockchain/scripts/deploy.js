const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'victory switch stem return input flash spoon nerve insane vacant strike other',
  'https://rinkeby.infura.io/eIIWvGp4zER7wUVVDx9x',
);

const web3 = new Web3(provider);

(async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('deploying to', accounts[0]);

  const contractAddress = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0]})

  console.log('contract deployed to', contractAddress);

})();
