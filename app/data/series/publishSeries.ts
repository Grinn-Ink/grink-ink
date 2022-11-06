import { getDb } from '../getDb';

export async function publishSeries(id: number) {
    const db = getDb();

    const currentDate = new Date();

    await db.series.update({
        data: {
            publishedAt: currentDate,
            status: true,
            updatedAt: currentDate
        },
        where: {
            id
        }
    });
}
