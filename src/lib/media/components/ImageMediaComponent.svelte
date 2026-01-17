<script lang="ts">
	import type { ProcessedImageMedia } from '../../server/media/processMedia.ts';

    let { media }: { media: ProcessedImageMedia } = $props();
</script>

<img src={media.url} alt={media.altText} />
