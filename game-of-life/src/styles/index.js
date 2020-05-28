import styled from 'styled-components'

import inside from '../assets/griddysin.jpg'

export const InsideContainer = styled.div`
    background-image: url(${inside});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items; center;

        div.grid {
            min-width: 550px;
        }

        div.menu {
            min-width: 700px;
        }

        button {
            width: 10rem;
            padding: .25rem 1rem;
            border: #A74104 solid 2px;
            color: #A74104; 
            font-size: 1.8rem;
            border-radius: 10px;
            background-color: #F9CC83;
            font-family: 'Bangers', cursive;
        }

        p{
            font-family: 'Bangers', cursive;
            font-size: 1.6rem;
            color: #F39D63;
        }

        h2{
            font-family: 'Bangers', cursive;
            font-size: 2.4rem;
            letter-spacing: .1rem;
            color: #F39D63;
        }
`
export const ContentBorder = styled.div`
    width: 40%;
    padding: .5rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F9CC83;
    min-width: 450px;
`
export const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: #A74104 solid 2px;
    background-color: #EDFFED;
    border-radius: 10px;
`
export const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
`