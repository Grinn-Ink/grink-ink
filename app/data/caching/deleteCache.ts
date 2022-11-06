export async function deleteCache(key: string) {
    try {
        await fetch(`${process.env.CACHE_URL}/cache/${encodeURIComponent(key)}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.error('Failed to retrieve cache');
        console.error(error);
    }
}
