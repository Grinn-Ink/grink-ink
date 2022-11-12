import { joinCss } from '../../utilities/css';

type LogoSize = 'sm' | 'md' | 'lg';

interface Properties {
    className?: string;
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

export const Logo = ({ className, size = 'md', showMotto }: Properties) => {
    const outerCss = joinCss(
        'text-center inline-block',
        className
    );

    const logoCss = joinCss(
        'text-white font-lokki-reddy',
        getSize(size)
    );

    return (
        <div className={outerCss}>
            <div className={logoCss}>
                <span className="text-primary">grinn</span>
                <span className="text-secondary">ink</span>
            </div>
            {showMotto && (
                <span className="text-gray-300">Comics, cartoons, art, oh my!</span>
            )}
        </div>
    );
};
