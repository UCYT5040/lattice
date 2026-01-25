import type { Relation, RelationDefinition } from '$lib/knowledge/relation';

export interface KnowledgeItem {
	id: string;
	ownerType: 'user' | 'organization' | 'system';
	ownerId: string | null; // NULL for system-owned items
	published: boolean; // Once published, an item can be edited wiki-style by others
	type: KnowledgeType;
	attributes: Record<string, KnowledgeAttributeValue[]>;
	title: string;
	description: string;
	// TODO: Sometimes primitive attributes may need conversion to reference attributes. Add support for that.
}

export interface KnowledgeItemEdit {
	id: string;
	editorType: 'user' | 'organization';
	editorId: string;
	published: boolean;
	datePublished: Date; // Used for versioning
	// Edits
	typeId?: string;
	title?: string;
	description?: string;
	attributeEdits: Record<
		string,
		{
			additions?: KnowledgeAttributeValue[];
			removals?: KnowledgeAttributeValue[];
		}
	>;
}

export interface KnowledgeType {
	id: string;
	name: string;
	ownerType: 'user' | 'organization' | 'system';
	ownerId: string | null; // NULL for system-owned types
	published: boolean;
	relatedAttributes: KnowledgeAttribute[];
}

// No two books have the same ISBN-13, so it can be a primitive attribute, whereas birthplace is better as a reference attribute (many people can be born in the same place)

interface BaseKnowledgeAttribute {
	id: string;
	name: string; // For example, 'title', 'publication date', etc.
}

export interface PrimitiveKnowledgeAttribute extends BaseKnowledgeAttribute {
	kind: 'primitive';
	placeholder?: string; // Should generally be an example value for the attribute (e.g., 'The Catcher in the Rye' for a 'title' attribute)
	type: 'string' | 'number' | 'boolean' | 'date';
}

export interface ReferenceKnowledgeAttribute extends BaseKnowledgeAttribute {
	kind: 'reference';
	relationDefinition: RelationDefinition;
}

export type KnowledgeAttribute = PrimitiveKnowledgeAttribute | ReferenceKnowledgeAttribute;

export interface PrimitiveAttributeValue {
	kind: 'primitive';
	value: string | number | boolean | Date | null;
}

export interface ReferenceAttributeValue {
	kind: 'reference';
	targetItem: KnowledgeItem;
	relation: Relation;
	reverse?: boolean; // If true, the relation is considered in reverse (i.e., thing2 -> thing1)
}

export type KnowledgeAttributeValue = PrimitiveAttributeValue | ReferenceAttributeValue;
