import { Author, Issue } from '@prisma/client';
import { getDb } from '../client';

export async function removeIssueAuthor(issue: Issue, author: Author) {
    const db = getDb();

    await db.issue.update({
        data: {
            authors: {
                disconnect: [{ id: author.id }]
            }
        },
        where: {
            id: issue.id
        }
    });
}
