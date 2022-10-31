import { joinCss } from '../../utilities/css';

type LogoSize = 'sm' | 'md' | 'lg';

interface Properties {
    size?: LogoSize;
}

function getSize(size: LogoSize) {
    switch (size) {
        case 'sm': return '';
        case 'md': return 'text-5xl';
        case 'lg': return '';
    }
}

export const Logo = ({ size = 'md' }: Properties) => {
    const css = joinCss(
        'text-white font-lokki-reddy',
        getSize(size)
    );

    return (
        <div className={css}>
            <span className="text-primary">grinn</span>
            <span className="text-secondary">ink</span>
        </div>
    );
};
