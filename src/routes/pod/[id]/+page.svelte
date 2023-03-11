<script lang="ts">
	import Podcast from '../../Podcast.svelte';

	export let data;
</script>

<section class="center">
	<Podcast
		id={data.pod.id}
		title={data.pod.title}
		audioUrl={data.pod.audio_file}
		description={data.pod.description}
		date={data.pod.date_created}
	/>
</section>
