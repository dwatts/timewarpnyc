// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import '@fortawesome/fontawesome-free/js/all.js';
import Map from "@arcgis/core/Map.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SceneView from "@arcgis/core/views/SceneView.js";
import SceneLayer from "@arcgis/core/layers/SceneLayer";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import Search from "@arcgis/core/widgets/Search.js";
import Polygon from "@arcgis/core/geometry/Polygon.js";
import anime from 'animejs/lib/anime.es.js';

/*********All Map Layers***********/

const manhattanMask = new FeatureLayer({
  url:
    "https://services9.arcgis.com/uX5kr9HIx4qXytm9/arcgis/rest/services/Lower_MN_Mask/FeatureServer",
  elevationInfo: {
    mode: "on-the-ground",
  },
  popupEnabled: false,
  outFields: [],
  maxScale: 0,
  minScale: 0,  
  renderer: {
      type: "simple",
      symbol: {
        type: "polygon-3d",
        symbolLayers: [{
          type: "fill",
          material: {
            color: [255,255,255, 1]
          },
          outline: {
            color: "#000",
            width: 5, 
            style: "solid"
          }
        }]
      }
    }
});

const parks40 = {
  type: "simple",
  symbol: {
    type: "polygon-3d",
    symbolLayers: [{
      type: "fill",
      material: {
        color: [236, 56, 188, 0.2]
      },
      outline: {
        color: [255, 255, 255, 0],
        width: 0, 
        style: "solid"
      }
    }]
  }
};

const parks80 = {
  type: "simple",
  symbol: {
    type: "polygon-3d",
    symbolLayers: [{
      type: "fill",
      material: {
        color: [32, 212, 207, 0.2]
      },
      outline: {
        color: [255, 255, 255, 0],
        width: 0, 
        style: "solid"
      }
    }]
  }
};

const parks = new FeatureLayer({
  url:
    "https://services9.arcgis.com/uX5kr9HIx4qXytm9/arcgis/rest/services/Parks/FeatureServer",
  elevationInfo: {
    mode: "on-the-ground",
  },
  popupEnabled: false,
  outFields: [],
  maxScale: 0,
  minScale: 0,  
  renderer: parks40
});

const buildingRenderer40 = {
  type: "simple",
  symbol: {
    type: "mesh-3d",
    symbolLayers: [
      {
        type: "fill",
        material: {
          color: [240, 240, 240, 0.7]
        },
        edges: {
          type: "solid",
          color: [0, 0, 0, 0.6],
          size: 0.5
        }
      }
    ]
  }
};

const buildingRenderer80 = {
  type: "simple",
  symbol: {
    type: "mesh-3d",
    symbolLayers: [
      {
        type: "fill",
        material: {
          color: [245, 196, 216, 0.7]
        },
        edges: {
          type: "solid",
          color: [0, 0, 0, 0.6],
          size:  0.5
        }
      }
    ]
  }
};

const buildings = new SceneLayer({
  url:"https://tiles.arcgis.com/tiles/uX5kr9HIx4qXytm9/arcgis/rest/services/All_MN_Buildings/SceneServer",
  outFields: ["one_block", "one_lot", "address"], 
  renderer: buildingRenderer40,
  popupEnabled: false
})

//Add Graphics Layers

const letterGraphicsLayer = new GraphicsLayer ({
  elevationInfo: {
    mode: "absolute-height"
  }
});

const infoGraphicsLayer = new GraphicsLayer ({
  id: "infoLayer",
  elevationInfo: {
    mode: "absolute-height"
  }
});

const arrowLayer = new GraphicsLayer({
  elevationInfo: {
    mode: "relative-to-scene",
    offset: 20
  }
});

/*********Setup Map and Scene***********/

const map = new Map({
  basemap: {
    portalItem: {
      id: "75a08e8cd8b64dcfa6945bb7f624ccc5"
    }
  },
  ground: "world-elevation",
  layers: [parks, buildings, manhattanMask, letterGraphicsLayer, infoGraphicsLayer, arrowLayer]
});

map.ground.opacity = 1;

const highlight40 = {
  color: [236, 56, 188],
  fillOpacity: 0.4,
  haloOpacity: 0.8,
  haloColor: [236, 56, 188],
  shadowOpacity: 0.2
}

