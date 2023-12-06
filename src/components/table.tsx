import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { User } from '@/utils/models.ts/user';
import { red } from '@mui/material/colors';
import { colors } from '@mui/material';


function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

export default function BasicTable({users}:any) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow sx={{backgroundColor: "cyan", '& .css-18yjax5-MuiTableRow-root' : {fontWeight:700}}} >
            <TableCell>Name</TableCell>
            <TableCell align="right">Email Address</TableCell>
            <TableCell align="right">Total Posts</TableCell>
            <TableCell align="right">Profile Bio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user :User) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.posts.length}</TableCell>
              <TableCell align="right">{user.profile.bio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}