import React, { useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, CircularProgress, Alert } from '@mui/material'
import { useState } from 'react';
import Header from './Header';

export const TablePage = () => {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  //Every time Table Page is opened, useEffect and other functions start working.
  //So when the page is opened, useEffect starts fetching, and the loading is still true,therefore it shows loading page
  useEffect(() => {
    const delay = setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/user")
        .then((response) => {
          if (!response.ok) {
            throw Error("Failed to fetch data");
          }
          response.json();
        })
        .then((data) => { setUsers(data); setLoading(false); })
        .catch((error) => { //When an error is catched, setError to what type of error, and stop loading
          console.log(error);
          setError(error);
          setLoading(false);
        })
    }, 2000);
    return () => clearTimeout(delay);

  }, []);

  //shows an alert if error is caught
  if (error) {
    return (
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}>
        <Alert severity='error'>{error.message}</Alert>
      </Box>
    )
  }

  //shows loading state
  if (loading) {
    return (
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box>
      <Header />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              users.map((user) => (
                <TableRow>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.address.street}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default TablePage
