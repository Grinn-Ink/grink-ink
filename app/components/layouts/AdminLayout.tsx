import Link from 'next/link';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';
import { Heading } from '../typography';

type Properties = PropsWithChildren<{}>;

const linkCss = 'px-4 py-2 border-2 border-slate-400 text-white mr-4 rounded-md';
const activeLinkCss = 'px-4 py-2 bg-slate-700 text-white mr-4 rounded-md';

function getLinkCss(currentPath: string, matchingPath: string) {
    return currentPath === matchingPath ? activeLinkCss : linkCss;
}

export const AdminLayout = ({ children }: Properties) => {
    const router = useRouter();

    return (
        <>
            <Heading size="2">Admin</Heading>

            <nav className="mt-4 mb-8">
                <Link href="/admin" className={getLinkCss( router.asPath, '/admin')}>Dashboard</Link>
                <Link href="/admin/series" className={getLinkCss(router.asPath, '/admin/series')}>Series</Link>
                <Link href="/admin/authors" className={getLinkCss(router.asPath, '/admin/authors')}>Authors</Link>
            </nav>

            {children}
        </>
    );
};
