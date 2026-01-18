export interface RelationDefinition {
	id: string;
	thing1Subject: string; // Example: 'author'
	thing2Subject: string; // Example: 'book'
	thing1Verb: string; // Example: 'wrote'
	thing2Verb: string; // Example: 'was written by'
	title: string; // Human-readable title of the relation (e.g., 'Author to his Book')
	titleSwapped: string; // Human-readable title of the swapped relation (e.g., 'Book to its Author')
}

export interface Relation {
	id: string;
	thing1Id: string; // ID of the first entity
	thing2Id: string; // ID of the second entity
	definition: RelationDefinition;
}
