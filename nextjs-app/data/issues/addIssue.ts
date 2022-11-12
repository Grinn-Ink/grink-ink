import { Issue } from '@prisma/client';
import { getDb } from '../getDb';

export async function addIssue(seriesId: number, {
    description,
    imageUrl,
    order,
    slug,
    status,
    tags,
    title
}: Issue) {
    const db = getDb();

    return await db.issue.create({
        data: {
            description,
            imageUrl,
            order,
            publishedAt: status ? new Date() : null,
            seriesId,
            slug,
            status,
            tags,
            title
        }
    });
}
