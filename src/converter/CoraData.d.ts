export interface DataElement {
	name: string;
}

export interface DataGroup extends DataElement {
	children?: DataElement[];
}

export interface DataAtomic extends DataElement {
	value: string;
}
