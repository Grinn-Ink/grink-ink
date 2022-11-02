import Head from 'next/head';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { Logo } from '../branding';

type Properties = PropsWithChildren<{}>;

export const MainLayout = ({ children }: Properties) => {
    return (
        <div className="bg-slate-700 flex-grow">
            <Head>
                <meta name="description" content="Comes, cartoons, art, oh my!" />

                <link rel="icon" href="/favicon.ico" />

                <title>Grinn, Ink</title>
            </Head>

            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <header className="flex items-center">
                    <Link href="/">
                        <Logo showMotto className="my-5 border-b border-b-4 rounded-full py-5 px-6 border-b-slate-600" />
                    </Link>

                    <Link
                        href="/admin"
                        className="ml-auto bg-slate-900 px-4 py-2 rounded-md text-white hover:bg-slate-800 transition duration-150"
                    >
                        Manage
                    </Link>
                </header>

                <main className="bg-slate-500 p-8 rounded">
                    {children}
                </main>
            </div>
        </div>
    );
};
