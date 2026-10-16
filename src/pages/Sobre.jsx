import { Box, Grid, Paper } from '@mui/material';
import foto_irvna from "../imgs/irvna.jpg";

function Sobre() {
    return (
        <Box sx={{ bgcolor: '#F1F6FA', minHeight: "100vh" }}>
            <Grid container direction="row" spacing={2} px={{ xs: 4, md: 10 }} py={4} paddingTop={{ xs: 6, md: 10 }}>
                <Grid width="100%">
                    {/* titulo */}
                    <Grid fontWeight="700" fontSize={{ xs: 16, md: 40, lg: 52 }}>
                        Saiba como Surgiu o<Box component="span" sx={{ color: '#0080FF' }}> LIBRAS Code</Box>
                    </Grid>
                    {/* mensagem */}
                    <Grid fontSize={{ xs: 12, md: 15, lg: 22 }} color={"rgba(0, 0, 0, 0.5)"} mt={{ xs: 3, md: 4 }} textAlign={"center"}>
                        Conheça como o LIBRAS Code surgiu!
                    </Grid>
                    {/* sobre o projeto */}
                    <Grid fontSize={{ xs: 12, md: 15, lg: 22 }} mt={{ xs: 3, md: 6 }} textAlign={"justify"} gap={2} display="flex" flexDirection="column">
                        <Box color={"#0080FF"} fontWeight="700">O LIBRAS Code é um Site que Permite o Acesso a Tradução em Libras dos Conceitos de Programação</Box>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Box color={"#000000"}>O <Box component="span" fontWeight="700">Libras Code</Box> é uma plataforma web educacional desenvolvida com o objetivo de tornar o aprendizado de programação mais acessível para pessoas surdas. O <Box component="span" fontWeight="700">portal disponibiliza gratuitamente um dicionário digital contendo conceitos fundamentais da programação de computadores, apresentando para cada termo sua definição, exemplos práticos em linguagem de programação e sua tradução para a Língua Brasileira de Sinais (LIBRAS)</Box>.</Box>
                            <Box>A plataforma foi criada para auxiliar estudantes, professores, intérpretes e demais interessados na área da computação, oferecendo um ambiente acessível que une tecnologia, educação e inclusão social. Por meio de recursos visuais e conteúdos adaptados, o LIBRAS Code busca reduzir as barreiras de comunicação frequentemente encontradas durante o processo de ensino e aprendizagem da programação.</Box>
                        </Box>
                    </Grid>

                    {/* por que ele foi criado */}
                    <Grid fontSize={{ xs: 12, md: 15, lg: 22 }} mt={{ xs: 4, md: 6 }} textAlign={"justify"} gap={2} display="flex" flexDirection="column">
                        <Box color={"#0080FF"} fontWeight="700">Por que este projeto foi criado?</Box>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Box color={"#000000"}>O ensino de programação é considerado um desafio para muitos estudantes devido à grande quantidade de conceitos abstratos e terminologias técnicas. Para pessoas surdas, essa dificuldade pode ser ainda maior, uma vez que muitos desses termos não possuem sinais amplamente difundidos ou materiais acessíveis que facilitem sua compreensão. Embora existam dicionários digitais de LIBRAS e iniciativas voltadas à inclusão educacional, ainda são escassos os recursos específicos para a área de Tecnologia da Informação. Dessa forma, surgiu a necessidade de desenvolver uma ferramenta que reunisse conceitos de programação, explicações acessíveis e traduções em LIBRAS em um único ambiente.</Box>
                        </Box>
                        <Box>
                            O LIBRAS Code é resultado de pesquisas realizadas sobre acessibilidade, ensino de programação e tradução de conceitos de programação para LIBRAS. O projeto envolve o levantamento dos principais termos utilizados na programação, a elaboração de explicações adaptadas e a gravação das traduções em Língua Brasileira de Sinais com apoio de intérpretes especializados.
                            A plataforma foi desenvolvida utilizando tecnologias modernas para aplicações web, buscando oferecer desempenho, facilidade de manutenção e uma experiência agradável aos usuários.
                        </Box>
                        <Box>
                            A disponibilização da tradução dos termos para libras foi realizada para que todos os usuários da plataforma pudessem utiliza-la com autonomia, ainda que a língua portuguesa seja a segunda linguagem mais comum e utilizada pelas pessoas surdas é de extrema importância que além da explicação de cada termo, pois muitas pessoas surdas não são alfabetizadas na língua portuguesa e as linguagens possuem certas diferenças linguísticas.
                        </Box>
                        <Box>
                            A criação do LIBRAS Code foi motivada pela percepção da falta de materiais acessíveis voltados especificamente para o ensino de programação. A proposta busca contribuir para uma educação mais inclusiva, considerando que o acesso ao conhecimento tecnológico é fundamental para a formação acadêmica e profissional na sociedade atual.
                            Acreditamos que a tecnologia deve ser uma ferramenta de transformação social, capaz de ampliar oportunidades e promover a participação de todas as pessoas no ambiente digital.
                        </Box>
                    </Grid>

                    {/* como funciona */}
                    <Grid fontSize={{ xs: 12, md: 15, lg: 22 }} mt={{ xs: 4, md: 6 }} textAlign={"justify"} gap={2} display="flex" flexDirection="column">
                        <Box color={"#0080FF"} fontWeight="700">Como o CodeLibras funciona?</Box>
                        <Box display="flex" flexDirection="column" gap={3}>
                            <Box color={"#000000"}>O sistema organiza os conceitos de programação em um dicionário digital acessível. Ao selecionar um termo, o usuário tem acesso a:</Box>
                            <Grid
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: { xs: 2},
                                    justifyContent: {xs: "center", xl: "space-between"},
                                    flexWrap: {xs: "wrap", lg: "nowrap"},
                                }}
                                mb={{ xs: 3, lg: 6 }}
                            >
                                {[
                                    {
                                        titulo: "Definição Simplificada",
                                        descricao: "Explicação rápida e objetiva para facilitar o primeiro contato com o conceito."
                                    },
                                    {
                                        titulo: "Explicação Detalhada",
                                        descricao: "Conteúdo aprofundado para compreender melhor cada termo de programação."
                                    },
                                    {
                                        titulo: "Exemplos em C",
                                        descricao: "Trechos de código práticos mostrando a aplicação real do conceito."
                                    },
                                    {
                                        titulo: "Vídeos em LIBRAS",
                                        descricao: "Tradução dos conceitos para Língua Brasileira de Sinais."
                                    },
                                    {
                                        titulo: "Acessibilidade",
                                        descricao: "Recursos que tornam a navegação e o ensino aprendizagem mais inclusivos e intuitivos."
                                    }
                                ].map((item, index) => (
                                    <Paper
                                        key={index}
                                        sx={{
                                            p: {xs: 4, lg: 2},
                                            width: {
                                                xs: "100%",
                                                md: "150px",
                                                lg: "250px",
                                            },
                                            height: {
                                                xs: "100%",
                                                md: "150px",
                                                lg: "200px",
                                            },
                                            borderRadius: 4,
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            textAlign: "center",
                                            transition: "0.3s",
                                            backgroundColor: "#FAFAFA",
                                            "&:hover": {
                                                transform: "translateY(-5px)",
                                                boxShadow: 6
                                            }
                                        }}
                                    >
                                        <Box
                                            fontWeight={700}
                                            fontSize={{ xs: 13, md: 14, lg: 20 }}
                                            mb={1}
                                        >
                                            {item.titulo}
                                        </Box>

                                        <Box
                                            fontSize={{ xs: 11, md: 14, lg: 18 }}
                                            color="text.secondary"
                                        >
                                            {item.descricao}
                                        </Box>
                                    </Paper>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>

                    {/* sobre mim */}
                    <Grid fontSize={{ xs: 12, md: 15, lg: 22 }} py={{ xs: 4, md: 6 }} textAlign={"justify"} gap={2} display="flex" flexDirection="column">
                        <Box color={"#0080FF"} fontWeight="700">Sobre Mim</Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: { xs: "column", lg: "row" },
                            gap: { xs: 5, md: 20 }
                        }} color={"#000000"}>
                            <Box sx={{ width: { xs: "100%", lg: "60%" } }} gap={3} display="flex" flexDirection="column">
                                Me chamo Irvna Maria, tenho 20 anos, sou natural de Campo Grande - MS, atualmente estou cursando o 4º ano de Sistema de Informação na Universidade Estadual de Mato Grosso do Sul.
                                Sempre tive interesse por iniciativas que promovem a inclusão social de pessoas com deficiência e, aliado a isso, nutro uma forte afinidade com a área de programação. Acredito no poder da tecnologia como ferramenta de transformação
                                social, por isso, tenho um interesse genuíno na inclusão tecnológica e na área de ensino sobre a
                                tecnologia, buscando formas de tornar o conhecimento técnico mais acessível e intuitivo. Nesse contexto, desenvolvi este projeto com o objetivo de contribuir para o processo de ensino e aprendizagem de programação por pessoas surdas, unindo tecnologia e inclusão.
                                <Box>
                                    <Box color={"#0080FF"} fontWeight="700">Orientação Acadêmica</Box>
                                    Este projeto é desenvolvido como Trabalho de Conclusão de Curso do Bacharelado em Sistemas de Informação da Universidade Estadual de Mato Grosso do Sul (UEMS), sob orientação da Professora Dra. Jéssica Bassani de Oliveira.
                                    O desenvolvimento do LIBRAS Code também dá continuidade às pesquisas realizadas anteriormente no âmbito da iniciação científica, voltadas para acessibilidade, inclusão digital e ensino de programação para pessoas surdas.
                                </Box>
                            </Box>
                            <Box
                                component="img"
                                src={foto_irvna}
                                alt="Foto de Irvna Maria, a foto aparece somente o a parte de cima do corpo, ela está com o braço esquerdo apoiado totalmente na mesa com a mão em direção ao braço direito, o braço direito está com o cotovelo apoiado na mesa e com a mão no rosto, ela é uma pessoa branca, possui cabelo cacheado, está com uma brusa branca levemente cavada, um colocar dourado com a inicial I, no seu braço direito possui uma puseira dourada delicada."
                                sx={{
                                    width: { xs: "100%", lg: "30%" },
                                    height: '100%',
                                    borderRadius: 2
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    );
}

export default Sobre;
