import { useState } from "react";
import "./App.scss";
import { Options } from "./utils/constants";
import Header from "./components/Header/Header";

function App() {
  const [tasks, setTasks] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [option, setOption] = useState(Options.All);
  const [showNav, setShowNav] = useState(false);
  const addTask = () => {};

  const handleNav = () => {};
  return (
    <div className="container">
      <Header
        addTask={addTask}
        inputValue={inputValue}
        setInputValue={setInputValue}
        showNav={showNav}
        setShowNav={setShowNav}
        handleNav={handleNav}
      />
      <div className="content">hello</div>
    </div>
  );
}

export default App;
