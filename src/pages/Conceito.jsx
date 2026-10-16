import { Box, Grid, Button, Typography } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { useConceito } from '../hooks/useConceito.jsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import CodeIcon from '@mui/icons-material/CodeOutlined';

function Conceito() {
    //O useParams é um hook do React Router que permite acessar os parâmetros da URL. 
    // No caso, ele está sendo usado para obter o valor do parâmetro "termo" da URL, 
    // que representa o conceito que o usuário deseja visualizar. 
    // O valor do parâmetro é decodificado usando decodeURIComponent para garantir que caracteres especiais 
    // sejam interpretados corretamente.

    const { id } = useParams();
    //const TraducaoTermo = decodeURIComponent(termo);
    const { data, isLoading } = useConceito(id);
    console.log("Dados recebidos:", data);

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
        <Box sx={{
            minHeight: "100vh",
            backgroundColor: "#FAFAFA",
            py: { xs: 6, md: 10 },
            px: { xs: 4, md: 10 },
        }}>
            <Grid container
                display="flex"
                direction="row"
                px={{ xs: 4, md: 10 }}
                py={4}
                borderRadius={{ xs: 4, md: 8 }}
                width="100%"
                sx={{
                    backgroundColor: "#F1F6FA",
                    rowGap: { xs: 2, md: 5 },
                }}
            >
                <Box
                    display="flex"
                    flexDirection={{ xs: "column-reverse", md: "row" }}
                    justifyContent="space-between"
                    alignItems={{ xs: "justify", md: "center" }}
                    width="100%"
                    gap={{ xs: 4, md: 0 }}
                >
                    <Box>
                        {/* titulo */}
                        <Grid fontWeight="700" fontSize={{ xs: 20, md: 40, lg: 52 }} sx={{ color: '#0080FF' }}>
                            {data.nome_conceito}
                        </Grid>
                    </Box>
                    <Box>
                        {/* botão de voltar */}
                        <Link to="/dicionario" style={{ textDecoration: 'none' }}>
                            <Button variant="contained"
                                sx={{
                                    width: { xs: "0.5vh", md: "18vh" },
                                    height: { xs: "30px", md: "40px" },
                                    fontSize: { xs: "10px", md: "18px" },
                                    textTransform: 'none',
                                    gap: { xs: "6px", md: "10px" },
                                    borderRadius: { xs: 4, md: 2 },
                                    bgcolor: "#F1F6FA",
                                    color: "#383838",
                                    border: "1px solid #40404081",
                                    "&:hover": {
                                        transform: "scale(1.05)"
                                    }
                                }}>
                                <ArrowBackIcon sx={{ fontSize: { xs: "18px", md: "22px" } }} />
                                <Box sx={{ display: { xs: "none", md: "block" } }}>
                                    Voltar
                                </Box>
                            </Button>
                        </Link>
                    </Box>

                </Box>
                <Box>
                    <Typography fontSize={{ xs: 15, lg: 22 }}
                        sx={{
                            color: "rgba(0, 0, 0, 0.8)",
                            textAlign: "justify",
                        }}
                    >
                        {data.descricao_conceito}
                    </Typography>
                </Box>
                {/* Explicação detalhada*/}
                <Box
                    display="flex"
                    flexDirection="column"
                    width="100%"
                    mt={{ xs: 2, md: 0 }}
                >
                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        sx={{
                            columnGap: 2,
                            mb: "2vh",
                        }}
                    >
                        <ImportContactsIcon sx={{ fontSize: { xs: 30, md: 40 }, color: '#0080FF' }} />
                        <Typography fontSize={{ xs: 20, md: 30 }} sx={{ color: '#0080FF' }}>
                            Explicação Detalhada
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            color: "rgba(0, 0, 0, 0.8)",
                            whiteSpace: "pre-wrap",
                            textAlign: "justify",
                            fontSize: { xs: 15, lg: 22 },
                        }}
                    >
                        {data.descricao_detalhada}
                    </Typography>
                </Box>

                {/* Imagens */}
                {data.imagens && data.imagens.length > 0 && (
                    <Box
                        width="100%"
                        mb={2}
                        display="flex"
                        flexWrap="wrap"
                        gap={4}
                        justifyContent="space-between"
                    >
                        {data.imagens.map((imagem) => (
                            <Box
                                key={imagem.id_img}
                                sx={{
                                    maxWidth: "500px",
                                    width: "100%",
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: 3,
                                }}
                            >
                                <Box
                                    component="img"
                                    src={imagem.url}
                                    alt={`Ilustração do conceito ${imagem.descricao_img}`}
                                    sx={{
                                        width: "100%",
                                        height: "auto",
                                    }}
                                />
                                <Box
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                >
                                    <Typography
                                        fontSize={16}
                                        fontWeight="500"
                                        sx={{
                                            textAlign: "center",
                                            color: "#000000",
                                            p: 1,
                                        }}
                                    >
                                        Exemplo visual: {imagem.descricao_img}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                )}

                {/* Exemplo em C */}
                <Box
                    display="flex"
                    flexDirection="column"
                    width="100%"
                >
                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        sx={{
                            columnGap: 2,
                            mb: "2vh",
                        }}
                    >
                        <CodeIcon sx={{ fontSize: { xs: 30, md: 40 }, color: '#0080FF' }} />
                        <Typography fontSize={{ xs: 20, md: 30 }} sx={{ color: '#0080FF' }}>
                            Exemplo em C
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: "#FFFFFF",
                            mx: { xs: "1vh", md: "5vh", xl:"28vh" },
                            p: { xs: 2, md: 4 },
                            borderRadius: 4,
                        }}>
                        <Typography fontSize={{ xs: 15, md: 18 }}
                            sx={{
                                color: "rgba(0, 0, 0)",
                                whiteSpace: "pre-wrap",
                            }}
                        >
                            {data.exemplo_codigo_c}
                        </Typography>
                    </Box>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    width="100%"
                >
                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        sx={{
                            columnGap: 2,
                            mb: "2vh",
                        }}
                    >
                        <Typography fontSize={{ xs: 20, md: 30 }} sx={{ color: '#FF8C42' }}>
                            Recursos em Libras
                        </Typography>
                    </Box>

                    {/* Vídeos em Libras */}
                    {data.videos && data.videos.length > 0 ? (
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            gap={4}
                            width="100%"
                        >
                            {data.videos.map((video) => {
                                //Converte URL do YouTube para URL de incorporação
                                const videoId = video.url_video.includes("watch?v=")
                                    ? video.url_video.split("watch?v=")[1].split("&")[0]
                                    : video.url_video.split("/").pop();

                                const embedUrl = `https://www.youtube.com/embed/${videoId}`;

                                return (
                                    <Box
                                        key={video.id_video}
                                        sx={{
                                            width: "100%",
                                            maxWidth: "900px",
                                            borderRadius: 4,
                                            overflow: "hidden",
                                            boxShadow: 4,
                                            p: {
                                                xs: 0,
                                                lg: 2,
                                            },
                                        }}
                                    >
                                        <Box
                                            //O componente iframe é usado para incorporar conteúdo de outra fonte, como um vídeo do YouTube, dentro da página web. 
                                            component="iframe"
                                            src={embedUrl}
                                            title={video.legenda || "Vídeo em Libras"}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            sx={{
                                                width: "100%",
                                                height: {
                                                    xs: "200px",
                                                    sm: "350px",
                                                    md: "500px",
                                                },
                                                border: "none",
                                                borderRadius: 3,
                                            }}
                                        />
                                    </Box>
                                );
                            })}
                        </Box>
                    ) : (
                        //Caso não haja vídeos em Libras disponíveis para o conceito
                        //É exibida uma mensagem informando que ainda não há vídeos disponíveis.
                        <Box
                            sx={{
                                width: "100%",
                                textAlign: "center",
                                py: 4,
                                backgroundColor: "#FFFFFF",
                                borderRadius: 4,
                                border: "1px dashed #ccc",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: { xs: 16, md: 20 },
                                    color: "#666",
                                }}
                            >
                                Ainda não há vídeos em Libras disponíveis para este conceito.
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Grid>
        </Box>
    )
}

export default Conceito;