const highlight80 = {
  color: [16, 231, 226],
  fillOpacity: 0.4,
  haloOpacity: 0.8,
  haloColor: [16, 231, 226],
  shadowOpacity: 0.2
}

const view = new SceneView({
  map: map,
  zoom: 13,
  viewingMode: "global",
  qualityProfile: "high",
  highlightOptions: highlight40,
  container: "viewDiv",
  camera: {
    position: {
      latitude: 40.68490602479135,
      longitude: -73.9311857129305,
      z: 5099.451669022441
    },
    tilt: 51.63913994833819,
    heading: 299.01357418438283
  },
  environment: {
    background:{
        type: "color", 
        color: [255, 255, 255, 1]
    },
    lighting: {
        directShadowsEnabled: true
      },  
    atmosphereEnabled: false,
    starsEnabled: false
  },
  constraints: {
    altitude: {
      min: 400,
      max: 10000,
    },
    tilt: {
        max: 59
    }
  }
});

view.ui.components = ["attribution"];

/***********1940s LUNA Code************/

let highlight;
let currentGraphic;
let setImageYear = 1;
let countNumber = 0;

view.on("immediate-click", (event) => {
  view.hitTest(event).then((hitTestResult) => {

    if (hitTestResult.results.length > 0 && hitTestResult.results[0].graphic.layer.url == "https://tiles.arcgis.com/tiles/uX5kr9HIx4qXytm9/arcgis/rest/services/All_MN_Buildings/SceneServer" && setImageYear == 1) {

      //countNumber = 1;

      document.getElementById("cardImageId").src = "#";

      let one_block = hitTestResult.results[0].graphic.attributes.one_block;
      let one_lot = hitTestResult.results[0].graphic.attributes.one_lot;
      let address = hitTestResult.results[0].graphic.attributes.address;
      
      //Add Graphics//

      let result = hitTestResult.results[0];

      if (countNumber == 0) {
        highlight; 
        highlight = view.highlight(result.graphic); 
        currentGraphic = result.graphic;
        countNumber ++;
      } else if (countNumber > 0){;
        highlight && highlight.remove();;
        highlight = view.highlight(result.graphic); 
        currentGraphic = result.graphic;
      } else {
        highlight.remove();
      };

      //1940s Photos Ajax Call

      const rootStart = "https://nycma.lunaimaging.com/luna/servlet/as/search?lc=NYCMA%7E5%7E5&q=block%3D"
      let block = one_block
      let lot = one_lot
      const and = "+AND+lot%3D"
      const rootEnd = "&os=0&bs=10&excludeFacets=1&excludeMetadata=0"

      //Luna URL and Ajax Code
      
      let getUrl = function () {
        let tmp = [];
        $.ajax({
            'async': false,
            'type': "GET",
            //'global': false,
            'dataType': 'json',
            'url': rootStart+block+and+lot+rootEnd,
            success: function(data) {  
              $.each(data.results, function(index, value) {
                tmp.push(value.urlSize4);
              });
            },
        });
        return tmp;
      }();

      let length= getUrl.length

      if (length == 0) {
        getUrl.push('./models/Image40.png')
        document.getElementById("buttonHolder").style.display="none";
      } else if (length == 1) {
        document.getElementById("buttonHolder").style.display="none";
      } else if (length > 1) {
        document.getElementById("buttonHolder").style.display="flex";
      } else {}

      //Set initial Image Source 

      let image = getUrl[0];
    
      //Slide Code//

      let slides = getUrl;
      let currentSlideIndex = 0;

      function show_image(direction) {
        
        let currentImage = document.getElementById("cardImageId");
        currentImage.src = slides[currentSlideIndex];

        if (direction == 'left') {
          currentSlideIndex--;
        }
        else {
          currentSlideIndex++;
          currentSlideIndex %= slides.length;
        }
        if (currentSlideIndex < 0) {
          currentSlideIndex = slides.length - 1;
        }
        currentImage.src = slides[currentSlideIndex];
        
        let counter = currentSlideIndex +1;
        $('#counterText').text(counter);
      };

      length = getUrl.length;

      $(document).on("click" , '#left' , function(){
        show_image('left');
      });

      $(document).on("click" , '#right' , function(){
        show_image('right');
      });

      document.getElementById("cardImageId").src=`${image}`
      $('#totalText').html(`${length}`);
      $('#addressText').html(`${address}`);
      $('#blockText').html(`${one_block}`);
      $('#lotText').html(`${one_lot}`);
      $('#counterText').text("1");

      $('#cardImageId').on('load', function(){
        document.getElementById("cardId").style.display="block"
      });

      //Collapse Navbar

      $('.navbar-collapse').collapse('hide');

    /***********Begin 1980s LUNA Code*************/

    } else if (hitTestResult.results.length > 0 && hitTestResult.results[0].graphic.layer.url == "https://tiles.arcgis.com/tiles/uX5kr9HIx4qXytm9/arcgis/rest/services/All_MN_Buildings/SceneServer" && setImageYear == 0) {

      document.getElementById("cardImageId").src = "#";

      let one_block = hitTestResult.results[0].graphic.attributes.one_block;
      let one_lot = hitTestResult.results[0].graphic.attributes.one_lot;
      let address = hitTestResult.results[0].graphic.attributes.address;

      //Add Graphics//

      let result = hitTestResult.results[0];

      if (countNumber == 0) {
        highlight; 
        highlight = view.highlight(result.graphic); 
        currentGraphic = result.graphic;
        countNumber ++;
      } else if (countNumber > 0){;
        highlight && highlight.remove();;
        highlight = view.highlight(result.graphic); 
        currentGraphic = result.graphic;
      } else {
        highlight.remove();
      };

      //1980s Photos Ajax Call

      const rootStart1980 = "https://nycma.lunaimaging.com/luna/servlet/as/search?lc=RECORDSPHOTOUNITMAN%7E2%7E2&q=block%3D"
      let block1980 = one_block
      let lot1980 = one_lot
      const and1980 = "+AND+lot%3D"
      const rootEnd1980 = "&os=0&bs=10&excludeFacets=1&excludeMetadata=0"

      //Luna URL and Ajax Code

      let getUrl1980 = function () {
        let tmp1980 = [];
        $.ajax({
            'async': false,
            'type': "GET",
            //'global': false,
            'dataType': 'json',
            'url': rootStart1980+block1980+and1980+lot1980+rootEnd1980,
            success: function(data) {  
              $.each(data.results, function(index, value) {
                tmp1980.push(value.urlSize3);
              });
            },
        });
        return tmp1980;
      }();

      //Get length of image array//

      let length1980 = getUrl1980.length

      if (length1980 == 0) {
        getUrl1980.push('./models/Image80.png')
        document.getElementById("buttonHolder").style.display="none";
      } else if (length1980 == 1) {
        document.getElementById("buttonHolder").style.display="none";
      } else if (length1980 > 1) {
        document.getElementById("buttonHolder").style.display="flex";
      } else {}

      //Set initial Image Source 

      let image = getUrl1980[0];

      //Slide Code//

      let slides = getUrl1980;
      let currentSlideIndex = 0;

      function show_image(direction) {
        
        let currentImage = document.getElementById("cardImageId");
        currentImage.src = slides[currentSlideIndex];

        if (direction == 'left') {
          currentSlideIndex--;
        }
        else {
          currentSlideIndex++;
          currentSlideIndex %= slides.length;
        }
        if (currentSlideIndex < 0) {
          currentSlideIndex = slides.length - 1;
        }
        currentImage.src = slides[currentSlideIndex];
        
        let counter = currentSlideIndex +1;
        $('#counterText').text(counter);
      };

      length = getUrl1980.length;

      $(document).on("click" , '#left' , function(){
        show_image('left');
      });

      $(document).on("click" , '#right' , function(){
        show_image('right');
      });

      document.getElementById("cardImageId").src=`${image}`
      $('#totalText').html(`${length}`);
      $('#addressText').html(`${address}`);
      $('#blockText').html(`${one_block}`);
      $('#lotText').html(`${one_lot}`);
      $('#counterText').text("1");
      
      $('#cardImageId').on('load', function(){
        document.getElementById("cardId").style.display="block"
      });

      //Collapse Navbar

      $('.navbar-collapse').collapse('hide');

    } else if (hitTestResult.results.length > 0 && hitTestResult.results[0].graphic.layer.id == "infoLayer") {

      let result = hitTestResult.results[0];

      if (countNumber == 0) {
        highlight; 
        highlight = view.highlight(result.graphic); 
        currentGraphic = result.graphic;
        countNumber ++;
      } else if (countNumber > 0){;
        highlight && highlight.remove();;
        highlight = view.highlight(result.graphic); 
        currentGraphic = result.graphic;
      } else {
        highlight.remove();
      };

      document.getElementById("cardId").style.display="none";
      //document.getElementById("infoHolder").style.display="flex";
      $('#aboutModal').modal('show'); 


  } else {

      if (countNumber > 0) {
        highlight.remove();
        countNumber = 0;
      };

      //console.log(countNumber);

      document.getElementById("cardImageId").src = "#";
      document.getElementById("cardId").style.display="none";
    }
  })
  .catch((error) => {
    console.error(error);
  });
});

