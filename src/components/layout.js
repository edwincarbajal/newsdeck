import React from 'react'
import {
  Grid
} from 'semantic-ui-react'

export default ({ children }) => (
  <Grid stretched columns={2}>
    <Grid.Row>
      <Grid.Column width={1}>{/* Sidebar nav */}</Grid.Column>
      <Grid.Column stretched width={15}>
        <Grid stretched columns={"equal"}>
          {children}
        </Grid>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
