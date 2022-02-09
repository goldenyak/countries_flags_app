import React from 'react';
import {useState, useEffect} from "react";
import styled from "styled-components";
import {IoMoonOutline, IoMoonSharp} from "react-icons/io5";
import {Container} from "./Container";
import {Link} from "react-router-dom";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
    to: "/",

})`
  color: var(--colors-text);
  font-size: var(--fs-md);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: var(--colors-text);
  font-size: var(--fs-md);

`;

export const Header = () => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme]);

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Хотите найти страну?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {/*{theme === 'light' ? <IoMoonOutline/> + 'Light Theme'  : <IoMoonSharp/> + 'Dark Theme'}*/}
                        <IoMoonSharp/> {theme === 'light' ? 'Темная тема' : 'Светлая тема'}
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};
