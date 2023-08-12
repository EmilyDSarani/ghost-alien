import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./NavBar.jsx";
import PageTwo from "./PageTwo.jsx";
import Ghost from "./Ghost.jsx";
import Alien from "./Alien.jsx";
import './App.css'

function App() {

  return (
    <Router>
      <div>
        <NavBar />
        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/' element={<Ghost/>} />
          <Route path='/pagetwo' element={<PageTwo/>} />
          <Route path='/alien' element={<Alien/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
