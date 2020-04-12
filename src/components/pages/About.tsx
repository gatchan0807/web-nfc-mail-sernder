import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { route } from "../../constants/routes";

type Props = {};

const About: React.FC<Props> = () => {
  const [availableNFC, setAvailableNFC] = useState(false);

  useEffect(() => {
    if ("NDEFReader" in window) {
      setAvailableNFC(true);
    }
  }, []);

  return (
    <>
      <h1>About</h1>
      {availableNFC ? (
        <Link to={route.STAMP}>打刻ページへ移動する</Link>
      ) : (
        <div>このブラウザはWeb NFCに対応していません</div>
      )}
    </>
  );
};

export default About;
