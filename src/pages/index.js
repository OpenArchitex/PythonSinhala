import * as React from "react";
import NavBar from "../components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import CoverImage from "../components/coverImage";

const IndexPage = () => (
  <>
    <NavBar />
    <CoverImage />
  </>
);
export default IndexPage;

export const Head = () => <title>PythonSinhala</title>;