const myModalEl = document.getElementById('aboutModal')
myModalEl.addEventListener('hidden.bs.modal', function (event) {
  if(highlight) {
    highlight.remove();
  } else {
    ""
  }
})

/*********Add Boat Graphics and Animation*************/

const point11 = { latitude:40.735505, longitude:-74.02105}
const point12 = { latitude:40.699483, longitude:-74.02496}

const boatGraphicsLayer = new GraphicsLayer({
  elevationInfo: {
    mode: "relative-to-ground"
  },
  opacity: 0.7
});
map.add(boatGraphicsLayer);

const boatGraphic = new Graphic({
  symbol: {
    type: "point-3d",
    symbolLayers: [
      {
        type: "object",
        resource: { href: './models/MerchantShip.glb'},
        height: 50,
        heading: 185,
        tilt:0,
        anchor: "bottom"
      }
    ]
  },
  geometry: new Point({
    ...point11,
    z: -6,
  })
})

boatGraphicsLayer.add(boatGraphic);

const boatGeometry = boatGraphic.geometry;
const boatSymbolLayer = boatGraphic.symbol.symbolLayers.getItemAt(0);

const animateBoat = anime
.timeline({
  autoplay: true,
  targets: [boatGeometry, boatSymbolLayer],
  loop: true,
  duration: 140000,
  update: function() {
    boatGraphic.geometry = boatGeometry.clone();
    boatGraphic.symbol = boatGraphic.symbol.clone();
    boatGraphic.symbol.symbolLayers = [boatSymbolLayer];
  }
})
.add({ ...point12,  easing: "linear"})

