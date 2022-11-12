import { JSX } from 'solid-js';

interface Properties extends Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label: string;
}

export const CheckBox = ({ class: classes, id, label, name, ...rest }: Properties) => {
    return (
        <div class={classes}>
            <input
                type="checkbox"
                id={id || name}
                name={name}
                class="h-4 w-4 rounded border-gray-300 text-slate-700 focus:ring-slate-500"
                {...rest}
            />

            <label for={id || name} class="ml-2 text-sm font-medium text-slate-900">
                {label}
            </label>
        </div>
    );
};
