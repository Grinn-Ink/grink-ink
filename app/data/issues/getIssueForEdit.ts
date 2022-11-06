import { getDb } from '../getDb';

export async function getIssueForEdit(id: number) {
    const db = getDb();

    return await db.issue.findFirst({
        select: {
            description: true,
            id: true,
            imageUrl: true,
            order: true,
            slug: true,
            tags: true,
            title: true
        },
        where: {
            id
        }
    });
}
