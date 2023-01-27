import React from 'react'
import styled from 'styled-components'

interface Props {
  title: string
  imageUrl: string
  description: string
  buttonText: string
  onClick: () => void
}

const CardContainer = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    transform: scale(1.05);
  }
`

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin: 16px 0px;
  text-align: center;
`

const Description = styled.p`
  font-size: 18px;
  color: #666;
  text-align: center;
  margin: 0px 16px;
`

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  font-size: 18px;
  padding: 12px 24px;
  border-radius: 5px;
  border: none;
  margin-top: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`

const Card: React.FC<Props> = (props) => {
  return (
    <CardContainer>
      <Image src={props.imageUrl} alt={props.title} />
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <Button onClick={props.onClick}>{props.buttonText}</Button>
    </CardContainer>
  )
}

export default Card
