<script lang="ts">
    import type { ProcessedRichMedia } from '../../server/media/processMedia.ts';
	import { mediaComponentMap } from '../richMedia.ts';

    let { media }: { media: ProcessedRichMedia } = $props();
</script>

{#each media as element}
    {@const ElementComponent = mediaComponentMap[element.type]}
    <ElementComponent media={element} />
{/each}