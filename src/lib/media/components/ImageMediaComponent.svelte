<script lang="ts">
	import type { ProcessedImageMedia } from '$lib/server/media/processMedia';

    let { media }: { media: ProcessedImageMedia } = $props();
</script>

<img src={media.url} alt={media.altText} />
