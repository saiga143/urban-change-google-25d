[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.15269825.svg)](https://doi.org/10.5281/zenodo.15269825)

# 🏙️ Urban Change Detection in Informal Settlements Using Google’s 2.5D Dataset

This repository contains code and data processing workflows developed for the paper:

**“Understanding Informal Settlement Transformation Through Google’s 2.5D Dataset and Street View–Based Validation”**  
(*Presented at the 8th EARSeL Workshop on Earth Observation for the Global South*)

**Full paper link:** https://isprs-archives.copernicus.org/articles/XLVIII-M-7-2025/245/2025/isprs-archives-XLVIII-M-7-2025-245-2025.html

**How to cite:**
Veeravalli, S. G., Haas, J., Friesen, J., and Georganos, S.: Understanding Informal Settlement Transformation through Google’s 2.5D Dataset and Street View based Validation, Int. Arch. Photogramm. Remote Sens. Spatial Inf. Sci., XLVIII-M-7-2025, 245–251, https://doi.org/10.5194/isprs-archives-XLVIII-M-7-2025-245-2025, 2025.

---

## 🌍 Overview

Informal settlements are rapidly evolving, especially in cities of the Global South. Monitoring their transformation—both horizontally and vertically—is critical for sustainable urban planning, but is often limited by the lack of temporal and height-resolved data.

This project explores the potential of [Google’s Open Buildings 2.5D Temporal Dataset (2016–2023)](https://sites.research.google/gr/open-buildings/temporal) to detect urban change patterns within Nairobi’s informal settlements. It uses both **building count** and **average height** to classify urban change, and validates results using a novel combination of **Google Earth satellite imagery** and **Google Street View**.

Using changes in **building count** and **building height**, the analysis identifies patterns like:

- 📈 Vertical Densification  
- ➕ Horizontal Densification  
- 🏗️ High Densification  
- 📉 Decline  

---

## 📂 Scripts

The repository is structured as follows:

| Scripts | Description |
|----------|-------------|
| `1_download_data_gee.js` | Script for downloading Google 2.5D data using Google Earth Engine |
| `2_zonal_stats_count_height.ipynb` | Calculates building count and height per 100m grid |
| `3_urban_change_typology.ipynb` | Computes change classes & derives 8 urban change categories |
| `4_top5_slum_stats.ipynb` | Identifies top 5 slums by area and prepares validation stats |
| `5_city_context_analysis.ipynb` | Spatial zone delineation (slum, buffer, other regions) and analysis |

---

## 🛠️ Environment Setup

You can replicate the environment using:

```bash
conda env create -f environment.yaml
conda activate deprimap-urbanchange
```
---

## 📦 Datasets
* Google Open Buildings 2.5D Temporal Dataset (2016-2023) - https://sites.research.google/gr/open-buildings/temporal/
* Nairobi Slum boundaries from IDEAtlas and IDEAMAPS Network (https://www.ideamapsnetwork.org/)
* Nairobi administrative boundaries from HDX - https://data.humdata.org/dataset/cod-ab-ken
* Google Earth Pro and Google Street View for validation imagery

**Note:** This repo does not include raw data files due to size and licensing constraints.

---

## 🧪 Validation
A total of 154 grid cells were manually validated using both satellite and street-level imagery. The workflow supports exporting selected validation areas in KML format for easy visual inspection.

---

## 📊 Outputs
- Spatial classification of urban change
- Top 5 slum areas per change category
- Comparative analysis across 3 spatial zones:
    - Informal settlements
    - 100m buffer rings
    - Rest of the city
---

## 📝 Citation
If you use or build upon this work, please cite the paper and link to this repository.

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.15269825.svg)](https://doi.org/10.5281/zenodo.15269825)

**Zenodo Repository citation:**
Veeravalli, S. G. (2025). Codebase for urban change detection in informal settlements using Google's 2.5D dataset (v1.1). Zenodo. https://doi.org/10.5281/zenodo.15269825

**Research paper citation:**
Veeravalli, S. G., Haas, J., Friesen, J., and Georganos, S.: Understanding Informal Settlement Transformation through Google’s 2.5D Dataset and Street View based Validation, Int. Arch. Photogramm. Remote Sens. Spatial Inf. Sci., XLVIII-M-7-2025, 245–251, https://doi.org/10.5194/isprs-archives-XLVIII-M-7-2025-245-2025, 2025.

---

## 📄 License
This code is licensed under the MIT License.

---

## 🙏 Acknowledgements
This work is supported by:
* FORMAS (Swedish Research Council for Sustainable Development), project DEPRIMAP (2023-01210) (https://sola.kau.se/deprimap/)
* BELSPO (Belgian Federal Science Policy), project DynoEO4SLUMS (SR/11/419) (https://dyneo4slums.ulb.be/)
* Erasmus+ Staff Mobility Grant from Karlstad University (support for EARSeL 2025 participation)
* Thanks to IDEAtlas and IDEAMAPS Network for slum reference data

![image](https://github.com/user-attachments/assets/ce6a1d0b-4a85-42e6-8183-bd8efd927ad6)
