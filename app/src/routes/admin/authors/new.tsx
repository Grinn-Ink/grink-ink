import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AdminLayout, Heading, Input, TextArea } from '~/components';

export const getServerSideProps = withPageAuthRequired();

const NewAuthor = () => {
    return (
        <AdminLayout>
            <Heading size="3">New Author</Heading>

            <form action="/api/admin/authors/new" method="post" class="w-1/2 space-y-6">
                <Input name="name" label="Name" required />
                <TextArea name="about" label="About" required rows={6} />
                <Input name="profilePic" label="Profile Picture" />
                <Input name="website" label="Website" />
                <Input name="slug" label="Slug" required />

                <button
                    type="submit"
                    class="flex items-center justify-center rounded-md border border-transparent bg-lime-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 sm:w-auto"
                >
                    Save
                </button>
            </form>
        </AdminLayout>
    );
};

export default NewAuthor;
