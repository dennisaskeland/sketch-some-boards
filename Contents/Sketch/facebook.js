@import './helpers/checkForExistingArtboards.js'


function fbProfilePhoto(context) {

  sketch = context.api()
  doc = context.document

  if(checkForExistingArtboards()) {
    newArtboardX = rightmostArtboardX() + 100
    newArtboardY = topmostArtboardY()
  } else {
    newArtboardX = 0
    newArtboardY = 0
  }
 
  newArtboardWidth = 180
  newArtboardHeight = 180

  newArtboard = [MSArtboardGroup new]
  newArtboardFrame = [newArtboard frame]
  [newArtboard setName:'Facebook; Profile Photo 180x180']
  [newArtboardFrame setWidth:newArtboardWidth]
  [newArtboardFrame setHeight:newArtboardHeight]
  [newArtboardFrame setX:newArtboardX]
  [newArtboardFrame setY:newArtboardY]

  page = [doc currentPage]
  [page addLayers:[NSArray arrayWithObjects:newArtboard]]

  return newArtboard
}


function fbSharedImage(context) {

  sketch = context.api()
  doc = context.document

  if(checkForExistingArtboards()) {
    newArtboardX = rightmostArtboardX() + 100
    newArtboardY = topmostArtboardY()
  } else {
    newArtboardX = 0
    newArtboardY = 0
  }

  newArtboardWidth = 1200
  newArtboardHeight = 630

  newArtboard = [MSArtboardGroup new]
  newArtboardFrame = [newArtboard frame]
  [newArtboard setName:'Facebook; Shared Image 1200x630']
  [newArtboardFrame setWidth:newArtboardWidth]
  [newArtboardFrame setHeight:newArtboardHeight]
  [newArtboardFrame setX:newArtboardX]
  [newArtboardFrame setY:newArtboardY]

  page = [doc currentPage]
  [page addLayers:[NSArray arrayWithObjects:newArtboard]]

  return newArtboard
}


function fbSharedVideo(context) {

  sketch = context.api()
  doc = context.document

  if(checkForExistingArtboards()) {
    newArtboardX = rightmostArtboardX() + 100
    newArtboardY = topmostArtboardY()
  } else {
    newArtboardX = 0
    newArtboardY = 0
  }

  newArtboardWidth = 1200
  newArtboardHeight = 675

  newArtboard = [MSArtboardGroup new]
  newArtboardFrame = [newArtboard frame]
  [newArtboard setName:'Facebook; Shared Video 1200x675']
  [newArtboardFrame setWidth:newArtboardWidth]
  [newArtboardFrame setHeight:newArtboardHeight]
  [newArtboardFrame setX:newArtboardX]
  [newArtboardFrame setY:newArtboardY]

  page = [doc currentPage]
  [page addLayers:[NSArray arrayWithObjects:newArtboard]]

  return newArtboard
}


function fbSharedLink(context) {

  sketch = context.api()
  doc = context.document

  if(checkForExistingArtboards()) {
    newArtboardX = rightmostArtboardX() + 100
    newArtboardY = topmostArtboardY()
  } else {
    newArtboardX = 0
    newArtboardY = 0
  }

  newArtboardWidth = 1200
  newArtboardHeight = 627

  newArtboard = [MSArtboardGroup new]
  newArtboardFrame = [newArtboard frame]
  [newArtboard setName:'Facebook; Shared Link 1200x627']
  [newArtboardFrame setWidth:newArtboardWidth]
  [newArtboardFrame setHeight:newArtboardHeight]
  [newArtboardFrame setX:newArtboardX]
  [newArtboardFrame setY:newArtboardY]

  page = [doc currentPage]
  [page addLayers:[NSArray arrayWithObjects:newArtboard]]

  return newArtboard
}



function fbCoverPhoto(context) {

  sketch = context.api()
  doc = context.document

  if(checkForExistingArtboards()) {
    newArtboardX = rightmostArtboardX() + 100
    newArtboardY = topmostArtboardY()
  } else {
    newArtboardX = 0
    newArtboardY = 0
  }

  newArtboardWidth = 828
  newArtboardHeight = 315

  newArtboard = [MSArtboardGroup new]
  newArtboardFrame = [newArtboard frame]
  [newArtboard setName:'Facebook; Cover Photo 828x315']
  [newArtboardFrame setWidth:newArtboardWidth]
  [newArtboardFrame setHeight:newArtboardHeight]
  [newArtboardFrame setX:newArtboardX]
  [newArtboardFrame setY:newArtboardY]

  page = [doc currentPage]
  [page addLayers:[NSArray arrayWithObjects:newArtboard]]

  return newArtboard
}
