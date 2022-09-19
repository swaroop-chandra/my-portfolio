import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import "./Nav.css";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.100",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

function Nav() {
  return (
    <div className="nav_container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          bgcolor: "#fbfcfd",
          alignItems: "center",
          p: 0,
          m: 0,
        }}
      >
        <h1 className="profile_name">
          <a href="#about_me">Swaroop Chandra</a>
        </h1>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            bgcolor: "#fbfcfd",
            alignContent: "center",
            p: 0,
            m: 5,
            fontSize: "14px",
          }}
        >
          <h4 className="nav_link">
            <a href="#about_me">about me</a>
          </h4>
          <h4 className="nav_link">
            <a href="#intro">intro</a>
          </h4>
          <h4 className="nav_link">
            <a href="#skills">skills</a>
          </h4>
          <h4 className="nav_link">
            <a href="#projects">projects</a>
          </h4>
        </Box>
      </Box>
      {/* <div className="flex_between">
        
      </div> */}
    </div>
  );
}

export default Nav;
