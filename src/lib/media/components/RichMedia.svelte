<script lang="ts">
    import type { ProcessedRichMedia } from '$lib/server/media/processMedia';
	import { mediaComponentMap } from '$lib/media/richMedia';

    let { media }: { media: ProcessedRichMedia } = $props();
</script>

{#each media as element}
    {@const ElementComponent = mediaComponentMap[element.type]}
    <ElementComponent media={element} />
{/each}