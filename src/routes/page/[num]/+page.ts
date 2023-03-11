import { fetchPodcasts } from '$lib/fetchers';

export async function load({ fetch, params }) {
	const page = Number(params.num);
	return await fetchPodcasts(fetch, page);
}