animateBoat.play();

//Boat Graphic Two / Animation

const point31 = { latitude:40.701814, longitude:-74.0299152805}
const point32 = { latitude:40.728786, longitude:-74.0257328424}

const boatGraphicsLayerTwo = new GraphicsLayer({
  elevationInfo: {
    mode: "relative-to-ground"
  },
  opacity: 0.7
});
map.add(boatGraphicsLayerTwo);

const boatGraphicTwo = new Graphic({
  symbol: {
    type: "point-3d",
    symbolLayers: [
      {
        type: "object",
        resource: { href: './models/MerchantShipThree.glb' },
        height: 45,
        heading: 5,
        tilt:0,
        anchor: "bottom"
      }
    ]
  },
  geometry: new Point({
    ...point31,
    z: -9,
  })
})

boatGraphicsLayerTwo.add(boatGraphicTwo);

const boatGeometryTwo = boatGraphicTwo.geometry;
const boatSymbolLayerTwo = boatGraphicTwo.symbol.symbolLayers.getItemAt(0);

const animateBoatTwo = anime
.timeline({
  autoplay: true,
  targets: [boatGeometryTwo, boatSymbolLayerTwo],
  loop: true,
  duration: 120000,
  update: function() {
    boatGraphicTwo.geometry = boatGeometryTwo.clone();
    boatGraphicTwo.symbol = boatGraphicTwo.symbol.clone();
    boatGraphicTwo.symbol.symbolLayers = [boatSymbolLayerTwo];
  }
})
.add({ ...point32, easing: "linear"})

animateBoatTwo.play();

//Add Static Boat

const staticBoatGraphicsLayerOne = new GraphicsLayer({
  elevationInfo: {
    mode: "relative-to-ground"
  },
  opacity: 0.7
});
map.add(staticBoatGraphicsLayerOne);

