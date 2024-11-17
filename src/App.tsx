import { useEffect, useState } from "react";
import "./App.scss";
import { Options, Priority, Status } from "./utils/constants";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";
import useWindowsDimensions from "./hooks/useWindowDimensions";
import TasksContainer from "./components/TaskContainer/TasksContainer";
import { nanoid } from "nanoid";
import { Task } from "./types/types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
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

  const addTask = (event: React.FormEvent) => {
    event.preventDefault();
    if (!tasks) {
      setTasks([
        {
          id: nanoid(),
          text: inputValue,
          status: Status.Active,
          priority: Priority.NoPriority,
        },
      ]);
      setInputValue("");
      return;
    }
    const arr = [...tasks];
    arr.push({
      id: nanoid(),
      text: inputValue,
      status: Status.Active,
      priority: Priority.NoPriority,
    });
    setTasks(arr);
    setInputValue("");
  };
  const handleDelete = () => {};
  const handleStatus = () => {};

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
        <TasksContainer
          tasks={tasks}
          setTasks={setTasks}
          handleDelete={handleDelete}
          option={option}
          handleStatus={handleStatus}
        />
      </div>
    </div>
  );
}

export default App;
