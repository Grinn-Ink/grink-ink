import { getDb } from '../client';

export async function getAllIssuesBySeries(seriesId: number) {
    const db = getDb();

    return await db.issue.findMany({
        select: {
            id: true,
            imageUrl: true,
            order: true,
            publishedAt: true,
            status: true,
            title: true
        },
        where: {
            seriesId
        },
        orderBy: {
            order: 'asc'
        }
    });
}
