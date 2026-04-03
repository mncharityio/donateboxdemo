import "./styles.css";
import QRCode from "qrcode";
import { cryptos } from "./donation";

const cryptoList = document.getElementById("cryptoList") as HTMLElement;
const qrCanvas = document.getElementById("qrCanvas") as HTMLCanvasElement;
const addressInput = document.getElementById("addressInput") as HTMLInputElement;
const cryptoTitle = document.getElementById("cryptoTitle") as HTMLElement;
const copyBtn = document.getElementById("copyBtn") as HTMLButtonElement;

let selectedCrypto = cryptos[0];

function renderCryptoButtons() {
  cryptoList.innerHTML = "";

  cryptos.forEach(crypto => {
    const btn = document.createElement("button");
    btn.className = "crypto-btn";

    btn.innerHTML = `
      <img src="${crypto.icon}" alt="${crypto.symbol}" />
      <span>${crypto.symbol}</span>
    `;

    if (crypto.symbol === selectedCrypto.symbol) {
      btn.classList.add("active");
    }

    btn.onclick = () => {
      selectedCrypto = crypto;
      updateUI();
    };

    cryptoList.appendChild(btn);
  });
}

async function updateUI() {
  cryptoTitle.textContent = selectedCrypto.name;
  addressInput.value = selectedCrypto.address;

  await QRCode.toCanvas(qrCanvas, selectedCrypto.address, {
    margin: 2,
    width: 220
  });

  const ctx = qrCanvas.getContext("2d");
  if (!ctx) return;

  const img = new Image();
  img.src = selectedCrypto.icon;

  img.onload = () => {
    const size = qrCanvas.width * 0.25;
    const x = (qrCanvas.width - size) / 2;
    const y = (qrCanvas.width - size) / 2;

    ctx.fillStyle = "white";
    ctx.fillRect(x - 4, y - 4, size + 8, size + 8);
    ctx.drawImage(img, x, y, size, size);
  };

  renderCryptoButtons();
}

copyBtn.addEventListener("click", async () => {
  await navigator.clipboard.writeText(selectedCrypto.address);
  copyBtn.textContent = "Copied!";
  copyBtn.classList.add("copied");

  setTimeout(() => {
    copyBtn.textContent = "Copy";
    copyBtn.classList.remove("copied");
  }, 1500);
});

updateUI();
