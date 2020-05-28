import styled from 'styled-components'

import inside from '../assets/griddysin.jpg'
import menu from '../assets/menu1.jpg'

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
            min-width: 623px;
        }

        div.inner {
            background-image: url(${menu});
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
            color: #111111;
            line-height: 1.5rem;
            letter-spacing: .03rem;
            margin: 0;
            padding: 0.3rem 0;
        }

        h2{
            font-family: 'Bangers', cursive;
            font-size: 2.5rem;
            letter-spacing: .15rem;
            color: #F39D63;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #A74104;
            letter-spacing: .2rem;
            padding: .5rem 0 .5rem 0;
            margin: 0;
        }
        h3{
            font-family: 'Bangers', cursive;
            font-size: 1.8rem;
            letter-spacing: .15rem;
            color: #F39D63;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #A74104;
            padding: 0;
            margin: 0;
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
        
        div.menu-content{
            background-image: url(${menu});
            text-align: left;
            display: flex;
            justify-content: flex-end;
        }
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
    padding: 1.5rem 3rem;
`

export const GridBackground = styled.div`
    background-color: #EDFFED;
    margin-top: 1.8rem;
`

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0 1rem;
`

export const ButtonsGrid = styled.div`
    border: #A74104 solid 2px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: .3rem;
    margin-top: .5rem;
    margin-bottom: 0;
    min-width: 510px;
    background-color: #EDFFED;
    
    button {
        width: 6rem;
        padding: .3rem;
        font-size: 1.2rem;
        margin: .3rem .15rem;
    }
`