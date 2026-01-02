import type { ProgressionElement } from './progressionElements/progressionElement.ts';

export interface Course {
	id: string;
	title: string;
	progression: ProgressionElement[];
}
