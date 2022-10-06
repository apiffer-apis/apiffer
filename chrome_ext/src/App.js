
import './App.css';
import Home from './pages/Home';
import Apilist from './pages/Apilist';
import { useSelector } from 'react-redux';
function App() {
  const path = useSelector(state=>state.sitecontrol.apppath)
  return (
    <div className="App ">
      {path==='home' && <Home/>}
      {path==='api' && <Apilist/>}
    </div>
  );
}

export default App;
