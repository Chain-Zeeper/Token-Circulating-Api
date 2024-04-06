"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "initialSupply",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol",
                type: "string",
            },
        ],
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
const _bytecode = "0x6101406040523480156200001257600080fd5b5060405162001b3738038062001b37833981016040819052620000359162000385565b8180604051806040016040528060018152602001603160f81b815250848481600390805190602001906200006b92919062000212565b5080516200008190600490602084019062000212565b5050825160209384012082519284019290922060e08390526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818901819052818301979097526060810194909452608080850193909352308483018190528151808603909301835260c094850190915281519190960120905292909252610120525062000121905033846200012a565b5050506200045d565b6001600160a01b038216620001855760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620001999190620003f9565b90915550506001600160a01b03821660009081526020819052604081208054839290620001c8908490620003f9565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620002209062000420565b90600052602060002090601f0160209004810192826200024457600085556200028f565b82601f106200025f57805160ff19168380011785556200028f565b828001600101855582156200028f579182015b828111156200028f57825182559160200191906001019062000272565b506200029d929150620002a1565b5090565b5b808211156200029d5760008155600101620002a2565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620002e057600080fd5b81516001600160401b0380821115620002fd57620002fd620002b8565b604051601f8301601f19908116603f01168101908282118183101715620003285762000328620002b8565b816040528381526020925086838588010111156200034557600080fd5b600091505b838210156200036957858201830151818301840152908201906200034a565b838211156200037b5760008385830101525b9695505050505050565b6000806000606084860312156200039b57600080fd5b835160208501519093506001600160401b0380821115620003bb57600080fd5b620003c987838801620002ce565b93506040860151915080821115620003e057600080fd5b50620003ef86828701620002ce565b9150509250925092565b600082198211156200041b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200043557607f821691505b602082108114156200045757634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e051610100516101205161168a620004ad6000396000610ce401526000610d3301526000610d0e01526000610c6701526000610c9101526000610cbb015261168a6000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d714610212578063a9059cbb14610225578063d505accf14610238578063dd62ed3e1461024b57600080fd5b806370a08231146101ae57806379cc6790146101e45780637ecebe00146101f757806395d89b411461020a57600080fd5b8063313ce567116100d3578063313ce5671461016f5780633644e5151461017e578063395093511461018657806342966c681461019957600080fd5b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014657806323b872dd1461015c575b600080fd5b61010d610291565b60405161011a919061139d565b60405180910390f35b610136610131366004611439565b610323565b604051901515815260200161011a565b61014e61033b565b60405190815260200161011a565b61013661016a366004611463565b61038b565b6040516012815260200161011a565b61014e6103af565b610136610194366004611439565b6103be565b6101ac6101a736600461149f565b61040a565b005b61014e6101bc3660046114b8565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6101ac6101f2366004611439565b610417565b61014e6102053660046114b8565b610430565b61010d61045d565b610136610220366004611439565b61046c565b610136610233366004611439565b610542565b6101ac6102463660046114d3565b610550565b61014e610259366004611546565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6060600380546102a090611579565b80601f01602080910402602001604051908101604052809291908181526020018280546102cc90611579565b80156103195780601f106102ee57610100808354040283529160200191610319565b820191906000526020600020905b8154815290600101906020018083116102fc57829003601f168201915b5050505050905090565b60003361033181858561070f565b5060019392505050565b60008061034760025490565b61dead600090815260208190527f44ad89ba62b98ff34f51403ac22759b55759460c0bb5521eb4b6ee3cff49cf83549192509061038490836115f6565b9392505050565b6000336103998582856108c3565b6103a485858561099a565b506001949350505050565b60006103b9610c4d565b905090565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190610331908290869061040590879061160d565b61070f565b6104143382610d81565b50565b6104228233836108c3565b61042c8282610d81565b5050565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600560205260408120545b92915050565b6060600480546102a090611579565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919083811015610535576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6103a4828686840361070f565b60003361033181858561099a565b834211156105ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015260640161052c565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886105e98c610f66565b60408051602081019690965273ffffffffffffffffffffffffffffffffffffffff94851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061065182610f9b565b9050600061066182878787611004565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146106f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015260640161052c565b6107038a8a8a61070f565b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166107b1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161052c565b73ffffffffffffffffffffffffffffffffffffffff8216610854576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161052c565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146109945781811015610987576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161052c565b610994848484840361070f565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610a3d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161052c565b73ffffffffffffffffffffffffffffffffffffffff8216610ae0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161052c565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610b96576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161052c565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220858503905591851681529081208054849290610bda90849061160d565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c4091815260200190565b60405180910390a3610994565b60003073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016148015610cb357507f000000000000000000000000000000000000000000000000000000000000000046145b15610cdd57507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b73ffffffffffffffffffffffffffffffffffffffff8216610e24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161052c565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090205481811015610eda576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f6365000000000000000000000000000000000000000000000000000000000000606482015260840161052c565b73ffffffffffffffffffffffffffffffffffffffff83166000908152602081905260408120838303905560028054849290610f169084906115f6565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016108b6565b73ffffffffffffffffffffffffffffffffffffffff811660009081526005602052604090208054600181018255905b50919050565b6000610457610fa8610c4d565b836040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60008060006110158787878761102c565b9150915061102281611144565b5095945050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611063575060009050600361113b565b8460ff16601b1415801561107b57508460ff16601c14155b1561108c575060009050600461113b565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156110e0573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166111345760006001925092505061113b565b9150600090505b94509492505050565b600081600481111561115857611158611625565b14156111615750565b600181600481111561117557611175611625565b14156111dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161052c565b60028160048111156111f1576111f1611625565b1415611259576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161052c565b600381600481111561126d5761126d611625565b14156112fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f7565000000000000000000000000000000000000000000000000000000000000606482015260840161052c565b600481600481111561130f5761130f611625565b1415610414576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c60448201527f7565000000000000000000000000000000000000000000000000000000000000606482015260840161052c565b600060208083528351808285015260005b818110156113ca578581018301518582016040015282016113ae565b818111156113dc576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461143457600080fd5b919050565b6000806040838503121561144c57600080fd5b61145583611410565b946020939093013593505050565b60008060006060848603121561147857600080fd5b61148184611410565b925061148f60208501611410565b9150604084013590509250925092565b6000602082840312156114b157600080fd5b5035919050565b6000602082840312156114ca57600080fd5b61038482611410565b600080600080600080600060e0888a0312156114ee57600080fd5b6114f788611410565b965061150560208901611410565b95506040880135945060608801359350608088013560ff8116811461152957600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561155957600080fd5b61156283611410565b915061157060208401611410565b90509250929050565b600181811c9082168061158d57607f821691505b60208210811415610f95577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015611608576116086115c7565b500390565b60008219821115611620576116206115c7565b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea26469706673582212203ce8cd25c3a7e90d5209f1be2ce8290f67680b148404f1f53f7d795326d7cb8564736f6c63430008090033";
const isSuperArgs = (xs) => xs.length > 1;
class Token__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(initialSupply, name, symbol, overrides) {
        return super.deploy(initialSupply, name, symbol, overrides || {});
    }
    getDeployTransaction(initialSupply, name, symbol, overrides) {
        return super.getDeployTransaction(initialSupply, name, symbol, overrides || {});
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
exports.Token__factory = Token__factory;
Token__factory.bytecode = _bytecode;
Token__factory.abi = _abi;