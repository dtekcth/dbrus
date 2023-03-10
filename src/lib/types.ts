export type BaseItem = {
	id: number;
	date_created: string;
	date_updated: string;
	user_created: string;
	user_updated: string;
};

export type Podcast = {
	title: string;
	description: string;
	audio_file: string;
} & BaseItem;

export type Collections = {
	dbrus_podcasts: Podcast;
};
