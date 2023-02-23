export type Network = {
  chaindId: number;
  name: string;
  blockExplorer?: string;
  factoryContractAddress: string;
  symbol: string;

  shortName: string;
};

export const networks: Network[] = [
  {
    chaindId: 1,
    name: "Mainnet",
    blockExplorer: "https://etherscan.io/",
    factoryContractAddress: "",
    symbol: "eth",
    shortName: "eth",
  },
  {
    chaindId: 5,
    name: "Goerli",
    blockExplorer: "https://goerli.etherscan.io/",
    factoryContractAddress: "0x7D8762Cf7330eD26880632739E3F8e1b3d02bd5d",
    symbol: "eth",
    shortName: "gor",
  },
  {
    chaindId: 11155111,
    name: "Sepolia",
    blockExplorer: "https://sepolia.etherscan.io/",
    factoryContractAddress: "0xDc7656F8D1ba85C2084A66c05031a800FC772c6E",
    symbol: "eth",
    shortName: "sep",
  },
  {
    chaindId: 31337,
    name: "Local Hardhat",
    factoryContractAddress: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
    symbol: "eth",
    shortName: "loc",
  },
];

export const undefinedNetwork: Network = {
  chaindId: 0,
  name: "Unknown Network",
  factoryContractAddress: "",
  symbol: "und",
  shortName: "und",
};

export function findNetworkById(chainId: number): Network {
  return (
    networks.find((network) => network.chaindId == chainId) ?? undefinedNetwork
  );
}
