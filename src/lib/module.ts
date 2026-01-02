import type { Slide } from './slides/slide.ts';

export interface Module {
	id: string;
	title: string;
	slides: Slide[];
}
