import React from 'react';
import { Link } from 'react-router-dom';

import griddys from '../assets/Griddys_Doughnuts.png';

import styled from 'styled-components';

const Container = styled.div`
    background-image: url(${griddys});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

        button{
            width: 10rem;
            padding: .25rem 1rem;
            border: #E3856D solid 3px;
            color: #E3856D; 
            font-size: 1.8rem;
            border-radius: 10px;
            background-color: #F7DB91;
            font-family: 'Bangers', cursive;
        }
`

function Landing() {

    return(
        
        <Container>
            <Link to='/inside'>
                <button>
                Enter
                </button>
            </Link>
        </Container>
    )
}

export default Landing