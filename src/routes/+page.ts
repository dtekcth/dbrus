import { directus, fileIdToUrl } from '$lib/client';
import type { PageLoad } from './$types';

const limit = 5;

export const load: PageLoad = async ({ url }) => {
	const page = Number(url.searchParams.get('page')) ?? 1;
	const { data, meta } = await directus.items('dbrus_podcasts').readByQuery({
		sort: ['-date_created'],
		limit,
		page,
		meta: 'total_count'
	});

	return {
		page_count: Math.ceil((meta?.total_count ?? 1) / limit),
		pods: (data ?? []).map((pod) => ({
			...pod,
			audio_file: fileIdToUrl(pod.audio_file),
			date_created: new Date(pod.date_created),
			date_updated: new Date(pod.date_updated),
			user_created: new Date(pod.user_created),
			user_updated: new Date(pod.user_updated)
		}))
	};
};
