import '../styles/globals.css';
import { ThemeProvider } from '@mui/material';
import { darkTheme } from '@/utils/theme';

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={darkTheme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
