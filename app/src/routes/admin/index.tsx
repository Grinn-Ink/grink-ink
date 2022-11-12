import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { NextPage } from 'next';
import { AdminLayout } from '~/components';

interface Properties {

}

const AdminHome: NextPage<Properties> = ({ }: Properties) => {
    return (
        <AdminLayout>
            <p class="italic">Quiet as the grave...</p>
        </AdminLayout>
    );
};

export const getServerSideProps = withPageAuthRequired();

export default AdminHome;
