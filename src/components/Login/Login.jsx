import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Checkbox, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../../Assets/Images/logo.svg";
export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate=useNavigate()
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function goHome(){
    navigate("/")
  }
 
 return <>
  
  <div className="p-3 my-5 border border-secondary rounded  text-center  w-25 mx-auto  ">
        <div className="my-5">
          <img src={Logo} className="w-50" alt="" />
        </div>

        <TextField
          fullWidth
          sx={{ mb: "20px" }}
          id="outlined-textarea"
          label="Your Email"
          placeholder="Enter Your Email"
          multiline
        />
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <div className="d-flex justify-content-center">
          <FormControlLabel control={<Checkbox />} label="Remmeber Me" />
          <button className="btn btn-transparent text-secondary ">
            I forgot my password ?
          </button>
        </div>
        <button onClick={goHome} className="w-75  mt-4 btn-lg btn btn-danger">Login </button>
        <div className="d-flex  mt-2 ">
          <p className="mx-1"> you do not have an account ? </p>
          <Link to="/register">New Account </Link>
        </div>
      </div>  
  
  
  </>
}
