import React, { useState } from "react";
import {QrReader} from "react-qr-reader";

const App = () => {
  const [code, setCode] = useState(null);
  const [showDialog, setDiaglog] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [precScan, setPrecScan] = useState("");
  const [selected, setSelected] = useState("environment");

  const handleScan = (scanData) => {
    // window.location.href = "";
    if (scanData && scanData) {
      window.location.href = scanData;
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div className="qrContainer bg-[red]">
      {!showDialog && !processing && (
        <QrReader
          delay={500}
          onScan={handleScan}
          style={{ width: "100%"}}
        />
      )}
    </div>
  );
};

export default App;
