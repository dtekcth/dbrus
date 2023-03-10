<script lang="ts">
	import DBrusLogo from './DBrusLogo.svelte';
	import Podcast from './Podcast.svelte';
	import type { PageData } from './$types';
	import Pageinator from './Pageinator.svelte';

	export let data: PageData;
</script>

<header class="box">
	<div class="center" style="color: white;">
		<DBrusLogo />
	</div>
</header>
<main class="flow">
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
		<Pageinator page_count={data.page_count} />
	</div>
</main>
<footer class="box">
	<p>Made with ❤️ by <a href="https://github.com/Malmz">Cral</a></p>
</footer>

<style>
	header {
		background-color: var(--data-orange);
	}

	main {
		margin-block: var(--s2);
	}

	footer {
		background-color: #212121;
		color: white;
	}
</style>
