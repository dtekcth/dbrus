<script>
	import Podcast from '../Podcast.svelte';
	export let data;
</script>

{#each data.pods as pod}
	<section class="center">
		<Podcast
			title={pod.title}
			audioUrl={pod.audio_file}
			description={pod.description}
			date={pod.date_created}
		/>
	</section>
{/each}
