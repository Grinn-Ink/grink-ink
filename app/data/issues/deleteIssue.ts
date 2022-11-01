import { getDb } from '../client';

export async function deleteIssue(id: number) {
    const db = getDb();

    return await db.issue.delete({
        where: {
            id
        }
    });
}
