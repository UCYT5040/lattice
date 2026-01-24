import type { ProgressionElement } from '$lib/progressionElements/progressionElement';

export interface Course {
	id: string;
	title: string;
	progression: ProgressionElement[];
}
