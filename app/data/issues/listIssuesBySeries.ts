import { getDb } from '../client';

export async function listIssuesBySeries(seriesId: number) {
    const db = getDb();

    return await db.issue.findMany({
        select: {
            id: true,
            imageUrl: true,
            order: true,
            publishedAt: true,
            slug: true,
            title: true
        },
        where: {
            seriesId,
            status: true
        },
        orderBy: {
            order: 'asc'
        }
    });
}