const staticPoint1 = { latitude:40.727918, longitude:-74.012939}

const BoatGraphicThree = new Graphic({
  symbol: {
    type: "point-3d",
    symbolLayers: [
      {
        type: "object",
        resource: { href: './models/MerchantShipTwo.glb' },
        height: 55,
        heading: 97,
        tilt:0,
        anchor: "bottom"
      }
    ]
  },
  geometry: new Point({
    ...staticPoint1,
    z: -10,
  })
})

staticBoatGraphicsLayerOne.add(BoatGraphicThree);

//Plane Graphic One / Animation

const pointBP1 = { latitude:40.74258, longitude:-74.007214}
const pointBP2 = { latitude:40.689726, longitude:-74.0036488478655}

const planeGraphicsLayerOne = new GraphicsLayer({
  elevationInfo: {
    mode: "relative-to-ground"
  },
  opacity: 0.7
});
map.add(planeGraphicsLayerOne);

const planeGraphicOne = new Graphic({
  symbol: {
    type: "point-3d",
    symbolLayers: [
      {
        type: "object",
        resource: { href: './models/BiPlane.glb' },
        height: 12,
        heading: 180,
        tilt:0,
        anchor: "bottom"
      }
    ]
  },
  geometry: new Point({
    ...pointBP1,
    z: 300,
  })
})

planeGraphicsLayerOne.add(planeGraphicOne);

const planeGeometryOne = planeGraphicOne.geometry;
const planeSymbolLayerOne = planeGraphicOne.symbol.symbolLayers.getItemAt(0);

const animatePlaneOne = anime
.timeline({
  autoplay: true,
  targets: [planeGeometryOne, planeSymbolLayerOne],
  loop: true,
  duration: 50000,
  update: function() {
    planeGraphicOne.geometry = planeGeometryOne.clone();
    planeGraphicOne.symbol = planeGraphicOne.symbol.clone();
    planeGraphicOne.symbol.symbolLayers = [planeSymbolLayerOne];
  }
})
.add({ ...pointBP2, easing: "linear"})

animatePlaneOne.play();

//Plane Graphic Two / Animation

const pointBP3 = { latitude:40.692322, longitude:-73.986250691804}
const pointBP4 = { latitude:40.732749,  longitude:-74.024184}

const planeGraphicsLayerTwo = new GraphicsLayer({
  elevationInfo: {
    mode: "relative-to-ground"
  },
  opacity: 0.7
});
map.add(planeGraphicsLayerTwo);

const planeGraphicTwo = new Graphic({
  symbol: {
    type: "point-3d",
    symbolLayers: [
      {
        type: "object",
        resource: { href: './models/MonoPlane.glb' },
        height: 11,
        heading: 320,
        tilt:0,
        anchor: "bottom"
      }
    ]
  },
  geometry: new Point({
    ...pointBP3,
    z: 500,
  })
})

planeGraphicsLayerTwo.add(planeGraphicTwo);

const planeGeometryTwo = planeGraphicTwo.geometry;
const planeSymbolLayerTwo = planeGraphicTwo.symbol.symbolLayers.getItemAt(0);

const animatePlaneTwo = anime
.timeline({
  autoplay: true,
  targets: [planeGeometryTwo, planeSymbolLayerTwo],
  loop: true,
  duration: 40000,
  update: function() {
    planeGraphicTwo.geometry = planeGeometryTwo.clone();
    planeGraphicTwo.symbol = planeGraphicTwo.symbol.clone();
    planeGraphicTwo.symbol.symbolLayers = [planeSymbolLayerTwo];
  }
})
.add({ ...pointBP4, z: 400,  easing: "linear"})

animatePlaneTwo.play();

//Blimp Graphic 1 / Animation

const pointBlimp1 = { latitude:40.713517, longitude:-73.971165}
const pointBlimp2 = { latitude:40.73968,  longitude:-74.01886}

const blimpGraphicsLayer = new GraphicsLayer({
  elevationInfo: {
    mode: "relative-to-ground"
  },
  opacity: 1
});
map.add(blimpGraphicsLayer);

const blimpGraphic = new Graphic({
  symbol: {
    type: "point-3d",
    symbolLayers: [
      {
        type: "object",
        resource: { href: './models/Blimp.glb' },
        height: 40,
        heading: 215,
        tilt:0,
        anchor: "bottom"
      }
    ]
  },
  geometry: new Point({
    ...pointBlimp1,
    z: 400,
  })
})

