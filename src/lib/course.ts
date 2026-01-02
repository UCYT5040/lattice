import type { ProgressionElement } from './progressionElement.ts';

export interface Course {
	id: string;
	title: string;
	progression: ProgressionElement[];
}
