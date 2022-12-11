import React from "react";
import Card from "./shared/Card";
import { Link } from "react-router-dom";

function About() {
  return (
    <Card>
      <h1>About the page </h1>
      <p>hello its all about </p>
      <Link to="/">TO Main Page</Link>
    </Card>
  );
}

export default About;
