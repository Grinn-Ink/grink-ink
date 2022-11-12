import { ParentProps } from 'solid-js';
import { joinCss } from '~/utilities/css';

type HeadingSize = '1' | '2' | '3' | '4' | '5' | '6';

type Properties = ParentProps<{
    className?: string;
    size: HeadingSize;
}>;

function getSize(size: HeadingSize) {
    switch (size) {
        case '1': return 'text-6xl';
        case '2': return 'text-5xl';
        case '3': return 'text-4xl';
        case '4': return 'text-3xl';
        case '5': return 'text-2xl';
        case '6': return 'text-xl';
    }
}

export const Heading = ({ children, className, size }: Properties) => {
    const css = joinCss(
        'font-semibold font-lokki-reddy',
        className,
        getSize(size)
    );

    switch (size) {
        case '1': return <h1 class={css}>{children}</h1>;
        case '2': return <h2 class={css}>{children}</h2>;
        case '3': return <h3 class={css}>{children}</h3>;
        case '4': return <h4 class={css}>{children}</h4>;
        case '5': return <h5 class={css}>{children}</h5>;
        case '6': return <h6 class={css}>{children}</h6>;
    }
};
