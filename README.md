# Urban Change Detection in Informal Settlements Using Google’s 2.5D Dataset

This repository contains code and data processing workflows developed for the paper:

**“Understanding Informal Settlement Transformation Through Google’s 2.5D Dataset and Street View–Based Validation”**  
(*Presented at the 8th EARSeL Workshop on Earth Observation for the Global South*)

---

## 🌍 Overview

Informal settlements are rapidly evolving, especially in cities of the Global South. Monitoring their transformation—both horizontally and vertically—is critical for sustainable urban planning, but is often limited by the lack of temporal and height-resolved data.

This project explores the potential of [Google’s Open Buildings 2.5D Temporal Dataset (2016–2023)](https://sites.research.google/gr/open-buildings/temporal) to detect urban change patterns within Nairobi’s informal settlements. It uses both **building count** and **average height** to classify urban change, and validates results using a novel combination of **Google Earth satellite imagery** and **Google Street View**.

---

## 🧪 Scripts

The repository is structured as follows:

| Scripts | Description |
|----------|-------------|
| `1_download_data_gee.js` | Script for downloading Google 2.5D data using Google Earth Engine |
| `2_zonal_stats_count_height.ipynb` | Calculates building count and height per 100m grid |
| `3_change_classification.ipynb` | Computes change classes and thresholds |
| `4_urban_change_typology.ipynb` | Derives 8-category urban change typology |
| `5_top5_slum_stats.ipynb` | Identifies top 5 slums by area and prepares validation stats |
| `6_city_context_analysis.ipynb` | Spatial zone delineation (slum, buffer, other regions) and analysis |

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

**Note:** The data files are not hosted in this repository due to size, sensitive nature of data and permission restrictions.

---

## 📝 Citation
If you use or build upon this work, please cite the paper and link to this repostiory.

---

## 📄 License
This code is licensed under the MIT License.

---

## 🙏 Acknowledgements
This work is supported by:
* FORMAS (Swedish Research Council for Sustainable Development), project DEPRIMAP (2023-01210) (https://sola.kau.se/deprimap/)
* BELSPO (Belgian Federal Science Policy), project DynoEO4SLUMS (SR/11/419)
* Erasmus+ Staff Mobility Grant from Karlstad University (support for EARSeL 2025 participation)
* Thanks to IDEAtlas and IDEAMAPS Network for slum reference data

