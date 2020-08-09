import React, { useState } from "react";
import Slider from "react-slick";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

const Cards = (props) => {
  let [value, setValue] = useState({
    0:4,
    1:4,
    2:5,
    3:4,
    4:5,
    5:5,
    6:5,
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      "& > * + *": {
        marginTop: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();
  const Rate = (i) => {
    return (
      <div className={classes.root}>
        <Rating
          name="simple-controlled"
          value={value[i]}
          onChange={(e, newValue) => {
            let newRating = {...value}
            newRating[i]=newValue
            setValue(newRating)
            console.log(i)
          }}
          precision={0.5}
        />
      </div>
    );
  };
  let { suitData } = props;

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <div className="cards">
      <Slider {...settings}>
        {suitData.map((suit,i) => (
          <div className="image">
            <img src={suit.image} alt="suit" />
            <div
              className="disc"
              style={{
                width: "100%",
                fontSize:"0.5em"
              }}
            >
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h4>{suit.name}</h4>
                <p>lorem ipsum d oloret lorem ipsum dey doloret</p>
              </div>
              <div
                style={{
                  marginTop: "5px",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-around",
                }}
              >
                <div>
                  <p>${suit.price}</p>
                </div>
                <div>{Rate(i)}</div>
                <div>
                  <IconButton
                    color="primary"
                    aria-label="add to shopping cart"
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    <AddShoppingCart />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cards;
