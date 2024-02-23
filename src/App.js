
import './App.css';
import Video from './components/Video';
import Header from './components/Header';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Video/>}/>
        <Route path="/:id" element={<Video/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
