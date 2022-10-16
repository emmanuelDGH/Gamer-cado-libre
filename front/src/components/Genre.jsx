import * as React from "react";
import { useParams } from "react-router";
import Grid from "../commons/Grid";
import Cart from "./Cart/Cart";
import SubNavbarGenre from "../commons/SubNavbarGenre";
import axios from "axios";
import UsePagination from "../components/Pagination";

const Genre = () => {
  const { genre } = useParams();
  const [games, setGames] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`http://localhost:3001/api/products/allGenres/${genre}`)
      .then((games) => {
        setGames(games.data);
      });
  }, [genre]);

  return (
    <>
      <SubNavbarGenre />
      <Cart />
      <div id="grid">
        <Grid games={games} />
      </div>
      <UsePagination games={games} />
    </>
  );
};

export default Genre;