blimpGraphicsLayer.add(blimpGraphic);

const blimpGeometry = blimpGraphic.geometry;
const blimpSymbolLayer = blimpGraphic.symbol.symbolLayers.getItemAt(0);

const animateBlimp = anime
.timeline({
  autoplay: true,
  targets: [blimpGeometry, blimpSymbolLayer],
  loop: true,
  duration: 120000,
  update: function() {
    blimpGraphic.geometry = blimpGeometry.clone();
    blimpGraphic.symbol = blimpGraphic.symbol.clone();
    blimpGraphic.symbol.symbolLayers = [blimpSymbolLayer];
  }
})
.add({ ...pointBlimp2, z: 300,  easing: "linear"})

animateBlimp.play();

/*************Info Icon Graphics**************/

const infoGraphic1940 = new Graphic({
  symbol: {
    type: "point-3d",
    symbolLayers: [
      {
        type: "object",
        resource: { href: './models/Info.glb'},
        material: { color: [48, 48, 48] },
        height: 200,
        heading: 0,
        tilt:0,
        anchor: "bottom"
      }
    ]
  },
  geometry: new Point({
    latitude: 40.7077914352411,
    longitude: -74.042100273936,
    z: 40,
  })
})

const infoGraphic1980 = new Graphic({
  symbol: {
    type: "point-3d",
    symbolLayers: [
      {
        type: "object",
        resource: { href: './models/Info.glb'},
        material: { color: [16, 231, 226] },
        height: 200,
        heading: 0,
        tilt:0,
        anchor: "bottom"
      }
    ]
  },
  geometry: new Point({
    latitude: 40.7077914352411,
    longitude: -74.042100273936,
    z: 40,
  })
})

infoGraphicsLayer.add(infoGraphic1940);

/*************40s/80s Tax Photos Text Graphics**************/

const letterGraphic1940 = new Graphic({
  layer: letterGraphicsLayer,
  symbol: {
    type: "point-3d",
    symbolLayers: [
      {
        type: "object",
        resource: { href: './models/1940s.glb'},
        material: { color: [48, 48, 48] },
        height: 150,
        heading: 0,
        tilt:0,
        anchor: "bottom"
      }
    ]
  },
  geometry: new Point({
    latitude: 40.738281,
    longitude: -74.020025,
    z: 40,
  })
})

letterGraphicsLayer.add(letterGraphic1940);

const letterGraphic1980 = new Graphic({
  symbol: {
    type: "point-3d",
    symbolLayers: [
      {
        type: "object",
        resource: { href: './models/1980s.glb'},
        material: { color: [16, 231, 226] },
        height: 150,
        heading: 0,
        tilt:0,
        anchor: "bottom"
      }
    ]
  },
  geometry: new Point({
    latitude: 40.738281,
    longitude: -74.020025,
    z: 40,
  }),
})

/*************Address Search Widget**************/
let searchTextFlag = 0;

const searchSource = [{
  url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
  filter: {
      geometry: new Polygon({
          "rings": [
            [
              [
                -74.014273,
                40.74473
          ],
          [
            -73.964534,
            40.72375
          ],
          [
            -73.992435,
            40.685754
          ],
          [
            -74.042173,
            40.706746
          ]
            ]
          ],
          "spatialReference": {
            "wkid": 4326
          }
      }) 
  },
  singleLineFieldName: "SingleLine",
  outFields: ["Addr_type"],
  name: "Search by Address or Place",
  placeholder: "Enter an Address or Place",
  zoomScale: 900,
  //resultSymbol: marker,
  resultGraphicEnabled: false,
  maxSuggestions: 5,
}];

const addSearch = new Search({
  view: view,
  includeDefaultSources: false,
  container: "addSearch",
  locationEnabled: false,
  outFields: ["Addr_Type"],
  sources: searchSource,
  allPlaceholder: "Enter an Address or Place",
  popupEnabled: false,
});

