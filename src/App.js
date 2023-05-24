import logo from "./logo.svg";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1>Todo</h1>
        <TaskList />
      </header>

    </div>
  );
}

export default App;
