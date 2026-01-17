import type { StorageProvider } from "./storageProvider.ts";

export interface LatticeConfig {
    storageProvider: StorageProvider;
}

let config: LatticeConfig;

// This should be set in your SvelteKit hooks
export function setConfig(newConfig: LatticeConfig) {
    config = newConfig;
}

export function getConfig(): LatticeConfig {
    if (!config) {
        throw new Error("LatticeConfig has not been set. Please call setConfig() before accessing the configuration.");
    }
    return config;
}