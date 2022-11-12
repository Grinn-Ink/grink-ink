import { useUser } from '@auth0/nextjs-auth0';
import { ParentProps } from 'solid-js';
import { A, Head } from 'solid-start';
import { Logo } from '../branding';

type Properties = ParentProps<{}>;

export const MainLayout = ({ children }: Properties) => {
    const { error, isLoading, user} = useUser();

    return (
        <div class="bg-slate-700 flex-grow">
            <Head>
                <meta name="description" content="Comes, cartoons, art, oh my!" />

                <link rel="icon" href="/favicon.ico" />

                <title>Grinn, Ink</title>
            </Head>

            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <header class="flex items-center">
                    <A href="/">
                        <Logo showMotto class="my-5 border-b border-b-4 rounded-full py-5 px-6 border-b-slate-600" />
                    </A>

                    {!isLoading && !error && user && (
                        <A
                            href="/admin"
                            class="ml-auto bg-slate-900 px-4 py-2 rounded-md text-white hover:bg-slate-800 transition duration-150"
                        >
                            Manage
                        </A>
                    )}
                </header>

                <main class="bg-slate-500 p-8 rounded">
                    {children}
                </main>
            </div>
        </div>
    );
};
