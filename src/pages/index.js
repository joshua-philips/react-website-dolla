import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      <Navbar toggle={toggle}></Navbar>
    </>
  );
};

export default Home;
