import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from 'react-router-dom';

export default function CardPadrao(props) {
  return (
    <Card sx={{ width: 300,  }}>
      <CardActionArea component={Link} to={props.rota}>
        <CardMedia component="img" height="180" image={props.imagem} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.descricao}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component={Link} to={props.rota}>
          Saiba mais!
        </Button>
      </CardActions>
    </Card>
  );
}
