import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AdminLayout, Table } from '~/components';
import { Author, getAuthors } from '~/data';

interface Properties {
    authors: Author[];
}

export const getServerSideProps = withPageAuthRequired({
    getServerSideProps: async () => {
        const authors: Author[] = await getAuthors();

        return {
            props: {
                authors: JSON.parse(JSON.stringify(authors))
            }
        };
    }
});

const Authors = ({ authors }: Properties) => {
    return (
        <AdminLayout>
            <Table
                basePath="/admin/authors"
                columns={['id', 'name', 'slug', 'profilePic', 'website']}
                data={authors}
                description="Authors credited with their respective work in any issues or series"
                headings={['#', 'Name', 'Slug', 'Profile Picture', 'Website']}
                id="id"
                title="Authors"
            />
        </AdminLayout>
    );
};

export default Authors;
