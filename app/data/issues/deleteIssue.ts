import { getDb } from '../getDb';

export async function deleteIssue(id: number) {
    const db = getDb();

    return await db.issue.delete({
        where: {
            id
        }
    });
}
