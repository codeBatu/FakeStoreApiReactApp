import React from 'react'
import { Card, Image, Button, CardContent } from 'semantic-ui-react'

const Cards = ({ item, func }) => {
  return (
    <>
      <Card>
        <Image src={item.image} />

        <Card.Content>
          <Card.Header>{item.title}</Card.Header>
        </Card.Content>
        <Card.Meta textAlign="right">{item.price} TL</Card.Meta>
        <Card.Content>
          <Button
            size="small"
            onClick={() => {
              func(item)
            }}
            positive
          >
            Add Item
          </Button>
        </Card.Content>
      </Card>
    </>
  )
}

export default Cards
