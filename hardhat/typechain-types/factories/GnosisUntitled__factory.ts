/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BigNumberish,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  GnosisUntitled,
  GnosisUntitledInterface,
} from "../GnosisUntitled";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "signers",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_quorum",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "txIndex",
        type: "uint256",
      },
    ],
    name: "ConfirmTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "txIndex",
        type: "uint256",
      },
    ],
    name: "ExecuteTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "txIndex",
        type: "uint256",
      },
    ],
    name: "RevokeConfirmation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "txIndex",
        type: "uint256",
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
      {
        indexed: false,
        internalType: "enum GnosisUntitled.TxType",
        name: "txType",
        type: "uint8",
      },
    ],
    name: "SubmitTransaction",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txIndex",
        type: "uint256",
      },
    ],
    name: "confirmTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txIndex",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txIndex",
        type: "uint256",
      },
    ],
    name: "getTransaction",
    outputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "numConfirmations",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTransactionCount",
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
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isConfirmed",
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
        name: "",
        type: "address",
      },
    ],
    name: "isSigner",
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
    name: "nonce",
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
    inputs: [],
    name: "quorum",
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
        name: "_txIndex",
        type: "uint256",
      },
    ],
    name: "revokeConfirmation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "signerCount",
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
        name: "_newSigner",
        type: "address",
      },
    ],
    name: "submitNewSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "submitSendBytecode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "submitValueTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040526001600355604051620029703803806200297083398181016040528101906200002e919062000409565b6000811162000074576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200006b90620004d0565b60405180910390fd5b6000825111620000bb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000b29062000542565b60405180910390fd5b6000825190508060028190555060005b81811015620001cf576000848281518110620000ec57620000eb62000564565b5b60200260200101519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362000168576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200015f90620005e3565b60405180910390fd5b6001600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550508080600101915050620000cb565b508160048190555050505062000605565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200024482620001f9565b810181811067ffffffffffffffff821117156200026657620002656200020a565b5b80604052505050565b60006200027b620001e0565b905062000289828262000239565b919050565b600067ffffffffffffffff821115620002ac57620002ab6200020a565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002ef82620002c2565b9050919050565b6200030181620002e2565b81146200030d57600080fd5b50565b6000815190506200032181620002f6565b92915050565b60006200033e62000338846200028e565b6200026f565b90508083825260208201905060208402830185811115620003645762000363620002bd565b5b835b818110156200039157806200037c888262000310565b84526020840193505060208101905062000366565b5050509392505050565b600082601f830112620003b357620003b2620001f4565b5b8151620003c584826020860162000327565b91505092915050565b6000819050919050565b620003e381620003ce565b8114620003ef57600080fd5b50565b6000815190506200040381620003d8565b92915050565b60008060408385031215620004235762000422620001ea565b5b600083015167ffffffffffffffff811115620004445762000443620001ef565b5b62000452858286016200039b565b92505060206200046585828601620003f2565b9150509250929050565b600082825260208201905092915050565b7f71756f72756d206d757374206265203e20302000000000000000000000000000600082015250565b6000620004b86013836200046f565b9150620004c58262000480565b602082019050919050565b60006020820190508181036000830152620004eb81620004a9565b9050919050565b7f6d757374206265206174206c656173742031207369676e657200000000000000600082015250565b60006200052a6019836200046f565b91506200053782620004f2565b602082019050919050565b600060208201905081810360008301526200055d816200051b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f5369676e65722063616e6e6f7420626520616464726573732830290000000000600082015250565b6000620005cb601b836200046f565b9150620005d88262000593565b602082019050919050565b60006020820190508181036000830152620005fe81620005bc565b9050919050565b61235b80620006156000396000f3fe6080604052600436106100c65760003560e01c80637ca548c61161007f578063ac36862a11610059578063ac36862a146102d9578063affed0e014610302578063c01a8c841461032d578063ee22610b146103565761011d565b80637ca548c6146102345780637df73e271461025f57806380f59a651461029c5761011d565b80631703a0181461012257806320ea8d861461014d5780632e7700f01461017657806333ea3dc8146101a157806336881d91146101e25780636f7853a51461020b5761011d565b3661011d573373ffffffffffffffffffffffffffffffffffffffff167f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a15344760405161011392919061142a565b60405180910390a2005b600080fd5b34801561012e57600080fd5b5061013761037f565b6040516101449190611453565b60405180910390f35b34801561015957600080fd5b50610174600480360381019061016f91906114ae565b610385565b005b34801561018257600080fd5b5061018b61065d565b6040516101989190611453565b60405180910390f35b3480156101ad57600080fd5b506101c860048036038101906101c391906114ae565b61066a565b6040516101d99594939291906115c7565b60405180910390f35b3480156101ee57600080fd5b506102096004803603810190610204919061164d565b61077d565b005b34801561021757600080fd5b50610232600480360381019061022d919061168d565b61092f565b005b34801561024057600080fd5b50610249610a5a565b6040516102569190611453565b60405180910390f35b34801561026b57600080fd5b506102866004803603810190610281919061168d565b610a60565b60405161029391906116ba565b60405180910390f35b3480156102a857600080fd5b506102c360048036038101906102be91906116d5565b610a80565b6040516102d091906116ba565b60405180910390f35b3480156102e557600080fd5b5061030060048036038101906102fb919061184a565b610aaf565b005b34801561030e57600080fd5b50610317610c00565b6040516103249190611453565b60405180910390f35b34801561033957600080fd5b50610354600480360381019061034f91906114ae565b610c06565b005b34801561036257600080fd5b5061037d600480360381019061037891906114ae565b610ee1565b005b60045481565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610411576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040890611916565b60405180910390fd5b806001805490508110610459576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045090611982565b60405180910390fd5b816001818154811061046e5761046d6119a2565b5b906000526020600020906007020160040160009054906101000a900460ff16156104cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c490611a1d565b60405180910390fd5b6000600184815481106104e3576104e26119a2565b5b9060005260206000209060070201905060008085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661058f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058690611a89565b60405180910390fd5b60018160050160008282546105a49190611ad8565b92505081905550600080600086815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550833373ffffffffffffffffffffffffffffffffffffffff167ff0dca620e2e81f7841d07bcc105e1704fb01475b278a9d4c236e1c62945edd5560405160405180910390a350505050565b6000600180549050905090565b6000806060600080600060018781548110610688576106876119a2565b5b906000526020600020906007020190508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160020154826003018360040160009054906101000a900460ff1684600501548280546106e990611b3b565b80601f016020809104026020016040519081016040528092919081815260200182805461071590611b3b565b80156107625780601f1061073757610100808354040283529160200191610762565b820191906000526020600020905b81548152906001019060200180831161074557829003601f168201915b50505050509250955095509550955095505091939590929450565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610809576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080090611916565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610878576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086f90611bb8565b60405180910390fd5b600081036108bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b290611c24565b60405180910390fd5b804710156108fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f590611cb6565b60405180910390fd5b61092b828260006040516020016109159190611cf7565b60405160208183030381529060405260006111d9565b5050565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166109bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b290611916565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a2a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2190611d5e565b60405180910390fd5b610a5781600080604051602001610a419190611cf7565b60405160208183030381529060405260026111d9565b50565b60025481565b60056020528060005260406000206000915054906101000a900460ff1681565b60006020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610b3b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3290611916565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610baa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba190611bb8565b60405180910390fd5b6000815111610bee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be590611dca565b60405180910390fd5b610bfb83838360016111d9565b505050565b60035481565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610c92576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8990611916565b60405180910390fd5b806001805490508110610cda576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd190611982565b60405180910390fd5b8160018181548110610cef57610cee6119a2565b5b906000526020600020906007020160040160009054906101000a900460ff1615610d4e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4590611a1d565b60405180910390fd5b8260008082815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610dec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de390611e36565b60405180910390fd5b600060018581548110610e0257610e016119a2565b5b906000526020600020906007020190506001816005016000828254610e279190611e56565b92505081905550600160008087815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550843373ffffffffffffffffffffffffffffffffffffffff167f5cbe105e36805f7820e291f799d5794ff948af2a5f664e580382defb6339004160405160405180910390a35050505050565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610f6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f6490611916565b60405180910390fd5b806001805490508110610fb5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fac90611982565b60405180910390fd5b8160018181548110610fca57610fc96119a2565b5b906000526020600020906007020160040160009054906101000a900460ff1615611029576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161102090611a1d565b60405180910390fd5b60006001848154811061103f5761103e6119a2565b5b9060005260206000209060070201905060045481600501541015611098576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108f90611ed6565b60405180910390fd5b60018160040160006101000a81548160ff02191690831515021790555060008160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168260020154836003016040516111089190611f99565b60006040518083038185875af1925050503d8060008114611145576040519150601f19603f3d011682016040523d82523d6000602084013e61114a565b606091505b505090508061118e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161118590611ffc565b60405180910390fd5b843373ffffffffffffffffffffffffffffffffffffffff167f5445f318f4f5fcfb66592e68e0cc5822aa15664039bd5f0ffde24c5a8142b1ac60405160405180910390a35050505050565b6000600180549050905060016040518060e001604052808381526020018773ffffffffffffffffffffffffffffffffffffffff168152602001868152602001858152602001600015158152602001600181526020018460028111156112415761124061201c565b5b81525090806001815401808255809150506001900390600052602060002090600702016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030190816112dd91906121e2565b5060808201518160040160006101000a81548160ff02191690831515021790555060a0820151816005015560c08201518160060160006101000a81548160ff021916908360028111156113335761133261201c565b5b02179055505050600160008083815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508473ffffffffffffffffffffffffffffffffffffffff16813373ffffffffffffffffffffffffffffffffffffffff167ff184e47ed04feee43669e05ec04ea91a7248bbfecaeb6ba6573a6446e9a05ce287866040516114029291906122fc565b60405180910390a45050505050565b6000819050919050565b61142481611411565b82525050565b600060408201905061143f600083018561141b565b61144c602083018461141b565b9392505050565b6000602082019050611468600083018461141b565b92915050565b6000604051905090565b600080fd5b600080fd5b61148b81611411565b811461149657600080fd5b50565b6000813590506114a881611482565b92915050565b6000602082840312156114c4576114c3611478565b5b60006114d284828501611499565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611506826114db565b9050919050565b611516816114fb565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561155657808201518184015260208101905061153b565b60008484015250505050565b6000601f19601f8301169050919050565b600061157e8261151c565b6115888185611527565b9350611598818560208601611538565b6115a181611562565b840191505092915050565b60008115159050919050565b6115c1816115ac565b82525050565b600060a0820190506115dc600083018861150d565b6115e9602083018761141b565b81810360408301526115fb8186611573565b905061160a60608301856115b8565b611617608083018461141b565b9695505050505050565b61162a816114fb565b811461163557600080fd5b50565b60008135905061164781611621565b92915050565b6000806040838503121561166457611663611478565b5b600061167285828601611638565b925050602061168385828601611499565b9150509250929050565b6000602082840312156116a3576116a2611478565b5b60006116b184828501611638565b91505092915050565b60006020820190506116cf60008301846115b8565b92915050565b600080604083850312156116ec576116eb611478565b5b60006116fa85828601611499565b925050602061170b85828601611638565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61175782611562565b810181811067ffffffffffffffff821117156117765761177561171f565b5b80604052505050565b600061178961146e565b9050611795828261174e565b919050565b600067ffffffffffffffff8211156117b5576117b461171f565b5b6117be82611562565b9050602081019050919050565b82818337600083830152505050565b60006117ed6117e88461179a565b61177f565b9050828152602081018484840111156118095761180861171a565b5b6118148482856117cb565b509392505050565b600082601f83011261183157611830611715565b5b81356118418482602086016117da565b91505092915050565b60008060006060848603121561186357611862611478565b5b600061187186828701611638565b935050602061188286828701611499565b925050604084013567ffffffffffffffff8111156118a3576118a261147d565b5b6118af8682870161181c565b9150509250925092565b600082825260208201905092915050565b7f6f6e6c79207369676e65722063616e2065786563757465000000000000000000600082015250565b60006119006017836118b9565b915061190b826118ca565b602082019050919050565b6000602082019050818103600083015261192f816118f3565b9050919050565b7f747820646f6573206e6f74206578697374000000000000000000000000000000600082015250565b600061196c6011836118b9565b915061197782611936565b602082019050919050565b6000602082019050818103600083015261199b8161195f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f747820616c726561647920657865637574656400000000000000000000000000600082015250565b6000611a076013836118b9565b9150611a12826119d1565b602082019050919050565b60006020820190508181036000830152611a36816119fa565b9050919050565b7f7478206e6f7420636f6e6669726d656400000000000000000000000000000000600082015250565b6000611a736010836118b9565b9150611a7e82611a3d565b602082019050919050565b60006020820190508181036000830152611aa281611a66565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611ae382611411565b9150611aee83611411565b9250828203905081811115611b0657611b05611aa9565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611b5357607f821691505b602082108103611b6657611b65611b0c565b5b50919050565b7f63616e6e6f742073656e6420746f206e6f776865726500000000000000000000600082015250565b6000611ba26016836118b9565b9150611bad82611b6c565b602082019050919050565b60006020820190508181036000830152611bd181611b95565b9050919050565b7f63616e6e6f742073656e6420656d707479207478000000000000000000000000600082015250565b6000611c0e6014836118b9565b9150611c1982611bd8565b602082019050919050565b60006020820190508181036000830152611c3d81611c01565b9050919050565b7f63616e6e6f742070726f706f73652073656e64696e67206d6f7265207468616e60008201527f2073616665206861730000000000000000000000000000000000000000000000602082015250565b6000611ca06029836118b9565b9150611cab82611c44565b604082019050919050565b60006020820190508181036000830152611ccf81611c93565b9050919050565b6000819050919050565b611cf1611cec82611411565b611cd6565b82525050565b6000611d038284611ce0565b60208201915081905092915050565b7f5369676e65722063616e6e6f7420626520616464726573732830290000000000600082015250565b6000611d48601b836118b9565b9150611d5382611d12565b602082019050919050565b60006020820190508181036000830152611d7781611d3b565b9050919050565b7f63616e6e6f742073656e64206e756c6c20747800000000000000000000000000600082015250565b6000611db46013836118b9565b9150611dbf82611d7e565b602082019050919050565b60006020820190508181036000830152611de381611da7565b9050919050565b7f747820616c726561647920636f6e6669726d6564000000000000000000000000600082015250565b6000611e206014836118b9565b9150611e2b82611dea565b602082019050919050565b60006020820190508181036000830152611e4f81611e13565b9050919050565b6000611e6182611411565b9150611e6c83611411565b9250828201905080821115611e8457611e83611aa9565b5b92915050565b7f63616e6e6f742065786563757465207478000000000000000000000000000000600082015250565b6000611ec06011836118b9565b9150611ecb82611e8a565b602082019050919050565b60006020820190508181036000830152611eef81611eb3565b9050919050565b600081905092915050565b60008190508160005260206000209050919050565b60008154611f2381611b3b565b611f2d8186611ef6565b94506001821660008114611f485760018114611f5d57611f90565b60ff1983168652811515820286019350611f90565b611f6685611f01565b60005b83811015611f8857815481890152600182019150602081019050611f69565b838801955050505b50505092915050565b6000611fa58284611f16565b915081905092915050565b7f7478206661696c65640000000000000000000000000000000000000000000000600082015250565b6000611fe66009836118b9565b9150611ff182611fb0565b602082019050919050565b6000602082019050818103600083015261201581611fd9565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60006020601f8301049050919050565b600082821b905092915050565b6000600883026120987fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261205b565b6120a2868361205b565b95508019841693508086168417925050509392505050565b6000819050919050565b60006120df6120da6120d584611411565b6120ba565b611411565b9050919050565b6000819050919050565b6120f9836120c4565b61210d612105826120e6565b848454612068565b825550505050565b600090565b612122612115565b61212d8184846120f0565b505050565b5b818110156121515761214660008261211a565b600181019050612133565b5050565b601f8211156121965761216781611f01565b6121708461204b565b8101602085101561217f578190505b61219361218b8561204b565b830182612132565b50505b505050565b600082821c905092915050565b60006121b96000198460080261219b565b1980831691505092915050565b60006121d283836121a8565b9150826002028217905092915050565b6121eb8261151c565b67ffffffffffffffff8111156122045761220361171f565b5b61220e8254611b3b565b612219828285612155565b600060209050601f83116001811461224c576000841561223a578287015190505b61224485826121c6565b8655506122ac565b601f19841661225a86611f01565b60005b828110156122825784890151825560018201915060208501945060208101905061225d565b8683101561229f578489015161229b601f8916826121a8565b8355505b6001600288020188555050505b505050505050565b600381106122c5576122c461201c565b5b50565b60008190506122d6826122b4565b919050565b60006122e6826122c8565b9050919050565b6122f6816122db565b82525050565b6000604082019050612311600083018561141b565b61231e60208301846122ed565b939250505056fea2646970667358221220ca59148406628104b7ead9703bdb7811d621513d85e893afb7ed145b3bd1c84e64736f6c63430008120033";

type GnosisUntitledConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GnosisUntitledConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GnosisUntitled__factory extends ContractFactory {
  constructor(...args: GnosisUntitledConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    signers: PromiseOrValue<string>[],
    _quorum: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<GnosisUntitled> {
    return super.deploy(
      signers,
      _quorum,
      overrides || {}
    ) as Promise<GnosisUntitled>;
  }
  override getDeployTransaction(
    signers: PromiseOrValue<string>[],
    _quorum: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(signers, _quorum, overrides || {});
  }
  override attach(address: string): GnosisUntitled {
    return super.attach(address) as GnosisUntitled;
  }
  override connect(signer: Signer): GnosisUntitled__factory {
    return super.connect(signer) as GnosisUntitled__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GnosisUntitledInterface {
    return new utils.Interface(_abi) as GnosisUntitledInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GnosisUntitled {
    return new Contract(address, _abi, signerOrProvider) as GnosisUntitled;
  }
}
