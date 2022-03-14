import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { menu1, menu2 } from "./dados/menu";
import { Routes, Route, Link } from "react-router-dom";
import PaginaHome from "./paginas/PaginaHome";
import PaginaPerfil from "./paginas/PaginaPerfil";
import PaginaShop from "./paginas/PaginaShop";
import PaginaBalance from "./paginas/PaginaBalance";
import PaginaPedido from "./paginas/PaginaPedido";
import PaginaConfig from "./paginas/PaginaConfig";
import { Info } from './dados/info';
import Login from "./modelos/login";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Barratopo() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        {" "}
        {/* Barra do topo */}
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{}}
          >
            {" "}
            {/* Icone dentro da Barra do topo */}
            <MenuIcon />
          </IconButton>
          {/* fim do icone da Barra do topo */}
          <Typography variant="h6" noWrap component="div">
            {" "}
            {/* Titulo da Barra do topo */}
            {Info[0].titulo}
          </Typography>{" "}
          {/* Fim do titulo da Barra do topo */}

{/* Icone de Login */}

{/* Fim de icone de login */}

        </Toolbar>
        
      </AppBar>{" "}
      {/* fim da Barra do topo */}
      <Drawer variant="permanent" open={open}>
        {" "}
        {/* Barra lateral */}
        

        <DrawerHeader>
        <Login>
          {" "}



      









          {/* Icone mutavel da Barra lateral */}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
          </Login>
        </DrawerHeader>{" "}
        {/* Fim do icone mutavel da Barra lateral */}
        <Divider />
        {/* Primeiro bloco de botões */}
        <List>
          {menu1.map((item, index) => (
            <ListItem button key={index} component={Link} to={item.link} disabled={item.status}>
              <ListItemIcon>{item.icone}</ListItemIcon>
              <ListItemText primary={item.titulo} />
            </ListItem>
          ))}
          
          
        </List>
        {/*Fim do Primeiro bloco de botões */}
        <Divider />
        {/* Segundo bloco de botões */}
        <List>
          {menu2.map((item, index) => (
            <ListItem button key={index} component={Link} to={item.link} disabled={item.status}>
              <ListItemIcon>{item.icone}</ListItemIcon>
              <ListItemText primary={item.titulo} />
            </ListItem>
          ))}
        </List>
        
        {/* Sergundo bloco de botões */}
      </Drawer>{" "}
      {/* Fim da Barra lateral */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="shop" element={<Shop />} />
          <Route path="balance" element={<Balance />} />
          <Route path="pedido" element={<Pedido />} />
          <Route path="config" element={<Config />} />
        </Routes>
      </Box>
    </Box>
  );
}

function Home() {
  return <PaginaHome />
}
function Perfil() {
  return <PaginaPerfil />;
}
function Shop() {
  return <PaginaShop />;
}
function Balance() {
  return <PaginaBalance />;
}
function Pedido() {
  return <PaginaPedido />;
}
function Config() {
  return <PaginaConfig />;
}
