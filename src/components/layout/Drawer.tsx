import {Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar} from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import {DashboardRounded, Mouse} from "@mui/icons-material";
import {observer} from "mobx-react-lite";
import ListHeadline from "./ListHeadline";


const CustomDrawer = () => {
    const location = useLocation()
    return (<>
        <Toolbar/>
        <Box sx={{overflow: 'auto'}}>
            <List>
                <ListItem key={"home"} disablePadding>
                    <ListItemButton component={Link} to="/" selected={"/" === location.pathname}>
                        <ListItemIcon>
                            <DashboardRounded/>
                        </ListItemIcon>
                        <ListItemText primary={"Home"}/>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider/>
            <ListHeadline title={"Stage 1"}/>
            <List>
                <ListItem key={"dash"} disablePadding>
                    <ListItemButton component={Link} to="/clicker" selected={"/clicker" === location.pathname}>
                        <ListItemIcon>
                            <Mouse/>
                        </ListItemIcon>
                        <ListItemText primary={"Clicker"}/>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider/>
        </Box>
    </>)
};

export default observer(CustomDrawer);