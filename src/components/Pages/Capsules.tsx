import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import spacex from '../Providers/spacex';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Id', width: 80 },
  { field: 'type', headerName: 'Type', width: 200 },
  { field: 'water_landings', headerName: 'Water Landing', width: 150 },
  { field: 'launches', headerName: 'Launches', width: 1100 },
  { field: 'status', headerName: 'Status', width: 200 },
];

function Capsules() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    spacex.get('/v4/capsules').then((res) => {
      setTableData(res.data);
      console.log(res.data);
      console.log('ok');
    });
  }, []);

  console.log('capsules');

  return (
    <div style={{ height: '85vh', width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

export default Capsules;
