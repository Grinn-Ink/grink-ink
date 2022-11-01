import { getDb } from '../client';

export async function getAllSeries() {
    const db = getDb();

    return await db.series.findMany({
        select: {
            coverUrl: true,
            publishedAt: true,
            slug: true,
            title: true
        },
        orderBy: {
            title: 'asc'
        }
    });
}
