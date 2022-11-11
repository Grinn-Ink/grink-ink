import { InputHTMLAttributes } from 'react';

interface Properties extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label: string;
}

export const CheckBox = ({ className, id, label, name, ...rest }: Properties) => {
    return (
        <div>
            <input
                type="checkbox"
                id={id || name}
                name={name}
                className="h-4 w-4 rounded border-gray-300 text-slate-700 focus:ring-slate-500"
                {...rest}
            />

            <label htmlFor={id || name} className="ml-2 text-sm font-medium text-slate-900">
                {label}
            </label>
        </div>
    );
};
