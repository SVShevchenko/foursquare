import React from "react";
import { useParams } from "react-router-dom";
// Material UI
import {
  GridList,
  GridListTile,
  ListSubheader,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
// hoocks
import useGetAvenueInfo from "../../hooks/useGetVenueInfo";
import useGetAvenueMenu from "../../hooks/useGetVenueMenu";
import useGetPhotosAvenue from "../../hooks/useGetPhotosVenue";
// styles
import { useStyles } from "./classes";

export default function VenueDetails() {
  const classes = useStyles();
  const venueId = useParams();

  const [photos] = useGetPhotosAvenue(venueId);
  const [venue] = useGetAvenueInfo(venueId);
  const [menu] = useGetAvenueMenu(venueId);

  return !photos || !venue || !menu? (
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
          <ListSubheader component="div">{venue.name}</ListSubheader>
        </GridListTile>

        <div className={classes.root}>
          <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {photos &&
              photos.items.map(photo => (
                <GridListTile key={photo.id} cols={1}>
                  <img
                    src={`${photo.prefix}500x700${photo.suffix}`}
                    alt={photo.source.name}
                  />
                </GridListTile>
              ))}
          </GridList>
        </div>
      </GridList>
    </div>
  );
}
