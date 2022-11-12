import { UserProvider } from '@auth0/nextjs-auth0';
import type { AppProps } from 'next/app';
import { MainLayout } from '../components';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <UserProvider>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </UserProvider>
    );
};
