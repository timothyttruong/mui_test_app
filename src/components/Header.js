import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6">My Simple Website</Typography>

            <Button sx={{color:'white'}} component={Link} to="/">
                Form
            </Button>

            <Button sx={{color:'white'}} component={Link} to="/StateOne">
              State One
            </Button>

            <Button sx={{color:'white'}} component={Link} to="/Table">
              Table
            </Button>

            {/*<Link to="/">Form</Link>
            <Link to="/StateOne">State One</Link>*/}
        </Toolbar>

    </AppBar>
  )
}

export default Header