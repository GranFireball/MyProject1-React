
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Cadastro from './components/cadastro';
import Home from './components/home';
import Login from './components/login';
import NavBar from './components/navBar';
import NotFound from './components/notFound';
import MyList from './components/MyList';
import ChampsProvider from './components/ChampsProvider';
import UsuariosProvider from './components/UsuariosProvider';
function App() {
  return (
    <div>
      <ChampsProvider>
      <UsuariosProvider>
      <NavBar/>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="mylist" element={<MyList/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="login/cadastro" element={<Cadastro/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
      </UsuariosProvider>
      </ChampsProvider>
    </div>
  );
}

export default App;
