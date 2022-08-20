import './App.scss';
import Navbar from './components/Navbar';
import MusicPlayerList from './components/MusicPlayerList';
import ViewSong from './components/ViewSong';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <>
      <Navbar headerTitle="KanishkMusic" links={[{ label: 'songs' }]} />
      <Routes>
        <Route exact path="/" element={<MusicPlayerList/>}></Route>
        <Route exact path="/songs" element={<MusicPlayerList/>}></Route>
        <Route exact path="/view-song/:id"element={<ViewSong/>}></Route>
      </Routes>
      
    </>
    </Router>
  );
}

export default App;
