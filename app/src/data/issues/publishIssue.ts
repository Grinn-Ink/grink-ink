import { getDb } from '../getDb';

export async function publishIssue(id: number) {
    const db = getDb();

    const currentDate = new Date();

    await db.issue.update({
        data: {
            publishedAt: currentDate,
            status: true,
            updatedAt: currentDate
        },
        where: {
            id
        }
    });
}
