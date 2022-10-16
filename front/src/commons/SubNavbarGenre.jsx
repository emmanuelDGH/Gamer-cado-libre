import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

import { Stack } from "@mui/system";

import { Link } from "react-router-dom";
import { yellow } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { get_genres } from "../state/genre";

const color = yellow[500];
export default function SimpleSlider() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_genres());
  }, []);
  const genres = useSelector((state) => state.genre);

  const baseUrl = "https://images.igdb.com/igdb/image/upload/t_720p/";

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {!genres.length ? (
        <div>Loading...</div>
      ) : (
        genres.map((genre, i) => {
          return (
            <Box key={i} spacing={2}>
              <div key={genre.id}>
                <h3 key={genre.id}>
                  <Card sx={{ maxWidth: 280, maxHeight: 500 }}>
                    <CardActionArea>
                      {genre.products[0] && (
                        <CardMedia
                        
                          component="img"
                          height="350"
                          image={baseUrl + genre.products[0].urlId + ".jpg"}
                          alt="Genre_img"
                        />
                      )}

                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/products/${genre.genre}`}
                      >
                        <CardContent
                          component={Stack}
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
  
                          sx={{
                            bgcolor: "secondary.main",
                            height: 60,
                          }}
                        >
                          <Typography
                            color="text.main"
                            gutterBottom
                            variant="h6"
                            component="div"
                            borderRadius={5}
                          >
                            {genre.genre}
                          </Typography>
                        </CardContent>
                      </Link>
                    </CardActionArea>
                  </Card>
                </h3>
              </div>
            </Box>
          );
        })
      )}
    </Slider>
  );
}
