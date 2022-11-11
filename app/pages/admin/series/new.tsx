import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { NextPage } from 'next';
import { AdminLayout, CheckBox, Heading, Input, TextArea } from '../../../components';

export const getServerSideProps = withPageAuthRequired();

const NewSeries: NextPage = () => {
    return (
        <AdminLayout>
            <Heading size="3">New Series</Heading>

            <form action="/api/admin/series/new" method="POST" className="w-1/2 space-y-6">
                <Input name="title" label="Title" required />
                <TextArea name="description" label="Description" required rows={6} />
                <Input name="coverUrl" label="Cover URL" />
                <CheckBox name="status" label="Publish" />
                <Input name="slug" label="Slug" required />
                <Input name="tags" label="Tags" required />

                <button
                    type="submit"
                    className="flex items-center justify-center rounded-md border border-transparent bg-lime-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 sm:w-auto"
                >
                    Save
                </button>
            </form>
        </AdminLayout>
    );
};

export default NewSeries;
