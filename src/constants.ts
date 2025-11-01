interface ContractsConfig {
    [chainId: number]: {
        pixelArtNft: string
    }
}

export const chainsToContracts: ContractsConfig = {
    // Anvil local
    31337: {
        pixelArtNft: "0x0ABC3a0926870a6bD1eEE59fdC59839Cd9C00ED0",
    },
    // Sepolia
    11155111: {
        pixelArtNft: "0x0ABC3a0926870a6bD1eEE59fdC59839Cd9C00ED0",
    },
    // Base Sepolia
    84532: {
        pixelArtNft: "0x0ABC3a0926870a6bD1eEE59fdC59839Cd9C00ED0",
    },
    // Ethereum Mainnet
    1: {
        pixelArtNft: "0x0ABC3a0926870a6bD1eEE59fdC59839Cd9C00ED0",
    },
}

export const erc20Abi = [
    {
        type: "function",
        name: "allowance",
        inputs: [
            {
                name: "owner",
                type: "address",
                internalType: "address",
            },
            {
                name: "spender",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "approve",
        inputs: [
            {
                name: "spender",
                type: "address",
                internalType: "address",
            },
            {
                name: "value",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "balanceOf",
        inputs: [
            {
                name: "account",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "decimals",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint8",
                internalType: "uint8",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "name",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "symbol",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "totalSupply",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "transfer",
        inputs: [
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "value",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "transferFrom",
        inputs: [
            {
                name: "from",
                type: "address",
                internalType: "address",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "value",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "Approval",
        inputs: [
            {
                name: "owner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "spender",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "value",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Transfer",
        inputs: [
            {
                name: "from",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "to",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "value",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "ERC20InsufficientAllowance",
        inputs: [
            {
                name: "spender",
                type: "address",
                internalType: "address",
            },
            {
                name: "allowance",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "needed",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "ERC20InsufficientBalance",
        inputs: [
            {
                name: "sender",
                type: "address",
                internalType: "address",
            },
            {
                name: "balance",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "needed",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "ERC20InvalidApprover",
        inputs: [
            {
                name: "approver",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC20InvalidReceiver",
        inputs: [
            {
                name: "receiver",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC20InvalidSender",
        inputs: [
            {
                name: "sender",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC20InvalidSpender",
        inputs: [
            {
                name: "spender",
                type: "address",
                internalType: "address",
            },
        ],
    },
]

export const marketplaceAbi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "paymentToken",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "buyItem",
        inputs: [
            {
                name: "nftAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "cancelListing",
        inputs: [
            {
                name: "nftAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "getListing",
        inputs: [
            {
                name: "nftAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct NftMarketplace.Listing",
                components: [
                    {
                        name: "price",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "seller",
                        type: "address",
                        internalType: "address",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getPaymentToken",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getProceeds",
        inputs: [
            {
                name: "seller",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "listItem",
        inputs: [
            {
                name: "nftAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "price",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "updateListing",
        inputs: [
            {
                name: "nftAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "newPrice",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "withdrawProceeds",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "ItemBought",
        inputs: [
            {
                name: "buyer",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "nftAddress",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
            {
                name: "price",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "ItemCanceled",
        inputs: [
            {
                name: "seller",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "nftAddress",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "ItemListed",
        inputs: [
            {
                name: "seller",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "nftAddress",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
            {
                name: "price",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "AlreadyListed",
        inputs: [
            {
                name: "nftAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "ItemNotForSale",
        inputs: [
            {
                name: "nftAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "NoProceeds",
        inputs: [],
    },
    {
        type: "error",
        name: "NotApprovedForMarketplace",
        inputs: [],
    },
    {
        type: "error",
        name: "NotListed",
        inputs: [
            {
                name: "nftAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "NotOwner",
        inputs: [],
    },
    {
        type: "error",
        name: "PriceMustBeAboveZero",
        inputs: [],
    },
    {
        type: "error",
        name: "ReentrancyGuardReentrantCall",
        inputs: [],
    },
    {
        type: "error",
        name: "SafeERC20FailedOperation",
        inputs: [
            {
                name: "token",
                type: "address",
                internalType: "address",
            },
        ],
    },
]

export const cakeAbi = [
    {
        type: "constructor",
        inputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "approve",
        inputs: [
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "bakeCake",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "balanceOf",
        inputs: [
            {
                name: "owner",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "createSvgCakeFromSeed",
        inputs: [
            {
                name: "cakeSeed",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "generateColorFromSeed",
        inputs: [
            {
                name: "seed",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "getApproved",
        inputs: [
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getTokenCounter",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "isApprovedForAll",
        inputs: [
            {
                name: "owner",
                type: "address",
                internalType: "address",
            },
            {
                name: "operator",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "name",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "owner",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "ownerOf",
        inputs: [
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "renounceOwnership",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "safeTransferFrom",
        inputs: [
            {
                name: "from",
                type: "address",
                internalType: "address",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "safeTransferFrom",
        inputs: [
            {
                name: "from",
                type: "address",
                internalType: "address",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "setApprovalForAll",
        inputs: [
            {
                name: "operator",
                type: "address",
                internalType: "address",
            },
            {
                name: "approved",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "supportsInterface",
        inputs: [
            {
                name: "interfaceId",
                type: "bytes4",
                internalType: "bytes4",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "svgToImageURI",
        inputs: [
            {
                name: "svg",
                type: "string",
                internalType: "string",
            },
        ],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "symbol",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "tokenURI",
        inputs: [
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "transferFrom",
        inputs: [
            {
                name: "from",
                type: "address",
                internalType: "address",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "transferOwnership",
        inputs: [
            {
                name: "newOwner",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "Approval",
        inputs: [
            {
                name: "owner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "approved",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "ApprovalForAll",
        inputs: [
            {
                name: "owner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "operator",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "approved",
                type: "bool",
                indexed: false,
                internalType: "bool",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "CreatedNFT",
        inputs: [
            {
                name: "tokenId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OwnershipTransferred",
        inputs: [
            {
                name: "previousOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "newOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Transfer",
        inputs: [
            {
                name: "from",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "to",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "ERC721IncorrectOwner",
        inputs: [
            {
                name: "sender",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "owner",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC721InsufficientApproval",
        inputs: [
            {
                name: "operator",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "ERC721InvalidApprover",
        inputs: [
            {
                name: "approver",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC721InvalidOperator",
        inputs: [
            {
                name: "operator",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC721InvalidOwner",
        inputs: [
            {
                name: "owner",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC721InvalidReceiver",
        inputs: [
            {
                name: "receiver",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC721InvalidSender",
        inputs: [
            {
                name: "sender",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC721Metadata__URI_QueryFor_NonExistentToken",
        inputs: [],
    },
    {
        type: "error",
        name: "ERC721NonexistentToken",
        inputs: [
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "OwnableInvalidOwner",
        inputs: [
            {
                name: "owner",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "OwnableUnauthorizedAccount",
        inputs: [
            {
                name: "account",
                type: "address",
                internalType: "address",
            },
        ],
    },
]

export const nftAbi = [
    {
        type: "function",
        name: "approve",
        inputs: [
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "balanceOf",
        inputs: [
            {
                name: "owner",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getApproved",
        inputs: [
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "isApprovedForAll",
        inputs: [
            {
                name: "owner",
                type: "address",
                internalType: "address",
            },
            {
                name: "operator",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "name",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "ownerOf",
        inputs: [
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "safeTransferFrom",
        inputs: [
            {
                name: "from",
                type: "address",
                internalType: "address",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "safeTransferFrom",
        inputs: [
            {
                name: "from",
                type: "address",
                internalType: "address",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "setApprovalForAll",
        inputs: [
            {
                name: "operator",
                type: "address",
                internalType: "address",
            },
            {
                name: "approved",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "supportsInterface",
        inputs: [
            {
                name: "interfaceId",
                type: "bytes4",
                internalType: "bytes4",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "symbol",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "tokenURI",
        inputs: [
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "transferFrom",
        inputs: [
            {
                name: "from",
                type: "address",
                internalType: "address",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "Approval",
        inputs: [
            {
                name: "owner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "approved",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "ApprovalForAll",
        inputs: [
            {
                name: "owner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "operator",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "approved",
                type: "bool",
                indexed: false,
                internalType: "bool",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Transfer",
        inputs: [
            {
                name: "from",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "to",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "ERC721IncorrectOwner",
        inputs: [
            {
                name: "sender",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "owner",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC721InsufficientApproval",
        inputs: [
            {
                name: "operator",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "ERC721InvalidApprover",
        inputs: [
            {
                name: "approver",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC721InvalidOperator",
        inputs: [
            {
                name: "operator",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC721InvalidOwner",
        inputs: [
            {
                name: "owner",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC721InvalidReceiver",
        inputs: [
            {
                name: "receiver",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC721InvalidSender",
        inputs: [
            {
                name: "sender",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC721NonexistentToken",
        inputs: [
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
]

export const pixelArtNftAbi = [
    {
        inputs: [{ internalType: "address", name: "initialOwner", type: "address" }],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            { internalType: "address", name: "sender", type: "address" },
            { internalType: "uint256", name: "balance", type: "uint256" },
            { internalType: "uint256", name: "needed", type: "uint256" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        name: "ERC1155InsufficientBalance",
        type: "error",
    },
    {
        inputs: [{ internalType: "address", name: "approver", type: "address" }],
        name: "ERC1155InvalidApprover",
        type: "error",
    },
    {
        inputs: [
            { internalType: "uint256", name: "idsLength", type: "uint256" },
            { internalType: "uint256", name: "valuesLength", type: "uint256" },
        ],
        name: "ERC1155InvalidArrayLength",
        type: "error",
    },
    {
        inputs: [{ internalType: "address", name: "operator", type: "address" }],
        name: "ERC1155InvalidOperator",
        type: "error",
    },
    {
        inputs: [{ internalType: "address", name: "receiver", type: "address" }],
        name: "ERC1155InvalidReceiver",
        type: "error",
    },
    {
        inputs: [{ internalType: "address", name: "sender", type: "address" }],
        name: "ERC1155InvalidSender",
        type: "error",
    },
    {
        inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "address", name: "owner", type: "address" },
        ],
        name: "ERC1155MissingApprovalForAll",
        type: "error",
    },
    {
        inputs: [{ internalType: "address", name: "owner", type: "address" }],
        name: "OwnableInvalidOwner",
        type: "error",
    },
    {
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "OwnableUnauthorizedAccount",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "address", name: "account", type: "address" },
            { indexed: true, internalType: "address", name: "operator", type: "address" },
            { indexed: false, internalType: "bool", name: "approved", type: "bool" },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
            { indexed: true, internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "address", name: "operator", type: "address" },
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
            { indexed: false, internalType: "uint256[]", name: "ids", type: "uint256[]" },
            { indexed: false, internalType: "uint256[]", name: "values", type: "uint256[]" },
        ],
        name: "TransferBatch",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "address", name: "operator", type: "address" },
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
            { indexed: false, internalType: "uint256", name: "id", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "TransferSingle",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, internalType: "string", name: "value", type: "string" },
            { indexed: true, internalType: "uint256", name: "id", type: "uint256" },
        ],
        name: "URI",
        type: "event",
    },
    {
        inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "uint256", name: "id", type: "uint256" },
        ],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address[]", name: "accounts", type: "address[]" },
            { internalType: "uint256[]", name: "ids", type: "uint256[]" },
        ],
        name: "balanceOfBatch",
        outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "creators",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "editionPrices",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "address", name: "operator", type: "address" },
        ],
        name: "isApprovedForAll",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "maxSupplies",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
        name: "mintEdition",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "bytes", name: "_pixelData", type: "bytes" },
            { internalType: "uint256", name: "_editionPrice", type: "uint256" },
            { internalType: "uint256", name: "_maxSupply", type: "uint256" },
        ],
        name: "mintNew",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "nextId",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "platformFee",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256[]", name: "ids", type: "uint256[]" },
            { internalType: "uint256[]", name: "values", type: "uint256[]" },
            { internalType: "bytes", name: "data", type: "bytes" },
        ],
        name: "safeBatchTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "id", type: "uint256" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "bytes", name: "data", type: "bytes" },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "bool", name: "approved", type: "bool" },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "_fee", type: "uint256" }],
        name: "setPlatformFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
        name: "supportsInterface",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "totalSupplies",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
        name: "uri",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
    },
] as const
