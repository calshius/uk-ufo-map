import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ButtonAppBar({ children }) {
  const [show, setShow] = useState();
  function toggleShow() {
    setShow(!show);
  }
  var buttonText = show ? "Hide search table" : "Show search table";
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              UFO Map of the UK 1997-2009
            </Typography>
            <Button color="inherit" onClick={toggleShow}>
              {buttonText}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      {show ? children : null}
    </div>
  );
}
