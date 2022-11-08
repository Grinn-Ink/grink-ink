import Link from 'next/link';

interface Properties {
    columns: string[];
    data: any[];
    description: string;
    basePath?: string;
    headings: string[];
    id: string;
    showDashForEmpty?: boolean;
    title: string;
}

export const Table = ({ basePath, columns, data, description, headings, id, showDashForEmpty = true, title }: Properties) => {
    return (
        <div>
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">{title}</h1>

                    <p className="mt-2 text-sm text-gray-700">
                        {description}
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link
                        href={basePath + '/new'}
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-lime-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 sm:w-auto"
                    >
                        New
                    </Link>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-slate-400">
                                    <tr>
                                        {headings.map(heading => (
                                            <th key={heading} scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                {heading}
                                            </th>
                                        ))}

                                        {basePath && (
                                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {data.map(row => (
                                        <tr key={row[id]}>
                                            {columns.map(column => (
                                                <td key={column} className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {row[column] || (showDashForEmpty ? '-' : '')}
                                                </td>
                                            ))}

                                            {basePath && (
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                    <Link href={basePath + `/${row[id]}/edit`} className="text-slate-600 hover:text-slate-900">
                                                        Edit
                                                    </Link>
                                                </td>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
