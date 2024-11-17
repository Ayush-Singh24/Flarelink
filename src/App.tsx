import { useEffect, useState } from "react";
import "./App.scss";
import { Options } from "./utils/constants";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";
import useWindowsDimensions from "./hooks/useWindowDimensions";

function App() {
  const [tasks, setTasks] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [option, setOption] = useState(Options.All);
  const [showNav, setShowNav] = useState(false);
  const { width } = useWindowsDimensions();

  useEffect(() => {
    if (width < 901) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [width]);

  const changeOption = (option: number) => {
    setOption(option);
    if (width < 901) {
      setShowNav(false);
    }
  };

  const addTask = () => {};

  const handleNav = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowNav(event.target.checked);
  };
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
      <div className="content">
        <SideNav
          changeOption={changeOption}
          option={option}
          showNav={showNav}
          width={width}
        />
      </div>
    </div>
  );
}

export default App;
