import React from 'react';

import { Link } from 'react-router-dom'

import { InsideContainer, ContentContainer, ContentBorder, Buttons } from '../styles/'

function Menu(){

    return(
        <InsideContainer>
            <ContentBorder className="menu">
            <ContentContainer className="menu-content">
            <div>
                <h2>Conway's Game of Life</h2>
                <p>
                The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.
                </p>
                <h2>Rules</h2>
                <p>1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.</p>
                <p>2. Any live cell with two or three live neighbours lives on to the next generation.</p>
                <p>3. Any live cell with more than three live neighbours dies, as if by overpopulation.</p>
                <p>4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</p>
            </div>
                <Buttons>
                    <Link to="/grid">
                        <button>
                            Play
                        </button>
                    </Link>

                    <Link to="/inside">
                        <button>
                            Back
                        </button>
                    </Link>
                </Buttons>
            </ContentContainer>
            </ContentBorder>
        </InsideContainer>
    )
}

export default Menu