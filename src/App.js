import React from "react";
import DataTable from "./Components/Table/Table";
import TableController from "./Components/Table/TableController";
import { Grid } from "@material-ui/core";

  function App() {
    return (
      <div>
        <Grid container spacing={3} justifyContent={'center'}>
          <Grid item xs={10} spacing={1} justifyContent={'center'}>
            <TableController />
          </Grid>
          <Grid item xs={10}>
            <DataTable />
          </Grid>
        </Grid>
      </div>
    )}

    export default App