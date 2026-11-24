// Rotas do site: cada endereço (path) mostra uma página da pasta src/pages.
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tecnologia from './pages/Tecnologia';
import Comparativo from './pages/Comparativo';
import Galeria from './pages/Galeria';
import Projeto from './pages/Projeto';
import Perguntas from './pages/Perguntas';
import Regulamentacao from './pages/Regulamentacao';
import Fontes from './pages/Fontes';
import NaoEncontrada from './pages/NaoEncontrada';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* O Layout coloca o cabeçalho e o rodapé em volta de todas as páginas */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/comparativo" element={<Comparativo />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/perguntas-frequentes" element={<Perguntas />} />
          <Route path="/regulamentacao" element={<Regulamentacao />} />
          <Route path="/fontes" element={<Fontes />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
