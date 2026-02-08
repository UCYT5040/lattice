import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { searchKnowledgeAttributes } from '$lib/server/knowledge/relation';

export const GET: RequestHandler = async ({ url }) => {
	const query = url.searchParams.get('query') || '';

	if (!query) {
		error(400, 'query parameter is required');
	}

	const results = await searchKnowledgeAttributes(query);

	return json(results);
};
