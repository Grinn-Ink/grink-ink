import { getDb } from '../getDb';

export async function listSeries() {
    const db = getDb();

    return await db.series.findMany({
        select: {
            coverUrl: true,
            publishedAt: true,
            slug: true,
            title: true
        },
        where: {
            status: true
        },
        orderBy: {
            title: 'asc'
        }
    });
}
