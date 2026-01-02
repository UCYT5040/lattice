export type RichMedia = RichMediaElement[];

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
