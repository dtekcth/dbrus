<script lang="ts">
	import Time from './Time.svelte';

	export let id: number;
	export let title: string;
	export let audioUrl: string;
	export let description: string = '';
	export let date: Date;
</script>

<div class="box flow">
	<div class="cluster space">
		<h2><a href="/pod/{id}">{title}</a></h2>
		<div class="time-box">
			<Time datetime={date} />
		</div>
	</div>
	<figure>
		<audio controls src={audioUrl} preload="metadata" />
	</figure>
	{#if description}
		<p>
			{description}
		</p>
	{/if}
</div>

<style>
	h2 {
		text-transform: uppercase;
		font-size: var(--s1);
	}

	@media (min-width: 480px) {
		h2 {
			font-size: var(--s2);
		}
	}

	a {
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	audio {
		width: 100%;
	}

	.time-box {
		background-color: black;
		color: white;
		padding: var(--s-2);
	}

	p {
		white-space: pre-line;
	}
</style>
