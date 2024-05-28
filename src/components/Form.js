import React, { useState } from 'react'
import { Box, Typography, Checkbox, Radio, Button, TextField } from '@mui/material'
import Header from './Header';

const Form = () => {
    const [name, setName] = useState(""); 

    const [email, setEmail] = useState("");

    const [termsAccepted, setTermAccepted] = useState(false);

    const [gender, setGender] = useState("");

    const [error, setError] = useState({});

    const handleSubmission = (e) => {
        e.preventDefault(); //precentDefault does not change the value before submitted

        const errorObj = {};

        if (!name){ //if name is emptu
            errorObj.name = "Name is required!";
        }

        if (!email){
            errorObj.email = "Email is required!";
        }
        else if (!/\S+@\S+\.\S+/.test(email)) { //function to check if email is of the correct form
            errorObj.email = "Invalid email format!";
        }

        if (Object.keys(errorObj).length === 0){   //Objects.key returns keys of an array, .length returns the length of that array => If there is no error or error object is empty
            console.log("Form submitted", {name, email, termsAccepted, gender});
            console.log("Clean the states")
            setName("");
            setEmail("");
            setTermAccepted(false);
            setGender("");
            setError({});
        } else {
            setError(errorObj);
        }

        
    }

  return (<>
    <Box>
     {/*<Header />*/}
    </Box>
    <Box sx={{display:"flex", justifyContent:"center"}}>
        

        <form onSubmit={handleSubmission} style={{width: "20%"}}>
            <Typography variant='h5'>
                Simple Form
            </Typography>

            <Box margin={4} marginLeft={0}>
                <TextField fullWidth id="name" 
                value ={name}
                label="Name"
                onChange={(e) => setName(e.target.value)} 
                error={!!error.name}
                helperText={error.name}/>
            </Box>
            
            <Box margin={4} marginLeft={0}>
                <TextField fullWidth
                label="Email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!error.email}
                helperText={error.email}
                placeholder='Email'/>
            </Box>
            

            <Box>
                <Checkbox check={termsAccepted} onChange={(e) => {setTermAccepted(e.target.checked)}} />

                <label htmlFor='termsAccepted'>I accept the terms and conditions</label>
            </Box>

            <Box>
                <Typography variant='subtitle1'>Gender:</Typography>

                <Radio checked={gender == "male"} 
                onChange={() => setGender("male")}
                value="male" />  
                <label htmlFor='male'>Male</label>

                <Radio checked={gender == "female"} 
                onChange={() => setGender("female")}
                value="female" />  
                <label htmlFor='female'>Female</label>
            </Box>

            <Box sx={{display:"flex", justifyContent:"center"}}>
                <Button variant="contained" type="submit" color="primary">SUBMIT</Button>
            </Box>
            
        </form>
    </Box>
    </>
  )
}

export default Form