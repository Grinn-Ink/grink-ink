import { getDb } from '../client';

export async function deleteSeries(id: number) {
    const db = getDb();

    return await db.series.delete({
        where: {
            id
        }
    });
}
