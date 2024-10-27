import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DbContentChanges from './pages/DbContentChanges';
import Plates from './pages/Plates';

const App = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const menuItems = [
        { label: 'Home', path: '/' },
        { label: "Plates", path: "/plates" },
        { label: "Audit", path: "/audit" }
    ];

    return (
        <Router>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => setDrawerOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div">
                        RegTransfers Daniel Schoder
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <List>
                    {menuItems.map((item) => (
                        <ListItem
                            key={item.label}
                            component={NavLink}
                            to={item.path}
                            onClick={() => setDrawerOpen(false)}
                        >
                            <ListItemText primary={item.label} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <Box mt={4}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/plates" element={<Plates />} />
                    <Route path="/audit" element={<DbContentChanges />} />
                </Routes>
            </Box>
        </Router>
    );
};

export default App;
