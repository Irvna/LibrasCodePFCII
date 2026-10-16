//Bibliotecas
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';
//CSS global
import './global.css';
//Componentes
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
//Paginas
import Home from './pages/Home.jsx';
import Dicionario from './pages/Dicionario.jsx';
import Sobre from './pages/Sobre.jsx';
import Conceito from './pages/Conceito.jsx';
import Feedback from './pages/Feedback.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          {/* HEADER */}
          <Header />

          <Box sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dicionario" element={<Dicionario />} />
              {/* ROTA DINÂMICA SEPARADA */}
              <Route path="/dicionario/:id" element={<Conceito />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/feedback" element={<Feedback />} />
            </Routes>
          </Box>

          {/* FOOTER */}
          <Footer />
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
