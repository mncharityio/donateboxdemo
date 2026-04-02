import type { Crypto } from "./types"; 

import btcIcon from "./assets/btc.svg";
import ethIcon from "./assets/eth.svg";
import ltcIcon from "./assets/ltc.svg";
import dogeIcon from "./assets/doge.svg";

export const cryptos: Crypto[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    address: "1JC6s8RyHuVM8RJu7Rh839Wux1H2bVwNxT",
    icon: btcIcon
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    address: "0x6460AC89A9b9d861C2211081b2B79f69f10C129F",
    icon: ethIcon
  },
  {
    name: "Litecoin",
    symbol: "LTC",
    address: "Lbu8Bnkp7MJEB8ksrc34Wwz9obeT6jmXDc",
    icon: ltcIcon
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    address: "DCeviGVcndAYSBbT68btMo7vqkCGyRw6W6",
    icon: dogeIcon
  }
];