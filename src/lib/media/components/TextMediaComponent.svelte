<script lang="ts">
    import { marked } from 'marked';
    import DOMPurify from 'dompurify';
	import type { TextMedia } from '../richMedia.ts';

    let { media }: { media: TextMedia } = $props();

    let htmlContent = $state('');
    
    $effect(() => {htmlContent = DOMPurify.sanitize(marked.parse(media.content) as string)});
</script>

<div>
    {@html htmlContent}
</div>