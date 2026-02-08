import type { KnowledgeAttribute } from '$lib/knowledge/knowledge';
import { getConfig } from '$lib/server/config';

export async function searchKnowledgeAttributes(query: string) {
	return await getConfig().databaseProvider.knowledge.searchKnowledgeAttributes(query);
}

export async function createKnowledgeAttribute(
	knowledgeAttribute: KnowledgeAttribute
) {
	return await getConfig().databaseProvider.knowledge.createKnowledgeAttribute(knowledgeAttribute);
}