addSearch.on('search-complete', function(result){
  if(result.results && result.results.length > 0 && result.results[0].results && result.results[0].results.length > 0){
    const lat = result.results[0].results[0].feature.geometry.latitude;
    const long = result.results[0].results[0].feature.geometry.longitude;
    const address = result.results[0].results[0].name;

    const splitAddress = address.split(",");
    const finalAddress = splitAddress[0] + ' ';

    const correction = {
      "St ":"Street",
      "Ave ": "Avenue ",
      "Pl ": "Place",
      "Sq ": "Square",
      "Ln ": "Lane",
      "W ": "West ",
      "E ": "East "
    }

    const finalAddressFixed = finalAddress.replace(/St |Ave |Pl |Sq |W |E |Ln/g, matched => correction[matched]);

    let initColor;

    if (setImageYear == 1) {
      initColor = [48,48,48];
    } else {
      initColor = [16, 231, 226];
    };

    //Create address finder label

    const textSymbol = {
      type: "text", // autocasts as new TextSymbol()
      color: "#303030",
      text: finalAddressFixed, 
      font: {
        // autocasts as new Font()
        size: 12,
        family: "Poppins",
        weight: "bolder"
      },
      haloColor: "#c2c2c2",
      haloSize: 0.5
    };

    const point = {
      type: "point",
      x: long,
      y: lat,
      z: 75
    }

    const textGraphic = new Graphic({
      geometry: point,
      symbol: textSymbol
    })

    //Create Arrow Graphic

    const arrowGraphic = new Graphic({
      geometry: {
        type: "point",
        latitude: lat,
        longitude: long,
      },
      symbol: {
        type: "point-3d",
        symbolLayers: [
          {
            type: "object",
            resource: { href: './models/Arrow.glb'},
            material: { color: initColor },
            height: 60,
            tilt: 0,
            heading: 120,
            anchor: "bottom",
          },
        ],
      }
    });

    arrowLayer.removeAll();
    arrowLayer.addMany([arrowGraphic, textGraphic]);

    const arrowSymbolLayer = arrowGraphic.symbol.symbolLayers.getItemAt(0);

    const headingAnimation = anime({
      targets: arrowSymbolLayer,
      heading: "+=360",
      duration: 5000,
      easing: "linear",
      autoplay: true,
      loop: true,
      update: function () {
        arrowGraphic.symbol = arrowGraphic.symbol.clone();
        arrowGraphic.symbol.symbolLayers = [arrowSymbolLayer];
      }
    });

    headingAnimation.play();

    searchTextFlag = 1;
    document.getElementById("search").innerHTML = "Clear";
    $("#search").removeAttr('data-bs-toggle', 'modal');

  } else {
    ""
  }
});

/*******Clear Search with Clear in NavBar************/

const clearText = document.getElementById("search")

if (searchTextFlag = 1) {
  clearText.addEventListener("click", clearSearch);

  function clearSearch() {
    addSearch.clear();
    arrowLayer.removeAll();
    document.getElementById("search").innerHTML = "Search";
    $("#search").attr('data-bs-toggle', 'modal');
    searchTextFlag = 0;
  }
} else {
  ""
}

/****Clear Search with X in Search Bar****/

addSearch.on("search-clear", function() {
  arrowLayer.removeAll();
  document.getElementById("search").innerHTML = "Search";
  searchTextFlag = 0;
  $("#search").attr('data-bs-toggle', 'modal');
});

/****3D Info Icon HitTest Hover Code****/

view.on("pointer-move", (event) => {
  const opts = {
    include: infoGraphicsLayer
  }
  view.hitTest(event, opts).then((response) => {
    if (response.results.length) {
      document.getElementById("viewDiv").style.cursor = "pointer";
    } else {
      document.getElementById("viewDiv").style.cursor = "default";
    }
  });
});

/****40s/80s Era Switch****/

