import { Issue } from '@prisma/client';
import { getDb } from '../getDb';

export async function editIssue(id: number, {
    description,
    imageUrl,
    order,
    slug,
    tags,
    title
}: Issue) {
    const db = getDb();

    return await db.issue.update({
        data: {
            description,
            imageUrl,
            order,
            slug,
            tags,
            title,
            updatedAt: new Date()
        },
        where: {
            id
        }
    });
}
