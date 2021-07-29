import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';

const Layout = ({children, title, desc}) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <AppBar position="fixed" style={{backgroundColor:'red'}}>
        <Toolbar>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100%', alignItems:'baseline'}}>
          <Typography variant="h6">
            {title}
          </Typography>
          <div style={{display:'flex', flexDirection:'row'}}>
            <div style={{borderBottom:router.pathname.includes('pasar')&&"2px solid white"}}>
              <p style={{cursor:'pointer', marginBottom:8}} onClick={()=>router.push('/pasar')}>Auction Market</p>
            </div>
            <div style={{borderBottom:router.pathname.includes('about-us')&&"2px solid white", marginLeft:20}}>
              <p style={{cursor:'pointer', marginBottom:8}} onClick={()=>router.push('/about-us')}>About Us</p>
            </div>
          </div>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <AccountCircleOutlinedIcon fontSize="small" style={{marginRight:10}}/>
            <Typography onClick={()=>router.push("/login")}>Login</Typography>
          </IconButton>
        </div>
        </Toolbar>
      </AppBar>
      <div style={{paddingLeft:40, paddingRight:40, paddingTop:80}}>
      {children}
      </div>
    </div>
  );
  };

export default Layout;
