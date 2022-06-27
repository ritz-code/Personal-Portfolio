const getMetadataIndices = (acc, elem, i) => {
    if (/^---/.test(elem)) {
        acc.push(i);
    }
    return acc;
}

export default getMetadataIndices;