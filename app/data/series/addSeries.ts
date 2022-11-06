import { Series } from '@prisma/client';
import { getDb } from '../getDb';

export async function addSeries({
    description,
    coverUrl,
    slug,
    status,
    tags,
    title
}: Series) {
    const db = getDb();

    return await db.series.create({
        data: {
            coverUrl,
            description,
            publishedAt: status ? new Date() : null,
            slug,
            status,
            tags,
            title
        }
    });
}
