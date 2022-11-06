import { getDb } from '../getDb';

export async function unpublishSeries(id: number) {
    const db = getDb();

    await db.series.update({
        data: {
            publishedAt: null,
            status: false,
            updatedAt: new Date()
        },
        where: {
            id
        }
    });
}
