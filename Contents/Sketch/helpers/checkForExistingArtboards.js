var checkForExistingArtboards = function(context) {
  if ([[[doc currentPage] artboards] count] == 0) {
    return false
  } else {
    return true
  }
}

function rightmostArtboardX() {
  artboards = [[doc currentPage] artboards]
  firstArtboard = artboards[0]
  firstArtboardRect = [firstArtboard absoluteRect]
  maxXPos = [firstArtboardRect maxX]
  loop = [artboards objectEnumerator]
  while (artboard = [loop nextObject]) {
    artboardRect = [artboard absoluteRect]
    artboardMaxX = [artboardRect maxX]
    if (artboardMaxX >= maxXPos) {
      maxXPos = artboardMaxX
    }
  }
  return maxXPos
}

function topmostArtboardY() {
  artboards = [[doc currentPage] artboards]
  firstArtboard = artboards[0]
  firstArtboardRect = [firstArtboard absoluteRect]
  minYPos = [firstArtboardRect minY]
  loop = [artboards objectEnumerator]
  while (artboard = [loop nextObject]) {
    artboardRect = [artboard absoluteRect]
    artboardMinY = [artboardRect minY]
    if (artboardMinY <= minYPos) {
      minYPos = artboardMinY
    }
  }
  return minYPos
}
