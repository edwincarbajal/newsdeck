import React from 'react'
import {
  Grid
} from 'semantic-ui-react'
import "../styles.css";
import SideBar from "../components/sidebar";

export default ({ children }) => (
  <Grid columns={2}>
    <Grid.Row stretched>
      <Grid.Column width={1}>{<SideBar />}</Grid.Column>
      <Grid.Column>
        {children}
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
