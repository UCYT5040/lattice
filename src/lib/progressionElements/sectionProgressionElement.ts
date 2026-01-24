import type { ProgressionElement, SplitProgressionElement } from '$lib/progressionElements/progressionElement';

// Represents a group of other progression elements
export interface SectionProgressionElement extends Omit<SplitProgressionElement, 'type'> {
	type: 'section';
	options: [ProgressionElement[]]; // Sections only have one set of options. Keep it as a nested array for consistency with SplitProgressionElement.
}
