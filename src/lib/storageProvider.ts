export type Store = 'generalContent'; // Extendable for other storage types in the future (like user uploads)

export interface StorageProvider {
	getMediaUrl(store: Store, id: string): string;
}