function year1940() {
  buildings.renderer = buildingRenderer40;
  parks.renderer = parks40;
  // document.getElementsByClassName("navbar-brand")[0].style.color="#000";
  // document.getElementsByClassName("navbar-brand")[0].style.textShadow = "4px 4px #c2c2c2, 8px 8px #fff";
  document.getElementsByClassName("switchText80")[0].style.opacity=0.5;
  document.getElementsByClassName("switchText40")[0].style.opacity=1;
  document.getElementsByClassName("switchSubText80")[0].style.opacity=0.5;
  document.getElementsByClassName("switchSubText40")[0].style.opacity=1;
  //document.getElementById("cardClose").style.borderColor="#000";
  //document.getElementById("cardX").style.color="#000";
  letterGraphicsLayer.add(letterGraphic1940);
  letterGraphicsLayer.remove(letterGraphic1980);
  infoGraphicsLayer.add(infoGraphic1940);
  infoGraphicsLayer.remove(infoGraphic1980);
  if (arrowLayer.graphics.items.length > 0) {
    arrowLayer.graphics.items[0].symbol.symbolLayers.items[0].material.color = [48,48,48];
  } else {
    ""
  };
  if (countNumber > 0) {
    highlight.remove();
  };
  view.highlightOptions = highlight40;
  //document.getElementById("cardImageId").style.maxWidth = "500px";
};

function year1980() {
  buildings.renderer = buildingRenderer80;
  parks.renderer = parks80;
  // document.getElementsByClassName("navbar-brand")[0].style.color="#20D4CF";
  // document.getElementsByClassName("navbar-brand")[0].style.textShadow = "4px 4px #ec38bc, 8px 8px #7303c0";
  document.getElementsByClassName("switchText80")[0].style.opacity=1;
  document.getElementsByClassName("switchText40")[0].style.opacity=0.5;
  document.getElementsByClassName("switchSubText80")[0].style.opacity=1;
  document.getElementsByClassName("switchSubText40")[0].style.opacity=0.5;
  //document.getElementById("cardClose").style.borderColor="#ec38bc";
  //document.getElementById("cardX").style.color="#ec38bc";
  letterGraphicsLayer.add(letterGraphic1980);
  letterGraphicsLayer.remove(letterGraphic1940);
  infoGraphicsLayer.add(infoGraphic1980);
  infoGraphicsLayer.remove(infoGraphic1940);
  if (arrowLayer.graphics.items.length > 0) {
    arrowLayer.graphics.items[0].symbol.symbolLayers.items[0].material.color = [16, 231, 226];
  } else {
    ""
  };
  if (countNumber > 0) {
    highlight.remove();
  };
  view.highlightOptions = highlight80;
  //document.getElementById("cardImageId").style.maxWidth = "600px";
};

const timeWarpSwitch = document.getElementById("switch");
timeWarpSwitch.addEventListener("click", function() {
  if (setImageYear == 1) {
      countNumber = 0;
      setImageYear = 0;
      document.getElementById("cardId").style.display="none";
      year1980();
  } else if (setImageYear == 0) {
      countNumber = 0;
      setImageYear = 1;
      document.getElementById("cardId").style.display="none";
      year1940();
  }
});

/****About Window Open / Close Actions****/

$(document).on("click", "#about", function() {
  document.getElementById("cardImageId").src = "#";
  document.getElementById("cardId").style.display="none";
  
  if (window.innerWidth < 767) {
    $('.navbar-collapse').collapse('toggle');
  }

  if (countNumber > 0) {
    highlight && highlight.remove();
    highlight = view.highlight(infoGraphicsLayer.graphics.items[0]);
    countNumber = 0;
  } else {
    highlight;
    highlight = view.highlight(infoGraphicsLayer.graphics.items[0]);
  };
});

/****Timewarp Window Open / Close Actions****/

$(document).on("click", "#eraSwitch", function() {
  document.getElementById("cardImageId").src = "#";
  document.getElementById("cardId").style.display="none";
  
  if (window.innerWidth < 767) {
    $('.navbar-collapse').collapse('toggle');
  }
  
  if (countNumber > 0) {
    highlight && highlight.remove();
    countNumber = 0;
  } else {
    ""
  };
});

/****Search Window Open / Close Actions****/

$(document).on("click", "#search", function() {
  document.getElementById("cardImageId").src = "#";
  document.getElementById("cardId").style.display="none";
  
  if (window.innerWidth < 767) {
    $('.navbar-collapse').collapse('toggle');
  }

  if (countNumber > 0) {
    highlight && highlight.remove();
    countNumber = 0;
  } else {
    ""
  };
});

  /****Close Loader Div after Layer Load****/

view.whenLayerView(buildings).then((layerView) => {
  reactiveUtils.whenOnce(() => !layerView.updating).then(() => {
    document.getElementById("loaderDiv").style.display="none";
  });
});