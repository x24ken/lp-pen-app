import React from 'react'
import styled, { keyframes } from 'styled-components'

interface Props {
  imageUrl: string
  productName: string
}

const HeroSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const animate = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
        color: blue;
    }
`

const ProductName = styled.h1`
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 36px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  /* animation: ${animate} 0.5s ease-in-out; */
  &:hover {
    animation: ${animate} 0.5s ease-in-out;
    animation-fill-mode: forwards;
  }
`

const HeroSection: React.FC<Props> = (props) => {
  return (
    <HeroSectionContainer>
      <Image src={props.imageUrl} alt={props.productName} />
      <ProductName>{props.productName}</ProductName>
    </HeroSectionContainer>
  )
}

export default HeroSection
