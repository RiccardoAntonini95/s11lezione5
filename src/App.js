import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Home from './components/Home';
import Album from './components/Album';
import Artist from './components/Artist';
import Favourites from './components/Favourites';
import { Row } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Row>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/album/:elementId' element = {<Album />} />
            <Route path='/artist/:name' element = {<Artist />} />
            <Route path='/favourites' element = {<Favourites />} />
          </Routes>
          <Player />
        </BrowserRouter>
      </Row>
    </div>
  );
}

export default App;