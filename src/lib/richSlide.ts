import type { RichMedia } from "./richMedia.ts";

export interface RichSlide {
	type: 'rich';
	content: RichMedia;
	media?: string[];
}
