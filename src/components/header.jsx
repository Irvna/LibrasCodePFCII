import { useState } from "react";
import {
    AppBar,
    Toolbar,
    Button,
    Box,
    IconButton,
    Drawer
} from "@mui/material";
import { Link } from "react-router-dom";

import logo_header from "../imgs/logo_header.png";

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <AppBar
                position="static"
                elevation={3}
                sx={{
                    px: { xs: 2, md: 6, xl: 8 },
                    bgcolor: "#ffffff",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.3)"
                }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        height: "86px"
                    }}
                >
                    {/* Logo */}
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Box
                            component="img"
                            src={logo_header}
                            alt="logo"
                            sx={{
                                height: {
                                    xs: 55,
                                    md: 70
                                }
                            }}
                        />
                    </Link>

                    {/* Menu Desktop */}
                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                            gap: "45px",
                        }}
                    >
                        <Button
                            component={Link}
                            to="/dicionario"
                            startIcon={<SearchIcon />}
                            sx={{
                                color: "#404040",
                                fontSize: "18px",
                                textTransform: "none",
                                "&:hover": {
                                    bgcolor: "transparent",
                                    borderBottom: "3px solid #0080FF",
                                    transform: "scale(1.05)"
                                }
                            }}
                        >
                            Dicionário
                        </Button>

                        <Button
                            component={Link}
                            to="/sobre"
                            startIcon={<PeopleAltOutlinedIcon />}
                            sx={{
                                color: "#404040",
                                fontSize: "18px",
                                textTransform: "none",
                                "&:hover": {
                                    bgcolor: "transparent",
                                    borderBottom: "3px solid #0080FF",
                                    transform: "scale(1.05)"
                                }
                            }}
                        >
                            Sobre
                        </Button>

                        <Button
                            component={Link}
                            to="/feedback"
                            startIcon={<FeedbackOutlinedIcon />}
                            sx={{
                                color: "#404040",
                                fontSize: "18px",
                                textTransform: "none",
                                "&:hover": {
                                    bgcolor: "transparent",
                                    borderBottom: "3px solid #0080FF",
                                    transform: "scale(1.05)"
                                }
                            }}
                        >
                            FeedBack
                        </Button>
                    </Box>

                    {/* Botão Mobile */}
                    <IconButton
                        onClick={() => setOpenMenu(true)}
                        sx={{
                            display: {
                                xs: "flex",
                                md: "none"
                            },
                            color: "#404040"
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Drawer Mobile */}
            <Drawer
                anchor="right"
                open={openMenu}
                onClose={() => setOpenMenu(false)}
            >
                <Box
                    sx={{
                        width: 250,
                        display: "flex",
                        flexDirection: "column",
                        p: 2,
                        gap: 2
                    }}
                >
                    <Button
                        component={Link}
                        to="/dicionario"
                        startIcon={<SearchIcon />}
                        onClick={() => setOpenMenu(false)}
                    >
                        Dicionário
                    </Button>

                    <Button
                        component={Link}
                        to="/sobre"
                        startIcon={<PeopleAltOutlinedIcon />}
                        onClick={() => setOpenMenu(false)}
                    >
                        Sobre
                    </Button>

                    <Button
                        component={Link}
                        to="/feedback"
                        startIcon={<FeedbackOutlinedIcon />}
                        onClick={() => setOpenMenu(false)}
                    >
                        FeedBack
                    </Button>
                </Box>
            </Drawer >
        </>
    );
}

export default Header;