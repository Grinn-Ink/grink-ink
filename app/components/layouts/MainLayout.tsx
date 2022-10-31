import { PropsWithChildren } from 'react';
import { Logo } from '../branding';

type Properties = PropsWithChildren<{}>;

export const MainLayout = ({ children }: Properties) => {
    return (
        <div className="bg-slate-700 flex-grow">

            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <Logo />

                <main className="bg-slate-500 ">
                    {children}
                </main>
            </div>
        </div>
    );
};
