import React, { useContext } from "react";
import { Context } from "../../Store/useContext";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  InputBase,
  fade,
  makeStyles
} from "@material-ui/core";
import { ShoppingCart, House, Instagram,Search,WbIncandescent } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const Header = () => {
  const classes = useStyles();
  let { state, dispatch } = useContext(Context);
  return (
    <div className="header_wrapper">
      <AppBar
        position="fixed"
        style={{
          background: "rgba(0,0,0,0.1)",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <div className="header_title">
            <Typography variant="h6" className="header_text">
              <span>
                <House fontSize="large" />
              </span>
              <span
                style={{
                  padding: "4px",
                  fontFamily: "Satisfy",
                  fontSize: "25px",
                }}
              >
                of
              </span>
              <span
                style={{
                  padding: "4px",
                  fontFamily: "Righteous",
                }}
              >
                HOVA
              </span>
            </Typography>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <IconButton
            style={{
              color: "white",
              margin:"0px 5px"
            }}
            href="https://instagram.com/shophova_"
          >
            <Badge>
              <Instagram />
            </Badge>
          </IconButton>
          
          <IconButton
          onClick={()=>console.log("hello")}
            style={{
              color: "white",
              margin:"0px 5px"
            }}
          >
            <Badge >
              <WbIncandescent />
            </Badge>
          </IconButton>
          <IconButton
            style={{
              color: "white",
              margin:"0px 5px"
            }}
            onClick={() => {
              dispatch({ type: "open-drawer" });
            }}
          >
            <Badge badgeContent={state.cart.length}>
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
