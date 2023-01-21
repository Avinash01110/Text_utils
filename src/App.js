import "./App.css";
import About from "./components/About";
import Darkmode from "./components/Darkmode";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Suggest from "./components/Suggest";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Contactus from "./components/Contactus";

function App() {
  const [mode, setmode] = useState("light");

  const [modetxt, setmodetxt] = useState("Enable dark mode");

  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1100);
  };

  const toggleMode = () => {
    if (mode == "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#182747";
      setmodetxt("Enable light mode");
      showalert("Dark mode is enabled.", "success");
    } else {
      setmode("light");
      setmodetxt("Enable dark mode");
      document.body.style.backgroundColor = "#E5E5CB";
      showalert("Light mode is enabled.", "success");
    }
  };

  return (
    <>
      <Navbar
        title="Text Utils"
        modetxt={modetxt}
        mode={mode}
        toggleMode={toggleMode}
        home="Home"
        link="About"
        dropdown="More"
      />
      <Alert alert={alert} />
      <div className="container my-5">
        <TextForm
          heading="Enter the text to analyze"
          showalert={showalert}
          modetxt={modetxt}
          mode={mode}
        />
      </div>
      <About modetxt={modetxt} mode={mode} />
      <Suggest mode={mode} />
      <Contactus mode={mode} />
    </>
  );
}

export default App;
