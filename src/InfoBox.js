import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, total, active, isRed, isBlue, ...props }) {
  console.log(title, active);
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${ isBlue && "infoBox--blue" } ${ isRed && "infoBox--red" }`}
    style={{backgroundColor: '#1F1F1F'}}
    >
      <CardContent>
        <Typography style={{color: 'white'}} gutterBottom>
          {title}
        </Typography>
        <h2 className={`infoBox__cases `}>
          {cases}
        </h2>

        <Typography style={{color: 'white'}} className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
