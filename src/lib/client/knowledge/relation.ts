import type { KnowledgeAttribute } from '$lib/knowledge/knowledge';

export async function searchKnowledgeAttributes(query: string) {
	const request = await fetch(
		'/api/lattice/v1/knowledgeAttributes/search?' + new URLSearchParams({ query })
	);

	if (!request.ok) {
		throw new Error('Failed to search knowledge attributes: ' + request.statusText);
	}

	return await request.json();
}

export async function createKnowledgeAttribute(knowledgeAttribute: KnowledgeAttribute): Promise<KnowledgeAttribute> {
	const request = await fetch('/api/lattice/v1/knowledgeAttributes/create', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(knowledgeAttribute)
	});

	if (!request.ok) {
		throw new Error('Failed to create knowledge attribute: ' + request.statusText);
	}

	return await request.json();
}
