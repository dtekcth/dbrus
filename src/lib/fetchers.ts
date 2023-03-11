import { apiUrl, fileIdToUrl, query, type Fetch } from './client';
import type { Podcast } from './types';

function parsePodcast(pod: Podcast) {
	return {
		...pod,
		audio_file: fileIdToUrl(pod.audio_file),
		date_created: new Date(pod.date_created),
		date_updated: new Date(pod.date_updated),
		user_created: new Date(pod.user_created),
		user_updated: new Date(pod.user_updated)
	};
}

function pageCount(total = 1, limit: number) {
	return Math.ceil(total / limit);
}

export async function fetchPodcasts(fetch: Fetch, page: number) {
	const limit = 5;
	const resp = await fetch(
		`${apiUrl}/items/dbrus_podcasts${query({
			sort: ['-date_created'],
			limit,
			page,
			meta: 'total_count'
		})}`
	);
	const { data, meta } = (await resp.json()) as { data: Podcast[]; meta: { total_count: number } };

	return {
		page_count: pageCount(meta.total_count, limit),
		pods: data.map(parsePodcast)
	};
}

export async function searchPodcasts(fetch: Fetch, search: string) {
	const limit = 5;
	const resp = await fetch(`${apiUrl}/items/dbrus_podcasts/${query({ search, limit })}`);
	const { data } = (await resp.json()) as { data: Podcast[] };

	return {
		pods: data.map(parsePodcast)
	};
}
