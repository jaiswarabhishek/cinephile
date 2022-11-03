import './App.css';
import Header from './Components/Header';
import Error from './Pages/Error';
import Search from './Pages/Search';
import Trending from './Pages/Trending';
import Movies from './Pages/Movies';
import Series from './Pages/Series';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import {AppProvider} from './Context/context';
import { useState } from 'react';
import { useAuth } from './Context/context';
import PrivateRoute from './PrivateRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Use Routes instead of Switch
function App() {
const {currentUser} = useAuth();

  return ( <>
  

 <Router>

    <Header />
    <div className="container">
    <div className="App">
  <Routes>
  

   
    <Route exact path='/' element={<Trending />}/>
    <Route path="/movies" element={<Movies />} />
    <Route path="/series" element={<Series />} />
    <Route path="/search" element={<Search />} />
    <Route path="*"       element={<Error />} />
   <Route path="/sign-up" element={<SignUp />} />
    <Route path="/sign-in" element={<SignIn />} />
 </Routes>

    </div>
    </div>

  </Router>
  </>
  );
}

export default App;
