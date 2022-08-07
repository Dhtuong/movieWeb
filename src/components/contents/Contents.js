import React, { useEffect } from 'react';
import MoviesRow from './MoviesRow';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import * as ACTIONS from '../store/actions';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll'
import styled from 'styled-components';
// import { useScrollY } from '../hooks';


const ScrollToTop = ()=> {
  scroll.scrollToTop();
}

function Contents(props) {
  const dispatch = useDispatch();
  // const [scrollY] = useScrollY();
  const {
    NetfLixOriginals,
    TrendingMovies,
    TopRatesMovies,
    ActionMovies,
    ComedyMovies,
    HorrorMovies,
    RomanceMovies,
    Documentaries,
  } = useSelector (state => state.infoMovies);

  useEffect(() => {
    dispatch(ACTIONS.getNetfLixOriginals());
    dispatch(ACTIONS.getTrendingMovies());
    dispatch(ACTIONS.getTopRateMovies());
    dispatch(ACTIONS.getActionMovies());
    dispatch(ACTIONS.getComedyMovies());
    dispatch(ACTIONS.getHorrorMovies());
    dispatch(ACTIONS.getRomanceMovies());
    dispatch(ACTIONS.getDocumentariesMovies());
  },[dispatch]);
  
  
  
  return (
    <div>
        <MoviesRow movies={NetfLixOriginals} title="Netflix Orginals" isNetflix = {true} idType = 'origin'/>
        <MoviesRow movies={TrendingMovies} title="Trending Movies" idType ='trending'/>
        <MoviesRow movies={TopRatesMovies} title="Top Rated Movies" idType ='toprate'/>
        <MoviesRow movies={ActionMovies} title="Action Movies" idType ='action'/>
        <MoviesRow movies={ComedyMovies} title="Comedy Movies" idType ='comedy'/>
        <MoviesRow movies={HorrorMovies} title="Horror Movies" idType ='horror'/>
        <MoviesRow movies={RomanceMovies} title="Romance Movies" idType ='romance'/>
        <MoviesRow movies={Documentaries} title="Documentaries Movies" idType ='documentaries'/>
        <GoToTop onClick = {() => ScrollToTop()}
          // style = {{
          //   visibility : `${scrollY > 600 ? 'visibale':'hidden'}`
          // }}
        >
          <FaArrowAltCircleUp />
        </GoToTop>
    </div>
  )
}

export default Contents

const GoToTop = styled.div`
  position: fixed;
  z-index:10;
  right:70px;
  bottom: 50px;
  font-size: 50px;
  color: rgba(255,255,255,0.4);
  transition: all 0.3s linear;
  
  &:hover {
    color : rgba(255,255,255,0.8);
  }
  @media screen and (max-width : 600px){
    right: 40px;
  }
`