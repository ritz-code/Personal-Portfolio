import React, { Suspense, useState, useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Layout from "../src/components/layout";
import HomeContainer from './sections/home/home-container';
import Blog from './pages/blog/blog';
import Contact from './sections/contact/contact';
import Loading from './components/loading';
import About from './sections/about/about';
import PageNotFound from './components/pageNotFound';
import Filler from './components/filler';
import Filler2 from './components/filler2';
import Portfolio from './sections/projects/portfolio';
import BlogSection from './sections/blog/blogSection';
import OnePost from '../src/pages/blog/onePost';

import './App.scss';
import './styles/scss/main.scss';

export const ThemeContext = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  //let isDarkTheme = localStorage.getItem('darkTheme');

  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
          <Layout>
            {/* A <Routes> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/blog/:slug" element={<OnePost />} />
            </Routes>
          </ Layout>
        </ThemeContext.Provider>
      </Router>
    </Suspense>
  );
}

export default App;


const Home = () => {
  const { darkTheme } = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: darkTheme ? '#1a1b1e' : '#edeae5',
    color: darkTheme ? '#f3f2f9' : '#1a1b1e'
  }

  return (
    <>
      <main style={themeStyles} >
        <HomeContainer />
        <About />

        <Suspense fallback={<Loading />}>
          <Filler />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <Portfolio />
        </Suspense>
        
        <Suspense fallback={<Loading />}>
          <Filler2 />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <BlogSection />
        </Suspense>



        <Suspense fallback={<Loading />}>
          <Contact />
        </Suspense>

      </main>
    </>
  )
}
