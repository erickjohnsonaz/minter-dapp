require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Coral Frag Hags";
const description = "A unique coral frag with mystical powers grown especially for you from the Metaverse Reef";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 51,
    layersOrder: [
      { name: "Founders Collection" },      
      { name: "Background" },
      { name: "Better Betty Fish Clowns" },
      { name: "Better Betty Fish Damsel Schools" },
      { name: "Better Betty Fish Three Stripes" },
      { name: "Better Betty Frag Plug" },
      { name: "Better Betty Body C" },
      { name: "Better Betty Body B" }, 
      { name: "Better Betty Body A" },  
      { name: "Better Betty Outline" }, 
      { name: "Better Betty Mouth" },
      { name: "Better Betty Eyes" },
      { name: "Better Betty Inverts" },
    ],
  },{
    growEditionSizeTo: 102,
    layersOrder: [
      { name: "Founders Collection" },      
       { name: "Background" },
      { name: "Chummy Charlie Fish Clowns" },
      { name: "Chummy Charlie Fish Damsel Schools" },
      { name: "Chummy Charlie Fish Three Stripes" },
      { name: "Chummy Charlie Frag Plug" },
      { name: "Chummy Charlie Body" },
      { name: "Chummy Charlie Outline" }, 
      { name: "Chummy Charlie Polyps" },
      { name: "Chummy Charlie Mouth" }, 
      { name: "Chummy Charlie Eyes" },
      { name: "Chummy Charlie Inverts" },
    ],
  },{
    growEditionSizeTo: 153,
    layersOrder: [
      { name: "Founders Collection" },      
       { name: "Background" },
      { name: "Freeky Fred Fish Clowns" },
      { name: "Freeky Fred Fish Damsel Schools" },
      { name: "Freeky Fred Fish Three Stripes" },
      { name: "Freeky Fred Frag Plug" },
      { name: "Freeky Fred Body" },
      { name: "Freeky Fred Polyps" }, 
      { name: "Freeky Fred Outline" },
      { name: "Freeky Fred Mouth" }, 
      { name: "Freeky Fred Mask" }, 
      { name: "Freeky Fred Eyes" },
      { name: "Freeky Fred Inverts" },
    ],
  },{
    growEditionSizeTo: 204,
    layersOrder: [
      { name: "Founders Collection" },      
       { name: "Background" },
      { name: "Happy Harold Fish Clowns" },
      { name: "Happy Harold Fish Damsel Schools" },
      { name: "Happy Harold Fish Three Stripes" },
      { name: "Happy Harold Frag Plug" },
      { name: "Happy Harold Body" },
      { name: "Happy Harold Outline" },
      { name: "Happy Harold Polyps" }, 
      { name: "Happy Harold Eyes" },
      { name: "Happy Harold Inverts" },
    ],  
  },{
      growEditionSizeTo: 255,
      layersOrder: [
        { name: "Founders Collection" },      
        { name: "Background" },
        { name: "Hearththrob Heather Fish Clowns" },
        { name: "Hearththrob Heather Fish Damsel Schools" },
        { name: "Hearththrob Heather Fish Three Stripes" },
        { name: "Hearththrob Heather Frag Plug" },
        { name: "Hearththrob Heather Body" },
        { name: "Hearththrob Heather Two Hands" },
        { name: "Hearththrob Heather Outline" }, 
        { name: "Hearththrob Heather Eyes" },
        { name: "Hearththrob Heather Inverts" },
      ],
    },{
      growEditionSizeTo: 306,
      layersOrder: [
        { name: "Founders Collection" },      
        { name: "Background" },
        { name: "Lucky Lucy Fish Clowns" },
        { name: "Lucky Lucy Fish Damsel Schools" },
        { name: "Lucky Lucy Fish Three Stripes" },
        { name: "Lucky Lucy Frag Plug" },
        { name: "Lucky Lucy Body" },
        { name: "Lucky Lucy Outline" },
        { name: "Lucky Lucy Mouth" }, 
        { name: "Lucky Lucy Eyes" },
        { name: "Lucky Lucy Inverts" },
      ],  
    },{
      growEditionSizeTo: 357,
      layersOrder: [
        { name: "Founders Collection" },      
        { name: "Background" },
        { name: "Mighty Mike Fish Clowns" },
        { name: "Mighty Mike Fish Damsel Schools" },
        { name: "Mighty Mike Fish Three Stripes" },
        { name: "Mighty Mike Frag Plug" },
        { name: "Mighty Mike Body" },
        { name: "Mighty Mike Polyps" }, 
        { name: "Mighty Mike Outline" },
        { name: "Mighty Mike Inverts" },
      ],  
    },{
      growEditionSizeTo: 408,
      layersOrder: [
        { name: "Founders Collection" },      
        { name: "Background" },
        { name: "Singing Sally Fish Clowns" },
        { name: "Singing Sally Fish Damsel Schools" },
        { name: "Singing Sally Fish Three Stripes" },
        { name: "Singing Sally Frag Plug" },
        { name: "Singing Sally Body" },
        { name: "Singing Sally Outline" },
        { name: "Singing Sally Polyps" }, 
        { name: "Singing Sally Mouth" }, 
        { name: "Singing Sally Eyes" },
        { name: "Singing Sally Inverts" },
      ],  
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 2400,
  height: 2400,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://CoralFragHags.xyz", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 10; // Your API key rate limit
const CHAIN = 'polygon'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'Coral Frag Hags';
const CONTRACT_SYMBOL = 'CFRAG';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0xc7DAC3a53e9cA94F4019DF02A9dd73Cc0D6c3BF6';
const TREASURY_ADDRESS = '0x8Ac7763762c7D8E11dFBb0a9884abd2339cED50e';
const MAX_SUPPLY = 12654 // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 5 // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 8; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-06-01T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-05-01T11:30:48+00:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 350; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x8601f19841D034d4e10CC463a5063007485EA444"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = [
  "0x6EB3920e8c6DB22Dd959F0ce2CeA88D6a753E775",
  "0x28e0E55fb37C1a3116e6cD8E67AE375b30B7f922",
  "0x4faa9452bffef91af7218f22fbfb00e8828bebad",
  "0x93BeD27f4DbF2669AbE5a44A389C15b481fF3Fe5",
  "0xA3069CFA9C0aA758965E29285b24090e816e2308",
  "0x53c667b2e06c3a88500441faf7933268d36c5955",
  "0x6EB3920e8c6DB22Dd959F0ce2CeA88D6a753E775",
  "0xa908d8ed3ef6b623e678484fad72ff5d076cca5a",
  "0x1e40eD4823E671b66DFFc1361D7A212bAb41F7E7",
  "0x5BBCEdd3440C148457988Fa1FdFB66FAAC05e9D0",
  "0x93c5c560D28f67ab84a116126A91429296497b0b",
  "0x436d70a4531872617f4c3f7c7dc4ae7fb0c01f2d",
  "0xc33586ff018b626596f3855270cc35552cd3d8d7",
  "0xebb3312f36befcc47a5c58421d578a245a7f3a49",
  "0x817ba4d187d039972b015a1761afab929c5570ab",
  "0x3876ab30fa2da8d35bc0f687c954cf116f2ea5da",
  "0xebcf567b673a1e1a1358c38b36e7384690dc7353",
  "0x248610bcf5b309886890d253BCd32B3cc25aF786",
  "0xa00734fd9f5dceb6752749863d1cec6080968974",
  "0x8ae0f3adee9bbeb1d9cf324c3c50a99420bc636f",
  "0x4973c6a9da7b307deee6de5a5557de2835dcda0a",
  "0xb9ce9c0d5203304c48e319c64e4c7e37bd20426d",
  "0xdc04c5e2d1e9f106188cf4088b49017821a1bdea",
  "0xc8cdef3540cbf054ade51b033d808db7621aed99",
  "0xd1e7ccb86fc82a3733f03cfe011b92015abc7b47",
  "0x0621A2F93e8Aac8b45D72586D1C63Fd936bD9d87",
  "0xAD1d0a652F230Efdc4b64d5c13D2155d2a9f2889",
  "0xD07707352fb109DD2614033bd5b4040b26EE86A4",
  "0x9525D91b55be06eC9c574E9517a4fD1D5eD6F348",
  "0x35d581D55bb9BEbD2DAB0DbBF2E0F0e8453E8EE0",
  "0x818889C36346BBD5922313d9461317b5486C9EE2",
  "0x0eE9Eb1F5Dd2FC4ccf9d492945d7f2d8643fB7FB",
  "0x57450AE268Cb9aF84317F676885E0dAd22073714",
  "0xebB3312f36bEfCC47A5C58421d578A245A7f3a49",
  "0x1c59C182968171159faE52a424d16242C7A7275c",
  "0xb7db8fbb6BD5976421dEc40b1d36A008ea9242f6",
  "0xffe1776cC05385ff8f1Df625B0353ad13C02b9bA",
  "0x4aBE57BB66c3891360d61d2F9F5A37C34ffaBf25",
  "0xefF53cdd84ce750A7B9f2687d9e209b759a94dF1",
  "0xE368b81e71D38C4368F5A65bB6A8Cba45FB33f18",
  "0x3b96235c69cef385158fBd0F28ca888Ea2f25869",
  "0x5B85e032f16761D4D0e583F897fD4dd95E734a26"
]; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "Which Coral Frag Hag NFT will you get?  Will it be one from the Founder's Collection?"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafybeia26g6jjks3fglaqyilvzqqqnusw7fj5xvitmramguxagxkyhzf6a"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "",
  creators: [
    {
      address: "",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
