import Mainroute from './routes/Mainroute';
import './App.css';
import './style/global.css'
import './style/theme.css'
import Qnoti from "./components/Qnoti"
function App() {
  return (
    <div className="App">
      <Qnoti/>
     <Mainroute/>
    </div>
  );
}

export default App;
