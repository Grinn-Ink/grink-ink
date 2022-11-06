export async function writeCache(key: string, value: any) {
    try {
        await fetch(`${process.env.CACHE_URL}/cache/${encodeURIComponent(key)}`, {
            body: JSON.stringify(value),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        });
    } catch (error) {
        console.error('Failed to retrieve cache');
        console.error(error);
    }
}
