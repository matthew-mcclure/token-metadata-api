class Utilities {
  formatTokenMetadata(tokenMetadata) {
    if (tokenMetadata.hidden) {
      return {
        attributes: [ { trait_type: 'Hidden', value: 'Traits Hidden' } ],
        description: "Hidden",
        id: tokenMetadata.id,
        image: "Placeholder",
        name: "Hidden",
      }
    } else {
      return {
        attributes: tokenMetadata.attributes,
        description: tokenMetadata.description,
        id: tokenMetadata.id,
        image: tokenMetadata.image,
        name: tokenMetadata.name,
      }
    }
  }
}
module.exports = Utilities;
