import React, { useState } from "react";
import {Link as LinkR} from 'react-router-dom';
import styled, { useTheme } from "styled-components";
import {Bio} from '../data/constants';
import {MenuRounded} from '@mui/icons-material';

const Nav = styled.div`
background-color:${({theme}) =>theme.bg};
height:80px;
display:flex;
align-items:center;
justify-content:center;
font-size:1rem;
position:sticky;
top:0;
z-index:10;
color:white;`;

const NavbarContainer = styled.div`
width:100%;
max-width:1200px;
padding:0 24px;
display:flex;
align-items:center;
justify-content:space-between;
font-size:1rem;`;

const NavLogo = styled(LinkR)`
width:80%;
padding:0 6px;
font-weight:500;
font-size:18px;
text-decoration:none;
color:inherit;
`;

const NavItems = styled.ul`
width:100%;
display:flex;
justify-content:center;
align-items:center;
gap:32px;
list-style:none;
padding 0 6px;

@media screen and (max-width:768px){
display:none}`;

const NavLink = styled.a`
color:${({theme}) => theme.text_primary};
font-weight:500;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;
&:hover{color:${({theme})=>theme.text_primary}};
`;

const ButtonContainer = styled.div`
width:80%;
display:flex;
justify-content:end;
align-items:center;
padding: 0 6px;
@media screen and (max-width:768px){
    display:none;
}`;

const GithubButton = styled.a`
border: 1px solid ${({theme})=>theme.primary};
color:${({theme})=>theme.text_primary};
justify-content:center;
display:flex;
align-items:center;
border-radius:20px;
padding:10px 20px;
cursor:pointer;
font-size:16px;
font-weight:500:
transition:all 0.6s ease-in-out;
text-decoration:none;
&:hover{
    background:${({theme})=>theme.primary};
    color:${({theme})=>theme.text_primary};
}`;

const MobileIcon = styled.div`
color:${({theme})=>theme.text_primary};
align-items:center;
display:none;
height:100%;
@media screen and (max-width:768px){
    display:block;
}`;

const MobileMenu = styled.ul`
width:100%;
display:flex;
align-items:start;
gap:16px;
padding:0 6px;
flex-direction:column;
list-style:none;
padding: 12px 40px 24px 40px;
position:absolute;
top:80px;
right:0; 
background: ${({theme})=>theme.card_light+99};
transition:all 0.6s ease-in-out;
tranform:${({isOpen})=>isOpen?"translateY(0)":"translateY(-100%)"};
border-radius:0 0 20px 20px;
box-shadow:0 0 10px 0 rgba(0,0,0,0.2);
opacity:${({isOpen})=>(isOpen?"100%":"0")};
z-index:${({isOpen})=>(isOpen?"1000":"-1000")}`;



const Navbar = () =>{
    const [isOpen,setIsOpen] = useState(false);
    const theme = useTheme();

    return(
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">Divyansh  Rajput</NavLogo>
                <MobileIcon onClick={() => setIsOpen(!isOpen)}>
                    <MenuRounded style={{color:"inherit"}}/>
                </MobileIcon>
                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#education">Education</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                </NavItems>
                {
                    isOpen && 
                    <MobileMenu isOpen={isOpen}>
                        <NavLink onClick={() => setIsOpen(!isOpen)} href="#home">Home</NavLink>
                        <NavLink onClick={() => setIsOpen(!isOpen)} href="#about">About</NavLink>
                        <NavLink onClick={() => setIsOpen(!isOpen)} href="#experience">Experience</NavLink>
                        <NavLink onClick={() => setIsOpen(!isOpen)} href="#skills">Skills</NavLink>
                        <NavLink onClick={() => setIsOpen(!isOpen)} href="#education">Education</NavLink>
                        <NavLink onClick={() => setIsOpen(!isOpen)} href="#projects">Projects</NavLink>
                        <NavLink onClick={() => setIsOpen(!isOpen)} href="#contact">Contact</NavLink>
                        <GithubButton style={{background:theme.primary,color:theme.text_primary,}} href={Bio.github} target="_blank">Github Profile</GithubButton>
                    </MobileMenu>                 }
                <ButtonContainer>
                    <GithubButton href={Bio.github} target="_blank">Github Profile</GithubButton>
                </ButtonContainer>
            </NavbarContainer>
        </Nav>
    )
}
export default Navbar