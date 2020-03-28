import React from 'react'
import {
  Grid
} from 'semantic-ui-react'

export default ({ children }) => (
  <Grid columns={2}>
    <Grid.Row stretched>
      <Grid.Column width={1}>{/* Sidebar nav */}</Grid.Column>
      <Grid.Column>
        {children}
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
