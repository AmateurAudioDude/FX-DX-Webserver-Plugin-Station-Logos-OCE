# Station Logos OCE plugin for FM-DX Webserver

This plugin displays station logos for stations with and without RDS data, targeted at Oceania FM-DX Webserver owners.

* [Download the latest zip file](https://github.com/AmateurAudioDude/FX-DX-Webserver-Station-Logos-OCE/archive/refs/heads/main.zip)
* Transfer `StationLogosOCE` folder, and `StationLogosOCE.js` to FM-DX-Webserver `plugins` folder
* Extract `logos` folder from file `logos.zip` and transfer to FM-DX-Webserver `web` folder
* Restart FM-DX-Webserver if required
* Login to Adminstrator Panel and enable plugin
* Restart FM-DX-Webserver again if required

> [!NOTE]
> ### Options
>
> - `includeLocalStationInfo`: Set to true to enable logos for stations without [RDS](https://en.wikipedia.org/wiki/Radio_Data_System). Files are to be stored in FM-DX Webserver `/web/logos/local` folder.   
> - `prioritiseSvg`: Set to true to display 'svg' file if both 'svg' and 'webp' files exist for tuned station.   

> [!TIP]
> PNG files can be converted to WebP lossess files using XnConvert, setting the format to `WebP`, `Lossless`, and `Compression Method` to `6`.

## For stations without RDS data
* Entries can be added in `localstationdata.json` (stored in `/web/logos/json`). Once edited, confirm each line except the last ends with a comma.

* Images can be named with an underscore, followed by station frequency (stored in `/web/logos/local`). Example: `_87.600.webp`

* To change logo animation for tentatively loaded PS RDS, Open `pluginStationLogosOCE.js`, find and edit the line containing `const logoEffect`.

v1.4.0
------
* Added CCI hold threshold option
* Minor fixes

v1.3.9
------
* Added transition effects
* Minor fixes

v1.3.8
------
* Improved method of fetching signal strength

v1.3.7
------
* Fix rare bug with both the local and TX panels briefly appearing at the same time

v1.3.6
------
* Minor visual positioning tweaks

v1.3.5
------
* Removed unneeded code
* Minor visual changes and fixes

v1.3.4
------
* Added option for new display method of local station data for improved compatibility

v1.3.3
------
* Added support for local logo based on selected antenna (eg: `_87.500_1.webp` for second antenna)

v1.3.2
------
* Added support for local data based on selected antenna

v1.3.1
------
* Added support for WebP image format

v1.3.0
------
* Logo filename is fetched from a list during RDS decoding rather than attempting to load each RDS PS decoded name (no more 404 errors)
* Case insensitive for Linux without producing 404 errors due to case sensitivity being checked from a list
* Faster and more responsive loading/unloading of logos
* Added option to delay local (no RDS) info and logo
* Added option to include azimuth for local (no RDS) info
* Updated tooltip to new design

v1.2.7
------
* Improved responsiveness of image loading/unloading using dynamic interval timings and frequency change awareness

v1.2.6
------
* Conforms to imperial units setting

v1.2.5
------
* Added option to ignore filename case for RDS PS

v1.2.4
------
* Container is slightly resized if Peakmeter plugin is found
* Added option to prioritise 'svg' over 'png' images
* Added "Santa hat" default logo shown during December

v1.2.3
------
* Minor fixes

v1.2.2
------
* Fix for FM-DX Webserver v1.2.4 compatibility issues
* Fix for tooltips
* Data for stations without RDS stored in json file
* Added more animations for partially loaded PS RDS

v1.2
----
* Public release

Original source code located at: [https://github.com/Highpoint2000/webserver-station-logos](https://github.com/Highpoint2000/webserver-station-logos)
