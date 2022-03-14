import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as Rota }  from 'react-router-dom';
import { Info } from './../dados/info';

export default function Copyright(){
    return(
        <div>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="body2" color="text.secondary" align="center">
         <Rota to="/config" underline="none"> {'Copyright © '}</Rota>
        <Link color="inherit" href={Info[0].site} target="_blank">
          {Info[0].titulo}
        </Link>{' '}
        {new Date().getFullYear()} | Desenvolvido por:  <Link color="inherit" href="info">
        {Info[0].desenvolvedor}
        </Link>  
        {'.'}
      </Typography>
      </Box>
        </div>
    )
}

