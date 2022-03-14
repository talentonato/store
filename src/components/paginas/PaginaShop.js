import { Container } from "@mui/material";
import BotaoMais from "./../modelos/botaoMais";

const PaginaShop = () => {
  return (
    <main>
      <Container maxWidth="xl">
        <BotaoMais>
          <iframe
            src="https://www.magazinevoce.com.br/magazinetalentonatocom/"
            width="100%"
            height="1300"
            frameborder="0"
            margin="0"
            padding="0"
            allowfullscreen
            sandbox
          />
        </BotaoMais>
      </Container>
    </main>
  );
};
export default PaginaShop;
