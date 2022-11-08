import { InputHTMLAttributes } from 'react';

interface Properties extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Input = ({ className, id, label, name, ...rest }: Properties) => {
    return (
        <div>
            {label && (
                <label htmlFor={id || name} className="block text-sm font-medium text-slate-900">
                    {label}
                </label>
            )}

            <div className="mt-1">
                <input
                    className="bg-slate-400 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                    id={id}
                    name={name}
                    {...rest}
                />
            </div>
        </div>
    );
};
