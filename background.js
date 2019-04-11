// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

/* chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });

Configure things as many things right away on install instead of on page load
to prevent performance/lag.

}); */

/* chrome.runtime.onInstalled.addListener(function(details) {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([whenToReplace]);
  });
});


var whenToReplace = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { hostEquals: 'www.reddit.com', schemes: ['https'] }
    })    
  ],
  actions: [ new chrome.declarativeContent.ShowPageAction() ] */
// };

chrome.tabs.exexuteScript()