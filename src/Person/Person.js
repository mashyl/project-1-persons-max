import React from 'react';
import styled from 'styled-components';
// import './Person.css'

const StyledDiv = styled.div`
    @media (min-width: 500px): {
            width: '450px'
    }

    margin: 1rem auto;
    text-align: center;
    border: 1px solid lightblue;
    box-shadow: 2px 3px 3px lightslategray;
    width: 60%;
    padding: 1.5rem;
`;

const person = (props) => {
    return (
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old.</p>
            <input type='text' onChange={props.change} value={props.name}></input>
        </StyledDiv>
    )
}

export default person;