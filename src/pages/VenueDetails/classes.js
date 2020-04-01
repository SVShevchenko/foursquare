import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,

    '& [class*="MuiGridListTile-tile"]': {
      textAlign: 'center',
    },
  },
  gridList: {
    width: 500,
    height: 450,

    '& [class*="MuiListSubheader-root"]': {
      fontSize: '1.5rem',
    },
  }
}));
