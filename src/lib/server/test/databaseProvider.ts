import type { DatabaseProvider } from '$lib/databaseProvider';
import type { KnowledgeAttribute, KnowledgeItem, KnowledgeType } from '$lib/knowledge/knowledge';
import fs from 'fs';

const mockDatabasePath = 'database.json';

interface DatabaseData {
	knowledgeItems: KnowledgeItem[];
	knowledgeTypes: KnowledgeType[];
	knowledgeAttributes: KnowledgeAttribute[];
}

let databaseData: DatabaseData = {
	knowledgeItems: [],
	knowledgeTypes: [],
	knowledgeAttributes: []
};

// Load existing data from the mock database file if it exists
try {
	const data = fs.readFileSync(mockDatabasePath, 'utf-8');
	databaseData = JSON.parse(data) as DatabaseData;
} catch {
	// File does not exist or is invalid, start with empty data
}

function saveDatabase() {
	fs.writeFileSync(mockDatabasePath, JSON.stringify(databaseData, null, 2));
}

export const mockDatabaseProvider = {
	knowledge: {
		async createKnowledgeItem(item: KnowledgeItem): Promise<KnowledgeItem> {
			databaseData.knowledgeItems.push(item);
			saveDatabase();
			return item;
		},
		async getKnowledgeItemById(id: string): Promise<KnowledgeItem | null> {
			return databaseData.knowledgeItems.find((item) => item.id === id) || null;
		},
		async createKnowledgeType(type: KnowledgeType): Promise<KnowledgeType> {
			databaseData.knowledgeTypes.push(type);
			saveDatabase();
			return type;
		},
		async getKnowledgeTypeById(id: string): Promise<KnowledgeType | null> {
			return databaseData.knowledgeTypes.find((type) => type.id === id) || null;
		},
		async createKnowledgeAttribute(attribute: KnowledgeAttribute): Promise<KnowledgeAttribute> {
			databaseData.knowledgeAttributes.push(attribute);
			saveDatabase();
			return attribute;
		},
		async getKnowledgeAttributeById(id: string): Promise<KnowledgeAttribute | null> {
			return databaseData.knowledgeAttributes.find((attr) => attr.id === id) || null;
		},
		async searchKnowledgeAttributes(query: string): Promise<KnowledgeAttribute[]> {
			console.log('Searching knowledge attributes with query:', query);
			console.log('Current knowledge attributes in database:', databaseData.knowledgeAttributes);
			return databaseData.knowledgeAttributes.filter((attr) => attr.name.toLowerCase().includes(query.toLowerCase()));
		}
	}
} as DatabaseProvider;
