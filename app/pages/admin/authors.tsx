import { GetServerSideProps, NextPage } from 'next';
import { AdminLayout } from '../../components';
import { Author, getAuthors } from '../../data';

interface Properties {
    authors: Author[];
}

export const getServerSideProps: GetServerSideProps<Properties> = async () => {
    const authors: Author[] = await getAuthors();

    return {
        props: {
            authors
        }
    };
}

const Authors: NextPage<Properties> = ({ authors }: Properties) => {
    return (
        <AdminLayout>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Profile Picture</th>
                        <th>Website</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {authors?.length > 0 && authors.map(({ id, name, profilePic, slug, website }) => (
                        <tr>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{profilePic}</td>
                            <td>{slug}</td>
                            <td>{website}</td>
                            <td>
                                <button>Edit</button>
                            </td>
                        </tr>
                    ))}
                    {(!authors || authors.length < 1) && (
                        <tr>
                            <td colSpan={6}>No authors</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </AdminLayout>
    );
};

export default Authors
