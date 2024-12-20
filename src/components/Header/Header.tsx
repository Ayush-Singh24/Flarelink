import "./header.scss";

interface HeaderProps {
  addTask: (e: React.FormEvent) => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
  handleNav: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Header({
  addTask,
  inputValue,
  setInputValue,
  showNav,
  handleNav,
}: HeaderProps) {
  return (
    <header className="header">
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="nav-toggle"
          name="nav-toggle"
          checked={showNav}
          onChange={handleNav}
        />
        <label htmlFor="nav-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
      </div>
      <form className="add-task" onSubmit={addTask}>
        <input
          type="text"
          required
          className="add-task__input"
          placeholder="Add new task"
          value={inputValue}
          onChange={(changeEvent) => {
            setInputValue(changeEvent.target.value.trimStart());
          }}
        />
        <button type="submit" className="add-task__button">
          <img
            src="/assets/add-icon.svg"
            alt="add-icon"
            className="add-task__img"
          />
        </button>
      </form>
    </header>
  );
}
