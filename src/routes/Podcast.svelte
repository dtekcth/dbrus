<script lang="ts">
	import Time from './Time.svelte';

	export let title: string;
	export let audioUrl: string;
	export let description: string = '';
	export let date: Date;
</script>

<div class="box flow">
	<div class="cluster space">
		<h2>{title}</h2>
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
