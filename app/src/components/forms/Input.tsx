import { JSX } from 'solid-js';

interface Properties extends JSX.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Input = ({ class: classes, id, label, name, ...rest }: Properties) => {
    return (
        <div class={classes}>
            {label && (
                <label for={id || name} class="block text-sm font-medium text-slate-900">
                    {label}
                </label>
            )}

            <div class="mt-1">
                <input
                    class="bg-slate-400 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                    id={id || name}
                    name={name}
                    {...rest}
                />
            </div>
        </div>
    );
};
