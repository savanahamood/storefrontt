import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../../store/activeCatigory';

export default function Categories() {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.categories);

    const handleCategoryClick = (category) => {
        dispatch(setActiveCategory(category));
    };
    return (

        <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            }}
        >
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Browse our Categories
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    Welcome to HEIN - Your One-Stop Shopping Destination!
                </Typography>
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    {categories.map((category) => (


                        <Button variant="outlined" key={category.id} onClick={() => handleCategoryClick(category)}>{category.name}</Button>
                    ))}
                    {/* <Button variant="outlined">GAMES</Button>
                    <Button variant="outlined">FOOD</Button>
                    <Button variant="outlined">WEAPONS</Button> */}
                </Stack>
            </Container>
        </Box>

    )
}