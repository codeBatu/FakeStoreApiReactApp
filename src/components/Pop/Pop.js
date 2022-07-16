import React from 'react'
import { Button, Header, Icon, Modal, Label } from 'semantic-ui-react'
import Tables from '../Table/Tables'

function Pop({ basketCount, basket }) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
      trigger={
        <Button>
          <Icon name="shopping basket" size="small" />
          <Label circular pointing="left">
            {basketCount}
          </Label>
        </Button>
      }
    >
      <Header icon>Basket List</Header>
      <Modal.Content>
        <Tables basketList={basket}></Tables>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={() => setOpen(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" inverted onClick={() => setOpen(false)}>
          <Icon name="checkmark" /> Purchase Now
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default Pop
