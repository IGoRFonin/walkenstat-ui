import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Container, CssBaseline } from '@mui/material';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="Collect win-lose information about your cathelts" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                    <CssBaseline />
                </Head>
                <body>
                    <Container>
                        <Main />
                    </Container>

                    <NextScript />
                </body>
            </Html>
        );
    }
}
