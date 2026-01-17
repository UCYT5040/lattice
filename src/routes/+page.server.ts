import type { RichMedia } from '$lib/media/richMedia.ts';
import { processRichMedia } from '$lib/server/media/processMedia.ts';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
	const testRichMedia: RichMedia = [
		{ type: 'text', content: 'This is some **bold** text content with _markdown_ support.' }
	];

	return {
		testRichMedia: processRichMedia(testRichMedia)
	};
};
