import { getDb } from '../client';

export async function findSeries(id: number) {
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
                    imageUrl: true,
                    order: true,
                    publishedAt: true,
                    slug: true,
                    title: true
                },
                where: {
                    status: true
                },
                orderBy: {
                    order: 'asc'
                }
            },
            publishedAt: true,
            slug: true,
            tags: true,
            title: true
        },
        where: {
            id,
            status: true
        }
    });
}
