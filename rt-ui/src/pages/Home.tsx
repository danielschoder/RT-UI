import { Container, Typography, Button, Divider, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { baseUrl } from '../constants';

const Home = () => {
    const apiUrl = `${baseUrl}/swagger`;

    const menuItems = [
        { label: "Plates", path: "/plates" },
        { label: "Audit", path: "/audit" }
    ];

    const renderMenuButton = (label: string, path: string) => (
        <Button variant="text" component={RouterLink} to={path}>
            {label}
        </Button>
    );

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                RegTransfers
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                Welcome to the world of plates!
            </Typography>

            <Stack spacing={2} alignItems="flex-start" sx={{ marginBottom: 2 }}>
                {menuItems.map((item) => renderMenuButton(item.label, item.path))}
            </Stack>

            <Divider sx={{ marginBottom: 2 }} />

            <Typography sx={{ marginBottom: 2 }}>
                <Button
                    variant="outlined"
                    color="primary"
                    href={apiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    API documentation
                </Button>
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
                <Button
                    variant="outlined"
                    color="primary"
                    href="https://github.com/danielschoder/RT-UI"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub repository
                </Button>
            </Typography>

        </Container>
    );
};

export default Home;
