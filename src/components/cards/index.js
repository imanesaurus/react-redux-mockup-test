import React from 'react'
import { CardContainer } from './cards.styles'

const Cards = ({ children }) => {
    return (
        <CardContainer>
            {children}
        </CardContainer>
    )
}

export default Cards