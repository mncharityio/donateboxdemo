import type { Crypto } from "./types"; 

import btcIcon from "./assets/btc.svg";
import ethIcon from "./assets/eth.svg";
import ltcIcon from "./assets/ltc.svg";
import dogeIcon from "./assets/doge.svg";
import trxIcon from "./assets/trx.svg";
import bchIcon from "./assets/bch.svg";
import solIcon from "./assets/sol.svg";

export const cryptos: Crypto[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    address: "1JC6s8RyHuVM8RJu7Rh839Wux1H2bVwNxT",
    icon: "/assets/btc.svg"
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    address: "0x6460AC89A9b9d861C2211081b2B79f69f10C129F",
    icon: "/assets/eth.svg"
  },
  {
    name: "Litecoin",
    symbol: "LTC",
    address: "Lbu8Bnkp7MJEB8ksrc34Wwz9obeT6jmXDc",
    icon: "/assets/ltc.svg"
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    address: "DCeviGVcndAYSBbT68btMo7vqkCGyRw6W6",
    icon: "/assets/doge.svg"
  },
  {
    name: "Troncoin",
    symbol: "TRX",
    address: "TFxxUbb2igjBHeQ1HxFgKgZE7yosH85iCb",
    icon: "/assets/trx.svg"
  },
  {
    name: "Bitcoin Cash",
    symbol: "BCH",
    address: "qqj4ac6klm6ghc8ku53ly3fwrpnjkv88ac04ucd2yw",
    icon: "/assets/bch.svg"
  },
  {
    name: "Solana",
    symbol: "SOL",
    address: "EYbYKHrPj8m4sNiHeA3P784n3uULGXyZtvFCHEEoNoWJ",
    icon: "/assets/sol.svg"
  }
];