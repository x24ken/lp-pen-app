import React from 'react'
import styled from 'styled-components'

const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  background-color: #f9f9f9;
`

const HeroImage = styled.img`
  width: 50%;
`

const HeroTextWrapper = styled.div`
  width: 50%;
  text-align: center;

  h1 {
    font-size: 36px;
    margin-bottom: 24px;
  }

  p {
    font-size: 18px;
    margin-bottom: 24px;
  }
`

const HeroButton = styled.a`
  font-size: 18px;
  padding: 12px 24px;
  border-radius: 4px;
  background-color: #00a8e8;
  color: #ffffff;
  text-decoration: none;
`

interface Props {
  imageUrl: string
}

const Hero: React.FC<Props> = ({ imageUrl }) => (
  <HeroWrapper>
    <HeroImage src={imageUrl} alt='hero' />
    <HeroTextWrapper>
      <h1>Welcome to our website!</h1>
      <p>Here you can find information about our company and products.</p>
      <HeroButton href='./'>Learn More</HeroButton>
    </HeroTextWrapper>
  </HeroWrapper>
)

export default Hero
