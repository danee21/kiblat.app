const canvas = document.getElementById("kiblatCanvas");
const container = document.getElementById("canvasContainer");
const ctx = canvas.getContext("2d");

const modal = document.getElementById("modalCalibration");
const btnHelp = document.getElementById("btnHelpCalibration");
const btnClose = document.getElementById("btnCloseModal");
const btnUnderstand = document.getElementById("btnUnderstand");

// Tanda tangan biner Base64 untuk Logo Resmi Kemenag RI
const logoKemenagBase64 =
  "data:image/png;base64,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";

btnHelp.addEventListener("click", () => modal.classList.remove("hidden"));
btnClose.addEventListener("click", () => modal.classList.add("hidden"));
btnUnderstand.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

// FUNGSI VALIDASI FORM INPUT
function validateFormInputs() {
  const name = document.getElementById("masjidName").value.trim();
  const address = document.getElementById("masjidAddress").value.trim();

  if (!name || !address) {
    alert("⚠️ Mohon Maaf, Nama Masjid/Musholla dan Alamat Wilayah wajib diisi terlebih dahulu!");
    return false;
  }
  return true;
}

function resizeCanvas() {
  const containerWidth = container.clientWidth - (window.innerWidth < 640 ? 24 : 32);
  canvas.width = containerWidth;
  canvas.height = containerWidth * 0.78;
  drawSimulation(canvas, ctx);
}

