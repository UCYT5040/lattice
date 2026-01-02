import type { RichMedia } from "./richMedia.ts";

export interface InputSlide {
	type: 'input';
	prompt: RichMedia;
	media?: string[];
	inputType: 'short' | 'long';
	submissionFeedback?: string; // Shown immediately after submission
	gradingFeedback?: string; // Shown after fraud checks pass. Often input is not actually "graded," but rather reviewed for anti-fraud purposes.
	reviewerNotes?: string; // Notes for the reviewer when grading (never shown to the learner)
}
