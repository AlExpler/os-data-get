'use strict';

var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    os = null,
    infoDiv = document.getElementById("os-info-div");

os = `${platform}`;

let infoString = document.createElement('div');
infoString.id = 'os-info-string';
infoString.innerText = os;
infoDiv.append(infoString)
