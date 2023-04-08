import * as React from "react";
import Document, {Html, Head, Main, NextScript, DocumentInitialProps} from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "@/utils/createEmotionCache";
import {CssBaseline} from "@mui/material";

interface IMyDocumentProps {
    emotionStyleTags: JSX.Element[];
}

export default class MyDocument extends Document<IMyDocumentProps> {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <title>Walkenstat</title>
                    <meta name="description" content="Collect win-lose information about your cathelts" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                    {this.props.emotionStyleTags}
                    <CssBaseline />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async (ctx): Promise<DocumentInitialProps & IMyDocumentProps> => {
    const originalRenderPage = ctx.renderPage;

    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) =>
                function EnhanceApp(props) {
                    return <App emotionCache={cache} {...props} />;
                },
        });

    const initialProps = await Document.getInitialProps(ctx);

    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(" ")}`}
            key={style.key}
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ));

    return {
        ...initialProps,
        emotionStyleTags,
    };
};
