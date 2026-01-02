import type Module from 'module';

export interface ModuleProgressionElement {
	type: 'module';
	module: Module;
}
