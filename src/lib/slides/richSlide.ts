import type { RichMedia } from '$lib/media/richMedia';

export interface RichSlide {
	type: 'rich';
	content: RichMedia;
	media?: string[];
}
