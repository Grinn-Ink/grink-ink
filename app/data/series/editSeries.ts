import { Series } from '@prisma/client';
import { getDb } from '../client';

export async function editSeries(id: number, {
    description,
    coverUrl,
    slug,
    tags,
    title
}: Series) {
    const db = getDb();

    return await db.series.update({
        data: {
            coverUrl,
            description,
            slug,
            tags,
            title
        },
        where: {
            id
        }
    });
}
