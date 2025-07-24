import React, { useState } from "react";

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState("HTML");

  const handleTab = (e) => {
    const btnText = e.target.innerHTML;
    if (btnText === "HTML") setCurrentTab("HTML");
    else if (btnText === "CSS") setCurrentTab("CSS");
    else setCurrentTab("JavaScript");
  };
  console.log(currentTab);
  return (
    <div>
      <h1>Tabs component</h1>
      <div>
        <button
          style={{ backgroundColor: currentTab === "HTML" && "lightGreen" }}
          onClick={(e) => handleTab(e)}
        >
          HTML
        </button>
        <button
          style={{ backgroundColor: currentTab === "CSS" && "lightGreen" }}
          onClick={(e) => handleTab(e)}
        >
          CSS
        </button>
        <button
          style={{
            backgroundColor: currentTab === "JavaScript" && "lightGreen",
          }}
          onClick={(e) => handleTab(e)}
        >
          JavaScript
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          paddingTop: "30px",
        }}
      >
        <p
          style={{
            display: currentTab !== "HTML" && "none",
          }}
        >
          The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser.
        </p>
        <p
          style={{
            display: currentTab !== "CSS" && "none",
          }}
        >
          Cascading Style Sheets is a style sheet language used for describing
          the presentation of a document written in a markup language such as
          HTML or XML.
        </p>
        <p
          style={{
            display: currentTab !== "JavaScript" && "none",
          }}
        >
          JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS.
        </p>
      </div>
    </div>
  );
}
