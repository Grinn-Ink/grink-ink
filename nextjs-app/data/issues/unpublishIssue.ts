import { getDb } from '../getDb';

export async function unpublishIssue(id: number) {
    const db = getDb();

    const currentDate = new Date();

    await db.issue.update({
        data: {
            publishedAt: null,
            status: false,
            updatedAt: currentDate
        },
        where: {
            id
        }
    });
}
