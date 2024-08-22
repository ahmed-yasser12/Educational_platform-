import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, Input, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../Assets/Images/logo.svg";

export default function Register() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [Gender, setGender] = React.useState("");
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  
  return <>

<div className="p-4 my-5 border border-secondary rounded  text-center  w-25 mx-auto  ">
        <div className="my-2">
          <img src={Logo} className="w-50" alt="" />
        </div>
        <TextField
          id="standard-textarea"
          label="Your Name "
          placeholder="Full Name"
          multiline
          fullWidth
          InputLabelProps={{className:"customLabel"}}
          variant="standard"
          sx={{ mb: "20px", width: "100%" }}
        />
        <TextField
          id="standard-textarea"
          label="Your Email "
          placeholder="Enter your Email"
          multiline
          fullWidth="30"
          variant="standard"
          sx={{ mb: "20px", width: "100%" }}
        />
        <FormControl sx={{ mb: "20px", width: "100%" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl sx={{ mb: "20px", width: "100%" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Confirm Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>

              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl
          variant="standard"
          sx={{ mb: "20px", textAlign: "left", minWidth: "100%" }}
        >
          <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={Gender}
            onChange={handleChange}
            label="Gender"
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          variant="standard"
          sx={{ mb: "20px", textAlign: "left", minWidth: "100%" }}
        >
          <InputLabel id="demo-simple-select-standard-label">
            Your Class{" "}
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={Gender}
            onChange={handleChange}
            label="Gender"
          >
            <MenuItem value={"3h"}>3h</MenuItem>
            <MenuItem value={"2h"}>2h</MenuItem>
            <MenuItem value={"1h"}>1h</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="standard-textarea"
          label="Your Phone "
          placeholder="Enter your phone"
          multiline
          fullWidth="30"
          variant="standard"
          sx={{ mb: "20px", width: "100%" }}
        />
        <TextField
          id="standard-textarea"
          label="Your family Phone "
          placeholder="Enter your family phone"
          multiline
          fullWidth="30"
          variant="standard"
          sx={{ mb: "20px", width: "100%" }}
        />

        <button  className="w-75  mt-4 btn-lg btn btn-danger">Register </button>
        <div className="d-flex  mt-2 ">
          <p className="mx-1">Do you have any account ?</p>
          <Link to="/signln">Login</Link>
        </div>
      </div>
  
  
  </>
}
