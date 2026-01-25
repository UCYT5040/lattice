<script lang="ts">
	import type { KnowledgeItem } from '../knowledge';

	let { item }: { item: KnowledgeItem } = $props();
</script>

<div class="knowledge-item">
	<h3 class="knowledge-item-title">{item.title}</h3>
	<p class="knowledge-item-description">{item.description}</p>
</div>
