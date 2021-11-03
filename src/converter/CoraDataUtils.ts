import { DataElement, DataGroup } from './CoraData';

export function getFirstChildWithNameInData(
	dataGroup: DataGroup,
	nameInData: string
): DataElement | undefined {
	console.log(dataGroup);
	console.log(nameInData);

	return undefined;
}

export default { getFirstChildWithNameInData };
