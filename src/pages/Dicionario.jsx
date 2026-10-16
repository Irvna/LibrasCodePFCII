import { Box, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import LanguageIcon from '@mui/icons-material/Language';
import CircularProgress from '@mui/material/CircularProgress';
import { useConceitos } from '../hooks/useConceitos.jsx';
import { useState } from 'react';

function Dicionario() {
    const { data, isLoading } = useConceitos();
    const [pesquisa, setPesquisa] = useState('');

    const filtroPesquisa = data?.filter((item) =>
        //acessa o nome do conceito
        item.nome_conceito
            //converte tudo que foi digitado em letras minusculas
            .toLowerCase()
            //verifica se o que foi digitado está dentro de algum nome do conceito
            .includes(pesquisa.toLowerCase())
    );

    if (isLoading) {
        return <Box
            display="flex"
            justifyContent="center"
            mt={10}
            alignItems="center">
            <CircularProgress />
        </Box>

    }

    return (
        <Box sx={{ bgcolor: '#F1F6FA', minHeight: "100vh" }}>
            {/* Barra superior de apresentação */}
            <Grid container direction="row" spacing={2} px={{ xs: 4, md: 10 }} paddingBottom={4} paddingTop={{ xs: 6, md: 10 }}>
                <Grid width="100%">
                    {/* titulo */}
                    <Grid fontWeight="700" fontSize={{ xs: 20, md: 40, lg: 52 }}>
                        Os Principais Conceitos De <Box component="span" sx={{ color: '#0080FF' }}> Programação</Box>
                    </Grid>
                    {/* barra de busca */}
                    <Grid container justifyContent="center" mt={{ xs: 4, md: 8 }}>
                        <TextField
                            id="outlined-controlled"
                            variant="outlined"
                            label="Pesquisar..."
                            type="search"
                            value={pesquisa}
                            onChange={(e) => setPesquisa(e.target.value)}
                            fullWidth
                            size="small"
                            sx={{
                                width: { xs: "100%", md: "44vw" },
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "8px"
                                }
                            }}
                        />
                    </Grid>
                    {/* selecionar conceito */}
                    <Grid fontSize={{ xs: 15, lg: 22 }} color={"rgba(0, 0, 0, 0.5)"} mt={{ xs: 2, md: 5 }}>
                        Selecione o conceito desejado e aumente seu conhecimento!
                    </Grid>
                </Grid>
            </Grid>
            {/* Seleção e listagem dos conceitos */}
            <Grid container
                direction="row"
                spacing={3}
                px={{ xs: 4, md: 8, lg: 10, xl: 12}}
                paddingTop={{ xs: 1, md: 6 }}
                paddingBottom={{ xs: 6, md: 12 }}
                justifyContent={'space-between'}
                sx={{
                    rowGap: 5,
                }}
            >
                {filtroPesquisa.length === 0 ? (
                    //caso não encontre nenhum conceito na busca
                    <Grid item xs={12}>
                        <Typography
                            fontSize={{ xs: 12, lg: 20 }}
                            color="rgba(0,0,0,0.5)"
                        >
                            Nenhum conceito encontrado.
                        </Typography>
                    </Grid>

                ) : (
                    filtroPesquisa.map((item) => (
                        <Grid item size={{ xs: 12, md: 6, lg: 4 }} direction="column" px={3} py={3} bgcolor={"#FFFFFF"} borderRadius={2} key={item.id}
                            sx={{
                                borderLeft: 4,
                                borderColor: "#0080FF",
                                borderLeftStyle: "solid"
                            }}>
                            <Link
                                //o enodeURIComponent é utilizado para codificar o nome do conceito, garantindo que caracteres especiais sejam tratados corretamente na URL.
                                to={`/dicionario/${item.id}`}
                                style={{ textDecoration: 'none' }}
                            >
                                <Grid container alignItems="center" gap={1} sx={{ width: "100%" }}>
                                    <CodeIcon sx={{ fontSize: { xs: 40, md: 45, lg: 50 }, color: "#0056B3" }} />

                                    <Grid item 
                                        sx={{
                                            minWidth: 0,
                                        }}>
                                        <Typography fontSize={{ xs: 16, md: 18 }} fontWeight={600}
                                            sx={{
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                            }}>
                                            {item.nome_conceito}
                                        </Typography>
                                    </Grid>

                                </Grid>
                                <Grid container direction="row" justifyContent={{ xs: "center", lg: "space-between" }} marginTop={{ xs: 1, md: 2 }} gap={{ xs: 8, lg: 0 }}>
                                    <Grid container direction="row" alignItems="center" gap={0.5}>
                                        <InfoOutlineIcon sx={{ fontSize: { xs: 26, md: 32, lg: 28 }, color: "#0056B3" }} />
                                        <Typography fontSize={16} mt={1} display={{ xs: "none", lg: "flex" }} direction="row">
                                            Conceito
                                        </Typography>
                                    </Grid>
                                    <Grid container direction="row" alignItems="center" gap={0.5}>
                                        <TerminalIcon sx={{ fontSize: { xs: 26, md: 32, lg: 28 }, color: "#0056B3" }} />
                                        <Typography fontSize={16} mt={1} display={{ xs: "none", lg: "flex" }} direction="row">
                                            Exemplar
                                        </Typography>
                                    </Grid>
                                    <Grid container direction="row" alignItems="center" gap={0.5}>
                                        <LanguageIcon sx={{ fontSize: { xs: 26, md: 32, lg: 28 }, color: "#0056B3" }} />
                                        <Typography fontSize={16} mt={1} display={{ xs: "none", lg: "flex" }} direction="row">
                                            Tradução
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Link>
                        </Grid>
                    ))
                )}
            </Grid>

        </Box>
    );
}

export default Dicionario;