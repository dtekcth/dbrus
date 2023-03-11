import { fetchPodcasts } from '$lib/fetchers';

export async function load({ fetch }) {
	return await fetchPodcasts(fetch, 1);
}
