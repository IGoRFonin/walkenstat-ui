import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Favorite, Restore } from '@mui/icons-material';
import styles from './Navbar.module.css';

const NavBar: React.FC = () => {
    return (
        <Paper
            elevation={3}
            sx={{
                position: 'fixed',
                right: '0',
                bottom: '0',
                left: '0',
            }}
        >
            <BottomNavigation
                showLabels
                // value={value}
                // onChange={(event, newValue) => {
                //     setValue(newValue);
                // }}
            >
                <BottomNavigationAction label="Home" icon={<Restore />} />
                <BottomNavigationAction label="Statistic" icon={<Favorite />} />
            </BottomNavigation>
        </Paper>
    );
};

export default NavBar;
