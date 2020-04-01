import React, { useState } from "react";
// Material UI
import {
  Button,
  Box,
  IconButton,
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  TextField
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import { Skeleton } from "@material-ui/lab";
// hooks
import useGetAvenues from "../../hooks/useGetAvenues";
// helpers
import history from "../../helpers/history";
// styles
import { useStyles } from "./classes";

export default function HomePage() {
  const classes = useStyles();
  const [newParams, setNewParams] = useState(null);
  const [params, setParams] = useState({
    near: "Houston,Texas",
  });

  const [avenues] = useGetAvenues(params);

  const handleSearchAvenue = () => {
    setParams(newParams)
  };

  return !avenues ? (
    <>
      <Skeleton height={20} style={{ marginBottom: 10, width: "100%" }} />
      <Skeleton height={20} style={{ marginBottom: 10, width: "100%" }} />
      <Skeleton height={20} style={{ marginBottom: 10, width: "100%" }} />
      <Skeleton height={20} style={{ marginBottom: 10, width: "100%" }} />
      <Skeleton height={20} style={{ marginBottom: 10, width: "100%" }} />
    </>
  ) : (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">
            Trending places from Foursquare
          </ListSubheader>
          <Box className={classes.box_root}>
            <TextField
              id="outlined-helperText"
              label="Enter your sity"
              defaultValue={params.near}
              variant="outlined"
              onChange={e => setNewParams({ near: e.target.value })}
            />
            <Button
              onClick={handleSearchAvenue}
              variant="contained"
              color="primary"
            >
              Search
            </Button>
          </Box>
        </GridListTile>

        {avenues &&
          avenues.map(place => (
            <GridListTile key={place.id}>
              {place.categories ? (
                <img
                  src={`${place.categories[0].icon.prefix}bg_88.png`}
                  alt={place.name}
                />
              ) : null}
              <GridListTileBar
                onClick={() => history.push(`/venue/${place.id}`)}
                title={place.name}
                className={classes.tile_bar}
                subtitle={<span>{place.categories[0].icon.name}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${place.name}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
      </GridList>
    </div>
  );
}
