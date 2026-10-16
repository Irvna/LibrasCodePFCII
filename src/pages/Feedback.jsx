import { Box, Grid, Button, Alert } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { supabase } from "../services/supabase";

function Feedback() {
    const [tipo, setTipo] = useState("feedback"); // "feedback" | "sugestao_termo"
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [website, setWebsite] = useState(""); // honeypot
    const [status, setStatus] = useState("idle"); // idle | enviando | sucesso | erro

    async function handleSubmit(e) {
        e.preventDefault();
        if (mensagem.trim().length < 3) {
            setStatus("invalido");
            return;
        }

        setStatus("enviando");
        const { error } = await supabase.functions.invoke("enviar-feedback", {
            body: { tipo_mensagem: tipo, nome, email, mensagem, website },
        });

        if (error) {
            console.error(error);
            setStatus("erro");
            return;
        }

        setStatus("sucesso");
        setNome("");
        setEmail("");
        setMensagem("");
    }

    return (
        <Box sx={{ bgcolor: '#F1F6FA', minHeight: "100vh" }}>
            <Grid container direction="row" spacing={2} px={{ xs: 4, md: 10 }} py={4} paddingTop={{ xs: 6, md: 10 }}>
                <Grid width="100%">
                    {/* titulo */}
                    <Grid fontWeight="700" fontSize={{ xs: 20, md: 40, lg: 52 }}>
                        Área de <Box component="span" sx={{ color: '#0080FF' }}>Feedback</Box>
                    </Grid>
                    {/* mensagem */}
                    <Grid fontSize={{ xs: 15, lg: 22 }} color={"rgba(0, 0, 0, 0.8)"} mt={{ xs: 2, md: 5 }} textAlign={"justify"}>
                        Conte-nos o que achou do site ou sugira palavras que gostaria de ver traduzidas em LIBRAS.
                    </Grid>
                    {/* area do feedback */}
                    <Grid
                        mt={{ xs: 4, md: 6 }}
                        display="flex"
                        flexDirection="row"
                        justifyContent="center"
                    >
                        <Grid
                            fontSize={{ xs: 14, md: 15, lg: 24 }}
                            textAlign={"justify"}
                            sx={{
                                bgcolor: "#FFFFFF",
                                borderRadius: { xs: 4, md: 10 },
                                p: { xs: 2, md: 6 },
                                width: { xs: "100%", md: "60%" },
                            }}>
                            {/* Envie sua mensagem */}
                            <Grid>
                                <Box color={"#0080FF"} fontWeight="700">Envie sua mensagem</Box>
                                <Box fontSize={{ xs: 12, md: 16, lg: 18 }} color={"rgba(0, 0, 0, 0.5)"} mt={{ xs: 1, md: 2 }}>
                                    Preencha os campos abaixo. Seus dados são opcionais.
                                </Box>
                            </Grid>
                            {/* Tipo mensagem */}
                            <Box
                                mt={{ xs: 2, md: 4 }}
                                fontSize={{ xs: 12, md: 16, lg: 18 }}
                            >
                                <Box color={"rgba(0, 0, 0, 0.75)"} fontWeight="700">Tipo de mensagem *</Box>
                                <Grid
                                    mt={{ xs: 0, md: 1 }}
                                    display="flex"
                                    flexDirection={{ xs: "column", md: "row" }}
                                    justifyContent="space-between"
                                >
                                    <Button
                                        variant="contained"
                                        onClick={() => setTipo("feedback")}
                                        sx={{
                                            minWidth: "47%",
                                            height: { xs: "10vw", md: "3.5vw" },
                                            fontSize: { xs: 8, md: 11, lg: 18 },
                                            textTransform: 'none',
                                            gap: "10px",
                                            borderRadius: 2,
                                            mt: 2,
                                            color: "#383838",
                                            "&:hover": { bgcolor: "#0080FF", transform: "scale(1.05)" },
                                            bgcolor: tipo === "feedback" ? "#0080FF" : "#F1F6FA",
                                        }}
                                    >
                                        <FeedbackIcon />
                                        Feedback da plataforma
                                    </Button>
                                    <Button
                                        variant="contained"
                                        onClick={() => setTipo("sugestao_termo")}
                                        sx={{
                                            minWidth: "47%",
                                            height: { xs: "10vw", md: "3.5vw" },
                                            fontSize: { xs: 10, md: 16, lg: 18 },
                                            textTransform: 'none',
                                            gap: "10px",
                                            borderRadius: 2,
                                            mt: 2,
                                            color: "#383838",
                                            "&:hover": { bgcolor: "#0080FF", transform: "scale(1.05)" },
                                            bgcolor: tipo === "sugestao_termo" ? "#0080FF" : "#F1F6FA",
                                        }}>
                                        <WbIncandescentIcon sx={{ fontSize: 23 }} />
                                        Sugerir novo termo
                                    </Button>
                                </Grid>
                            </Box>
                            {/* Nome e Email */}
                            <Grid
                                mt={{ xs: 2, md: 4 }}
                                display="flex"
                                flexDirection={{ xs: "column", md: "row" }}
                                justifyContent="space-between"
                                fontSize={{ xs: 10, md: 16, lg: 18 }}
                                gap={{ xs: 2, md: 0 }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: { xs: 1, md: 2 },
                                        width: { xs: "100%", md: "47%" },
                                    }}
                                >
                                    <Box color={"rgba(0, 0, 0, 0.75)"} fontWeight="700" >Nome</Box>
                                    <TextField
                                        label="Seu Nome"
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            bgcolor: "#F1F6FA",
                                            "& .MuiOutlinedInput-root": {
                                                height: { xs: "10vw", md: "3.5vw" },
                                                borderRadius: 2,
                                            },
                                        }}
                                        inputProps={{ maxLength: 100 }}
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: { xs: 1, md: 2 },
                                        width: { xs: "100%", md: "47%" },
                                    }}
                                >
                                    <Box color={"rgba(0, 0, 0, 0.75)"} fontWeight="700" >Email</Box>
                                    <TextField
                                        label="seu@email.com"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            bgcolor: "#F1F6FA",
                                            "& .MuiOutlinedInput-root": {
                                                height: { xs: "10vw", md: "3.5vw" },
                                                borderRadius: 2,
                                            },
                                        }}
                                        inputProps={{ maxLength: 200 }}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Box>
                            </Grid>
                            {/* Campo da mensagem */}
                            <Box
                                mt={{ xs: 2, md: 4 }}
                                fontSize={{ xs: 10, md: 16, lg: 18 }}
                            >
                                <Box color={"rgba(0, 0, 0, 0.75)"} fontWeight="700">Mensagem *</Box>
                                <TextField
                                    label={
                                        tipo === "sugestao_termo"
                                            ? "Qual termo você gostaria de ver traduzido em LIBRAS e por quê?"
                                            : "Conte-nos o que você achou do site e o que pode melhorar."
                                    }
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        mt: { xs: 1, md: 2 },
                                        bgcolor: "#F1F6FA",
                                        "& .MuiOutlinedInput-root": {
                                            height: { xs: "30vw", md: "12vw" },
                                            borderRadius: 2,
                                        },
                                    }}
                                    multiline
                                    rows={5}
                                    inputProps={{ maxLength: 2000 }}
                                    value={mensagem}
                                    onChange={(e) => setMensagem(e.target.value)}
                                />
                            </Box>

                            {/* Honeypot: humanos não veem nem preenchem */}
                            <input
                                type="text"
                                name="website"
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                                tabIndex={-1}
                                autoComplete="off"
                                aria-hidden="true"
                                style={{ position: "absolute", left: "-9999px", opacity: 0 }}
                            />

                            {/* Avisos de status */}
                            {status === "sucesso" && (
                                <Alert severity="success" sx={{ mt: 2 }}>
                                    Mensagem enviada! Obrigado pelo seu retorno.
                                </Alert>
                            )}
                            {status === "erro" && (
                                <Alert severity="error" sx={{ mt: 2 }}>
                                    Não foi possível enviar. Tente novamente em instantes.
                                </Alert>
                            )}
                            {status === "invalido" && (
                                <Alert severity="warning" sx={{ mt: 2 }}>
                                    Escreva uma mensagem com pelo menos 3 caracteres.
                                </Alert>
                            )}

                            {/* Botão de enviar*/}
                            <Box
                                mt={{ xs: 2, md: 4 }}
                                fontSize={{ xs: 10, md: 16, lg: 18 }}
                                textAlign="right"
                            >
                                <Button
                                    variant="contained"
                                    onClick={handleSubmit}
                                    disabled={status === "enviando"}
                                    sx={{ minWidth: "20%", height: { xs: "8vw", md: "3vw" }, fontSize: { xs: 10, md: 16, lg: 18 }, textTransform: 'none', gap: "10px", borderRadius: 2, bgcolor: "#0080FF", color: "#ffffff", mt: 2, "&:hover": { bgcolor: "#FF8C42", transform: "scale(1.05)" } }}
                                >
                                    {status === "enviando" ? "Enviando..." : "Enviar Mensagem"}
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    );
}

export default Feedback;