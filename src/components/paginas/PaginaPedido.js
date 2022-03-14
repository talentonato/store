
import BotaoMais from "../modelos/botaoMais";
const PaginaPedido = () => {
    return (
      <main>
       
       <BotaoMais>
         <h1> Faça seu pedido!</h1>
         <iframe
            src="https://www.talentonatocomercio.com.br/envio/inscricao.html"
            width="100%"
            height="700"
            frameborder="0"
            margin="0"
            padding="0"
            allowfullscreen
            sandbox
          /></BotaoMais>
</main>
    );
  };
  export default PaginaPedido;