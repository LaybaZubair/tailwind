import React from "react";
import Content from "../components/about/content/Content";
import Beach from "../components/about/beach/Beach";
import Mission from "../components/about/mission/Mission";
import Group from "../components/about/hand/hand";
import Hand from "../components/about/hand/hand";
import Grop from "../components/about/group/Grop";
import Listauthor from "../components/about/listauthor/Listauthor";
import Join from "../components/blogg/join/Join";

function About() {
  return (
    <>
      <Content />
      <Beach />
      <Mission />
     <Hand/>
     <Grop/>
     <Listauthor/>
     <Join/>
    </>
  );
}

export default About;
