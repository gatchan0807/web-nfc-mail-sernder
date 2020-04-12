import React from "react";
import { Link } from "react-router-dom";
import { route } from "../../constants/routes";

type Props = {};

const About: React.FC<Props> = (props) => {
  return (
    <>
      <h1>About</h1>
      <Link to={route.STAMP}>stamp</Link>
    </>
  );
};

export default About;
