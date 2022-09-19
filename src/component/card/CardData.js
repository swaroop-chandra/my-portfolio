import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from "@mui/icons-material/Preview";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function CardData(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div style={{ margin: "0 50px" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {props.title}
            </Avatar>
          }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={props.cardTitle}
          subheader={props.cardHeader}
        />
        <CardMedia
          component="img"
          height="194"
          image={props.cardImage}
          alt="project_image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.dataCard}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {props?.gitLink ? (
            <IconButton aria-label="share">
              <a href={props.gitLink} target="_blank" rel="noreferrer">
                <GitHubIcon />
              </a>
            </IconButton>
          ) : (
            <div style={{ color: "#fff" }}>{" . "}</div>
          )}
          {props?.gitLink ? (
            <IconButton aria-label="share">
              <a href={props.appLink} target="_blank" rel="noreferrer">
                <PreviewIcon />
              </a>
            </IconButton>
          ) : (
            <div style={{ color: "#fff" }}>{" . "}</div>
          )}
        </CardActions>
      </Card>
    </div>
  );
}

export default CardData;
