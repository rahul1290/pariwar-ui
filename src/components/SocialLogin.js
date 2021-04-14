import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import './sk.css'
const axios = require('axios');

class App extends Component {

  render() {
    const responseFacebook = (response) => {
       let logindata = {
         name:response['name'],
         username:response['name'],
         email:'email@gmail.com',
         accessToken:response['accessToken']+'asd23',
         password:'',
         'platform': 'Facebook',
       }
      axios.post('http://localhost:3001/login', {
        logindata
        }).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    };


    
    const responseGoogle = (response) => {
      console.log(response);
    };

  


    return (
      <div className="App">
        <Grid container spacing={2}>
          <Grid item xs={6} lg={6} sm={6} md={6}>
            <FacebookLogin
              appId="181309920504328" //APP ID CREATED YET
              fields="name,email,picture"
              callback={responseFacebook}
              size='small'
            />
          </Grid>
          <Grid item xs={6} lg={6} sm={6} md={6}>
            <GoogleLogin
              clientId="837613122270-hdk3k6aikmb4uhq92ub4og8tuui38ous.apps.googleusercontent.com" //CLIENTID  CREATED YET
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
