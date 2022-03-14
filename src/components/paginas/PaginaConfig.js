import Usuarios from './../dados/usuarios';
import { Link as Rota } from 'react-router-dom';
const PaginaConfig = () => {
    return (
      <main>
        <h2>Pagina Ajustes</h2>
        <p>Este é o conteudo da pagina Ajustes</p>
        <Usuarios />
        <Rota to="/perfil" underline="none" > {'perfil'}</Rota>
      </main>
    );
  };
  export default PaginaConfig;