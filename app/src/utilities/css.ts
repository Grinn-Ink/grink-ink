export const joinCss = (...css: (string | undefined)[]) => css.filter(Boolean).join(' ');
