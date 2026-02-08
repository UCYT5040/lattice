import type { KnowledgeAttribute, KnowledgeItem, KnowledgeType } from "$lib/knowledge/knowledge";

export interface KnowledgeRepository {
    createKnowledgeItem(item: KnowledgeItem): Promise<KnowledgeItem>;
    getKnowledgeItemById(id: string): Promise<KnowledgeItem | null>;
    
    createKnowledgeType(type: KnowledgeType): Promise<KnowledgeType>;
    getKnowledgeTypeById(id: string): Promise<KnowledgeType | null>;
    
    createKnowledgeAttribute(attribute: KnowledgeAttribute): Promise<KnowledgeAttribute>;
    getKnowledgeAttributeById(id: string): Promise<KnowledgeAttribute | null>;
    searchKnowledgeAttributes(query: string): Promise<KnowledgeAttribute[]>;
}

export interface DatabaseProvider {
    knowledge: KnowledgeRepository;
}
