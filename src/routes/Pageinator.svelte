<script lang="ts">
	import { page } from '$app/stores';

	export let page_count: number;

	$: current = Number($page.url.searchParams.get('page')) ?? 1;
</script>

<div class="box cluster">
	<a href="./?page={current - 1}" class:hidden={current - 1 < 1}>←</a>
	{#each { length: page_count } as _, page}
		<a href="./?page={page + 1}" class:current={page + 1 == current}>{page + 1}</a>
	{/each}
	<a href="./?page={current + 1}" class:hidden={current + 1 > page_count}>→</a>
</div>

<style>
	.current {
		color: var(--data-orange);
	}

	.hidden {
		visibility: hidden;
	}
</style>
