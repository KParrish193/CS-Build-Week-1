import  React, { useState, useCallback, useRef} from 'react';
import { Link } from 'react-router-dom';

import { InsideContainer, ContentBorder, ContentContainer, ButtonsGrid, Buttons, GridBackground } from '../styles';

import produce from 'immer';

// number of rows and columns in grid
const numRows = 25;
const numCols = 30;

// determining neighbors
const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0]
];

const generateEmptyGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
        rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
};

function Grid() {

    // set initial grid state
    const [grid, setGrid] = useState(() => {
        return generateEmptyGrid();
    });
    
    // set running state
    const [running, setRunning] = useState(false);
    
    // set running reference for sim
    const runningRef = useRef(running);
        runningRef.current = running;


    const runSimulation = useCallback(() => {
        if (!runningRef.current) {
            return;
        }
    
        setGrid(g => {
            return produce(g, gridCopy => {
            for (let i = 0; i < numRows; i++) {
                for (let k = 0; k < numCols; k++) {
                let neighbors = 0;
                operations.forEach(([x, y]) => {
                    const newI = i + x;
                    const newK = k + y;
                    if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                    neighbors += g[newI][newK];
                    }
                });
    
                if (neighbors < 2 || neighbors > 3) {
                    gridCopy[i][k] = 0;
                } else if (g[i][k] === 0 && neighbors === 3) {
                    gridCopy[i][k] = 1;
                }
                }
            }
            });
        });
    
        setTimeout(runSimulation, 100);
    }, []);

    return(
        <InsideContainer>
    
        <Link to='inside'>
            <button
                style={{
                    marginBottom: ".5rem"
                }}
                >
                Back
            </button>
        </Link>

        <ContentBorder className="grid">
        <ContentContainer className="inner">
        
        <h3>Presets</h3>
        <ButtonsGrid>
            <button
                onClick={() => {
                const rows = [];
                for (let i = 0; i < numRows; i++) {
                    rows.push(
                    Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
                    );
                }
                setGrid(rows);
                }}
            >
            Random
            </button>
            <button> Stuff </button>
            <button>Something</button>
        </ButtonsGrid>

        <GridBackground>
        <div
            style={{
            display: "grid",
            gridTemplateColumns: `repeat(${numCols}, 17px)`,
            border: "1px solid #111111",
            }}
        >
            {grid.map((rows, i) =>
            rows.map((col, k) => (
                <div
                key={`${i}-${k}`}
                onClick={() => {
                    const newGrid = produce(grid, gridCopy => {
                    gridCopy[i][k] = grid[i][k] ? 0 : 1;
                    });
                    setGrid(newGrid);
                }}
                style={{
                    width: 17,
                    height: 17,
                    backgroundColor: grid[i][k] ? "#CE6732" : undefined,
                    border: "solid 1px #555555",
                    borderRadius: "5px"
                }}
                />
            ))
            )}
            </div>
            </GridBackground>

            <Buttons>
                <button
                    onClick={() => {
                    setRunning(!running);
                    if (!running) {
                        runningRef.current = true;
                        runSimulation();
                    }
                    }}
                >
                    {running ? "Stop" : "Start"}
                </button>
                <p>
                Generation:
                </p>
                <button
                    onClick={() => {
                    setGrid(generateEmptyGrid());
                    }}
                >
                    Reset
                </button>
            </Buttons>

            </ContentContainer>
            </ContentBorder>
        </InsideContainer>
    )
} 

export default Grid




