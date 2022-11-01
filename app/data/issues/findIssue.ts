import { getDb } from '../client';

export async function findIssue(id: number) {
    const db = getDb();

    return await db.issue.findFirst({
        select: {
            authors: {
                select: {
                    id: true,
                    name: true,
                    profileUrl: true
                }
            },
            description: true,
            id: true,
            imageUrl: true,
            order: true,
            publishedAt: true,
            series: {
                select: {
                    coverUrl: true,
                    id: true,
                    title: true
                }
            },
            tags: true,
            title: true
        },
        where: {
            id,
            status: true
        }
    });
}
