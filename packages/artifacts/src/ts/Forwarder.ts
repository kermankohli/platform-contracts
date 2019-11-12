export const Forwarder = [
  {
    "constant": true,
    "inputs": [],
    "name": "ETHER_TOKEN",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "ZERO_EX_EXCHANGE",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "ZERO_EX_TOKEN_PROXY",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "EIP712_DOMAIN_HASH",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "zeroExExchange",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "zeroExProxy",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "cards",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "etherToken",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "constant": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "makerAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "takerAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "feeRecipientAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "senderAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "makerAssetAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "takerAssetAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "makerFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "takerFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "expirationTimeSeconds",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "salt",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "makerAssetData",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "takerAssetData",
            "type": "bytes"
          }
        ],
        "internalType": "struct LibOrder.Order[]",
        "name": "orders",
        "type": "tuple[]"
      },
      {
        "internalType": "uint256[]",
        "name": "takerAssetFillAmounts",
        "type": "uint256[]"
      },
      {
        "internalType": "bytes[]",
        "name": "signatures",
        "type": "bytes[]"
      }
    ],
    "name": "fillOrders",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }
]