import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Cep, Telefone, Maiusculo, PrimeiraMaiusculo} from './../mascaras/mascaras';
import {DataInvert} from './../mascaras/mascaras';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 4}} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function MaisInfo(props) {
  const [open, setOpen] = React.useState(false);


var cpf = props.cpf;

  // Sexo por escrito
let sexo = "Não informado";
  if(props.sexo === "F"){
    sexo = "Feminino"
  } 
  if (props.sexo === "M") {
    sexo = "Masculino"
  }
// Telefone
const celular = Telefone(props.telefone);
// CEP
const cep = Cep(props.cep);
// Maiusculo
const nome = Maiusculo(props.nome);
// Primeira em Maiúsculo
const apelido = PrimeiraMaiusculo(props.apelido);
// Data de Nascimento
const DataNascimento = props.nascimento || "" ;
const nascimento = DataInvert(DataNascimento);
//CPF





  const abrirmaisinfo = () => {
    setOpen(true);
  };
  const fecharmaisinfo = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={abrirmaisinfo}>
        Mais informações
      </Button>
      <BootstrapDialog
      fullWidth={"xl"}
      maxWidth={"xl"}
        onClose={fecharmaisinfo}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={fecharmaisinfo}
        >
          Usuarios
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
              <h3>Nome:</h3> <h4>{nome}</h4><p/>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 'xl', maxWidth: 'xl' }} aria-label="caption table">
                <caption>
                <Button variant="outlined">
        Alterar
      </Button> 
                <Button variant="outlined">
        Excluir
      </Button>



                </caption>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right"><h4>Nome</h4></TableCell>
                    <TableCell align="right"><h4>Sobrenome</h4></TableCell>
                    <TableCell align="right"><h4>Apelido</h4></TableCell>
                    <TableCell align="right"><h4>Email</h4></TableCell>
                    <TableCell align="right"><h4>DDD</h4></TableCell>
                    <TableCell align="right"><h4>Telefone</h4></TableCell>
                    <TableCell align="right"><h4>Rua</h4></TableCell>
                    <TableCell align="right"><h4>Numero</h4></TableCell>
                    <TableCell align="right"><h4>Complemento</h4></TableCell>
                    <TableCell align="right"><h4>Bairro</h4></TableCell>
                    <TableCell align="right"><h4>Cep</h4></TableCell>
                    <TableCell align="right"><h4>Cidade</h4></TableCell>
                    <TableCell align="right"><h4>Estado</h4></TableCell>
                    <TableCell align="right"><h4>Sexo</h4></TableCell>
                    <TableCell align="right"><h4>Mae</h4></TableCell>
                    <TableCell align="right"><h4>Pai</h4></TableCell>
                    <TableCell align="right"><h4>Nascimento</h4></TableCell>
                    <TableCell align="right"><h4>RG</h4></TableCell>
                    <TableCell align="right"><h4>CPF</h4></TableCell>
                    <TableCell align="right"><h4>Pedido</h4></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {props.id}
                    </TableCell>
                    <TableCell align="right">{nome}</TableCell>
                    <TableCell align="right">{props.sobrenome}</TableCell>
                    <TableCell align="right">{apelido}</TableCell>
                    <TableCell align="right">{props.email}</TableCell>
                    <TableCell align="right">{props.ddd}</TableCell>
                    <TableCell align="right">{celular}</TableCell>
                    <TableCell align="right">{props.rua}</TableCell>
                    <TableCell align="right">{props.numero}</TableCell>
                    <TableCell align="right">{props.complemento}</TableCell>
                    <TableCell align="right">{props.bairro}</TableCell>
                    <TableCell align="right">{cep}</TableCell>
                    <TableCell align="right">{props.cidade}</TableCell>
                    <TableCell align="right">{props.estado}</TableCell>
                    <TableCell align="right">{sexo}</TableCell>
                    <TableCell align="right">{props.mae}</TableCell>
                    <TableCell align="right">{props.pai}</TableCell>
                    <TableCell align="right">{nascimento}</TableCell>
                    <TableCell align="right">{props.rg}</TableCell>
                    <TableCell align="right">{cpf}</TableCell>
                    <TableCell align="right">{props.pedido}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={fecharmaisinfo}>
            Fechar
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
