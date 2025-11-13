import React from 'react';
import Layout from './components/layout/Layout';
import Home from './components/sections/Home';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Hobbies from './components/sections/Hobbies';
import Generations from './components/sections/Generations';
import Evolution from './components/sections/Evolution';

const App = () => {
  return (
    <Layout>
      <Home />
      <Education />
      <Skills />
      <Hobbies />
      <Generations />
      <Evolution />
    </Layout>
  );
};

export default App;