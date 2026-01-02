export interface SplitProgressionElement {
	type: 'split';
	options: ProgressionElement[][];
	completionCriteria: 'all' | number;
}

export type ProgressionElement = SplitProgressionElement;
