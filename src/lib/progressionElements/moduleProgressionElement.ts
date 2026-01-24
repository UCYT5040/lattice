import type { Module } from '$lib/module';

export interface ModuleProgressionElement {
	type: 'module';
	module: Module;
}
