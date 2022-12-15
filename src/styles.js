import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-width: 400px;
    height: 100vh;
    min-height: 860px;
    background-color: #303030;

    display: flex;
    align-items: center;
    justify-content: center;
`


export const Content = styled.div`
    background-color: #000000;
    width: 50%;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

