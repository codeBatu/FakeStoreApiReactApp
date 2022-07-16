import React from 'react'
import { Grid } from 'semantic-ui-react'
import Cards from '../Card/Card'
const Grids = ({ products, func }) => {
  return (
    <>
      {' '}
      <div style={{ margin: '10px', padding: '20px' }}>
        <Grid columns={4}>
          {products.map((item, i) => (
            <Grid.Column key={i}>
              {' '}
              <Cards
                func={() => {
                  func(item)
                }}
                item={item}
              ></Cards>
            </Grid.Column>
          ))}
        </Grid>
      </div>
    </>
  )
}

export default Grids
