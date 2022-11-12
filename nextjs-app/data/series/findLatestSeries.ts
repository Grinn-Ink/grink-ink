import { getDb } from '../getDb';

export async function findLatestSeries() {
    const db = getDb();

    return await db.series.findFirst({
        select: {
            authors: {
                select: {
                    id: true,
                    name: true,
                    profilePic: true,
                }
            },
            coverUrl: true,
            description: true,
            id: true,
            publishedAt: true,
            slug: true,
            tags: true,
            title: true
        },
        where: {
            status: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
}
