import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "./Copyright";
import CardPadrao from "./Card";
import { InfoHome } from "./../dados/DadosPaginaInicial";
const theme = createTheme();

export default function PaginaPadrao(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {props.titulo}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              {props.descricao}
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8, marginInlineStart: 10}} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={12}>
            {InfoHome.map((item, index) => (
              <Grid sx={{ margin: 1 }}>
                <div key={index}>
                  <CardPadrao 
                    titulo={item.titulo}
                    descricao={item.descricao}
                    imagem={item.imagem}
                    rota={item.rota}
                  />
                </div>
              </Grid>
            ))}
            
          </Grid>
        </Container>
        <Copyright />
      </main>
    </ThemeProvider>
  );
}
