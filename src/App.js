import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Main from './component/Mian/Main';
import Volunteers from './component/Volunteers/Volunteers';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/volunteers' element={<Volunteers></Volunteers>}></Route>
      </Routes>
    </div>
  );
}

export default App;
