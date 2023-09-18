import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Header() {
   
    return (

        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
           
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                © 2023 Copyright
            </Typography>
        </Box>
    )
}



