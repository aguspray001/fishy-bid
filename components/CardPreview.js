import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import React from "react";

const CardPreview = ({ src, title, nama, desc, onClick }) => {
  return (
    <Card style={{width:300, margin:10}} onClick={onClick}>
      <CardActionArea>
        <img
          src={src}
          alt={title}
          style={{height:200, width:300, padding:10, borderRadius:10}}
          objectFit="cover"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {nama}
          </Typography>
          <div>
            <p>Deskripsi : {desc}</p>
            <p>Berat : {desc}</p>
            <p>Grade : {desc}</p>
            <p>Harga : {desc}</p>
          </div>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default CardPreview;
