import * as React from "react";
import NavBar from "../components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import CoverImage from "../components/coverImage";
import Mission from "../components/mission";
import About from "../components/about";
import Footer from "../components/footer";

const IndexPage = () => (
  <>
    <NavBar />
    <CoverImage />
    <Mission />
    <About />
    <Footer />
  </>
);
export default IndexPage;

export const Head = () => <title>PythonSinhala</title>;
