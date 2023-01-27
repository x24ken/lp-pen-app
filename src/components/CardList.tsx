import { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import Modal from './Modal'

interface Props {
  cards: Array<{
    buttonText: string
    title: string
    description: string
    imageUrl: string
  }>
}

const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0px 30px;
`

const CardList: React.FC<Props> = ({ cards }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <CardListWrapper className='card-list'>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          buttonText={card.buttonText}
          onClick={() => setIsModalOpen(true)}
        />
      ))}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <p>Modal Content</p>
        </Modal>
      )}
    </CardListWrapper>
  )
}

export default CardList
