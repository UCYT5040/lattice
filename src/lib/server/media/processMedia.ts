import { getConfig } from '../../config.ts';
import {
	type ImageMedia,
	type RichMedia,
	type TextMedia,
	type VideoMedia
} from '../../media/richMedia.ts';

export interface ProcessedImageMedia extends ImageMedia {
	url: string; // URL to access the image
}

export function processImageMedia(media: ImageMedia): ProcessedImageMedia {
	const url = getConfig().storageProvider.getMediaUrl('generalContent', media.id);
	return {
		...media,
		url
	};
}

export function processRichMedia(media: RichMedia): ProcessedRichMedia {
	return media.map((element) => {
		switch (element.type) {
			case 'text':
				return element as TextMedia;
			case 'image':
				return processImageMedia(element as ImageMedia);
			case 'video':
				return element as VideoMedia;
			default:
				throw new Error(`Unsupported media: ${element}`);
		}
	});
}

export type ProcessedRichMedia = ProcessedRichMediaElement[];

export type ProcessedRichMediaElement = TextMedia | ProcessedImageMedia | VideoMedia;
