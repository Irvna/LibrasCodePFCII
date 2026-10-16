import { Box, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import LibrasCode from "../imgs/LibrasCode.png";
import logo_uems from "../imgs/logo_uems.png";

function Footer() {
    return (
        <Paper
            elevation={8}
            sx={{
                py: { xs: 4, md: 3 },
                px: { xs: 4, md: 10 }
            }}
        >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            md: "row"
                        },
                        alignItems: {xs: "justify", md:"center"},
                        justifyContent: "space-between",
                        gap: {
                            xs: 3,
                            md: 0
                        }
                    }}
                >
                    {/* Logo LibrasCode */}
                    <Link to="/">
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <img
                                src={LibrasCode}
                                alt="logo do libras code sem a imagem"
                                style={{
                                    height: 30,
                                }}
                            />
                        </Box>
                    </Link>

                    {/* Texto */}
                    <Typography
                        sx={{
                            color: "#ACACAC",
                            alignItems: {xs: "justify", md:"center"},
                            fontSize: {
                                xs: "12px",
                                md: "16px"
                            },
                        }}
                    >
                        ©2026 - Desenvolvido por Irvna Maria - UEMS - Todos os direitos reservados
                    </Typography>

                    {/* Logo UEMS */}
                    <Link to="/">
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <img
                                src={logo_uems}
                                alt="logo da UEMS"
                                style={{
                                    height: {xs: 30, md: 45},
                                }}
                            />
                        </Box>
                    </Link>
                </Box>
        </Paper>
    );
}

export default Footer;