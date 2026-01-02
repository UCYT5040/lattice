import type { Slide } from './slide.ts';

export interface Module {
	id: string;
	title: string;
	slides: Slide[];
}
