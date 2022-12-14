import { getDb } from '../getDb';

export async function findIssue(id: number) {
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
            id,
            status: true
        }
    });
}
