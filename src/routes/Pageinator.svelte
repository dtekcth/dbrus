<script lang="ts">
	export let page_count: number;
	export let current: number;

	function pageUrl(page: number) {
		return page === 1 ? '/' : `/page/${page}`;
	}
</script>

<div class="box cluster">
	<a href={pageUrl(current - 1)} class:hidden={current - 1 < 1}>←</a>
	{#each { length: page_count } as _, page}
		<a href={pageUrl(page + 1)} class:current={page + 1 == current}>{page + 1}</a>
	{/each}
	<a href={pageUrl(current + 1)} class:hidden={current + 1 > page_count}>→</a>
</div>

<style>
	.current {
		color: var(--data-orange);
	}

	.hidden {
		visibility: hidden;
	}
</style>
