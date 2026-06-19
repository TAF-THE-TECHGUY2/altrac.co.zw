# Equipment Photos

Drop real equipment photos into this folder to replace the placeholders.

The app expects these filenames (defined in `src/data/equipment.js`). Until a
file exists, a branded placeholder is shown automatically — so you can add
photos one at a time.

| File name                        | Machine                        |
| -------------------------------- | ------------------------------ |
| `cat-325-excavator.jpg`          | CAT 325 Excavator              |
| `cat-320-excavator.jpg`          | CAT 320 Excavator              |
| `sany-sy215-excavator.jpg`       | Sany SY215 Excavator           |
| `cat-140g-grader.jpg`            | CAT 140G Motor Grader          |
| `cat-140h-grader.jpg`            | CAT 140H Motor Grader          |
| `cat-120g-grader.jpg`            | CAT 120G Motor Grader          |
| `foden-15m3-tipper.jpg`          | Foden 15m³ Tipper Truck        |
| `30t-tipper-truck.jpg`           | 30 Tonne Tipper Truck          |
| `water-bowser-16000.jpg`         | 16,000L Water Bowser           |
| `cat-920-loader.jpg`             | CAT 920 Front End Loader       |
| `shantui-sl30-loader.jpg`        | Shantui SL30 Front End Loader  |
| `cat-428-backhoe.jpg`            | CAT 428 Backhoe Loader         |

**Tips**

- Recommended size: ~1200 × 900px (4:3 ratio), JPG or WebP, under ~300 KB each.
- To add a brand-new machine, add an entry to `EQUIPMENT` in
  `src/data/equipment.js` and set its `image` path to a file in this folder.

## Hero image

The home page hero looks for `public/hero.jpg`. Drop a wide construction /
earthmoving photo there (≈1920 × 1080px). Until then a dark branded background
is shown. The dark overlay in `src/pages/Home.jsx` keeps the heading readable.
