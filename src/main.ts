import "./styles.css";
import QRCode from "qrcode";
import { cryptos } from "./donation";

// Explicitly assert element types so TS knows they are not null
const cryptoList = document.getElementById("cryptoList") as HTMLElement;
const qrCanvas = document.getElementById("qrCanvas") as HTMLCanvasElement;
const addressInput = document.getElementById("addressInput") as HTMLInputElement;
const cryptoTitle = document.getElementById("cryptoTitle") as HTMLElement;
const copyBtn = document.getElementById("copyBtn") as HTMLButtonElement;

// Runtime safety check (optional but good practice)
if (!cryptoList || !cryptoTitle || !copyBtn) {
  throw new Error("Missing required DOM elements");
}

let selectedCrypto = cryptos[0];

function renderCryptoButtons() {
  cryptoList.innerHTML = "";

  cryptos.forEach(crypto => {
    const btn = document.createElement("button");
    btn.className = "crypto-btn";

    const img = document.createElement("img");
    img.src = crypto.icon;
    img.alt = crypto.symbol;

    const text = document.createElement("span");
    text.textContent = crypto.symbol;

    btn.appendChild(img);
    btn.appendChild(text);

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

  // Generate QR code
  await QRCode.toCanvas(qrCanvas, selectedCrypto.address, {
    margin: 2,
    width: 220
  });

  const ctx = qrCanvas.getContext("2d");
  if (!ctx) return;

  // Load logo
  const img = new Image();
  img.src = selectedCrypto.icon;

  img.onload = () => {
    const canvasSize = qrCanvas.width;
    const logoSize = canvasSize * 0.25;

    const x = (canvasSize - logoSize) / 2;
    const y = (canvasSize - logoSize) / 2;

    ctx.fillStyle = "white";
    ctx.fillRect(x - 4, y - 4, logoSize + 8, logoSize + 8);

    ctx.drawImage(img, x, y, logoSize, logoSize);
  };

  renderCryptoButtons();
}

copyBtn.addEventListener("click", async () => {
  await navigator.clipboard.writeText(selectedCrypto.address);
  copyBtn.textContent = "Copied!";
  setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
});

// Initial render
updateUI();
