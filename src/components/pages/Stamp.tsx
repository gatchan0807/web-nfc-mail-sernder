import React, { useEffect } from "react";

type Props = {};

const Stamp: React.FC<Props> = (props) => {
  useEffect(() => {}, []);

  return (
    <>
      <h1>Home</h1>
      <button onClick={startScanning}>Start Scanning</button>
    </>
  );
};

const startScanning = () => {
  if (!("NDEFReader" in window)) {
    alert("このブラウザは対応していません")
    return;
  }
  
  const reader = new NDEFReader();

  reader
    .scan()
    .then(() => {
      reader.onreading = (event) => {
        console.log(event);
      };
    })
    .catch((error) => {
      console.log(error);
    });
};

export default Stamp;
