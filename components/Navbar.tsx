import Image from "next/image";
import React from "react";
import carLogo from "../public/assets/logo.svg";
import { Grid, Container } from "@mui/material";

const Navbar = () => {
  return (
    <nav className="py-5 bg-red-400">
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          columnSpacing={5}
          rowSpacing={10}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={6}>
            <div>
              <Image src={carLogo} alt="" />
            </div>
          </Grid>

          <Grid item xs={2}>
            <div>
              <span>Login</span>
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              <span>Login</span>
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              <span>Login</span>
            </div>
          </Grid>
        </Grid>
      </Container>
    </nav>
  );
};

export default Navbar;
