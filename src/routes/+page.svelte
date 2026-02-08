<script lang="ts">
	import KnowledgeAttributeInput from '$lib/knowledge/components/KnowledgeAttributeInput.svelte';
	import type { KnowledgeAttribute } from '$lib/knowledge/knowledge.js';
	import RichMedia from '$lib/media/components/RichMedia.svelte';

	let { data } = $props();

	let knowledgeAttributeType = $state('primitive');

	let testAttributes: KnowledgeAttribute[] = $state([
		{ name: 'Attribute 1', type: 'string', kind: 'primitive', id: 'attr-1' },
		{ name: 'Attribute 2', type: 'number', kind: 'primitive', id: 'attr-2' },
		{ name: 'Attribute 3', type: 'boolean', kind: 'primitive', id: 'attr-3' }
	]);
</script>

<div class="m-2">
	<h1 class="text-3xl font-bold">Lattice</h1>

	<h2 class="text-2xl font-semibold">Tests</h2>

	<h3 class="text-xl font-medium">Rich media</h3>

	<RichMedia media={data.testRichMedia} />

	<h3 class="text-xl font-medium">Knowledge</h3>

	<h4 class="text-lg font-semibold">Attribute input</h4>

	<KnowledgeAttributeInput
		attributes={testAttributes}
		addAttribute={(attribute) => {
			testAttributes.push(attribute);
		}}
		removeAttribute={(attribute) => {
			testAttributes = testAttributes.filter((attr) => attr.id !== attribute.id);
		}}
	/>
</div>
