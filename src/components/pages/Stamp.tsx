import React, { useState, useEffect } from "react";
import { route } from "../../constants/routes";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { FIXME_any } from "@/types/global";

interface Props extends RouteComponentProps {}

const Stamp: React.FC<Props> = (props: Props) => {
  const [serialNumber, setSerialNumber] = useState("");

  useEffect(() => {
    startScanning(setSerialNumber, props.history);
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div>
        <Link to={route.HOME}>Back to Home</Link>
      </div>
      <p>{serialNumber}</p>
    </>
  );
};

const startScanning = (setter: FIXME_any, history: FIXME_any) => {
  if (!("NDEFReader" in window)) {
    alert("このブラウザは対応していません");
    history.push(route.HOME);
    return;
  }

  const reader = new NDEFReader();

  reader
    .scan()
    .then(() => {
      reader.onreading = (event) => {
        setter(event.serialNumber);
      };
    })
    .catch((error) => {
      console.log(error);
    });
};

export default withRouter(Stamp);
