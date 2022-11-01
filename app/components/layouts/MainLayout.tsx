import { PropsWithChildren } from 'react';
import { Logo } from '../branding';

type Properties = PropsWithChildren<{}>;

export const MainLayout = ({ children }: Properties) => {
    return (
        <div className="bg-slate-700 flex-grow">

            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <Logo showMotto className="my-5 border-b border-b-4 rounded-full py-5 px-6 border-b-slate-600" />

                <main className="bg-slate-500 p-8 rounded">
                    {children}
                </main>
            </div>
        </div>
    );
};
