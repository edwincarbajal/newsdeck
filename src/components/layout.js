import React from 'react'
import {
  Grid
} from 'semantic-ui-react'
import "../styles.css";
import SideBar from "../components/sidebar";

export default ({ children }) => (
  <Grid stretched columns={2}>
    <Grid.Row style={{ paddingBottom: 0, marginBottom: 0 }}>
      <Grid.Column width={1}>{<SideBar />}</Grid.Column>
      <Grid.Column stretched width={15} style={{
        overflowX: 'auto',
        overflowY: 'hidden',
        height: '100vh'
      }}>
        {children}
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
