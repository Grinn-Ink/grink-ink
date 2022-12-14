import { getDb } from '../getDb';

export async function findLatestIssue() {
    const db = getDb();

    return await db.issue.findFirst({
        select: {
            authors: {
                select: {
                    id: true,
                    name: true,
                    profilePic: true
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
            status: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
}
