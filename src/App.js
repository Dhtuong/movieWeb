import { useSelector } from 'react-redux';
import './App.css'
import Contents from './components/contents/Contents';
import Intro from './components/Intro/Intro';
import Menu from './components/menu/menu';
import MoviesDetail from './components/MoviesDetail/MoviesDetail';
import Navbar from './components/navbar/navbar';
import Home from './components/Pages/Home';
import SearchMovies from './components/SearchMovies/SearchMovies';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Search from './components/Pages/Search';

function App() {
  const {MovieDetail} = useSelector(state => state.infoMovies)
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path = '/' element = {<Home/>} />
          <Route path = '/search' element = {<Search/>} />
        </Routes>
      </BrowserRouter>
      
      {/* <Intro />
      <Contents />
      <Menu />
      <MoviesDetail movie = {MovieDetail} showModal={MovieDetail ? true : false}/> */}
      {/* <SearchMovies /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
