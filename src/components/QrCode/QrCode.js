import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QrCode = () => {
  const [url, setUrl] = useState("");
  const qrRef = useRef();
  const downloadQRCode = (e) => {
    e.preventDefault();
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setUrl("");
  };
  const qrCodeEncoder = (e) => {
    setUrl(e.target.value);
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={300}
      bgColor={"#fff"}
      level={"H"}
    />
  );
  return (
    <div className="flex flex-col items-center justify-center mt-[50px]">
      <div className="" ref={qrRef}>{qrcode}</div>
      <div className="mt-[50px] bg-[red]">
        <form onSubmit={downloadQRCode}>
          <label>Enter URL</label>
          <input
            type="text"
            value={url}
            onChange={qrCodeEncoder}
            placeholder="https://hackernoon.com"
          />
          <button type="submit" disabled={!url}>
            Download QR code
          </button>
        </form>
      </div>
    </div>
  );
};

export default QrCode;
