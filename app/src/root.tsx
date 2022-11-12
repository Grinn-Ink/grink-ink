// @refresh reload
import { Suspense } from 'solid-js';
import {
    A,
    Body,
    ErrorBoundary,
    FileRoutes,
    Head,
    Html,
    Meta,
    Routes,
    Scripts,
    Title,
} from 'solid-start';
import './styles/main.css';

export default function Root() {
    return (
        <Html lang="en">
            <Head>
                <Meta charset="utf-8" />
                <Meta name="viewport" content="width=device-width, initial-scale=1" />

                <Title>Grinn, Ink</Title>
            </Head>
            <Body>
                <Suspense>
                    <ErrorBoundary>
                        <A class="mr-2" href="/">
                            Index
                        </A>
                        <A href="/about">About</A>

                        <Routes>
                            <FileRoutes />
                        </Routes>
                    </ErrorBoundary>
                </Suspense>

                <Scripts />
            </Body>
        </Html>
    );
}
