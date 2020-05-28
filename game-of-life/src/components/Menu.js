import React from 'react';

import { Link } from 'react-router-dom'

import styled from 'styled-components'

function Menu(){

    return(
        <div>
            
            <div>
                Menu outlining what Conway's game of life is.
            </div>
            <div>
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
            </div>
        </div>
    )
}

export default Menu