const dotenv = require('dotenv');
const config = dotenv.config({path: '../../.env'}).parsed;

module.exports = {
  networks: {
    'development': {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    'main-net': {
      network_id: 1
    },
    'ropsten': {
      network_id: 3
    },
    'kovan': {
      network_id: 42
    }
  },
  compilers: {
    solc: {
      version: "0.5.11",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: config.ETHERSCAN_API
  }
};