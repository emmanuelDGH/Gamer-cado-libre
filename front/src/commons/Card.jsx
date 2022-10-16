import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ game }) {
  const baseURL = "https://images.igdb.com/igdb/image/upload/t_720p/";
  return (
    <div id="card">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={baseURL + game.urlId + ".jpg"}
            alt="Portada del videojuego"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
            {game.name &&`${game.name.substring(0,20)}...`}
            </Typography>
            <Typography gutterBottom variant="body1" color="text.secondary">
              {game.description && `${game.description.substring(0,55)}...`}
            </Typography>
            <Typography sx={{fontWeight: 'bold'}} variant="h6">{`$ ${game.price}`}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
