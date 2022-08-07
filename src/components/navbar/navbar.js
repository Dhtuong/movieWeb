import NetflixLogo from '../../assets/images/logo.jpg';
import {ImSearch} from 'react-icons/im'
import styled from 'styled-components';
import { useScrollY } from '../hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Navbar(props){
    const [scrollY] = useScrollY(); 

    const [keywords, setKeywords] = useState('');
    const Navigate = useNavigate();
    const handleChangeInput = (e) => {
        let keywords = e.target.value;
        setKeywords(keywords);
        // if(keywords.length > 0){
        //     Navigate(`/search?keywords=${keywords.trim()}`)
        // }else Navigate('/')
        (keywords.length > 0) 
        ? Navigate(`/search?keywords=${keywords.trim()}`)
        : Navigate('/')
    }

    const gohome = () => {
        Navigate('/')
        setKeywords('')
    }

    return(
        <Navigation style={scrollY <50 ? {backgroundColor: 'transparent'} : {backgroundColor: 'var(--color-background)'}}>
            <div className='navContainer'>
                <div className='logo' onClick = {gohome}>
                    <img src={NetflixLogo} alt=''/>
                </div>
                <div className='navSearch'>
                    <ImSearch className='iconSearch'/>
                    <input 
                        type = 'text' 
                        placeholder='...'
                        onChange = {handleChangeInput}
                        value = {keywords}
                    />
                </div>
            </div>
        </Navigation>
    )
}
export default Navbar;

const Navigation = styled.div`
width : 100%;
height: 80px;
position : fixed;
top: 0;
transition-timing-function: ease-in;
transition : all 1s;
z-index : 10;

@media only screen and (max-width: 600px) {
    height : 100px;
}
.navContainer{
    background-color : transparent;
    display : flex;
    algin-items: center;
    flex-dicrection : row;
    justify-content : flex-start;
    height : 100%;

    @media only screen and (max-width: 600px) {
        flex-dicrection : column;
    }
    .logo {
        width : 80px;
        cursor : pointer;
        img{
            width : 100%;
        }
    }
    .navSearch{
        color : while;
        padding-right: 20px;
        display: flex;
        justify-content: flex-end;

        &:hover.iconSearch{
            color : white;
        }
        .iconSearch{
            width : 20px;
            height: 20px;
            curson: pointer;
            transform : translateX(24px) translateY(10px);
            color: #bbb;
        }
        input{
            font-size:14px;
            border:1px solid #fff;
            color:white;
            outline:none;
            width:0;
            padding: 10px;
            cursor: pointer;
            opacity: 0;
            backgroud:#222;
            transition: width 0.5s;
        
            &:focus{
            padding-left: 26px;
            width : 300px;
            cursor: text;
            opacity:1;
            border-radius: 4px;
            }
        }
    }
}
.
`;