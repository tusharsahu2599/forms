import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./form.css"
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

export const Form = ({ handleClose }) => {
  const classes = useStyles();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword]= useState('');





  function isUserName(userName){
    let num = ['1','2','3','4','5','6','7','8','9'];

    for(let i=0; i<userName.length; i++){
      if(num.includes(userName[i])){
        return true;
      }
    }
    return false;
  }


  const handleSubmit = e => {
    e.preventDefault();
    if(isUserName(userName) && password && email){
      axios.post("https://crime-notice-app.herokuapp.com/register",{
        username : userName,
        password : password,
        email : email
      })
      .then((response) => {
        console.log(response);
      }).catch((err)=>{
        console.log(err)
      })

    }
    else{
      alert("username must be alphanumeric")
    }
    handleClose();
  };

  return (
    <div className="container">
        <div className="heading">
            <h1>Notice</h1>

        </div>
 <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="User Name"
        variant="filled"
        value = {userName}
        required
        onChange={(e)=>{setUserName(e.target.value)}}

     
      />
      <TextField
        label="email"
        variant="filled"
        value = {email}
        required
        onChange={(e)=>{setEmail(e.target.value)}}

      
      />
      <TextField
        label="password"
        password = "password"
        value = {password}
        required
        onChange={(e)=>{setPassword(e.target.value)}}

        
        
      />
    
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary"
        >
          Submit
        </Button>
      </div>
    </form>
    </div>
   
  );
};

