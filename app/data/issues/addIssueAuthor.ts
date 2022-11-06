import { Author, Issue } from '@prisma/client';
import { getDb } from '../getDb';

export async function addIssueAuthor(issue: Issue, author: Author) {
    const db = getDb();

    await db.issue.update({
        data: {
            authors: {
                connect: [{ id: author.id }]
            }
        },
        where: {
            id: issue.id
        }
    });
}
