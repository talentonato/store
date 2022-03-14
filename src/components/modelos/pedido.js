import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button, responsiveFontSizes } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import api from "./../dados/api";

export default function Pedido() {
  const updatePedido = () => {
    const data = {
      nome: 'Maria Conceição da Silva Barbosa',
      apelido: 'Lia',
      email: 'mariaconceicaosilva72@gmail.com',
      ddd: '12',
      telefone: '991367808',
      rua: 'Estrada do Rio Manso',
      numero: '5351',
      complemento: '',
      bairro: 'Rio Manso',
      cep: '12250000',
      cidade: 'Monteiro Lobato',
      estado: 'SP',
      sexo: 'F',
      mae: 'Ana Rita Machado',
      pai: 'Benedito Caetano da Silva',
      nascimento: '30031976',
      rg: '',
      cpf: '26816665899',
      pedido: 'Meu pedido',
    };

    var config = {
      method: "post",
      url: "https://talentonatoapi.herokuapp.com/usuarios/",
      // Headers: {
      //   "origin": "https://www.talentonatocomercio.com.br/info",
      //   "Content-Type": "application/json"
      // }
    };

    axios.post(config, data)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log("Deu erro, Refaça!!:  " + error);
    });

    // console.table(JSON.stringify(data));

    // axios
    //   .post("https://talentonatoapi.herokuapp.com/usuarios/", data)
    //   .then(function (response) {
    //     return (
    //       console.table({ Mensagem: "Deu Certo!!!" }) +
    //       console.log(JSON.stringify(response.data))
    //     );
    //   })
    //   .catch(function (error) {
    //     return (
    //       console.table({ Mensagem: "Deu Erro!!, Corrija", Erro: "" }) +
    //       console.log(error)
    //     );
    //   });

    // Fetch do javascript *************************************************************************

    // const requestInfoDia = {
    //   method: "POST",
    //   data: data,
    //   // headers: new Headers({
    //   //   'Content-Type': 'application/json',
    //   //   'Accept': 'application/json',
    //   //   'Access-Control-Allow-Origin': 'https://www.talentonatocomercio.com.br/info/'
    //   // }),
    // };

    // const dadosDia = fetch(
    //   "https://talentonatoapi.herokuapp.com/usuarios",
    //   requestInfoDia
    // );
    // dadosDia
    //   .then(function (response) {
    //     return (
    //       console.table({ Mensagem: "Deu Certo!!!" }) +
    //       console.log(JSON.stringify(response.data))
    //     );
    //   })
    //   .catch(function (error) {
    //     return (
    //       console.table({ Mensagem: "Deu Erro!!, Corrija", Erro: "" }) +
    //       console.log(error)
    //     );
    //   });
  }
  const updateNome = (e) => {
    this.setState({
      nome: e.target.value,
    });
  };
  const updateSobrenome = (e) => {
    this.setState({
      sobrenome: e.target.value,
    });
  };
  const updateEndereco = (e) => {
    this.setState({
      endereco: e.target.value,
    });
  };
  const updateEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  const updateCidade = (e) => {
    this.setState({
      cidade: e.target.value,
    });
  };
  const updateEstado = (e) => {
    this.setState({
      estado: e.target.value,
    });
  };
  const updateCep = (e) => {
    this.setState({
      cep: e.target.value,
    });
  };
  const updateTelefone = (e) => {
    this.setState({
      telefone: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <form>
        <Typography variant="h6" gutterBottom>
          Deixe suas informações e entraremos em contato!
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="nome"
              name="nome"
              onChange={updateNome}
              label="Primeiro Nome"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="sobrenome"
              name="sobrenome"
              onChange={updateSobrenome}
              label="Ultimo Nome"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="endereco"
              name="endereco"
              onChange={updateEndereco}
              label="Endereço Completo"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              onChange={updateEmail}
              label="Email"
              fullWidth
              autoComplete="shipping email"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="cidade"
              name="cidade"
              onChange={updateCidade}
              label="Cidade"
              fullWidth
              autoComplete="address-level2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="estado"
              name="estado"
              onChange={updateEstado}
              label="Estado"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="cep"
              name="cep"
              onChange={updateCep}
              label="CEP"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="telefone"
              name="telefone"
              onChange={updateTelefone}
              label="Telefone"
              fullWidth
              autoComplete="shipping tel"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="pedido"
              name="pedido"
              onChange={updatePedido}
              label="Descreva seu pedido"
              fullWidth
              autoComplete="shipping text"
              variant="standard"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ padding: 4 }}>
          <Button
            variant="outlined"
            onClick={updatePedido}
            endIcon={<SendIcon />}
          >
            Enviar
          </Button>
        </Grid>
      </form>
    </React.Fragment>
  );
}
