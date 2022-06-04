import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';
import {Link , useLocation, useNavigate} from "react-router-dom";


const Homepage = () => {



  let location = useLocation();
  const {pathname} = location
  console.log(pathname)
  console.log(location)

  let navigate = useNavigate();



  return (
    <div>
      <h1>Get started with React-Router 6</h1>
      <div>
        <BasicBreadcrumbs/>
      </div>
    </div>
  );
};

export default Homepage;


function BasicBreadcrumbs() {

  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          to="/posts"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
    </div>
  );
}