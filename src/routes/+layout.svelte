<script lang="ts">
	import '../styles.css';
	import DBrusLogo from './DBrusLogo.svelte';
</script>

<svelte:head>
	<title>DBrus</title>
</svelte:head>

<header class="box">
	<a href="/" class="center" style="color: white;">
		<DBrusLogo />
	</a>
</header>
<div class="center">
	<form action="/search" class="box">
		<div class="input-group">
			<input type="text" name="q" />
			<button type="submit">Search</button>
		</div>
	</form>
</div>
<main class="flow">
	<slot />
</main>
<footer class="box">
	<p>Made with ❤️ by <a href="https://github.com/Malmz">Cral</a></p>
</footer>

<style>
	header {
		background-color: var(--data-orange);
	}

	header > a {
		display: block;
	}

	main {
		margin-block: var(--s2);
	}

	footer {
		background-color: #212121;
		color: white;
	}

	input {
		height: var(--s2);
		padding-inline: var(--s-2);
		width: 100%;
		border-radius: 0%;
		border: 2px solid black;
	}

	button {
		height: var(--s2);
		padding-inline: var(--s-2);
		border-radius: 0%;
		border: 2px solid black;
		background-color: transparent;
	}

	input:focus {
		outline: 2px solid var(--data-orange);
		outline-offset: -2px;
	}

	.input-group {
		display: flex;
		gap: var(--s-2);
	}
</style>
