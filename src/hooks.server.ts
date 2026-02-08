import { setConfig } from '$lib/server/config';
import { mockDatabaseProvider } from '$lib/server/test/databaseProvider';
import type { ServerInit } from '@sveltejs/kit';

export const init: ServerInit = async () => {
	setConfig({
		databaseProvider: mockDatabaseProvider
	});
};
