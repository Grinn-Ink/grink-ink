import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { NextPage } from 'next';

interface Properties {

}

const AdminHome: NextPage<Properties> = ({ }: Properties) => {
    return (
        <>
            <h1>Admin</h1>
        </>
    );
};

export const getServerSideProps = withPageAuthRequired();

export default AdminHome
