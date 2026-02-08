<script lang="ts">
	import { searchKnowledgeAttributes } from '$lib/client/knowledge/relation';
	import type { KnowledgeAttribute } from '../knowledge';
	import CreateKnowledgeAttribute from './CreateKnowledgeAttribute.svelte';

	let {
		attributes,
		addAttribute,
		removeAttribute
	}: {
		attributes: KnowledgeAttribute[];
		addAttribute: (attribute: KnowledgeAttribute) => void;
		removeAttribute: (attribute: KnowledgeAttribute) => void;
	} = $props();

	let addingAttribute = $state(false);
	let addAttributePostion = $state({ x: 0, y: 0 });
	let addAttributeSearch = $state('');
	let addAttributeResults = $state<KnowledgeAttribute[]>([]);
	let addAttributeSearching = $state(false);

	function openAddAttributeForm(event: MouseEvent) {
		addAttributePostion = { x: event.clientX, y: event.clientY };
		addingAttribute = true;
	}

	async function searchAttributes() {
		const initalQuery = addAttributeSearch.trim();

		if (initalQuery === '') {
			addAttributeResults = [];
			return;
		}

		addAttributeSearching = true;

		addAttributeResults = await searchKnowledgeAttributes(initalQuery);

		if (addAttributeSearch.trim() !== initalQuery) {
			// Search query changed while waiting for results, perform a new search
			searchAttributes();
		} else {
			addAttributeSearching = false;
		}
	}

	let creatingNewAttribute = $state(false);
	let creatingNewAttributePosition = $state({ x: 0, y: 0 });

	function openCreateAttributeForm() {
		creatingNewAttributePosition = addAttributePostion;
		creatingNewAttribute = true;
		addingAttribute = false;
	}
</script>

<div class="flex items-center gap-2 rounded border bg-gray-50 p-2">
	{#each attributes as attribute}
		<div class="flex items-center gap-1 rounded bg-gray-200 px-2 py-1">
			<span>{attribute.name}</span>
			<button type="button" class="font-bold" onclick={() => removeAttribute(attribute)}
				>&times;</button
			>
		</div>
	{/each}
	<button
		class="flex items-center gap-1 rounded bg-gray-200 px-2 py-1 font-bold"
		onclick={openAddAttributeForm}>+</button
	>
</div>

{#if addingAttribute}
	<div
		class="absolute rounded border bg-white p-4 shadow"
		style="left: {addAttributePostion.x}px; top: {addAttributePostion.y}px;"
	>
		<input
			type="text"
			placeholder="Search attributes"
			bind:value={addAttributeSearch}
			class="mb-2 w-full rounded border px-2 py-1"
			oninput={() => {
				if (!addAttributeSearching) {
					searchAttributes();
				}
			}}
		/>
		{#if addAttributeSearching}
			<div>Searching...</div>
		{:else if addAttributeResults.length > 0}
			<div class="max-h-40 overflow-y-auto">
				{#each addAttributeResults as result}
					<button
						class="rounded px-2 py-1 hover:bg-gray-200"
						onclick={() => {
							addAttribute(result);
							addingAttribute = false;
						}}
					>
						{result.name}
					</button>
				{/each}
			</div>
		{:else if addAttributeSearch.trim() !== ''}
			<div>No results found.</div>
		{/if}
		<button class="mt-2 rounded bg-blue-500 px-2 py-1 text-white" onclick={openCreateAttributeForm}
			>Create new attribute</button
		>
	</div>
{/if}

{#if creatingNewAttribute}
	<div
		style="position: absolute; left: {creatingNewAttributePosition.x}px; top: {creatingNewAttributePosition.y}px;"
	>
		<CreateKnowledgeAttribute
			attributeCreated={(newAttribute: KnowledgeAttribute) => {
				addAttribute(newAttribute);
				creatingNewAttribute = false;
			}}
		/>
	</div>
{/if}
