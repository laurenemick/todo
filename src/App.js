import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="header">
				<h1>Todo</h1>
				<TaskForm />
				<TaskList />
			</header>

		</div>
	);
}

export default App;
