import React from "react";
import DataTable from "./Components/Table/Table";
import TableController from "./Components/Table/TableController";

function App() {
  return (
    <div>
      <TableController />
      <div>
        <DataTable />
      </div>
    </div>
  );
}

export default App;
