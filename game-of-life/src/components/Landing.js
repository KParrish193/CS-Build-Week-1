import React from 'react';
import { Link } from 'react-router-dom';

import griddys from '../assets/Griddys_Doughnuts.png';

function Landing() {

    return(
        
        <div>
        <header className="App-header">
        <img src={griddys} />
        <Link to='/grid'>
            <button>
            Enter
            </button>
        </Link>
    </header>
    </div>
    )
}

export default Landing