'use client'

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  
`;

const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const Slide = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
`;

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
  };

  return (
    <div
    className='justify-center text-center items-center'
    >
    <CarouselContainer>
      <SlideWrapper style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <Slide>
          <motion.div
            className='bg-red-500 w-[50%] h-[450px] ml-[50%] -translate-x-[50%] rounded-3xl
            justify-center text-center object-center'
          >
            Slide 1
          </motion.div>
        </Slide>
        <Slide>
        <motion.div
            className='bg-red-500 w-[50%] h-96 ml-[50%] -translate-x-[50%]'
          >
            Slide 2
          </motion.div>
        </Slide>
        <Slide>
        <motion.div
            className='bg-red-500 w-[50%] h-96 ml-[50%] -translate-x-[50%]'
          >
            Slide 3
          </motion.div>
        </Slide>
      </SlideWrapper>
      <button onClick={prevSlide}>Anterior</button>
      <button onClick={nextSlide}>Próximo</button>
    </CarouselContainer>
    </div>
  );
};

export default Carousel;
