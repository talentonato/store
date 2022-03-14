import { IconeConfig, IconeGrafico, IconeHome, IconeNotificacao, IconePedido, IconePerson } from "../icones/icones";
import { IconeCarrinho } from './../icones/icones';


export const menu1 = [
  {
    titulo: "Início",
    link: "/",
    icone: <IconeHome />,
  },
  {
    titulo: "Perfil",
    status: false,
    link: "/perfil",
    icone: <IconePerson />,
  },
  {
    titulo: "Loja",
    link: "/shop",
    icone: <IconeCarrinho />,
  },
];
export const menu2 = [
    // {
    //   titulo: "Balanço",
    //   link: "/balance",
    //   icone: <IconeGrafico />,
    // },
    {
      titulo: "Pedido",
      link: "/pedido",
      icone: <IconePedido/>,
    },
    {
      titulo: "Ajustes",
      status: "true",
      link: "/config",
      icone: <IconeConfig />,
    },
  ];
  