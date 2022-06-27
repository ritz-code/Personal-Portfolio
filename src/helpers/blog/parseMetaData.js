const parseMetadata = ({ lines, metaDataIndices }) => {
    let obj = [];
    if (metaDataIndices.length > 0) {
        let metadata = lines.slice(metaDataIndices[0] + 1, metaDataIndices[1]);
        metadata.forEach(line => {
            obj[line.split(": ")[0]] = line.split(": ")[1];
        })
        return obj;
    }
}

export default parseMetadata;