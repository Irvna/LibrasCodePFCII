import { Box, Grid, Card, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/CodeOutlined';
import Heart from '@mui/icons-material/FavoriteBorderOutlined';
import Book from '@mui/icons-material/ImportContactsOutlined';
import Eye from '@mui/icons-material/RemoveRedEyeOutlined';
import BookOutlined from '@mui/icons-material/BookOutlined';
import logo from "../imgs/Logo.png";


function Home() {
  return (
    <Box sx={{ bgcolor: '#F1F6FA' }}>
      {/* Introdução */}
      <Grid container direction="row" spacing={2} px={{ xs: 4, md: 10 }} py={4} sx={{ paddingTop: { xs: "7vw", md: "3vw", lg: "2vw" } }}>
        <Grid container alignItems="center" size={{ xs: 12, md: 6 }}>
          <Grid fontWeight="700" fontSize={{ xs: 30, md: 45, lg: 50, xl: 90 }} sx={{ color: "#404040", lineHeight: 1.2 }}>
            Dicionário de <Box component="span" sx={{ color: '#0080FF' }}> Programação</Box> em LIBRAS
            {/*Component span para fica na mesma linha */}
            <Box fontWeight="300" fontSize={{ xs: 14, md: 16, lg: 18, xl: 30 }} sx={{ color: "#ACACAC", mt: { xs: 2, lg: 6 } }}>
              Aprenda os principais conceitos de programação através da Língua Brasileira de Sinais. Uma ferramenta inclusiva para facilitar o ensino de programação.
            </Box>
          </Grid>
        </Grid>
        <Grid container display={{ xs: "none", md: "flex" }} justifyContent="center" size={6}>
          <img src={logo} style={{ width: { md: "50%", lg: "70%" }, height: '100%' }} alt="logo do librascode, um circulo azul com um livro com contorno branco no centro" />
        </Grid>
      </Grid>
      {/* Experiência*/}
      <Grid container sx={{ bgcolor: '#FAFAFA' }} justifyContent="center" alignItems="center" px={{ xs: 4, md: 10 }} py={4} spacing={2} direction={"column"}>
        <Grid fontSize={{ xs: 18, md: 25, lg: 30 }} sx={{ color: "#0056B3", lineHeight: 1.2 }}>
          Experiência
        </Grid>
        <Grid
          container
          spacing={4}
          direction= {"row"}
          justifyContent="center"
          alignItems="stretch"
          display="flex"
          gap={"6vw"}
        >
          {[
            { texto: "Conceitos Claros", icon: <Book sx={{ fontSize: { xs: 45, md: 55, lg: 70 }, color: "#0056B3" }} />, textoVerso: "Definições objetivas e traduzidas para Libras, para facilitar o entendimento de termos técnicos." },
            { texto: "Exemplos", icon: <CodeIcon sx={{ fontSize: { xs: 45, md: 55, lg: 70 }, color: "#0056B3" }} />, textoVerso: "Cada termo acompanha exemplos práticos de uso em programação e sua representação em Libras." },
            { texto: "Conteúdo Visual", icon: <Eye sx={{ fontSize: { xs: 45, md: 55, lg: 70 }, color: "#0056B3" }} />, textoVerso: "Ilustrações  que tornam o aprendizado acessível e dinâmico." },
            { texto: "Acessibilidade", icon: <Heart sx={{ fontSize: { xs: 45, md: 55, lg: 70 }, color: "#FF8C42" }} />, textoVerso: "Promovemos inclusão digital para a comunidade surda, unindo Libras e programação." },
          ].map((item, index) => (
            <Grid item md={4} key={index} mt={{xs: 2, md: 3}}>
              <Box
                sx={{
                  perspective: "1000px",
                  width: {xs: "70vw", md: "220px"},
                  height: {xs: "9vw", md: "220px"},
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.6s",
                    "&:hover": {
                      transform: "rotateY(180deg)",
                    },
                  }}
                >
                  {/* FRENTE */}
                  <Card
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      display: "flex",
                      flexDirection: {xs: "row", md: "column"},
                      alignItems: "center",
                      justifyContent: {xs: "justify", md: "center"},
                      borderRadius: {xs: 2, md: 4},
                      p: {xs: 2, md: 0},
                      gap: {xs: 3, md: 0},
                    }}
                  >
                    <Box sx={{ mb: {xs: 0, md: 2}, color: "#0080FF"}}>
                      {item.icon}
                    </Box>
                    <Typography fontWeight={700} fontSize={{ xs: 14, md: 18, lg: 22 }} textAlign="center">
                      {item.texto}
                    </Typography>
                  </Card>

                  {/* VERSO */}
                  <Card
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      transform: {xs: "rotateY(180deg)", md: "rotateY(200deg)"},
                      backfaceVisibility: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: {xs: 2, md: 4},
                      p: {xs: 2, md: 0},
                      bgcolor: "#0080FF",
                      color: "#ffffff",
                    }}
                  >
                    <Typography fontWeight={700} fontSize={{ xs: 12, md: 14, lg: 18 }} p={2} textAlign="center">
                      {item.textoVerso || "Erro: textoVerso não definido"}
                    </Typography>
                  </Card>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid>
        </Grid>
      </Grid>
      {/*Conheça o projeto*/}
      <Grid px={{ xs: 4, md: 25 }} py={{xs: 4, md: 8}}>
        <Grid container direction="column" spacing={2} px={{ xs: 4, md: 15 }} py={4} sx={{ bgcolor: "#0080FF", borderRadius: 2 }} alignItems="center" textAlign="center">
          <Grid fontWeight="600" fontSize={{ xs: 12, md: 18, lg: 25 }} sx={{ color: "#ffffff", lineHeight: 1.2 }}>
            CONHEÇA O PROJETO E TENHA UM NOVO APRENDIZADO!
          </Grid>
          <Grid fontSize={{ xs: 14, md: 18, lg: 20 }} sx={{ color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.2 }}>
            Explore os  conceitos fundamentais de programação em LIBRAS
          </Grid>
          <Grid container justifyContent="center" gap={{ xs: 1, md: 5 }}>
            <Link to="/dicionario" style={{ textDecoration: 'none' }}>
              <Button variant="contained" gap={10} sx={{ minWidth: {xs: "55vw", md: "16vw"}, height: "50px", fontSize: {xs: "14px", md: "18px"}, textTransform: 'none', gap: "10px", borderRadius: 2, bgcolor: "#F1F6FA", color: "#383838", mt: 2, "&:hover": { bgcolor: "#F1F6FA", transform: "scale(1.05)" } }}>
                <BookOutlined sx={{ fontSize: {xs: 19, md: 23} }} />
                Acessar o Dicionário
              </Button>
            </Link>
            <Link to="/sobre" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{ minWidth: {xs: "55vw", md: "16vw"}, height: "50px", fontSize: {xs: "14px", md: "18px"}, textTransform: 'none', gap: "10px", borderRadius: 2, bgcolor: "#F1F6FA", color: "#383838", mt: 2, "&:hover": { bgcolor: "#F1F6FA", transform: "scale(1.05)" } }}>
                <Heart sx={{ fontSize: {xs: 19, md: 23} }} />
                Sobre
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box >
  );
}

export default Home;
