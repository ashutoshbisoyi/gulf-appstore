import React from 'react';
import { Container } from 'react-bootstrap';
import {
  AiOutlineSearch,
  AiOutlineDownload,
  AiFillAppstore,
} from 'react-icons/ai';
import mockup from '../assets/mockup.png';
const HeroComponent = () => {
  return (
    <Container fluid className='hero-component'>
      <div>
        <p>
          <AiFillAppstore className='icon' />
          2500+ trending apps at one place
        </p>
        <h1>Gulf App Store</h1>
        <button>
          <AiOutlineSearch className='icon' />
          Explore Apps
        </button>
        <button>
          <AiOutlineDownload className='icon' />
          Download Now
        </button>
      </div>
      <img src={mockup} alt='mockup image' />
      <img src={mockup} alt='mockup image' className='left-mockup' />
    </Container>
  );
};

export default HeroComponent;
