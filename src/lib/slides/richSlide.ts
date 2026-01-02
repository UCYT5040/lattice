import type { RichMedia } from '../media/richMedia.ts';

export interface RichSlide {
	type: 'rich';
	content: RichMedia;
	media?: string[];
}
