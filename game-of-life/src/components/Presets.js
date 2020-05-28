import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: row;
`

const Umbrella = styled.button`

`


const Luther = styled.button`
`

const Diego = styled.button`
`

const Allison = styled.button`
`

const Klaus = styled.button`
`

const Five = styled.button`

` 

const Vanya = styled.button`
`

const ChaCha = styled.button`
    border: ;

`

const Hazel = styled.button`

`

const Doughnut = styled.button`
`


function Presets() {
    return(
        <Container>
            <Umbrella> Umbrella </Umbrella>
            <Doughnut> Doughnut</Doughnut>
            <Luther> 1: Space-Boy </Luther>
            <Diego> 2: The Kraken </Diego>
            <Allison> 3: 'I heard A Rumor' </Allison>
            <Klaus> 4: Klaus </Klaus>
            <Five> 5: Five </Five>
            <Vanya> 7: Vanya </Vanya>
            <Hazel> Hazel </Hazel>
            <ChaCha> Cha Cha </ChaCha>
            <button>
                Random
            </button>
        </Container>
    )
}

export default Presets