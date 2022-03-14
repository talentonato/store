import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { Info } from './../dados/info';
import { Link } from 'react-router-dom';
import { IconeFacebook, IconeWhatsapp, IconeInstagram, IconeEmail, IconeTelefone } from './../icones/icones';

const actions = [
    { icon: <IconeInstagram />, name: 'Instagram', link: Info[0].contato.instagram },
    { icon: <IconeFacebook />, name: 'Facebook', link: Info[0].contato.facebook },
    { icon: <IconeEmail />, name: 'Email', link: ("mailto:'"+Info[0].contato.email+"") },
    { icon: <IconeTelefone />, name: 'Telefone', link: ("tel:'"+Info[0].contato.telefone+"")},
    { icon: <IconeWhatsapp />, name: 'Whatsapp', link: Info[0].contato.linkWhatsapp },
];

export default function BotaoMais(props) {
  return (
    <Box sx={{ position: 'absolute', width: "90%", alignItems: 'right', transform: 'translateZ(0px)', flexGrow: 1 }}>
      {props.children}
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 0, right: 10, marginBottom: "15px" }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            href={action.link}
            target="_blank"

            tooltipTitle={action.name}
          />
        ))}
        
      </SpeedDial>
      
    </Box>
  );
}
