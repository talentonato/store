import { Avatar, CardActionArea, IconButton, Typography, CardContent, CardMedia, Card } from "@mui/material";
import React, { Component } from "react";
import { GoogleLogin, GoogleLogout} from "react-google-login";


const CLIENT_ID = "814005901248-6vkd8qpnhdoqn3n4303uiucfs1lo7d0d.apps.googleusercontent.com";


export const UsuarioGoogle = (response) =>{
let User = {
nome: response.name || "Aguarde!",
email: response.email || "",
foto: response.foto || "",
id: response.id || ""
  }
  return(
    <div>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="230"
          image={User.foto}
          alt={User.nome}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {User.nome}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {User.email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );

}

class Login extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userInfo: {
        name: "",
        email: "",
        foto: "",
        id: "",
      },
    };
  }
  // Success Handler
  responseGoogleSuccess = (response) => {
    console.log();
     let userInfo = {
      name: response.profileObj.name,
      email: response.profileObj.email,
      id: response.profileObj.id,
      foto: response.profileObj.imageUrl,
    };
    this.setState({ userInfo, isLoggedIn: true });
    }

  // Error Handler
  responseGoogleError = (response) => {
    console.log(response);
  };

  // Logout Session and Update State
  logout = (response) => {
    console.log(response);
    let userInfo = {
      name: "",
      foto: "",
      email: "",
      id: "",
    };
    this.setState({ userInfo, isLoggedIn: false });
  };
  

  render() {
    return (
      <div className="">
          {this.props.childrean}
        <div className="">
          {this.state.isLoggedIn ? (
            <div>
                <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick=""
            edge="start"
            sx={{}}
          >
            {" "}
            {/* Icone dentro da Barra do topo */}
            <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick=""
            edge="start"
            sx={{}}
          >
            {" "}
            {/* Icone dentro da Barra do topo */}
             
              <Avatar alt={this.state.userInfo.name} src={this.state.userInfo.foto} />
          </IconButton>
          </IconButton>
    <GoogleLogout
      clientId={CLIENT_ID}
      buttonText="Sair"
      onLogoutSuccess={this.logout}
    >
    </GoogleLogout>
             
           </div>
          ) : (
            <div>

<div id="g_id_onload"
     data-client_id={CLIENT_ID}
     data-auto_select="true"
     data-login_uri="https://talentonatocomercio.com.br">
</div>
            <GoogleLogin
              clientId={CLIENT_ID}
              buttonText="Entrar"
              onSuccess={this.responseGoogleSuccess}
              onFailure={this.responseGoogleError}
              isSignedIn={true}
              redirectUri="https://talentonatocomercio.com.br"
              cookiePolicy={"single_host_origin"}
            />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default  Login;

