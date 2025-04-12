/**************************************************************
 * Script: Google Earth Engine - Download Google 2.5D Dataset
 * Description:
 *   This script downloads high-resolution (0.5m) building data 
 *   from Google's Open Buildings 2.5D Temporal Dataset.
 * 
 * Key Points:
 *   - Downloads 3 bands: building count, height, and presence.
 *   - Each band is exported as a separate GeoTIFF.
 *   - Data is downloaded for a specified year and AOI (e.g., Nairobi).
 *   - Multiple image tiles may be downloaded due to high resolution.
 * 
 * Dataset Info:
 *   https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_Research_open-buildings-temporal_v1
 **************************************************************/

// 📅 Define the year of interest
var year = 2022;

// 📍 Define the area of interest (replace 'nairobi' with your feature or geometry)
var aoi = nairobi;  // <-- Define this in your GEE editor before running

// 📦 Access the 2.5D temporal dataset
var imageCollection = ee.ImageCollection('GOOGLE/Research/open-buildings-temporal/v1');

// 🧠 Filter the dataset for the selected year and AOI
var latestImage = imageCollection
  .filterBounds(aoi)
  .filter(ee.Filter.calendarRange(year, year, 'year'))
  .sort('system:time_start', false)
  .first();

// 🛰️ Define band names of interest
var bandNames = ['fractional_building_count', 'building_height', 'building_presence'];

// 💾 Export each band individually as a 0.5m GeoTIFF
bandNames.forEach(function(bandName, index) {
  var bandImage = latestImage.select(index).clip(aoi);
  
  Export.image.toDrive({
    image: bandImage,
    description: 'export_' + bandName + '_' + year,
    folder: 'GEE_Assets',           // 🔄 Change if you want a different folder in your Drive
    fileNamePrefix: bandName + '_' + year,
    scale: 0.5,                      // ⚠️ Native resolution of Google 2.5D dataset (0.5 meters)
    region: aoi,
    maxPixels: 1e12,
  });
});


