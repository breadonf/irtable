import React from "react";
import DataTable from "./Components/Table/Table";
import TableController from "./Components/Table/TableController";
import { Box } from "@material-ui/core";

function App() {

  return (
    <div>
      <Box display='flex' p={3}>
        <TableController />
      </Box>
      <Box display='flex' p={3}>
        <DataTable />
      </Box>

    </div>
  );
}

export default App;