function drawSimulation(targetCanvas, targetCtx) {
  targetCtx.clearRect(0, 0, targetCanvas.width, targetCanvas.height);

  const kiblatAngle = 294;
  const rawMasjimAngle = parseFloat(document.getElementById("masjidAngle").value) || 0;
  const offset = parseFloat(document.getElementById("compassOffset").value) || 0;

  let masjidAngle = (rawMasjimAngle + offset) % 360;
  if (masjidAngle < 0) masjidAngle += 360;

  const wMeter = parseFloat(document.getElementById("masjidWidthMeter").value) || 1;
  const lMeter = parseFloat(document.getElementById("masjidLengthMeter").value) || 1;

  const centerX = targetCanvas.width / 2;
  const centerY = targetCanvas.height / 2;
  const dynamicScale = targetCanvas.width / 580;

  // DEFINISI KOORDINAT KOMPAS (Pojok Kanan Bawah)
  const compassX = targetCanvas.width - 70 * dynamicScale;
  const compassY = targetCanvas.height - 70 * dynamicScale;
  const radiusKompas = Math.max(26, 38 * dynamicScale);

  const maxAllowedPixels = Math.min(targetCanvas.width, targetCanvas.height) * 0.45;
  const maxMeter = Math.max(wMeter, lMeter);
  const pixelPerMeter = maxAllowedPixels / maxMeter;

  const wPixel = wMeter * pixelPerMeter;
  const lPixel = lMeter * pixelPerMeter;

  const scaleInfoEl = document.getElementById("scaleInfo");
  const dimLabelEl = document.getElementById("txtDimensionLabel");

  let offsetText = offset !== 0 ? ` (Koreksi Kalibrasi: ${offset > 0 ? "+" : ""}${offset}°)` : "";
  if (scaleInfoEl) scaleInfoEl.innerHTML = `💡 <strong>Sistem Auto-Scale:</strong> 1 Meter dikonversi otomatis menjadi <strong>${pixelPerMeter.toFixed(1)} piksel</strong>.${offsetText}`;
  if (dimLabelEl) dimLabelEl.innerText = `📐 Dimensi: ${wMeter}m x ${lMeter}m`;

  let selisih = kiblatAngle - masjidAngle;
  while (selisih > 180) selisih -= 360;
  while (selisih < -180) selisih += 360;

  const absSelisih = Math.abs(selisih).toFixed(1);
  const kolomRekomendasi = document.getElementById("rekomendasiInfo");

  let textRekomendasiHTML = "";
  let isAccurate = false;

  if (parseFloat(absSelisih) === 0) {
    textRekomendasiHTML = `✅ <strong>Rekomendasi Lapangan:</strong> Struktur bangunan masjid sudah <strong>Sangat Presisi (100% Akurat)</strong> menghadap lurus ke arah kiblat.`;
    isAccurate = true;
    if (kolomRekomendasi) kolomRekomendasi.className = "text-[11px] leading-relaxed p-3 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 mt-3";
  } else {
    const arahPutar = selisih > 0 ? "KANAN (Utara)" : "KIRI (Selatan)";
    textRekomendasiHTML = `📌 <strong>Rekomendasi Lapangan:</strong> Garis shaf di dalam masjid harus digeser/dimiringkan sebesar <strong>${absSelisih}° ke arah ${arahPutar}</strong> dari orientasi dinding saat ini agar akurat menghadap Ka'bah.`;
    isAccurate = false;
    if (kolomRekomendasi) kolomRekomendasi.className = "text-[11px] leading-relaxed p-3 rounded-xl border border-amber-200 bg-amber-50 text-amber-900 mt-3";
  }

  if (kolomRekomendasi) kolomRekomendasi.innerHTML = textRekomendasiHTML;

  // ========================================================
  // DRAW LINE LINTHASAN: PUTUS-PUTUS NGGATHUK KE KOMPAS
  // ========================================================
  const kiblatRad = ((kiblatAngle - 90) * Math.PI) / 180;
  const forwardLength = Math.min(targetCanvas.width, targetCanvas.height) * 0.46;
  const kabahX = centerX + forwardLength * Math.cos(kiblatRad);
  const kabahY = centerY + forwardLength * Math.sin(kiblatRad);

  targetCtx.save();
  targetCtx.beginPath();
  targetCtx.moveTo(compassX, compassY); // Start dari pusat kompas
  targetCtx.lineTo(kabahX, kabahY); // Finish ke arah Ka'bah
  targetCtx.lineWidth = 1.8 * dynamicScale;
  targetCtx.strokeStyle = "#475569";
  targetCtx.setLineDash([5 * dynamicScale, 4 * dynamicScale]);
  targetCtx.stroke();
  targetCtx.restore();

  // ========================================================
  // KA'BAH & PANAH SEGITIGA YANG SUDAH AKURAT SEARAH LINTASAN
  // ========================================================
  targetCtx.save();
  targetCtx.translate(kabahX, kabahY);

  // A. Kotak Ka'bah (Tetap miring sesuai konstanta azimuth kiblat 294°)
  targetCtx.save();
  targetCtx.rotate((kiblatAngle * Math.PI) / 180);
  const kabahSize = Math.max(18, 26 * dynamicScale);
  targetCtx.fillStyle = "#0F172A";
  targetCtx.fillRect(-kabahSize / 2, -kabahSize / 2, kabahSize, kabahSize);
  targetCtx.fillStyle = "#EAB308";
  targetCtx.fillRect(-kabahSize / 2, -kabahSize / 2 + 5 * dynamicScale, kabahSize, 3 * dynamicScale);
  targetCtx.restore();

  // B. Panah Segitiga Hitam (Rotasi dinamis menghadap lurus ke arah garis putus-putus)
  const angleToCompass = Math.atan2(compassY - kabahY, compassX - kabahX);
  targetCtx.save();
  targetCtx.rotate(angleToCompass);

  targetCtx.beginPath();
  targetCtx.moveTo(kabahSize / 2 + 2 * dynamicScale, 0);
  targetCtx.lineTo(kabahSize / 2 + 10 * dynamicScale, -4 * dynamicScale);
  targetCtx.lineTo(kabahSize / 2 + 10 * dynamicScale, 4 * dynamicScale);
  targetCtx.closePath();
  targetCtx.fillStyle = "#0F172A";
  targetCtx.fill();
  targetCtx.restore();

  targetCtx.restore();

  // ========================================================
  // BANGUNAN KOTAK MASJID
  // ========================================================
  const masjidRad = (masjidAngle * Math.PI) / 180;
  targetCtx.save();
  targetCtx.translate(centerX, centerY);
  targetCtx.rotate(masjidRad);
  targetCtx.fillStyle = "#1E3A8A";
  targetCtx.strokeStyle = "#0284C7";
  targetCtx.lineWidth = 3 * dynamicScale;
  targetCtx.lineJoin = "round";
  targetCtx.fillRect(-wPixel / 2, -lPixel / 2, wPixel, lPixel);
  targetCtx.strokeRect(-wPixel / 2, -lPixel / 2, wPixel, lPixel);

  // Mihrab Masjid
  const mihrabW = wPixel * 0.22;
  const mihrabL = Math.max(10, lPixel * 0.16);
  targetCtx.fillStyle = "#0284C7";
  targetCtx.fillRect(-mihrabW / 2, -lPixel / 2 - mihrabL, mihrabW, mihrabL);
  targetCtx.strokeRect(-mihrabW / 2, -lPixel / 2 - mihrabL, mihrabW, mihrabL);

  // Garis Dinding/Shaf Bawaan Bangunan (Tipis Putih)
  targetCtx.strokeStyle = "rgba(255, 255, 255, 0.15)";
  targetCtx.lineWidth = 1 * dynamicScale;
  const safGap = Math.max(15, 25 * dynamicScale);
  for (let i = -lPixel / 2 + safGap; i < lPixel / 2; i += safGap) {
    targetCtx.beginPath();
    targetCtx.moveTo(-wPixel / 2 + 4, i);
    targetCtx.lineTo(wPixel / 2 - 4, i);
    targetCtx.stroke();
  }
  targetCtx.restore();

  // ========================================================
  // SMART REKOMENDASI GREEN SAF (PROPORSIONAL DI DALAM MASJID)
  // ========================================================
  targetCtx.save();
  targetCtx.translate(centerX, centerY);
  targetCtx.rotate(masjidRad);
  targetCtx.beginPath();
  targetCtx.rect(-wPixel / 2, -lPixel / 2, wPixel, lPixel);
  targetCtx.clip();
  targetCtx.rotate(-masjidRad);
  targetCtx.translate(-centerX, -centerY);

  const shafRad = (kiblatAngle * Math.PI) / 180;
  targetCtx.strokeStyle = "#10B981";
  targetCtx.lineWidth = 2 * dynamicScale;

  const diagonalLength = Math.sqrt(targetCanvas.width * targetCanvas.width + targetCanvas.height * targetCanvas.height) * 2;
  const step = Math.max(18, 25 * dynamicScale);

  for (let offsetValue = -diagonalLength; offsetValue < diagonalLength; offsetValue += step) {
    const lineCenterX = centerX + offsetValue * Math.cos(kiblatRad);
    const lineCenterY = centerY + offsetValue * Math.sin(kiblatRad);
    const startX = lineCenterX - diagonalLength * Math.cos(shafRad);
    const startY = lineCenterY - diagonalLength * Math.sin(shafRad);
    const finalEndX = lineCenterX + diagonalLength * Math.cos(shafRad);
    const finalEndY = lineCenterY + diagonalLength * Math.sin(shafRad);

    targetCtx.beginPath();
    targetCtx.moveTo(startX, startY);
    targetCtx.lineTo(finalEndX, finalEndY);
    targetCtx.stroke();
  }
  targetCtx.restore();

  // Titik Pusat Kuning Masjid
  targetCtx.beginPath();
  targetCtx.arc(centerX, centerY, 4 * dynamicScale, 0, 2 * Math.PI);
  targetCtx.fillStyle = "#EAB308";
  targetCtx.fill();
  targetCtx.strokeStyle = "#FFFFFF";
  targetCtx.lineWidth = 1 * dynamicScale;
  targetCtx.stroke();

  // ========================================================
  // LINGKARAN ORENS-HIJAU KOMPAS DI POJOK BAWAH
  // ========================================================
  targetCtx.beginPath();
  targetCtx.arc(compassX, compassY, radiusKompas, 0, 2 * Math.PI);
  targetCtx.fillStyle = "rgba(251, 146, 60, 0.25)";
  targetCtx.fill();
  targetCtx.beginPath();
  targetCtx.arc(compassX, compassY, radiusKompas - 8 * dynamicScale, 0, 2 * Math.PI);
  targetCtx.fillStyle = "rgba(74, 222, 128, 0.3)";
  targetCtx.fill();

  // Garis Bidik Crosshair Kompas
  targetCtx.beginPath();
  targetCtx.moveTo(compassX, compassY - radiusKompas - 6 * dynamicScale);
  targetCtx.lineTo(compassX, compassY + radiusKompas + 6 * dynamicScale);
  targetCtx.moveTo(compassX - radiusKompas - 6 * dynamicScale, compassY);
  targetCtx.lineTo(compassX + radiusKompas + 6 * dynamicScale, compassY);
  targetCtx.lineWidth = 0.8;
  targetCtx.strokeStyle = "#475569";
  targetCtx.stroke();

  // Jarum Utara (Merah)
  targetCtx.beginPath();
  targetCtx.moveTo(compassX, compassY - radiusKompas + 3 * dynamicScale);
  targetCtx.lineTo(compassX - 4 * dynamicScale, compassY);
  targetCtx.lineTo(compassX + 4 * dynamicScale, compassY);
  targetCtx.closePath();
  targetCtx.fillStyle = "#EF4444";
  targetCtx.fill();

  // Label Mata Angin (U, S, B, T)
  targetCtx.fillStyle = "#1E293B";
  const fontSize = Math.max(9, Math.round(11 * dynamicScale));
  targetCtx.font = `bold ${fontSize}px Arial`;
  targetCtx.textAlign = "center";
  targetCtx.textBaseline = "middle";
  targetCtx.fillText("U", compassX, compassY - radiusKompas - 12 * dynamicScale);
  targetCtx.fillText("S", compassX, compassY + radiusKompas + 12 * dynamicScale);
  targetCtx.fillText("B", compassX - radiusKompas - 12 * dynamicScale, compassY);
  targetCtx.fillText("T", compassX + radiusKompas + 12 * dynamicScale, compassY);

  // Titik Pusat Kompas
  targetCtx.beginPath();
  targetCtx.arc(compassX, compassY, 3 * dynamicScale, 0, 2 * Math.PI);
  targetCtx.fillStyle = "#0F172A";
  targetCtx.fill();
  targetCtx.strokeStyle = "#FFFFFF";
  targetCtx.stroke();

  return { text: textRekomendasiHTML, status: isAccurate };
}

