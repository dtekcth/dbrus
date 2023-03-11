import { fetchPodcastById } from '$lib/fetchers';

export async function load({ fetch, params }) {
	const data = await fetchPodcastById(fetch, Number(params.id));
	return {
		pod: data
	};
}
