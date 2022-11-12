import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { Heading } from '../components';
import { findLatestIssue, findLatestSeries, Issue, listSeries, Series } from '../data';

interface Properties {
    latestIssue?: Issue | null;
    latestSeries?: Issue | null;
    series?: Series[];
}

export const getServerSideProps: GetServerSideProps<Properties> = async () => {
    const latestIssue: Issue | null = await findLatestIssue();
    const latestSeries: Series | null = await findLatestSeries();
    const series = await listSeries();

    return {
        props: {
            latestIssue,
            latestSeries,
            series
        }
    };
}

const Home: NextPage<Properties> = ({ latestIssue, latestSeries, series }: Properties) => {
    return (
        <>
            <div className="grid grid-cols-2">
                {latestIssue && (
                    <div>
                        <Heading size="2">Latest Issue</Heading>
                    </div>
                )}
                {latestSeries && (
                    <div>
                        <Heading size="2">Latest Series</Heading>
                    </div>
                )}
            </div>

            <Heading size="2" className={latestIssue || latestSeries ? 'mt-8' : ''}>Series</Heading>

            <div className="grid grid-cols-5 mt-1">
                {series?.map(({ coverUrl, publishedAt, title }) => (
                    <div>
                        <Image src={coverUrl || ''} alt={title || ''} />

                        <Heading size="6">{title}</Heading>

                        <p>{publishedAt?.toDateString()}</p>
                    </div>
                ))}
            </div>

            {(!series || series.length < 1) && (
                <p className="text-slate-900 italic">There is no presence but the void...</p>
            )}
        </>
    )
};

export default Home;
