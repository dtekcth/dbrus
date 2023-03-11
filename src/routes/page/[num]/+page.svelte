<script lang="ts">
	import { page } from '$app/stores';
	import Pageinator from '../../Pageinator.svelte';
	import Podcast from '../../Podcast.svelte';

	export let data;
	$: current = Number($page.params.num);
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

<div class="center">
	<Pageinator {current} page_count={data.page_count} />
</div>
