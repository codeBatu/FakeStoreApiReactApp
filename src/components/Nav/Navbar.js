import React from 'react'
import {
  Menu,
  MenuItem,
  Button,
  Icon,
  Container,
  Label,
  Input,
} from 'semantic-ui-react'
import Pop from '../Pop/Pop'
const Navbar = ({ basketCount, basket }) => {
  return (
    <div style={{}}>
      <Menu text>
        <Container text>
          <MenuItem>
            <Label circular>Mrendyol</Label>

            <Icon name="angle double right" />
          </MenuItem>
          <MenuItem position="left"> </MenuItem>
          <MenuItem>
            <Input icon={{ name: 'search', link: true }}></Input>
          </MenuItem>
          <MenuItem position="right">
            <Pop basketCount={basketCount} basket={basket}></Pop>
          </MenuItem>
        </Container>
      </Menu>
    </div>
  )
}

export default Navbar
