import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {
  RocketLaunchSharp,
  ThumbUpSharp,
  ThumbDownSharp,
} from '@mui/icons-material/';
import spacex from '../Providers/spacex';

const columns: GridColDef[] = [
  {
    field: 'flight_number',
    headerName: 'Flight',
    width: 80,
    align: 'center',
    renderCell: (param) => (
      <>
        <RocketLaunchSharp /> <strong>&nbsp;&nbsp;{param.value}</strong>
      </>
    ),
  },
  { field: 'name', headerName: 'MissionName', width: 200, align: 'center' },
  {
    field: 'date_utc',
    headerName: 'Date',
    width: 150,
    align: 'center',
    valueFormatter: (param) => new Date(param.value).toLocaleDateString(),
  },
  { field: 'details', headerName: 'Infos', width: 1050, align: 'center' },
  {
    field: 'success',
    headerName: 'Success',
    width: 200,
    align: 'center',
    renderCell: (param) =>
      param.value ? (
        <ThumbUpSharp color="success" />
      ) : (
        <ThumbDownSharp color="error" />
      ),
  },
];

function Launches() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    spacex.get('/v5/launches').then((res) => {
      setTableData(res.data);
      console.log(res.data);
    });
  }, []);

  console.log('launches');

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

export default Launches;
