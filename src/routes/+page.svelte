<script>
	import RichMedia from '$lib/media/components/RichMedia.svelte';

	let { data } = $props();
</script>

<div class="m-2">
	<h1 class="text-3xl font-bold">Lattice</h1>

	<h2 class="text-2xl font-semibold">Tests</h2>

	<h3 class="text-xl font-medium">Rich media</h3>

	<RichMedia media={data.testRichMedia} />
</div>
