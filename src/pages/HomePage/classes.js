import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,

    '& [class*="MuiGridListTile-tile"]': {
      textAlign: 'center',
    },
  },
  gridList: {
    width: 500,
    height: 976,

    '& [class*="MuiListSubheader-root"]': {
      fontSize: '1.5rem',
    },
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  box_root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',

    '& [class*="MuiOutlinedInput-root"]': {
      marginRight: '30px',
    },

    '& [class*="MuiButton-containedPrimary"]': {
      maxHeight: '40px',
    }
  },
  tile_bar: {
    cursor: 'pointer',
  }
}));