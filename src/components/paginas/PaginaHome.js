import BotaoMais from "../modelos/botaoMais";
import PaginaPadrao from "./../modelos/PaginaPadrao";

const PaginaHome = () => {
  return (
    <main>
      <BotaoMais>
         <PaginaPadrao titulo="Produtos e Serviços" descricao="Conheça todos os nossos produtos e serviços disponíveis pra você!" />
      </BotaoMais>
      </main>
  );
};
export default PaginaHome;
