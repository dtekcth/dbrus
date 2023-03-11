import { searchPodcasts } from '$lib/fetchers';

export async function load({ fetch, url }) {
	const search = url.searchParams.get('q') ?? '';
	return await searchPodcasts(fetch, search);
}
