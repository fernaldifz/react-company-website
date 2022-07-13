import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const CompanyAppBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleHover = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <AppBar position="static" color="transparent" sx={{ flexGrow: 1, boxShadow: "0px 0px", padding: "0px 160px" }}>
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
                        Company
                    </Typography>
                    <div onMouseLeave={handleClose}>
                        <Button
                            color="inherit"
                            onMouseEnter={handleHover}
                        >
                            ABOUT
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                        >
                            <MenuItem onClick={handleClose}>History</MenuItem>
                            <MenuItem onClick={handleClose}>Vission Mission</MenuItem>
                        </Menu>
                    </div>
                    <Button color="inherit">OUR WORK</Button>
                    <Button color="inherit">OUR TEAM</Button>
                    <Button color="inherit">CONTACT</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default CompanyAppBar