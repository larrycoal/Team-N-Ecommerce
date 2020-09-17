import React, { useContext } from "react";
import { Context } from "../../Store/useContext";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  InputBase,
} from "@material-ui/core";
import {
  ShoppingCart,
  House,
  Instagram,
  Search,
  WbIncandescent,
  WbIncandescentOutlined,
} from "@material-ui/icons";
import { useStyles } from "../../Resources/utils";

const Header = () => {
  const classes = useStyles();

  let { state, dispatch } = useContext(Context);

  const search = () => (
    window.innerWidth < 500? <div><Search/></div>:
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
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
  const mode = () => {
    return state.dmode ? <WbIncandescent /> : <WbIncandescentOutlined />;
  };
  const switchMode=()=>{
    dispatch({ type: "DARK-MODE" })
  }

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
                <House style={{
                  fontSize:"2em"
                }} />
              </span>
              <span
                style={{
                  padding: "4px",
                  fontFamily: "Satisfy",
                  fontSize: "1em",
                }}
              >
                of
              </span>
              <span
                style={{
                  padding: "4px",
                  fontFamily: "Righteous",
                  fontSize:"2em"
                }}
              >
                HOVA
              </span>
            </Typography>
          </div>
          {search()}
          <IconButton
            style={{
              color: "white",
              margin: "0px 5px",
            }}
            href="https://instagram.com/shophova_"
          >
            <Badge>
              <Instagram />
            </Badge>
          </IconButton>

          <IconButton
            onClick={() => switchMode()}
            style={{
              color: "white",
              margin: "0px 5px",
            }}
          >
            <Badge>{mode()}</Badge>
          </IconButton>
          <IconButton
            style={{
              color: "white",
              margin: "0px 5px",
            }}
            onClick={() => {
              dispatch({ type: "DRAWER" });
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
