var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_chile_1 = new ol.format.GeoJSON();
var features_chile_1 = format_chile_1.readFeatures(json_chile_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chile_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chile_1.addFeatures(features_chile_1);
var lyr_chile_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_chile_1, 
                style: style_chile_1,
                interactive: true,
                title: '<img src="styles/legend/chile_1.png" /> chile'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_chile_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_chile_1];
lyr_chile_1.set('fieldAliases', {'x (UTM)': 'x (UTM)', 'y (UTM)': 'y (UTM)', });
lyr_chile_1.set('fieldImages', {'x (UTM)': '', 'y (UTM)': '', });
lyr_chile_1.set('fieldLabels', {'x (UTM)': 'no label', 'y (UTM)': 'no label', });
lyr_chile_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});