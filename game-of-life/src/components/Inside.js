import React from 'react';

import { Link } from 'react-router-dom'

import { InsideContainer, ContentBorder, ContentContainer, Buttons } from '../styles';

function Inside(){
    return(
        <InsideContainer>
            <ContentBorder>
            <ContentContainer>
                <h2>
                    Welcome to Griddy's! 
                </h2>    
                <Buttons>
                    <Link to='/menu'>
                    <button>
                        Menu
                    </button>
                    </Link>

                    <Link to='/grid'>
                    <button >
                        Play
                    </button>
                    </Link>
                </Buttons>
                <Buttons className="back">
                <Link to='/'>
                    <button >
                        Back
                    </button>
                    </Link>
                </Buttons>
            </ContentContainer>
            </ContentBorder>

        </InsideContainer>
    )
}

export default Inside