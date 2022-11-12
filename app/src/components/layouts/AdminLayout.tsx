import { ParentProps } from 'solid-js';
import { A, useLocation } from 'solid-start';
import { Heading } from '../typography';

type Properties = ParentProps<{}>;

const linkCss = 'px-4 py-2 border-2 border-slate-400 text-white mr-4 rounded-md';
const activeLinkCss = 'px-4 py-2 bg-slate-700 text-white mr-4 rounded-md';

function getLinkCss(currentPath: string, matchingPath: string) {
    return currentPath === matchingPath ? activeLinkCss : linkCss;
}

export const AdminLayout = ({ children }: Properties) => {
    const location = useLocation();

    return (
        <>
            <Heading size="2">Admin</Heading>

            <nav class="mt-4 mb-8">
                <A href="/admin" class={getLinkCss( location.pathname, '/admin')}>Dashboard</A>
                <A href="/admin/series" class={getLinkCss(location.pathname, '/admin/series')}>Series</A>
                <A href="/admin/authors" class={getLinkCss(location.pathname, '/admin/authors')}>Authors</A>
            </nav>

            {children}
        </>
    );
};
