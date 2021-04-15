import logo from './logo.svg';
import './App.css';
import Search from './Components/Search/Search';
import Queue from './Components/Queue/Queue';
import Task from './Components/Task/Task';
import Quiz from './Components/Quiz/Quiz';
import Perfomance from './Components/Perfomance/Perfomance';

function App() {
  return (
    <div className="container">
      <div className="app">
        <div className="column">
          <Search />
          <Perfomance />
        </div>
        <div className="column">
          <Queue />
          <Task />
          <Quiz />
        </div>
      </div>
    </div>
  );
}

export default App;
