import '../styles/globals.css';
import { ThemeProvider } from '@mui/material';
import { lightTheme } from '@/utils/theme';

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={lightTheme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
