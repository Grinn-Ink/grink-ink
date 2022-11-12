import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AdminLayout, Table } from '~/components';
import { getAllSeries, Series } from '~/data';

interface Properties {
    series: Series[];
}

export const getServerSideProps = withPageAuthRequired({
    getServerSideProps: async () => {
        const series: Series[] = await getAllSeries();

        return {
            props: {
                series: JSON.parse(JSON.stringify(series))
            }
        };
    }
});

const Series = ({ series }: Properties) => {
    return (
        <AdminLayout>
            <Table
                basePath="/admin/series"
                columns={['id', 'title', 'slug', 'coverUrl', 'status']}
                data={series}
                description="Series which span multiple related issues, like a comic or cartoon series."
                headings={['#', 'Title', 'Slug', 'Cover', 'Published']}
                id="id"
                title="Series"
            />
        </AdminLayout>
    );
};

export default Series;
