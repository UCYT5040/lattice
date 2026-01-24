import type { Slide } from '$lib/slides/slide';

export interface Module {
	id: string;
	title: string;
	slides: Slide[];
}
