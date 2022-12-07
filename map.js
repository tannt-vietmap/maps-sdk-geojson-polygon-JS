//display tile layer
var map = new vietmapgl.Map({
  container: "map",
  style:
    "https://maps.vietmap.vn/mt/tm/style.json?apikey=YOUR_API_KEY", // stylesheet location
  center: [106.68189581514225, 10.764994908339784], // starting position [lng, lat]
  zoom: 14,
  pitch: 90, // starting zoom
});
//add geojson-line to map
map.on("load", function () {
  map.addSource("polygon1", {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [106.68470062630666, 10.768476422065191],
            [106.6834879055503, 10.761372273052373],
            [106.68753030807022, 10.759607241117564],
            [106.69768122995436, 10.759033603514183],
            [106.70792198300512, 10.763887425702507],
            [106.70558637265901, 10.768432297432312],
            [106.70621519082937, 10.770726769738033],
            [106.69938802212829, 10.77085914260725],
            [106.69875920395981, 10.772050495809381],
            [106.69669308711559, 10.771168012408836],
            [106.69350408068345, 10.771344509296],
            [106.6894167625793, 10.77363895941511],
            [106.68470062630666, 10.768476422065191],
          ],
        ],
      },
    },
  });
  map.addLayer({
    id: "polygon1",
    type: "fill",
    source: "polygon1",
    layout: {},
    paint: {
      "fill-color": "#088",
      "fill-opacity": 0.8,
    },
  });
});
