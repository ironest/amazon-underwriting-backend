const getSubDocument = (pageDoc, id) => {

  for(let page of pageDoc){
    // console.log(`PAGE: Testing ${id} against ${page._id}`)
    if (page._id == id) {
      // console.log("Found!")
      return page;
    }

    for(let section of page.sections){
      // console.log(`  SECTION: Testing ${id} against ${section._id}`)
      if (section._id == id){
        // console.log("Found!")
        return section;
      }

      for(let link of section.links){
        // console.log(`    LINK: Testing ${id} against ${link._id}`)
        if (link._id == id){
          // console.log("Found!")
          return link;
        }
      }
    }
  }

  return undefined;
}

getMetaDataSubDocument = (pageDoc, id) => {

  result = { parentDoc: null, subDoc: null, subDocIdx: 0 }

  for(let pageIdx in pageDoc){
    page = pageDoc[pageIdx];
    result = { parentDoc: page, subDoc: page, subDocIdx: pageIdx }
    // console.log(`PAGE: Testing ${id} against ${page._id}`)

    if (page._id == id) {
      // console.log("Found!")
      return result;
    }

    for(let sectionIdx in page.sections){
      section = page.sections[sectionIdx];
      result = { parentDoc: page, subDoc: section, subDocIdx: sectionIdx }
      // console.log(`  SECTION: Testing ${id} against ${section._id}`)
      if (section._id == id){
        // console.log("Found!")
        return result;
      }

      for(let linkIdx in section.links){
        link = section.links[linkIdx];
        result = { parentDoc: section, subDoc: link, subDocIdx: linkIdx }
        // console.log(`    LINK: Testing ${id} against ${link._id}`)
        if (link._id == id){
          // console.log("Found!")
          return result;
        }
      }
    }
  }

  return undefined;
}

module.exports = {
  getSubDocument,
  getMetaDataSubDocument
}