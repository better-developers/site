import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ActiveCampaign } from '../components/ActiveCampaign/ActiveCampaign';
import { FacebookPixel } from '../components/FacebookPixel/FacebookPixel';
import { Footer } from '../components/Footer/Footer';
import { GoogleAnalytcs } from '../components/GoogleAnalytics/GoogleAnalytcs';
import { HubspotPixel } from '../components/HubspotPixel/HubspotPixel';
import { NavBar } from '../components/NavBar/NavBar';
import { NavBarProvider } from '../contexts/NavBarContext';
import '../styles/index.scss';
import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Better Developers</title>
            </Head>

            <ChakraProvider theme={theme}>
                <NavBarProvider>
                    <NavBar />
                    <Component {...pageProps} />
                    <Footer />
                </NavBarProvider>
            </ChakraProvider>

            {/* Analytics */}
            <GoogleAnalytcs />
            <FacebookPixel />
            <HubspotPixel />
            <ActiveCampaign />
        </>
    );
}

export default MyApp;
