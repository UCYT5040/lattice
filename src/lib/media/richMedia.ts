import type { Component } from 'svelte';
import TextMediaComponent from './components/TextMediaComponent.svelte';
import ImageMediaComponent from './components/ImageMediaComponent.svelte';

export type RichMedia = RichMediaElement[];

export interface BaseMedia {
	type: string;
}

export interface TextMedia {
	type: 'text';
	content: string; // Supports markdown
}

export interface ImageMedia {
	type: 'image';
	id: string; // Image identifier
	altText?: string; // Alternative text for accessibility
}

export interface VideoMedia {
	type: 'video';
	id: string; // Video identifier
	caption?: string; // Optional caption for the video
}

export type RichMediaElement = TextMedia | ImageMedia | VideoMedia;

// TODO: See if there is a better way to type this
export const mediaComponentMap: Record<string, Component<any>> = {
	text: TextMediaComponent,
	image: ImageMediaComponent
	// TODO: Implement video media component
};
