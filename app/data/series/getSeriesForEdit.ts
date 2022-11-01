import { getDb } from '../client';

export async function getSeriesForEdit(id: number) {
    const db = getDb();

    return await db.series.findFirst({
        select: {
            coverUrl: true,
            description: true,
            id: true,
            slug: true,
            tags: true,
            title: true
        },
        where: {
            id
        }
    });
}
