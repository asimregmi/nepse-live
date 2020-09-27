import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import nepsePrice from './nepsePrice';

let jsondata;   
fetch('http://localhost:5000/')
  .then(
        function(response){ 
          return response.json();
        }
      )
  .then(
        function(json){
          jsondata = json;
        }
      )

console.log(jsondata);

const columns = [
  { id: 'companyName', label: 'Company Name', minWidth: 10, },
  { id: 'trend', label: 'Trend', minWidth: 10, },
  { id: 'open', label: 'Open', minWidth: 50, align: 'right' },
  { id: 'volume', label: 'Traded Shares', minWidth: 50, align: 'right' },
  
  {
    id: 'maxPrice',
    label: 'Max Price',
    minWidth: 50,
    align: 'right',
  },
  {
    id: 'minPrice',
    label: 'Min Price',
    minWidth: 50,
    align: 'right',
  },
  {
    id: 'previousClosing',
    label: 'Previous Closing',
    minWidth: 50,
    align: 'right',
  },
  {
    id: 'difference',
    label: 'Difference',
    minWidth: 50,
    align: 'right',
  },
];

function createData(companyName, trend, open, volume, maxPrice, minPrice, previousClosing, difference) {
  
  return { companyName, trend, open, volume, maxPrice, minPrice, previousClosing, difference};
}

const rows = [];
let trend;
for (let i = 0; i < nepsePrice.length; i++) {
  
  if (nepsePrice[i].difference > 0) {
    trend = <ion-icon style={{color: 'green'}} name="caret-up-circle"></ion-icon>;
  }
  else if (nepsePrice[i].difference < 0) {
    trend = <ion-icon style={{color: 'red'}} name="caret-down-circle"></ion-icon>;
  }
  else {
    trend = <ion-icon style={{color: 'orange'}} name="ellipse"></ion-icon>;
  }
  rows[i] = createData(nepsePrice[i].companyName, trend, nepsePrice[i].closingPrice, nepsePrice[i].tradedShares, nepsePrice[i].maxPrice, nepsePrice[i].minPrice, nepsePrice[i].previousClosing, nepsePrice[i].difference)
}


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: '90vh',
    maxWidth: '100vw',
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(200);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
    <h1 className="f3 f2-m f1-l fw2 black-90 mv3 tc fw3">
        Today's Live Price
    </h1>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, background: '#e5eafe', fontWeight: 'bold' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} >
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[25, 50, 100, 200, 300]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}