// MANAGEMENT INTEGRASI SENSOR AZIMUTH HP
function initAutoAzimuth() {
  if (typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function") {
    DeviceOrientationEvent.requestPermission()
      .then((permissionState) => {
        if (permissionState === "granted") startCompassListener();
        else alert("Izin akses sensor kompas ditolak.");
      })
      .catch(() => alert("Gagal meminta izin sensor."));
  } else {
    startCompassListener();
  }
}

function startCompassListener() {
  const handler = (event) => {
    let heading = null;
    if (event.webkitCompassHeading !== undefined) heading = event.webkitCompassHeading;
    else if (event.alpha !== null) heading = (360 - event.alpha) % 360;

    if (heading !== null) {
      const finalHeading = Math.round(heading);
      document.getElementById("masjidAngle").value = finalHeading;
      drawSimulation(canvas, ctx);
      window.removeEventListener("deviceorientationabsolute", handler);
      alert(`🎯 Berhasil! Azimut HP: ${finalHeading}°`);
    }
  };
  window.addEventListener("deviceorientationabsolute", handler, { once: true });
}

// BIND EVENT LISTENERS
document.getElementById("btnAutoAzimuth").addEventListener("click", initAutoAzimuth);

document.getElementById("btnDraw").addEventListener("click", () => {
  if (!validateFormInputs()) return;
  drawSimulation(canvas, ctx);
});

