import { Directus } from '@directus/sdk';
import { env } from '$env/dynamic/public';
import type { Collections } from './types';

export const directus = new Directus<Collections>(env.PUBLIC_DIRECTUS_URL);
export function fileIdToUrl(id: string) {
	return `${env.PUBLIC_DIRECTUS_URL}/assets/${id}`;
}
