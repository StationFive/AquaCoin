# Rooken

## Blockchain interface and Smart Contracts

Current global npm modules required:

 * truffle


Commands available through npm

`npm compile`

Compiles all .sol files in blockchain/contracts/

This is helpful to get the JSON ABI (Application Binary Interface) for communicating with already-deployed contracts.  It also produces the bytecode version of the contract (this is the code that actually resides in the contract on the blockchain).  

This step is not strictly necessary to deploy contracts, the below command is sufficient.

`npm migrate`

? This assists in updating contracts that have been deployed.  Requries a blockchain/contracts/Migrations.sol file

`npm deploy`

Deploys the contracts specified in blockchain/migrations/2_deploy_contracts.js to the blockchain specified in blockchain/truffle.js