document.getElementById("compassOffset").addEventListener("input", () => drawSimulation(canvas, ctx));
document.getElementById("masjidAngle").addEventListener("input", () => drawSimulation(canvas, ctx));
document.getElementById("masjidWidthMeter").addEventListener("input", () => drawSimulation(canvas, ctx));
document.getElementById("masjidLengthMeter").addEventListener("input", () => drawSimulation(canvas, ctx));

// EKSPOR GAMBAR PNG
document.getElementById("btnDownload").addEventListener("click", function () {
  if (!validateFormInputs()) return;

  const name = document.getElementById("masjidName").value || "Masjid";
  const link = document.createElement("a");
  link.download = `Sketsa_Kiblat_${name.replace(/\s+/g, "_")}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
});

// GENERATE DOKUMEN BERITA ACARA PDF
document.getElementById("btnDownloadPDF").addEventListener("click", function () {
  if (!validateFormInputs()) return;

  const name = document.getElementById("masjidName").value || "Masjid";
  const address = document.getElementById("masjidAddress").value || "-";
  const rawMasjimAngle = parseFloat(document.getElementById("masjidAngle").value) || 0;
  const offset = parseFloat(document.getElementById("compassOffset").value) || 0;
  let finalAngle = (rawMasjimAngle + offset) % 360;
  if (finalAngle < 0) finalAngle += 360;

  const base64Data = canvas.toDataURL("image/png");
  const kal = drawSimulation(canvas, ctx);

  let boxBg = "#fff9db",
    boxBorder = "#fef08a",
    boxColor = "#744210";
  if (kal.status === true) {
    boxBg = "#f0fdf4";
    boxBorder = "#bbf7d0";
    boxColor = "#166534";
  }

  let pdfContainer = document.getElementById("hidden-pdf-container");
  if (!pdfContainer) {
    pdfContainer = document.createElement("div");
    pdfContainer.id = "hidden-pdf-container";
    pdfContainer.style.position = "absolute";
    pdfContainer.style.left = "-9999px";
    pdfContainer.style.top = "-9999px";
    document.body.appendChild(pdfContainer);
  }
  pdfContainer.innerHTML = "";

  const contentWrapper = document.createElement("div");
  contentWrapper.style.width = "680px";
  contentWrapper.style.padding = "30px";
  contentWrapper.style.backgroundColor = "#FFFFFF";
  contentWrapper.style.fontFamily = "Arial, sans-serif";
  contentWrapper.style.boxSizing = "border-box";

  contentWrapper.innerHTML = `
    <table style="width: 100%; border-bottom: 3px double #0f172a; padding-bottom: 10px; margin-bottom: 20px;">
      <tr>
        <td style="width: 12%; text-align: left; vertical-align: middle;">
          <img src="${logoKemenagBase64}" style="width: 65px; height: auto; display: block;" />
        </td>
        <td style="width: 88%; text-align: center; vertical-align: middle; padding-right: 40px;">
          <h3 style="font-size: 13px; font-weight: bold; color: #1e293b; margin: 0; uppercase; letter-spacing: 0.5px;">KEMENTERIAN AGAMA REPUBLIK INDONESIA</h3>
          <h2 style="font-size: 15px; font-weight: 800; color: #0f172a; margin: 3px 0 2px 0; letter-spacing: 0.5px;">KANTOR KEMENTERIAN AGAMA KABUPATEN SLEMAN</h2>
          <p style="font-size: 9px; color: #64748b; margin: 0; font-style: italic;">Jalan Jend. Sudirman No. 20, Sleman, Yogyakarta, Kode Pos 55511</p>
        </td>
      </tr>
    </table>

    <div style="text-align: center; margin-bottom: 18px;">
      <h1 style="font-size: 14px; font-weight: bold; color: #0f172a; margin: 0; text-transform: uppercase; letter-spacing: 0.8px; text-decoration: underline;">BERITA ACARA VERIFIKASI AKURASI KIBLAT</h1>
      <p style="font-size: 9px; color: #64748b; margin: 4px 0 0 0;">Nomor Sertifikasi Lapangan: B-Wlf/Kiblat/${new Date().getFullYear()}</p>
    </div>
    
    <table style="width: 100%; font-size: 11px; border-collapse: collapse; background-color: #f8fafc; border: 1px solid #e2e8f0; margin-bottom: 20px;">
      <tr>
        <td style="padding: 9px 12px; color: #64748b; border-bottom: 1px solid #e2e8f0; width: 22%;">Nama Bangunan</td>
        <td style="padding: 9px 12px; font-weight: bold; color: #0f172a; border-bottom: 1px solid #e2e8f0;">: ${name}</td>
        <td style="padding: 9px 12px; color: #64748b; border-bottom: 1px solid #e2e8f0; width: 22%;">Kiblat Wilayah</td>
        <td style="padding: 9px 12px; font-weight: bold; color: #0f172a; border-bottom: 1px solid #e2e8f0;">: 294° (Konstanta)</td>
      </tr>
      <tr>
        <td style="padding: 9px 12px; color: #64748b;">Lokasi Wilayah</td>
        <td style="padding: 9px 12px; font-weight: bold; color: #0f172a;">: ${address}</td>
        <td style="padding: 9px 12px; color: #64748b;">Arah Dinding</td>
        <td style="padding: 9px 12px; font-weight: bold; color: #2563eb;">: ${finalAngle}° AZIMUTH</td>
      </tr>
    </table>
    
    <p style="font-size: 9px; font-weight: bold; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 6px 0;">SKETSA GRAFIK SIMULASI LAPANGAN</p>
    <div style="text-align: center; margin-bottom: 20px; border: 1px solid #e2e8f0; padding: 10px; background: #f8fafc; border-radius: 8px;">
      <img src="${base64Data}" style="width: 100%; height: auto; max-width: 520px; display: inline-block;" />
    </div>

    <p style="font-size: 9px; font-weight: bold; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 6px 0;">KESIMPULAN &amp; REKOMENDASI TAKMIR</p>
    <div style="font-size: 11px; line-height: 1.6; padding: 12px 15px; border-radius: 8px; background-color: ${boxBg}; border: 1px solid ${boxBorder}; color: ${boxColor}; font-weight: bold; margin-bottom: 25px;">
      ${kal.text}
    </div>

    <table style="width: 100%; font-size: 11px; margin-top: 15px;">
      <tr>
        <td style="width: 60%;"></td>
        <td style="width: 40%; text-align: left;">
          <p style="margin: 0 0 50px 0;">Sleman, ${new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}<br>Tim Verifikasi Kompas Akurasi,</p>
          <p style="font-weight: bold; text-decoration: underline; margin: 0;">( ___________________________ )</p>
          <p style="margin: 2px 0 0 0; color: #64748b; font-size: 10px;">Petugas Ukur Badan Hisab Rukyat</p>
        </td>
      </tr>
    </table>
  `;

  pdfContainer.appendChild(contentWrapper);

  const opt = {
    margin: [10, 10, 10, 10],
    filename: `Laporan_Akurasi_Kiblat_${name.replace(/\s+/g, "_")}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, logging: false, scrollX: 0, scrollY: 0 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  setTimeout(() => {
    html2pdf()
      .set(opt)
      .from(contentWrapper)
      .save()
      .then(() => {
        pdfContainer.innerHTML = "";
      });
  }, 300);
});

window.addEventListener("resize", resizeCanvas);
window.addEventListener("DOMContentLoaded", resizeCanvas);
