<script lang="ts">
	import { createKnowledgeAttribute } from "$lib/client/knowledge/relation";
	import type { BaseKnowledgeAttribute, KnowledgeAttribute, PrimitiveKnowledgeAttribute } from "../knowledge";

    let { attributeCreated }: { attributeCreated: (attribute: KnowledgeAttribute) => void } = $props();

    let attributeName = $state('');
    let attributeKind = $state('primitive');

    // Primitive-specific states
    let primitiveType = $state('string');
    let primitivePlaceholder = $state('');

    let loading = $state(false);

    async function createAttribute(e: Event) {
        e.preventDefault();
        loading = true;

        let attribute = { name: attributeName, kind: attributeKind } as BaseKnowledgeAttribute;
        if (attributeKind === 'primitive') {
            attribute = {
                ...attribute,
                type: primitiveType,
                placeholder: primitivePlaceholder || undefined
            } as PrimitiveKnowledgeAttribute;
        } else if (attributeKind === 'reference') {
            throw new Error('Reference attributes not implemented yet');
        }

        let result = await createKnowledgeAttribute(attribute as KnowledgeAttribute);

        loading = false;

        attributeCreated(result);
    }
</script>

{#if loading}
	<p>Creating attribute...</p>
{:else}

<form onsubmit={createAttribute}>
	<label>
		Attribute name:
		<input type="text" bind:value={attributeName} />
	</label>
	<label>
		Attribute kind:
		<select bind:value={attributeKind}>
			<option value="primitive">Primitive</option>
			<option value="reference">Reference</option>
		</select>
	</label>
	{#if attributeKind === 'primitive'}
		<label>
			Attribute type:
			<select bind:value={primitiveType}>
				<option value="string">String</option>
				<option value="number">Number</option>
				<option value="boolean">Boolean</option>
				<option value="date">Date</option>
			</select>
		</label>
		<label>
			Placeholder (optional):
			<input type="text" bind:value={primitivePlaceholder} />
		</label>
	{:else if attributeKind === 'reference'}
		<!-- TODO: Implement a way to search & select RelationDefinitions -->
		<p>Not implemented yet</p>
	{/if}
	<button type="submit">Create Attribute</button>
</form>
{/if}