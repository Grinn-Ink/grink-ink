import { getDb } from '../client';

export async function findLatestSeries() {
    const db = getDb();

    return await db.series.findFirst({
        select: {
            authors: {
                select: {
                    id: true,
                    name: true,
                    profileUrl: true,
                }
            },
            coverUrl: true,
            description: true,
            id: true,
            issues: {
                select: {
                    _count: true
                }
            },
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
