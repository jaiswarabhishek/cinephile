import './App.css';
import Header from './Components/Header';
import Error from './Pages/Error';
import Search from './Pages/Search';
import Trending from './Pages/Trending';
import Movies from './Pages/Movies';
import Series from './Pages/Series';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Use Routes instead of Switch
function App() {


  return ( <>
  

 <Router>

    <Header />
    <div className="container">
    <div className="App">
      
  <Routes>
    <Route exact path='/' element={<Trending /> }/>
    <Route path="/movies" element={<Movies />} />
    <Route path="/series" element={<Series />} />
    <Route path="/search" element={<Search />} />
    <Route path="*"       element={<Error />} />
 </Routes>

    </div>
    </div>

  </Router>
  </>
  );
}

export default App;
