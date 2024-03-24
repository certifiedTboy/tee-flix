import { Fragment, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/useHttp";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const SearchMovie = (props) => {
  const [state, setState] = useState({
    right: false,
  });

  // search query data
  const [query, setQuery] = useState("");

  // drawer update function / useEffect
  useEffect(() => {
    setState({ right: props.showDrawer });
  }, [props.showDrawer]);

  // toggle timer function
  const toggleDrawer = (anchor, open) => (event) => {
    props.onToggleDrawer();
    setState({ ...state, [anchor]: open });
  };

  // use http custom hook to run search query
  const [getMovieData, movieData] = useHttp();

  // search movie function
  const onSearchMovieData = async () => {
    await getMovieData(
      `${process.env.REACT_APP_API_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`,
      "search"
    );
  };

  // limit number of search query on input change with useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchMovieData();
    }, 2000);

    return () => clearTimeout(timer);
  }, [query]);

  const anchor = "right";

  const list = (anchor) => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    >
      <List>
        {movieData.map((movie) => (
          <ListItem key={movie.id} disablePadding>
            <Link
              to={`/movies/${movie.id}`}
              style={{ color: "#fff", textDecoration: "none", fontWeight: 800 }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <Avatar
                    alt="Cindy Baker"
                    src={`${process.env.REACT_APP_IMAGE_PATH}/w300${movie.poster_path}`}
                  />
                </ListItemIcon>
                <ListItemText primary={movie.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <SwipeableDrawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Search Movies"
            variant="standard"
            onChange={(event) => setQuery(event.target.value)}
          />
        </Box>

        {list(anchor)}
      </SwipeableDrawer>
    </ThemeProvider>
  );
};

export default SearchMovie;
