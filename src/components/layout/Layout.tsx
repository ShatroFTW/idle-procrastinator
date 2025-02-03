import {Outlet} from "react-router-dom";
import {AppBar, Box, CssBaseline, Drawer, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {Replay} from "@mui/icons-material";
import {useState} from "react";
import CustomDrawer from "./Drawer";

const Layout = () => {
    const drawerWidth = 240;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };
    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };
    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" className={"grain"}
                    sx=
                        {{
                            zIndex: (theme) => theme.zIndex.drawer + 1,
                        }}
                    component={"nav"}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Stack direction={"row"} sx={{alignItems: "center"}} spacing={2}>
                        <Replay/> {/*TODO: PLACEHOLDER ICON*/}
                        <Typography variant="h6" component="div" sx={{flexGrow: 1, display: 'block'}}>
                            Idle Procrastinator
                        </Typography>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: {xs: 'block', sm: 'none'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                }}
            >
                <CustomDrawer/>
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: {xs: 'none', sm: 'block'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                }}
                open
            >
                <CustomDrawer/>
            </Drawer>
            <Box component={"main"} sx={{
                flexGrow: 1, p: 3,
                ml: {
                    sm: `${drawerWidth}px`
                }
            }}>
                <Toolbar/>
                <Outlet/>
            </Box>
        </Box>
    )
};

export default Layout;