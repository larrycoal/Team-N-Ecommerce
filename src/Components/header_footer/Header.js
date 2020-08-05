import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";



const Header = () => {
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
            <Typography
              variant="h6"
              className="header_text"
            >
              Oge fashion house
            </Typography>
          </div>
          <IconButton style={{
              color:"white"
          }}>
            <Badge badgeContent={2}>
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
