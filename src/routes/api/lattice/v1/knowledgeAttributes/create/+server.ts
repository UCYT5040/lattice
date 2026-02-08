import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { createKnowledgeAttribute } from '$lib/server/knowledge/relation';

export const POST: RequestHandler = async ({ request }) => {
    const newAttribute = await request.json();

    const result = await createKnowledgeAttribute(newAttribute);

    return json(result);
};
