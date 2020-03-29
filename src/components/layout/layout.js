import React from 'react'
import {
  Grid
} from 'semantic-ui-react'
import "./layout.css";
import SideBar from "../../components/sidebar/sidebar";

export default ({ children }) => (
  <Grid stretched columns={2}>
    <Grid.Row>
      {/* <Grid.Column stretched width={15}>
        <Grid stretched columns={"equal"}>
          {children}
        </Grid>
      </Grid.Column> */}
      <div className="MyContainer">
        {children}
      </div>
    </Grid.Row>
  </Grid>
)
