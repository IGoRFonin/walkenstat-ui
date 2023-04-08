import React from 'react';
import { Box, Divider, Icon, Paper, Stack, Typography } from '@mui/material';
import styles from './CAThleteCard.module.css';
import StrengthIcon from '@/icons/strength.svg';
import StaminaIcon from '@/icons/stamina.svg';
import SpeedIcon from '@/icons/speed.svg';

const CAThleteCard: React.FC = () => {
    return (
        <Paper className={styles.paper} elevation={2}>
            <div className={styles.head}>
                <Typography variant="h5">Acthrowil</Typography>
                <Typography variant="body2">Ур.10</Typography>
            </div>
            <Divider sx={{ marginBottom: '12px' }} />
            <Stack spacing={1}>
                <Stack direction="row" spacing={2}>
                    <div className={styles.strength}>
                        <StrengthIcon />
                    </div>
                    <div>
                        <Typography variant="body2">Сила</Typography>
                        <Typography variant="subtitle2">64</Typography>
                    </div>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <div className={styles.stamina}>
                        <StaminaIcon />
                    </div>
                    <div>
                        <Typography variant="body2">Стамина</Typography>
                        <Typography variant="subtitle2">64</Typography>
                    </div>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <div className={styles.speed}>
                        <SpeedIcon />
                    </div>
                    <div>
                        <Typography variant="body2">Скорость</Typography>
                        <Typography variant="subtitle2">64</Typography>
                    </div>
                </Stack>
            </Stack>
        </Paper>
    );
};

export default CAThleteCard;
