import React, { useState } from 'react'
import { Box, Stack, Button, Typography } from "@mui/material"
import Header from './Header';

const StateOne = () => {
    const [num, setNum] = useState(0);

    const Subtraction = () => {
        setNum((prevNum) => prevNum - 1)
    }

    const Addition = () => {
        setNum((prevNum) => prevNum + 1)
    }

  return (
    <Box>
        {/**<Header />*/}

        <Stack direction="row" sx={{display:"flex", justifyContent:"center"}}>
            <Button sx={{fontSize:"100px", color:"secondary"}} onClick={() => Subtraction()}>
                -
            </Button>

            <Box p={8} height={150} width={150} bgcolor="blue" sx={{borderRadius:"50%", display:"flex", justifyContent:"center"}}>
                <Typography color={'white'} fontSize={140}>
                    {num}
                </Typography>
            </Box>

            <Button sx={{fontSize:"100px", color:"secondary"}} onClick={() => Addition()}>
                +
            </Button>
        </Stack>
    </Box>
  )
}

export default StateOne