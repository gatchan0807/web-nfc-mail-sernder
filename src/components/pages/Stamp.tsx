import React, { useState } from "react";
import { route } from "../../constants/routes";
import { Link } from "react-router-dom";

type Props = {};

const Stamp: React.FC<Props> = () => {
  const [serialNumber, setSerialNumber] = useState("");

  return (
    <>
      <h1>Home</h1>
      <div>
        <Link to={route.HOME}>Back to Home</Link>
      </div>

      <button
        onClick={() => {
          startScanning(setSerialNumber);
        }}
      >
        Start Scanning
      </button>
      <p>{serialNumber}</p>
    </>
  );
};

const startScanning = (setter: any) => {
  if (!("NDEFReader" in window)) {
    alert("このブラウザは対応していません");
    return;
  }

  const reader = new NDEFReader();

  reader
    .scan()
    .then(() => {
      reader.onreading = (event) => {
        console.log(event);
        setter(event.serialNumber);
      };
    })
    .catch((error) => {
      console.log(error);
    });
};

export default Stamp;
