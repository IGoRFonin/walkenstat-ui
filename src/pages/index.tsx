import * as React from 'react';
import Head from 'next/head';
import CAThleteCard from '@/components/CAThleteCard/CAThleteCard';
import { Stack } from '@mui/material';

export default function Home() {
    return (
        <>
            <Head>
                <title>Walkenstat</title>
            </Head>

            <Stack spacing={2}>
                <CAThleteCard />
                <CAThleteCard />
                <CAThleteCard />
                <CAThleteCard />
            </Stack>
        </>
    );
}
