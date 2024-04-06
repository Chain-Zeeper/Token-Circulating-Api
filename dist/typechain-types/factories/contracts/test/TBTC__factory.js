"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TBTC__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "previousAdminRole",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "newAdminRole",
                type: "bytes32",
            },
        ],
        name: "RoleAdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleGranted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleRevoked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [],
        name: "DEFAULT_ADMIN_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "DOMAIN_SEPARATOR",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MINTER_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "burnFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
        ],
        name: "getRoleAdmin",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "grantRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "hasRole",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "nonces",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
            },
        ],
        name: "permit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "renounceRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "revokeRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x6101406040523480156200001257600080fd5b50604051806040016040528060078152602001662134ba31b7b4b760c91b81525080604051806040016040528060018152602001603160f81b815250604051806040016040528060078152602001662134ba31b7b4b760c91b8152506040518060400160405280600381526020016242544360e81b8152508160039080519060200190620000a292919062000230565b508051620000b890600490602084019062000230565b5050825160209384012082519284019290922060e08390526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818901819052818301979097526060810194909452608080850193909352308483018190528151808603909301835260c09485019091528151919096012090529290925261012052506200015990506000336200018b565b620001857f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336200018b565b62000313565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff166200022c5760008281526005602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620001eb3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b8280546200023e90620002d6565b90600052602060002090601f016020900481019282620002625760008555620002ad565b82601f106200027d57805160ff1916838001178555620002ad565b82800160010185558215620002ad579182015b82811115620002ad57825182559160200191906001019062000290565b50620002bb929150620002bf565b5090565b5b80821115620002bb5760008155600101620002c0565b600181811c90821680620002eb57607f821691505b602082108114156200030d57634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e05161010051610120516121516200036360003960006110ec0152600061113b015260006111160152600061106f01526000611099015260006110c301526121516000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c806342966c68116100ee578063a217fddf11610097578063d505accf11610071578063d505accf14610390578063d5391393146103a3578063d547741f146103ca578063dd62ed3e146103dd57600080fd5b8063a217fddf14610362578063a457c2d71461036a578063a9059cbb1461037d57600080fd5b80637ecebe00116100c85780637ecebe001461030157806391d148541461031457806395d89b411461035a57600080fd5b806342966c68146102a557806370a08231146102b857806379cc6790146102ee57600080fd5b80632f2ff15d1161015057806336568abe1161012a57806336568abe1461026c578063395093511461027f57806340c10f191461029257600080fd5b80632f2ff15d14610240578063313ce567146102555780633644e5151461026457600080fd5b806318160ddd1161018157806318160ddd146101f857806323b872dd1461020a578063248a9ca31461021d57600080fd5b806301ffc9a7146101a857806306fdde03146101d0578063095ea7b3146101e5575b600080fd5b6101bb6101b6366004611ca4565b610423565b60405190151581526020015b60405180910390f35b6101d86104bc565b6040516101c79190611d12565b6101bb6101f3366004611d8c565b61054e565b6002545b6040519081526020016101c7565b6101bb610218366004611db6565b610566565b6101fc61022b366004611df2565b60009081526005602052604090206001015490565b61025361024e366004611e0b565b61058a565b005b604051601281526020016101c7565b6101fc6105b4565b61025361027a366004611e0b565b6105c3565b6101bb61028d366004611d8c565b61067b565b6102536102a0366004611d8c565b6106c7565b6102536102b3366004611df2565b6106fb565b6101fc6102c6366004611e37565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6102536102fc366004611d8c565b610708565b6101fc61030f366004611e37565b61071d565b6101bb610322366004611e0b565b600091825260056020908152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b6101d8610748565b6101fc600081565b6101bb610378366004611d8c565b610757565b6101bb61038b366004611d8c565b610828565b61025361039e366004611e52565b610836565b6101fc7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102536103d8366004611e0b565b6109f5565b6101fc6103eb366004611ec5565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b0000000000000000000000000000000000000000000000000000000014806104b657507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6060600380546104cb90611eef565b80601f01602080910402602001604051908101604052809291908181526020018280546104f790611eef565b80156105445780601f1061051957610100808354040283529160200191610544565b820191906000526020600020905b81548152906001019060200180831161052757829003601f168201915b5050505050905090565b60003361055c818585610a1a565b5060019392505050565b600033610574858285610bcd565b61057f858585610ca4565b506001949350505050565b6000828152600560205260409020600101546105a581610f57565b6105af8383610f61565b505050565b60006105be611055565b905090565b73ffffffffffffffffffffffffffffffffffffffff8116331461066d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6106778282611189565b5050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919061055c90829086906106c2908790611f6c565b610a1a565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66106f181610f57565b6105af8383611244565b6107053382611364565b50565b610713823383610bcd565b6106778282611364565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600660205260408120546104b6565b6060600480546104cb90611eef565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091908381101561081b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610664565b61057f8286868403610a1a565b60003361055c818585610ca4565b834211156108a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610664565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886108cf8c611551565b60408051602081019690965273ffffffffffffffffffffffffffffffffffffffff94851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061093782611586565b90506000610947828787876115ef565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146109de576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610664565b6109e98a8a8a610a1a565b50505050505050505050565b600082815260056020526040902060010154610a1081610f57565b6105af8383611189565b73ffffffffffffffffffffffffffffffffffffffff8316610abc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610664565b73ffffffffffffffffffffffffffffffffffffffff8216610b5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610664565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610c9e5781811015610c91576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610664565b610c9e8484848403610a1a565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d47576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610664565b73ffffffffffffffffffffffffffffffffffffffff8216610dea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610664565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610ea0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610664565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220858503905591851681529081208054849290610ee4908490611f6c565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f4a91815260200190565b60405180910390a3610c9e565b6107058133611617565b600082815260056020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff1661067757600082815260056020908152604080832073ffffffffffffffffffffffffffffffffffffffff85168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055610ff73390565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60003073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480156110bb57507f000000000000000000000000000000000000000000000000000000000000000046145b156110e557507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b600082815260056020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff161561067757600082815260056020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b73ffffffffffffffffffffffffffffffffffffffff82166112c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610664565b80600260008282546112d39190611f6c565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000908152602081905260408120805483929061130d908490611f6c565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff8216611407576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610664565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054818110156114bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610664565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604081208383039055600280548492906114f9908490611f84565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff811660009081526006602052604090208054600181018255905b50919050565b60006104b6611593611055565b836040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000611600878787876116e9565b9150915061160d81611801565b5095945050505050565b600082815260056020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166106775761166f8173ffffffffffffffffffffffffffffffffffffffff166014611a5a565b61167a836020611a5a565b60405160200161168b929190611f9b565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f08c379a000000000000000000000000000000000000000000000000000000000825261066491600401611d12565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561172057506000905060036117f8565b8460ff16601b1415801561173857508460ff16601c14155b1561174957506000905060046117f8565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561179d573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166117f1576000600192509250506117f8565b9150600090505b94509492505050565b60008160048111156118155761181561201c565b141561181e5750565b60018160048111156118325761183261201c565b141561189a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610664565b60028160048111156118ae576118ae61201c565b1415611916576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610664565b600381600481111561192a5761192a61201c565b14156119b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610664565b60048160048111156119cc576119cc61201c565b1415610705576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610664565b60606000611a6983600261204b565b611a74906002611f6c565b67ffffffffffffffff811115611a8c57611a8c612088565b6040519080825280601f01601f191660200182016040528015611ab6576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611aed57611aed6120b7565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611b5057611b506120b7565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000611b8c84600261204b565b611b97906001611f6c565b90505b6001811115611c34577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611bd857611bd86120b7565b1a60f81b828281518110611bee57611bee6120b7565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c93611c2d816120e6565b9050611b9a565b508315611c9d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610664565b9392505050565b600060208284031215611cb657600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114611c9d57600080fd5b60005b83811015611d01578181015183820152602001611ce9565b83811115610c9e5750506000910152565b6020815260008251806020840152611d31816040850160208701611ce6565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611d8757600080fd5b919050565b60008060408385031215611d9f57600080fd5b611da883611d63565b946020939093013593505050565b600080600060608486031215611dcb57600080fd5b611dd484611d63565b9250611de260208501611d63565b9150604084013590509250925092565b600060208284031215611e0457600080fd5b5035919050565b60008060408385031215611e1e57600080fd5b82359150611e2e60208401611d63565b90509250929050565b600060208284031215611e4957600080fd5b611c9d82611d63565b600080600080600080600060e0888a031215611e6d57600080fd5b611e7688611d63565b9650611e8460208901611d63565b95506040880135945060608801359350608088013560ff81168114611ea857600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215611ed857600080fd5b611ee183611d63565b9150611e2e60208401611d63565b600181811c90821680611f0357607f821691505b60208210811415611580577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115611f7f57611f7f611f3d565b500190565b600082821015611f9657611f96611f3d565b500390565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611fd3816017850160208801611ce6565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351612010816028840160208801611ce6565b01602801949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561208357612083611f3d565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000816120f5576120f5611f3d565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff019056fea2646970667358221220885793e65a3049b1e90ed2fb42edfe23ec60eee314bcbd84ac5a70001bd2ae8164736f6c63430008090033";
const isSuperArgs = (xs) => xs.length > 1;
class TBTC__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.TBTC__factory = TBTC__factory;
TBTC__factory.bytecode = _bytecode;
TBTC__factory.abi = _abi;
