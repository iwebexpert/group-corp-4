import React,{useContext, useEffect}from 'react';
import styled from "styled-components";
import { ThemeProvider } from 'styled-components';
import {createGlobalStyle } from "styled-components";
import { AppContext } from '../../contexts/ThemeContext';
import useLocalStorage from '../../hooks/useLocalStorage';


function NavBar(props) {
  const [state,dispatch] =useContext(AppContext)
  const [value,setValue] =useLocalStorage('theme')
  const {currentTheme}=state


    const toggleTheme = () => {
        dispatch({ type: "toggleTheme" });
      };
    useEffect(()=>{
        dispatch({ type: "toggleTheme" });
         setValue(currentTheme.id) 
    },[])
  
    
    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyles/>
        <NavBars>
        <NavMenu>
          <NavLink>Home</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>Contact</NavLink>
        </NavMenu>
        <NavToggle onClick={toggleTheme}>theme</NavToggle>
      </NavBars>
        </ThemeProvider>
    
    );
}
const NavBars = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.navColor};
  min-height: 50px;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${props => props.theme.textColor};
  list-style: none;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const NavLink = styled.div`
  display: block;
  padding: 1rem;
  transition: 250ms ease background-color;
  &:hover {
    cursor: pointer;
    background-color: skyblue;
  }
`;

const NavToggle = styled(NavLink)`
  text-decoration: underline;
`;
const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: ${(state) => state.theme.backgroundColor};
    font-family: sans-serif;
  }
`;


export default NavBar;