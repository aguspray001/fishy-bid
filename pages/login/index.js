import { TextField, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import React, { useState } from "react";
import Link from 'next/link'
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import { showNotification } from "../../utils/utils";
import { useRouter } from "next/dist/client/router";
import { useDispatch } from "react-redux";
import { doSignIn } from "../../redux/actions/auth";


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();
  // oke

  const onSubmit = () =>{
    dispatch(doSignIn({email, password}, router))
  }

  return (
    <div className="login-container">
      <Card className="card-wrapper">
        <CardContent style={{ display: "flex", flexDirection: "column", marginTop:60 }}>
          <Typography style={{textAlign:'center', fontSize:20}}>Login User</Typography>
          <TextField  
          label="Email"  
          onChange={(e)=>setEmail(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && onSubmit()}
          />
          <TextField  
          label="Password" 
          style={{marginTop:10}} 
          onChange={(e)=>setPassword(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && onSubmit()}
          />
        </CardContent>
        <CardActions style={{display:'flex', flexDirection:'column'}}>
          <Button 
          size="small" 
          onClick={()=>onSubmit()}
          style={{backgroundColor:'red', color:"white", width:'90%', marginTop:20, marginBottom:20, borderRadius:20}}
          >
          Login
          </Button>
          <Link href="/"><p style={{fontSize:14, cursor:'pointer'}}>Back to Home</p></Link>
        </CardActions>
      </Card>
      <NotificationContainer/>
    </div>
  );
}
