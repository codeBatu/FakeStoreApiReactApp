import React from 'react'
import { Table } from 'semantic-ui-react'
const Tables = ({ basketList }) => {
  return (
    <>
      {' '}
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İtem Name</Table.HeaderCell>
            <Table.HeaderCell>İtem Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {basketList.map((item, i) => (
            <Table.Row key={i}>
              <Table.Cell>
                {item.title === '' ? 'İtem Name' : item.title}
              </Table.Cell>
              <Table.Cell>{item.price} TL</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  )
}

export default Tables
