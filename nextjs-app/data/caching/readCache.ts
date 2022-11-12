export async function readCache<TModel>(key: string) {
    try {
        const response = await fetch(`${process.env.CACHE_URL}/cache/${encodeURIComponent(key)}`);

        if (response.headers.get('content-length') === '0') return;

        const json = await response.json();

        return json as TModel;
    } catch (error) {
        console.error('Failed to retrieve cache');
        console.error(error);
    }
}
