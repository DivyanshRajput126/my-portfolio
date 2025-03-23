import styled, { ThemeProvider } from 'styled-components';
import {darkTheme} from './utils/Themes';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Suspense } from 'react';
import PreLoader from './components/Preloader';


const HeroSection = React.lazy(() => import ('./components/sections/HeroSection'));
const Experience = React.lazy(() => import ('./components/sections/Experience'));
const Skills = React.lazy(() => import ('./components/sections/Skills'));
const Education = React.lazy(() => import ('./components/sections/Education'));
const Projects = React.lazy(()=> import('./components/sections/Projects'));
const Contact = React.lazy(()=> import('./components/sections/Contact'));
const Footer = React.lazy(()=> import('./components/Footer'));
const Navbar = React.lazy(()=>import('./components/Navbar'));

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <PreLoader/>
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar/>
        </Suspense>
        <Body>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
          {/* <StartCanvas/> */}
          {/* </Suspense> */}
          <div>
          <Suspense fallback={<div>Loading...</div>}>
            <HeroSection/>
          </Suspense>
            <Wrapper>
            <Suspense fallback={<div>Loading...</div>}>
            <Experience/>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <Skills/>
            </Suspense>
            </Wrapper>
            <Wrapper>
            <Suspense fallback={<div>Loading...</div>}>
              <Education/>
              </Suspense>
            </Wrapper>
            <Wrapper>
            <Suspense fallback={<div>Loading...</div>}>
              <Projects/>
              </Suspense>
              <Suspense fallback={<div>Loading...</div>}>
              <Contact/>
              </Suspense>
            </Wrapper>
            <Footer/>
          </div>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
