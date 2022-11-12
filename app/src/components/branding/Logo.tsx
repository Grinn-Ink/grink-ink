import { joinCss } from '~/utilities/css';

type LogoSize = 'sm' | 'md' | 'lg';

interface Properties {
    class?: string;
    size?: LogoSize;
    showMotto?: boolean;
}

function getSize(size: LogoSize) {
    switch (size) {
        case 'sm': return '';
        case 'md': return 'text-5xl';
        case 'lg': return '';
    }
}

export const Logo = ({ class: classes, size = 'md', showMotto }: Properties) => {
    const outerCss = joinCss(
        'text-center inline-block',
        classes
    );

    const logoCss = joinCss(
        'text-white font-lokki-reddy',
        getSize(size)
    );

    return (
        <div class={outerCss}>
            <div class={logoCss}>
                <span class="text-primary">grinn</span>
                <span class="text-secondary">ink</span>
            </div>
            {showMotto && (
                <span class="text-gray-300">Comics, cartoons, art, oh my!</span>
            )}
        </div>
    );
};
