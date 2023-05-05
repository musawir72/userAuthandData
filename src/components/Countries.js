import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';  
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Country', width: 130 },
  { field: 'capital', headerName: 'Capital', width: 130 },
  { field: 'currency', headerName: 'Currency', width: 130 },
  { field: 'phone', headerName: 'Code', type: 'number', width: 130, },
];



export default function Countries({data}) {
  return (
    <div style={{ height: 400, width: '100%' }}>
       <h2 className='center'>Data Table</h2>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

//proptyes
Countries.propTypes = {
    data: PropTypes.array.isRequired
}