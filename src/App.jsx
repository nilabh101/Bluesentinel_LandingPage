import React, { useState } from 'react';
import { ThemeProvider } from 'react-jss';
import { theme } from './styles/theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Navbar onLoginClick={() => setIsLoginOpen(true)} />
      <main>
        <Hero onLoginClick={() => setIsLoginOpen(true)} />
        <Features />
        <Team />
        <Contact />
      </main>
      <Footer />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </ThemeProvider>
  );
}

export default App;
