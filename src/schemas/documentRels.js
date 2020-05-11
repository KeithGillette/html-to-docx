const generateDocumentRelsXML = (documentRelationshipsXML = '') => {
  return `
        <?xml version="1.0" encoding="UTF-8" standalone="yes"?>

        <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
            ${documentRelationshipsXML}
        </Relationships>
    `;
};

export default generateDocumentRelsXML;
