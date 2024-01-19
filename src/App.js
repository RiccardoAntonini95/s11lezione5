import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Row } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Home from './components/Home';
import Album from './components/Album';
import Artist from './components/Artist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Row>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/album' element = {<Album />} />
            <Route path='/artist' element = {<Artist />} />
          </Routes>
          <Player />
        </BrowserRouter>
      </Row>
    </div>
  );
}

export default App;