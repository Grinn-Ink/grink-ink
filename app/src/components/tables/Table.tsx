import { A } from 'solid-start';

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
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <h1 class="text-xl font-semibold text-gray-900">{title}</h1>

                    <p class="mt-2 text-sm text-gray-700">
                        {description}
                    </p>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <A
                        href={basePath + '/new'}
                        type="button"
                        class="inline-flex items-center justify-center rounded-md border border-transparent bg-lime-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 sm:w-auto"
                    >
                        New
                    </A>
                </div>
            </div>
            <div class="mt-8 flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-300">
                                {headings && (
                                    <thead class="bg-slate-400">
                                        <tr>
                                            {headings.map(heading => (
                                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    {heading}
                                                </th>
                                            ))}

                                            {basePath && (
                                                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                    <span class="sr-only">Details</span>
                                                    <span class="sr-only">Edit</span>
                                                </th>
                                            )}
                                        </tr>
                                    </thead>
                                )}

                                <tbody class="divide-y divide-gray-200 bg-white">
                                    {data && data.map(row => (
                                        <tr>
                                            {columns.map(column => (
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {row[column] || (showDashForEmpty ? '-' : '')}
                                                </td>
                                            ))}

                                            {basePath && (
                                                <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                    <A href={basePath + `/${row[id]}/details`} class="text-slate-600 hover:text-slate-900 mr-4">
                                                        Details
                                                    </A>

                                                    <A href={basePath + `/${row[id]}/edit`} class="text-slate-600 hover:text-slate-900">
                                                        Edit
                                                    </A>
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
