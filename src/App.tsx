import './App.sass';
import { Form } from './components/Form';
import { Timer } from './components/Timer';
import { List } from './components/List/index';

function App() {
  return (
    <>
      <div className="card">
        <Timer hours="00" minutes="00" seconds="00" />
        <Form label="Task" placeHolder="Enter your task here ..." />
        <List />
      </div>
    </>
  );
}

export default App;
