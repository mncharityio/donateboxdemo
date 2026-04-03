import type { Crypto } from "./types"; 
import btc from "./assets/btc.svg";
import eth from "./assets/eth.svg";
import ltc from "./assets/ltc.svg";
import doge from "./assets/doge.svg";
import trx from "./assets/trx.svg";
import bch from "./assets/bch.svg";
import sol from "./assets/sol.svg";

export const cryptos: Crypto[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    address: "1JC6s8RyHuVM8RJu7Rh839Wux1H2bVwNxT",
    icon: btc
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    address: "0x6460AC89A9b9d861C2211081b2B79f69f10C129F",
    icon: eth
  },
  {
    name: "Litecoin",
    symbol: "LTC",
    address: "Lbu8Bnkp7MJEB8ksrc34Wwz9obeT6jmXDc",
    icon: ltc
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    address: "DCeviGVcndAYSBbT68btMo7vqkCGyRw6W6",
    icon: doge
  },
  {
    name: "Troncoin",
    symbol: "TRX",
    address: "TFxxUbb2igjBHeQ1HxFgKgZE7yosH85iCb",
    icon: trx
  },
  {
    name: "Bitcoin Cash",
    symbol: "BCH",
    address: "qqj4ac6klm6ghc8ku53ly3fwrpnjkv88ac04ucd2yw",
    icon: bch
  },
  {
    name: "Solana",
    symbol: "SOL",
    address: "EYbYKHrPj8m4sNiHeA3P784n3uULGXyZtvFCHEEoNoWJ",
    icon: sol
  }
];