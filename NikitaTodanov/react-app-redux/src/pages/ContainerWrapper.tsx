import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

type ContainerWrapperProps = {
  children: React.ReactNode
}

export default function ContainerWrapper({ children }: ContainerWrapperProps) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            {children}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
