<script lang="ts">
	export let datetime: Date;

	const formater = new Intl.DateTimeFormat('sv-SE', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	$: date = formater.format(datetime);
</script>

<time datetime={date}>{date}</time>
