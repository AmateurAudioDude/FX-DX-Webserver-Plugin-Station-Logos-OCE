/*
    Station Logos OCE + Station Info for no RDS v1.4.0 by AAD
    https://github.com/AmateurAudioDude/FM-DX-Webserver-Plugins

    //// Server-side code ////
*/

'use strict';

const pluginName = "Station Logos OCE";

// Library imports
const fs = require('fs');
const path = require('path');
const { logInfo, logWarn, logError } = require('../../server/console');

let logoFiles = [];
let debounceTimer = null;

// Function to update the logo list
function updateLogoList() {
    const logoDir = path.join(__dirname, '../../web/logos');
    fs.readdir(logoDir, (err, files) => {
        if (err) {
            logError(`${pluginName}: Error reading logo directory:`, err);
            return;
        }
        logoFiles = files.filter(file => file.endsWith('.webp') || file.endsWith('.png') || file.endsWith('.svg'));
        logInfo(`${pluginName}: ${logoFiles.length} images found`);
    });
}

// Initial update
updateLogoList();

// Monitor folder for changes and debounce updates
const logoDir = path.join(__dirname, '../../web/logos');
fs.access(logoDir, fs.constants.F_OK, (err) => {
    if (err) return; // Folder doesn't exist, do nothing

    try {
        fs.watch(logoDir, (eventType, filename) => {
            if (eventType === 'rename' || eventType === 'change') {
                if (debounceTimer) clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => updateLogoList(), 10000);
            }
        });
    } catch (e) {
        console.error('Failed to watch directory:', e);
    }
});

// Endpoint imports
const express = require('express');
const endpointsRouter = require('../../server/endpoints');

// Custom endpoint for logos data
endpointsRouter.get('/logos-data', (req, res) => {
    const pluginHeader = req.get('X-Plugin-Name') || 'NoPlugin';

    if (pluginHeader === 'StationLogosOCEPlugin') {
        res.json({ availableLogos: logoFiles });
    } else {
        res.status(403).json({ error: 'Unauthorised' });
    }
});

logInfo(`${pluginName}: Custom router added (/logos-data) to endpoints router.`);
