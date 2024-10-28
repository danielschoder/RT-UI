import { Container, Typography, Button, Divider, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
    const menuItems = [
        { label: "Plates", path: "/plates" },
        { label: "Audit", path: "/audit" }
    ];

    const renderMenuButton = (label: string, path: string) => (
        <Button key={path} variant="text" component={RouterLink} to={path}>
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
                    href="http://localhost:5101/swagger"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Plates API Swagger
                </Button>
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
                <Button
                    variant="outlined"
                    color="primary"
                    href="https://localhost:7168/swagger"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Audit API Swagger
                </Button>
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
                <Button
                    variant="outlined"
                    color="primary"
                    href="https://github.com/danielschoder/RT"
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
