/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@fullcalendar/core/main.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/core/main.esm.js ***!
  \*****************************************************/
/*! exports provided: Calendar, Component, DateComponent, DateEnv, DateProfileGenerator, DayHeader, DaySeries, DayTable, ElementDragging, ElementScrollController, EmitterMixin, EventApi, FgEventRenderer, FillRenderer, Interaction, Mixin, NamedTimeZoneImpl, PositionCache, ScrollComponent, ScrollController, Slicer, Splitter, Theme, View, WindowScrollController, addDays, addDurations, addMs, addWeeks, allowContextMenu, allowSelection, appendToElement, applyAll, applyMutationToEventStore, applyStyle, applyStyleProp, asRoughMinutes, asRoughMs, asRoughSeconds, buildGotoAnchorHtml, buildSegCompareObj, capitaliseFirstLetter, combineEventUis, compareByFieldSpec, compareByFieldSpecs, compareNumbers, compensateScroll, computeClippingRect, computeEdges, computeFallbackHeaderFormat, computeHeightAndMargins, computeInnerRect, computeRect, computeVisibleDayRange, config, constrainPoint, createDuration, createElement, createEmptyEventStore, createEventInstance, createFormatter, createPlugin, cssToStr, debounce, diffDates, diffDayAndTime, diffDays, diffPoints, diffWeeks, diffWholeDays, diffWholeWeeks, disableCursor, distributeHeight, elementClosest, elementMatches, enableCursor, eventTupleToStore, filterEventStoreDefs, filterHash, findChildren, findElements, flexibleCompare, forceClassName, formatDate, formatIsoTimeString, formatRange, getAllDayHtml, getClippingParents, getDayClasses, getElSeg, getRectCenter, getRelevantEvents, globalDefaults, greatestDurationDenominator, hasBgRendering, htmlEscape, htmlToElement, insertAfterElement, interactionSettingsStore, interactionSettingsToStore, intersectRanges, intersectRects, isArraysEqual, isDateSpansEqual, isInt, isInteractionValid, isMultiDayRange, isPropsEqual, isPropsValid, isSingleDay, isValidDate, listenBySelector, mapHash, matchCellWidths, memoize, memoizeOutput, memoizeRendering, mergeEventStores, multiplyDuration, padStart, parseBusinessHours, parseDragMeta, parseEventDef, parseFieldSpecs, parseMarker, pointInsideRect, prependToElement, preventContextMenu, preventDefault, preventSelection, processScopedUiProps, rangeContainsMarker, rangeContainsRange, rangesEqual, rangesIntersect, refineProps, removeElement, removeExact, renderDateCell, requestJson, sliceEventStore, startOfDay, subtractInnerElHeight, translateRect, uncompensateScroll, undistributeHeight, unpromisify, version, whenTransitionDone, wholeDivideDurations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return Calendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateComponent", function() { return DateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateEnv", function() { return DateEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateProfileGenerator", function() { return DateProfileGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayHeader", function() { return DayHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaySeries", function() { return DaySeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayTable", function() { return DayTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementDragging", function() { return ElementDragging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementScrollController", function() { return ElementScrollController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmitterMixin", function() { return EmitterMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventApi", function() { return EventApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FgEventRenderer", function() { return FgEventRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillRenderer", function() { return FillRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interaction", function() { return Interaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mixin", function() { return Mixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamedTimeZoneImpl", function() { return NamedTimeZoneImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionCache", function() { return PositionCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollComponent", function() { return ScrollComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollController", function() { return ScrollController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slicer", function() { return Slicer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Splitter", function() { return Splitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowScrollController", function() { return WindowScrollController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDays", function() { return addDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDurations", function() { return addDurations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMs", function() { return addMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWeeks", function() { return addWeeks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowContextMenu", function() { return allowContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowSelection", function() { return allowSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendToElement", function() { return appendToElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyAll", function() { return applyAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMutationToEventStore", function() { return applyMutationToEventStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyStyle", function() { return applyStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyStyleProp", function() { return applyStyleProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asRoughMinutes", function() { return asRoughMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asRoughMs", function() { return asRoughMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asRoughSeconds", function() { return asRoughSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildGotoAnchorHtml", function() { return buildGotoAnchorHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSegCompareObj", function() { return buildSegCompareObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitaliseFirstLetter", function() { return capitaliseFirstLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineEventUis", function() { return combineEventUis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareByFieldSpec", function() { return compareByFieldSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareByFieldSpecs", function() { return compareByFieldSpecs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareNumbers", function() { return compareNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compensateScroll", function() { return compensateScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeClippingRect", function() { return computeClippingRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeEdges", function() { return computeEdges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeFallbackHeaderFormat", function() { return computeFallbackHeaderFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeHeightAndMargins", function() { return computeHeightAndMargins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeInnerRect", function() { return computeInnerRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeRect", function() { return computeRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeVisibleDayRange", function() { return computeVisibleDayRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constrainPoint", function() { return constrainPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDuration", function() { return createDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmptyEventStore", function() { return createEmptyEventStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventInstance", function() { return createEventInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFormatter", function() { return createFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPlugin", function() { return createPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssToStr", function() { return cssToStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffDates", function() { return diffDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffDayAndTime", function() { return diffDayAndTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffDays", function() { return diffDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffPoints", function() { return diffPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffWeeks", function() { return diffWeeks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffWholeDays", function() { return diffWholeDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffWholeWeeks", function() { return diffWholeWeeks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableCursor", function() { return disableCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distributeHeight", function() { return distributeHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementClosest", function() { return elementClosest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementMatches", function() { return elementMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableCursor", function() { return enableCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventTupleToStore", function() { return eventTupleToStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterEventStoreDefs", function() { return filterEventStoreDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterHash", function() { return filterHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findChildren", function() { return findChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findElements", function() { return findElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexibleCompare", function() { return flexibleCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceClassName", function() { return forceClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatIsoTimeString", function() { return formatIsoTimeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatRange", function() { return formatRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllDayHtml", function() { return getAllDayHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClippingParents", function() { return getClippingParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayClasses", function() { return getDayClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElSeg", function() { return getElSeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRectCenter", function() { return getRectCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelevantEvents", function() { return getRelevantEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalDefaults", function() { return globalDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greatestDurationDenominator", function() { return greatestDurationDenominator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasBgRendering", function() { return hasBgRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlEscape", function() { return htmlEscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlToElement", function() { return htmlToElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfterElement", function() { return insertAfterElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interactionSettingsStore", function() { return interactionSettingsStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interactionSettingsToStore", function() { return interactionSettingsToStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectRanges", function() { return intersectRanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectRects", function() { return intersectRects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArraysEqual", function() { return isArraysEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDateSpansEqual", function() { return isDateSpansEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInt", function() { return isInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteractionValid", function() { return isInteractionValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMultiDayRange", function() { return isMultiDayRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPropsEqual", function() { return isPropsEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPropsValid", function() { return isPropsValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSingleDay", function() { return isSingleDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidDate", function() { return isValidDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenBySelector", function() { return listenBySelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapHash", function() { return mapHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchCellWidths", function() { return matchCellWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return memoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoizeOutput", function() { return memoizeOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoizeRendering", function() { return memoizeRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeEventStores", function() { return mergeEventStores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyDuration", function() { return multiplyDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padStart", function() { return padStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseBusinessHours", function() { return parseBusinessHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDragMeta", function() { return parseDragMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseEventDef", function() { return parseEventDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseFieldSpecs", function() { return parseFieldSpecs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseMarker", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointInsideRect", function() { return pointInsideRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prependToElement", function() { return prependToElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventContextMenu", function() { return preventContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventDefault", function() { return preventDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventSelection", function() { return preventSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processScopedUiProps", function() { return processScopedUiProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeContainsMarker", function() { return rangeContainsMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeContainsRange", function() { return rangeContainsRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangesEqual", function() { return rangesEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangesIntersect", function() { return rangesIntersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refineProps", function() { return refineProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeElement", function() { return removeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeExact", function() { return removeExact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderDateCell", function() { return renderDateCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestJson", function() { return requestJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliceEventStore", function() { return sliceEventStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startOfDay", function() { return startOfDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtractInnerElHeight", function() { return subtractInnerElHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateRect", function() { return translateRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uncompensateScroll", function() { return uncompensateScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undistributeHeight", function() { return undistributeHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpromisify", function() { return unpromisify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenTransitionDone", function() { return whenTransitionDone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wholeDivideDurations", function() { return wholeDivideDurations; });
/*!
FullCalendar Core Package v4.3.1
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/

// Creating
// ----------------------------------------------------------------------------------------------------------------
var elementPropHash = {
    className: true,
    colSpan: true,
    rowSpan: true
};
var containerTagHash = {
    '<tr': 'tbody',
    '<td': 'tr'
};
function createElement(tagName, attrs, content) {
    var el = document.createElement(tagName);
    if (attrs) {
        for (var attrName in attrs) {
            if (attrName === 'style') {
                applyStyle(el, attrs[attrName]);
            }
            else if (elementPropHash[attrName]) {
                el[attrName] = attrs[attrName];
            }
            else {
                el.setAttribute(attrName, attrs[attrName]);
            }
        }
    }
    if (typeof content === 'string') {
        el.innerHTML = content; // shortcut. no need to process HTML in any way
    }
    else if (content != null) {
        appendToElement(el, content);
    }
    return el;
}
function htmlToElement(html) {
    html = html.trim();
    var container = document.createElement(computeContainerTag(html));
    container.innerHTML = html;
    return container.firstChild;
}
function htmlToElements(html) {
    return Array.prototype.slice.call(htmlToNodeList(html));
}
function htmlToNodeList(html) {
    html = html.trim();
    var container = document.createElement(computeContainerTag(html));
    container.innerHTML = html;
    return container.childNodes;
}
// assumes html already trimmed and tag names are lowercase
function computeContainerTag(html) {
    return containerTagHash[html.substr(0, 3) // faster than using regex
    ] || 'div';
}
function appendToElement(el, content) {
    var childNodes = normalizeContent(content);
    for (var i = 0; i < childNodes.length; i++) {
        el.appendChild(childNodes[i]);
    }
}
function prependToElement(parent, content) {
    var newEls = normalizeContent(content);
    var afterEl = parent.firstChild || null; // if no firstChild, will append to end, but that's okay, b/c there were no children
    for (var i = 0; i < newEls.length; i++) {
        parent.insertBefore(newEls[i], afterEl);
    }
}
function insertAfterElement(refEl, content) {
    var newEls = normalizeContent(content);
    var afterEl = refEl.nextSibling || null;
    for (var i = 0; i < newEls.length; i++) {
        refEl.parentNode.insertBefore(newEls[i], afterEl);
    }
}
function normalizeContent(content) {
    var els;
    if (typeof content === 'string') {
        els = htmlToElements(content);
    }
    else if (content instanceof Node) {
        els = [content];
    }
    else { // Node[] or NodeList
        els = Array.prototype.slice.call(content);
    }
    return els;
}
function removeElement(el) {
    if (el.parentNode) {
        el.parentNode.removeChild(el);
    }
}
// Querying
// ----------------------------------------------------------------------------------------------------------------
// from https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
var matchesMethod = Element.prototype.matches ||
    Element.prototype.matchesSelector ||
    Element.prototype.msMatchesSelector;
var closestMethod = Element.prototype.closest || function (selector) {
    // polyfill
    var el = this;
    if (!document.documentElement.contains(el)) {
        return null;
    }
    do {
        if (elementMatches(el, selector)) {
            return el;
        }
        el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
};
function elementClosest(el, selector) {
    return closestMethod.call(el, selector);
}
function elementMatches(el, selector) {
    return matchesMethod.call(el, selector);
}
// accepts multiple subject els
// returns a real array. good for methods like forEach
function findElements(container, selector) {
    var containers = container instanceof HTMLElement ? [container] : container;
    var allMatches = [];
    for (var i = 0; i < containers.length; i++) {
        var matches = containers[i].querySelectorAll(selector);
        for (var j = 0; j < matches.length; j++) {
            allMatches.push(matches[j]);
        }
    }
    return allMatches;
}
// accepts multiple subject els
// only queries direct child elements
function findChildren(parent, selector) {
    var parents = parent instanceof HTMLElement ? [parent] : parent;
    var allMatches = [];
    for (var i = 0; i < parents.length; i++) {
        var childNodes = parents[i].children; // only ever elements
        for (var j = 0; j < childNodes.length; j++) {
            var childNode = childNodes[j];
            if (!selector || elementMatches(childNode, selector)) {
                allMatches.push(childNode);
            }
        }
    }
    return allMatches;
}
// Attributes
// ----------------------------------------------------------------------------------------------------------------
function forceClassName(el, className, bool) {
    if (bool) {
        el.classList.add(className);
    }
    else {
        el.classList.remove(className);
    }
}
// Style
// ----------------------------------------------------------------------------------------------------------------
var PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;
function applyStyle(el, props) {
    for (var propName in props) {
        applyStyleProp(el, propName, props[propName]);
    }
}
function applyStyleProp(el, name, val) {
    if (val == null) {
        el.style[name] = '';
    }
    else if (typeof val === 'number' && PIXEL_PROP_RE.test(name)) {
        el.style[name] = val + 'px';
    }
    else {
        el.style[name] = val;
    }
}

function pointInsideRect(point, rect) {
    return point.left >= rect.left &&
        point.left < rect.right &&
        point.top >= rect.top &&
        point.top < rect.bottom;
}
// Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false
function intersectRects(rect1, rect2) {
    var res = {
        left: Math.max(rect1.left, rect2.left),
        right: Math.min(rect1.right, rect2.right),
        top: Math.max(rect1.top, rect2.top),
        bottom: Math.min(rect1.bottom, rect2.bottom)
    };
    if (res.left < res.right && res.top < res.bottom) {
        return res;
    }
    return false;
}
function translateRect(rect, deltaX, deltaY) {
    return {
        left: rect.left + deltaX,
        right: rect.right + deltaX,
        top: rect.top + deltaY,
        bottom: rect.bottom + deltaY
    };
}
// Returns a new point that will have been moved to reside within the given rectangle
function constrainPoint(point, rect) {
    return {
        left: Math.min(Math.max(point.left, rect.left), rect.right),
        top: Math.min(Math.max(point.top, rect.top), rect.bottom)
    };
}
// Returns a point that is the center of the given rectangle
function getRectCenter(rect) {
    return {
        left: (rect.left + rect.right) / 2,
        top: (rect.top + rect.bottom) / 2
    };
}
// Subtracts point2's coordinates from point1's coordinates, returning a delta
function diffPoints(point1, point2) {
    return {
        left: point1.left - point2.left,
        top: point1.top - point2.top
    };
}

// Logic for determining if, when the element is right-to-left, the scrollbar appears on the left side
var isRtlScrollbarOnLeft = null;
function getIsRtlScrollbarOnLeft() {
    if (isRtlScrollbarOnLeft === null) {
        isRtlScrollbarOnLeft = computeIsRtlScrollbarOnLeft();
    }
    return isRtlScrollbarOnLeft;
}
function computeIsRtlScrollbarOnLeft() {
    var outerEl = createElement('div', {
        style: {
            position: 'absolute',
            top: -1000,
            left: 0,
            border: 0,
            padding: 0,
            overflow: 'scroll',
            direction: 'rtl'
        }
    }, '<div></div>');
    document.body.appendChild(outerEl);
    var innerEl = outerEl.firstChild;
    var res = innerEl.getBoundingClientRect().left > outerEl.getBoundingClientRect().left;
    removeElement(outerEl);
    return res;
}
// The scrollbar width computations in computeEdges are sometimes flawed when it comes to
// retina displays, rounding, and IE11. Massage them into a usable value.
function sanitizeScrollbarWidth(width) {
    width = Math.max(0, width); // no negatives
    width = Math.round(width);
    return width;
}

function computeEdges(el, getPadding) {
    if (getPadding === void 0) { getPadding = false; }
    var computedStyle = window.getComputedStyle(el);
    var borderLeft = parseInt(computedStyle.borderLeftWidth, 10) || 0;
    var borderRight = parseInt(computedStyle.borderRightWidth, 10) || 0;
    var borderTop = parseInt(computedStyle.borderTopWidth, 10) || 0;
    var borderBottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
    // must use offset(Width|Height) because compatible with client(Width|Height)
    var scrollbarLeftRight = sanitizeScrollbarWidth(el.offsetWidth - el.clientWidth - borderLeft - borderRight);
    var scrollbarBottom = sanitizeScrollbarWidth(el.offsetHeight - el.clientHeight - borderTop - borderBottom);
    var res = {
        borderLeft: borderLeft,
        borderRight: borderRight,
        borderTop: borderTop,
        borderBottom: borderBottom,
        scrollbarBottom: scrollbarBottom,
        scrollbarLeft: 0,
        scrollbarRight: 0
    };
    if (getIsRtlScrollbarOnLeft() && computedStyle.direction === 'rtl') { // is the scrollbar on the left side?
        res.scrollbarLeft = scrollbarLeftRight;
    }
    else {
        res.scrollbarRight = scrollbarLeftRight;
    }
    if (getPadding) {
        res.paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
        res.paddingRight = parseInt(computedStyle.paddingRight, 10) || 0;
        res.paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
        res.paddingBottom = parseInt(computedStyle.paddingBottom, 10) || 0;
    }
    return res;
}
function computeInnerRect(el, goWithinPadding) {
    if (goWithinPadding === void 0) { goWithinPadding = false; }
    var outerRect = computeRect(el);
    var edges = computeEdges(el, goWithinPadding);
    var res = {
        left: outerRect.left + edges.borderLeft + edges.scrollbarLeft,
        right: outerRect.right - edges.borderRight - edges.scrollbarRight,
        top: outerRect.top + edges.borderTop,
        bottom: outerRect.bottom - edges.borderBottom - edges.scrollbarBottom
    };
    if (goWithinPadding) {
        res.left += edges.paddingLeft;
        res.right -= edges.paddingRight;
        res.top += edges.paddingTop;
        res.bottom -= edges.paddingBottom;
    }
    return res;
}
function computeRect(el) {
    var rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.pageXOffset,
        top: rect.top + window.pageYOffset,
        right: rect.right + window.pageXOffset,
        bottom: rect.bottom + window.pageYOffset
    };
}
function computeViewportRect() {
    return {
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        top: window.pageYOffset,
        bottom: window.pageYOffset + document.documentElement.clientHeight
    };
}
function computeHeightAndMargins(el) {
    return el.getBoundingClientRect().height + computeVMargins(el);
}
function computeVMargins(el) {
    var computed = window.getComputedStyle(el);
    return parseInt(computed.marginTop, 10) +
        parseInt(computed.marginBottom, 10);
}
// does not return window
function getClippingParents(el) {
    var parents = [];
    while (el instanceof HTMLElement) { // will stop when gets to document or null
        var computedStyle = window.getComputedStyle(el);
        if (computedStyle.position === 'fixed') {
            break;
        }
        if ((/(auto|scroll)/).test(computedStyle.overflow + computedStyle.overflowY + computedStyle.overflowX)) {
            parents.push(el);
        }
        el = el.parentNode;
    }
    return parents;
}
function computeClippingRect(el) {
    return getClippingParents(el)
        .map(function (el) {
        return computeInnerRect(el);
    })
        .concat(computeViewportRect())
        .reduce(function (rect0, rect1) {
        return intersectRects(rect0, rect1) || rect1; // should always intersect
    });
}

// Stops a mouse/touch event from doing it's native browser action
function preventDefault(ev) {
    ev.preventDefault();
}
// Event Delegation
// ----------------------------------------------------------------------------------------------------------------
function listenBySelector(container, eventType, selector, handler) {
    function realHandler(ev) {
        var matchedChild = elementClosest(ev.target, selector);
        if (matchedChild) {
            handler.call(matchedChild, ev, matchedChild);
        }
    }
    container.addEventListener(eventType, realHandler);
    return function () {
        container.removeEventListener(eventType, realHandler);
    };
}
function listenToHoverBySelector(container, selector, onMouseEnter, onMouseLeave) {
    var currentMatchedChild;
    return listenBySelector(container, 'mouseover', selector, function (ev, matchedChild) {
        if (matchedChild !== currentMatchedChild) {
            currentMatchedChild = matchedChild;
            onMouseEnter(ev, matchedChild);
            var realOnMouseLeave_1 = function (ev) {
                currentMatchedChild = null;
                onMouseLeave(ev, matchedChild);
                matchedChild.removeEventListener('mouseleave', realOnMouseLeave_1);
            };
            // listen to the next mouseleave, and then unattach
            matchedChild.addEventListener('mouseleave', realOnMouseLeave_1);
        }
    });
}
// Animation
// ----------------------------------------------------------------------------------------------------------------
var transitionEventNames = [
    'webkitTransitionEnd',
    'otransitionend',
    'oTransitionEnd',
    'msTransitionEnd',
    'transitionend'
];
// triggered only when the next single subsequent transition finishes
function whenTransitionDone(el, callback) {
    var realCallback = function (ev) {
        callback(ev);
        transitionEventNames.forEach(function (eventName) {
            el.removeEventListener(eventName, realCallback);
        });
    };
    transitionEventNames.forEach(function (eventName) {
        el.addEventListener(eventName, realCallback); // cross-browser way to determine when the transition finishes
    });
}

var DAY_IDS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
// Adding
function addWeeks(m, n) {
    var a = dateToUtcArray(m);
    a[2] += n * 7;
    return arrayToUtcDate(a);
}
function addDays(m, n) {
    var a = dateToUtcArray(m);
    a[2] += n;
    return arrayToUtcDate(a);
}
function addMs(m, n) {
    var a = dateToUtcArray(m);
    a[6] += n;
    return arrayToUtcDate(a);
}
// Diffing (all return floats)
function diffWeeks(m0, m1) {
    return diffDays(m0, m1) / 7;
}
function diffDays(m0, m1) {
    return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60 * 24);
}
function diffHours(m0, m1) {
    return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60);
}
function diffMinutes(m0, m1) {
    return (m1.valueOf() - m0.valueOf()) / (1000 * 60);
}
function diffSeconds(m0, m1) {
    return (m1.valueOf() - m0.valueOf()) / 1000;
}
function diffDayAndTime(m0, m1) {
    var m0day = startOfDay(m0);
    var m1day = startOfDay(m1);
    return {
        years: 0,
        months: 0,
        days: Math.round(diffDays(m0day, m1day)),
        milliseconds: (m1.valueOf() - m1day.valueOf()) - (m0.valueOf() - m0day.valueOf())
    };
}
// Diffing Whole Units
function diffWholeWeeks(m0, m1) {
    var d = diffWholeDays(m0, m1);
    if (d !== null && d % 7 === 0) {
        return d / 7;
    }
    return null;
}
function diffWholeDays(m0, m1) {
    if (timeAsMs(m0) === timeAsMs(m1)) {
        return Math.round(diffDays(m0, m1));
    }
    return null;
}
// Start-Of
function startOfDay(m) {
    return arrayToUtcDate([
        m.getUTCFullYear(),
        m.getUTCMonth(),
        m.getUTCDate()
    ]);
}
function startOfHour(m) {
    return arrayToUtcDate([
        m.getUTCFullYear(),
        m.getUTCMonth(),
        m.getUTCDate(),
        m.getUTCHours()
    ]);
}
function startOfMinute(m) {
    return arrayToUtcDate([
        m.getUTCFullYear(),
        m.getUTCMonth(),
        m.getUTCDate(),
        m.getUTCHours(),
        m.getUTCMinutes()
    ]);
}
function startOfSecond(m) {
    return arrayToUtcDate([
        m.getUTCFullYear(),
        m.getUTCMonth(),
        m.getUTCDate(),
        m.getUTCHours(),
        m.getUTCMinutes(),
        m.getUTCSeconds()
    ]);
}
// Week Computation
function weekOfYear(marker, dow, doy) {
    var y = marker.getUTCFullYear();
    var w = weekOfGivenYear(marker, y, dow, doy);
    if (w < 1) {
        return weekOfGivenYear(marker, y - 1, dow, doy);
    }
    var nextW = weekOfGivenYear(marker, y + 1, dow, doy);
    if (nextW >= 1) {
        return Math.min(w, nextW);
    }
    return w;
}
function weekOfGivenYear(marker, year, dow, doy) {
    var firstWeekStart = arrayToUtcDate([year, 0, 1 + firstWeekOffset(year, dow, doy)]);
    var dayStart = startOfDay(marker);
    var days = Math.round(diffDays(firstWeekStart, dayStart));
    return Math.floor(days / 7) + 1; // zero-indexed
}
// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    // first-week day -- which january is always in the first week (4 for iso, 1 for other)
    var fwd = 7 + dow - doy;
    // first-week day local weekday -- which local weekday is fwd
    var fwdlw = (7 + arrayToUtcDate([year, 0, fwd]).getUTCDay() - dow) % 7;
    return -fwdlw + fwd - 1;
}
// Array Conversion
function dateToLocalArray(date) {
    return [
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    ];
}
function arrayToLocalDate(a) {
    return new Date(a[0], a[1] || 0, a[2] == null ? 1 : a[2], // day of month
    a[3] || 0, a[4] || 0, a[5] || 0);
}
function dateToUtcArray(date) {
    return [
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds(),
        date.getUTCMilliseconds()
    ];
}
function arrayToUtcDate(a) {
    // according to web standards (and Safari), a month index is required.
    // massage if only given a year.
    if (a.length === 1) {
        a = a.concat([0]);
    }
    return new Date(Date.UTC.apply(Date, a));
}
// Other Utils
function isValidDate(m) {
    return !isNaN(m.valueOf());
}
function timeAsMs(m) {
    return m.getUTCHours() * 1000 * 60 * 60 +
        m.getUTCMinutes() * 1000 * 60 +
        m.getUTCSeconds() * 1000 +
        m.getUTCMilliseconds();
}

var INTERNAL_UNITS = ['years', 'months', 'days', 'milliseconds'];
var PARSE_RE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
// Parsing and Creation
function createDuration(input, unit) {
    var _a;
    if (typeof input === 'string') {
        return parseString(input);
    }
    else if (typeof input === 'object' && input) { // non-null object
        return normalizeObject(input);
    }
    else if (typeof input === 'number') {
        return normalizeObject((_a = {}, _a[unit || 'milliseconds'] = input, _a));
    }
    else {
        return null;
    }
}
function parseString(s) {
    var m = PARSE_RE.exec(s);
    if (m) {
        var sign = m[1] ? -1 : 1;
        return {
            years: 0,
            months: 0,
            days: sign * (m[2] ? parseInt(m[2], 10) : 0),
            milliseconds: sign * ((m[3] ? parseInt(m[3], 10) : 0) * 60 * 60 * 1000 + // hours
                (m[4] ? parseInt(m[4], 10) : 0) * 60 * 1000 + // minutes
                (m[5] ? parseInt(m[5], 10) : 0) * 1000 + // seconds
                (m[6] ? parseInt(m[6], 10) : 0) // ms
            )
        };
    }
    return null;
}
function normalizeObject(obj) {
    return {
        years: obj.years || obj.year || 0,
        months: obj.months || obj.month || 0,
        days: (obj.days || obj.day || 0) +
            getWeeksFromInput(obj) * 7,
        milliseconds: (obj.hours || obj.hour || 0) * 60 * 60 * 1000 + // hours
            (obj.minutes || obj.minute || 0) * 60 * 1000 + // minutes
            (obj.seconds || obj.second || 0) * 1000 + // seconds
            (obj.milliseconds || obj.millisecond || obj.ms || 0) // ms
    };
}
function getWeeksFromInput(obj) {
    return obj.weeks || obj.week || 0;
}
// Equality
function durationsEqual(d0, d1) {
    return d0.years === d1.years &&
        d0.months === d1.months &&
        d0.days === d1.days &&
        d0.milliseconds === d1.milliseconds;
}
function isSingleDay(dur) {
    return dur.years === 0 && dur.months === 0 && dur.days === 1 && dur.milliseconds === 0;
}
// Simple Math
function addDurations(d0, d1) {
    return {
        years: d0.years + d1.years,
        months: d0.months + d1.months,
        days: d0.days + d1.days,
        milliseconds: d0.milliseconds + d1.milliseconds
    };
}
function subtractDurations(d1, d0) {
    return {
        years: d1.years - d0.years,
        months: d1.months - d0.months,
        days: d1.days - d0.days,
        milliseconds: d1.milliseconds - d0.milliseconds
    };
}
function multiplyDuration(d, n) {
    return {
        years: d.years * n,
        months: d.months * n,
        days: d.days * n,
        milliseconds: d.milliseconds * n
    };
}
// Conversions
// "Rough" because they are based on average-case Gregorian months/years
function asRoughYears(dur) {
    return asRoughDays(dur) / 365;
}
function asRoughMonths(dur) {
    return asRoughDays(dur) / 30;
}
function asRoughDays(dur) {
    return asRoughMs(dur) / 864e5;
}
function asRoughMinutes(dur) {
    return asRoughMs(dur) / (1000 * 60);
}
function asRoughSeconds(dur) {
    return asRoughMs(dur) / 1000;
}
function asRoughMs(dur) {
    return dur.years * (365 * 864e5) +
        dur.months * (30 * 864e5) +
        dur.days * 864e5 +
        dur.milliseconds;
}
// Advanced Math
function wholeDivideDurations(numerator, denominator) {
    var res = null;
    for (var i = 0; i < INTERNAL_UNITS.length; i++) {
        var unit = INTERNAL_UNITS[i];
        if (denominator[unit]) {
            var localRes = numerator[unit] / denominator[unit];
            if (!isInt(localRes) || (res !== null && res !== localRes)) {
                return null;
            }
            res = localRes;
        }
        else if (numerator[unit]) {
            // needs to divide by something but can't!
            return null;
        }
    }
    return res;
}
function greatestDurationDenominator(dur, dontReturnWeeks) {
    var ms = dur.milliseconds;
    if (ms) {
        if (ms % 1000 !== 0) {
            return { unit: 'millisecond', value: ms };
        }
        if (ms % (1000 * 60) !== 0) {
            return { unit: 'second', value: ms / 1000 };
        }
        if (ms % (1000 * 60 * 60) !== 0) {
            return { unit: 'minute', value: ms / (1000 * 60) };
        }
        if (ms) {
            return { unit: 'hour', value: ms / (1000 * 60 * 60) };
        }
    }
    if (dur.days) {
        if (!dontReturnWeeks && dur.days % 7 === 0) {
            return { unit: 'week', value: dur.days / 7 };
        }
        return { unit: 'day', value: dur.days };
    }
    if (dur.months) {
        return { unit: 'month', value: dur.months };
    }
    if (dur.years) {
        return { unit: 'year', value: dur.years };
    }
    return { unit: 'millisecond', value: 0 };
}

/* FullCalendar-specific DOM Utilities
----------------------------------------------------------------------------------------------------------------------*/
// Given the scrollbar widths of some other container, create borders/margins on rowEls in order to match the left
// and right space that was offset by the scrollbars. A 1-pixel border first, then margin beyond that.
function compensateScroll(rowEl, scrollbarWidths) {
    if (scrollbarWidths.left) {
        applyStyle(rowEl, {
            borderLeftWidth: 1,
            marginLeft: scrollbarWidths.left - 1
        });
    }
    if (scrollbarWidths.right) {
        applyStyle(rowEl, {
            borderRightWidth: 1,
            marginRight: scrollbarWidths.right - 1
        });
    }
}
// Undoes compensateScroll and restores all borders/margins
function uncompensateScroll(rowEl) {
    applyStyle(rowEl, {
        marginLeft: '',
        marginRight: '',
        borderLeftWidth: '',
        borderRightWidth: ''
    });
}
// Make the mouse cursor express that an event is not allowed in the current area
function disableCursor() {
    document.body.classList.add('fc-not-allowed');
}
// Returns the mouse cursor to its original look
function enableCursor() {
    document.body.classList.remove('fc-not-allowed');
}
// Given a total available height to fill, have `els` (essentially child rows) expand to accomodate.
// By default, all elements that are shorter than the recommended height are expanded uniformly, not considering
// any other els that are already too tall. if `shouldRedistribute` is on, it considers these tall rows and
// reduces the available height.
function distributeHeight(els, availableHeight, shouldRedistribute) {
    // *FLOORING NOTE*: we floor in certain places because zoom can give inaccurate floating-point dimensions,
    // and it is better to be shorter than taller, to avoid creating unnecessary scrollbars.
    var minOffset1 = Math.floor(availableHeight / els.length); // for non-last element
    var minOffset2 = Math.floor(availableHeight - minOffset1 * (els.length - 1)); // for last element *FLOORING NOTE*
    var flexEls = []; // elements that are allowed to expand. array of DOM nodes
    var flexOffsets = []; // amount of vertical space it takes up
    var flexHeights = []; // actual css height
    var usedHeight = 0;
    undistributeHeight(els); // give all elements their natural height
    // find elements that are below the recommended height (expandable).
    // important to query for heights in a single first pass (to avoid reflow oscillation).
    els.forEach(function (el, i) {
        var minOffset = i === els.length - 1 ? minOffset2 : minOffset1;
        var naturalHeight = el.getBoundingClientRect().height;
        var naturalOffset = naturalHeight + computeVMargins(el);
        if (naturalOffset < minOffset) {
            flexEls.push(el);
            flexOffsets.push(naturalOffset);
            flexHeights.push(naturalHeight);
        }
        else {
            // this element stretches past recommended height (non-expandable). mark the space as occupied.
            usedHeight += naturalOffset;
        }
    });
    // readjust the recommended height to only consider the height available to non-maxed-out rows.
    if (shouldRedistribute) {
        availableHeight -= usedHeight;
        minOffset1 = Math.floor(availableHeight / flexEls.length);
        minOffset2 = Math.floor(availableHeight - minOffset1 * (flexEls.length - 1)); // *FLOORING NOTE*
    }
    // assign heights to all expandable elements
    flexEls.forEach(function (el, i) {
        var minOffset = i === flexEls.length - 1 ? minOffset2 : minOffset1;
        var naturalOffset = flexOffsets[i];
        var naturalHeight = flexHeights[i];
        var newHeight = minOffset - (naturalOffset - naturalHeight); // subtract the margin/padding
        if (naturalOffset < minOffset) { // we check this again because redistribution might have changed things
            el.style.height = newHeight + 'px';
        }
    });
}
// Undoes distrubuteHeight, restoring all els to their natural height
function undistributeHeight(els) {
    els.forEach(function (el) {
        el.style.height = '';
    });
}
// Given `els`, a set of <td> cells, find the cell with the largest natural width and set the widths of all the
// cells to be that width.
// PREREQUISITE: if you want a cell to take up width, it needs to have a single inner element w/ display:inline
function matchCellWidths(els) {
    var maxInnerWidth = 0;
    els.forEach(function (el) {
        var innerEl = el.firstChild; // hopefully an element
        if (innerEl instanceof HTMLElement) {
            var innerWidth_1 = innerEl.getBoundingClientRect().width;
            if (innerWidth_1 > maxInnerWidth) {
                maxInnerWidth = innerWidth_1;
            }
        }
    });
    maxInnerWidth++; // sometimes not accurate of width the text needs to stay on one line. insurance
    els.forEach(function (el) {
        el.style.width = maxInnerWidth + 'px';
    });
    return maxInnerWidth;
}
// Given one element that resides inside another,
// Subtracts the height of the inner element from the outer element.
function subtractInnerElHeight(outerEl, innerEl) {
    // effin' IE8/9/10/11 sometimes returns 0 for dimensions. this weird hack was the only thing that worked
    var reflowStyleProps = {
        position: 'relative',
        left: -1 // ensure reflow in case the el was already relative. negative is less likely to cause new scroll
    };
    applyStyle(outerEl, reflowStyleProps);
    applyStyle(innerEl, reflowStyleProps);
    var diff = // grab the dimensions
     outerEl.getBoundingClientRect().height -
        innerEl.getBoundingClientRect().height;
    // undo hack
    var resetStyleProps = { position: '', left: '' };
    applyStyle(outerEl, resetStyleProps);
    applyStyle(innerEl, resetStyleProps);
    return diff;
}
/* Selection
----------------------------------------------------------------------------------------------------------------------*/
function preventSelection(el) {
    el.classList.add('fc-unselectable');
    el.addEventListener('selectstart', preventDefault);
}
function allowSelection(el) {
    el.classList.remove('fc-unselectable');
    el.removeEventListener('selectstart', preventDefault);
}
/* Context Menu
----------------------------------------------------------------------------------------------------------------------*/
function preventContextMenu(el) {
    el.addEventListener('contextmenu', preventDefault);
}
function allowContextMenu(el) {
    el.removeEventListener('contextmenu', preventDefault);
}
/* Object Ordering by Field
----------------------------------------------------------------------------------------------------------------------*/
function parseFieldSpecs(input) {
    var specs = [];
    var tokens = [];
    var i;
    var token;
    if (typeof input === 'string') {
        tokens = input.split(/\s*,\s*/);
    }
    else if (typeof input === 'function') {
        tokens = [input];
    }
    else if (Array.isArray(input)) {
        tokens = input;
    }
    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        if (typeof token === 'string') {
            specs.push(token.charAt(0) === '-' ?
                { field: token.substring(1), order: -1 } :
                { field: token, order: 1 });
        }
        else if (typeof token === 'function') {
            specs.push({ func: token });
        }
    }
    return specs;
}
function compareByFieldSpecs(obj0, obj1, fieldSpecs) {
    var i;
    var cmp;
    for (i = 0; i < fieldSpecs.length; i++) {
        cmp = compareByFieldSpec(obj0, obj1, fieldSpecs[i]);
        if (cmp) {
            return cmp;
        }
    }
    return 0;
}
function compareByFieldSpec(obj0, obj1, fieldSpec) {
    if (fieldSpec.func) {
        return fieldSpec.func(obj0, obj1);
    }
    return flexibleCompare(obj0[fieldSpec.field], obj1[fieldSpec.field])
        * (fieldSpec.order || 1);
}
function flexibleCompare(a, b) {
    if (!a && !b) {
        return 0;
    }
    if (b == null) {
        return -1;
    }
    if (a == null) {
        return 1;
    }
    if (typeof a === 'string' || typeof b === 'string') {
        return String(a).localeCompare(String(b));
    }
    return a - b;
}
/* String Utilities
----------------------------------------------------------------------------------------------------------------------*/
function capitaliseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function padStart(val, len) {
    var s = String(val);
    return '000'.substr(0, len - s.length) + s;
}
/* Number Utilities
----------------------------------------------------------------------------------------------------------------------*/
function compareNumbers(a, b) {
    return a - b;
}
function isInt(n) {
    return n % 1 === 0;
}
/* Weird Utilities
----------------------------------------------------------------------------------------------------------------------*/
function applyAll(functions, thisObj, args) {
    if (typeof functions === 'function') { // supplied a single function
        functions = [functions];
    }
    if (functions) {
        var i = void 0;
        var ret = void 0;
        for (i = 0; i < functions.length; i++) {
            ret = functions[i].apply(thisObj, args) || ret;
        }
        return ret;
    }
}
function firstDefined() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 0; i < args.length; i++) {
        if (args[i] !== undefined) {
            return args[i];
        }
    }
}
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// https://github.com/jashkenas/underscore/blob/1.6.0/underscore.js#L714
function debounce(func, wait) {
    var timeout;
    var args;
    var context;
    var timestamp;
    var result;
    var later = function () {
        var last = new Date().valueOf() - timestamp;
        if (last < wait) {
            timeout = setTimeout(later, wait - last);
        }
        else {
            timeout = null;
            result = func.apply(context, args);
            context = args = null;
        }
    };
    return function () {
        context = this;
        args = arguments;
        timestamp = new Date().valueOf();
        if (!timeout) {
            timeout = setTimeout(later, wait);
        }
        return result;
    };
}
// Number and Boolean are only types that defaults or not computed for
// TODO: write more comments
function refineProps(rawProps, processors, defaults, leftoverProps) {
    if (defaults === void 0) { defaults = {}; }
    var refined = {};
    for (var key in processors) {
        var processor = processors[key];
        if (rawProps[key] !== undefined) {
            // found
            if (processor === Function) {
                refined[key] = typeof rawProps[key] === 'function' ? rawProps[key] : null;
            }
            else if (processor) { // a refining function?
                refined[key] = processor(rawProps[key]);
            }
            else {
                refined[key] = rawProps[key];
            }
        }
        else if (defaults[key] !== undefined) {
            // there's an explicit default
            refined[key] = defaults[key];
        }
        else {
            // must compute a default
            if (processor === String) {
                refined[key] = ''; // empty string is default for String
            }
            else if (!processor || processor === Number || processor === Boolean || processor === Function) {
                refined[key] = null; // assign null for other non-custom processor funcs
            }
            else {
                refined[key] = processor(null); // run the custom processor func
            }
        }
    }
    if (leftoverProps) {
        for (var key in rawProps) {
            if (processors[key] === undefined) {
                leftoverProps[key] = rawProps[key];
            }
        }
    }
    return refined;
}
/* Date stuff that doesn't belong in datelib core
----------------------------------------------------------------------------------------------------------------------*/
// given a timed range, computes an all-day range that has the same exact duration,
// but whose start time is aligned with the start of the day.
function computeAlignedDayRange(timedRange) {
    var dayCnt = Math.floor(diffDays(timedRange.start, timedRange.end)) || 1;
    var start = startOfDay(timedRange.start);
    var end = addDays(start, dayCnt);
    return { start: start, end: end };
}
// given a timed range, computes an all-day range based on how for the end date bleeds into the next day
// TODO: give nextDayThreshold a default arg
function computeVisibleDayRange(timedRange, nextDayThreshold) {
    if (nextDayThreshold === void 0) { nextDayThreshold = createDuration(0); }
    var startDay = null;
    var endDay = null;
    if (timedRange.end) {
        endDay = startOfDay(timedRange.end);
        var endTimeMS = timedRange.end.valueOf() - endDay.valueOf(); // # of milliseconds into `endDay`
        // If the end time is actually inclusively part of the next day and is equal to or
        // beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
        // Otherwise, leaving it as inclusive will cause it to exclude `endDay`.
        if (endTimeMS && endTimeMS >= asRoughMs(nextDayThreshold)) {
            endDay = addDays(endDay, 1);
        }
    }
    if (timedRange.start) {
        startDay = startOfDay(timedRange.start); // the beginning of the day the range starts
        // If end is within `startDay` but not past nextDayThreshold, assign the default duration of one day.
        if (endDay && endDay <= startDay) {
            endDay = addDays(startDay, 1);
        }
    }
    return { start: startDay, end: endDay };
}
// spans from one day into another?
function isMultiDayRange(range) {
    var visibleRange = computeVisibleDayRange(range);
    return diffDays(visibleRange.start, visibleRange.end) > 1;
}
function diffDates(date0, date1, dateEnv, largeUnit) {
    if (largeUnit === 'year') {
        return createDuration(dateEnv.diffWholeYears(date0, date1), 'year');
    }
    else if (largeUnit === 'month') {
        return createDuration(dateEnv.diffWholeMonths(date0, date1), 'month');
    }
    else {
        return diffDayAndTime(date0, date1); // returns a duration
    }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function parseRecurring(eventInput, allDayDefault, dateEnv, recurringTypes, leftovers) {
    for (var i = 0; i < recurringTypes.length; i++) {
        var localLeftovers = {};
        var parsed = recurringTypes[i].parse(eventInput, localLeftovers, dateEnv);
        if (parsed) {
            var allDay = localLeftovers.allDay;
            delete localLeftovers.allDay; // remove from leftovers
            if (allDay == null) {
                allDay = allDayDefault;
                if (allDay == null) {
                    allDay = parsed.allDayGuess;
                    if (allDay == null) {
                        allDay = false;
                    }
                }
            }
            __assign(leftovers, localLeftovers);
            return {
                allDay: allDay,
                duration: parsed.duration,
                typeData: parsed.typeData,
                typeId: i
            };
        }
    }
    return null;
}
/*
Event MUST have a recurringDef
*/
function expandRecurringRanges(eventDef, duration, framingRange, dateEnv, recurringTypes) {
    var typeDef = recurringTypes[eventDef.recurringDef.typeId];
    var markers = typeDef.expand(eventDef.recurringDef.typeData, {
        start: dateEnv.subtract(framingRange.start, duration),
        end: framingRange.end
    }, dateEnv);
    // the recurrence plugins don't guarantee that all-day events are start-of-day, so we have to
    if (eventDef.allDay) {
        markers = markers.map(startOfDay);
    }
    return markers;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
// Merges an array of objects into a single object.
// The second argument allows for an array of property names who's object values will be merged together.
function mergeProps(propObjs, complexProps) {
    var dest = {};
    var i;
    var name;
    var complexObjs;
    var j;
    var val;
    var props;
    if (complexProps) {
        for (i = 0; i < complexProps.length; i++) {
            name = complexProps[i];
            complexObjs = [];
            // collect the trailing object values, stopping when a non-object is discovered
            for (j = propObjs.length - 1; j >= 0; j--) {
                val = propObjs[j][name];
                if (typeof val === 'object' && val) { // non-null object
                    complexObjs.unshift(val);
                }
                else if (val !== undefined) {
                    dest[name] = val; // if there were no objects, this value will be used
                    break;
                }
            }
            // if the trailing values were objects, use the merged value
            if (complexObjs.length) {
                dest[name] = mergeProps(complexObjs);
            }
        }
    }
    // copy values into the destination, going from last to first
    for (i = propObjs.length - 1; i >= 0; i--) {
        props = propObjs[i];
        for (name in props) {
            if (!(name in dest)) { // if already assigned by previous props or complex props, don't reassign
                dest[name] = props[name];
            }
        }
    }
    return dest;
}
function filterHash(hash, func) {
    var filtered = {};
    for (var key in hash) {
        if (func(hash[key], key)) {
            filtered[key] = hash[key];
        }
    }
    return filtered;
}
function mapHash(hash, func) {
    var newHash = {};
    for (var key in hash) {
        newHash[key] = func(hash[key], key);
    }
    return newHash;
}
function arrayToHash(a) {
    var hash = {};
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var item = a_1[_i];
        hash[item] = true;
    }
    return hash;
}
function hashValuesToArray(obj) {
    var a = [];
    for (var key in obj) {
        a.push(obj[key]);
    }
    return a;
}
function isPropsEqual(obj0, obj1) {
    for (var key in obj0) {
        if (hasOwnProperty.call(obj0, key)) {
            if (!(key in obj1)) {
                return false;
            }
        }
    }
    for (var key in obj1) {
        if (hasOwnProperty.call(obj1, key)) {
            if (obj0[key] !== obj1[key]) {
                return false;
            }
        }
    }
    return true;
}

function parseEvents(rawEvents, sourceId, calendar, allowOpenRange) {
    var eventStore = createEmptyEventStore();
    for (var _i = 0, rawEvents_1 = rawEvents; _i < rawEvents_1.length; _i++) {
        var rawEvent = rawEvents_1[_i];
        var tuple = parseEvent(rawEvent, sourceId, calendar, allowOpenRange);
        if (tuple) {
            eventTupleToStore(tuple, eventStore);
        }
    }
    return eventStore;
}
function eventTupleToStore(tuple, eventStore) {
    if (eventStore === void 0) { eventStore = createEmptyEventStore(); }
    eventStore.defs[tuple.def.defId] = tuple.def;
    if (tuple.instance) {
        eventStore.instances[tuple.instance.instanceId] = tuple.instance;
    }
    return eventStore;
}
function expandRecurring(eventStore, framingRange, calendar) {
    var dateEnv = calendar.dateEnv;
    var defs = eventStore.defs, instances = eventStore.instances;
    // remove existing recurring instances
    instances = filterHash(instances, function (instance) {
        return !defs[instance.defId].recurringDef;
    });
    for (var defId in defs) {
        var def = defs[defId];
        if (def.recurringDef) {
            var duration = def.recurringDef.duration;
            if (!duration) {
                duration = def.allDay ?
                    calendar.defaultAllDayEventDuration :
                    calendar.defaultTimedEventDuration;
            }
            var starts = expandRecurringRanges(def, duration, framingRange, calendar.dateEnv, calendar.pluginSystem.hooks.recurringTypes);
            for (var _i = 0, starts_1 = starts; _i < starts_1.length; _i++) {
                var start = starts_1[_i];
                var instance = createEventInstance(defId, {
                    start: start,
                    end: dateEnv.add(start, duration)
                });
                instances[instance.instanceId] = instance;
            }
        }
    }
    return { defs: defs, instances: instances };
}
// retrieves events that have the same groupId as the instance specified by `instanceId`
// or they are the same as the instance.
// why might instanceId not be in the store? an event from another calendar?
function getRelevantEvents(eventStore, instanceId) {
    var instance = eventStore.instances[instanceId];
    if (instance) {
        var def_1 = eventStore.defs[instance.defId];
        // get events/instances with same group
        var newStore = filterEventStoreDefs(eventStore, function (lookDef) {
            return isEventDefsGrouped(def_1, lookDef);
        });
        // add the original
        // TODO: wish we could use eventTupleToStore or something like it
        newStore.defs[def_1.defId] = def_1;
        newStore.instances[instance.instanceId] = instance;
        return newStore;
    }
    return createEmptyEventStore();
}
function isEventDefsGrouped(def0, def1) {
    return Boolean(def0.groupId && def0.groupId === def1.groupId);
}
function transformRawEvents(rawEvents, eventSource, calendar) {
    var calEachTransform = calendar.opt('eventDataTransform');
    var sourceEachTransform = eventSource ? eventSource.eventDataTransform : null;
    if (sourceEachTransform) {
        rawEvents = transformEachRawEvent(rawEvents, sourceEachTransform);
    }
    if (calEachTransform) {
        rawEvents = transformEachRawEvent(rawEvents, calEachTransform);
    }
    return rawEvents;
}
function transformEachRawEvent(rawEvents, func) {
    var refinedEvents;
    if (!func) {
        refinedEvents = rawEvents;
    }
    else {
        refinedEvents = [];
        for (var _i = 0, rawEvents_2 = rawEvents; _i < rawEvents_2.length; _i++) {
            var rawEvent = rawEvents_2[_i];
            var refinedEvent = func(rawEvent);
            if (refinedEvent) {
                refinedEvents.push(refinedEvent);
            }
            else if (refinedEvent == null) {
                refinedEvents.push(rawEvent);
            } // if a different falsy value, do nothing
        }
    }
    return refinedEvents;
}
function createEmptyEventStore() {
    return { defs: {}, instances: {} };
}
function mergeEventStores(store0, store1) {
    return {
        defs: __assign({}, store0.defs, store1.defs),
        instances: __assign({}, store0.instances, store1.instances)
    };
}
function filterEventStoreDefs(eventStore, filterFunc) {
    var defs = filterHash(eventStore.defs, filterFunc);
    var instances = filterHash(eventStore.instances, function (instance) {
        return defs[instance.defId]; // still exists?
    });
    return { defs: defs, instances: instances };
}

function parseRange(input, dateEnv) {
    var start = null;
    var end = null;
    if (input.start) {
        start = dateEnv.createMarker(input.start);
    }
    if (input.end) {
        end = dateEnv.createMarker(input.end);
    }
    if (!start && !end) {
        return null;
    }
    if (start && end && end < start) {
        return null;
    }
    return { start: start, end: end };
}
// SIDE-EFFECT: will mutate ranges.
// Will return a new array result.
function invertRanges(ranges, constraintRange) {
    var invertedRanges = [];
    var start = constraintRange.start; // the end of the previous range. the start of the new range
    var i;
    var dateRange;
    // ranges need to be in order. required for our date-walking algorithm
    ranges.sort(compareRanges);
    for (i = 0; i < ranges.length; i++) {
        dateRange = ranges[i];
        // add the span of time before the event (if there is any)
        if (dateRange.start > start) { // compare millisecond time (skip any ambig logic)
            invertedRanges.push({ start: start, end: dateRange.start });
        }
        if (dateRange.end > start) {
            start = dateRange.end;
        }
    }
    // add the span of time after the last event (if there is any)
    if (start < constraintRange.end) { // compare millisecond time (skip any ambig logic)
        invertedRanges.push({ start: start, end: constraintRange.end });
    }
    return invertedRanges;
}
function compareRanges(range0, range1) {
    return range0.start.valueOf() - range1.start.valueOf(); // earlier ranges go first
}
function intersectRanges(range0, range1) {
    var start = range0.start;
    var end = range0.end;
    var newRange = null;
    if (range1.start !== null) {
        if (start === null) {
            start = range1.start;
        }
        else {
            start = new Date(Math.max(start.valueOf(), range1.start.valueOf()));
        }
    }
    if (range1.end != null) {
        if (end === null) {
            end = range1.end;
        }
        else {
            end = new Date(Math.min(end.valueOf(), range1.end.valueOf()));
        }
    }
    if (start === null || end === null || start < end) {
        newRange = { start: start, end: end };
    }
    return newRange;
}
function rangesEqual(range0, range1) {
    return (range0.start === null ? null : range0.start.valueOf()) === (range1.start === null ? null : range1.start.valueOf()) &&
        (range0.end === null ? null : range0.end.valueOf()) === (range1.end === null ? null : range1.end.valueOf());
}
function rangesIntersect(range0, range1) {
    return (range0.end === null || range1.start === null || range0.end > range1.start) &&
        (range0.start === null || range1.end === null || range0.start < range1.end);
}
function rangeContainsRange(outerRange, innerRange) {
    return (outerRange.start === null || (innerRange.start !== null && innerRange.start >= outerRange.start)) &&
        (outerRange.end === null || (innerRange.end !== null && innerRange.end <= outerRange.end));
}
function rangeContainsMarker(range, date) {
    return (range.start === null || date >= range.start) &&
        (range.end === null || date < range.end);
}
// If the given date is not within the given range, move it inside.
// (If it's past the end, make it one millisecond before the end).
function constrainMarkerToRange(date, range) {
    if (range.start != null && date < range.start) {
        return range.start;
    }
    if (range.end != null && date >= range.end) {
        return new Date(range.end.valueOf() - 1);
    }
    return date;
}

function removeExact(array, exactVal) {
    var removeCnt = 0;
    var i = 0;
    while (i < array.length) {
        if (array[i] === exactVal) {
            array.splice(i, 1);
            removeCnt++;
        }
        else {
            i++;
        }
    }
    return removeCnt;
}
function isArraysEqual(a0, a1) {
    var len = a0.length;
    var i;
    if (len !== a1.length) { // not array? or not same length?
        return false;
    }
    for (i = 0; i < len; i++) {
        if (a0[i] !== a1[i]) {
            return false;
        }
    }
    return true;
}

function memoize(workerFunc) {
    var args;
    var res;
    return function () {
        if (!args || !isArraysEqual(args, arguments)) {
            args = arguments;
            res = workerFunc.apply(this, arguments);
        }
        return res;
    };
}
/*
always executes the workerFunc, but if the result is equal to the previous result,
return the previous result instead.
*/
function memoizeOutput(workerFunc, equalityFunc) {
    var cachedRes = null;
    return function () {
        var newRes = workerFunc.apply(this, arguments);
        if (cachedRes === null || !(cachedRes === newRes || equalityFunc(cachedRes, newRes))) {
            cachedRes = newRes;
        }
        return cachedRes;
    };
}

var EXTENDED_SETTINGS_AND_SEVERITIES = {
    week: 3,
    separator: 0,
    omitZeroMinute: 0,
    meridiem: 0,
    omitCommas: 0
};
var STANDARD_DATE_PROP_SEVERITIES = {
    timeZoneName: 7,
    era: 6,
    year: 5,
    month: 4,
    day: 2,
    weekday: 2,
    hour: 1,
    minute: 1,
    second: 1
};
var MERIDIEM_RE = /\s*([ap])\.?m\.?/i; // eats up leading spaces too
var COMMA_RE = /,/g; // we need re for globalness
var MULTI_SPACE_RE = /\s+/g;
var LTR_RE = /\u200e/g; // control character
var UTC_RE = /UTC|GMT/;
var NativeFormatter = /** @class */ (function () {
    function NativeFormatter(formatSettings) {
        var standardDateProps = {};
        var extendedSettings = {};
        var severity = 0;
        for (var name_1 in formatSettings) {
            if (name_1 in EXTENDED_SETTINGS_AND_SEVERITIES) {
                extendedSettings[name_1] = formatSettings[name_1];
                severity = Math.max(EXTENDED_SETTINGS_AND_SEVERITIES[name_1], severity);
            }
            else {
                standardDateProps[name_1] = formatSettings[name_1];
                if (name_1 in STANDARD_DATE_PROP_SEVERITIES) {
                    severity = Math.max(STANDARD_DATE_PROP_SEVERITIES[name_1], severity);
                }
            }
        }
        this.standardDateProps = standardDateProps;
        this.extendedSettings = extendedSettings;
        this.severity = severity;
        this.buildFormattingFunc = memoize(buildFormattingFunc);
    }
    NativeFormatter.prototype.format = function (date, context) {
        return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, context)(date);
    };
    NativeFormatter.prototype.formatRange = function (start, end, context) {
        var _a = this, standardDateProps = _a.standardDateProps, extendedSettings = _a.extendedSettings;
        var diffSeverity = computeMarkerDiffSeverity(start.marker, end.marker, context.calendarSystem);
        if (!diffSeverity) {
            return this.format(start, context);
        }
        var biggestUnitForPartial = diffSeverity;
        if (biggestUnitForPartial > 1 && // the two dates are different in a way that's larger scale than time
            (standardDateProps.year === 'numeric' || standardDateProps.year === '2-digit') &&
            (standardDateProps.month === 'numeric' || standardDateProps.month === '2-digit') &&
            (standardDateProps.day === 'numeric' || standardDateProps.day === '2-digit')) {
            biggestUnitForPartial = 1; // make it look like the dates are only different in terms of time
        }
        var full0 = this.format(start, context);
        var full1 = this.format(end, context);
        if (full0 === full1) {
            return full0;
        }
        var partialDateProps = computePartialFormattingOptions(standardDateProps, biggestUnitForPartial);
        var partialFormattingFunc = buildFormattingFunc(partialDateProps, extendedSettings, context);
        var partial0 = partialFormattingFunc(start);
        var partial1 = partialFormattingFunc(end);
        var insertion = findCommonInsertion(full0, partial0, full1, partial1);
        var separator = extendedSettings.separator || '';
        if (insertion) {
            return insertion.before + partial0 + separator + partial1 + insertion.after;
        }
        return full0 + separator + full1;
    };
    NativeFormatter.prototype.getLargestUnit = function () {
        switch (this.severity) {
            case 7:
            case 6:
            case 5:
                return 'year';
            case 4:
                return 'month';
            case 3:
                return 'week';
            default:
                return 'day';
        }
    };
    return NativeFormatter;
}());
function buildFormattingFunc(standardDateProps, extendedSettings, context) {
    var standardDatePropCnt = Object.keys(standardDateProps).length;
    if (standardDatePropCnt === 1 && standardDateProps.timeZoneName === 'short') {
        return function (date) {
            return formatTimeZoneOffset(date.timeZoneOffset);
        };
    }
    if (standardDatePropCnt === 0 && extendedSettings.week) {
        return function (date) {
            return formatWeekNumber(context.computeWeekNumber(date.marker), context.weekLabel, context.locale, extendedSettings.week);
        };
    }
    return buildNativeFormattingFunc(standardDateProps, extendedSettings, context);
}
function buildNativeFormattingFunc(standardDateProps, extendedSettings, context) {
    standardDateProps = __assign({}, standardDateProps); // copy
    extendedSettings = __assign({}, extendedSettings); // copy
    sanitizeSettings(standardDateProps, extendedSettings);
    standardDateProps.timeZone = 'UTC'; // we leverage the only guaranteed timeZone for our UTC markers
    var normalFormat = new Intl.DateTimeFormat(context.locale.codes, standardDateProps);
    var zeroFormat; // needed?
    if (extendedSettings.omitZeroMinute) {
        var zeroProps = __assign({}, standardDateProps);
        delete zeroProps.minute; // seconds and ms were already considered in sanitizeSettings
        zeroFormat = new Intl.DateTimeFormat(context.locale.codes, zeroProps);
    }
    return function (date) {
        var marker = date.marker;
        var format;
        if (zeroFormat && !marker.getUTCMinutes()) {
            format = zeroFormat;
        }
        else {
            format = normalFormat;
        }
        var s = format.format(marker);
        return postProcess(s, date, standardDateProps, extendedSettings, context);
    };
}
function sanitizeSettings(standardDateProps, extendedSettings) {
    // deal with a browser inconsistency where formatting the timezone
    // requires that the hour/minute be present.
    if (standardDateProps.timeZoneName) {
        if (!standardDateProps.hour) {
            standardDateProps.hour = '2-digit';
        }
        if (!standardDateProps.minute) {
            standardDateProps.minute = '2-digit';
        }
    }
    // only support short timezone names
    if (standardDateProps.timeZoneName === 'long') {
        standardDateProps.timeZoneName = 'short';
    }
    // if requesting to display seconds, MUST display minutes
    if (extendedSettings.omitZeroMinute && (standardDateProps.second || standardDateProps.millisecond)) {
        delete extendedSettings.omitZeroMinute;
    }
}
function postProcess(s, date, standardDateProps, extendedSettings, context) {
    s = s.replace(LTR_RE, ''); // remove left-to-right control chars. do first. good for other regexes
    if (standardDateProps.timeZoneName === 'short') {
        s = injectTzoStr(s, (context.timeZone === 'UTC' || date.timeZoneOffset == null) ?
            'UTC' : // important to normalize for IE, which does "GMT"
            formatTimeZoneOffset(date.timeZoneOffset));
    }
    if (extendedSettings.omitCommas) {
        s = s.replace(COMMA_RE, '').trim();
    }
    if (extendedSettings.omitZeroMinute) {
        s = s.replace(':00', ''); // zeroFormat doesn't always achieve this
    }
    // ^ do anything that might create adjacent spaces before this point,
    // because MERIDIEM_RE likes to eat up loading spaces
    if (extendedSettings.meridiem === false) {
        s = s.replace(MERIDIEM_RE, '').trim();
    }
    else if (extendedSettings.meridiem === 'narrow') { // a/p
        s = s.replace(MERIDIEM_RE, function (m0, m1) {
            return m1.toLocaleLowerCase();
        });
    }
    else if (extendedSettings.meridiem === 'short') { // am/pm
        s = s.replace(MERIDIEM_RE, function (m0, m1) {
            return m1.toLocaleLowerCase() + 'm';
        });
    }
    else if (extendedSettings.meridiem === 'lowercase') { // other meridiem transformers already converted to lowercase
        s = s.replace(MERIDIEM_RE, function (m0) {
            return m0.toLocaleLowerCase();
        });
    }
    s = s.replace(MULTI_SPACE_RE, ' ');
    s = s.trim();
    return s;
}
function injectTzoStr(s, tzoStr) {
    var replaced = false;
    s = s.replace(UTC_RE, function () {
        replaced = true;
        return tzoStr;
    });
    // IE11 doesn't include UTC/GMT in the original string, so append to end
    if (!replaced) {
        s += ' ' + tzoStr;
    }
    return s;
}
function formatWeekNumber(num, weekLabel, locale, display) {
    var parts = [];
    if (display === 'narrow') {
        parts.push(weekLabel);
    }
    else if (display === 'short') {
        parts.push(weekLabel, ' ');
    }
    // otherwise, considered 'numeric'
    parts.push(locale.simpleNumberFormat.format(num));
    if (locale.options.isRtl) { // TODO: use control characters instead?
        parts.reverse();
    }
    return parts.join('');
}
// Range Formatting Utils
// 0 = exactly the same
// 1 = different by time
// and bigger
function computeMarkerDiffSeverity(d0, d1, ca) {
    if (ca.getMarkerYear(d0) !== ca.getMarkerYear(d1)) {
        return 5;
    }
    if (ca.getMarkerMonth(d0) !== ca.getMarkerMonth(d1)) {
        return 4;
    }
    if (ca.getMarkerDay(d0) !== ca.getMarkerDay(d1)) {
        return 2;
    }
    if (timeAsMs(d0) !== timeAsMs(d1)) {
        return 1;
    }
    return 0;
}
function computePartialFormattingOptions(options, biggestUnit) {
    var partialOptions = {};
    for (var name_2 in options) {
        if (!(name_2 in STANDARD_DATE_PROP_SEVERITIES) || // not a date part prop (like timeZone)
            STANDARD_DATE_PROP_SEVERITIES[name_2] <= biggestUnit) {
            partialOptions[name_2] = options[name_2];
        }
    }
    return partialOptions;
}
function findCommonInsertion(full0, partial0, full1, partial1) {
    var i0 = 0;
    while (i0 < full0.length) {
        var found0 = full0.indexOf(partial0, i0);
        if (found0 === -1) {
            break;
        }
        var before0 = full0.substr(0, found0);
        i0 = found0 + partial0.length;
        var after0 = full0.substr(i0);
        var i1 = 0;
        while (i1 < full1.length) {
            var found1 = full1.indexOf(partial1, i1);
            if (found1 === -1) {
                break;
            }
            var before1 = full1.substr(0, found1);
            i1 = found1 + partial1.length;
            var after1 = full1.substr(i1);
            if (before0 === before1 && after0 === after1) {
                return {
                    before: before0,
                    after: after0
                };
            }
        }
    }
    return null;
}

/*
TODO: fix the terminology of "formatter" vs "formatting func"
*/
/*
At the time of instantiation, this object does not know which cmd-formatting system it will use.
It receives this at the time of formatting, as a setting.
*/
var CmdFormatter = /** @class */ (function () {
    function CmdFormatter(cmdStr, separator) {
        this.cmdStr = cmdStr;
        this.separator = separator;
    }
    CmdFormatter.prototype.format = function (date, context) {
        return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(date, null, context, this.separator));
    };
    CmdFormatter.prototype.formatRange = function (start, end, context) {
        return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(start, end, context, this.separator));
    };
    return CmdFormatter;
}());

var FuncFormatter = /** @class */ (function () {
    function FuncFormatter(func) {
        this.func = func;
    }
    FuncFormatter.prototype.format = function (date, context) {
        return this.func(createVerboseFormattingArg(date, null, context));
    };
    FuncFormatter.prototype.formatRange = function (start, end, context) {
        return this.func(createVerboseFormattingArg(start, end, context));
    };
    return FuncFormatter;
}());

// Formatter Object Creation
function createFormatter(input, defaultSeparator) {
    if (typeof input === 'object' && input) { // non-null object
        if (typeof defaultSeparator === 'string') {
            input = __assign({ separator: defaultSeparator }, input);
        }
        return new NativeFormatter(input);
    }
    else if (typeof input === 'string') {
        return new CmdFormatter(input, defaultSeparator);
    }
    else if (typeof input === 'function') {
        return new FuncFormatter(input);
    }
}
// String Utils
// timeZoneOffset is in minutes
function buildIsoString(marker, timeZoneOffset, stripZeroTime) {
    if (stripZeroTime === void 0) { stripZeroTime = false; }
    var s = marker.toISOString();
    s = s.replace('.000', '');
    if (stripZeroTime) {
        s = s.replace('T00:00:00Z', '');
    }
    if (s.length > 10) { // time part wasn't stripped, can add timezone info
        if (timeZoneOffset == null) {
            s = s.replace('Z', '');
        }
        else if (timeZoneOffset !== 0) {
            s = s.replace('Z', formatTimeZoneOffset(timeZoneOffset, true));
        }
        // otherwise, its UTC-0 and we want to keep the Z
    }
    return s;
}
function formatIsoTimeString(marker) {
    return padStart(marker.getUTCHours(), 2) + ':' +
        padStart(marker.getUTCMinutes(), 2) + ':' +
        padStart(marker.getUTCSeconds(), 2);
}
function formatTimeZoneOffset(minutes, doIso) {
    if (doIso === void 0) { doIso = false; }
    var sign = minutes < 0 ? '-' : '+';
    var abs = Math.abs(minutes);
    var hours = Math.floor(abs / 60);
    var mins = Math.round(abs % 60);
    if (doIso) {
        return sign + padStart(hours, 2) + ':' + padStart(mins, 2);
    }
    else {
        return 'GMT' + sign + hours + (mins ? ':' + padStart(mins, 2) : '');
    }
}
// Arg Utils
function createVerboseFormattingArg(start, end, context, separator) {
    var startInfo = expandZonedMarker(start, context.calendarSystem);
    var endInfo = end ? expandZonedMarker(end, context.calendarSystem) : null;
    return {
        date: startInfo,
        start: startInfo,
        end: endInfo,
        timeZone: context.timeZone,
        localeCodes: context.locale.codes,
        separator: separator
    };
}
function expandZonedMarker(dateInfo, calendarSystem) {
    var a = calendarSystem.markerToArray(dateInfo.marker);
    return {
        marker: dateInfo.marker,
        timeZoneOffset: dateInfo.timeZoneOffset,
        array: a,
        year: a[0],
        month: a[1],
        day: a[2],
        hour: a[3],
        minute: a[4],
        second: a[5],
        millisecond: a[6]
    };
}

var EventSourceApi = /** @class */ (function () {
    function EventSourceApi(calendar, internalEventSource) {
        this.calendar = calendar;
        this.internalEventSource = internalEventSource;
    }
    EventSourceApi.prototype.remove = function () {
        this.calendar.dispatch({
            type: 'REMOVE_EVENT_SOURCE',
            sourceId: this.internalEventSource.sourceId
        });
    };
    EventSourceApi.prototype.refetch = function () {
        this.calendar.dispatch({
            type: 'FETCH_EVENT_SOURCES',
            sourceIds: [this.internalEventSource.sourceId]
        });
    };
    Object.defineProperty(EventSourceApi.prototype, "id", {
        get: function () {
            return this.internalEventSource.publicId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventSourceApi.prototype, "url", {
        // only relevant to json-feed event sources
        get: function () {
            return this.internalEventSource.meta.url;
        },
        enumerable: true,
        configurable: true
    });
    return EventSourceApi;
}());

var EventApi = /** @class */ (function () {
    function EventApi(calendar, def, instance) {
        this._calendar = calendar;
        this._def = def;
        this._instance = instance || null;
    }
    /*
    TODO: make event struct more responsible for this
    */
    EventApi.prototype.setProp = function (name, val) {
        var _a, _b;
        if (name in DATE_PROPS) ;
        else if (name in NON_DATE_PROPS) {
            if (typeof NON_DATE_PROPS[name] === 'function') {
                val = NON_DATE_PROPS[name](val);
            }
            this.mutate({
                standardProps: (_a = {}, _a[name] = val, _a)
            });
        }
        else if (name in UNSCOPED_EVENT_UI_PROPS) {
            var ui = void 0;
            if (typeof UNSCOPED_EVENT_UI_PROPS[name] === 'function') {
                val = UNSCOPED_EVENT_UI_PROPS[name](val);
            }
            if (name === 'color') {
                ui = { backgroundColor: val, borderColor: val };
            }
            else if (name === 'editable') {
                ui = { startEditable: val, durationEditable: val };
            }
            else {
                ui = (_b = {}, _b[name] = val, _b);
            }
            this.mutate({
                standardProps: { ui: ui }
            });
        }
    };
    EventApi.prototype.setExtendedProp = function (name, val) {
        var _a;
        this.mutate({
            extendedProps: (_a = {}, _a[name] = val, _a)
        });
    };
    EventApi.prototype.setStart = function (startInput, options) {
        if (options === void 0) { options = {}; }
        var dateEnv = this._calendar.dateEnv;
        var start = dateEnv.createMarker(startInput);
        if (start && this._instance) { // TODO: warning if parsed bad
            var instanceRange = this._instance.range;
            var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity); // what if parsed bad!?
            if (options.maintainDuration) {
                this.mutate({ datesDelta: startDelta });
            }
            else {
                this.mutate({ startDelta: startDelta });
            }
        }
    };
    EventApi.prototype.setEnd = function (endInput, options) {
        if (options === void 0) { options = {}; }
        var dateEnv = this._calendar.dateEnv;
        var end;
        if (endInput != null) {
            end = dateEnv.createMarker(endInput);
            if (!end) {
                return; // TODO: warning if parsed bad
            }
        }
        if (this._instance) {
            if (end) {
                var endDelta = diffDates(this._instance.range.end, end, dateEnv, options.granularity);
                this.mutate({ endDelta: endDelta });
            }
            else {
                this.mutate({ standardProps: { hasEnd: false } });
            }
        }
    };
    EventApi.prototype.setDates = function (startInput, endInput, options) {
        if (options === void 0) { options = {}; }
        var dateEnv = this._calendar.dateEnv;
        var standardProps = { allDay: options.allDay };
        var start = dateEnv.createMarker(startInput);
        var end;
        if (!start) {
            return; // TODO: warning if parsed bad
        }
        if (endInput != null) {
            end = dateEnv.createMarker(endInput);
            if (!end) { // TODO: warning if parsed bad
                return;
            }
        }
        if (this._instance) {
            var instanceRange = this._instance.range;
            // when computing the diff for an event being converted to all-day,
            // compute diff off of the all-day values the way event-mutation does.
            if (options.allDay === true) {
                instanceRange = computeAlignedDayRange(instanceRange);
            }
            var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);
            if (end) {
                var endDelta = diffDates(instanceRange.end, end, dateEnv, options.granularity);
                if (durationsEqual(startDelta, endDelta)) {
                    this.mutate({ datesDelta: startDelta, standardProps: standardProps });
                }
                else {
                    this.mutate({ startDelta: startDelta, endDelta: endDelta, standardProps: standardProps });
                }
            }
            else { // means "clear the end"
                standardProps.hasEnd = false;
                this.mutate({ datesDelta: startDelta, standardProps: standardProps });
            }
        }
    };
    EventApi.prototype.moveStart = function (deltaInput) {
        var delta = createDuration(deltaInput);
        if (delta) { // TODO: warning if parsed bad
            this.mutate({ startDelta: delta });
        }
    };
    EventApi.prototype.moveEnd = function (deltaInput) {
        var delta = createDuration(deltaInput);
        if (delta) { // TODO: warning if parsed bad
            this.mutate({ endDelta: delta });
        }
    };
    EventApi.prototype.moveDates = function (deltaInput) {
        var delta = createDuration(deltaInput);
        if (delta) { // TODO: warning if parsed bad
            this.mutate({ datesDelta: delta });
        }
    };
    EventApi.prototype.setAllDay = function (allDay, options) {
        if (options === void 0) { options = {}; }
        var standardProps = { allDay: allDay };
        var maintainDuration = options.maintainDuration;
        if (maintainDuration == null) {
            maintainDuration = this._calendar.opt('allDayMaintainDuration');
        }
        if (this._def.allDay !== allDay) {
            standardProps.hasEnd = maintainDuration;
        }
        this.mutate({ standardProps: standardProps });
    };
    EventApi.prototype.formatRange = function (formatInput) {
        var dateEnv = this._calendar.dateEnv;
        var instance = this._instance;
        var formatter = createFormatter(formatInput, this._calendar.opt('defaultRangeSeparator'));
        if (this._def.hasEnd) {
            return dateEnv.formatRange(instance.range.start, instance.range.end, formatter, {
                forcedStartTzo: instance.forcedStartTzo,
                forcedEndTzo: instance.forcedEndTzo
            });
        }
        else {
            return dateEnv.format(instance.range.start, formatter, {
                forcedTzo: instance.forcedStartTzo
            });
        }
    };
    EventApi.prototype.mutate = function (mutation) {
        var def = this._def;
        var instance = this._instance;
        if (instance) {
            this._calendar.dispatch({
                type: 'MUTATE_EVENTS',
                instanceId: instance.instanceId,
                mutation: mutation,
                fromApi: true
            });
            var eventStore = this._calendar.state.eventStore;
            this._def = eventStore.defs[def.defId];
            this._instance = eventStore.instances[instance.instanceId];
        }
    };
    EventApi.prototype.remove = function () {
        this._calendar.dispatch({
            type: 'REMOVE_EVENT_DEF',
            defId: this._def.defId
        });
    };
    Object.defineProperty(EventApi.prototype, "source", {
        get: function () {
            var sourceId = this._def.sourceId;
            if (sourceId) {
                return new EventSourceApi(this._calendar, this._calendar.state.eventSources[sourceId]);
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "start", {
        get: function () {
            return this._instance ?
                this._calendar.dateEnv.toDate(this._instance.range.start) :
                null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "end", {
        get: function () {
            return (this._instance && this._def.hasEnd) ?
                this._calendar.dateEnv.toDate(this._instance.range.end) :
                null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "id", {
        // computable props that all access the def
        // TODO: find a TypeScript-compatible way to do this at scale
        get: function () { return this._def.publicId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "groupId", {
        get: function () { return this._def.groupId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "allDay", {
        get: function () { return this._def.allDay; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "title", {
        get: function () { return this._def.title; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "url", {
        get: function () { return this._def.url; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "rendering", {
        get: function () { return this._def.rendering; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "startEditable", {
        get: function () { return this._def.ui.startEditable; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "durationEditable", {
        get: function () { return this._def.ui.durationEditable; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "constraint", {
        get: function () { return this._def.ui.constraints[0] || null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "overlap", {
        get: function () { return this._def.ui.overlap; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "allow", {
        get: function () { return this._def.ui.allows[0] || null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "backgroundColor", {
        get: function () { return this._def.ui.backgroundColor; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "borderColor", {
        get: function () { return this._def.ui.borderColor; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "textColor", {
        get: function () { return this._def.ui.textColor; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "classNames", {
        // NOTE: user can't modify these because Object.freeze was called in event-def parsing
        get: function () { return this._def.ui.classNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "extendedProps", {
        get: function () { return this._def.extendedProps; },
        enumerable: true,
        configurable: true
    });
    return EventApi;
}());

/*
Specifying nextDayThreshold signals that all-day ranges should be sliced.
*/
function sliceEventStore(eventStore, eventUiBases, framingRange, nextDayThreshold) {
    var inverseBgByGroupId = {};
    var inverseBgByDefId = {};
    var defByGroupId = {};
    var bgRanges = [];
    var fgRanges = [];
    var eventUis = compileEventUis(eventStore.defs, eventUiBases);
    for (var defId in eventStore.defs) {
        var def = eventStore.defs[defId];
        if (def.rendering === 'inverse-background') {
            if (def.groupId) {
                inverseBgByGroupId[def.groupId] = [];
                if (!defByGroupId[def.groupId]) {
                    defByGroupId[def.groupId] = def;
                }
            }
            else {
                inverseBgByDefId[defId] = [];
            }
        }
    }
    for (var instanceId in eventStore.instances) {
        var instance = eventStore.instances[instanceId];
        var def = eventStore.defs[instance.defId];
        var ui = eventUis[def.defId];
        var origRange = instance.range;
        var normalRange = (!def.allDay && nextDayThreshold) ?
            computeVisibleDayRange(origRange, nextDayThreshold) :
            origRange;
        var slicedRange = intersectRanges(normalRange, framingRange);
        if (slicedRange) {
            if (def.rendering === 'inverse-background') {
                if (def.groupId) {
                    inverseBgByGroupId[def.groupId].push(slicedRange);
                }
                else {
                    inverseBgByDefId[instance.defId].push(slicedRange);
                }
            }
            else {
                (def.rendering === 'background' ? bgRanges : fgRanges).push({
                    def: def,
                    ui: ui,
                    instance: instance,
                    range: slicedRange,
                    isStart: normalRange.start && normalRange.start.valueOf() === slicedRange.start.valueOf(),
                    isEnd: normalRange.end && normalRange.end.valueOf() === slicedRange.end.valueOf()
                });
            }
        }
    }
    for (var groupId in inverseBgByGroupId) { // BY GROUP
        var ranges = inverseBgByGroupId[groupId];
        var invertedRanges = invertRanges(ranges, framingRange);
        for (var _i = 0, invertedRanges_1 = invertedRanges; _i < invertedRanges_1.length; _i++) {
            var invertedRange = invertedRanges_1[_i];
            var def = defByGroupId[groupId];
            var ui = eventUis[def.defId];
            bgRanges.push({
                def: def,
                ui: ui,
                instance: null,
                range: invertedRange,
                isStart: false,
                isEnd: false
            });
        }
    }
    for (var defId in inverseBgByDefId) {
        var ranges = inverseBgByDefId[defId];
        var invertedRanges = invertRanges(ranges, framingRange);
        for (var _a = 0, invertedRanges_2 = invertedRanges; _a < invertedRanges_2.length; _a++) {
            var invertedRange = invertedRanges_2[_a];
            bgRanges.push({
                def: eventStore.defs[defId],
                ui: eventUis[defId],
                instance: null,
                range: invertedRange,
                isStart: false,
                isEnd: false
            });
        }
    }
    return { bg: bgRanges, fg: fgRanges };
}
function hasBgRendering(def) {
    return def.rendering === 'background' || def.rendering === 'inverse-background';
}
function filterSegsViaEls(view, segs, isMirror) {
    if (view.hasPublicHandlers('eventRender')) {
        segs = segs.filter(function (seg) {
            var custom = view.publiclyTrigger('eventRender', [
                {
                    event: new EventApi(view.calendar, seg.eventRange.def, seg.eventRange.instance),
                    isMirror: isMirror,
                    isStart: seg.isStart,
                    isEnd: seg.isEnd,
                    // TODO: include seg.range once all components consistently generate it
                    el: seg.el,
                    view: view
                }
            ]);
            if (custom === false) { // means don't render at all
                return false;
            }
            else if (custom && custom !== true) {
                seg.el = custom;
            }
            return true;
        });
    }
    for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
        var seg = segs_1[_i];
        setElSeg(seg.el, seg);
    }
    return segs;
}
function setElSeg(el, seg) {
    el.fcSeg = seg;
}
function getElSeg(el) {
    return el.fcSeg || null;
}
// event ui computation
function compileEventUis(eventDefs, eventUiBases) {
    return mapHash(eventDefs, function (eventDef) {
        return compileEventUi(eventDef, eventUiBases);
    });
}
function compileEventUi(eventDef, eventUiBases) {
    var uis = [];
    if (eventUiBases['']) {
        uis.push(eventUiBases['']);
    }
    if (eventUiBases[eventDef.defId]) {
        uis.push(eventUiBases[eventDef.defId]);
    }
    uis.push(eventDef.ui);
    return combineEventUis(uis);
}

// applies the mutation to ALL defs/instances within the event store
function applyMutationToEventStore(eventStore, eventConfigBase, mutation, calendar) {
    var eventConfigs = compileEventUis(eventStore.defs, eventConfigBase);
    var dest = createEmptyEventStore();
    for (var defId in eventStore.defs) {
        var def = eventStore.defs[defId];
        dest.defs[defId] = applyMutationToEventDef(def, eventConfigs[defId], mutation, calendar.pluginSystem.hooks.eventDefMutationAppliers, calendar);
    }
    for (var instanceId in eventStore.instances) {
        var instance = eventStore.instances[instanceId];
        var def = dest.defs[instance.defId]; // important to grab the newly modified def
        dest.instances[instanceId] = applyMutationToEventInstance(instance, def, eventConfigs[instance.defId], mutation, calendar);
    }
    return dest;
}
function applyMutationToEventDef(eventDef, eventConfig, mutation, appliers, calendar) {
    var standardProps = mutation.standardProps || {};
    // if hasEnd has not been specified, guess a good value based on deltas.
    // if duration will change, there's no way the default duration will persist,
    // and thus, we need to mark the event as having a real end
    if (standardProps.hasEnd == null &&
        eventConfig.durationEditable &&
        (mutation.startDelta || mutation.endDelta)) {
        standardProps.hasEnd = true; // TODO: is this mutation okay?
    }
    var copy = __assign({}, eventDef, standardProps, { ui: __assign({}, eventDef.ui, standardProps.ui) });
    if (mutation.extendedProps) {
        copy.extendedProps = __assign({}, copy.extendedProps, mutation.extendedProps);
    }
    for (var _i = 0, appliers_1 = appliers; _i < appliers_1.length; _i++) {
        var applier = appliers_1[_i];
        applier(copy, mutation, calendar);
    }
    if (!copy.hasEnd && calendar.opt('forceEventDuration')) {
        copy.hasEnd = true;
    }
    return copy;
}
function applyMutationToEventInstance(eventInstance, eventDef, // must first be modified by applyMutationToEventDef
eventConfig, mutation, calendar) {
    var dateEnv = calendar.dateEnv;
    var forceAllDay = mutation.standardProps && mutation.standardProps.allDay === true;
    var clearEnd = mutation.standardProps && mutation.standardProps.hasEnd === false;
    var copy = __assign({}, eventInstance);
    if (forceAllDay) {
        copy.range = computeAlignedDayRange(copy.range);
    }
    if (mutation.datesDelta && eventConfig.startEditable) {
        copy.range = {
            start: dateEnv.add(copy.range.start, mutation.datesDelta),
            end: dateEnv.add(copy.range.end, mutation.datesDelta)
        };
    }
    if (mutation.startDelta && eventConfig.durationEditable) {
        copy.range = {
            start: dateEnv.add(copy.range.start, mutation.startDelta),
            end: copy.range.end
        };
    }
    if (mutation.endDelta && eventConfig.durationEditable) {
        copy.range = {
            start: copy.range.start,
            end: dateEnv.add(copy.range.end, mutation.endDelta)
        };
    }
    if (clearEnd) {
        copy.range = {
            start: copy.range.start,
            end: calendar.getDefaultEventEnd(eventDef.allDay, copy.range.start)
        };
    }
    // in case event was all-day but the supplied deltas were not
    // better util for this?
    if (eventDef.allDay) {
        copy.range = {
            start: startOfDay(copy.range.start),
            end: startOfDay(copy.range.end)
        };
    }
    // handle invalid durations
    if (copy.range.end < copy.range.start) {
        copy.range.end = calendar.getDefaultEventEnd(eventDef.allDay, copy.range.start);
    }
    return copy;
}

function reduceEventStore (eventStore, action, eventSources, dateProfile, calendar) {
    switch (action.type) {
        case 'RECEIVE_EVENTS': // raw
            return receiveRawEvents(eventStore, eventSources[action.sourceId], action.fetchId, action.fetchRange, action.rawEvents, calendar);
        case 'ADD_EVENTS': // already parsed, but not expanded
            return addEvent(eventStore, action.eventStore, // new ones
            dateProfile ? dateProfile.activeRange : null, calendar);
        case 'MERGE_EVENTS': // already parsed and expanded
            return mergeEventStores(eventStore, action.eventStore);
        case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
        case 'NEXT':
        case 'SET_DATE':
        case 'SET_VIEW_TYPE':
            if (dateProfile) {
                return expandRecurring(eventStore, dateProfile.activeRange, calendar);
            }
            else {
                return eventStore;
            }
        case 'CHANGE_TIMEZONE':
            return rezoneDates(eventStore, action.oldDateEnv, calendar.dateEnv);
        case 'MUTATE_EVENTS':
            return applyMutationToRelated(eventStore, action.instanceId, action.mutation, action.fromApi, calendar);
        case 'REMOVE_EVENT_INSTANCES':
            return excludeInstances(eventStore, action.instances);
        case 'REMOVE_EVENT_DEF':
            return filterEventStoreDefs(eventStore, function (eventDef) {
                return eventDef.defId !== action.defId;
            });
        case 'REMOVE_EVENT_SOURCE':
            return excludeEventsBySourceId(eventStore, action.sourceId);
        case 'REMOVE_ALL_EVENT_SOURCES':
            return filterEventStoreDefs(eventStore, function (eventDef) {
                return !eventDef.sourceId; // only keep events with no source id
            });
        case 'REMOVE_ALL_EVENTS':
            return createEmptyEventStore();
        case 'RESET_EVENTS':
            return {
                defs: eventStore.defs,
                instances: eventStore.instances
            };
        default:
            return eventStore;
    }
}
function receiveRawEvents(eventStore, eventSource, fetchId, fetchRange, rawEvents, calendar) {
    if (eventSource && // not already removed
        fetchId === eventSource.latestFetchId // TODO: wish this logic was always in event-sources
    ) {
        var subset = parseEvents(transformRawEvents(rawEvents, eventSource, calendar), eventSource.sourceId, calendar);
        if (fetchRange) {
            subset = expandRecurring(subset, fetchRange, calendar);
        }
        return mergeEventStores(excludeEventsBySourceId(eventStore, eventSource.sourceId), subset);
    }
    return eventStore;
}
function addEvent(eventStore, subset, expandRange, calendar) {
    if (expandRange) {
        subset = expandRecurring(subset, expandRange, calendar);
    }
    return mergeEventStores(eventStore, subset);
}
function rezoneDates(eventStore, oldDateEnv, newDateEnv) {
    var defs = eventStore.defs;
    var instances = mapHash(eventStore.instances, function (instance) {
        var def = defs[instance.defId];
        if (def.allDay || def.recurringDef) {
            return instance; // isn't dependent on timezone
        }
        else {
            return __assign({}, instance, { range: {
                    start: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.start, instance.forcedStartTzo)),
                    end: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.end, instance.forcedEndTzo))
                }, forcedStartTzo: newDateEnv.canComputeOffset ? null : instance.forcedStartTzo, forcedEndTzo: newDateEnv.canComputeOffset ? null : instance.forcedEndTzo });
        }
    });
    return { defs: defs, instances: instances };
}
function applyMutationToRelated(eventStore, instanceId, mutation, fromApi, calendar) {
    var relevant = getRelevantEvents(eventStore, instanceId);
    var eventConfigBase = fromApi ?
        { '': {
                startEditable: true,
                durationEditable: true,
                constraints: [],
                overlap: null,
                allows: [],
                backgroundColor: '',
                borderColor: '',
                textColor: '',
                classNames: []
            } } :
        calendar.eventUiBases;
    relevant = applyMutationToEventStore(relevant, eventConfigBase, mutation, calendar);
    return mergeEventStores(eventStore, relevant);
}
function excludeEventsBySourceId(eventStore, sourceId) {
    return filterEventStoreDefs(eventStore, function (eventDef) {
        return eventDef.sourceId !== sourceId;
    });
}
// QUESTION: why not just return instances? do a general object-property-exclusion util
function excludeInstances(eventStore, removals) {
    return {
        defs: eventStore.defs,
        instances: filterHash(eventStore.instances, function (instance) {
            return !removals[instance.instanceId];
        })
    };
}

// high-level segmenting-aware tester functions
// ------------------------------------------------------------------------------------------------------------------------
function isInteractionValid(interaction, calendar) {
    return isNewPropsValid({ eventDrag: interaction }, calendar); // HACK: the eventDrag props is used for ALL interactions
}
function isDateSelectionValid(dateSelection, calendar) {
    return isNewPropsValid({ dateSelection: dateSelection }, calendar);
}
function isNewPropsValid(newProps, calendar) {
    var view = calendar.view;
    var props = __assign({ businessHours: view ? view.props.businessHours : createEmptyEventStore(), dateSelection: '', eventStore: calendar.state.eventStore, eventUiBases: calendar.eventUiBases, eventSelection: '', eventDrag: null, eventResize: null }, newProps);
    return (calendar.pluginSystem.hooks.isPropsValid || isPropsValid)(props, calendar);
}
function isPropsValid(state, calendar, dateSpanMeta, filterConfig) {
    if (dateSpanMeta === void 0) { dateSpanMeta = {}; }
    if (state.eventDrag && !isInteractionPropsValid(state, calendar, dateSpanMeta, filterConfig)) {
        return false;
    }
    if (state.dateSelection && !isDateSelectionPropsValid(state, calendar, dateSpanMeta, filterConfig)) {
        return false;
    }
    return true;
}
// Moving Event Validation
// ------------------------------------------------------------------------------------------------------------------------
function isInteractionPropsValid(state, calendar, dateSpanMeta, filterConfig) {
    var interaction = state.eventDrag; // HACK: the eventDrag props is used for ALL interactions
    var subjectEventStore = interaction.mutatedEvents;
    var subjectDefs = subjectEventStore.defs;
    var subjectInstances = subjectEventStore.instances;
    var subjectConfigs = compileEventUis(subjectDefs, interaction.isEvent ?
        state.eventUiBases :
        { '': calendar.selectionConfig } // if not a real event, validate as a selection
    );
    if (filterConfig) {
        subjectConfigs = mapHash(subjectConfigs, filterConfig);
    }
    var otherEventStore = excludeInstances(state.eventStore, interaction.affectedEvents.instances); // exclude the subject events. TODO: exclude defs too?
    var otherDefs = otherEventStore.defs;
    var otherInstances = otherEventStore.instances;
    var otherConfigs = compileEventUis(otherDefs, state.eventUiBases);
    for (var subjectInstanceId in subjectInstances) {
        var subjectInstance = subjectInstances[subjectInstanceId];
        var subjectRange = subjectInstance.range;
        var subjectConfig = subjectConfigs[subjectInstance.defId];
        var subjectDef = subjectDefs[subjectInstance.defId];
        // constraint
        if (!allConstraintsPass(subjectConfig.constraints, subjectRange, otherEventStore, state.businessHours, calendar)) {
            return false;
        }
        // overlap
        var overlapFunc = calendar.opt('eventOverlap');
        if (typeof overlapFunc !== 'function') {
            overlapFunc = null;
        }
        for (var otherInstanceId in otherInstances) {
            var otherInstance = otherInstances[otherInstanceId];
            // intersect! evaluate
            if (rangesIntersect(subjectRange, otherInstance.range)) {
                var otherOverlap = otherConfigs[otherInstance.defId].overlap;
                // consider the other event's overlap. only do this if the subject event is a "real" event
                if (otherOverlap === false && interaction.isEvent) {
                    return false;
                }
                if (subjectConfig.overlap === false) {
                    return false;
                }
                if (overlapFunc && !overlapFunc(new EventApi(calendar, otherDefs[otherInstance.defId], otherInstance), // still event
                new EventApi(calendar, subjectDef, subjectInstance) // moving event
                )) {
                    return false;
                }
            }
        }
        // allow (a function)
        var calendarEventStore = calendar.state.eventStore; // need global-to-calendar, not local to component (splittable)state
        for (var _i = 0, _a = subjectConfig.allows; _i < _a.length; _i++) {
            var subjectAllow = _a[_i];
            var subjectDateSpan = __assign({}, dateSpanMeta, { range: subjectInstance.range, allDay: subjectDef.allDay });
            var origDef = calendarEventStore.defs[subjectDef.defId];
            var origInstance = calendarEventStore.instances[subjectInstanceId];
            var eventApi = void 0;
            if (origDef) { // was previously in the calendar
                eventApi = new EventApi(calendar, origDef, origInstance);
            }
            else { // was an external event
                eventApi = new EventApi(calendar, subjectDef); // no instance, because had no dates
            }
            if (!subjectAllow(calendar.buildDateSpanApi(subjectDateSpan), eventApi)) {
                return false;
            }
        }
    }
    return true;
}
// Date Selection Validation
// ------------------------------------------------------------------------------------------------------------------------
function isDateSelectionPropsValid(state, calendar, dateSpanMeta, filterConfig) {
    var relevantEventStore = state.eventStore;
    var relevantDefs = relevantEventStore.defs;
    var relevantInstances = relevantEventStore.instances;
    var selection = state.dateSelection;
    var selectionRange = selection.range;
    var selectionConfig = calendar.selectionConfig;
    if (filterConfig) {
        selectionConfig = filterConfig(selectionConfig);
    }
    // constraint
    if (!allConstraintsPass(selectionConfig.constraints, selectionRange, relevantEventStore, state.businessHours, calendar)) {
        return false;
    }
    // overlap
    var overlapFunc = calendar.opt('selectOverlap');
    if (typeof overlapFunc !== 'function') {
        overlapFunc = null;
    }
    for (var relevantInstanceId in relevantInstances) {
        var relevantInstance = relevantInstances[relevantInstanceId];
        // intersect! evaluate
        if (rangesIntersect(selectionRange, relevantInstance.range)) {
            if (selectionConfig.overlap === false) {
                return false;
            }
            if (overlapFunc && !overlapFunc(new EventApi(calendar, relevantDefs[relevantInstance.defId], relevantInstance))) {
                return false;
            }
        }
    }
    // allow (a function)
    for (var _i = 0, _a = selectionConfig.allows; _i < _a.length; _i++) {
        var selectionAllow = _a[_i];
        var fullDateSpan = __assign({}, dateSpanMeta, selection);
        if (!selectionAllow(calendar.buildDateSpanApi(fullDateSpan), null)) {
            return false;
        }
    }
    return true;
}
// Constraint Utils
// ------------------------------------------------------------------------------------------------------------------------
function allConstraintsPass(constraints, subjectRange, otherEventStore, businessHoursUnexpanded, calendar) {
    for (var _i = 0, constraints_1 = constraints; _i < constraints_1.length; _i++) {
        var constraint = constraints_1[_i];
        if (!anyRangesContainRange(constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, calendar), subjectRange)) {
            return false;
        }
    }
    return true;
}
function constraintToRanges(constraint, subjectRange, // for expanding a recurring constraint, or expanding business hours
otherEventStore, // for if constraint is an even group ID
businessHoursUnexpanded, // for if constraint is 'businessHours'
calendar // for expanding businesshours
) {
    if (constraint === 'businessHours') {
        return eventStoreToRanges(expandRecurring(businessHoursUnexpanded, subjectRange, calendar));
    }
    else if (typeof constraint === 'string') { // an group ID
        return eventStoreToRanges(filterEventStoreDefs(otherEventStore, function (eventDef) {
            return eventDef.groupId === constraint;
        }));
    }
    else if (typeof constraint === 'object' && constraint) { // non-null object
        return eventStoreToRanges(expandRecurring(constraint, subjectRange, calendar));
    }
    return []; // if it's false
}
// TODO: move to event-store file?
function eventStoreToRanges(eventStore) {
    var instances = eventStore.instances;
    var ranges = [];
    for (var instanceId in instances) {
        ranges.push(instances[instanceId].range);
    }
    return ranges;
}
// TODO: move to geom file?
function anyRangesContainRange(outerRanges, innerRange) {
    for (var _i = 0, outerRanges_1 = outerRanges; _i < outerRanges_1.length; _i++) {
        var outerRange = outerRanges_1[_i];
        if (rangeContainsRange(outerRange, innerRange)) {
            return true;
        }
    }
    return false;
}
// Parsing
// ------------------------------------------------------------------------------------------------------------------------
function normalizeConstraint(input, calendar) {
    if (Array.isArray(input)) {
        return parseEvents(input, '', calendar, true); // allowOpenRange=true
    }
    else if (typeof input === 'object' && input) { // non-null object
        return parseEvents([input], '', calendar, true); // allowOpenRange=true
    }
    else if (input != null) {
        return String(input);
    }
    else {
        return null;
    }
}

function htmlEscape(s) {
    return (s + '').replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&#039;')
        .replace(/"/g, '&quot;')
        .replace(/\n/g, '<br />');
}
// Given a hash of CSS properties, returns a string of CSS.
// Uses property names as-is (no camel-case conversion). Will not make statements for null/undefined values.
function cssToStr(cssProps) {
    var statements = [];
    for (var name_1 in cssProps) {
        var val = cssProps[name_1];
        if (val != null && val !== '') {
            statements.push(name_1 + ':' + val);
        }
    }
    return statements.join(';');
}
// Given an object hash of HTML attribute names to values,
// generates a string that can be injected between < > in HTML
function attrsToStr(attrs) {
    var parts = [];
    for (var name_2 in attrs) {
        var val = attrs[name_2];
        if (val != null) {
            parts.push(name_2 + '="' + htmlEscape(val) + '"');
        }
    }
    return parts.join(' ');
}
function parseClassName(raw) {
    if (Array.isArray(raw)) {
        return raw;
    }
    else if (typeof raw === 'string') {
        return raw.split(/\s+/);
    }
    else {
        return [];
    }
}

var UNSCOPED_EVENT_UI_PROPS = {
    editable: Boolean,
    startEditable: Boolean,
    durationEditable: Boolean,
    constraint: null,
    overlap: null,
    allow: null,
    className: parseClassName,
    classNames: parseClassName,
    color: String,
    backgroundColor: String,
    borderColor: String,
    textColor: String
};
function processUnscopedUiProps(rawProps, calendar, leftovers) {
    var props = refineProps(rawProps, UNSCOPED_EVENT_UI_PROPS, {}, leftovers);
    var constraint = normalizeConstraint(props.constraint, calendar);
    return {
        startEditable: props.startEditable != null ? props.startEditable : props.editable,
        durationEditable: props.durationEditable != null ? props.durationEditable : props.editable,
        constraints: constraint != null ? [constraint] : [],
        overlap: props.overlap,
        allows: props.allow != null ? [props.allow] : [],
        backgroundColor: props.backgroundColor || props.color,
        borderColor: props.borderColor || props.color,
        textColor: props.textColor,
        classNames: props.classNames.concat(props.className)
    };
}
function processScopedUiProps(prefix, rawScoped, calendar, leftovers) {
    var rawUnscoped = {};
    var wasFound = {};
    for (var key in UNSCOPED_EVENT_UI_PROPS) {
        var scopedKey = prefix + capitaliseFirstLetter(key);
        rawUnscoped[key] = rawScoped[scopedKey];
        wasFound[scopedKey] = true;
    }
    if (prefix === 'event') {
        rawUnscoped.editable = rawScoped.editable; // special case. there is no 'eventEditable', just 'editable'
    }
    if (leftovers) {
        for (var key in rawScoped) {
            if (!wasFound[key]) {
                leftovers[key] = rawScoped[key];
            }
        }
    }
    return processUnscopedUiProps(rawUnscoped, calendar);
}
var EMPTY_EVENT_UI = {
    startEditable: null,
    durationEditable: null,
    constraints: [],
    overlap: null,
    allows: [],
    backgroundColor: '',
    borderColor: '',
    textColor: '',
    classNames: []
};
// prevent against problems with <2 args!
function combineEventUis(uis) {
    return uis.reduce(combineTwoEventUis, EMPTY_EVENT_UI);
}
function combineTwoEventUis(item0, item1) {
    return {
        startEditable: item1.startEditable != null ? item1.startEditable : item0.startEditable,
        durationEditable: item1.durationEditable != null ? item1.durationEditable : item0.durationEditable,
        constraints: item0.constraints.concat(item1.constraints),
        overlap: typeof item1.overlap === 'boolean' ? item1.overlap : item0.overlap,
        allows: item0.allows.concat(item1.allows),
        backgroundColor: item1.backgroundColor || item0.backgroundColor,
        borderColor: item1.borderColor || item0.borderColor,
        textColor: item1.textColor || item0.textColor,
        classNames: item0.classNames.concat(item1.classNames)
    };
}

var NON_DATE_PROPS = {
    id: String,
    groupId: String,
    title: String,
    url: String,
    rendering: String,
    extendedProps: null
};
var DATE_PROPS = {
    start: null,
    date: null,
    end: null,
    allDay: null
};
var uid = 0;
function parseEvent(raw, sourceId, calendar, allowOpenRange) {
    var allDayDefault = computeIsAllDayDefault(sourceId, calendar);
    var leftovers0 = {};
    var recurringRes = parseRecurring(raw, // raw, but with single-event stuff stripped out
    allDayDefault, calendar.dateEnv, calendar.pluginSystem.hooks.recurringTypes, leftovers0 // will populate with non-recurring props
    );
    if (recurringRes) {
        var def = parseEventDef(leftovers0, sourceId, recurringRes.allDay, Boolean(recurringRes.duration), calendar);
        def.recurringDef = {
            typeId: recurringRes.typeId,
            typeData: recurringRes.typeData,
            duration: recurringRes.duration
        };
        return { def: def, instance: null };
    }
    else {
        var leftovers1 = {};
        var singleRes = parseSingle(raw, allDayDefault, calendar, leftovers1, allowOpenRange);
        if (singleRes) {
            var def = parseEventDef(leftovers1, sourceId, singleRes.allDay, singleRes.hasEnd, calendar);
            var instance = createEventInstance(def.defId, singleRes.range, singleRes.forcedStartTzo, singleRes.forcedEndTzo);
            return { def: def, instance: instance };
        }
    }
    return null;
}
/*
Will NOT populate extendedProps with the leftover properties.
Will NOT populate date-related props.
The EventNonDateInput has been normalized (id => publicId, etc).
*/
function parseEventDef(raw, sourceId, allDay, hasEnd, calendar) {
    var leftovers = {};
    var def = pluckNonDateProps(raw, calendar, leftovers);
    def.defId = String(uid++);
    def.sourceId = sourceId;
    def.allDay = allDay;
    def.hasEnd = hasEnd;
    for (var _i = 0, _a = calendar.pluginSystem.hooks.eventDefParsers; _i < _a.length; _i++) {
        var eventDefParser = _a[_i];
        var newLeftovers = {};
        eventDefParser(def, leftovers, newLeftovers);
        leftovers = newLeftovers;
    }
    def.extendedProps = __assign(leftovers, def.extendedProps || {});
    // help out EventApi from having user modify props
    Object.freeze(def.ui.classNames);
    Object.freeze(def.extendedProps);
    return def;
}
function createEventInstance(defId, range, forcedStartTzo, forcedEndTzo) {
    return {
        instanceId: String(uid++),
        defId: defId,
        range: range,
        forcedStartTzo: forcedStartTzo == null ? null : forcedStartTzo,
        forcedEndTzo: forcedEndTzo == null ? null : forcedEndTzo
    };
}
function parseSingle(raw, allDayDefault, calendar, leftovers, allowOpenRange) {
    var props = pluckDateProps(raw, leftovers);
    var allDay = props.allDay;
    var startMeta;
    var startMarker = null;
    var hasEnd = false;
    var endMeta;
    var endMarker = null;
    startMeta = calendar.dateEnv.createMarkerMeta(props.start);
    if (startMeta) {
        startMarker = startMeta.marker;
    }
    else if (!allowOpenRange) {
        return null;
    }
    if (props.end != null) {
        endMeta = calendar.dateEnv.createMarkerMeta(props.end);
    }
    if (allDay == null) {
        if (allDayDefault != null) {
            allDay = allDayDefault;
        }
        else {
            // fall back to the date props LAST
            allDay = (!startMeta || startMeta.isTimeUnspecified) &&
                (!endMeta || endMeta.isTimeUnspecified);
        }
    }
    if (allDay && startMarker) {
        startMarker = startOfDay(startMarker);
    }
    if (endMeta) {
        endMarker = endMeta.marker;
        if (allDay) {
            endMarker = startOfDay(endMarker);
        }
        if (startMarker && endMarker <= startMarker) {
            endMarker = null;
        }
    }
    if (endMarker) {
        hasEnd = true;
    }
    else if (!allowOpenRange) {
        hasEnd = calendar.opt('forceEventDuration') || false;
        endMarker = calendar.dateEnv.add(startMarker, allDay ?
            calendar.defaultAllDayEventDuration :
            calendar.defaultTimedEventDuration);
    }
    return {
        allDay: allDay,
        hasEnd: hasEnd,
        range: { start: startMarker, end: endMarker },
        forcedStartTzo: startMeta ? startMeta.forcedTzo : null,
        forcedEndTzo: endMeta ? endMeta.forcedTzo : null
    };
}
function pluckDateProps(raw, leftovers) {
    var props = refineProps(raw, DATE_PROPS, {}, leftovers);
    props.start = (props.start !== null) ? props.start : props.date;
    delete props.date;
    return props;
}
function pluckNonDateProps(raw, calendar, leftovers) {
    var preLeftovers = {};
    var props = refineProps(raw, NON_DATE_PROPS, {}, preLeftovers);
    var ui = processUnscopedUiProps(preLeftovers, calendar, leftovers);
    props.publicId = props.id;
    delete props.id;
    props.ui = ui;
    return props;
}
function computeIsAllDayDefault(sourceId, calendar) {
    var res = null;
    if (sourceId) {
        var source = calendar.state.eventSources[sourceId];
        res = source.allDayDefault;
    }
    if (res == null) {
        res = calendar.opt('allDayDefault');
    }
    return res;
}

var DEF_DEFAULTS = {
    startTime: '09:00',
    endTime: '17:00',
    daysOfWeek: [1, 2, 3, 4, 5],
    rendering: 'inverse-background',
    classNames: 'fc-nonbusiness',
    groupId: '_businessHours' // so multiple defs get grouped
};
/*
TODO: pass around as EventDefHash!!!
*/
function parseBusinessHours(input, calendar) {
    return parseEvents(refineInputs(input), '', calendar);
}
function refineInputs(input) {
    var rawDefs;
    if (input === true) {
        rawDefs = [{}]; // will get DEF_DEFAULTS verbatim
    }
    else if (Array.isArray(input)) {
        // if specifying an array, every sub-definition NEEDS a day-of-week
        rawDefs = input.filter(function (rawDef) {
            return rawDef.daysOfWeek;
        });
    }
    else if (typeof input === 'object' && input) { // non-null object
        rawDefs = [input];
    }
    else { // is probably false
        rawDefs = [];
    }
    rawDefs = rawDefs.map(function (rawDef) {
        return __assign({}, DEF_DEFAULTS, rawDef);
    });
    return rawDefs;
}

function memoizeRendering(renderFunc, unrenderFunc, dependencies) {
    if (dependencies === void 0) { dependencies = []; }
    var dependents = [];
    var thisContext;
    var prevArgs;
    function unrender() {
        if (prevArgs) {
            for (var _i = 0, dependents_1 = dependents; _i < dependents_1.length; _i++) {
                var dependent = dependents_1[_i];
                dependent.unrender();
            }
            if (unrenderFunc) {
                unrenderFunc.apply(thisContext, prevArgs);
            }
            prevArgs = null;
        }
    }
    function res() {
        if (!prevArgs || !isArraysEqual(prevArgs, arguments)) {
            unrender();
            thisContext = this;
            prevArgs = arguments;
            renderFunc.apply(this, arguments);
        }
    }
    res.dependents = dependents;
    res.unrender = unrender;
    for (var _i = 0, dependencies_1 = dependencies; _i < dependencies_1.length; _i++) {
        var dependency = dependencies_1[_i];
        dependency.dependents.push(res);
    }
    return res;
}

var EMPTY_EVENT_STORE = createEmptyEventStore(); // for purecomponents. TODO: keep elsewhere
var Splitter = /** @class */ (function () {
    function Splitter() {
        this.getKeysForEventDefs = memoize(this._getKeysForEventDefs);
        this.splitDateSelection = memoize(this._splitDateSpan);
        this.splitEventStore = memoize(this._splitEventStore);
        this.splitIndividualUi = memoize(this._splitIndividualUi);
        this.splitEventDrag = memoize(this._splitInteraction);
        this.splitEventResize = memoize(this._splitInteraction);
        this.eventUiBuilders = {}; // TODO: typescript protection
    }
    Splitter.prototype.splitProps = function (props) {
        var _this = this;
        var keyInfos = this.getKeyInfo(props);
        var defKeys = this.getKeysForEventDefs(props.eventStore);
        var dateSelections = this.splitDateSelection(props.dateSelection);
        var individualUi = this.splitIndividualUi(props.eventUiBases, defKeys); // the individual *bases*
        var eventStores = this.splitEventStore(props.eventStore, defKeys);
        var eventDrags = this.splitEventDrag(props.eventDrag);
        var eventResizes = this.splitEventResize(props.eventResize);
        var splitProps = {};
        this.eventUiBuilders = mapHash(keyInfos, function (info, key) {
            return _this.eventUiBuilders[key] || memoize(buildEventUiForKey);
        });
        for (var key in keyInfos) {
            var keyInfo = keyInfos[key];
            var eventStore = eventStores[key] || EMPTY_EVENT_STORE;
            var buildEventUi = this.eventUiBuilders[key];
            splitProps[key] = {
                businessHours: keyInfo.businessHours || props.businessHours,
                dateSelection: dateSelections[key] || null,
                eventStore: eventStore,
                eventUiBases: buildEventUi(props.eventUiBases[''], keyInfo.ui, individualUi[key]),
                eventSelection: eventStore.instances[props.eventSelection] ? props.eventSelection : '',
                eventDrag: eventDrags[key] || null,
                eventResize: eventResizes[key] || null
            };
        }
        return splitProps;
    };
    Splitter.prototype._splitDateSpan = function (dateSpan) {
        var dateSpans = {};
        if (dateSpan) {
            var keys = this.getKeysForDateSpan(dateSpan);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                dateSpans[key] = dateSpan;
            }
        }
        return dateSpans;
    };
    Splitter.prototype._getKeysForEventDefs = function (eventStore) {
        var _this = this;
        return mapHash(eventStore.defs, function (eventDef) {
            return _this.getKeysForEventDef(eventDef);
        });
    };
    Splitter.prototype._splitEventStore = function (eventStore, defKeys) {
        var defs = eventStore.defs, instances = eventStore.instances;
        var splitStores = {};
        for (var defId in defs) {
            for (var _i = 0, _a = defKeys[defId]; _i < _a.length; _i++) {
                var key = _a[_i];
                if (!splitStores[key]) {
                    splitStores[key] = createEmptyEventStore();
                }
                splitStores[key].defs[defId] = defs[defId];
            }
        }
        for (var instanceId in instances) {
            var instance = instances[instanceId];
            for (var _b = 0, _c = defKeys[instance.defId]; _b < _c.length; _b++) {
                var key = _c[_b];
                if (splitStores[key]) { // must have already been created
                    splitStores[key].instances[instanceId] = instance;
                }
            }
        }
        return splitStores;
    };
    Splitter.prototype._splitIndividualUi = function (eventUiBases, defKeys) {
        var splitHashes = {};
        for (var defId in eventUiBases) {
            if (defId) { // not the '' key
                for (var _i = 0, _a = defKeys[defId]; _i < _a.length; _i++) {
                    var key = _a[_i];
                    if (!splitHashes[key]) {
                        splitHashes[key] = {};
                    }
                    splitHashes[key][defId] = eventUiBases[defId];
                }
            }
        }
        return splitHashes;
    };
    Splitter.prototype._splitInteraction = function (interaction) {
        var splitStates = {};
        if (interaction) {
            var affectedStores_1 = this._splitEventStore(interaction.affectedEvents, this._getKeysForEventDefs(interaction.affectedEvents) // can't use cached. might be events from other calendar
            );
            // can't rely on defKeys because event data is mutated
            var mutatedKeysByDefId = this._getKeysForEventDefs(interaction.mutatedEvents);
            var mutatedStores_1 = this._splitEventStore(interaction.mutatedEvents, mutatedKeysByDefId);
            var populate = function (key) {
                if (!splitStates[key]) {
                    splitStates[key] = {
                        affectedEvents: affectedStores_1[key] || EMPTY_EVENT_STORE,
                        mutatedEvents: mutatedStores_1[key] || EMPTY_EVENT_STORE,
                        isEvent: interaction.isEvent,
                        origSeg: interaction.origSeg
                    };
                }
            };
            for (var key in affectedStores_1) {
                populate(key);
            }
            for (var key in mutatedStores_1) {
                populate(key);
            }
        }
        return splitStates;
    };
    return Splitter;
}());
function buildEventUiForKey(allUi, eventUiForKey, individualUi) {
    var baseParts = [];
    if (allUi) {
        baseParts.push(allUi);
    }
    if (eventUiForKey) {
        baseParts.push(eventUiForKey);
    }
    var stuff = {
        '': combineEventUis(baseParts)
    };
    if (individualUi) {
        __assign(stuff, individualUi);
    }
    return stuff;
}

// Generates HTML for an anchor to another view into the calendar.
// Will either generate an <a> tag or a non-clickable <span> tag, depending on enabled settings.
// `gotoOptions` can either be a DateMarker, or an object with the form:
// { date, type, forceOff }
// `type` is a view-type like "day" or "week". default value is "day".
// `attrs` and `innerHtml` are use to generate the rest of the HTML tag.
function buildGotoAnchorHtml(component, gotoOptions, attrs, innerHtml) {
    var dateEnv = component.dateEnv;
    var date;
    var type;
    var forceOff;
    var finalOptions;
    if (gotoOptions instanceof Date) {
        date = gotoOptions; // a single date-like input
    }
    else {
        date = gotoOptions.date;
        type = gotoOptions.type;
        forceOff = gotoOptions.forceOff;
    }
    finalOptions = {
        date: dateEnv.formatIso(date, { omitTime: true }),
        type: type || 'day'
    };
    if (typeof attrs === 'string') {
        innerHtml = attrs;
        attrs = null;
    }
    attrs = attrs ? ' ' + attrsToStr(attrs) : ''; // will have a leading space
    innerHtml = innerHtml || '';
    if (!forceOff && component.opt('navLinks')) {
        return '<a' + attrs +
            ' data-goto="' + htmlEscape(JSON.stringify(finalOptions)) + '">' +
            innerHtml +
            '</a>';
    }
    else {
        return '<span' + attrs + '>' +
            innerHtml +
            '</span>';
    }
}
function getAllDayHtml(component) {
    return component.opt('allDayHtml') || htmlEscape(component.opt('allDayText'));
}
// Computes HTML classNames for a single-day element
function getDayClasses(date, dateProfile, context, noThemeHighlight) {
    var calendar = context.calendar, view = context.view, theme = context.theme, dateEnv = context.dateEnv;
    var classes = [];
    var todayStart;
    var todayEnd;
    if (!rangeContainsMarker(dateProfile.activeRange, date)) {
        classes.push('fc-disabled-day');
    }
    else {
        classes.push('fc-' + DAY_IDS[date.getUTCDay()]);
        if (view.opt('monthMode') &&
            dateEnv.getMonth(date) !== dateEnv.getMonth(dateProfile.currentRange.start)) {
            classes.push('fc-other-month');
        }
        todayStart = startOfDay(calendar.getNow());
        todayEnd = addDays(todayStart, 1);
        if (date < todayStart) {
            classes.push('fc-past');
        }
        else if (date >= todayEnd) {
            classes.push('fc-future');
        }
        else {
            classes.push('fc-today');
            if (noThemeHighlight !== true) {
                classes.push(theme.getClass('today'));
            }
        }
    }
    return classes;
}

// given a function that resolves a result asynchronously.
// the function can either call passed-in success and failure callbacks,
// or it can return a promise.
// if you need to pass additional params to func, bind them first.
function unpromisify(func, success, failure) {
    // guard against success/failure callbacks being called more than once
    // and guard against a promise AND callback being used together.
    var isResolved = false;
    var wrappedSuccess = function () {
        if (!isResolved) {
            isResolved = true;
            success.apply(this, arguments);
        }
    };
    var wrappedFailure = function () {
        if (!isResolved) {
            isResolved = true;
            if (failure) {
                failure.apply(this, arguments);
            }
        }
    };
    var res = func(wrappedSuccess, wrappedFailure);
    if (res && typeof res.then === 'function') {
        res.then(wrappedSuccess, wrappedFailure);
    }
}

var Mixin = /** @class */ (function () {
    function Mixin() {
    }
    // mix into a CLASS
    Mixin.mixInto = function (destClass) {
        this.mixIntoObj(destClass.prototype);
    };
    // mix into ANY object
    Mixin.mixIntoObj = function (destObj) {
        var _this = this;
        Object.getOwnPropertyNames(this.prototype).forEach(function (name) {
            if (!destObj[name]) { // if destination doesn't already define it
                destObj[name] = _this.prototype[name];
            }
        });
    };
    /*
    will override existing methods
    TODO: remove! not used anymore
    */
    Mixin.mixOver = function (destClass) {
        var _this = this;
        Object.getOwnPropertyNames(this.prototype).forEach(function (name) {
            destClass.prototype[name] = _this.prototype[name];
        });
    };
    return Mixin;
}());

/*
USAGE:
  import { default as EmitterMixin, EmitterInterface } from './EmitterMixin'
in class:
  on: EmitterInterface['on']
  one: EmitterInterface['one']
  off: EmitterInterface['off']
  trigger: EmitterInterface['trigger']
  triggerWith: EmitterInterface['triggerWith']
  hasHandlers: EmitterInterface['hasHandlers']
after class:
  EmitterMixin.mixInto(TheClass)
*/
var EmitterMixin = /** @class */ (function (_super) {
    __extends(EmitterMixin, _super);
    function EmitterMixin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmitterMixin.prototype.on = function (type, handler) {
        addToHash(this._handlers || (this._handlers = {}), type, handler);
        return this; // for chaining
    };
    // todo: add comments
    EmitterMixin.prototype.one = function (type, handler) {
        addToHash(this._oneHandlers || (this._oneHandlers = {}), type, handler);
        return this; // for chaining
    };
    EmitterMixin.prototype.off = function (type, handler) {
        if (this._handlers) {
            removeFromHash(this._handlers, type, handler);
        }
        if (this._oneHandlers) {
            removeFromHash(this._oneHandlers, type, handler);
        }
        return this; // for chaining
    };
    EmitterMixin.prototype.trigger = function (type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.triggerWith(type, this, args);
        return this; // for chaining
    };
    EmitterMixin.prototype.triggerWith = function (type, context, args) {
        if (this._handlers) {
            applyAll(this._handlers[type], context, args);
        }
        if (this._oneHandlers) {
            applyAll(this._oneHandlers[type], context, args);
            delete this._oneHandlers[type]; // will never fire again
        }
        return this; // for chaining
    };
    EmitterMixin.prototype.hasHandlers = function (type) {
        return (this._handlers && this._handlers[type] && this._handlers[type].length) ||
            (this._oneHandlers && this._oneHandlers[type] && this._oneHandlers[type].length);
    };
    return EmitterMixin;
}(Mixin));
function addToHash(hash, type, handler) {
    (hash[type] || (hash[type] = []))
        .push(handler);
}
function removeFromHash(hash, type, handler) {
    if (handler) {
        if (hash[type]) {
            hash[type] = hash[type].filter(function (func) {
                return func !== handler;
            });
        }
    }
    else {
        delete hash[type]; // remove all handler funcs for this type
    }
}

/*
Records offset information for a set of elements, relative to an origin element.
Can record the left/right OR the top/bottom OR both.
Provides methods for querying the cache by position.
*/
var PositionCache = /** @class */ (function () {
    function PositionCache(originEl, els, isHorizontal, isVertical) {
        this.originEl = originEl;
        this.els = els;
        this.isHorizontal = isHorizontal;
        this.isVertical = isVertical;
    }
    // Queries the els for coordinates and stores them.
    // Call this method before using and of the get* methods below.
    PositionCache.prototype.build = function () {
        var originEl = this.originEl;
        var originClientRect = this.originClientRect =
            originEl.getBoundingClientRect(); // relative to viewport top-left
        if (this.isHorizontal) {
            this.buildElHorizontals(originClientRect.left);
        }
        if (this.isVertical) {
            this.buildElVerticals(originClientRect.top);
        }
    };
    // Populates the left/right internal coordinate arrays
    PositionCache.prototype.buildElHorizontals = function (originClientLeft) {
        var lefts = [];
        var rights = [];
        for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
            var el = _a[_i];
            var rect = el.getBoundingClientRect();
            lefts.push(rect.left - originClientLeft);
            rights.push(rect.right - originClientLeft);
        }
        this.lefts = lefts;
        this.rights = rights;
    };
    // Populates the top/bottom internal coordinate arrays
    PositionCache.prototype.buildElVerticals = function (originClientTop) {
        var tops = [];
        var bottoms = [];
        for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
            var el = _a[_i];
            var rect = el.getBoundingClientRect();
            tops.push(rect.top - originClientTop);
            bottoms.push(rect.bottom - originClientTop);
        }
        this.tops = tops;
        this.bottoms = bottoms;
    };
    // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
    // If no intersection is made, returns undefined.
    PositionCache.prototype.leftToIndex = function (leftPosition) {
        var lefts = this.lefts;
        var rights = this.rights;
        var len = lefts.length;
        var i;
        for (i = 0; i < len; i++) {
            if (leftPosition >= lefts[i] && leftPosition < rights[i]) {
                return i;
            }
        }
    };
    // Given a top offset (from document top), returns the index of the el that it vertically intersects.
    // If no intersection is made, returns undefined.
    PositionCache.prototype.topToIndex = function (topPosition) {
        var tops = this.tops;
        var bottoms = this.bottoms;
        var len = tops.length;
        var i;
        for (i = 0; i < len; i++) {
            if (topPosition >= tops[i] && topPosition < bottoms[i]) {
                return i;
            }
        }
    };
    // Gets the width of the element at the given index
    PositionCache.prototype.getWidth = function (leftIndex) {
        return this.rights[leftIndex] - this.lefts[leftIndex];
    };
    // Gets the height of the element at the given index
    PositionCache.prototype.getHeight = function (topIndex) {
        return this.bottoms[topIndex] - this.tops[topIndex];
    };
    return PositionCache;
}());

/*
An object for getting/setting scroll-related information for an element.
Internally, this is done very differently for window versus DOM element,
so this object serves as a common interface.
*/
var ScrollController = /** @class */ (function () {
    function ScrollController() {
    }
    ScrollController.prototype.getMaxScrollTop = function () {
        return this.getScrollHeight() - this.getClientHeight();
    };
    ScrollController.prototype.getMaxScrollLeft = function () {
        return this.getScrollWidth() - this.getClientWidth();
    };
    ScrollController.prototype.canScrollVertically = function () {
        return this.getMaxScrollTop() > 0;
    };
    ScrollController.prototype.canScrollHorizontally = function () {
        return this.getMaxScrollLeft() > 0;
    };
    ScrollController.prototype.canScrollUp = function () {
        return this.getScrollTop() > 0;
    };
    ScrollController.prototype.canScrollDown = function () {
        return this.getScrollTop() < this.getMaxScrollTop();
    };
    ScrollController.prototype.canScrollLeft = function () {
        return this.getScrollLeft() > 0;
    };
    ScrollController.prototype.canScrollRight = function () {
        return this.getScrollLeft() < this.getMaxScrollLeft();
    };
    return ScrollController;
}());
var ElementScrollController = /** @class */ (function (_super) {
    __extends(ElementScrollController, _super);
    function ElementScrollController(el) {
        var _this = _super.call(this) || this;
        _this.el = el;
        return _this;
    }
    ElementScrollController.prototype.getScrollTop = function () {
        return this.el.scrollTop;
    };
    ElementScrollController.prototype.getScrollLeft = function () {
        return this.el.scrollLeft;
    };
    ElementScrollController.prototype.setScrollTop = function (top) {
        this.el.scrollTop = top;
    };
    ElementScrollController.prototype.setScrollLeft = function (left) {
        this.el.scrollLeft = left;
    };
    ElementScrollController.prototype.getScrollWidth = function () {
        return this.el.scrollWidth;
    };
    ElementScrollController.prototype.getScrollHeight = function () {
        return this.el.scrollHeight;
    };
    ElementScrollController.prototype.getClientHeight = function () {
        return this.el.clientHeight;
    };
    ElementScrollController.prototype.getClientWidth = function () {
        return this.el.clientWidth;
    };
    return ElementScrollController;
}(ScrollController));
var WindowScrollController = /** @class */ (function (_super) {
    __extends(WindowScrollController, _super);
    function WindowScrollController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowScrollController.prototype.getScrollTop = function () {
        return window.pageYOffset;
    };
    WindowScrollController.prototype.getScrollLeft = function () {
        return window.pageXOffset;
    };
    WindowScrollController.prototype.setScrollTop = function (n) {
        window.scroll(window.pageXOffset, n);
    };
    WindowScrollController.prototype.setScrollLeft = function (n) {
        window.scroll(n, window.pageYOffset);
    };
    WindowScrollController.prototype.getScrollWidth = function () {
        return document.documentElement.scrollWidth;
    };
    WindowScrollController.prototype.getScrollHeight = function () {
        return document.documentElement.scrollHeight;
    };
    WindowScrollController.prototype.getClientHeight = function () {
        return document.documentElement.clientHeight;
    };
    WindowScrollController.prototype.getClientWidth = function () {
        return document.documentElement.clientWidth;
    };
    return WindowScrollController;
}(ScrollController));

/*
Embodies a div that has potential scrollbars
*/
var ScrollComponent = /** @class */ (function (_super) {
    __extends(ScrollComponent, _super);
    function ScrollComponent(overflowX, overflowY) {
        var _this = _super.call(this, createElement('div', {
            className: 'fc-scroller'
        })) || this;
        _this.overflowX = overflowX;
        _this.overflowY = overflowY;
        _this.applyOverflow();
        return _this;
    }
    // sets to natural height, unlocks overflow
    ScrollComponent.prototype.clear = function () {
        this.setHeight('auto');
        this.applyOverflow();
    };
    ScrollComponent.prototype.destroy = function () {
        removeElement(this.el);
    };
    // Overflow
    // -----------------------------------------------------------------------------------------------------------------
    ScrollComponent.prototype.applyOverflow = function () {
        applyStyle(this.el, {
            overflowX: this.overflowX,
            overflowY: this.overflowY
        });
    };
    // Causes any 'auto' overflow values to resolves to 'scroll' or 'hidden'.
    // Useful for preserving scrollbar widths regardless of future resizes.
    // Can pass in scrollbarWidths for optimization.
    ScrollComponent.prototype.lockOverflow = function (scrollbarWidths) {
        var overflowX = this.overflowX;
        var overflowY = this.overflowY;
        scrollbarWidths = scrollbarWidths || this.getScrollbarWidths();
        if (overflowX === 'auto') {
            overflowX = (scrollbarWidths.bottom || // horizontal scrollbars?
                this.canScrollHorizontally() // OR scrolling pane with massless scrollbars?
            ) ? 'scroll' : 'hidden';
        }
        if (overflowY === 'auto') {
            overflowY = (scrollbarWidths.left || scrollbarWidths.right || // horizontal scrollbars?
                this.canScrollVertically() // OR scrolling pane with massless scrollbars?
            ) ? 'scroll' : 'hidden';
        }
        applyStyle(this.el, { overflowX: overflowX, overflowY: overflowY });
    };
    ScrollComponent.prototype.setHeight = function (height) {
        applyStyleProp(this.el, 'height', height);
    };
    ScrollComponent.prototype.getScrollbarWidths = function () {
        var edges = computeEdges(this.el);
        return {
            left: edges.scrollbarLeft,
            right: edges.scrollbarRight,
            bottom: edges.scrollbarBottom
        };
    };
    return ScrollComponent;
}(ElementScrollController));

var Theme = /** @class */ (function () {
    function Theme(calendarOptions) {
        this.calendarOptions = calendarOptions;
        this.processIconOverride();
    }
    Theme.prototype.processIconOverride = function () {
        if (this.iconOverrideOption) {
            this.setIconOverride(this.calendarOptions[this.iconOverrideOption]);
        }
    };
    Theme.prototype.setIconOverride = function (iconOverrideHash) {
        var iconClassesCopy;
        var buttonName;
        if (typeof iconOverrideHash === 'object' && iconOverrideHash) { // non-null object
            iconClassesCopy = __assign({}, this.iconClasses);
            for (buttonName in iconOverrideHash) {
                iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
            }
            this.iconClasses = iconClassesCopy;
        }
        else if (iconOverrideHash === false) {
            this.iconClasses = {};
        }
    };
    Theme.prototype.applyIconOverridePrefix = function (className) {
        var prefix = this.iconOverridePrefix;
        if (prefix && className.indexOf(prefix) !== 0) { // if not already present
            className = prefix + className;
        }
        return className;
    };
    Theme.prototype.getClass = function (key) {
        return this.classes[key] || '';
    };
    Theme.prototype.getIconClass = function (buttonName) {
        var className = this.iconClasses[buttonName];
        if (className) {
            return this.baseIconClass + ' ' + className;
        }
        return '';
    };
    Theme.prototype.getCustomButtonIconClass = function (customButtonProps) {
        var className;
        if (this.iconOverrideCustomButtonOption) {
            className = customButtonProps[this.iconOverrideCustomButtonOption];
            if (className) {
                return this.baseIconClass + ' ' + this.applyIconOverridePrefix(className);
            }
        }
        return '';
    };
    return Theme;
}());
Theme.prototype.classes = {};
Theme.prototype.iconClasses = {};
Theme.prototype.baseIconClass = '';
Theme.prototype.iconOverridePrefix = '';

var guid = 0;
var Component = /** @class */ (function () {
    function Component(context, isView) {
        // HACK to populate view at top of component instantiation call chain
        if (isView) {
            context.view = this;
        }
        this.uid = String(guid++);
        this.context = context;
        this.dateEnv = context.dateEnv;
        this.theme = context.theme;
        this.view = context.view;
        this.calendar = context.calendar;
        this.isRtl = this.opt('dir') === 'rtl';
    }
    Component.addEqualityFuncs = function (newFuncs) {
        this.prototype.equalityFuncs = __assign({}, this.prototype.equalityFuncs, newFuncs);
    };
    Component.prototype.opt = function (name) {
        return this.context.options[name];
    };
    Component.prototype.receiveProps = function (props) {
        var _a = recycleProps(this.props || {}, props, this.equalityFuncs), anyChanges = _a.anyChanges, comboProps = _a.comboProps;
        this.props = comboProps;
        if (anyChanges) {
            this.render(comboProps);
        }
    };
    Component.prototype.render = function (props) {
    };
    // after destroy is called, this component won't ever be used again
    Component.prototype.destroy = function () {
    };
    return Component;
}());
Component.prototype.equalityFuncs = {};
/*
Reuses old values when equal. If anything is unequal, returns newProps as-is.
Great for PureComponent, but won't be feasible with React, so just eliminate and use React's DOM diffing.
*/
function recycleProps(oldProps, newProps, equalityFuncs) {
    var comboProps = {}; // some old, some new
    var anyChanges = false;
    for (var key in newProps) {
        if (key in oldProps && (oldProps[key] === newProps[key] ||
            (equalityFuncs[key] && equalityFuncs[key](oldProps[key], newProps[key])))) {
            // equal to old? use old prop
            comboProps[key] = oldProps[key];
        }
        else {
            comboProps[key] = newProps[key];
            anyChanges = true;
        }
    }
    for (var key in oldProps) {
        if (!(key in newProps)) {
            anyChanges = true;
            break;
        }
    }
    return { anyChanges: anyChanges, comboProps: comboProps };
}

/*
PURPOSES:
- hook up to fg, fill, and mirror renderers
- interface for dragging and hits
*/
var DateComponent = /** @class */ (function (_super) {
    __extends(DateComponent, _super);
    function DateComponent(context, el, isView) {
        var _this = _super.call(this, context, isView) || this;
        _this.el = el;
        return _this;
    }
    DateComponent.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        removeElement(this.el);
    };
    // TODO: WHAT ABOUT (sourceSeg && sourceSeg.component.doesDragMirror)
    //
    // Event Drag-n-Drop Rendering (for both events and external elements)
    // ---------------------------------------------------------------------------------------------------------------
    /*
    renderEventDragSegs(state: EventSegUiInteractionState) {
      if (state) {
        let { isEvent, segs, sourceSeg } = state
  
        if (this.eventRenderer) {
          this.eventRenderer.hideByHash(state.affectedInstances)
        }
  
        // if the user is dragging something that is considered an event with real event data,
        // and this component likes to do drag mirrors OR the component where the seg came from
        // likes to do drag mirrors, then render a drag mirror.
        if (isEvent && (this.doesDragMirror || sourceSeg && sourceSeg.component.doesDragMirror)) {
          if (this.mirrorRenderer) {
            this.mirrorRenderer.renderSegs(segs, { isDragging: true, sourceSeg })
          }
        }
  
        // if it would be impossible to render a drag mirror OR this component likes to render
        // highlights, then render a highlight.
        if (!isEvent || this.doesDragHighlight) {
          if (this.fillRenderer) {
            this.fillRenderer.renderSegs('highlight', segs)
          }
        }
      }
    }
    */
    // Hit System
    // -----------------------------------------------------------------------------------------------------------------
    DateComponent.prototype.buildPositionCaches = function () {
    };
    DateComponent.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
        return null; // this should be abstract
    };
    // Validation
    // -----------------------------------------------------------------------------------------------------------------
    DateComponent.prototype.isInteractionValid = function (interaction) {
        var calendar = this.calendar;
        var dateProfile = this.props.dateProfile; // HACK
        var instances = interaction.mutatedEvents.instances;
        if (dateProfile) { // HACK for DayTile
            for (var instanceId in instances) {
                if (!rangeContainsRange(dateProfile.validRange, instances[instanceId].range)) {
                    return false;
                }
            }
        }
        return isInteractionValid(interaction, calendar);
    };
    DateComponent.prototype.isDateSelectionValid = function (selection) {
        var dateProfile = this.props.dateProfile; // HACK
        if (dateProfile && // HACK for DayTile
            !rangeContainsRange(dateProfile.validRange, selection.range)) {
            return false;
        }
        return isDateSelectionValid(selection, this.calendar);
    };
    // Triggering
    // -----------------------------------------------------------------------------------------------------------------
    // TODO: move to Calendar
    DateComponent.prototype.publiclyTrigger = function (name, args) {
        var calendar = this.calendar;
        return calendar.publiclyTrigger(name, args);
    };
    DateComponent.prototype.publiclyTriggerAfterSizing = function (name, args) {
        var calendar = this.calendar;
        return calendar.publiclyTriggerAfterSizing(name, args);
    };
    DateComponent.prototype.hasPublicHandlers = function (name) {
        var calendar = this.calendar;
        return calendar.hasPublicHandlers(name);
    };
    DateComponent.prototype.triggerRenderedSegs = function (segs, isMirrors) {
        var calendar = this.calendar;
        if (this.hasPublicHandlers('eventPositioned')) {
            for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
                var seg = segs_1[_i];
                this.publiclyTriggerAfterSizing('eventPositioned', [
                    {
                        event: new EventApi(calendar, seg.eventRange.def, seg.eventRange.instance),
                        isMirror: isMirrors,
                        isStart: seg.isStart,
                        isEnd: seg.isEnd,
                        el: seg.el,
                        view: this // safe to cast because this method is only called on context.view
                    }
                ]);
            }
        }
        if (!calendar.state.loadingLevel) { // avoid initial empty state while pending
            calendar.afterSizingTriggers._eventsPositioned = [null]; // fire once
        }
    };
    DateComponent.prototype.triggerWillRemoveSegs = function (segs, isMirrors) {
        var calendar = this.calendar;
        for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
            var seg = segs_2[_i];
            calendar.trigger('eventElRemove', seg.el);
        }
        if (this.hasPublicHandlers('eventDestroy')) {
            for (var _a = 0, segs_3 = segs; _a < segs_3.length; _a++) {
                var seg = segs_3[_a];
                this.publiclyTrigger('eventDestroy', [
                    {
                        event: new EventApi(calendar, seg.eventRange.def, seg.eventRange.instance),
                        isMirror: isMirrors,
                        el: seg.el,
                        view: this // safe to cast because this method is only called on context.view
                    }
                ]);
            }
        }
    };
    // Pointer Interaction Utils
    // -----------------------------------------------------------------------------------------------------------------
    DateComponent.prototype.isValidSegDownEl = function (el) {
        return !this.props.eventDrag && // HACK
            !this.props.eventResize && // HACK
            !elementClosest(el, '.fc-mirror') &&
            (this.isPopover() || !this.isInPopover(el));
        // ^above line ensures we don't detect a seg interaction within a nested component.
        // it's a HACK because it only supports a popover as the nested component.
    };
    DateComponent.prototype.isValidDateDownEl = function (el) {
        var segEl = elementClosest(el, this.fgSegSelector);
        return (!segEl || segEl.classList.contains('fc-mirror')) &&
            !elementClosest(el, '.fc-more') && // a "more.." link
            !elementClosest(el, 'a[data-goto]') && // a clickable nav link
            !this.isInPopover(el);
    };
    DateComponent.prototype.isPopover = function () {
        return this.el.classList.contains('fc-popover');
    };
    DateComponent.prototype.isInPopover = function (el) {
        return Boolean(elementClosest(el, '.fc-popover'));
    };
    return DateComponent;
}(Component));
DateComponent.prototype.fgSegSelector = '.fc-event-container > *';
DateComponent.prototype.bgSegSelector = '.fc-bgevent:not(.fc-nonbusiness)';

var uid$1 = 0;
function createPlugin(input) {
    return {
        id: String(uid$1++),
        deps: input.deps || [],
        reducers: input.reducers || [],
        eventDefParsers: input.eventDefParsers || [],
        isDraggableTransformers: input.isDraggableTransformers || [],
        eventDragMutationMassagers: input.eventDragMutationMassagers || [],
        eventDefMutationAppliers: input.eventDefMutationAppliers || [],
        dateSelectionTransformers: input.dateSelectionTransformers || [],
        datePointTransforms: input.datePointTransforms || [],
        dateSpanTransforms: input.dateSpanTransforms || [],
        views: input.views || {},
        viewPropsTransformers: input.viewPropsTransformers || [],
        isPropsValid: input.isPropsValid || null,
        externalDefTransforms: input.externalDefTransforms || [],
        eventResizeJoinTransforms: input.eventResizeJoinTransforms || [],
        viewContainerModifiers: input.viewContainerModifiers || [],
        eventDropTransformers: input.eventDropTransformers || [],
        componentInteractions: input.componentInteractions || [],
        calendarInteractions: input.calendarInteractions || [],
        themeClasses: input.themeClasses || {},
        eventSourceDefs: input.eventSourceDefs || [],
        cmdFormatter: input.cmdFormatter,
        recurringTypes: input.recurringTypes || [],
        namedTimeZonedImpl: input.namedTimeZonedImpl,
        defaultView: input.defaultView || '',
        elementDraggingImpl: input.elementDraggingImpl,
        optionChangeHandlers: input.optionChangeHandlers || {}
    };
}
var PluginSystem = /** @class */ (function () {
    function PluginSystem() {
        this.hooks = {
            reducers: [],
            eventDefParsers: [],
            isDraggableTransformers: [],
            eventDragMutationMassagers: [],
            eventDefMutationAppliers: [],
            dateSelectionTransformers: [],
            datePointTransforms: [],
            dateSpanTransforms: [],
            views: {},
            viewPropsTransformers: [],
            isPropsValid: null,
            externalDefTransforms: [],
            eventResizeJoinTransforms: [],
            viewContainerModifiers: [],
            eventDropTransformers: [],
            componentInteractions: [],
            calendarInteractions: [],
            themeClasses: {},
            eventSourceDefs: [],
            cmdFormatter: null,
            recurringTypes: [],
            namedTimeZonedImpl: null,
            defaultView: '',
            elementDraggingImpl: null,
            optionChangeHandlers: {}
        };
        this.addedHash = {};
    }
    PluginSystem.prototype.add = function (plugin) {
        if (!this.addedHash[plugin.id]) {
            this.addedHash[plugin.id] = true;
            for (var _i = 0, _a = plugin.deps; _i < _a.length; _i++) {
                var dep = _a[_i];
                this.add(dep);
            }
            this.hooks = combineHooks(this.hooks, plugin);
        }
    };
    return PluginSystem;
}());
function combineHooks(hooks0, hooks1) {
    return {
        reducers: hooks0.reducers.concat(hooks1.reducers),
        eventDefParsers: hooks0.eventDefParsers.concat(hooks1.eventDefParsers),
        isDraggableTransformers: hooks0.isDraggableTransformers.concat(hooks1.isDraggableTransformers),
        eventDragMutationMassagers: hooks0.eventDragMutationMassagers.concat(hooks1.eventDragMutationMassagers),
        eventDefMutationAppliers: hooks0.eventDefMutationAppliers.concat(hooks1.eventDefMutationAppliers),
        dateSelectionTransformers: hooks0.dateSelectionTransformers.concat(hooks1.dateSelectionTransformers),
        datePointTransforms: hooks0.datePointTransforms.concat(hooks1.datePointTransforms),
        dateSpanTransforms: hooks0.dateSpanTransforms.concat(hooks1.dateSpanTransforms),
        views: __assign({}, hooks0.views, hooks1.views),
        viewPropsTransformers: hooks0.viewPropsTransformers.concat(hooks1.viewPropsTransformers),
        isPropsValid: hooks1.isPropsValid || hooks0.isPropsValid,
        externalDefTransforms: hooks0.externalDefTransforms.concat(hooks1.externalDefTransforms),
        eventResizeJoinTransforms: hooks0.eventResizeJoinTransforms.concat(hooks1.eventResizeJoinTransforms),
        viewContainerModifiers: hooks0.viewContainerModifiers.concat(hooks1.viewContainerModifiers),
        eventDropTransformers: hooks0.eventDropTransformers.concat(hooks1.eventDropTransformers),
        calendarInteractions: hooks0.calendarInteractions.concat(hooks1.calendarInteractions),
        componentInteractions: hooks0.componentInteractions.concat(hooks1.componentInteractions),
        themeClasses: __assign({}, hooks0.themeClasses, hooks1.themeClasses),
        eventSourceDefs: hooks0.eventSourceDefs.concat(hooks1.eventSourceDefs),
        cmdFormatter: hooks1.cmdFormatter || hooks0.cmdFormatter,
        recurringTypes: hooks0.recurringTypes.concat(hooks1.recurringTypes),
        namedTimeZonedImpl: hooks1.namedTimeZonedImpl || hooks0.namedTimeZonedImpl,
        defaultView: hooks0.defaultView || hooks1.defaultView,
        elementDraggingImpl: hooks0.elementDraggingImpl || hooks1.elementDraggingImpl,
        optionChangeHandlers: __assign({}, hooks0.optionChangeHandlers, hooks1.optionChangeHandlers)
    };
}

var eventSourceDef = {
    ignoreRange: true,
    parseMeta: function (raw) {
        if (Array.isArray(raw)) { // short form
            return raw;
        }
        else if (Array.isArray(raw.events)) {
            return raw.events;
        }
        return null;
    },
    fetch: function (arg, success) {
        success({
            rawEvents: arg.eventSource.meta
        });
    }
};
var ArrayEventSourcePlugin = createPlugin({
    eventSourceDefs: [eventSourceDef]
});

var eventSourceDef$1 = {
    parseMeta: function (raw) {
        if (typeof raw === 'function') { // short form
            return raw;
        }
        else if (typeof raw.events === 'function') {
            return raw.events;
        }
        return null;
    },
    fetch: function (arg, success, failure) {
        var dateEnv = arg.calendar.dateEnv;
        var func = arg.eventSource.meta;
        unpromisify(func.bind(null, {
            start: dateEnv.toDate(arg.range.start),
            end: dateEnv.toDate(arg.range.end),
            startStr: dateEnv.formatIso(arg.range.start),
            endStr: dateEnv.formatIso(arg.range.end),
            timeZone: dateEnv.timeZone
        }), function (rawEvents) {
            success({ rawEvents: rawEvents }); // needs an object response
        }, failure // send errorObj directly to failure callback
        );
    }
};
var FuncEventSourcePlugin = createPlugin({
    eventSourceDefs: [eventSourceDef$1]
});

function requestJson(method, url, params, successCallback, failureCallback) {
    method = method.toUpperCase();
    var body = null;
    if (method === 'GET') {
        url = injectQueryStringParams(url, params);
    }
    else {
        body = encodeParams(params);
    }
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    if (method !== 'GET') {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            try {
                var res = JSON.parse(xhr.responseText);
                successCallback(res, xhr);
            }
            catch (err) {
                failureCallback('Failure parsing JSON', xhr);
            }
        }
        else {
            failureCallback('Request failed', xhr);
        }
    };
    xhr.onerror = function () {
        failureCallback('Request failed', xhr);
    };
    xhr.send(body);
}
function injectQueryStringParams(url, params) {
    return url +
        (url.indexOf('?') === -1 ? '?' : '&') +
        encodeParams(params);
}
function encodeParams(params) {
    var parts = [];
    for (var key in params) {
        parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
    }
    return parts.join('&');
}

var eventSourceDef$2 = {
    parseMeta: function (raw) {
        if (typeof raw === 'string') { // short form
            raw = { url: raw };
        }
        else if (!raw || typeof raw !== 'object' || !raw.url) {
            return null;
        }
        return {
            url: raw.url,
            method: (raw.method || 'GET').toUpperCase(),
            extraParams: raw.extraParams,
            startParam: raw.startParam,
            endParam: raw.endParam,
            timeZoneParam: raw.timeZoneParam
        };
    },
    fetch: function (arg, success, failure) {
        var meta = arg.eventSource.meta;
        var requestParams = buildRequestParams(meta, arg.range, arg.calendar);
        requestJson(meta.method, meta.url, requestParams, function (rawEvents, xhr) {
            success({ rawEvents: rawEvents, xhr: xhr });
        }, function (errorMessage, xhr) {
            failure({ message: errorMessage, xhr: xhr });
        });
    }
};
var JsonFeedEventSourcePlugin = createPlugin({
    eventSourceDefs: [eventSourceDef$2]
});
function buildRequestParams(meta, range, calendar) {
    var dateEnv = calendar.dateEnv;
    var startParam;
    var endParam;
    var timeZoneParam;
    var customRequestParams;
    var params = {};
    startParam = meta.startParam;
    if (startParam == null) {
        startParam = calendar.opt('startParam');
    }
    endParam = meta.endParam;
    if (endParam == null) {
        endParam = calendar.opt('endParam');
    }
    timeZoneParam = meta.timeZoneParam;
    if (timeZoneParam == null) {
        timeZoneParam = calendar.opt('timeZoneParam');
    }
    // retrieve any outbound GET/POST data from the options
    if (typeof meta.extraParams === 'function') {
        // supplied as a function that returns a key/value object
        customRequestParams = meta.extraParams();
    }
    else {
        // probably supplied as a straight key/value object
        customRequestParams = meta.extraParams || {};
    }
    __assign(params, customRequestParams);
    params[startParam] = dateEnv.formatIso(range.start);
    params[endParam] = dateEnv.formatIso(range.end);
    if (dateEnv.timeZone !== 'local') {
        params[timeZoneParam] = dateEnv.timeZone;
    }
    return params;
}

var recurring = {
    parse: function (rawEvent, leftoverProps, dateEnv) {
        var createMarker = dateEnv.createMarker.bind(dateEnv);
        var processors = {
            daysOfWeek: null,
            startTime: createDuration,
            endTime: createDuration,
            startRecur: createMarker,
            endRecur: createMarker
        };
        var props = refineProps(rawEvent, processors, {}, leftoverProps);
        var anyValid = false;
        for (var propName in props) {
            if (props[propName] != null) {
                anyValid = true;
                break;
            }
        }
        if (anyValid) {
            var duration = null;
            if ('duration' in leftoverProps) {
                duration = createDuration(leftoverProps.duration);
                delete leftoverProps.duration;
            }
            if (!duration && props.startTime && props.endTime) {
                duration = subtractDurations(props.endTime, props.startTime);
            }
            return {
                allDayGuess: Boolean(!props.startTime && !props.endTime),
                duration: duration,
                typeData: props // doesn't need endTime anymore but oh well
            };
        }
        return null;
    },
    expand: function (typeData, framingRange, dateEnv) {
        var clippedFramingRange = intersectRanges(framingRange, { start: typeData.startRecur, end: typeData.endRecur });
        if (clippedFramingRange) {
            return expandRanges(typeData.daysOfWeek, typeData.startTime, clippedFramingRange, dateEnv);
        }
        else {
            return [];
        }
    }
};
var SimpleRecurrencePlugin = createPlugin({
    recurringTypes: [recurring]
});
function expandRanges(daysOfWeek, startTime, framingRange, dateEnv) {
    var dowHash = daysOfWeek ? arrayToHash(daysOfWeek) : null;
    var dayMarker = startOfDay(framingRange.start);
    var endMarker = framingRange.end;
    var instanceStarts = [];
    while (dayMarker < endMarker) {
        var instanceStart 
        // if everyday, or this particular day-of-week
        = void 0;
        // if everyday, or this particular day-of-week
        if (!dowHash || dowHash[dayMarker.getUTCDay()]) {
            if (startTime) {
                instanceStart = dateEnv.add(dayMarker, startTime);
            }
            else {
                instanceStart = dayMarker;
            }
            instanceStarts.push(instanceStart);
        }
        dayMarker = addDays(dayMarker, 1);
    }
    return instanceStarts;
}

var DefaultOptionChangeHandlers = createPlugin({
    optionChangeHandlers: {
        events: function (events, calendar, deepEqual) {
            handleEventSources([events], calendar, deepEqual);
        },
        eventSources: handleEventSources,
        plugins: handlePlugins
    }
});
function handleEventSources(inputs, calendar, deepEqual) {
    var unfoundSources = hashValuesToArray(calendar.state.eventSources);
    var newInputs = [];
    for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
        var input = inputs_1[_i];
        var inputFound = false;
        for (var i = 0; i < unfoundSources.length; i++) {
            if (deepEqual(unfoundSources[i]._raw, input)) {
                unfoundSources.splice(i, 1); // delete
                inputFound = true;
                break;
            }
        }
        if (!inputFound) {
            newInputs.push(input);
        }
    }
    for (var _a = 0, unfoundSources_1 = unfoundSources; _a < unfoundSources_1.length; _a++) {
        var unfoundSource = unfoundSources_1[_a];
        calendar.dispatch({
            type: 'REMOVE_EVENT_SOURCE',
            sourceId: unfoundSource.sourceId
        });
    }
    for (var _b = 0, newInputs_1 = newInputs; _b < newInputs_1.length; _b++) {
        var newInput = newInputs_1[_b];
        calendar.addEventSource(newInput);
    }
}
// shortcoming: won't remove plugins
function handlePlugins(inputs, calendar) {
    calendar.addPluginInputs(inputs); // will gracefully handle duplicates
}

var config = {}; // TODO: make these options
var globalDefaults = {
    defaultRangeSeparator: ' - ',
    titleRangeSeparator: ' \u2013 ',
    defaultTimedEventDuration: '01:00:00',
    defaultAllDayEventDuration: { day: 1 },
    forceEventDuration: false,
    nextDayThreshold: '00:00:00',
    // display
    columnHeader: true,
    defaultView: '',
    aspectRatio: 1.35,
    header: {
        left: 'title',
        center: '',
        right: 'today prev,next'
    },
    weekends: true,
    weekNumbers: false,
    weekNumberCalculation: 'local',
    editable: false,
    // nowIndicator: false,
    scrollTime: '06:00:00',
    minTime: '00:00:00',
    maxTime: '24:00:00',
    showNonCurrentDates: true,
    // event ajax
    lazyFetching: true,
    startParam: 'start',
    endParam: 'end',
    timeZoneParam: 'timeZone',
    timeZone: 'local',
    // allDayDefault: undefined,
    // locale
    locales: [],
    locale: '',
    // dir: will get this from the default locale
    // buttonIcons: null,
    // allows setting a min-height to the event segment to prevent short events overlapping each other
    timeGridEventMinHeight: 0,
    themeSystem: 'standard',
    // eventResizableFromStart: false,
    dragRevertDuration: 500,
    dragScroll: true,
    allDayMaintainDuration: false,
    // selectable: false,
    unselectAuto: true,
    // selectMinDistance: 0,
    dropAccept: '*',
    eventOrder: 'start,-duration,allDay,title',
    // ^ if start tie, longer events go before shorter. final tie-breaker is title text
    // rerenderDelay: null,
    eventLimit: false,
    eventLimitClick: 'popover',
    dayPopoverFormat: { month: 'long', day: 'numeric', year: 'numeric' },
    handleWindowResize: true,
    windowResizeDelay: 100,
    longPressDelay: 1000,
    eventDragMinDistance: 5 // only applies to mouse
};
var rtlDefaults = {
    header: {
        left: 'next,prev today',
        center: '',
        right: 'title'
    },
    buttonIcons: {
        // TODO: make RTL support the responibility of the theme
        prev: 'fc-icon-chevron-right',
        next: 'fc-icon-chevron-left',
        prevYear: 'fc-icon-chevrons-right',
        nextYear: 'fc-icon-chevrons-left'
    }
};
var complexOptions = [
    'header',
    'footer',
    'buttonText',
    'buttonIcons'
];
// Merges an array of option objects into a single object
function mergeOptions(optionObjs) {
    return mergeProps(optionObjs, complexOptions);
}
// TODO: move this stuff to a "plugin"-related file...
var INTERNAL_PLUGINS = [
    ArrayEventSourcePlugin,
    FuncEventSourcePlugin,
    JsonFeedEventSourcePlugin,
    SimpleRecurrencePlugin,
    DefaultOptionChangeHandlers
];
function refinePluginDefs(pluginInputs) {
    var plugins = [];
    for (var _i = 0, pluginInputs_1 = pluginInputs; _i < pluginInputs_1.length; _i++) {
        var pluginInput = pluginInputs_1[_i];
        if (typeof pluginInput === 'string') {
            var globalName = 'FullCalendar' + capitaliseFirstLetter(pluginInput);
            if (!window[globalName]) {
                console.warn('Plugin file not loaded for ' + pluginInput);
            }
            else {
                plugins.push(window[globalName].default); // is an ES6 module
            }
        }
        else {
            plugins.push(pluginInput);
        }
    }
    return INTERNAL_PLUGINS.concat(plugins);
}

var RAW_EN_LOCALE = {
    code: 'en',
    week: {
        dow: 0,
        doy: 4 // 4 days need to be within the year to be considered the first week
    },
    dir: 'ltr',
    buttonText: {
        prev: 'prev',
        next: 'next',
        prevYear: 'prev year',
        nextYear: 'next year',
        year: 'year',
        today: 'today',
        month: 'month',
        week: 'week',
        day: 'day',
        list: 'list'
    },
    weekLabel: 'W',
    allDayText: 'all-day',
    eventLimitText: 'more',
    noEventsMessage: 'No events to display'
};
function parseRawLocales(explicitRawLocales) {
    var defaultCode = explicitRawLocales.length > 0 ? explicitRawLocales[0].code : 'en';
    var globalArray = window['FullCalendarLocalesAll'] || []; // from locales-all.js
    var globalObject = window['FullCalendarLocales'] || {}; // from locales/*.js. keys are meaningless
    var allRawLocales = globalArray.concat(// globalArray is low prio
    hashValuesToArray(globalObject), // medium prio
    explicitRawLocales // highest prio
    );
    var rawLocaleMap = {
        en: RAW_EN_LOCALE // necessary?
    };
    for (var _i = 0, allRawLocales_1 = allRawLocales; _i < allRawLocales_1.length; _i++) {
        var rawLocale = allRawLocales_1[_i];
        rawLocaleMap[rawLocale.code] = rawLocale;
    }
    return {
        map: rawLocaleMap,
        defaultCode: defaultCode
    };
}
function buildLocale(inputSingular, available) {
    if (typeof inputSingular === 'object' && !Array.isArray(inputSingular)) {
        return parseLocale(inputSingular.code, [inputSingular.code], inputSingular);
    }
    else {
        return queryLocale(inputSingular, available);
    }
}
function queryLocale(codeArg, available) {
    var codes = [].concat(codeArg || []); // will convert to array
    var raw = queryRawLocale(codes, available) || RAW_EN_LOCALE;
    return parseLocale(codeArg, codes, raw);
}
function queryRawLocale(codes, available) {
    for (var i = 0; i < codes.length; i++) {
        var parts = codes[i].toLocaleLowerCase().split('-');
        for (var j = parts.length; j > 0; j--) {
            var simpleId = parts.slice(0, j).join('-');
            if (available[simpleId]) {
                return available[simpleId];
            }
        }
    }
    return null;
}
function parseLocale(codeArg, codes, raw) {
    var merged = mergeProps([RAW_EN_LOCALE, raw], ['buttonText']);
    delete merged.code; // don't want this part of the options
    var week = merged.week;
    delete merged.week;
    return {
        codeArg: codeArg,
        codes: codes,
        week: week,
        simpleNumberFormat: new Intl.NumberFormat(codeArg),
        options: merged
    };
}

var OptionsManager = /** @class */ (function () {
    function OptionsManager(overrides) {
        this.overrides = __assign({}, overrides); // make a copy
        this.dynamicOverrides = {};
        this.compute();
    }
    OptionsManager.prototype.mutate = function (updates, removals, isDynamic) {
        var overrideHash = isDynamic ? this.dynamicOverrides : this.overrides;
        __assign(overrideHash, updates);
        for (var _i = 0, removals_1 = removals; _i < removals_1.length; _i++) {
            var propName = removals_1[_i];
            delete overrideHash[propName];
        }
        this.compute();
    };
    // Computes the flattened options hash for the calendar and assigns to `this.options`.
    // Assumes this.overrides and this.dynamicOverrides have already been initialized.
    OptionsManager.prototype.compute = function () {
        // TODO: not a very efficient system
        var locales = firstDefined(// explicit locale option given?
        this.dynamicOverrides.locales, this.overrides.locales, globalDefaults.locales);
        var locale = firstDefined(// explicit locales option given?
        this.dynamicOverrides.locale, this.overrides.locale, globalDefaults.locale);
        var available = parseRawLocales(locales);
        var localeDefaults = buildLocale(locale || available.defaultCode, available.map).options;
        var dir = firstDefined(// based on options computed so far, is direction RTL?
        this.dynamicOverrides.dir, this.overrides.dir, localeDefaults.dir);
        var dirDefaults = dir === 'rtl' ? rtlDefaults : {};
        this.dirDefaults = dirDefaults;
        this.localeDefaults = localeDefaults;
        this.computed = mergeOptions([
            globalDefaults,
            dirDefaults,
            localeDefaults,
            this.overrides,
            this.dynamicOverrides
        ]);
    };
    return OptionsManager;
}());

var calendarSystemClassMap = {};
function registerCalendarSystem(name, theClass) {
    calendarSystemClassMap[name] = theClass;
}
function createCalendarSystem(name) {
    return new calendarSystemClassMap[name]();
}
var GregorianCalendarSystem = /** @class */ (function () {
    function GregorianCalendarSystem() {
    }
    GregorianCalendarSystem.prototype.getMarkerYear = function (d) {
        return d.getUTCFullYear();
    };
    GregorianCalendarSystem.prototype.getMarkerMonth = function (d) {
        return d.getUTCMonth();
    };
    GregorianCalendarSystem.prototype.getMarkerDay = function (d) {
        return d.getUTCDate();
    };
    GregorianCalendarSystem.prototype.arrayToMarker = function (arr) {
        return arrayToUtcDate(arr);
    };
    GregorianCalendarSystem.prototype.markerToArray = function (marker) {
        return dateToUtcArray(marker);
    };
    return GregorianCalendarSystem;
}());
registerCalendarSystem('gregory', GregorianCalendarSystem);

var ISO_RE = /^\s*(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function parse(str) {
    var m = ISO_RE.exec(str);
    if (m) {
        var marker = new Date(Date.UTC(Number(m[1]), m[3] ? Number(m[3]) - 1 : 0, Number(m[5] || 1), Number(m[7] || 0), Number(m[8] || 0), Number(m[10] || 0), m[12] ? Number('0.' + m[12]) * 1000 : 0));
        if (isValidDate(marker)) {
            var timeZoneOffset = null;
            if (m[13]) {
                timeZoneOffset = (m[15] === '-' ? -1 : 1) * (Number(m[16] || 0) * 60 +
                    Number(m[18] || 0));
            }
            return {
                marker: marker,
                isTimeUnspecified: !m[6],
                timeZoneOffset: timeZoneOffset
            };
        }
    }
    return null;
}

var DateEnv = /** @class */ (function () {
    function DateEnv(settings) {
        var timeZone = this.timeZone = settings.timeZone;
        var isNamedTimeZone = timeZone !== 'local' && timeZone !== 'UTC';
        if (settings.namedTimeZoneImpl && isNamedTimeZone) {
            this.namedTimeZoneImpl = new settings.namedTimeZoneImpl(timeZone);
        }
        this.canComputeOffset = Boolean(!isNamedTimeZone || this.namedTimeZoneImpl);
        this.calendarSystem = createCalendarSystem(settings.calendarSystem);
        this.locale = settings.locale;
        this.weekDow = settings.locale.week.dow;
        this.weekDoy = settings.locale.week.doy;
        if (settings.weekNumberCalculation === 'ISO') {
            this.weekDow = 1;
            this.weekDoy = 4;
        }
        if (typeof settings.firstDay === 'number') {
            this.weekDow = settings.firstDay;
        }
        if (typeof settings.weekNumberCalculation === 'function') {
            this.weekNumberFunc = settings.weekNumberCalculation;
        }
        this.weekLabel = settings.weekLabel != null ? settings.weekLabel : settings.locale.options.weekLabel;
        this.cmdFormatter = settings.cmdFormatter;
    }
    // Creating / Parsing
    DateEnv.prototype.createMarker = function (input) {
        var meta = this.createMarkerMeta(input);
        if (meta === null) {
            return null;
        }
        return meta.marker;
    };
    DateEnv.prototype.createNowMarker = function () {
        if (this.canComputeOffset) {
            return this.timestampToMarker(new Date().valueOf());
        }
        else {
            // if we can't compute the current date val for a timezone,
            // better to give the current local date vals than UTC
            return arrayToUtcDate(dateToLocalArray(new Date()));
        }
    };
    DateEnv.prototype.createMarkerMeta = function (input) {
        if (typeof input === 'string') {
            return this.parse(input);
        }
        var marker = null;
        if (typeof input === 'number') {
            marker = this.timestampToMarker(input);
        }
        else if (input instanceof Date) {
            input = input.valueOf();
            if (!isNaN(input)) {
                marker = this.timestampToMarker(input);
            }
        }
        else if (Array.isArray(input)) {
            marker = arrayToUtcDate(input);
        }
        if (marker === null || !isValidDate(marker)) {
            return null;
        }
        return { marker: marker, isTimeUnspecified: false, forcedTzo: null };
    };
    DateEnv.prototype.parse = function (s) {
        var parts = parse(s);
        if (parts === null) {
            return null;
        }
        var marker = parts.marker;
        var forcedTzo = null;
        if (parts.timeZoneOffset !== null) {
            if (this.canComputeOffset) {
                marker = this.timestampToMarker(marker.valueOf() - parts.timeZoneOffset * 60 * 1000);
            }
            else {
                forcedTzo = parts.timeZoneOffset;
            }
        }
        return { marker: marker, isTimeUnspecified: parts.isTimeUnspecified, forcedTzo: forcedTzo };
    };
    // Accessors
    DateEnv.prototype.getYear = function (marker) {
        return this.calendarSystem.getMarkerYear(marker);
    };
    DateEnv.prototype.getMonth = function (marker) {
        return this.calendarSystem.getMarkerMonth(marker);
    };
    // Adding / Subtracting
    DateEnv.prototype.add = function (marker, dur) {
        var a = this.calendarSystem.markerToArray(marker);
        a[0] += dur.years;
        a[1] += dur.months;
        a[2] += dur.days;
        a[6] += dur.milliseconds;
        return this.calendarSystem.arrayToMarker(a);
    };
    DateEnv.prototype.subtract = function (marker, dur) {
        var a = this.calendarSystem.markerToArray(marker);
        a[0] -= dur.years;
        a[1] -= dur.months;
        a[2] -= dur.days;
        a[6] -= dur.milliseconds;
        return this.calendarSystem.arrayToMarker(a);
    };
    DateEnv.prototype.addYears = function (marker, n) {
        var a = this.calendarSystem.markerToArray(marker);
        a[0] += n;
        return this.calendarSystem.arrayToMarker(a);
    };
    DateEnv.prototype.addMonths = function (marker, n) {
        var a = this.calendarSystem.markerToArray(marker);
        a[1] += n;
        return this.calendarSystem.arrayToMarker(a);
    };
    // Diffing Whole Units
    DateEnv.prototype.diffWholeYears = function (m0, m1) {
        var calendarSystem = this.calendarSystem;
        if (timeAsMs(m0) === timeAsMs(m1) &&
            calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1) &&
            calendarSystem.getMarkerMonth(m0) === calendarSystem.getMarkerMonth(m1)) {
            return calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0);
        }
        return null;
    };
    DateEnv.prototype.diffWholeMonths = function (m0, m1) {
        var calendarSystem = this.calendarSystem;
        if (timeAsMs(m0) === timeAsMs(m1) &&
            calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1)) {
            return (calendarSystem.getMarkerMonth(m1) - calendarSystem.getMarkerMonth(m0)) +
                (calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0)) * 12;
        }
        return null;
    };
    // Range / Duration
    DateEnv.prototype.greatestWholeUnit = function (m0, m1) {
        var n = this.diffWholeYears(m0, m1);
        if (n !== null) {
            return { unit: 'year', value: n };
        }
        n = this.diffWholeMonths(m0, m1);
        if (n !== null) {
            return { unit: 'month', value: n };
        }
        n = diffWholeWeeks(m0, m1);
        if (n !== null) {
            return { unit: 'week', value: n };
        }
        n = diffWholeDays(m0, m1);
        if (n !== null) {
            return { unit: 'day', value: n };
        }
        n = diffHours(m0, m1);
        if (isInt(n)) {
            return { unit: 'hour', value: n };
        }
        n = diffMinutes(m0, m1);
        if (isInt(n)) {
            return { unit: 'minute', value: n };
        }
        n = diffSeconds(m0, m1);
        if (isInt(n)) {
            return { unit: 'second', value: n };
        }
        return { unit: 'millisecond', value: m1.valueOf() - m0.valueOf() };
    };
    DateEnv.prototype.countDurationsBetween = function (m0, m1, d) {
        // TODO: can use greatestWholeUnit
        var diff;
        if (d.years) {
            diff = this.diffWholeYears(m0, m1);
            if (diff !== null) {
                return diff / asRoughYears(d);
            }
        }
        if (d.months) {
            diff = this.diffWholeMonths(m0, m1);
            if (diff !== null) {
                return diff / asRoughMonths(d);
            }
        }
        if (d.days) {
            diff = diffWholeDays(m0, m1);
            if (diff !== null) {
                return diff / asRoughDays(d);
            }
        }
        return (m1.valueOf() - m0.valueOf()) / asRoughMs(d);
    };
    // Start-Of
    DateEnv.prototype.startOf = function (m, unit) {
        if (unit === 'year') {
            return this.startOfYear(m);
        }
        else if (unit === 'month') {
            return this.startOfMonth(m);
        }
        else if (unit === 'week') {
            return this.startOfWeek(m);
        }
        else if (unit === 'day') {
            return startOfDay(m);
        }
        else if (unit === 'hour') {
            return startOfHour(m);
        }
        else if (unit === 'minute') {
            return startOfMinute(m);
        }
        else if (unit === 'second') {
            return startOfSecond(m);
        }
    };
    DateEnv.prototype.startOfYear = function (m) {
        return this.calendarSystem.arrayToMarker([
            this.calendarSystem.getMarkerYear(m)
        ]);
    };
    DateEnv.prototype.startOfMonth = function (m) {
        return this.calendarSystem.arrayToMarker([
            this.calendarSystem.getMarkerYear(m),
            this.calendarSystem.getMarkerMonth(m)
        ]);
    };
    DateEnv.prototype.startOfWeek = function (m) {
        return this.calendarSystem.arrayToMarker([
            this.calendarSystem.getMarkerYear(m),
            this.calendarSystem.getMarkerMonth(m),
            m.getUTCDate() - ((m.getUTCDay() - this.weekDow + 7) % 7)
        ]);
    };
    // Week Number
    DateEnv.prototype.computeWeekNumber = function (marker) {
        if (this.weekNumberFunc) {
            return this.weekNumberFunc(this.toDate(marker));
        }
        else {
            return weekOfYear(marker, this.weekDow, this.weekDoy);
        }
    };
    // TODO: choke on timeZoneName: long
    DateEnv.prototype.format = function (marker, formatter, dateOptions) {
        if (dateOptions === void 0) { dateOptions = {}; }
        return formatter.format({
            marker: marker,
            timeZoneOffset: dateOptions.forcedTzo != null ?
                dateOptions.forcedTzo :
                this.offsetForMarker(marker)
        }, this);
    };
    DateEnv.prototype.formatRange = function (start, end, formatter, dateOptions) {
        if (dateOptions === void 0) { dateOptions = {}; }
        if (dateOptions.isEndExclusive) {
            end = addMs(end, -1);
        }
        return formatter.formatRange({
            marker: start,
            timeZoneOffset: dateOptions.forcedStartTzo != null ?
                dateOptions.forcedStartTzo :
                this.offsetForMarker(start)
        }, {
            marker: end,
            timeZoneOffset: dateOptions.forcedEndTzo != null ?
                dateOptions.forcedEndTzo :
                this.offsetForMarker(end)
        }, this);
    };
    DateEnv.prototype.formatIso = function (marker, extraOptions) {
        if (extraOptions === void 0) { extraOptions = {}; }
        var timeZoneOffset = null;
        if (!extraOptions.omitTimeZoneOffset) {
            if (extraOptions.forcedTzo != null) {
                timeZoneOffset = extraOptions.forcedTzo;
            }
            else {
                timeZoneOffset = this.offsetForMarker(marker);
            }
        }
        return buildIsoString(marker, timeZoneOffset, extraOptions.omitTime);
    };
    // TimeZone
    DateEnv.prototype.timestampToMarker = function (ms) {
        if (this.timeZone === 'local') {
            return arrayToUtcDate(dateToLocalArray(new Date(ms)));
        }
        else if (this.timeZone === 'UTC' || !this.namedTimeZoneImpl) {
            return new Date(ms);
        }
        else {
            return arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(ms));
        }
    };
    DateEnv.prototype.offsetForMarker = function (m) {
        if (this.timeZone === 'local') {
            return -arrayToLocalDate(dateToUtcArray(m)).getTimezoneOffset(); // convert "inverse" offset to "normal" offset
        }
        else if (this.timeZone === 'UTC') {
            return 0;
        }
        else if (this.namedTimeZoneImpl) {
            return this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m));
        }
        return null;
    };
    // Conversion
    DateEnv.prototype.toDate = function (m, forcedTzo) {
        if (this.timeZone === 'local') {
            return arrayToLocalDate(dateToUtcArray(m));
        }
        else if (this.timeZone === 'UTC') {
            return new Date(m.valueOf()); // make sure it's a copy
        }
        else if (!this.namedTimeZoneImpl) {
            return new Date(m.valueOf() - (forcedTzo || 0));
        }
        else {
            return new Date(m.valueOf() -
                this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m)) * 1000 * 60 // convert minutes -> ms
            );
        }
    };
    return DateEnv;
}());

var SIMPLE_SOURCE_PROPS = {
    id: String,
    allDayDefault: Boolean,
    eventDataTransform: Function,
    success: Function,
    failure: Function
};
var uid$2 = 0;
function doesSourceNeedRange(eventSource, calendar) {
    var defs = calendar.pluginSystem.hooks.eventSourceDefs;
    return !defs[eventSource.sourceDefId].ignoreRange;
}
function parseEventSource(raw, calendar) {
    var defs = calendar.pluginSystem.hooks.eventSourceDefs;
    for (var i = defs.length - 1; i >= 0; i--) { // later-added plugins take precedence
        var def = defs[i];
        var meta = def.parseMeta(raw);
        if (meta) {
            var res = parseEventSourceProps(typeof raw === 'object' ? raw : {}, meta, i, calendar);
            res._raw = raw;
            return res;
        }
    }
    return null;
}
function parseEventSourceProps(raw, meta, sourceDefId, calendar) {
    var leftovers0 = {};
    var props = refineProps(raw, SIMPLE_SOURCE_PROPS, {}, leftovers0);
    var leftovers1 = {};
    var ui = processUnscopedUiProps(leftovers0, calendar, leftovers1);
    props.isFetching = false;
    props.latestFetchId = '';
    props.fetchRange = null;
    props.publicId = String(raw.id || '');
    props.sourceId = String(uid$2++);
    props.sourceDefId = sourceDefId;
    props.meta = meta;
    props.ui = ui;
    props.extendedProps = leftovers1;
    return props;
}

function reduceEventSources (eventSources, action, dateProfile, calendar) {
    switch (action.type) {
        case 'ADD_EVENT_SOURCES': // already parsed
            return addSources(eventSources, action.sources, dateProfile ? dateProfile.activeRange : null, calendar);
        case 'REMOVE_EVENT_SOURCE':
            return removeSource(eventSources, action.sourceId);
        case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
        case 'NEXT':
        case 'SET_DATE':
        case 'SET_VIEW_TYPE':
            if (dateProfile) {
                return fetchDirtySources(eventSources, dateProfile.activeRange, calendar);
            }
            else {
                return eventSources;
            }
        case 'FETCH_EVENT_SOURCES':
        case 'CHANGE_TIMEZONE':
            return fetchSourcesByIds(eventSources, action.sourceIds ?
                arrayToHash(action.sourceIds) :
                excludeStaticSources(eventSources, calendar), dateProfile ? dateProfile.activeRange : null, calendar);
        case 'RECEIVE_EVENTS':
        case 'RECEIVE_EVENT_ERROR':
            return receiveResponse(eventSources, action.sourceId, action.fetchId, action.fetchRange);
        case 'REMOVE_ALL_EVENT_SOURCES':
            return {};
        default:
            return eventSources;
    }
}
var uid$3 = 0;
function addSources(eventSourceHash, sources, fetchRange, calendar) {
    var hash = {};
    for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
        var source = sources_1[_i];
        hash[source.sourceId] = source;
    }
    if (fetchRange) {
        hash = fetchDirtySources(hash, fetchRange, calendar);
    }
    return __assign({}, eventSourceHash, hash);
}
function removeSource(eventSourceHash, sourceId) {
    return filterHash(eventSourceHash, function (eventSource) {
        return eventSource.sourceId !== sourceId;
    });
}
function fetchDirtySources(sourceHash, fetchRange, calendar) {
    return fetchSourcesByIds(sourceHash, filterHash(sourceHash, function (eventSource) {
        return isSourceDirty(eventSource, fetchRange, calendar);
    }), fetchRange, calendar);
}
function isSourceDirty(eventSource, fetchRange, calendar) {
    if (!doesSourceNeedRange(eventSource, calendar)) {
        return !eventSource.latestFetchId;
    }
    else {
        return !calendar.opt('lazyFetching') ||
            !eventSource.fetchRange ||
            fetchRange.start < eventSource.fetchRange.start ||
            fetchRange.end > eventSource.fetchRange.end;
    }
}
function fetchSourcesByIds(prevSources, sourceIdHash, fetchRange, calendar) {
    var nextSources = {};
    for (var sourceId in prevSources) {
        var source = prevSources[sourceId];
        if (sourceIdHash[sourceId]) {
            nextSources[sourceId] = fetchSource(source, fetchRange, calendar);
        }
        else {
            nextSources[sourceId] = source;
        }
    }
    return nextSources;
}
function fetchSource(eventSource, fetchRange, calendar) {
    var sourceDef = calendar.pluginSystem.hooks.eventSourceDefs[eventSource.sourceDefId];
    var fetchId = String(uid$3++);
    sourceDef.fetch({
        eventSource: eventSource,
        calendar: calendar,
        range: fetchRange
    }, function (res) {
        var rawEvents = res.rawEvents;
        var calSuccess = calendar.opt('eventSourceSuccess');
        var calSuccessRes;
        var sourceSuccessRes;
        if (eventSource.success) {
            sourceSuccessRes = eventSource.success(rawEvents, res.xhr);
        }
        if (calSuccess) {
            calSuccessRes = calSuccess(rawEvents, res.xhr);
        }
        rawEvents = sourceSuccessRes || calSuccessRes || rawEvents;
        calendar.dispatch({
            type: 'RECEIVE_EVENTS',
            sourceId: eventSource.sourceId,
            fetchId: fetchId,
            fetchRange: fetchRange,
            rawEvents: rawEvents
        });
    }, function (error) {
        var callFailure = calendar.opt('eventSourceFailure');
        console.warn(error.message, error);
        if (eventSource.failure) {
            eventSource.failure(error);
        }
        if (callFailure) {
            callFailure(error);
        }
        calendar.dispatch({
            type: 'RECEIVE_EVENT_ERROR',
            sourceId: eventSource.sourceId,
            fetchId: fetchId,
            fetchRange: fetchRange,
            error: error
        });
    });
    return __assign({}, eventSource, { isFetching: true, latestFetchId: fetchId });
}
function receiveResponse(sourceHash, sourceId, fetchId, fetchRange) {
    var _a;
    var eventSource = sourceHash[sourceId];
    if (eventSource && // not already removed
        fetchId === eventSource.latestFetchId) {
        return __assign({}, sourceHash, (_a = {}, _a[sourceId] = __assign({}, eventSource, { isFetching: false, fetchRange: fetchRange }), _a));
    }
    return sourceHash;
}
function excludeStaticSources(eventSources, calendar) {
    return filterHash(eventSources, function (eventSource) {
        return doesSourceNeedRange(eventSource, calendar);
    });
}

var DateProfileGenerator = /** @class */ (function () {
    function DateProfileGenerator(viewSpec, calendar) {
        this.viewSpec = viewSpec;
        this.options = viewSpec.options;
        this.dateEnv = calendar.dateEnv;
        this.calendar = calendar;
        this.initHiddenDays();
    }
    /* Date Range Computation
    ------------------------------------------------------------------------------------------------------------------*/
    // Builds a structure with info about what the dates/ranges will be for the "prev" view.
    DateProfileGenerator.prototype.buildPrev = function (currentDateProfile, currentDate) {
        var dateEnv = this.dateEnv;
        var prevDate = dateEnv.subtract(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
        currentDateProfile.dateIncrement);
        return this.build(prevDate, -1);
    };
    // Builds a structure with info about what the dates/ranges will be for the "next" view.
    DateProfileGenerator.prototype.buildNext = function (currentDateProfile, currentDate) {
        var dateEnv = this.dateEnv;
        var nextDate = dateEnv.add(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
        currentDateProfile.dateIncrement);
        return this.build(nextDate, 1);
    };
    // Builds a structure holding dates/ranges for rendering around the given date.
    // Optional direction param indicates whether the date is being incremented/decremented
    // from its previous value. decremented = -1, incremented = 1 (default).
    DateProfileGenerator.prototype.build = function (currentDate, direction, forceToValid) {
        if (forceToValid === void 0) { forceToValid = false; }
        var validRange;
        var minTime = null;
        var maxTime = null;
        var currentInfo;
        var isRangeAllDay;
        var renderRange;
        var activeRange;
        var isValid;
        validRange = this.buildValidRange();
        validRange = this.trimHiddenDays(validRange);
        if (forceToValid) {
            currentDate = constrainMarkerToRange(currentDate, validRange);
        }
        currentInfo = this.buildCurrentRangeInfo(currentDate, direction);
        isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
        renderRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.range), currentInfo.unit, isRangeAllDay);
        renderRange = this.trimHiddenDays(renderRange);
        activeRange = renderRange;
        if (!this.options.showNonCurrentDates) {
            activeRange = intersectRanges(activeRange, currentInfo.range);
        }
        minTime = createDuration(this.options.minTime);
        maxTime = createDuration(this.options.maxTime);
        activeRange = this.adjustActiveRange(activeRange, minTime, maxTime);
        activeRange = intersectRanges(activeRange, validRange); // might return null
        // it's invalid if the originally requested date is not contained,
        // or if the range is completely outside of the valid range.
        isValid = rangesIntersect(currentInfo.range, validRange);
        return {
            // constraint for where prev/next operations can go and where events can be dragged/resized to.
            // an object with optional start and end properties.
            validRange: validRange,
            // range the view is formally responsible for.
            // for example, a month view might have 1st-31st, excluding padded dates
            currentRange: currentInfo.range,
            // name of largest unit being displayed, like "month" or "week"
            currentRangeUnit: currentInfo.unit,
            isRangeAllDay: isRangeAllDay,
            // dates that display events and accept drag-n-drop
            // will be `null` if no dates accept events
            activeRange: activeRange,
            // date range with a rendered skeleton
            // includes not-active days that need some sort of DOM
            renderRange: renderRange,
            // Duration object that denotes the first visible time of any given day
            minTime: minTime,
            // Duration object that denotes the exclusive visible end time of any given day
            maxTime: maxTime,
            isValid: isValid,
            // how far the current date will move for a prev/next operation
            dateIncrement: this.buildDateIncrement(currentInfo.duration)
            // pass a fallback (might be null) ^
        };
    };
    // Builds an object with optional start/end properties.
    // Indicates the minimum/maximum dates to display.
    // not responsible for trimming hidden days.
    DateProfileGenerator.prototype.buildValidRange = function () {
        return this.getRangeOption('validRange', this.calendar.getNow()) ||
            { start: null, end: null }; // completely open-ended
    };
    // Builds a structure with info about the "current" range, the range that is
    // highlighted as being the current month for example.
    // See build() for a description of `direction`.
    // Guaranteed to have `range` and `unit` properties. `duration` is optional.
    DateProfileGenerator.prototype.buildCurrentRangeInfo = function (date, direction) {
        var _a = this, viewSpec = _a.viewSpec, dateEnv = _a.dateEnv;
        var duration = null;
        var unit = null;
        var range = null;
        var dayCount;
        if (viewSpec.duration) {
            duration = viewSpec.duration;
            unit = viewSpec.durationUnit;
            range = this.buildRangeFromDuration(date, direction, duration, unit);
        }
        else if ((dayCount = this.options.dayCount)) {
            unit = 'day';
            range = this.buildRangeFromDayCount(date, direction, dayCount);
        }
        else if ((range = this.buildCustomVisibleRange(date))) {
            unit = dateEnv.greatestWholeUnit(range.start, range.end).unit;
        }
        else {
            duration = this.getFallbackDuration();
            unit = greatestDurationDenominator(duration).unit;
            range = this.buildRangeFromDuration(date, direction, duration, unit);
        }
        return { duration: duration, unit: unit, range: range };
    };
    DateProfileGenerator.prototype.getFallbackDuration = function () {
        return createDuration({ day: 1 });
    };
    // Returns a new activeRange to have time values (un-ambiguate)
    // minTime or maxTime causes the range to expand.
    DateProfileGenerator.prototype.adjustActiveRange = function (range, minTime, maxTime) {
        var dateEnv = this.dateEnv;
        var start = range.start;
        var end = range.end;
        if (this.viewSpec.class.prototype.usesMinMaxTime) {
            // expand active range if minTime is negative (why not when positive?)
            if (asRoughDays(minTime) < 0) {
                start = startOfDay(start); // necessary?
                start = dateEnv.add(start, minTime);
            }
            // expand active range if maxTime is beyond one day (why not when positive?)
            if (asRoughDays(maxTime) > 1) {
                end = startOfDay(end); // necessary?
                end = addDays(end, -1);
                end = dateEnv.add(end, maxTime);
            }
        }
        return { start: start, end: end };
    };
    // Builds the "current" range when it is specified as an explicit duration.
    // `unit` is the already-computed greatestDurationDenominator unit of duration.
    DateProfileGenerator.prototype.buildRangeFromDuration = function (date, direction, duration, unit) {
        var dateEnv = this.dateEnv;
        var alignment = this.options.dateAlignment;
        var dateIncrementInput;
        var dateIncrementDuration;
        var start;
        var end;
        var res;
        // compute what the alignment should be
        if (!alignment) {
            dateIncrementInput = this.options.dateIncrement;
            if (dateIncrementInput) {
                dateIncrementDuration = createDuration(dateIncrementInput);
                // use the smaller of the two units
                if (asRoughMs(dateIncrementDuration) < asRoughMs(duration)) {
                    alignment = greatestDurationDenominator(dateIncrementDuration, !getWeeksFromInput(dateIncrementInput)).unit;
                }
                else {
                    alignment = unit;
                }
            }
            else {
                alignment = unit;
            }
        }
        // if the view displays a single day or smaller
        if (asRoughDays(duration) <= 1) {
            if (this.isHiddenDay(start)) {
                start = this.skipHiddenDays(start, direction);
                start = startOfDay(start);
            }
        }
        function computeRes() {
            start = dateEnv.startOf(date, alignment);
            end = dateEnv.add(start, duration);
            res = { start: start, end: end };
        }
        computeRes();
        // if range is completely enveloped by hidden days, go past the hidden days
        if (!this.trimHiddenDays(res)) {
            date = this.skipHiddenDays(date, direction);
            computeRes();
        }
        return res;
    };
    // Builds the "current" range when a dayCount is specified.
    DateProfileGenerator.prototype.buildRangeFromDayCount = function (date, direction, dayCount) {
        var dateEnv = this.dateEnv;
        var customAlignment = this.options.dateAlignment;
        var runningCount = 0;
        var start = date;
        var end;
        if (customAlignment) {
            start = dateEnv.startOf(start, customAlignment);
        }
        start = startOfDay(start);
        start = this.skipHiddenDays(start, direction);
        end = start;
        do {
            end = addDays(end, 1);
            if (!this.isHiddenDay(end)) {
                runningCount++;
            }
        } while (runningCount < dayCount);
        return { start: start, end: end };
    };
    // Builds a normalized range object for the "visible" range,
    // which is a way to define the currentRange and activeRange at the same time.
    DateProfileGenerator.prototype.buildCustomVisibleRange = function (date) {
        var dateEnv = this.dateEnv;
        var visibleRange = this.getRangeOption('visibleRange', dateEnv.toDate(date));
        if (visibleRange && (visibleRange.start == null || visibleRange.end == null)) {
            return null;
        }
        return visibleRange;
    };
    // Computes the range that will represent the element/cells for *rendering*,
    // but which may have voided days/times.
    // not responsible for trimming hidden days.
    DateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
        return currentRange;
    };
    // Compute the duration value that should be added/substracted to the current date
    // when a prev/next operation happens.
    DateProfileGenerator.prototype.buildDateIncrement = function (fallback) {
        var dateIncrementInput = this.options.dateIncrement;
        var customAlignment;
        if (dateIncrementInput) {
            return createDuration(dateIncrementInput);
        }
        else if ((customAlignment = this.options.dateAlignment)) {
            return createDuration(1, customAlignment);
        }
        else if (fallback) {
            return fallback;
        }
        else {
            return createDuration({ days: 1 });
        }
    };
    // Arguments after name will be forwarded to a hypothetical function value
    // WARNING: passed-in arguments will be given to generator functions as-is and can cause side-effects.
    // Always clone your objects if you fear mutation.
    DateProfileGenerator.prototype.getRangeOption = function (name) {
        var otherArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            otherArgs[_i - 1] = arguments[_i];
        }
        var val = this.options[name];
        if (typeof val === 'function') {
            val = val.apply(null, otherArgs);
        }
        if (val) {
            val = parseRange(val, this.dateEnv);
        }
        if (val) {
            val = computeVisibleDayRange(val);
        }
        return val;
    };
    /* Hidden Days
    ------------------------------------------------------------------------------------------------------------------*/
    // Initializes internal variables related to calculating hidden days-of-week
    DateProfileGenerator.prototype.initHiddenDays = function () {
        var hiddenDays = this.options.hiddenDays || []; // array of day-of-week indices that are hidden
        var isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)
        var dayCnt = 0;
        var i;
        if (this.options.weekends === false) {
            hiddenDays.push(0, 6); // 0=sunday, 6=saturday
        }
        for (i = 0; i < 7; i++) {
            if (!(isHiddenDayHash[i] = hiddenDays.indexOf(i) !== -1)) {
                dayCnt++;
            }
        }
        if (!dayCnt) {
            throw new Error('invalid hiddenDays'); // all days were hidden? bad.
        }
        this.isHiddenDayHash = isHiddenDayHash;
    };
    // Remove days from the beginning and end of the range that are computed as hidden.
    // If the whole range is trimmed off, returns null
    DateProfileGenerator.prototype.trimHiddenDays = function (range) {
        var start = range.start;
        var end = range.end;
        if (start) {
            start = this.skipHiddenDays(start);
        }
        if (end) {
            end = this.skipHiddenDays(end, -1, true);
        }
        if (start == null || end == null || start < end) {
            return { start: start, end: end };
        }
        return null;
    };
    // Is the current day hidden?
    // `day` is a day-of-week index (0-6), or a Date (used for UTC)
    DateProfileGenerator.prototype.isHiddenDay = function (day) {
        if (day instanceof Date) {
            day = day.getUTCDay();
        }
        return this.isHiddenDayHash[day];
    };
    // Incrementing the current day until it is no longer a hidden day, returning a copy.
    // DOES NOT CONSIDER validRange!
    // If the initial value of `date` is not a hidden day, don't do anything.
    // Pass `isExclusive` as `true` if you are dealing with an end date.
    // `inc` defaults to `1` (increment one day forward each time)
    DateProfileGenerator.prototype.skipHiddenDays = function (date, inc, isExclusive) {
        if (inc === void 0) { inc = 1; }
        if (isExclusive === void 0) { isExclusive = false; }
        while (this.isHiddenDayHash[(date.getUTCDay() + (isExclusive ? inc : 0) + 7) % 7]) {
            date = addDays(date, inc);
        }
        return date;
    };
    return DateProfileGenerator;
}());
// TODO: find a way to avoid comparing DateProfiles. it's tedious
function isDateProfilesEqual(p0, p1) {
    return rangesEqual(p0.validRange, p1.validRange) &&
        rangesEqual(p0.activeRange, p1.activeRange) &&
        rangesEqual(p0.renderRange, p1.renderRange) &&
        durationsEqual(p0.minTime, p1.minTime) &&
        durationsEqual(p0.maxTime, p1.maxTime);
    /*
    TODO: compare more?
      currentRange: DateRange
      currentRangeUnit: string
      isRangeAllDay: boolean
      isValid: boolean
      dateIncrement: Duration
    */
}

function reduce (state, action, calendar) {
    var viewType = reduceViewType(state.viewType, action);
    var dateProfile = reduceDateProfile(state.dateProfile, action, state.currentDate, viewType, calendar);
    var eventSources = reduceEventSources(state.eventSources, action, dateProfile, calendar);
    var nextState = __assign({}, state, { viewType: viewType,
        dateProfile: dateProfile, currentDate: reduceCurrentDate(state.currentDate, action, dateProfile), eventSources: eventSources, eventStore: reduceEventStore(state.eventStore, action, eventSources, dateProfile, calendar), dateSelection: reduceDateSelection(state.dateSelection, action, calendar), eventSelection: reduceSelectedEvent(state.eventSelection, action), eventDrag: reduceEventDrag(state.eventDrag, action, eventSources, calendar), eventResize: reduceEventResize(state.eventResize, action, eventSources, calendar), eventSourceLoadingLevel: computeLoadingLevel(eventSources), loadingLevel: computeLoadingLevel(eventSources) });
    for (var _i = 0, _a = calendar.pluginSystem.hooks.reducers; _i < _a.length; _i++) {
        var reducerFunc = _a[_i];
        nextState = reducerFunc(nextState, action, calendar);
    }
    // console.log(action.type, nextState)
    return nextState;
}
function reduceViewType(currentViewType, action) {
    switch (action.type) {
        case 'SET_VIEW_TYPE':
            return action.viewType;
        default:
            return currentViewType;
    }
}
function reduceDateProfile(currentDateProfile, action, currentDate, viewType, calendar) {
    var newDateProfile;
    switch (action.type) {
        case 'PREV':
            newDateProfile = calendar.dateProfileGenerators[viewType].buildPrev(currentDateProfile, currentDate);
            break;
        case 'NEXT':
            newDateProfile = calendar.dateProfileGenerators[viewType].buildNext(currentDateProfile, currentDate);
            break;
        case 'SET_DATE':
            if (!currentDateProfile.activeRange ||
                !rangeContainsMarker(currentDateProfile.currentRange, action.dateMarker)) {
                newDateProfile = calendar.dateProfileGenerators[viewType].build(action.dateMarker, undefined, true // forceToValid
                );
            }
            break;
        case 'SET_VIEW_TYPE':
            var generator = calendar.dateProfileGenerators[viewType];
            if (!generator) {
                throw new Error(viewType ?
                    'The FullCalendar view "' + viewType + '" does not exist. Make sure your plugins are loaded correctly.' :
                    'No available FullCalendar view plugins.');
            }
            newDateProfile = generator.build(action.dateMarker || currentDate, undefined, true // forceToValid
            );
            break;
    }
    if (newDateProfile &&
        newDateProfile.isValid &&
        !(currentDateProfile && isDateProfilesEqual(currentDateProfile, newDateProfile))) {
        return newDateProfile;
    }
    else {
        return currentDateProfile;
    }
}
function reduceCurrentDate(currentDate, action, dateProfile) {
    switch (action.type) {
        case 'PREV':
        case 'NEXT':
            if (!rangeContainsMarker(dateProfile.currentRange, currentDate)) {
                return dateProfile.currentRange.start;
            }
            else {
                return currentDate;
            }
        case 'SET_DATE':
        case 'SET_VIEW_TYPE':
            var newDate = action.dateMarker || currentDate;
            if (dateProfile.activeRange && !rangeContainsMarker(dateProfile.activeRange, newDate)) {
                return dateProfile.currentRange.start;
            }
            else {
                return newDate;
            }
        default:
            return currentDate;
    }
}
function reduceDateSelection(currentSelection, action, calendar) {
    switch (action.type) {
        case 'SELECT_DATES':
            return action.selection;
        case 'UNSELECT_DATES':
            return null;
        default:
            return currentSelection;
    }
}
function reduceSelectedEvent(currentInstanceId, action) {
    switch (action.type) {
        case 'SELECT_EVENT':
            return action.eventInstanceId;
        case 'UNSELECT_EVENT':
            return '';
        default:
            return currentInstanceId;
    }
}
function reduceEventDrag(currentDrag, action, sources, calendar) {
    switch (action.type) {
        case 'SET_EVENT_DRAG':
            var newDrag = action.state;
            return {
                affectedEvents: newDrag.affectedEvents,
                mutatedEvents: newDrag.mutatedEvents,
                isEvent: newDrag.isEvent,
                origSeg: newDrag.origSeg
            };
        case 'UNSET_EVENT_DRAG':
            return null;
        default:
            return currentDrag;
    }
}
function reduceEventResize(currentResize, action, sources, calendar) {
    switch (action.type) {
        case 'SET_EVENT_RESIZE':
            var newResize = action.state;
            return {
                affectedEvents: newResize.affectedEvents,
                mutatedEvents: newResize.mutatedEvents,
                isEvent: newResize.isEvent,
                origSeg: newResize.origSeg
            };
        case 'UNSET_EVENT_RESIZE':
            return null;
        default:
            return currentResize;
    }
}
function computeLoadingLevel(eventSources) {
    var cnt = 0;
    for (var sourceId in eventSources) {
        if (eventSources[sourceId].isFetching) {
            cnt++;
        }
    }
    return cnt;
}

var STANDARD_PROPS = {
    start: null,
    end: null,
    allDay: Boolean
};
function parseDateSpan(raw, dateEnv, defaultDuration) {
    var span = parseOpenDateSpan(raw, dateEnv);
    var range = span.range;
    if (!range.start) {
        return null;
    }
    if (!range.end) {
        if (defaultDuration == null) {
            return null;
        }
        else {
            range.end = dateEnv.add(range.start, defaultDuration);
        }
    }
    return span;
}
/*
TODO: somehow combine with parseRange?
Will return null if the start/end props were present but parsed invalidly.
*/
function parseOpenDateSpan(raw, dateEnv) {
    var leftovers = {};
    var standardProps = refineProps(raw, STANDARD_PROPS, {}, leftovers);
    var startMeta = standardProps.start ? dateEnv.createMarkerMeta(standardProps.start) : null;
    var endMeta = standardProps.end ? dateEnv.createMarkerMeta(standardProps.end) : null;
    var allDay = standardProps.allDay;
    if (allDay == null) {
        allDay = (startMeta && startMeta.isTimeUnspecified) &&
            (!endMeta || endMeta.isTimeUnspecified);
    }
    // use this leftover object as the selection object
    leftovers.range = {
        start: startMeta ? startMeta.marker : null,
        end: endMeta ? endMeta.marker : null
    };
    leftovers.allDay = allDay;
    return leftovers;
}
function isDateSpansEqual(span0, span1) {
    return rangesEqual(span0.range, span1.range) &&
        span0.allDay === span1.allDay &&
        isSpanPropsEqual(span0, span1);
}
// the NON-DATE-RELATED props
function isSpanPropsEqual(span0, span1) {
    for (var propName in span1) {
        if (propName !== 'range' && propName !== 'allDay') {
            if (span0[propName] !== span1[propName]) {
                return false;
            }
        }
    }
    // are there any props that span0 has that span1 DOESN'T have?
    // both have range/allDay, so no need to special-case.
    for (var propName in span0) {
        if (!(propName in span1)) {
            return false;
        }
    }
    return true;
}
function buildDateSpanApi(span, dateEnv) {
    return {
        start: dateEnv.toDate(span.range.start),
        end: dateEnv.toDate(span.range.end),
        startStr: dateEnv.formatIso(span.range.start, { omitTime: span.allDay }),
        endStr: dateEnv.formatIso(span.range.end, { omitTime: span.allDay }),
        allDay: span.allDay
    };
}
function buildDatePointApi(span, dateEnv) {
    return {
        date: dateEnv.toDate(span.range.start),
        dateStr: dateEnv.formatIso(span.range.start, { omitTime: span.allDay }),
        allDay: span.allDay
    };
}
function fabricateEventRange(dateSpan, eventUiBases, calendar) {
    var def = parseEventDef({ editable: false }, '', // sourceId
    dateSpan.allDay, true, // hasEnd
    calendar);
    return {
        def: def,
        ui: compileEventUi(def, eventUiBases),
        instance: createEventInstance(def.defId, dateSpan.range),
        range: dateSpan.range,
        isStart: true,
        isEnd: true
    };
}

function compileViewDefs(defaultConfigs, overrideConfigs) {
    var hash = {};
    var viewType;
    for (viewType in defaultConfigs) {
        ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
    }
    for (viewType in overrideConfigs) {
        ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
    }
    return hash;
}
function ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
    if (hash[viewType]) {
        return hash[viewType];
    }
    var viewDef = buildViewDef(viewType, hash, defaultConfigs, overrideConfigs);
    if (viewDef) {
        hash[viewType] = viewDef;
    }
    return viewDef;
}
function buildViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
    var defaultConfig = defaultConfigs[viewType];
    var overrideConfig = overrideConfigs[viewType];
    var queryProp = function (name) {
        return (defaultConfig && defaultConfig[name] !== null) ? defaultConfig[name] :
            ((overrideConfig && overrideConfig[name] !== null) ? overrideConfig[name] : null);
    };
    var theClass = queryProp('class');
    var superType = queryProp('superType');
    if (!superType && theClass) {
        superType =
            findViewNameBySubclass(theClass, overrideConfigs) ||
                findViewNameBySubclass(theClass, defaultConfigs);
    }
    var superDef = null;
    if (superType) {
        if (superType === viewType) {
            throw new Error('Can\'t have a custom view type that references itself');
        }
        superDef = ensureViewDef(superType, hash, defaultConfigs, overrideConfigs);
    }
    if (!theClass && superDef) {
        theClass = superDef.class;
    }
    if (!theClass) {
        return null; // don't throw a warning, might be settings for a single-unit view
    }
    return {
        type: viewType,
        class: theClass,
        defaults: __assign({}, (superDef ? superDef.defaults : {}), (defaultConfig ? defaultConfig.options : {})),
        overrides: __assign({}, (superDef ? superDef.overrides : {}), (overrideConfig ? overrideConfig.options : {}))
    };
}
function findViewNameBySubclass(viewSubclass, configs) {
    var superProto = Object.getPrototypeOf(viewSubclass.prototype);
    for (var viewType in configs) {
        var parsed = configs[viewType];
        // need DIRECT subclass, so instanceof won't do it
        if (parsed.class && parsed.class.prototype === superProto) {
            return viewType;
        }
    }
    return '';
}

function parseViewConfigs(inputs) {
    return mapHash(inputs, parseViewConfig);
}
var VIEW_DEF_PROPS = {
    type: String,
    class: null
};
function parseViewConfig(input) {
    if (typeof input === 'function') {
        input = { class: input };
    }
    var options = {};
    var props = refineProps(input, VIEW_DEF_PROPS, {}, options);
    return {
        superType: props.type,
        class: props.class,
        options: options
    };
}

function buildViewSpecs(defaultInputs, optionsManager) {
    var defaultConfigs = parseViewConfigs(defaultInputs);
    var overrideConfigs = parseViewConfigs(optionsManager.overrides.views);
    var viewDefs = compileViewDefs(defaultConfigs, overrideConfigs);
    return mapHash(viewDefs, function (viewDef) {
        return buildViewSpec(viewDef, overrideConfigs, optionsManager);
    });
}
function buildViewSpec(viewDef, overrideConfigs, optionsManager) {
    var durationInput = viewDef.overrides.duration ||
        viewDef.defaults.duration ||
        optionsManager.dynamicOverrides.duration ||
        optionsManager.overrides.duration;
    var duration = null;
    var durationUnit = '';
    var singleUnit = '';
    var singleUnitOverrides = {};
    if (durationInput) {
        duration = createDuration(durationInput);
        if (duration) { // valid?
            var denom = greatestDurationDenominator(duration, !getWeeksFromInput(durationInput));
            durationUnit = denom.unit;
            if (denom.value === 1) {
                singleUnit = durationUnit;
                singleUnitOverrides = overrideConfigs[durationUnit] ? overrideConfigs[durationUnit].options : {};
            }
        }
    }
    var queryButtonText = function (options) {
        var buttonTextMap = options.buttonText || {};
        var buttonTextKey = viewDef.defaults.buttonTextKey;
        if (buttonTextKey != null && buttonTextMap[buttonTextKey] != null) {
            return buttonTextMap[buttonTextKey];
        }
        if (buttonTextMap[viewDef.type] != null) {
            return buttonTextMap[viewDef.type];
        }
        if (buttonTextMap[singleUnit] != null) {
            return buttonTextMap[singleUnit];
        }
    };
    return {
        type: viewDef.type,
        class: viewDef.class,
        duration: duration,
        durationUnit: durationUnit,
        singleUnit: singleUnit,
        options: __assign({}, globalDefaults, viewDef.defaults, optionsManager.dirDefaults, optionsManager.localeDefaults, optionsManager.overrides, singleUnitOverrides, viewDef.overrides, optionsManager.dynamicOverrides),
        buttonTextOverride: queryButtonText(optionsManager.dynamicOverrides) ||
            queryButtonText(optionsManager.overrides) || // constructor-specified buttonText lookup hash takes precedence
            viewDef.overrides.buttonText,
        buttonTextDefault: queryButtonText(optionsManager.localeDefaults) ||
            queryButtonText(optionsManager.dirDefaults) ||
            viewDef.defaults.buttonText ||
            queryButtonText(globalDefaults) ||
            viewDef.type // fall back to given view name
    };
}

var Toolbar = /** @class */ (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar(context, extraClassName) {
        var _this = _super.call(this, context) || this;
        _this._renderLayout = memoizeRendering(_this.renderLayout, _this.unrenderLayout);
        _this._updateTitle = memoizeRendering(_this.updateTitle, null, [_this._renderLayout]);
        _this._updateActiveButton = memoizeRendering(_this.updateActiveButton, null, [_this._renderLayout]);
        _this._updateToday = memoizeRendering(_this.updateToday, null, [_this._renderLayout]);
        _this._updatePrev = memoizeRendering(_this.updatePrev, null, [_this._renderLayout]);
        _this._updateNext = memoizeRendering(_this.updateNext, null, [_this._renderLayout]);
        _this.el = createElement('div', { className: 'fc-toolbar ' + extraClassName });
        return _this;
    }
    Toolbar.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this._renderLayout.unrender(); // should unrender everything else
        removeElement(this.el);
    };
    Toolbar.prototype.render = function (props) {
        this._renderLayout(props.layout);
        this._updateTitle(props.title);
        this._updateActiveButton(props.activeButton);
        this._updateToday(props.isTodayEnabled);
        this._updatePrev(props.isPrevEnabled);
        this._updateNext(props.isNextEnabled);
    };
    Toolbar.prototype.renderLayout = function (layout) {
        var el = this.el;
        this.viewsWithButtons = [];
        appendToElement(el, this.renderSection('left', layout.left));
        appendToElement(el, this.renderSection('center', layout.center));
        appendToElement(el, this.renderSection('right', layout.right));
    };
    Toolbar.prototype.unrenderLayout = function () {
        this.el.innerHTML = '';
    };
    Toolbar.prototype.renderSection = function (position, buttonStr) {
        var _this = this;
        var _a = this, theme = _a.theme, calendar = _a.calendar;
        var optionsManager = calendar.optionsManager;
        var viewSpecs = calendar.viewSpecs;
        var sectionEl = createElement('div', { className: 'fc-' + position });
        var calendarCustomButtons = optionsManager.computed.customButtons || {};
        var calendarButtonTextOverrides = optionsManager.overrides.buttonText || {};
        var calendarButtonText = optionsManager.computed.buttonText || {};
        if (buttonStr) {
            buttonStr.split(' ').forEach(function (buttonGroupStr, i) {
                var groupChildren = [];
                var isOnlyButtons = true;
                var groupEl;
                buttonGroupStr.split(',').forEach(function (buttonName, j) {
                    var customButtonProps;
                    var viewSpec;
                    var buttonClick;
                    var buttonIcon; // only one of these will be set
                    var buttonText; // "
                    var buttonInnerHtml;
                    var buttonClasses;
                    var buttonEl;
                    var buttonAriaAttr;
                    if (buttonName === 'title') {
                        groupChildren.push(htmlToElement('<h2>&nbsp;</h2>')); // we always want it to take up height
                        isOnlyButtons = false;
                    }
                    else {
                        if ((customButtonProps = calendarCustomButtons[buttonName])) {
                            buttonClick = function (ev) {
                                if (customButtonProps.click) {
                                    customButtonProps.click.call(buttonEl, ev);
                                }
                            };
                            (buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) ||
                                (buttonIcon = theme.getIconClass(buttonName)) ||
                                (buttonText = customButtonProps.text);
                        }
                        else if ((viewSpec = viewSpecs[buttonName])) {
                            _this.viewsWithButtons.push(buttonName);
                            buttonClick = function () {
                                calendar.changeView(buttonName);
                            };
                            (buttonText = viewSpec.buttonTextOverride) ||
                                (buttonIcon = theme.getIconClass(buttonName)) ||
                                (buttonText = viewSpec.buttonTextDefault);
                        }
                        else if (calendar[buttonName]) { // a calendar method
                            buttonClick = function () {
                                calendar[buttonName]();
                            };
                            (buttonText = calendarButtonTextOverrides[buttonName]) ||
                                (buttonIcon = theme.getIconClass(buttonName)) ||
                                (buttonText = calendarButtonText[buttonName]);
                            //            ^ everything else is considered default
                        }
                        if (buttonClick) {
                            buttonClasses = [
                                'fc-' + buttonName + '-button',
                                theme.getClass('button')
                            ];
                            if (buttonText) {
                                buttonInnerHtml = htmlEscape(buttonText);
                                buttonAriaAttr = '';
                            }
                            else if (buttonIcon) {
                                buttonInnerHtml = "<span class='" + buttonIcon + "'></span>";
                                buttonAriaAttr = ' aria-label="' + buttonName + '"';
                            }
                            buttonEl = htmlToElement(// type="button" so that it doesn't submit a form
                            '<button type="button" class="' + buttonClasses.join(' ') + '"' +
                                buttonAriaAttr +
                                '>' + buttonInnerHtml + '</button>');
                            buttonEl.addEventListener('click', buttonClick);
                            groupChildren.push(buttonEl);
                        }
                    }
                });
                if (groupChildren.length > 1) {
                    groupEl = document.createElement('div');
                    var buttonGroupClassName = theme.getClass('buttonGroup');
                    if (isOnlyButtons && buttonGroupClassName) {
                        groupEl.classList.add(buttonGroupClassName);
                    }
                    appendToElement(groupEl, groupChildren);
                    sectionEl.appendChild(groupEl);
                }
                else {
                    appendToElement(sectionEl, groupChildren); // 1 or 0 children
                }
            });
        }
        return sectionEl;
    };
    Toolbar.prototype.updateToday = function (isTodayEnabled) {
        this.toggleButtonEnabled('today', isTodayEnabled);
    };
    Toolbar.prototype.updatePrev = function (isPrevEnabled) {
        this.toggleButtonEnabled('prev', isPrevEnabled);
    };
    Toolbar.prototype.updateNext = function (isNextEnabled) {
        this.toggleButtonEnabled('next', isNextEnabled);
    };
    Toolbar.prototype.updateTitle = function (text) {
        findElements(this.el, 'h2').forEach(function (titleEl) {
            titleEl.innerText = text;
        });
    };
    Toolbar.prototype.updateActiveButton = function (buttonName) {
        var className = this.theme.getClass('buttonActive');
        findElements(this.el, 'button').forEach(function (buttonEl) {
            if (buttonName && buttonEl.classList.contains('fc-' + buttonName + '-button')) {
                buttonEl.classList.add(className);
            }
            else {
                buttonEl.classList.remove(className);
            }
        });
    };
    Toolbar.prototype.toggleButtonEnabled = function (buttonName, bool) {
        findElements(this.el, '.fc-' + buttonName + '-button').forEach(function (buttonEl) {
            buttonEl.disabled = !bool;
        });
    };
    return Toolbar;
}(Component));

var CalendarComponent = /** @class */ (function (_super) {
    __extends(CalendarComponent, _super);
    function CalendarComponent(context, el) {
        var _this = _super.call(this, context) || this;
        _this._renderToolbars = memoizeRendering(_this.renderToolbars);
        _this.buildViewPropTransformers = memoize(buildViewPropTransformers);
        _this.el = el;
        prependToElement(el, _this.contentEl = createElement('div', { className: 'fc-view-container' }));
        var calendar = _this.calendar;
        for (var _i = 0, _a = calendar.pluginSystem.hooks.viewContainerModifiers; _i < _a.length; _i++) {
            var modifyViewContainer = _a[_i];
            modifyViewContainer(_this.contentEl, calendar);
        }
        _this.toggleElClassNames(true);
        _this.computeTitle = memoize(computeTitle);
        _this.parseBusinessHours = memoize(function (input) {
            return parseBusinessHours(input, _this.calendar);
        });
        return _this;
    }
    CalendarComponent.prototype.destroy = function () {
        if (this.header) {
            this.header.destroy();
        }
        if (this.footer) {
            this.footer.destroy();
        }
        if (this.view) {
            this.view.destroy();
        }
        removeElement(this.contentEl);
        this.toggleElClassNames(false);
        _super.prototype.destroy.call(this);
    };
    CalendarComponent.prototype.toggleElClassNames = function (bool) {
        var classList = this.el.classList;
        var dirClassName = 'fc-' + this.opt('dir');
        var themeClassName = this.theme.getClass('widget');
        if (bool) {
            classList.add('fc');
            classList.add(dirClassName);
            classList.add(themeClassName);
        }
        else {
            classList.remove('fc');
            classList.remove(dirClassName);
            classList.remove(themeClassName);
        }
    };
    CalendarComponent.prototype.render = function (props) {
        this.freezeHeight();
        var title = this.computeTitle(props.dateProfile, props.viewSpec.options);
        this._renderToolbars(props.viewSpec, props.dateProfile, props.currentDate, props.dateProfileGenerator, title);
        this.renderView(props, title);
        this.updateSize();
        this.thawHeight();
    };
    CalendarComponent.prototype.renderToolbars = function (viewSpec, dateProfile, currentDate, dateProfileGenerator, title) {
        var headerLayout = this.opt('header');
        var footerLayout = this.opt('footer');
        var now = this.calendar.getNow();
        var todayInfo = dateProfileGenerator.build(now);
        var prevInfo = dateProfileGenerator.buildPrev(dateProfile, currentDate);
        var nextInfo = dateProfileGenerator.buildNext(dateProfile, currentDate);
        var toolbarProps = {
            title: title,
            activeButton: viewSpec.type,
            isTodayEnabled: todayInfo.isValid && !rangeContainsMarker(dateProfile.currentRange, now),
            isPrevEnabled: prevInfo.isValid,
            isNextEnabled: nextInfo.isValid
        };
        if (headerLayout) {
            if (!this.header) {
                this.header = new Toolbar(this.context, 'fc-header-toolbar');
                prependToElement(this.el, this.header.el);
            }
            this.header.receiveProps(__assign({ layout: headerLayout }, toolbarProps));
        }
        else if (this.header) {
            this.header.destroy();
            this.header = null;
        }
        if (footerLayout) {
            if (!this.footer) {
                this.footer = new Toolbar(this.context, 'fc-footer-toolbar');
                appendToElement(this.el, this.footer.el);
            }
            this.footer.receiveProps(__assign({ layout: footerLayout }, toolbarProps));
        }
        else if (this.footer) {
            this.footer.destroy();
            this.footer = null;
        }
    };
    CalendarComponent.prototype.renderView = function (props, title) {
        var view = this.view;
        var viewSpec = props.viewSpec, dateProfileGenerator = props.dateProfileGenerator;
        if (!view || view.viewSpec !== viewSpec) {
            if (view) {
                view.destroy();
            }
            view = this.view = new viewSpec['class']({
                calendar: this.calendar,
                view: null,
                dateEnv: this.dateEnv,
                theme: this.theme,
                options: viewSpec.options
            }, viewSpec, dateProfileGenerator, this.contentEl);
        }
        else {
            view.addScroll(view.queryScroll());
        }
        view.title = title; // for the API
        var viewProps = {
            dateProfile: props.dateProfile,
            businessHours: this.parseBusinessHours(viewSpec.options.businessHours),
            eventStore: props.eventStore,
            eventUiBases: props.eventUiBases,
            dateSelection: props.dateSelection,
            eventSelection: props.eventSelection,
            eventDrag: props.eventDrag,
            eventResize: props.eventResize
        };
        var transformers = this.buildViewPropTransformers(this.calendar.pluginSystem.hooks.viewPropsTransformers);
        for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
            var transformer = transformers_1[_i];
            __assign(viewProps, transformer.transform(viewProps, viewSpec, props, view));
        }
        view.receiveProps(viewProps);
    };
    // Sizing
    // -----------------------------------------------------------------------------------------------------------------
    CalendarComponent.prototype.updateSize = function (isResize) {
        if (isResize === void 0) { isResize = false; }
        var view = this.view;
        if (isResize) {
            view.addScroll(view.queryScroll());
        }
        if (isResize || this.isHeightAuto == null) {
            this.computeHeightVars();
        }
        view.updateSize(isResize, this.viewHeight, this.isHeightAuto);
        view.updateNowIndicator(); // we need to guarantee this will run after updateSize
        view.popScroll(isResize);
    };
    CalendarComponent.prototype.computeHeightVars = function () {
        var calendar = this.calendar; // yuck. need to handle dynamic options
        var heightInput = calendar.opt('height');
        var contentHeightInput = calendar.opt('contentHeight');
        this.isHeightAuto = heightInput === 'auto' || contentHeightInput === 'auto';
        if (typeof contentHeightInput === 'number') { // exists and not 'auto'
            this.viewHeight = contentHeightInput;
        }
        else if (typeof contentHeightInput === 'function') { // exists and is a function
            this.viewHeight = contentHeightInput();
        }
        else if (typeof heightInput === 'number') { // exists and not 'auto'
            this.viewHeight = heightInput - this.queryToolbarsHeight();
        }
        else if (typeof heightInput === 'function') { // exists and is a function
            this.viewHeight = heightInput() - this.queryToolbarsHeight();
        }
        else if (heightInput === 'parent') { // set to height of parent element
            var parentEl = this.el.parentNode;
            this.viewHeight = parentEl.getBoundingClientRect().height - this.queryToolbarsHeight();
        }
        else {
            this.viewHeight = Math.round(this.contentEl.getBoundingClientRect().width /
                Math.max(calendar.opt('aspectRatio'), .5));
        }
    };
    CalendarComponent.prototype.queryToolbarsHeight = function () {
        var height = 0;
        if (this.header) {
            height += computeHeightAndMargins(this.header.el);
        }
        if (this.footer) {
            height += computeHeightAndMargins(this.footer.el);
        }
        return height;
    };
    // Height "Freezing"
    // -----------------------------------------------------------------------------------------------------------------
    CalendarComponent.prototype.freezeHeight = function () {
        applyStyle(this.el, {
            height: this.el.getBoundingClientRect().height,
            overflow: 'hidden'
        });
    };
    CalendarComponent.prototype.thawHeight = function () {
        applyStyle(this.el, {
            height: '',
            overflow: ''
        });
    };
    return CalendarComponent;
}(Component));
// Title and Date Formatting
// -----------------------------------------------------------------------------------------------------------------
// Computes what the title at the top of the calendar should be for this view
function computeTitle(dateProfile, viewOptions) {
    var range;
    // for views that span a large unit of time, show the proper interval, ignoring stray days before and after
    if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
        range = dateProfile.currentRange;
    }
    else { // for day units or smaller, use the actual day range
        range = dateProfile.activeRange;
    }
    return this.dateEnv.formatRange(range.start, range.end, createFormatter(viewOptions.titleFormat || computeTitleFormat(dateProfile), viewOptions.titleRangeSeparator), { isEndExclusive: dateProfile.isRangeAllDay });
}
// Generates the format string that should be used to generate the title for the current date range.
// Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.
function computeTitleFormat(dateProfile) {
    var currentRangeUnit = dateProfile.currentRangeUnit;
    if (currentRangeUnit === 'year') {
        return { year: 'numeric' };
    }
    else if (currentRangeUnit === 'month') {
        return { year: 'numeric', month: 'long' }; // like "September 2014"
    }
    else {
        var days = diffWholeDays(dateProfile.currentRange.start, dateProfile.currentRange.end);
        if (days !== null && days > 1) {
            // multi-day range. shorter, like "Sep 9 - 10 2014"
            return { year: 'numeric', month: 'short', day: 'numeric' };
        }
        else {
            // one day. longer, like "September 9 2014"
            return { year: 'numeric', month: 'long', day: 'numeric' };
        }
    }
}
// Plugin
// -----------------------------------------------------------------------------------------------------------------
function buildViewPropTransformers(theClasses) {
    return theClasses.map(function (theClass) {
        return new theClass();
    });
}

var Interaction = /** @class */ (function () {
    function Interaction(settings) {
        this.component = settings.component;
    }
    Interaction.prototype.destroy = function () {
    };
    return Interaction;
}());
function parseInteractionSettings(component, input) {
    return {
        component: component,
        el: input.el,
        useEventCenter: input.useEventCenter != null ? input.useEventCenter : true
    };
}
function interactionSettingsToStore(settings) {
    var _a;
    return _a = {},
        _a[settings.component.uid] = settings,
        _a;
}
// global state
var interactionSettingsStore = {};

/*
Detects when the user clicks on an event within a DateComponent
*/
var EventClicking = /** @class */ (function (_super) {
    __extends(EventClicking, _super);
    function EventClicking(settings) {
        var _this = _super.call(this, settings) || this;
        _this.handleSegClick = function (ev, segEl) {
            var component = _this.component;
            var seg = getElSeg(segEl);
            if (seg && // might be the <div> surrounding the more link
                component.isValidSegDownEl(ev.target)) {
                // our way to simulate a link click for elements that can't be <a> tags
                // grab before trigger fired in case trigger trashes DOM thru rerendering
                var hasUrlContainer = elementClosest(ev.target, '.fc-has-url');
                var url = hasUrlContainer ? hasUrlContainer.querySelector('a[href]').href : '';
                component.publiclyTrigger('eventClick', [
                    {
                        el: segEl,
                        event: new EventApi(component.calendar, seg.eventRange.def, seg.eventRange.instance),
                        jsEvent: ev,
                        view: component.view
                    }
                ]);
                if (url && !ev.defaultPrevented) {
                    window.location.href = url;
                }
            }
        };
        var component = settings.component;
        _this.destroy = listenBySelector(component.el, 'click', component.fgSegSelector + ',' + component.bgSegSelector, _this.handleSegClick);
        return _this;
    }
    return EventClicking;
}(Interaction));

/*
Triggers events and adds/removes core classNames when the user's pointer
enters/leaves event-elements of a component.
*/
var EventHovering = /** @class */ (function (_super) {
    __extends(EventHovering, _super);
    function EventHovering(settings) {
        var _this = _super.call(this, settings) || this;
        // for simulating an eventMouseLeave when the event el is destroyed while mouse is over it
        _this.handleEventElRemove = function (el) {
            if (el === _this.currentSegEl) {
                _this.handleSegLeave(null, _this.currentSegEl);
            }
        };
        _this.handleSegEnter = function (ev, segEl) {
            if (getElSeg(segEl)) { // TODO: better way to make sure not hovering over more+ link or its wrapper
                segEl.classList.add('fc-allow-mouse-resize');
                _this.currentSegEl = segEl;
                _this.triggerEvent('eventMouseEnter', ev, segEl);
            }
        };
        _this.handleSegLeave = function (ev, segEl) {
            if (_this.currentSegEl) {
                segEl.classList.remove('fc-allow-mouse-resize');
                _this.currentSegEl = null;
                _this.triggerEvent('eventMouseLeave', ev, segEl);
            }
        };
        var component = settings.component;
        _this.removeHoverListeners = listenToHoverBySelector(component.el, component.fgSegSelector + ',' + component.bgSegSelector, _this.handleSegEnter, _this.handleSegLeave);
        component.calendar.on('eventElRemove', _this.handleEventElRemove);
        return _this;
    }
    EventHovering.prototype.destroy = function () {
        this.removeHoverListeners();
        this.component.calendar.off('eventElRemove', this.handleEventElRemove);
    };
    EventHovering.prototype.triggerEvent = function (publicEvName, ev, segEl) {
        var component = this.component;
        var seg = getElSeg(segEl);
        if (!ev || component.isValidSegDownEl(ev.target)) {
            component.publiclyTrigger(publicEvName, [
                {
                    el: segEl,
                    event: new EventApi(this.component.calendar, seg.eventRange.def, seg.eventRange.instance),
                    jsEvent: ev,
                    view: component.view
                }
            ]);
        }
    };
    return EventHovering;
}(Interaction));

var StandardTheme = /** @class */ (function (_super) {
    __extends(StandardTheme, _super);
    function StandardTheme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StandardTheme;
}(Theme));
StandardTheme.prototype.classes = {
    widget: 'fc-unthemed',
    widgetHeader: 'fc-widget-header',
    widgetContent: 'fc-widget-content',
    buttonGroup: 'fc-button-group',
    button: 'fc-button fc-button-primary',
    buttonActive: 'fc-button-active',
    popoverHeader: 'fc-widget-header',
    popoverContent: 'fc-widget-content',
    // day grid
    headerRow: 'fc-widget-header',
    dayRow: 'fc-widget-content',
    // list view
    listView: 'fc-widget-content'
};
StandardTheme.prototype.baseIconClass = 'fc-icon';
StandardTheme.prototype.iconClasses = {
    close: 'fc-icon-x',
    prev: 'fc-icon-chevron-left',
    next: 'fc-icon-chevron-right',
    prevYear: 'fc-icon-chevrons-left',
    nextYear: 'fc-icon-chevrons-right'
};
StandardTheme.prototype.iconOverrideOption = 'buttonIcons';
StandardTheme.prototype.iconOverrideCustomButtonOption = 'icon';
StandardTheme.prototype.iconOverridePrefix = 'fc-icon-';

var Calendar = /** @class */ (function () {
    function Calendar(el, overrides) {
        var _this = this;
        this.parseRawLocales = memoize(parseRawLocales);
        this.buildLocale = memoize(buildLocale);
        this.buildDateEnv = memoize(buildDateEnv);
        this.buildTheme = memoize(buildTheme);
        this.buildEventUiSingleBase = memoize(this._buildEventUiSingleBase);
        this.buildSelectionConfig = memoize(this._buildSelectionConfig);
        this.buildEventUiBySource = memoizeOutput(buildEventUiBySource, isPropsEqual);
        this.buildEventUiBases = memoize(buildEventUiBases);
        this.interactionsStore = {};
        this.actionQueue = [];
        this.isReducing = false;
        // isDisplaying: boolean = false // installed in DOM? accepting renders?
        this.needsRerender = false; // needs a render?
        this.needsFullRerender = false;
        this.isRendering = false; // currently in the executeRender function?
        this.renderingPauseDepth = 0;
        this.buildDelayedRerender = memoize(buildDelayedRerender);
        this.afterSizingTriggers = {};
        this.isViewUpdated = false;
        this.isDatesUpdated = false;
        this.isEventsUpdated = false;
        this.el = el;
        this.optionsManager = new OptionsManager(overrides || {});
        this.pluginSystem = new PluginSystem();
        // only do once. don't do in handleOptions. because can't remove plugins
        this.addPluginInputs(this.optionsManager.computed.plugins || []);
        this.handleOptions(this.optionsManager.computed);
        this.publiclyTrigger('_init'); // for tests
        this.hydrate();
        this.calendarInteractions = this.pluginSystem.hooks.calendarInteractions
            .map(function (calendarInteractionClass) {
            return new calendarInteractionClass(_this);
        });
    }
    Calendar.prototype.addPluginInputs = function (pluginInputs) {
        var pluginDefs = refinePluginDefs(pluginInputs);
        for (var _i = 0, pluginDefs_1 = pluginDefs; _i < pluginDefs_1.length; _i++) {
            var pluginDef = pluginDefs_1[_i];
            this.pluginSystem.add(pluginDef);
        }
    };
    Object.defineProperty(Calendar.prototype, "view", {
        // public API
        get: function () {
            return this.component ? this.component.view : null;
        },
        enumerable: true,
        configurable: true
    });
    // Public API for rendering
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.render = function () {
        if (!this.component) {
            this.renderableEventStore = createEmptyEventStore();
            this.bindHandlers();
            this.executeRender();
        }
        else {
            this.requestRerender(true);
        }
    };
    Calendar.prototype.destroy = function () {
        if (this.component) {
            this.unbindHandlers();
            this.component.destroy(); // don't null-out. in case API needs access
            this.component = null; // umm ???
            for (var _i = 0, _a = this.calendarInteractions; _i < _a.length; _i++) {
                var interaction = _a[_i];
                interaction.destroy();
            }
            this.publiclyTrigger('_destroyed');
        }
    };
    // Handlers
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.bindHandlers = function () {
        var _this = this;
        // event delegation for nav links
        this.removeNavLinkListener = listenBySelector(this.el, 'click', 'a[data-goto]', function (ev, anchorEl) {
            var gotoOptions = anchorEl.getAttribute('data-goto');
            gotoOptions = gotoOptions ? JSON.parse(gotoOptions) : {};
            var dateEnv = _this.dateEnv;
            var dateMarker = dateEnv.createMarker(gotoOptions.date);
            var viewType = gotoOptions.type;
            // property like "navLinkDayClick". might be a string or a function
            var customAction = _this.viewOpt('navLink' + capitaliseFirstLetter(viewType) + 'Click');
            if (typeof customAction === 'function') {
                customAction(dateEnv.toDate(dateMarker), ev);
            }
            else {
                if (typeof customAction === 'string') {
                    viewType = customAction;
                }
                _this.zoomTo(dateMarker, viewType);
            }
        });
        if (this.opt('handleWindowResize')) {
            window.addEventListener('resize', this.windowResizeProxy = debounce(// prevents rapid calls
            this.windowResize.bind(this), this.opt('windowResizeDelay')));
        }
    };
    Calendar.prototype.unbindHandlers = function () {
        this.removeNavLinkListener();
        if (this.windowResizeProxy) {
            window.removeEventListener('resize', this.windowResizeProxy);
            this.windowResizeProxy = null;
        }
    };
    // Dispatcher
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.hydrate = function () {
        var _this = this;
        this.state = this.buildInitialState();
        var rawSources = this.opt('eventSources') || [];
        var singleRawSource = this.opt('events');
        var sources = []; // parsed
        if (singleRawSource) {
            rawSources.unshift(singleRawSource);
        }
        for (var _i = 0, rawSources_1 = rawSources; _i < rawSources_1.length; _i++) {
            var rawSource = rawSources_1[_i];
            var source = parseEventSource(rawSource, this);
            if (source) {
                sources.push(source);
            }
        }
        this.batchRendering(function () {
            _this.dispatch({ type: 'INIT' }); // pass in sources here?
            _this.dispatch({ type: 'ADD_EVENT_SOURCES', sources: sources });
            _this.dispatch({
                type: 'SET_VIEW_TYPE',
                viewType: _this.opt('defaultView') || _this.pluginSystem.hooks.defaultView
            });
        });
    };
    Calendar.prototype.buildInitialState = function () {
        return {
            viewType: null,
            loadingLevel: 0,
            eventSourceLoadingLevel: 0,
            currentDate: this.getInitialDate(),
            dateProfile: null,
            eventSources: {},
            eventStore: createEmptyEventStore(),
            dateSelection: null,
            eventSelection: '',
            eventDrag: null,
            eventResize: null
        };
    };
    Calendar.prototype.dispatch = function (action) {
        this.actionQueue.push(action);
        if (!this.isReducing) {
            this.isReducing = true;
            var oldState = this.state;
            while (this.actionQueue.length) {
                this.state = this.reduce(this.state, this.actionQueue.shift(), this);
            }
            var newState = this.state;
            this.isReducing = false;
            if (!oldState.loadingLevel && newState.loadingLevel) {
                this.publiclyTrigger('loading', [true]);
            }
            else if (oldState.loadingLevel && !newState.loadingLevel) {
                this.publiclyTrigger('loading', [false]);
            }
            var view = this.component && this.component.view;
            if (oldState.eventStore !== newState.eventStore || this.needsFullRerender) {
                if (oldState.eventStore) {
                    this.isEventsUpdated = true;
                }
            }
            if (oldState.dateProfile !== newState.dateProfile || this.needsFullRerender) {
                if (oldState.dateProfile && view) { // why would view be null!?
                    this.publiclyTrigger('datesDestroy', [
                        {
                            view: view,
                            el: view.el
                        }
                    ]);
                }
                this.isDatesUpdated = true;
            }
            if (oldState.viewType !== newState.viewType || this.needsFullRerender) {
                if (oldState.viewType && view) { // why would view be null!?
                    this.publiclyTrigger('viewSkeletonDestroy', [
                        {
                            view: view,
                            el: view.el
                        }
                    ]);
                }
                this.isViewUpdated = true;
            }
            this.requestRerender();
        }
    };
    Calendar.prototype.reduce = function (state, action, calendar) {
        return reduce(state, action, calendar);
    };
    // Render Queue
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.requestRerender = function (needsFull) {
        if (needsFull === void 0) { needsFull = false; }
        this.needsRerender = true;
        this.needsFullRerender = this.needsFullRerender || needsFull;
        this.delayedRerender(); // will call a debounced-version of tryRerender
    };
    Calendar.prototype.tryRerender = function () {
        if (this.component && // must be accepting renders
            this.needsRerender && // indicates that a rerender was requested
            !this.renderingPauseDepth && // not paused
            !this.isRendering // not currently in the render loop
        ) {
            this.executeRender();
        }
    };
    Calendar.prototype.batchRendering = function (func) {
        this.renderingPauseDepth++;
        func();
        this.renderingPauseDepth--;
        if (this.needsRerender) {
            this.requestRerender();
        }
    };
    // Rendering
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.executeRender = function () {
        var needsFullRerender = this.needsFullRerender; // save before clearing
        // clear these BEFORE the render so that new values will accumulate during render
        this.needsRerender = false;
        this.needsFullRerender = false;
        this.isRendering = true;
        this.renderComponent(needsFullRerender);
        this.isRendering = false;
        // received a rerender request while rendering
        if (this.needsRerender) {
            this.delayedRerender();
        }
    };
    /*
    don't call this directly. use executeRender instead
    */
    Calendar.prototype.renderComponent = function (needsFull) {
        var _a = this, state = _a.state, component = _a.component;
        var viewType = state.viewType;
        var viewSpec = this.viewSpecs[viewType];
        var savedScroll = (needsFull && component) ? component.view.queryScroll() : null;
        if (!viewSpec) {
            throw new Error("View type \"" + viewType + "\" is not valid");
        }
        // if event sources are still loading and progressive rendering hasn't been enabled,
        // keep rendering the last fully loaded set of events
        var renderableEventStore = this.renderableEventStore =
            (state.eventSourceLoadingLevel && !this.opt('progressiveEventRendering')) ?
                this.renderableEventStore :
                state.eventStore;
        var eventUiSingleBase = this.buildEventUiSingleBase(viewSpec.options);
        var eventUiBySource = this.buildEventUiBySource(state.eventSources);
        var eventUiBases = this.eventUiBases = this.buildEventUiBases(renderableEventStore.defs, eventUiSingleBase, eventUiBySource);
        if (needsFull || !component) {
            if (component) {
                component.freezeHeight(); // next component will unfreeze it
                component.destroy();
            }
            component = this.component = new CalendarComponent({
                calendar: this,
                view: null,
                dateEnv: this.dateEnv,
                theme: this.theme,
                options: this.optionsManager.computed
            }, this.el);
            this.isViewUpdated = true;
            this.isDatesUpdated = true;
            this.isEventsUpdated = true;
        }
        component.receiveProps(__assign({}, state, { viewSpec: viewSpec, dateProfile: state.dateProfile, dateProfileGenerator: this.dateProfileGenerators[viewType], eventStore: renderableEventStore, eventUiBases: eventUiBases, dateSelection: state.dateSelection, eventSelection: state.eventSelection, eventDrag: state.eventDrag, eventResize: state.eventResize }));
        if (savedScroll) {
            component.view.applyScroll(savedScroll, false);
        }
        if (this.isViewUpdated) {
            this.isViewUpdated = false;
            this.publiclyTrigger('viewSkeletonRender', [
                {
                    view: component.view,
                    el: component.view.el
                }
            ]);
        }
        if (this.isDatesUpdated) {
            this.isDatesUpdated = false;
            this.publiclyTrigger('datesRender', [
                {
                    view: component.view,
                    el: component.view.el
                }
            ]);
        }
        if (this.isEventsUpdated) {
            this.isEventsUpdated = false;
        }
        this.releaseAfterSizingTriggers();
    };
    // Options
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.setOption = function (name, val) {
        var _a;
        this.mutateOptions((_a = {}, _a[name] = val, _a), [], true);
    };
    Calendar.prototype.getOption = function (name) {
        return this.optionsManager.computed[name];
    };
    Calendar.prototype.opt = function (name) {
        return this.optionsManager.computed[name];
    };
    Calendar.prototype.viewOpt = function (name) {
        return this.viewOpts()[name];
    };
    Calendar.prototype.viewOpts = function () {
        return this.viewSpecs[this.state.viewType].options;
    };
    /*
    handles option changes (like a diff)
    */
    Calendar.prototype.mutateOptions = function (updates, removals, isDynamic, deepEqual) {
        var _this = this;
        var changeHandlers = this.pluginSystem.hooks.optionChangeHandlers;
        var normalUpdates = {};
        var specialUpdates = {};
        var oldDateEnv = this.dateEnv; // do this before handleOptions
        var isTimeZoneDirty = false;
        var isSizeDirty = false;
        var anyDifficultOptions = Boolean(removals.length);
        for (var name_1 in updates) {
            if (changeHandlers[name_1]) {
                specialUpdates[name_1] = updates[name_1];
            }
            else {
                normalUpdates[name_1] = updates[name_1];
            }
        }
        for (var name_2 in normalUpdates) {
            if (/^(height|contentHeight|aspectRatio)$/.test(name_2)) {
                isSizeDirty = true;
            }
            else if (/^(defaultDate|defaultView)$/.test(name_2)) ;
            else {
                anyDifficultOptions = true;
                if (name_2 === 'timeZone') {
                    isTimeZoneDirty = true;
                }
            }
        }
        this.optionsManager.mutate(normalUpdates, removals, isDynamic);
        if (anyDifficultOptions) {
            this.handleOptions(this.optionsManager.computed);
            this.needsFullRerender = true;
        }
        this.batchRendering(function () {
            if (anyDifficultOptions) {
                if (isTimeZoneDirty) {
                    _this.dispatch({
                        type: 'CHANGE_TIMEZONE',
                        oldDateEnv: oldDateEnv
                    });
                }
                /* HACK
                has the same effect as calling this.requestRerender(true)
                but recomputes the state's dateProfile
                */
                _this.dispatch({
                    type: 'SET_VIEW_TYPE',
                    viewType: _this.state.viewType
                });
            }
            else if (isSizeDirty) {
                _this.updateSize();
            }
            // special updates
            if (deepEqual) {
                for (var name_3 in specialUpdates) {
                    changeHandlers[name_3](specialUpdates[name_3], _this, deepEqual);
                }
            }
        });
    };
    /*
    rebuilds things based off of a complete set of refined options
    */
    Calendar.prototype.handleOptions = function (options) {
        var _this = this;
        var pluginHooks = this.pluginSystem.hooks;
        this.defaultAllDayEventDuration = createDuration(options.defaultAllDayEventDuration);
        this.defaultTimedEventDuration = createDuration(options.defaultTimedEventDuration);
        this.delayedRerender = this.buildDelayedRerender(options.rerenderDelay);
        this.theme = this.buildTheme(options);
        var available = this.parseRawLocales(options.locales);
        this.availableRawLocales = available.map;
        var locale = this.buildLocale(options.locale || available.defaultCode, available.map);
        this.dateEnv = this.buildDateEnv(locale, options.timeZone, pluginHooks.namedTimeZonedImpl, options.firstDay, options.weekNumberCalculation, options.weekLabel, pluginHooks.cmdFormatter);
        this.selectionConfig = this.buildSelectionConfig(options); // needs dateEnv. do after :(
        // ineffecient to do every time?
        this.viewSpecs = buildViewSpecs(pluginHooks.views, this.optionsManager);
        // ineffecient to do every time?
        this.dateProfileGenerators = mapHash(this.viewSpecs, function (viewSpec) {
            return new viewSpec.class.prototype.dateProfileGeneratorClass(viewSpec, _this);
        });
    };
    Calendar.prototype.getAvailableLocaleCodes = function () {
        return Object.keys(this.availableRawLocales);
    };
    Calendar.prototype._buildSelectionConfig = function (rawOpts) {
        return processScopedUiProps('select', rawOpts, this);
    };
    Calendar.prototype._buildEventUiSingleBase = function (rawOpts) {
        if (rawOpts.editable) { // so 'editable' affected events
            rawOpts = __assign({}, rawOpts, { eventEditable: true });
        }
        return processScopedUiProps('event', rawOpts, this);
    };
    // Trigger
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.hasPublicHandlers = function (name) {
        return this.hasHandlers(name) ||
            this.opt(name); // handler specified in options
    };
    Calendar.prototype.publiclyTrigger = function (name, args) {
        var optHandler = this.opt(name);
        this.triggerWith(name, this, args);
        if (optHandler) {
            return optHandler.apply(this, args);
        }
    };
    Calendar.prototype.publiclyTriggerAfterSizing = function (name, args) {
        var afterSizingTriggers = this.afterSizingTriggers;
        (afterSizingTriggers[name] || (afterSizingTriggers[name] = [])).push(args);
    };
    Calendar.prototype.releaseAfterSizingTriggers = function () {
        var afterSizingTriggers = this.afterSizingTriggers;
        for (var name_4 in afterSizingTriggers) {
            for (var _i = 0, _a = afterSizingTriggers[name_4]; _i < _a.length; _i++) {
                var args = _a[_i];
                this.publiclyTrigger(name_4, args);
            }
        }
        this.afterSizingTriggers = {};
    };
    // View
    // -----------------------------------------------------------------------------------------------------------------
    // Returns a boolean about whether the view is okay to instantiate at some point
    Calendar.prototype.isValidViewType = function (viewType) {
        return Boolean(this.viewSpecs[viewType]);
    };
    Calendar.prototype.changeView = function (viewType, dateOrRange) {
        var dateMarker = null;
        if (dateOrRange) {
            if (dateOrRange.start && dateOrRange.end) { // a range
                this.optionsManager.mutate({ visibleRange: dateOrRange }, []); // will not rerender
                this.handleOptions(this.optionsManager.computed); // ...but yuck
            }
            else { // a date
                dateMarker = this.dateEnv.createMarker(dateOrRange); // just like gotoDate
            }
        }
        this.unselect();
        this.dispatch({
            type: 'SET_VIEW_TYPE',
            viewType: viewType,
            dateMarker: dateMarker
        });
    };
    // Forces navigation to a view for the given date.
    // `viewType` can be a specific view name or a generic one like "week" or "day".
    // needs to change
    Calendar.prototype.zoomTo = function (dateMarker, viewType) {
        var spec;
        viewType = viewType || 'day'; // day is default zoom
        spec = this.viewSpecs[viewType] ||
            this.getUnitViewSpec(viewType);
        this.unselect();
        if (spec) {
            this.dispatch({
                type: 'SET_VIEW_TYPE',
                viewType: spec.type,
                dateMarker: dateMarker
            });
        }
        else {
            this.dispatch({
                type: 'SET_DATE',
                dateMarker: dateMarker
            });
        }
    };
    // Given a duration singular unit, like "week" or "day", finds a matching view spec.
    // Preference is given to views that have corresponding buttons.
    Calendar.prototype.getUnitViewSpec = function (unit) {
        var component = this.component;
        var viewTypes = [];
        var i;
        var spec;
        // put views that have buttons first. there will be duplicates, but oh
        if (component.header) {
            viewTypes.push.apply(viewTypes, component.header.viewsWithButtons);
        }
        if (component.footer) {
            viewTypes.push.apply(viewTypes, component.footer.viewsWithButtons);
        }
        for (var viewType in this.viewSpecs) {
            viewTypes.push(viewType);
        }
        for (i = 0; i < viewTypes.length; i++) {
            spec = this.viewSpecs[viewTypes[i]];
            if (spec) {
                if (spec.singleUnit === unit) {
                    return spec;
                }
            }
        }
    };
    // Current Date
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.getInitialDate = function () {
        var defaultDateInput = this.opt('defaultDate');
        // compute the initial ambig-timezone date
        if (defaultDateInput != null) {
            return this.dateEnv.createMarker(defaultDateInput);
        }
        else {
            return this.getNow(); // getNow already returns unzoned
        }
    };
    Calendar.prototype.prev = function () {
        this.unselect();
        this.dispatch({ type: 'PREV' });
    };
    Calendar.prototype.next = function () {
        this.unselect();
        this.dispatch({ type: 'NEXT' });
    };
    Calendar.prototype.prevYear = function () {
        this.unselect();
        this.dispatch({
            type: 'SET_DATE',
            dateMarker: this.dateEnv.addYears(this.state.currentDate, -1)
        });
    };
    Calendar.prototype.nextYear = function () {
        this.unselect();
        this.dispatch({
            type: 'SET_DATE',
            dateMarker: this.dateEnv.addYears(this.state.currentDate, 1)
        });
    };
    Calendar.prototype.today = function () {
        this.unselect();
        this.dispatch({
            type: 'SET_DATE',
            dateMarker: this.getNow()
        });
    };
    Calendar.prototype.gotoDate = function (zonedDateInput) {
        this.unselect();
        this.dispatch({
            type: 'SET_DATE',
            dateMarker: this.dateEnv.createMarker(zonedDateInput)
        });
    };
    Calendar.prototype.incrementDate = function (deltaInput) {
        var delta = createDuration(deltaInput);
        if (delta) { // else, warn about invalid input?
            this.unselect();
            this.dispatch({
                type: 'SET_DATE',
                dateMarker: this.dateEnv.add(this.state.currentDate, delta)
            });
        }
    };
    // for external API
    Calendar.prototype.getDate = function () {
        return this.dateEnv.toDate(this.state.currentDate);
    };
    // Date Formatting Utils
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.formatDate = function (d, formatter) {
        var dateEnv = this.dateEnv;
        return dateEnv.format(dateEnv.createMarker(d), createFormatter(formatter));
    };
    // `settings` is for formatter AND isEndExclusive
    Calendar.prototype.formatRange = function (d0, d1, settings) {
        var dateEnv = this.dateEnv;
        return dateEnv.formatRange(dateEnv.createMarker(d0), dateEnv.createMarker(d1), createFormatter(settings, this.opt('defaultRangeSeparator')), settings);
    };
    Calendar.prototype.formatIso = function (d, omitTime) {
        var dateEnv = this.dateEnv;
        return dateEnv.formatIso(dateEnv.createMarker(d), { omitTime: omitTime });
    };
    // Sizing
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.windowResize = function (ev) {
        if (!this.isHandlingWindowResize &&
            this.component && // why?
            ev.target === window // not a jqui resize event
        ) {
            this.isHandlingWindowResize = true;
            this.updateSize();
            this.publiclyTrigger('windowResize', [this.view]);
            this.isHandlingWindowResize = false;
        }
    };
    Calendar.prototype.updateSize = function () {
        if (this.component) { // when?
            this.component.updateSize(true);
        }
    };
    // Component Registration
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.registerInteractiveComponent = function (component, settingsInput) {
        var settings = parseInteractionSettings(component, settingsInput);
        var DEFAULT_INTERACTIONS = [
            EventClicking,
            EventHovering
        ];
        var interactionClasses = DEFAULT_INTERACTIONS.concat(this.pluginSystem.hooks.componentInteractions);
        var interactions = interactionClasses.map(function (interactionClass) {
            return new interactionClass(settings);
        });
        this.interactionsStore[component.uid] = interactions;
        interactionSettingsStore[component.uid] = settings;
    };
    Calendar.prototype.unregisterInteractiveComponent = function (component) {
        for (var _i = 0, _a = this.interactionsStore[component.uid]; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener.destroy();
        }
        delete this.interactionsStore[component.uid];
        delete interactionSettingsStore[component.uid];
    };
    // Date Selection / Event Selection / DayClick
    // -----------------------------------------------------------------------------------------------------------------
    // this public method receives start/end dates in any format, with any timezone
    // NOTE: args were changed from v3
    Calendar.prototype.select = function (dateOrObj, endDate) {
        var selectionInput;
        if (endDate == null) {
            if (dateOrObj.start != null) {
                selectionInput = dateOrObj;
            }
            else {
                selectionInput = {
                    start: dateOrObj,
                    end: null
                };
            }
        }
        else {
            selectionInput = {
                start: dateOrObj,
                end: endDate
            };
        }
        var selection = parseDateSpan(selectionInput, this.dateEnv, createDuration({ days: 1 }) // TODO: cache this?
        );
        if (selection) { // throw parse error otherwise?
            this.dispatch({ type: 'SELECT_DATES', selection: selection });
            this.triggerDateSelect(selection);
        }
    };
    // public method
    Calendar.prototype.unselect = function (pev) {
        if (this.state.dateSelection) {
            this.dispatch({ type: 'UNSELECT_DATES' });
            this.triggerDateUnselect(pev);
        }
    };
    Calendar.prototype.triggerDateSelect = function (selection, pev) {
        var arg = __assign({}, this.buildDateSpanApi(selection), { jsEvent: pev ? pev.origEvent : null, view: this.view });
        this.publiclyTrigger('select', [arg]);
    };
    Calendar.prototype.triggerDateUnselect = function (pev) {
        this.publiclyTrigger('unselect', [
            {
                jsEvent: pev ? pev.origEvent : null,
                view: this.view
            }
        ]);
    };
    // TODO: receive pev?
    Calendar.prototype.triggerDateClick = function (dateSpan, dayEl, view, ev) {
        var arg = __assign({}, this.buildDatePointApi(dateSpan), { dayEl: dayEl, jsEvent: ev, // Is this always a mouse event? See #4655
            view: view });
        this.publiclyTrigger('dateClick', [arg]);
    };
    Calendar.prototype.buildDatePointApi = function (dateSpan) {
        var props = {};
        for (var _i = 0, _a = this.pluginSystem.hooks.datePointTransforms; _i < _a.length; _i++) {
            var transform = _a[_i];
            __assign(props, transform(dateSpan, this));
        }
        __assign(props, buildDatePointApi(dateSpan, this.dateEnv));
        return props;
    };
    Calendar.prototype.buildDateSpanApi = function (dateSpan) {
        var props = {};
        for (var _i = 0, _a = this.pluginSystem.hooks.dateSpanTransforms; _i < _a.length; _i++) {
            var transform = _a[_i];
            __assign(props, transform(dateSpan, this));
        }
        __assign(props, buildDateSpanApi(dateSpan, this.dateEnv));
        return props;
    };
    // Date Utils
    // -----------------------------------------------------------------------------------------------------------------
    // Returns a DateMarker for the current date, as defined by the client's computer or from the `now` option
    Calendar.prototype.getNow = function () {
        var now = this.opt('now');
        if (typeof now === 'function') {
            now = now();
        }
        if (now == null) {
            return this.dateEnv.createNowMarker();
        }
        return this.dateEnv.createMarker(now);
    };
    // Event-Date Utilities
    // -----------------------------------------------------------------------------------------------------------------
    // Given an event's allDay status and start date, return what its fallback end date should be.
    // TODO: rename to computeDefaultEventEnd
    Calendar.prototype.getDefaultEventEnd = function (allDay, marker) {
        var end = marker;
        if (allDay) {
            end = startOfDay(end);
            end = this.dateEnv.add(end, this.defaultAllDayEventDuration);
        }
        else {
            end = this.dateEnv.add(end, this.defaultTimedEventDuration);
        }
        return end;
    };
    // Public Events API
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.addEvent = function (eventInput, sourceInput) {
        if (eventInput instanceof EventApi) {
            var def = eventInput._def;
            var instance = eventInput._instance;
            // not already present? don't want to add an old snapshot
            if (!this.state.eventStore.defs[def.defId]) {
                this.dispatch({
                    type: 'ADD_EVENTS',
                    eventStore: eventTupleToStore({ def: def, instance: instance }) // TODO: better util for two args?
                });
            }
            return eventInput;
        }
        var sourceId;
        if (sourceInput instanceof EventSourceApi) {
            sourceId = sourceInput.internalEventSource.sourceId;
        }
        else if (sourceInput != null) {
            var sourceApi = this.getEventSourceById(sourceInput); // TODO: use an internal function
            if (!sourceApi) {
                console.warn('Could not find an event source with ID "' + sourceInput + '"'); // TODO: test
                return null;
            }
            else {
                sourceId = sourceApi.internalEventSource.sourceId;
            }
        }
        var tuple = parseEvent(eventInput, sourceId, this);
        if (tuple) {
            this.dispatch({
                type: 'ADD_EVENTS',
                eventStore: eventTupleToStore(tuple)
            });
            return new EventApi(this, tuple.def, tuple.def.recurringDef ? null : tuple.instance);
        }
        return null;
    };
    // TODO: optimize
    Calendar.prototype.getEventById = function (id) {
        var _a = this.state.eventStore, defs = _a.defs, instances = _a.instances;
        id = String(id);
        for (var defId in defs) {
            var def = defs[defId];
            if (def.publicId === id) {
                if (def.recurringDef) {
                    return new EventApi(this, def, null);
                }
                else {
                    for (var instanceId in instances) {
                        var instance = instances[instanceId];
                        if (instance.defId === def.defId) {
                            return new EventApi(this, def, instance);
                        }
                    }
                }
            }
        }
        return null;
    };
    Calendar.prototype.getEvents = function () {
        var _a = this.state.eventStore, defs = _a.defs, instances = _a.instances;
        var eventApis = [];
        for (var id in instances) {
            var instance = instances[id];
            var def = defs[instance.defId];
            eventApis.push(new EventApi(this, def, instance));
        }
        return eventApis;
    };
    Calendar.prototype.removeAllEvents = function () {
        this.dispatch({ type: 'REMOVE_ALL_EVENTS' });
    };
    Calendar.prototype.rerenderEvents = function () {
        this.dispatch({ type: 'RESET_EVENTS' });
    };
    // Public Event Sources API
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.getEventSources = function () {
        var sourceHash = this.state.eventSources;
        var sourceApis = [];
        for (var internalId in sourceHash) {
            sourceApis.push(new EventSourceApi(this, sourceHash[internalId]));
        }
        return sourceApis;
    };
    Calendar.prototype.getEventSourceById = function (id) {
        var sourceHash = this.state.eventSources;
        id = String(id);
        for (var sourceId in sourceHash) {
            if (sourceHash[sourceId].publicId === id) {
                return new EventSourceApi(this, sourceHash[sourceId]);
            }
        }
        return null;
    };
    Calendar.prototype.addEventSource = function (sourceInput) {
        if (sourceInput instanceof EventSourceApi) {
            // not already present? don't want to add an old snapshot
            if (!this.state.eventSources[sourceInput.internalEventSource.sourceId]) {
                this.dispatch({
                    type: 'ADD_EVENT_SOURCES',
                    sources: [sourceInput.internalEventSource]
                });
            }
            return sourceInput;
        }
        var eventSource = parseEventSource(sourceInput, this);
        if (eventSource) { // TODO: error otherwise?
            this.dispatch({ type: 'ADD_EVENT_SOURCES', sources: [eventSource] });
            return new EventSourceApi(this, eventSource);
        }
        return null;
    };
    Calendar.prototype.removeAllEventSources = function () {
        this.dispatch({ type: 'REMOVE_ALL_EVENT_SOURCES' });
    };
    Calendar.prototype.refetchEvents = function () {
        this.dispatch({ type: 'FETCH_EVENT_SOURCES' });
    };
    // Scroll
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.scrollToTime = function (timeInput) {
        var duration = createDuration(timeInput);
        if (duration) {
            this.component.view.scrollToDuration(duration);
        }
    };
    return Calendar;
}());
EmitterMixin.mixInto(Calendar);
// for memoizers
// -----------------------------------------------------------------------------------------------------------------
function buildDateEnv(locale, timeZone, namedTimeZoneImpl, firstDay, weekNumberCalculation, weekLabel, cmdFormatter) {
    return new DateEnv({
        calendarSystem: 'gregory',
        timeZone: timeZone,
        namedTimeZoneImpl: namedTimeZoneImpl,
        locale: locale,
        weekNumberCalculation: weekNumberCalculation,
        firstDay: firstDay,
        weekLabel: weekLabel,
        cmdFormatter: cmdFormatter
    });
}
function buildTheme(calendarOptions) {
    var themeClass = this.pluginSystem.hooks.themeClasses[calendarOptions.themeSystem] || StandardTheme;
    return new themeClass(calendarOptions);
}
function buildDelayedRerender(wait) {
    var func = this.tryRerender.bind(this);
    if (wait != null) {
        func = debounce(func, wait);
    }
    return func;
}
function buildEventUiBySource(eventSources) {
    return mapHash(eventSources, function (eventSource) {
        return eventSource.ui;
    });
}
function buildEventUiBases(eventDefs, eventUiSingleBase, eventUiBySource) {
    var eventUiBases = { '': eventUiSingleBase };
    for (var defId in eventDefs) {
        var def = eventDefs[defId];
        if (def.sourceId && eventUiBySource[def.sourceId]) {
            eventUiBases[defId] = eventUiBySource[def.sourceId];
        }
    }
    return eventUiBases;
}

var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View(context, viewSpec, dateProfileGenerator, parentEl) {
        var _this = _super.call(this, context, createElement('div', { className: 'fc-view fc-' + viewSpec.type + '-view' }), true // isView (HACK)
        ) || this;
        _this.renderDatesMem = memoizeRendering(_this.renderDatesWrap, _this.unrenderDatesWrap);
        _this.renderBusinessHoursMem = memoizeRendering(_this.renderBusinessHours, _this.unrenderBusinessHours, [_this.renderDatesMem]);
        _this.renderDateSelectionMem = memoizeRendering(_this.renderDateSelectionWrap, _this.unrenderDateSelectionWrap, [_this.renderDatesMem]);
        _this.renderEventsMem = memoizeRendering(_this.renderEvents, _this.unrenderEvents, [_this.renderDatesMem]);
        _this.renderEventSelectionMem = memoizeRendering(_this.renderEventSelectionWrap, _this.unrenderEventSelectionWrap, [_this.renderEventsMem]);
        _this.renderEventDragMem = memoizeRendering(_this.renderEventDragWrap, _this.unrenderEventDragWrap, [_this.renderDatesMem]);
        _this.renderEventResizeMem = memoizeRendering(_this.renderEventResizeWrap, _this.unrenderEventResizeWrap, [_this.renderDatesMem]);
        _this.viewSpec = viewSpec;
        _this.dateProfileGenerator = dateProfileGenerator;
        _this.type = viewSpec.type;
        _this.eventOrderSpecs = parseFieldSpecs(_this.opt('eventOrder'));
        _this.nextDayThreshold = createDuration(_this.opt('nextDayThreshold'));
        parentEl.appendChild(_this.el);
        _this.initialize();
        return _this;
    }
    View.prototype.initialize = function () {
    };
    Object.defineProperty(View.prototype, "activeStart", {
        // Date Setting/Unsetting
        // -----------------------------------------------------------------------------------------------------------------
        get: function () {
            return this.dateEnv.toDate(this.props.dateProfile.activeRange.start);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View.prototype, "activeEnd", {
        get: function () {
            return this.dateEnv.toDate(this.props.dateProfile.activeRange.end);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View.prototype, "currentStart", {
        get: function () {
            return this.dateEnv.toDate(this.props.dateProfile.currentRange.start);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View.prototype, "currentEnd", {
        get: function () {
            return this.dateEnv.toDate(this.props.dateProfile.currentRange.end);
        },
        enumerable: true,
        configurable: true
    });
    // General Rendering
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.render = function (props) {
        this.renderDatesMem(props.dateProfile);
        this.renderBusinessHoursMem(props.businessHours);
        this.renderDateSelectionMem(props.dateSelection);
        this.renderEventsMem(props.eventStore);
        this.renderEventSelectionMem(props.eventSelection);
        this.renderEventDragMem(props.eventDrag);
        this.renderEventResizeMem(props.eventResize);
    };
    View.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.renderDatesMem.unrender(); // should unrender everything else
    };
    // Sizing
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.updateSize = function (isResize, viewHeight, isAuto) {
        var calendar = this.calendar;
        if (isResize || // HACKS...
            calendar.isViewUpdated ||
            calendar.isDatesUpdated ||
            calendar.isEventsUpdated) {
            // sort of the catch-all sizing
            // anything that might cause dimension changes
            this.updateBaseSize(isResize, viewHeight, isAuto);
        }
    };
    View.prototype.updateBaseSize = function (isResize, viewHeight, isAuto) {
    };
    // Date Rendering
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.renderDatesWrap = function (dateProfile) {
        this.renderDates(dateProfile);
        this.addScroll({
            duration: createDuration(this.opt('scrollTime'))
        });
        this.startNowIndicator(dateProfile); // shouldn't render yet because updateSize will be called soon
    };
    View.prototype.unrenderDatesWrap = function () {
        this.stopNowIndicator();
        this.unrenderDates();
    };
    View.prototype.renderDates = function (dateProfile) { };
    View.prototype.unrenderDates = function () { };
    // Business Hours
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.renderBusinessHours = function (businessHours) { };
    View.prototype.unrenderBusinessHours = function () { };
    // Date Selection
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.renderDateSelectionWrap = function (selection) {
        if (selection) {
            this.renderDateSelection(selection);
        }
    };
    View.prototype.unrenderDateSelectionWrap = function (selection) {
        if (selection) {
            this.unrenderDateSelection(selection);
        }
    };
    View.prototype.renderDateSelection = function (selection) { };
    View.prototype.unrenderDateSelection = function (selection) { };
    // Event Rendering
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.renderEvents = function (eventStore) { };
    View.prototype.unrenderEvents = function () { };
    // util for subclasses
    View.prototype.sliceEvents = function (eventStore, allDay) {
        var props = this.props;
        return sliceEventStore(eventStore, props.eventUiBases, props.dateProfile.activeRange, allDay ? this.nextDayThreshold : null).fg;
    };
    View.prototype.computeEventDraggable = function (eventDef, eventUi) {
        var transformers = this.calendar.pluginSystem.hooks.isDraggableTransformers;
        var val = eventUi.startEditable;
        for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
            var transformer = transformers_1[_i];
            val = transformer(val, eventDef, eventUi, this);
        }
        return val;
    };
    View.prototype.computeEventStartResizable = function (eventDef, eventUi) {
        return eventUi.durationEditable && this.opt('eventResizableFromStart');
    };
    View.prototype.computeEventEndResizable = function (eventDef, eventUi) {
        return eventUi.durationEditable;
    };
    // Event Selection
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.renderEventSelectionWrap = function (instanceId) {
        if (instanceId) {
            this.renderEventSelection(instanceId);
        }
    };
    View.prototype.unrenderEventSelectionWrap = function (instanceId) {
        if (instanceId) {
            this.unrenderEventSelection(instanceId);
        }
    };
    View.prototype.renderEventSelection = function (instanceId) { };
    View.prototype.unrenderEventSelection = function (instanceId) { };
    // Event Drag
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.renderEventDragWrap = function (state) {
        if (state) {
            this.renderEventDrag(state);
        }
    };
    View.prototype.unrenderEventDragWrap = function (state) {
        if (state) {
            this.unrenderEventDrag(state);
        }
    };
    View.prototype.renderEventDrag = function (state) { };
    View.prototype.unrenderEventDrag = function (state) { };
    // Event Resize
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.renderEventResizeWrap = function (state) {
        if (state) {
            this.renderEventResize(state);
        }
    };
    View.prototype.unrenderEventResizeWrap = function (state) {
        if (state) {
            this.unrenderEventResize(state);
        }
    };
    View.prototype.renderEventResize = function (state) { };
    View.prototype.unrenderEventResize = function (state) { };
    /* Now Indicator
    ------------------------------------------------------------------------------------------------------------------*/
    // Immediately render the current time indicator and begins re-rendering it at an interval,
    // which is defined by this.getNowIndicatorUnit().
    // TODO: somehow do this for the current whole day's background too
    View.prototype.startNowIndicator = function (dateProfile) {
        var _this = this;
        var dateEnv = this.dateEnv;
        var unit;
        var update;
        var delay; // ms wait value
        if (this.opt('nowIndicator')) {
            unit = this.getNowIndicatorUnit(dateProfile);
            if (unit) {
                update = this.updateNowIndicator.bind(this);
                this.initialNowDate = this.calendar.getNow();
                this.initialNowQueriedMs = new Date().valueOf();
                // wait until the beginning of the next interval
                delay = dateEnv.add(dateEnv.startOf(this.initialNowDate, unit), createDuration(1, unit)).valueOf() - this.initialNowDate.valueOf();
                // TODO: maybe always use setTimeout, waiting until start of next unit
                this.nowIndicatorTimeoutID = setTimeout(function () {
                    _this.nowIndicatorTimeoutID = null;
                    update();
                    if (unit === 'second') {
                        delay = 1000; // every second
                    }
                    else {
                        delay = 1000 * 60; // otherwise, every minute
                    }
                    _this.nowIndicatorIntervalID = setInterval(update, delay); // update every interval
                }, delay);
            }
            // rendering will be initiated in updateSize
        }
    };
    // rerenders the now indicator, computing the new current time from the amount of time that has passed
    // since the initial getNow call.
    View.prototype.updateNowIndicator = function () {
        if (this.props.dateProfile && // a way to determine if dates were rendered yet
            this.initialNowDate // activated before?
        ) {
            this.unrenderNowIndicator(); // won't unrender if unnecessary
            this.renderNowIndicator(addMs(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs));
            this.isNowIndicatorRendered = true;
        }
    };
    // Immediately unrenders the view's current time indicator and stops any re-rendering timers.
    // Won't cause side effects if indicator isn't rendered.
    View.prototype.stopNowIndicator = function () {
        if (this.isNowIndicatorRendered) {
            if (this.nowIndicatorTimeoutID) {
                clearTimeout(this.nowIndicatorTimeoutID);
                this.nowIndicatorTimeoutID = null;
            }
            if (this.nowIndicatorIntervalID) {
                clearInterval(this.nowIndicatorIntervalID);
                this.nowIndicatorIntervalID = null;
            }
            this.unrenderNowIndicator();
            this.isNowIndicatorRendered = false;
        }
    };
    View.prototype.getNowIndicatorUnit = function (dateProfile) {
        // subclasses should implement
    };
    // Renders a current time indicator at the given datetime
    View.prototype.renderNowIndicator = function (date) {
        // SUBCLASSES MUST PASS TO CHILDREN!
    };
    // Undoes the rendering actions from renderNowIndicator
    View.prototype.unrenderNowIndicator = function () {
        // SUBCLASSES MUST PASS TO CHILDREN!
    };
    /* Scroller
    ------------------------------------------------------------------------------------------------------------------*/
    View.prototype.addScroll = function (scroll) {
        var queuedScroll = this.queuedScroll || (this.queuedScroll = {});
        __assign(queuedScroll, scroll);
    };
    View.prototype.popScroll = function (isResize) {
        this.applyQueuedScroll(isResize);
        this.queuedScroll = null;
    };
    View.prototype.applyQueuedScroll = function (isResize) {
        this.applyScroll(this.queuedScroll || {}, isResize);
    };
    View.prototype.queryScroll = function () {
        var scroll = {};
        if (this.props.dateProfile) { // dates rendered yet?
            __assign(scroll, this.queryDateScroll());
        }
        return scroll;
    };
    View.prototype.applyScroll = function (scroll, isResize) {
        var duration = scroll.duration;
        if (duration != null) {
            delete scroll.duration;
            if (this.props.dateProfile) { // dates rendered yet?
                __assign(scroll, this.computeDateScroll(duration));
            }
        }
        if (this.props.dateProfile) { // dates rendered yet?
            this.applyDateScroll(scroll);
        }
    };
    View.prototype.computeDateScroll = function (duration) {
        return {}; // subclasses must implement
    };
    View.prototype.queryDateScroll = function () {
        return {}; // subclasses must implement
    };
    View.prototype.applyDateScroll = function (scroll) {
        // subclasses must implement
    };
    // for API
    View.prototype.scrollToDuration = function (duration) {
        this.applyScroll({ duration: duration }, false);
    };
    return View;
}(DateComponent));
EmitterMixin.mixInto(View);
View.prototype.usesMinMaxTime = false;
View.prototype.dateProfileGeneratorClass = DateProfileGenerator;

var FgEventRenderer = /** @class */ (function () {
    function FgEventRenderer(context) {
        this.segs = [];
        this.isSizeDirty = false;
        this.context = context;
    }
    FgEventRenderer.prototype.renderSegs = function (segs, mirrorInfo) {
        this.rangeUpdated(); // called too frequently :(
        // render an `.el` on each seg
        // returns a subset of the segs. segs that were actually rendered
        segs = this.renderSegEls(segs, mirrorInfo);
        this.segs = segs;
        this.attachSegs(segs, mirrorInfo);
        this.isSizeDirty = true;
        this.context.view.triggerRenderedSegs(this.segs, Boolean(mirrorInfo));
    };
    FgEventRenderer.prototype.unrender = function (_segs, mirrorInfo) {
        this.context.view.triggerWillRemoveSegs(this.segs, Boolean(mirrorInfo));
        this.detachSegs(this.segs);
        this.segs = [];
    };
    // Updates values that rely on options and also relate to range
    FgEventRenderer.prototype.rangeUpdated = function () {
        var options = this.context.options;
        var displayEventTime;
        var displayEventEnd;
        this.eventTimeFormat = createFormatter(options.eventTimeFormat || this.computeEventTimeFormat(), options.defaultRangeSeparator);
        displayEventTime = options.displayEventTime;
        if (displayEventTime == null) {
            displayEventTime = this.computeDisplayEventTime(); // might be based off of range
        }
        displayEventEnd = options.displayEventEnd;
        if (displayEventEnd == null) {
            displayEventEnd = this.computeDisplayEventEnd(); // might be based off of range
        }
        this.displayEventTime = displayEventTime;
        this.displayEventEnd = displayEventEnd;
    };
    // Renders and assigns an `el` property for each foreground event segment.
    // Only returns segments that successfully rendered.
    FgEventRenderer.prototype.renderSegEls = function (segs, mirrorInfo) {
        var html = '';
        var i;
        if (segs.length) { // don't build an empty html string
            // build a large concatenation of event segment HTML
            for (i = 0; i < segs.length; i++) {
                html += this.renderSegHtml(segs[i], mirrorInfo);
            }
            // Grab individual elements from the combined HTML string. Use each as the default rendering.
            // Then, compute the 'el' for each segment. An el might be null if the eventRender callback returned false.
            htmlToElements(html).forEach(function (el, i) {
                var seg = segs[i];
                if (el) {
                    seg.el = el;
                }
            });
            segs = filterSegsViaEls(this.context.view, segs, Boolean(mirrorInfo));
        }
        return segs;
    };
    // Generic utility for generating the HTML classNames for an event segment's element
    FgEventRenderer.prototype.getSegClasses = function (seg, isDraggable, isResizable, mirrorInfo) {
        var classes = [
            'fc-event',
            seg.isStart ? 'fc-start' : 'fc-not-start',
            seg.isEnd ? 'fc-end' : 'fc-not-end'
        ].concat(seg.eventRange.ui.classNames);
        if (isDraggable) {
            classes.push('fc-draggable');
        }
        if (isResizable) {
            classes.push('fc-resizable');
        }
        if (mirrorInfo) {
            classes.push('fc-mirror');
            if (mirrorInfo.isDragging) {
                classes.push('fc-dragging');
            }
            if (mirrorInfo.isResizing) {
                classes.push('fc-resizing');
            }
        }
        return classes;
    };
    // Compute the text that should be displayed on an event's element.
    // `range` can be the Event object itself, or something range-like, with at least a `start`.
    // If event times are disabled, or the event has no time, will return a blank string.
    // If not specified, formatter will default to the eventTimeFormat setting,
    // and displayEnd will default to the displayEventEnd setting.
    FgEventRenderer.prototype.getTimeText = function (eventRange, formatter, displayEnd) {
        var def = eventRange.def, instance = eventRange.instance;
        return this._getTimeText(instance.range.start, def.hasEnd ? instance.range.end : null, def.allDay, formatter, displayEnd, instance.forcedStartTzo, instance.forcedEndTzo);
    };
    FgEventRenderer.prototype._getTimeText = function (start, end, allDay, formatter, displayEnd, forcedStartTzo, forcedEndTzo) {
        var dateEnv = this.context.dateEnv;
        if (formatter == null) {
            formatter = this.eventTimeFormat;
        }
        if (displayEnd == null) {
            displayEnd = this.displayEventEnd;
        }
        if (this.displayEventTime && !allDay) {
            if (displayEnd && end) {
                return dateEnv.formatRange(start, end, formatter, {
                    forcedStartTzo: forcedStartTzo,
                    forcedEndTzo: forcedEndTzo
                });
            }
            else {
                return dateEnv.format(start, formatter, {
                    forcedTzo: forcedStartTzo
                });
            }
        }
        return '';
    };
    FgEventRenderer.prototype.computeEventTimeFormat = function () {
        return {
            hour: 'numeric',
            minute: '2-digit',
            omitZeroMinute: true
        };
    };
    FgEventRenderer.prototype.computeDisplayEventTime = function () {
        return true;
    };
    FgEventRenderer.prototype.computeDisplayEventEnd = function () {
        return true;
    };
    // Utility for generating event skin-related CSS properties
    FgEventRenderer.prototype.getSkinCss = function (ui) {
        return {
            'background-color': ui.backgroundColor,
            'border-color': ui.borderColor,
            color: ui.textColor
        };
    };
    FgEventRenderer.prototype.sortEventSegs = function (segs) {
        var specs = this.context.view.eventOrderSpecs;
        var objs = segs.map(buildSegCompareObj);
        objs.sort(function (obj0, obj1) {
            return compareByFieldSpecs(obj0, obj1, specs);
        });
        return objs.map(function (c) {
            return c._seg;
        });
    };
    FgEventRenderer.prototype.computeSizes = function (force) {
        if (force || this.isSizeDirty) {
            this.computeSegSizes(this.segs);
        }
    };
    FgEventRenderer.prototype.assignSizes = function (force) {
        if (force || this.isSizeDirty) {
            this.assignSegSizes(this.segs);
            this.isSizeDirty = false;
        }
    };
    FgEventRenderer.prototype.computeSegSizes = function (segs) {
    };
    FgEventRenderer.prototype.assignSegSizes = function (segs) {
    };
    // Manipulation on rendered segs
    FgEventRenderer.prototype.hideByHash = function (hash) {
        if (hash) {
            for (var _i = 0, _a = this.segs; _i < _a.length; _i++) {
                var seg = _a[_i];
                if (hash[seg.eventRange.instance.instanceId]) {
                    seg.el.style.visibility = 'hidden';
                }
            }
        }
    };
    FgEventRenderer.prototype.showByHash = function (hash) {
        if (hash) {
            for (var _i = 0, _a = this.segs; _i < _a.length; _i++) {
                var seg = _a[_i];
                if (hash[seg.eventRange.instance.instanceId]) {
                    seg.el.style.visibility = '';
                }
            }
        }
    };
    FgEventRenderer.prototype.selectByInstanceId = function (instanceId) {
        if (instanceId) {
            for (var _i = 0, _a = this.segs; _i < _a.length; _i++) {
                var seg = _a[_i];
                var eventInstance = seg.eventRange.instance;
                if (eventInstance && eventInstance.instanceId === instanceId &&
                    seg.el // necessary?
                ) {
                    seg.el.classList.add('fc-selected');
                }
            }
        }
    };
    FgEventRenderer.prototype.unselectByInstanceId = function (instanceId) {
        if (instanceId) {
            for (var _i = 0, _a = this.segs; _i < _a.length; _i++) {
                var seg = _a[_i];
                if (seg.el) { // necessary?
                    seg.el.classList.remove('fc-selected');
                }
            }
        }
    };
    return FgEventRenderer;
}());
// returns a object with all primitive props that can be compared
function buildSegCompareObj(seg) {
    var eventDef = seg.eventRange.def;
    var range = seg.eventRange.instance.range;
    var start = range.start ? range.start.valueOf() : 0; // TODO: better support for open-range events
    var end = range.end ? range.end.valueOf() : 0; // "
    return __assign({}, eventDef.extendedProps, eventDef, { id: eventDef.publicId, start: start,
        end: end, duration: end - start, allDay: Number(eventDef.allDay), _seg: seg // for later retrieval
     });
}

var FillRenderer = /** @class */ (function () {
    function FillRenderer(context) {
        this.fillSegTag = 'div';
        this.dirtySizeFlags = {};
        this.context = context;
        this.containerElsByType = {};
        this.segsByType = {};
    }
    FillRenderer.prototype.getSegsByType = function (type) {
        return this.segsByType[type] || [];
    };
    FillRenderer.prototype.renderSegs = function (type, segs) {
        var _a;
        var renderedSegs = this.renderSegEls(type, segs); // assignes `.el` to each seg. returns successfully rendered segs
        var containerEls = this.attachSegs(type, renderedSegs);
        if (containerEls) {
            (_a = (this.containerElsByType[type] || (this.containerElsByType[type] = []))).push.apply(_a, containerEls);
        }
        this.segsByType[type] = renderedSegs;
        if (type === 'bgEvent') {
            this.context.view.triggerRenderedSegs(renderedSegs, false); // isMirror=false
        }
        this.dirtySizeFlags[type] = true;
    };
    // Unrenders a specific type of fill that is currently rendered on the grid
    FillRenderer.prototype.unrender = function (type) {
        var segs = this.segsByType[type];
        if (segs) {
            if (type === 'bgEvent') {
                this.context.view.triggerWillRemoveSegs(segs, false); // isMirror=false
            }
            this.detachSegs(type, segs);
        }
    };
    // Renders and assigns an `el` property for each fill segment. Generic enough to work with different types.
    // Only returns segments that successfully rendered.
    FillRenderer.prototype.renderSegEls = function (type, segs) {
        var _this = this;
        var html = '';
        var i;
        if (segs.length) {
            // build a large concatenation of segment HTML
            for (i = 0; i < segs.length; i++) {
                html += this.renderSegHtml(type, segs[i]);
            }
            // Grab individual elements from the combined HTML string. Use each as the default rendering.
            // Then, compute the 'el' for each segment.
            htmlToElements(html).forEach(function (el, i) {
                var seg = segs[i];
                if (el) {
                    seg.el = el;
                }
            });
            if (type === 'bgEvent') {
                segs = filterSegsViaEls(this.context.view, segs, false // isMirror. background events can never be mirror elements
                );
            }
            // correct element type? (would be bad if a non-TD were inserted into a table for example)
            segs = segs.filter(function (seg) {
                return elementMatches(seg.el, _this.fillSegTag);
            });
        }
        return segs;
    };
    // Builds the HTML needed for one fill segment. Generic enough to work with different types.
    FillRenderer.prototype.renderSegHtml = function (type, seg) {
        var css = null;
        var classNames = [];
        if (type !== 'highlight' && type !== 'businessHours') {
            css = {
                'background-color': seg.eventRange.ui.backgroundColor
            };
        }
        if (type !== 'highlight') {
            classNames = classNames.concat(seg.eventRange.ui.classNames);
        }
        if (type === 'businessHours') {
            classNames.push('fc-bgevent');
        }
        else {
            classNames.push('fc-' + type.toLowerCase());
        }
        return '<' + this.fillSegTag +
            (classNames.length ? ' class="' + classNames.join(' ') + '"' : '') +
            (css ? ' style="' + cssToStr(css) + '"' : '') +
            '></' + this.fillSegTag + '>';
    };
    FillRenderer.prototype.detachSegs = function (type, segs) {
        var containerEls = this.containerElsByType[type];
        if (containerEls) {
            containerEls.forEach(removeElement);
            delete this.containerElsByType[type];
        }
    };
    FillRenderer.prototype.computeSizes = function (force) {
        for (var type in this.segsByType) {
            if (force || this.dirtySizeFlags[type]) {
                this.computeSegSizes(this.segsByType[type]);
            }
        }
    };
    FillRenderer.prototype.assignSizes = function (force) {
        for (var type in this.segsByType) {
            if (force || this.dirtySizeFlags[type]) {
                this.assignSegSizes(this.segsByType[type]);
            }
        }
        this.dirtySizeFlags = {};
    };
    FillRenderer.prototype.computeSegSizes = function (segs) {
    };
    FillRenderer.prototype.assignSegSizes = function (segs) {
    };
    return FillRenderer;
}());

var NamedTimeZoneImpl = /** @class */ (function () {
    function NamedTimeZoneImpl(timeZoneName) {
        this.timeZoneName = timeZoneName;
    }
    return NamedTimeZoneImpl;
}());

/*
An abstraction for a dragging interaction originating on an event.
Does higher-level things than PointerDragger, such as possibly:
- a "mirror" that moves with the pointer
- a minimum number of pixels or other criteria for a true drag to begin

subclasses must emit:
- pointerdown
- dragstart
- dragmove
- pointerup
- dragend
*/
var ElementDragging = /** @class */ (function () {
    function ElementDragging(el) {
        this.emitter = new EmitterMixin();
    }
    ElementDragging.prototype.destroy = function () {
    };
    ElementDragging.prototype.setMirrorIsVisible = function (bool) {
        // optional if subclass doesn't want to support a mirror
    };
    ElementDragging.prototype.setMirrorNeedsRevert = function (bool) {
        // optional if subclass doesn't want to support a mirror
    };
    ElementDragging.prototype.setAutoScrollEnabled = function (bool) {
        // optional
    };
    return ElementDragging;
}());

function formatDate(dateInput, settings) {
    if (settings === void 0) { settings = {}; }
    var dateEnv = buildDateEnv$1(settings);
    var formatter = createFormatter(settings);
    var dateMeta = dateEnv.createMarkerMeta(dateInput);
    if (!dateMeta) { // TODO: warning?
        return '';
    }
    return dateEnv.format(dateMeta.marker, formatter, {
        forcedTzo: dateMeta.forcedTzo
    });
}
function formatRange(startInput, endInput, settings // mixture of env and formatter settings
) {
    var dateEnv = buildDateEnv$1(typeof settings === 'object' && settings ? settings : {}); // pass in if non-null object
    var formatter = createFormatter(settings, globalDefaults.defaultRangeSeparator);
    var startMeta = dateEnv.createMarkerMeta(startInput);
    var endMeta = dateEnv.createMarkerMeta(endInput);
    if (!startMeta || !endMeta) { // TODO: warning?
        return '';
    }
    return dateEnv.formatRange(startMeta.marker, endMeta.marker, formatter, {
        forcedStartTzo: startMeta.forcedTzo,
        forcedEndTzo: endMeta.forcedTzo,
        isEndExclusive: settings.isEndExclusive
    });
}
// TODO: more DRY and optimized
function buildDateEnv$1(settings) {
    var locale = buildLocale(settings.locale || 'en', parseRawLocales([]).map); // TODO: don't hardcode 'en' everywhere
    // ensure required settings
    settings = __assign({ timeZone: globalDefaults.timeZone, calendarSystem: 'gregory' }, settings, { locale: locale });
    return new DateEnv(settings);
}

var DRAG_META_PROPS = {
    startTime: createDuration,
    duration: createDuration,
    create: Boolean,
    sourceId: String
};
var DRAG_META_DEFAULTS = {
    create: true
};
function parseDragMeta(raw) {
    var leftoverProps = {};
    var refined = refineProps(raw, DRAG_META_PROPS, DRAG_META_DEFAULTS, leftoverProps);
    refined.leftoverProps = leftoverProps;
    return refined;
}

// Computes a default column header formatting string if `colFormat` is not explicitly defined
function computeFallbackHeaderFormat(datesRepDistinctDays, dayCnt) {
    // if more than one week row, or if there are a lot of columns with not much space,
    // put just the day numbers will be in each cell
    if (!datesRepDistinctDays || dayCnt > 10) {
        return { weekday: 'short' }; // "Sat"
    }
    else if (dayCnt > 1) {
        return { weekday: 'short', month: 'numeric', day: 'numeric', omitCommas: true }; // "Sat 11/12"
    }
    else {
        return { weekday: 'long' }; // "Saturday"
    }
}
function renderDateCell(dateMarker, dateProfile, datesRepDistinctDays, colCnt, colHeadFormat, context, colspan, otherAttrs) {
    var view = context.view, dateEnv = context.dateEnv, theme = context.theme, options = context.options;
    var isDateValid = rangeContainsMarker(dateProfile.activeRange, dateMarker); // TODO: called too frequently. cache somehow.
    var classNames = [
        'fc-day-header',
        theme.getClass('widgetHeader')
    ];
    var innerHtml;
    if (typeof options.columnHeaderHtml === 'function') {
        innerHtml = options.columnHeaderHtml(dateEnv.toDate(dateMarker));
    }
    else if (typeof options.columnHeaderText === 'function') {
        innerHtml = htmlEscape(options.columnHeaderText(dateEnv.toDate(dateMarker)));
    }
    else {
        innerHtml = htmlEscape(dateEnv.format(dateMarker, colHeadFormat));
    }
    // if only one row of days, the classNames on the header can represent the specific days beneath
    if (datesRepDistinctDays) {
        classNames = classNames.concat(
        // includes the day-of-week class
        // noThemeHighlight=true (don't highlight the header)
        getDayClasses(dateMarker, dateProfile, context, true));
    }
    else {
        classNames.push('fc-' + DAY_IDS[dateMarker.getUTCDay()]); // only add the day-of-week class
    }
    return '' +
        '<th class="' + classNames.join(' ') + '"' +
        ((isDateValid && datesRepDistinctDays) ?
            ' data-date="' + dateEnv.formatIso(dateMarker, { omitTime: true }) + '"' :
            '') +
        (colspan > 1 ?
            ' colspan="' + colspan + '"' :
            '') +
        (otherAttrs ?
            ' ' + otherAttrs :
            '') +
        '>' +
        (isDateValid ?
            // don't make a link if the heading could represent multiple days, or if there's only one day (forceOff)
            buildGotoAnchorHtml(view, { date: dateMarker, forceOff: !datesRepDistinctDays || colCnt === 1 }, innerHtml) :
            // if not valid, display text, but no link
            innerHtml) +
        '</th>';
}

var DayHeader = /** @class */ (function (_super) {
    __extends(DayHeader, _super);
    function DayHeader(context, parentEl) {
        var _this = _super.call(this, context) || this;
        parentEl.innerHTML = ''; // because might be nbsp
        parentEl.appendChild(_this.el = htmlToElement('<div class="fc-row ' + _this.theme.getClass('headerRow') + '">' +
            '<table class="' + _this.theme.getClass('tableGrid') + '">' +
            '<thead></thead>' +
            '</table>' +
            '</div>'));
        _this.thead = _this.el.querySelector('thead');
        return _this;
    }
    DayHeader.prototype.destroy = function () {
        removeElement(this.el);
    };
    DayHeader.prototype.render = function (props) {
        var dates = props.dates, datesRepDistinctDays = props.datesRepDistinctDays;
        var parts = [];
        if (props.renderIntroHtml) {
            parts.push(props.renderIntroHtml());
        }
        var colHeadFormat = createFormatter(this.opt('columnHeaderFormat') ||
            computeFallbackHeaderFormat(datesRepDistinctDays, dates.length));
        for (var _i = 0, dates_1 = dates; _i < dates_1.length; _i++) {
            var date = dates_1[_i];
            parts.push(renderDateCell(date, props.dateProfile, datesRepDistinctDays, dates.length, colHeadFormat, this.context));
        }
        if (this.isRtl) {
            parts.reverse();
        }
        this.thead.innerHTML = '<tr>' + parts.join('') + '</tr>';
    };
    return DayHeader;
}(Component));

var DaySeries = /** @class */ (function () {
    function DaySeries(range, dateProfileGenerator) {
        var date = range.start;
        var end = range.end;
        var indices = [];
        var dates = [];
        var dayIndex = -1;
        while (date < end) { // loop each day from start to end
            if (dateProfileGenerator.isHiddenDay(date)) {
                indices.push(dayIndex + 0.5); // mark that it's between indices
            }
            else {
                dayIndex++;
                indices.push(dayIndex);
                dates.push(date);
            }
            date = addDays(date, 1);
        }
        this.dates = dates;
        this.indices = indices;
        this.cnt = dates.length;
    }
    DaySeries.prototype.sliceRange = function (range) {
        var firstIndex = this.getDateDayIndex(range.start); // inclusive first index
        var lastIndex = this.getDateDayIndex(addDays(range.end, -1)); // inclusive last index
        var clippedFirstIndex = Math.max(0, firstIndex);
        var clippedLastIndex = Math.min(this.cnt - 1, lastIndex);
        // deal with in-between indices
        clippedFirstIndex = Math.ceil(clippedFirstIndex); // in-between starts round to next cell
        clippedLastIndex = Math.floor(clippedLastIndex); // in-between ends round to prev cell
        if (clippedFirstIndex <= clippedLastIndex) {
            return {
                firstIndex: clippedFirstIndex,
                lastIndex: clippedLastIndex,
                isStart: firstIndex === clippedFirstIndex,
                isEnd: lastIndex === clippedLastIndex
            };
        }
        else {
            return null;
        }
    };
    // Given a date, returns its chronolocial cell-index from the first cell of the grid.
    // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
    // If before the first offset, returns a negative number.
    // If after the last offset, returns an offset past the last cell offset.
    // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
    DaySeries.prototype.getDateDayIndex = function (date) {
        var indices = this.indices;
        var dayOffset = Math.floor(diffDays(this.dates[0], date));
        if (dayOffset < 0) {
            return indices[0] - 1;
        }
        else if (dayOffset >= indices.length) {
            return indices[indices.length - 1] + 1;
        }
        else {
            return indices[dayOffset];
        }
    };
    return DaySeries;
}());

var DayTable = /** @class */ (function () {
    function DayTable(daySeries, breakOnWeeks) {
        var dates = daySeries.dates;
        var daysPerRow;
        var firstDay;
        var rowCnt;
        if (breakOnWeeks) {
            // count columns until the day-of-week repeats
            firstDay = dates[0].getUTCDay();
            for (daysPerRow = 1; daysPerRow < dates.length; daysPerRow++) {
                if (dates[daysPerRow].getUTCDay() === firstDay) {
                    break;
                }
            }
            rowCnt = Math.ceil(dates.length / daysPerRow);
        }
        else {
            rowCnt = 1;
            daysPerRow = dates.length;
        }
        this.rowCnt = rowCnt;
        this.colCnt = daysPerRow;
        this.daySeries = daySeries;
        this.cells = this.buildCells();
        this.headerDates = this.buildHeaderDates();
    }
    DayTable.prototype.buildCells = function () {
        var rows = [];
        for (var row = 0; row < this.rowCnt; row++) {
            var cells = [];
            for (var col = 0; col < this.colCnt; col++) {
                cells.push(this.buildCell(row, col));
            }
            rows.push(cells);
        }
        return rows;
    };
    DayTable.prototype.buildCell = function (row, col) {
        return {
            date: this.daySeries.dates[row * this.colCnt + col]
        };
    };
    DayTable.prototype.buildHeaderDates = function () {
        var dates = [];
        for (var col = 0; col < this.colCnt; col++) {
            dates.push(this.cells[0][col].date);
        }
        return dates;
    };
    DayTable.prototype.sliceRange = function (range) {
        var colCnt = this.colCnt;
        var seriesSeg = this.daySeries.sliceRange(range);
        var segs = [];
        if (seriesSeg) {
            var firstIndex = seriesSeg.firstIndex, lastIndex = seriesSeg.lastIndex;
            var index = firstIndex;
            while (index <= lastIndex) {
                var row = Math.floor(index / colCnt);
                var nextIndex = Math.min((row + 1) * colCnt, lastIndex + 1);
                segs.push({
                    row: row,
                    firstCol: index % colCnt,
                    lastCol: (nextIndex - 1) % colCnt,
                    isStart: seriesSeg.isStart && index === firstIndex,
                    isEnd: seriesSeg.isEnd && (nextIndex - 1) === lastIndex
                });
                index = nextIndex;
            }
        }
        return segs;
    };
    return DayTable;
}());

var Slicer = /** @class */ (function () {
    function Slicer() {
        this.sliceBusinessHours = memoize(this._sliceBusinessHours);
        this.sliceDateSelection = memoize(this._sliceDateSpan);
        this.sliceEventStore = memoize(this._sliceEventStore);
        this.sliceEventDrag = memoize(this._sliceInteraction);
        this.sliceEventResize = memoize(this._sliceInteraction);
    }
    Slicer.prototype.sliceProps = function (props, dateProfile, nextDayThreshold, component) {
        var extraArgs = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            extraArgs[_i - 4] = arguments[_i];
        }
        var eventUiBases = props.eventUiBases;
        var eventSegs = this.sliceEventStore.apply(this, [props.eventStore, eventUiBases, dateProfile, nextDayThreshold, component].concat(extraArgs));
        return {
            dateSelectionSegs: this.sliceDateSelection.apply(this, [props.dateSelection, eventUiBases, component].concat(extraArgs)),
            businessHourSegs: this.sliceBusinessHours.apply(this, [props.businessHours, dateProfile, nextDayThreshold, component].concat(extraArgs)),
            fgEventSegs: eventSegs.fg,
            bgEventSegs: eventSegs.bg,
            eventDrag: this.sliceEventDrag.apply(this, [props.eventDrag, eventUiBases, dateProfile, nextDayThreshold, component].concat(extraArgs)),
            eventResize: this.sliceEventResize.apply(this, [props.eventResize, eventUiBases, dateProfile, nextDayThreshold, component].concat(extraArgs)),
            eventSelection: props.eventSelection
        }; // TODO: give interactionSegs?
    };
    Slicer.prototype.sliceNowDate = function (// does not memoize
    date, component) {
        var extraArgs = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            extraArgs[_i - 2] = arguments[_i];
        }
        return this._sliceDateSpan.apply(this, [{ range: { start: date, end: addMs(date, 1) }, allDay: false },
            {},
            component].concat(extraArgs));
    };
    Slicer.prototype._sliceBusinessHours = function (businessHours, dateProfile, nextDayThreshold, component) {
        var extraArgs = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            extraArgs[_i - 4] = arguments[_i];
        }
        if (!businessHours) {
            return [];
        }
        return this._sliceEventStore.apply(this, [expandRecurring(businessHours, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), component.calendar),
            {},
            dateProfile,
            nextDayThreshold,
            component].concat(extraArgs)).bg;
    };
    Slicer.prototype._sliceEventStore = function (eventStore, eventUiBases, dateProfile, nextDayThreshold, component) {
        var extraArgs = [];
        for (var _i = 5; _i < arguments.length; _i++) {
            extraArgs[_i - 5] = arguments[_i];
        }
        if (eventStore) {
            var rangeRes = sliceEventStore(eventStore, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
            return {
                bg: this.sliceEventRanges(rangeRes.bg, component, extraArgs),
                fg: this.sliceEventRanges(rangeRes.fg, component, extraArgs)
            };
        }
        else {
            return { bg: [], fg: [] };
        }
    };
    Slicer.prototype._sliceInteraction = function (interaction, eventUiBases, dateProfile, nextDayThreshold, component) {
        var extraArgs = [];
        for (var _i = 5; _i < arguments.length; _i++) {
            extraArgs[_i - 5] = arguments[_i];
        }
        if (!interaction) {
            return null;
        }
        var rangeRes = sliceEventStore(interaction.mutatedEvents, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
        return {
            segs: this.sliceEventRanges(rangeRes.fg, component, extraArgs),
            affectedInstances: interaction.affectedEvents.instances,
            isEvent: interaction.isEvent,
            sourceSeg: interaction.origSeg
        };
    };
    Slicer.prototype._sliceDateSpan = function (dateSpan, eventUiBases, component) {
        var extraArgs = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            extraArgs[_i - 3] = arguments[_i];
        }
        if (!dateSpan) {
            return [];
        }
        var eventRange = fabricateEventRange(dateSpan, eventUiBases, component.calendar);
        var segs = this.sliceRange.apply(this, [dateSpan.range].concat(extraArgs));
        for (var _a = 0, segs_1 = segs; _a < segs_1.length; _a++) {
            var seg = segs_1[_a];
            seg.component = component;
            seg.eventRange = eventRange;
        }
        return segs;
    };
    /*
    "complete" seg means it has component and eventRange
    */
    Slicer.prototype.sliceEventRanges = function (eventRanges, component, // TODO: kill
    extraArgs) {
        var segs = [];
        for (var _i = 0, eventRanges_1 = eventRanges; _i < eventRanges_1.length; _i++) {
            var eventRange = eventRanges_1[_i];
            segs.push.apply(segs, this.sliceEventRange(eventRange, component, extraArgs));
        }
        return segs;
    };
    /*
    "complete" seg means it has component and eventRange
    */
    Slicer.prototype.sliceEventRange = function (eventRange, component, // TODO: kill
    extraArgs) {
        var segs = this.sliceRange.apply(this, [eventRange.range].concat(extraArgs));
        for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
            var seg = segs_2[_i];
            seg.component = component;
            seg.eventRange = eventRange;
            seg.isStart = eventRange.isStart && seg.isStart;
            seg.isEnd = eventRange.isEnd && seg.isEnd;
        }
        return segs;
    };
    return Slicer;
}());
/*
for incorporating minTime/maxTime if appropriate
TODO: should be part of DateProfile!
TimelineDateProfile already does this btw
*/
function computeActiveRange(dateProfile, isComponentAllDay) {
    var range = dateProfile.activeRange;
    if (isComponentAllDay) {
        return range;
    }
    return {
        start: addMs(range.start, dateProfile.minTime.milliseconds),
        end: addMs(range.end, dateProfile.maxTime.milliseconds - 864e5) // 864e5 = ms in a day
    };
}

// exports
// --------------------------------------------------------------------------------------------------
var version = '4.3.1';




/***/ }),

/***/ "./node_modules/@fullcalendar/daygrid/main.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/main.esm.js ***!
  \********************************************************/
/*! exports provided: default, AbstractDayGridView, DayBgRow, DayGrid, DayGridSlicer, DayGridView, SimpleDayGrid, buildBasicDayTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractDayGridView", function() { return DayGridView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayBgRow", function() { return DayBgRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayGrid", function() { return DayGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayGridSlicer", function() { return DayGridSlicer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayGridView", function() { return DayGridView$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleDayGrid", function() { return SimpleDayGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildBasicDayTable", function() { return buildDayTable; });
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/main.esm.js");
/*!
FullCalendar Day Grid Plugin v4.3.0
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var DayGridDateProfileGenerator = /** @class */ (function (_super) {
    __extends(DayGridDateProfileGenerator, _super);
    function DayGridDateProfileGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Computes the date range that will be rendered.
    DayGridDateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
        var dateEnv = this.dateEnv;
        var renderRange = _super.prototype.buildRenderRange.call(this, currentRange, currentRangeUnit, isRangeAllDay);
        var start = renderRange.start;
        var end = renderRange.end;
        var endOfWeek;
        // year and month views should be aligned with weeks. this is already done for week
        if (/^(year|month)$/.test(currentRangeUnit)) {
            start = dateEnv.startOfWeek(start);
            // make end-of-week if not already
            endOfWeek = dateEnv.startOfWeek(end);
            if (endOfWeek.valueOf() !== end.valueOf()) {
                end = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addWeeks"])(endOfWeek, 1);
            }
        }
        // ensure 6 weeks
        if (this.options.monthMode &&
            this.options.fixedWeekCount) {
            var rowCnt = Math.ceil(// could be partial weeks due to hiddenDays
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["diffWeeks"])(start, end));
            end = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addWeeks"])(end, 6 - rowCnt);
        }
        return { start: start, end: end };
    };
    return DayGridDateProfileGenerator;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DateProfileGenerator"]));

/* A rectangular panel that is absolutely positioned over other content
------------------------------------------------------------------------------------------------------------------------
Options:
  - className (string)
  - content (HTML string, element, or element array)
  - parentEl
  - top
  - left
  - right (the x coord of where the right edge should be. not a "CSS" right)
  - autoHide (boolean)
  - show (callback)
  - hide (callback)
*/
var Popover = /** @class */ (function () {
    function Popover(options) {
        var _this = this;
        this.isHidden = true;
        this.margin = 10; // the space required between the popover and the edges of the scroll container
        // Triggered when the user clicks *anywhere* in the document, for the autoHide feature
        this.documentMousedown = function (ev) {
            // only hide the popover if the click happened outside the popover
            if (_this.el && !_this.el.contains(ev.target)) {
                _this.hide();
            }
        };
        this.options = options;
    }
    // Shows the popover on the specified position. Renders it if not already
    Popover.prototype.show = function () {
        if (this.isHidden) {
            if (!this.el) {
                this.render();
            }
            this.el.style.display = '';
            this.position();
            this.isHidden = false;
            this.trigger('show');
        }
    };
    // Hides the popover, through CSS, but does not remove it from the DOM
    Popover.prototype.hide = function () {
        if (!this.isHidden) {
            this.el.style.display = 'none';
            this.isHidden = true;
            this.trigger('hide');
        }
    };
    // Creates `this.el` and renders content inside of it
    Popover.prototype.render = function () {
        var _this = this;
        var options = this.options;
        var el = this.el = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
            className: 'fc-popover ' + (options.className || ''),
            style: {
                top: '0',
                left: '0'
            }
        });
        if (typeof options.content === 'function') {
            options.content(el);
        }
        options.parentEl.appendChild(el);
        // when a click happens on anything inside with a 'fc-close' className, hide the popover
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["listenBySelector"])(el, 'click', '.fc-close', function (ev) {
            _this.hide();
        });
        if (options.autoHide) {
            document.addEventListener('mousedown', this.documentMousedown);
        }
    };
    // Hides and unregisters any handlers
    Popover.prototype.destroy = function () {
        this.hide();
        if (this.el) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(this.el);
            this.el = null;
        }
        document.removeEventListener('mousedown', this.documentMousedown);
    };
    // Positions the popover optimally, using the top/left/right options
    Popover.prototype.position = function () {
        var options = this.options;
        var el = this.el;
        var elDims = el.getBoundingClientRect(); // only used for width,height
        var origin = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeRect"])(el.offsetParent);
        var clippingRect = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeClippingRect"])(options.parentEl);
        var top; // the "position" (not "offset") values for the popover
        var left; //
        // compute top and left
        top = options.top || 0;
        if (options.left !== undefined) {
            left = options.left;
        }
        else if (options.right !== undefined) {
            left = options.right - elDims.width; // derive the left value from the right value
        }
        else {
            left = 0;
        }
        // constrain to the view port. if constrained by two edges, give precedence to top/left
        top = Math.min(top, clippingRect.bottom - elDims.height - this.margin);
        top = Math.max(top, clippingRect.top + this.margin);
        left = Math.min(left, clippingRect.right - elDims.width - this.margin);
        left = Math.max(left, clippingRect.left + this.margin);
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(el, {
            top: top - origin.top,
            left: left - origin.left
        });
    };
    // Triggers a callback. Calls a function in the option hash of the same name.
    // Arguments beyond the first `name` are forwarded on.
    // TODO: better code reuse for this. Repeat code
    // can kill this???
    Popover.prototype.trigger = function (name) {
        if (this.options[name]) {
            this.options[name].apply(this, Array.prototype.slice.call(arguments, 1));
        }
    };
    return Popover;
}());

/* Event-rendering methods for the DayGrid class
----------------------------------------------------------------------------------------------------------------------*/
// "Simple" is bad a name. has nothing to do with SimpleDayGrid
var SimpleDayGridEventRenderer = /** @class */ (function (_super) {
    __extends(SimpleDayGridEventRenderer, _super);
    function SimpleDayGridEventRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Builds the HTML to be used for the default element for an individual segment
    SimpleDayGridEventRenderer.prototype.renderSegHtml = function (seg, mirrorInfo) {
        var _a = this.context, view = _a.view, options = _a.options;
        var eventRange = seg.eventRange;
        var eventDef = eventRange.def;
        var eventUi = eventRange.ui;
        var allDay = eventDef.allDay;
        var isDraggable = view.computeEventDraggable(eventDef, eventUi);
        var isResizableFromStart = allDay && seg.isStart && view.computeEventStartResizable(eventDef, eventUi);
        var isResizableFromEnd = allDay && seg.isEnd && view.computeEventEndResizable(eventDef, eventUi);
        var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd, mirrorInfo);
        var skinCss = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["cssToStr"])(this.getSkinCss(eventUi));
        var timeHtml = '';
        var timeText;
        var titleHtml;
        classes.unshift('fc-day-grid-event', 'fc-h-event');
        // Only display a timed events time if it is the starting segment
        if (seg.isStart) {
            timeText = this.getTimeText(eventRange);
            if (timeText) {
                timeHtml = '<span class="fc-time">' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(timeText) + '</span>';
            }
        }
        titleHtml =
            '<span class="fc-title">' +
                (Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(eventDef.title || '') || '&nbsp;') + // we always want one line of height
                '</span>';
        return '<a class="' + classes.join(' ') + '"' +
            (eventDef.url ?
                ' href="' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(eventDef.url) + '"' :
                '') +
            (skinCss ?
                ' style="' + skinCss + '"' :
                '') +
            '>' +
            '<div class="fc-content">' +
            (options.dir === 'rtl' ?
                titleHtml + ' ' + timeHtml : // put a natural space in between
                timeHtml + ' ' + titleHtml //
            ) +
            '</div>' +
            (isResizableFromStart ?
                '<div class="fc-resizer fc-start-resizer"></div>' :
                '') +
            (isResizableFromEnd ?
                '<div class="fc-resizer fc-end-resizer"></div>' :
                '') +
            '</a>';
    };
    // Computes a default event time formatting string if `eventTimeFormat` is not explicitly defined
    SimpleDayGridEventRenderer.prototype.computeEventTimeFormat = function () {
        return {
            hour: 'numeric',
            minute: '2-digit',
            omitZeroMinute: true,
            meridiem: 'narrow'
        };
    };
    SimpleDayGridEventRenderer.prototype.computeDisplayEventEnd = function () {
        return false; // TODO: somehow consider the originating DayGrid's column count
    };
    return SimpleDayGridEventRenderer;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["FgEventRenderer"]));

/* Event-rendering methods for the DayGrid class
----------------------------------------------------------------------------------------------------------------------*/
var DayGridEventRenderer = /** @class */ (function (_super) {
    __extends(DayGridEventRenderer, _super);
    function DayGridEventRenderer(dayGrid) {
        var _this = _super.call(this, dayGrid.context) || this;
        _this.dayGrid = dayGrid;
        return _this;
    }
    // Renders the given foreground event segments onto the grid
    DayGridEventRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
        var rowStructs = this.rowStructs = this.renderSegRows(segs);
        // append to each row's content skeleton
        this.dayGrid.rowEls.forEach(function (rowNode, i) {
            rowNode.querySelector('.fc-content-skeleton > table').appendChild(rowStructs[i].tbodyEl);
        });
        // removes the "more.." events popover
        if (!mirrorInfo) {
            this.dayGrid.removeSegPopover();
        }
    };
    // Unrenders all currently rendered foreground event segments
    DayGridEventRenderer.prototype.detachSegs = function () {
        var rowStructs = this.rowStructs || [];
        var rowStruct;
        while ((rowStruct = rowStructs.pop())) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(rowStruct.tbodyEl);
        }
        this.rowStructs = null;
    };
    // Uses the given events array to generate <tbody> elements that should be appended to each row's content skeleton.
    // Returns an array of rowStruct objects (see the bottom of `renderSegRow`).
    // PRECONDITION: each segment shoud already have a rendered and assigned `.el`
    DayGridEventRenderer.prototype.renderSegRows = function (segs) {
        var rowStructs = [];
        var segRows;
        var row;
        segRows = this.groupSegRows(segs); // group into nested arrays
        // iterate each row of segment groupings
        for (row = 0; row < segRows.length; row++) {
            rowStructs.push(this.renderSegRow(row, segRows[row]));
        }
        return rowStructs;
    };
    // Given a row # and an array of segments all in the same row, render a <tbody> element, a skeleton that contains
    // the segments. Returns object with a bunch of internal data about how the render was calculated.
    // NOTE: modifies rowSegs
    DayGridEventRenderer.prototype.renderSegRow = function (row, rowSegs) {
        var dayGrid = this.dayGrid;
        var colCnt = dayGrid.colCnt, isRtl = dayGrid.isRtl;
        var segLevels = this.buildSegLevels(rowSegs); // group into sub-arrays of levels
        var levelCnt = Math.max(1, segLevels.length); // ensure at least one level
        var tbody = document.createElement('tbody');
        var segMatrix = []; // lookup for which segments are rendered into which level+col cells
        var cellMatrix = []; // lookup for all <td> elements of the level+col matrix
        var loneCellMatrix = []; // lookup for <td> elements that only take up a single column
        var i;
        var levelSegs;
        var col;
        var tr;
        var j;
        var seg;
        var td;
        // populates empty cells from the current column (`col`) to `endCol`
        function emptyCellsUntil(endCol) {
            while (col < endCol) {
                // try to grab a cell from the level above and extend its rowspan. otherwise, create a fresh cell
                td = (loneCellMatrix[i - 1] || [])[col];
                if (td) {
                    td.rowSpan = (td.rowSpan || 1) + 1;
                }
                else {
                    td = document.createElement('td');
                    tr.appendChild(td);
                }
                cellMatrix[i][col] = td;
                loneCellMatrix[i][col] = td;
                col++;
            }
        }
        for (i = 0; i < levelCnt; i++) { // iterate through all levels
            levelSegs = segLevels[i];
            col = 0;
            tr = document.createElement('tr');
            segMatrix.push([]);
            cellMatrix.push([]);
            loneCellMatrix.push([]);
            // levelCnt might be 1 even though there are no actual levels. protect against this.
            // this single empty row is useful for styling.
            if (levelSegs) {
                for (j = 0; j < levelSegs.length; j++) { // iterate through segments in level
                    seg = levelSegs[j];
                    var leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol;
                    var rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol;
                    emptyCellsUntil(leftCol);
                    // create a container that occupies or more columns. append the event element.
                    td = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('td', { className: 'fc-event-container' }, seg.el);
                    if (leftCol !== rightCol) {
                        td.colSpan = rightCol - leftCol + 1;
                    }
                    else { // a single-column segment
                        loneCellMatrix[i][col] = td;
                    }
                    while (col <= rightCol) {
                        cellMatrix[i][col] = td;
                        segMatrix[i][col] = seg;
                        col++;
                    }
                    tr.appendChild(td);
                }
            }
            emptyCellsUntil(colCnt); // finish off the row
            var introHtml = dayGrid.renderProps.renderIntroHtml();
            if (introHtml) {
                if (dayGrid.isRtl) {
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["appendToElement"])(tr, introHtml);
                }
                else {
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["prependToElement"])(tr, introHtml);
                }
            }
            tbody.appendChild(tr);
        }
        return {
            row: row,
            tbodyEl: tbody,
            cellMatrix: cellMatrix,
            segMatrix: segMatrix,
            segLevels: segLevels,
            segs: rowSegs
        };
    };
    // Stacks a flat array of segments, which are all assumed to be in the same row, into subarrays of vertical levels.
    // NOTE: modifies segs
    DayGridEventRenderer.prototype.buildSegLevels = function (segs) {
        var _a = this.dayGrid, isRtl = _a.isRtl, colCnt = _a.colCnt;
        var levels = [];
        var i;
        var seg;
        var j;
        // Give preference to elements with certain criteria, so they have
        // a chance to be closer to the top.
        segs = this.sortEventSegs(segs);
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            // loop through levels, starting with the topmost, until the segment doesn't collide with other segments
            for (j = 0; j < levels.length; j++) {
                if (!isDaySegCollision(seg, levels[j])) {
                    break;
                }
            }
            // `j` now holds the desired subrow index
            seg.level = j;
            seg.leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol; // for sorting only
            seg.rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol // for sorting only
            ;
            (levels[j] || (levels[j] = [])).push(seg);
        }
        // order segments left-to-right. very important if calendar is RTL
        for (j = 0; j < levels.length; j++) {
            levels[j].sort(compareDaySegCols);
        }
        return levels;
    };
    // Given a flat array of segments, return an array of sub-arrays, grouped by each segment's row
    DayGridEventRenderer.prototype.groupSegRows = function (segs) {
        var segRows = [];
        var i;
        for (i = 0; i < this.dayGrid.rowCnt; i++) {
            segRows.push([]);
        }
        for (i = 0; i < segs.length; i++) {
            segRows[segs[i].row].push(segs[i]);
        }
        return segRows;
    };
    // Computes a default `displayEventEnd` value if one is not expliclty defined
    DayGridEventRenderer.prototype.computeDisplayEventEnd = function () {
        return this.dayGrid.colCnt === 1; // we'll likely have space if there's only one day
    };
    return DayGridEventRenderer;
}(SimpleDayGridEventRenderer));
// Computes whether two segments' columns collide. They are assumed to be in the same row.
function isDaySegCollision(seg, otherSegs) {
    var i;
    var otherSeg;
    for (i = 0; i < otherSegs.length; i++) {
        otherSeg = otherSegs[i];
        if (otherSeg.firstCol <= seg.lastCol &&
            otherSeg.lastCol >= seg.firstCol) {
            return true;
        }
    }
    return false;
}
// A cmp function for determining the leftmost event
function compareDaySegCols(a, b) {
    return a.leftCol - b.leftCol;
}

var DayGridMirrorRenderer = /** @class */ (function (_super) {
    __extends(DayGridMirrorRenderer, _super);
    function DayGridMirrorRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayGridMirrorRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
        var sourceSeg = mirrorInfo.sourceSeg;
        var rowStructs = this.rowStructs = this.renderSegRows(segs);
        // inject each new event skeleton into each associated row
        this.dayGrid.rowEls.forEach(function (rowNode, row) {
            var skeletonEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlToElement"])('<div class="fc-mirror-skeleton"><table></table></div>'); // will be absolutely positioned
            var skeletonTopEl;
            var skeletonTop;
            // If there is an original segment, match the top position. Otherwise, put it at the row's top level
            if (sourceSeg && sourceSeg.row === row) {
                skeletonTopEl = sourceSeg.el;
            }
            else {
                skeletonTopEl = rowNode.querySelector('.fc-content-skeleton tbody');
                if (!skeletonTopEl) { // when no events
                    skeletonTopEl = rowNode.querySelector('.fc-content-skeleton table');
                }
            }
            skeletonTop = skeletonTopEl.getBoundingClientRect().top -
                rowNode.getBoundingClientRect().top; // the offsetParent origin
            skeletonEl.style.top = skeletonTop + 'px';
            skeletonEl.querySelector('table').appendChild(rowStructs[row].tbodyEl);
            rowNode.appendChild(skeletonEl);
        });
    };
    return DayGridMirrorRenderer;
}(DayGridEventRenderer));

var EMPTY_CELL_HTML = '<td style="pointer-events:none"></td>';
var DayGridFillRenderer = /** @class */ (function (_super) {
    __extends(DayGridFillRenderer, _super);
    function DayGridFillRenderer(dayGrid) {
        var _this = _super.call(this, dayGrid.context) || this;
        _this.fillSegTag = 'td'; // override the default tag name
        _this.dayGrid = dayGrid;
        return _this;
    }
    DayGridFillRenderer.prototype.renderSegs = function (type, segs) {
        // don't render timed background events
        if (type === 'bgEvent') {
            segs = segs.filter(function (seg) {
                return seg.eventRange.def.allDay;
            });
        }
        _super.prototype.renderSegs.call(this, type, segs);
    };
    DayGridFillRenderer.prototype.attachSegs = function (type, segs) {
        var els = [];
        var i;
        var seg;
        var skeletonEl;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            skeletonEl = this.renderFillRow(type, seg);
            this.dayGrid.rowEls[seg.row].appendChild(skeletonEl);
            els.push(skeletonEl);
        }
        return els;
    };
    // Generates the HTML needed for one row of a fill. Requires the seg's el to be rendered.
    DayGridFillRenderer.prototype.renderFillRow = function (type, seg) {
        var dayGrid = this.dayGrid;
        var colCnt = dayGrid.colCnt, isRtl = dayGrid.isRtl;
        var leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol;
        var rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol;
        var startCol = leftCol;
        var endCol = rightCol + 1;
        var className;
        var skeletonEl;
        var trEl;
        if (type === 'businessHours') {
            className = 'bgevent';
        }
        else {
            className = type.toLowerCase();
        }
        skeletonEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlToElement"])('<div class="fc-' + className + '-skeleton">' +
            '<table><tr></tr></table>' +
            '</div>');
        trEl = skeletonEl.getElementsByTagName('tr')[0];
        if (startCol > 0) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["appendToElement"])(trEl, 
            // will create (startCol + 1) td's
            new Array(startCol + 1).join(EMPTY_CELL_HTML));
        }
        seg.el.colSpan = endCol - startCol;
        trEl.appendChild(seg.el);
        if (endCol < colCnt) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["appendToElement"])(trEl, 
            // will create (colCnt - endCol) td's
            new Array(colCnt - endCol + 1).join(EMPTY_CELL_HTML));
        }
        var introHtml = dayGrid.renderProps.renderIntroHtml();
        if (introHtml) {
            if (dayGrid.isRtl) {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["appendToElement"])(trEl, introHtml);
            }
            else {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["prependToElement"])(trEl, introHtml);
            }
        }
        return skeletonEl;
    };
    return DayGridFillRenderer;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["FillRenderer"]));

var DayTile = /** @class */ (function (_super) {
    __extends(DayTile, _super);
    function DayTile(context, el) {
        var _this = _super.call(this, context, el) || this;
        var eventRenderer = _this.eventRenderer = new DayTileEventRenderer(_this);
        var renderFrame = _this.renderFrame = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderFrame);
        _this.renderFgEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.renderSegs.bind(eventRenderer), eventRenderer.unrender.bind(eventRenderer), [renderFrame]);
        _this.renderEventSelection = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.selectByInstanceId.bind(eventRenderer), eventRenderer.unselectByInstanceId.bind(eventRenderer), [_this.renderFgEvents]);
        _this.renderEventDrag = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.hideByHash.bind(eventRenderer), eventRenderer.showByHash.bind(eventRenderer), [renderFrame]);
        _this.renderEventResize = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.hideByHash.bind(eventRenderer), eventRenderer.showByHash.bind(eventRenderer), [renderFrame]);
        context.calendar.registerInteractiveComponent(_this, {
            el: _this.el,
            useEventCenter: false
        });
        return _this;
    }
    DayTile.prototype.render = function (props) {
        this.renderFrame(props.date);
        this.renderFgEvents(props.fgSegs);
        this.renderEventSelection(props.eventSelection);
        this.renderEventDrag(props.eventDragInstances);
        this.renderEventResize(props.eventResizeInstances);
    };
    DayTile.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.renderFrame.unrender(); // should unrender everything else
        this.calendar.unregisterInteractiveComponent(this);
    };
    DayTile.prototype._renderFrame = function (date) {
        var _a = this, theme = _a.theme, dateEnv = _a.dateEnv;
        var title = dateEnv.format(date, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])(this.opt('dayPopoverFormat')) // TODO: cache
        );
        this.el.innerHTML =
            '<div class="fc-header ' + theme.getClass('popoverHeader') + '">' +
                '<span class="fc-title">' +
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(title) +
                '</span>' +
                '<span class="fc-close ' + theme.getIconClass('close') + '"></span>' +
                '</div>' +
                '<div class="fc-body ' + theme.getClass('popoverContent') + '">' +
                '<div class="fc-event-container"></div>' +
                '</div>';
        this.segContainerEl = this.el.querySelector('.fc-event-container');
    };
    DayTile.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
        var date = this.props.date; // HACK
        if (positionLeft < elWidth && positionTop < elHeight) {
            return {
                component: this,
                dateSpan: {
                    allDay: true,
                    range: { start: date, end: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDays"])(date, 1) }
                },
                dayEl: this.el,
                rect: {
                    left: 0,
                    top: 0,
                    right: elWidth,
                    bottom: elHeight
                },
                layer: 1
            };
        }
    };
    return DayTile;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DateComponent"]));
var DayTileEventRenderer = /** @class */ (function (_super) {
    __extends(DayTileEventRenderer, _super);
    function DayTileEventRenderer(dayTile) {
        var _this = _super.call(this, dayTile.context) || this;
        _this.dayTile = dayTile;
        return _this;
    }
    DayTileEventRenderer.prototype.attachSegs = function (segs) {
        for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
            var seg = segs_1[_i];
            this.dayTile.segContainerEl.appendChild(seg.el);
        }
    };
    DayTileEventRenderer.prototype.detachSegs = function (segs) {
        for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
            var seg = segs_2[_i];
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(seg.el);
        }
    };
    return DayTileEventRenderer;
}(SimpleDayGridEventRenderer));

var DayBgRow = /** @class */ (function () {
    function DayBgRow(context) {
        this.context = context;
    }
    DayBgRow.prototype.renderHtml = function (props) {
        var parts = [];
        if (props.renderIntroHtml) {
            parts.push(props.renderIntroHtml());
        }
        for (var _i = 0, _a = props.cells; _i < _a.length; _i++) {
            var cell = _a[_i];
            parts.push(renderCellHtml(cell.date, props.dateProfile, this.context, cell.htmlAttrs));
        }
        if (!props.cells.length) {
            parts.push('<td class="fc-day ' + this.context.theme.getClass('widgetContent') + '"></td>');
        }
        if (this.context.options.dir === 'rtl') {
            parts.reverse();
        }
        return '<tr>' + parts.join('') + '</tr>';
    };
    return DayBgRow;
}());
function renderCellHtml(date, dateProfile, context, otherAttrs) {
    var dateEnv = context.dateEnv, theme = context.theme;
    var isDateValid = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["rangeContainsMarker"])(dateProfile.activeRange, date); // TODO: called too frequently. cache somehow.
    var classes = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getDayClasses"])(date, dateProfile, context);
    classes.unshift('fc-day', theme.getClass('widgetContent'));
    return '<td class="' + classes.join(' ') + '"' +
        (isDateValid ?
            ' data-date="' + dateEnv.formatIso(date, { omitTime: true }) + '"' :
            '') +
        (otherAttrs ?
            ' ' + otherAttrs :
            '') +
        '></td>';
}

var DAY_NUM_FORMAT = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])({ day: 'numeric' });
var WEEK_NUM_FORMAT = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])({ week: 'numeric' });
var DayGrid = /** @class */ (function (_super) {
    __extends(DayGrid, _super);
    function DayGrid(context, el, renderProps) {
        var _this = _super.call(this, context, el) || this;
        _this.bottomCoordPadding = 0; // hack for extending the hit area for the last row of the coordinate grid
        _this.isCellSizesDirty = false;
        var eventRenderer = _this.eventRenderer = new DayGridEventRenderer(_this);
        var fillRenderer = _this.fillRenderer = new DayGridFillRenderer(_this);
        _this.mirrorRenderer = new DayGridMirrorRenderer(_this);
        var renderCells = _this.renderCells = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderCells, _this._unrenderCells);
        _this.renderBusinessHours = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(fillRenderer.renderSegs.bind(fillRenderer, 'businessHours'), fillRenderer.unrender.bind(fillRenderer, 'businessHours'), [renderCells]);
        _this.renderDateSelection = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(fillRenderer.renderSegs.bind(fillRenderer, 'highlight'), fillRenderer.unrender.bind(fillRenderer, 'highlight'), [renderCells]);
        _this.renderBgEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(fillRenderer.renderSegs.bind(fillRenderer, 'bgEvent'), fillRenderer.unrender.bind(fillRenderer, 'bgEvent'), [renderCells]);
        _this.renderFgEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.renderSegs.bind(eventRenderer), eventRenderer.unrender.bind(eventRenderer), [renderCells]);
        _this.renderEventSelection = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.selectByInstanceId.bind(eventRenderer), eventRenderer.unselectByInstanceId.bind(eventRenderer), [_this.renderFgEvents]);
        _this.renderEventDrag = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderEventDrag, _this._unrenderEventDrag, [renderCells]);
        _this.renderEventResize = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderEventResize, _this._unrenderEventResize, [renderCells]);
        _this.renderProps = renderProps;
        return _this;
    }
    DayGrid.prototype.render = function (props) {
        var cells = props.cells;
        this.rowCnt = cells.length;
        this.colCnt = cells[0].length;
        this.renderCells(cells, props.isRigid);
        this.renderBusinessHours(props.businessHourSegs);
        this.renderDateSelection(props.dateSelectionSegs);
        this.renderBgEvents(props.bgEventSegs);
        this.renderFgEvents(props.fgEventSegs);
        this.renderEventSelection(props.eventSelection);
        this.renderEventDrag(props.eventDrag);
        this.renderEventResize(props.eventResize);
        if (this.segPopoverTile) {
            this.updateSegPopoverTile();
        }
    };
    DayGrid.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.renderCells.unrender(); // will unrender everything else
    };
    DayGrid.prototype.getCellRange = function (row, col) {
        var start = this.props.cells[row][col].date;
        var end = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDays"])(start, 1);
        return { start: start, end: end };
    };
    DayGrid.prototype.updateSegPopoverTile = function (date, segs) {
        var ownProps = this.props;
        this.segPopoverTile.receiveProps({
            date: date || this.segPopoverTile.props.date,
            fgSegs: segs || this.segPopoverTile.props.fgSegs,
            eventSelection: ownProps.eventSelection,
            eventDragInstances: ownProps.eventDrag ? ownProps.eventDrag.affectedInstances : null,
            eventResizeInstances: ownProps.eventResize ? ownProps.eventResize.affectedInstances : null
        });
    };
    /* Date Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype._renderCells = function (cells, isRigid) {
        var _a = this, view = _a.view, dateEnv = _a.dateEnv;
        var _b = this, rowCnt = _b.rowCnt, colCnt = _b.colCnt;
        var html = '';
        var row;
        var col;
        for (row = 0; row < rowCnt; row++) {
            html += this.renderDayRowHtml(row, isRigid);
        }
        this.el.innerHTML = html;
        this.rowEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.el, '.fc-row');
        this.cellEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.el, '.fc-day, .fc-disabled-day');
        if (this.isRtl) {
            this.cellEls.reverse();
        }
        this.rowPositions = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["PositionCache"](this.el, this.rowEls, false, true // vertical
        );
        this.colPositions = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["PositionCache"](this.el, this.cellEls.slice(0, colCnt), // only the first row
        true, false // horizontal
        );
        // trigger dayRender with each cell's element
        for (row = 0; row < rowCnt; row++) {
            for (col = 0; col < colCnt; col++) {
                this.publiclyTrigger('dayRender', [
                    {
                        date: dateEnv.toDate(cells[row][col].date),
                        el: this.getCellEl(row, col),
                        view: view
                    }
                ]);
            }
        }
        this.isCellSizesDirty = true;
    };
    DayGrid.prototype._unrenderCells = function () {
        this.removeSegPopover();
    };
    // Generates the HTML for a single row, which is a div that wraps a table.
    // `row` is the row number.
    DayGrid.prototype.renderDayRowHtml = function (row, isRigid) {
        var theme = this.theme;
        var classes = ['fc-row', 'fc-week', theme.getClass('dayRow')];
        if (isRigid) {
            classes.push('fc-rigid');
        }
        var bgRow = new DayBgRow(this.context);
        return '' +
            '<div class="' + classes.join(' ') + '">' +
            '<div class="fc-bg">' +
            '<table class="' + theme.getClass('tableGrid') + '">' +
            bgRow.renderHtml({
                cells: this.props.cells[row],
                dateProfile: this.props.dateProfile,
                renderIntroHtml: this.renderProps.renderBgIntroHtml
            }) +
            '</table>' +
            '</div>' +
            '<div class="fc-content-skeleton">' +
            '<table>' +
            (this.getIsNumbersVisible() ?
                '<thead>' +
                    this.renderNumberTrHtml(row) +
                    '</thead>' :
                '') +
            '</table>' +
            '</div>' +
            '</div>';
    };
    DayGrid.prototype.getIsNumbersVisible = function () {
        return this.getIsDayNumbersVisible() ||
            this.renderProps.cellWeekNumbersVisible ||
            this.renderProps.colWeekNumbersVisible;
    };
    DayGrid.prototype.getIsDayNumbersVisible = function () {
        return this.rowCnt > 1;
    };
    /* Grid Number Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype.renderNumberTrHtml = function (row) {
        var intro = this.renderProps.renderNumberIntroHtml(row, this);
        return '' +
            '<tr>' +
            (this.isRtl ? '' : intro) +
            this.renderNumberCellsHtml(row) +
            (this.isRtl ? intro : '') +
            '</tr>';
    };
    DayGrid.prototype.renderNumberCellsHtml = function (row) {
        var htmls = [];
        var col;
        var date;
        for (col = 0; col < this.colCnt; col++) {
            date = this.props.cells[row][col].date;
            htmls.push(this.renderNumberCellHtml(date));
        }
        if (this.isRtl) {
            htmls.reverse();
        }
        return htmls.join('');
    };
    // Generates the HTML for the <td>s of the "number" row in the DayGrid's content skeleton.
    // The number row will only exist if either day numbers or week numbers are turned on.
    DayGrid.prototype.renderNumberCellHtml = function (date) {
        var _a = this, view = _a.view, dateEnv = _a.dateEnv;
        var html = '';
        var isDateValid = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["rangeContainsMarker"])(this.props.dateProfile.activeRange, date); // TODO: called too frequently. cache somehow.
        var isDayNumberVisible = this.getIsDayNumbersVisible() && isDateValid;
        var classes;
        var weekCalcFirstDow;
        if (!isDayNumberVisible && !this.renderProps.cellWeekNumbersVisible) {
            // no numbers in day cell (week number must be along the side)
            return '<td></td>'; //  will create an empty space above events :(
        }
        classes = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getDayClasses"])(date, this.props.dateProfile, this.context);
        classes.unshift('fc-day-top');
        if (this.renderProps.cellWeekNumbersVisible) {
            weekCalcFirstDow = dateEnv.weekDow;
        }
        html += '<td class="' + classes.join(' ') + '"' +
            (isDateValid ?
                ' data-date="' + dateEnv.formatIso(date, { omitTime: true }) + '"' :
                '') +
            '>';
        if (this.renderProps.cellWeekNumbersVisible && (date.getUTCDay() === weekCalcFirstDow)) {
            html += Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["buildGotoAnchorHtml"])(view, { date: date, type: 'week' }, { 'class': 'fc-week-number' }, dateEnv.format(date, WEEK_NUM_FORMAT) // inner HTML
            );
        }
        if (isDayNumberVisible) {
            html += Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["buildGotoAnchorHtml"])(view, date, { 'class': 'fc-day-number' }, dateEnv.format(date, DAY_NUM_FORMAT) // inner HTML
            );
        }
        html += '</td>';
        return html;
    };
    /* Sizing
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype.updateSize = function (isResize) {
        var _a = this, fillRenderer = _a.fillRenderer, eventRenderer = _a.eventRenderer, mirrorRenderer = _a.mirrorRenderer;
        if (isResize ||
            this.isCellSizesDirty ||
            this.view.calendar.isEventsUpdated // hack
        ) {
            this.buildPositionCaches();
            this.isCellSizesDirty = false;
        }
        fillRenderer.computeSizes(isResize);
        eventRenderer.computeSizes(isResize);
        mirrorRenderer.computeSizes(isResize);
        fillRenderer.assignSizes(isResize);
        eventRenderer.assignSizes(isResize);
        mirrorRenderer.assignSizes(isResize);
    };
    DayGrid.prototype.buildPositionCaches = function () {
        this.buildColPositions();
        this.buildRowPositions();
    };
    DayGrid.prototype.buildColPositions = function () {
        this.colPositions.build();
    };
    DayGrid.prototype.buildRowPositions = function () {
        this.rowPositions.build();
        this.rowPositions.bottoms[this.rowCnt - 1] += this.bottomCoordPadding; // hack
    };
    /* Hit System
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype.positionToHit = function (leftPosition, topPosition) {
        var _a = this, colPositions = _a.colPositions, rowPositions = _a.rowPositions;
        var col = colPositions.leftToIndex(leftPosition);
        var row = rowPositions.topToIndex(topPosition);
        if (row != null && col != null) {
            return {
                row: row,
                col: col,
                dateSpan: {
                    range: this.getCellRange(row, col),
                    allDay: true
                },
                dayEl: this.getCellEl(row, col),
                relativeRect: {
                    left: colPositions.lefts[col],
                    right: colPositions.rights[col],
                    top: rowPositions.tops[row],
                    bottom: rowPositions.bottoms[row]
                }
            };
        }
    };
    /* Cell System
    ------------------------------------------------------------------------------------------------------------------*/
    // FYI: the first column is the leftmost column, regardless of date
    DayGrid.prototype.getCellEl = function (row, col) {
        return this.cellEls[row * this.colCnt + col];
    };
    /* Event Drag Visualization
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype._renderEventDrag = function (state) {
        if (state) {
            this.eventRenderer.hideByHash(state.affectedInstances);
            this.fillRenderer.renderSegs('highlight', state.segs);
        }
    };
    DayGrid.prototype._unrenderEventDrag = function (state) {
        if (state) {
            this.eventRenderer.showByHash(state.affectedInstances);
            this.fillRenderer.unrender('highlight');
        }
    };
    /* Event Resize Visualization
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype._renderEventResize = function (state) {
        if (state) {
            this.eventRenderer.hideByHash(state.affectedInstances);
            this.fillRenderer.renderSegs('highlight', state.segs);
            this.mirrorRenderer.renderSegs(state.segs, { isResizing: true, sourceSeg: state.sourceSeg });
        }
    };
    DayGrid.prototype._unrenderEventResize = function (state) {
        if (state) {
            this.eventRenderer.showByHash(state.affectedInstances);
            this.fillRenderer.unrender('highlight');
            this.mirrorRenderer.unrender(state.segs, { isResizing: true, sourceSeg: state.sourceSeg });
        }
    };
    /* More+ Link Popover
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype.removeSegPopover = function () {
        if (this.segPopover) {
            this.segPopover.hide(); // in handler, will call segPopover's removeElement
        }
    };
    // Limits the number of "levels" (vertically stacking layers of events) for each row of the grid.
    // `levelLimit` can be false (don't limit), a number, or true (should be computed).
    DayGrid.prototype.limitRows = function (levelLimit) {
        var rowStructs = this.eventRenderer.rowStructs || [];
        var row; // row #
        var rowLevelLimit;
        for (row = 0; row < rowStructs.length; row++) {
            this.unlimitRow(row);
            if (!levelLimit) {
                rowLevelLimit = false;
            }
            else if (typeof levelLimit === 'number') {
                rowLevelLimit = levelLimit;
            }
            else {
                rowLevelLimit = this.computeRowLevelLimit(row);
            }
            if (rowLevelLimit !== false) {
                this.limitRow(row, rowLevelLimit);
            }
        }
    };
    // Computes the number of levels a row will accomodate without going outside its bounds.
    // Assumes the row is "rigid" (maintains a constant height regardless of what is inside).
    // `row` is the row number.
    DayGrid.prototype.computeRowLevelLimit = function (row) {
        var rowEl = this.rowEls[row]; // the containing "fake" row div
        var rowBottom = rowEl.getBoundingClientRect().bottom; // relative to viewport!
        var trEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findChildren"])(this.eventRenderer.rowStructs[row].tbodyEl);
        var i;
        var trEl;
        // Reveal one level <tr> at a time and stop when we find one out of bounds
        for (i = 0; i < trEls.length; i++) {
            trEl = trEls[i];
            trEl.classList.remove('fc-limited'); // reset to original state (reveal)
            if (trEl.getBoundingClientRect().bottom > rowBottom) {
                return i;
            }
        }
        return false; // should not limit at all
    };
    // Limits the given grid row to the maximum number of levels and injects "more" links if necessary.
    // `row` is the row number.
    // `levelLimit` is a number for the maximum (inclusive) number of levels allowed.
    DayGrid.prototype.limitRow = function (row, levelLimit) {
        var _this = this;
        var _a = this, colCnt = _a.colCnt, isRtl = _a.isRtl;
        var rowStruct = this.eventRenderer.rowStructs[row];
        var moreNodes = []; // array of "more" <a> links and <td> DOM nodes
        var col = 0; // col #, left-to-right (not chronologically)
        var levelSegs; // array of segment objects in the last allowable level, ordered left-to-right
        var cellMatrix; // a matrix (by level, then column) of all <td> elements in the row
        var limitedNodes; // array of temporarily hidden level <tr> and segment <td> DOM nodes
        var i;
        var seg;
        var segsBelow; // array of segment objects below `seg` in the current `col`
        var totalSegsBelow; // total number of segments below `seg` in any of the columns `seg` occupies
        var colSegsBelow; // array of segment arrays, below seg, one for each column (offset from segs's first column)
        var td;
        var rowSpan;
        var segMoreNodes; // array of "more" <td> cells that will stand-in for the current seg's cell
        var j;
        var moreTd;
        var moreWrap;
        var moreLink;
        // Iterates through empty level cells and places "more" links inside if need be
        var emptyCellsUntil = function (endCol) {
            while (col < endCol) {
                segsBelow = _this.getCellSegs(row, col, levelLimit);
                if (segsBelow.length) {
                    td = cellMatrix[levelLimit - 1][col];
                    moreLink = _this.renderMoreLink(row, col, segsBelow);
                    moreWrap = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', null, moreLink);
                    td.appendChild(moreWrap);
                    moreNodes.push(moreWrap);
                }
                col++;
            }
        };
        if (levelLimit && levelLimit < rowStruct.segLevels.length) { // is it actually over the limit?
            levelSegs = rowStruct.segLevels[levelLimit - 1];
            cellMatrix = rowStruct.cellMatrix;
            limitedNodes = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findChildren"])(rowStruct.tbodyEl).slice(levelLimit); // get level <tr> elements past the limit
            limitedNodes.forEach(function (node) {
                node.classList.add('fc-limited'); // hide elements and get a simple DOM-nodes array
            });
            // iterate though segments in the last allowable level
            for (i = 0; i < levelSegs.length; i++) {
                seg = levelSegs[i];
                var leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol;
                var rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol;
                emptyCellsUntil(leftCol); // process empty cells before the segment
                // determine *all* segments below `seg` that occupy the same columns
                colSegsBelow = [];
                totalSegsBelow = 0;
                while (col <= rightCol) {
                    segsBelow = this.getCellSegs(row, col, levelLimit);
                    colSegsBelow.push(segsBelow);
                    totalSegsBelow += segsBelow.length;
                    col++;
                }
                if (totalSegsBelow) { // do we need to replace this segment with one or many "more" links?
                    td = cellMatrix[levelLimit - 1][leftCol]; // the segment's parent cell
                    rowSpan = td.rowSpan || 1;
                    segMoreNodes = [];
                    // make a replacement <td> for each column the segment occupies. will be one for each colspan
                    for (j = 0; j < colSegsBelow.length; j++) {
                        moreTd = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('td', { className: 'fc-more-cell', rowSpan: rowSpan });
                        segsBelow = colSegsBelow[j];
                        moreLink = this.renderMoreLink(row, leftCol + j, [seg].concat(segsBelow) // count seg as hidden too
                        );
                        moreWrap = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', null, moreLink);
                        moreTd.appendChild(moreWrap);
                        segMoreNodes.push(moreTd);
                        moreNodes.push(moreTd);
                    }
                    td.classList.add('fc-limited');
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["insertAfterElement"])(td, segMoreNodes);
                    limitedNodes.push(td);
                }
            }
            emptyCellsUntil(this.colCnt); // finish off the level
            rowStruct.moreEls = moreNodes; // for easy undoing later
            rowStruct.limitedEls = limitedNodes; // for easy undoing later
        }
    };
    // Reveals all levels and removes all "more"-related elements for a grid's row.
    // `row` is a row number.
    DayGrid.prototype.unlimitRow = function (row) {
        var rowStruct = this.eventRenderer.rowStructs[row];
        if (rowStruct.moreEls) {
            rowStruct.moreEls.forEach(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"]);
            rowStruct.moreEls = null;
        }
        if (rowStruct.limitedEls) {
            rowStruct.limitedEls.forEach(function (limitedEl) {
                limitedEl.classList.remove('fc-limited');
            });
            rowStruct.limitedEls = null;
        }
    };
    // Renders an <a> element that represents hidden event element for a cell.
    // Responsible for attaching click handler as well.
    DayGrid.prototype.renderMoreLink = function (row, col, hiddenSegs) {
        var _this = this;
        var _a = this, view = _a.view, dateEnv = _a.dateEnv;
        var a = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('a', { className: 'fc-more' });
        a.innerText = this.getMoreLinkText(hiddenSegs.length);
        a.addEventListener('click', function (ev) {
            var clickOption = _this.opt('eventLimitClick');
            var _col = _this.isRtl ? _this.colCnt - col - 1 : col; // HACK: props.cells has different dir system?
            var date = _this.props.cells[row][_col].date;
            var moreEl = ev.currentTarget;
            var dayEl = _this.getCellEl(row, col);
            var allSegs = _this.getCellSegs(row, col);
            // rescope the segments to be within the cell's date
            var reslicedAllSegs = _this.resliceDaySegs(allSegs, date);
            var reslicedHiddenSegs = _this.resliceDaySegs(hiddenSegs, date);
            if (typeof clickOption === 'function') {
                // the returned value can be an atomic option
                clickOption = _this.publiclyTrigger('eventLimitClick', [
                    {
                        date: dateEnv.toDate(date),
                        allDay: true,
                        dayEl: dayEl,
                        moreEl: moreEl,
                        segs: reslicedAllSegs,
                        hiddenSegs: reslicedHiddenSegs,
                        jsEvent: ev,
                        view: view
                    }
                ]);
            }
            if (clickOption === 'popover') {
                _this.showSegPopover(row, col, moreEl, reslicedAllSegs);
            }
            else if (typeof clickOption === 'string') { // a view name
                view.calendar.zoomTo(date, clickOption);
            }
        });
        return a;
    };
    // Reveals the popover that displays all events within a cell
    DayGrid.prototype.showSegPopover = function (row, col, moreLink, segs) {
        var _this = this;
        var _a = this, calendar = _a.calendar, view = _a.view, theme = _a.theme;
        var _col = this.isRtl ? this.colCnt - col - 1 : col; // HACK: props.cells has different dir system?
        var moreWrap = moreLink.parentNode; // the <div> wrapper around the <a>
        var topEl; // the element we want to match the top coordinate of
        var options;
        if (this.rowCnt === 1) {
            topEl = view.el; // will cause the popover to cover any sort of header
        }
        else {
            topEl = this.rowEls[row]; // will align with top of row
        }
        options = {
            className: 'fc-more-popover ' + theme.getClass('popover'),
            parentEl: view.el,
            top: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeRect"])(topEl).top,
            autoHide: true,
            content: function (el) {
                _this.segPopoverTile = new DayTile(_this.context, el);
                _this.updateSegPopoverTile(_this.props.cells[row][_col].date, segs);
            },
            hide: function () {
                _this.segPopoverTile.destroy();
                _this.segPopoverTile = null;
                _this.segPopover.destroy();
                _this.segPopover = null;
            }
        };
        // Determine horizontal coordinate.
        // We use the moreWrap instead of the <td> to avoid border confusion.
        if (this.isRtl) {
            options.right = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeRect"])(moreWrap).right + 1; // +1 to be over cell border
        }
        else {
            options.left = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeRect"])(moreWrap).left - 1; // -1 to be over cell border
        }
        this.segPopover = new Popover(options);
        this.segPopover.show();
        calendar.releaseAfterSizingTriggers(); // hack for eventPositioned
    };
    // Given the events within an array of segment objects, reslice them to be in a single day
    DayGrid.prototype.resliceDaySegs = function (segs, dayDate) {
        var dayStart = dayDate;
        var dayEnd = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDays"])(dayStart, 1);
        var dayRange = { start: dayStart, end: dayEnd };
        var newSegs = [];
        for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
            var seg = segs_1[_i];
            var eventRange = seg.eventRange;
            var origRange = eventRange.range;
            var slicedRange = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["intersectRanges"])(origRange, dayRange);
            if (slicedRange) {
                newSegs.push(__assign({}, seg, { eventRange: {
                        def: eventRange.def,
                        ui: __assign({}, eventRange.ui, { durationEditable: false }),
                        instance: eventRange.instance,
                        range: slicedRange
                    }, isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(), isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf() }));
            }
        }
        return newSegs;
    };
    // Generates the text that should be inside a "more" link, given the number of events it represents
    DayGrid.prototype.getMoreLinkText = function (num) {
        var opt = this.opt('eventLimitText');
        if (typeof opt === 'function') {
            return opt(num);
        }
        else {
            return '+' + num + ' ' + opt;
        }
    };
    // Returns segments within a given cell.
    // If `startLevel` is specified, returns only events including and below that level. Otherwise returns all segs.
    DayGrid.prototype.getCellSegs = function (row, col, startLevel) {
        var segMatrix = this.eventRenderer.rowStructs[row].segMatrix;
        var level = startLevel || 0;
        var segs = [];
        var seg;
        while (level < segMatrix.length) {
            seg = segMatrix[level][col];
            if (seg) {
                segs.push(seg);
            }
            level++;
        }
        return segs;
    };
    return DayGrid;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DateComponent"]));

var WEEK_NUM_FORMAT$1 = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])({ week: 'numeric' });
/* An abstract class for the daygrid views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a DayGrid subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.
var DayGridView = /** @class */ (function (_super) {
    __extends(DayGridView, _super);
    function DayGridView(context, viewSpec, dateProfileGenerator, parentEl) {
        var _this = _super.call(this, context, viewSpec, dateProfileGenerator, parentEl) || this;
        /* Header Rendering
        ------------------------------------------------------------------------------------------------------------------*/
        // Generates the HTML that will go before the day-of week header cells
        _this.renderHeadIntroHtml = function () {
            var theme = _this.theme;
            if (_this.colWeekNumbersVisible) {
                return '' +
                    '<th class="fc-week-number ' + theme.getClass('widgetHeader') + '" ' + _this.weekNumberStyleAttr() + '>' +
                    '<span>' + // needed for matchCellWidths
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(_this.opt('weekLabel')) +
                    '</span>' +
                    '</th>';
            }
            return '';
        };
        /* Day Grid Rendering
        ------------------------------------------------------------------------------------------------------------------*/
        // Generates the HTML that will go before content-skeleton cells that display the day/week numbers
        _this.renderDayGridNumberIntroHtml = function (row, dayGrid) {
            var dateEnv = _this.dateEnv;
            var weekStart = dayGrid.props.cells[row][0].date;
            if (_this.colWeekNumbersVisible) {
                return '' +
                    '<td class="fc-week-number" ' + _this.weekNumberStyleAttr() + '>' +
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["buildGotoAnchorHtml"])(// aside from link, important for matchCellWidths
                    _this, { date: weekStart, type: 'week', forceOff: dayGrid.colCnt === 1 }, dateEnv.format(weekStart, WEEK_NUM_FORMAT$1) // inner HTML
                    ) +
                    '</td>';
            }
            return '';
        };
        // Generates the HTML that goes before the day bg cells for each day-row
        _this.renderDayGridBgIntroHtml = function () {
            var theme = _this.theme;
            if (_this.colWeekNumbersVisible) {
                return '<td class="fc-week-number ' + theme.getClass('widgetContent') + '" ' + _this.weekNumberStyleAttr() + '></td>';
            }
            return '';
        };
        // Generates the HTML that goes before every other type of row generated by DayGrid.
        // Affects mirror-skeleton and highlight-skeleton rows.
        _this.renderDayGridIntroHtml = function () {
            if (_this.colWeekNumbersVisible) {
                return '<td class="fc-week-number" ' + _this.weekNumberStyleAttr() + '></td>';
            }
            return '';
        };
        _this.el.classList.add('fc-dayGrid-view');
        _this.el.innerHTML = _this.renderSkeletonHtml();
        _this.scroller = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["ScrollComponent"]('hidden', // overflow x
        'auto' // overflow y
        );
        var dayGridContainerEl = _this.scroller.el;
        _this.el.querySelector('.fc-body > tr > td').appendChild(dayGridContainerEl);
        dayGridContainerEl.classList.add('fc-day-grid-container');
        var dayGridEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', { className: 'fc-day-grid' });
        dayGridContainerEl.appendChild(dayGridEl);
        var cellWeekNumbersVisible;
        if (_this.opt('weekNumbers')) {
            if (_this.opt('weekNumbersWithinDays')) {
                cellWeekNumbersVisible = true;
                _this.colWeekNumbersVisible = false;
            }
            else {
                cellWeekNumbersVisible = false;
                _this.colWeekNumbersVisible = true;
            }
        }
        else {
            _this.colWeekNumbersVisible = false;
            cellWeekNumbersVisible = false;
        }
        _this.dayGrid = new DayGrid(_this.context, dayGridEl, {
            renderNumberIntroHtml: _this.renderDayGridNumberIntroHtml,
            renderBgIntroHtml: _this.renderDayGridBgIntroHtml,
            renderIntroHtml: _this.renderDayGridIntroHtml,
            colWeekNumbersVisible: _this.colWeekNumbersVisible,
            cellWeekNumbersVisible: cellWeekNumbersVisible
        });
        return _this;
    }
    DayGridView.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.dayGrid.destroy();
        this.scroller.destroy();
    };
    // Builds the HTML skeleton for the view.
    // The day-grid component will render inside of a container defined by this HTML.
    DayGridView.prototype.renderSkeletonHtml = function () {
        var theme = this.theme;
        return '' +
            '<table class="' + theme.getClass('tableGrid') + '">' +
            (this.opt('columnHeader') ?
                '<thead class="fc-head">' +
                    '<tr>' +
                    '<td class="fc-head-container ' + theme.getClass('widgetHeader') + '">&nbsp;</td>' +
                    '</tr>' +
                    '</thead>' :
                '') +
            '<tbody class="fc-body">' +
            '<tr>' +
            '<td class="' + theme.getClass('widgetContent') + '"></td>' +
            '</tr>' +
            '</tbody>' +
            '</table>';
    };
    // Generates an HTML attribute string for setting the width of the week number column, if it is known
    DayGridView.prototype.weekNumberStyleAttr = function () {
        if (this.weekNumberWidth != null) {
            return 'style="width:' + this.weekNumberWidth + 'px"';
        }
        return '';
    };
    // Determines whether each row should have a constant height
    DayGridView.prototype.hasRigidRows = function () {
        var eventLimit = this.opt('eventLimit');
        return eventLimit && typeof eventLimit !== 'number';
    };
    /* Dimensions
    ------------------------------------------------------------------------------------------------------------------*/
    DayGridView.prototype.updateSize = function (isResize, viewHeight, isAuto) {
        _super.prototype.updateSize.call(this, isResize, viewHeight, isAuto); // will call updateBaseSize. important that executes first
        this.dayGrid.updateSize(isResize);
    };
    // Refreshes the horizontal dimensions of the view
    DayGridView.prototype.updateBaseSize = function (isResize, viewHeight, isAuto) {
        var dayGrid = this.dayGrid;
        var eventLimit = this.opt('eventLimit');
        var headRowEl = this.header ? this.header.el : null; // HACK
        var scrollerHeight;
        var scrollbarWidths;
        // hack to give the view some height prior to dayGrid's columns being rendered
        // TODO: separate setting height from scroller VS dayGrid.
        if (!dayGrid.rowEls) {
            if (!isAuto) {
                scrollerHeight = this.computeScrollerHeight(viewHeight);
                this.scroller.setHeight(scrollerHeight);
            }
            return;
        }
        if (this.colWeekNumbersVisible) {
            // Make sure all week number cells running down the side have the same width.
            this.weekNumberWidth = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["matchCellWidths"])(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.el, '.fc-week-number'));
        }
        // reset all heights to be natural
        this.scroller.clear();
        if (headRowEl) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["uncompensateScroll"])(headRowEl);
        }
        dayGrid.removeSegPopover(); // kill the "more" popover if displayed
        // is the event limit a constant level number?
        if (eventLimit && typeof eventLimit === 'number') {
            dayGrid.limitRows(eventLimit); // limit the levels first so the height can redistribute after
        }
        // distribute the height to the rows
        // (viewHeight is a "recommended" value if isAuto)
        scrollerHeight = this.computeScrollerHeight(viewHeight);
        this.setGridHeight(scrollerHeight, isAuto);
        // is the event limit dynamically calculated?
        if (eventLimit && typeof eventLimit !== 'number') {
            dayGrid.limitRows(eventLimit); // limit the levels after the grid's row heights have been set
        }
        if (!isAuto) { // should we force dimensions of the scroll container?
            this.scroller.setHeight(scrollerHeight);
            scrollbarWidths = this.scroller.getScrollbarWidths();
            if (scrollbarWidths.left || scrollbarWidths.right) { // using scrollbars?
                if (headRowEl) {
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["compensateScroll"])(headRowEl, scrollbarWidths);
                }
                // doing the scrollbar compensation might have created text overflow which created more height. redo
                scrollerHeight = this.computeScrollerHeight(viewHeight);
                this.scroller.setHeight(scrollerHeight);
            }
            // guarantees the same scrollbar widths
            this.scroller.lockOverflow(scrollbarWidths);
        }
    };
    // given a desired total height of the view, returns what the height of the scroller should be
    DayGridView.prototype.computeScrollerHeight = function (viewHeight) {
        return viewHeight -
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["subtractInnerElHeight"])(this.el, this.scroller.el); // everything that's NOT the scroller
    };
    // Sets the height of just the DayGrid component in this view
    DayGridView.prototype.setGridHeight = function (height, isAuto) {
        if (this.opt('monthMode')) {
            // if auto, make the height of each row the height that it would be if there were 6 weeks
            if (isAuto) {
                height *= this.dayGrid.rowCnt / 6;
            }
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["distributeHeight"])(this.dayGrid.rowEls, height, !isAuto); // if auto, don't compensate for height-hogging rows
        }
        else {
            if (isAuto) {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["undistributeHeight"])(this.dayGrid.rowEls); // let the rows be their natural height with no expanding
            }
            else {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["distributeHeight"])(this.dayGrid.rowEls, height, true); // true = compensate for height-hogging rows
            }
        }
    };
    /* Scroll
    ------------------------------------------------------------------------------------------------------------------*/
    DayGridView.prototype.computeDateScroll = function (duration) {
        return { top: 0 };
    };
    DayGridView.prototype.queryDateScroll = function () {
        return { top: this.scroller.getScrollTop() };
    };
    DayGridView.prototype.applyDateScroll = function (scroll) {
        if (scroll.top !== undefined) {
            this.scroller.setScrollTop(scroll.top);
        }
    };
    return DayGridView;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["View"]));
DayGridView.prototype.dateProfileGeneratorClass = DayGridDateProfileGenerator;

var SimpleDayGrid = /** @class */ (function (_super) {
    __extends(SimpleDayGrid, _super);
    function SimpleDayGrid(context, dayGrid) {
        var _this = _super.call(this, context, dayGrid.el) || this;
        _this.slicer = new DayGridSlicer();
        _this.dayGrid = dayGrid;
        context.calendar.registerInteractiveComponent(_this, { el: _this.dayGrid.el });
        return _this;
    }
    SimpleDayGrid.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.calendar.unregisterInteractiveComponent(this);
    };
    SimpleDayGrid.prototype.render = function (props) {
        var dayGrid = this.dayGrid;
        var dateProfile = props.dateProfile, dayTable = props.dayTable;
        dayGrid.receiveProps(__assign({}, this.slicer.sliceProps(props, dateProfile, props.nextDayThreshold, dayGrid, dayTable), { dateProfile: dateProfile, cells: dayTable.cells, isRigid: props.isRigid }));
    };
    SimpleDayGrid.prototype.buildPositionCaches = function () {
        this.dayGrid.buildPositionCaches();
    };
    SimpleDayGrid.prototype.queryHit = function (positionLeft, positionTop) {
        var rawHit = this.dayGrid.positionToHit(positionLeft, positionTop);
        if (rawHit) {
            return {
                component: this.dayGrid,
                dateSpan: rawHit.dateSpan,
                dayEl: rawHit.dayEl,
                rect: {
                    left: rawHit.relativeRect.left,
                    right: rawHit.relativeRect.right,
                    top: rawHit.relativeRect.top,
                    bottom: rawHit.relativeRect.bottom
                },
                layer: 0
            };
        }
    };
    return SimpleDayGrid;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DateComponent"]));
var DayGridSlicer = /** @class */ (function (_super) {
    __extends(DayGridSlicer, _super);
    function DayGridSlicer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayGridSlicer.prototype.sliceRange = function (dateRange, dayTable) {
        return dayTable.sliceRange(dateRange);
    };
    return DayGridSlicer;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Slicer"]));

var DayGridView$1 = /** @class */ (function (_super) {
    __extends(DayGridView, _super);
    function DayGridView(_context, viewSpec, dateProfileGenerator, parentEl) {
        var _this = _super.call(this, _context, viewSpec, dateProfileGenerator, parentEl) || this;
        _this.buildDayTable = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(buildDayTable);
        if (_this.opt('columnHeader')) {
            _this.header = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DayHeader"](_this.context, _this.el.querySelector('.fc-head-container'));
        }
        _this.simpleDayGrid = new SimpleDayGrid(_this.context, _this.dayGrid);
        return _this;
    }
    DayGridView.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        if (this.header) {
            this.header.destroy();
        }
        this.simpleDayGrid.destroy();
    };
    DayGridView.prototype.render = function (props) {
        _super.prototype.render.call(this, props);
        var dateProfile = this.props.dateProfile;
        var dayTable = this.dayTable =
            this.buildDayTable(dateProfile, this.dateProfileGenerator);
        if (this.header) {
            this.header.receiveProps({
                dateProfile: dateProfile,
                dates: dayTable.headerDates,
                datesRepDistinctDays: dayTable.rowCnt === 1,
                renderIntroHtml: this.renderHeadIntroHtml
            });
        }
        this.simpleDayGrid.receiveProps({
            dateProfile: dateProfile,
            dayTable: dayTable,
            businessHours: props.businessHours,
            dateSelection: props.dateSelection,
            eventStore: props.eventStore,
            eventUiBases: props.eventUiBases,
            eventSelection: props.eventSelection,
            eventDrag: props.eventDrag,
            eventResize: props.eventResize,
            isRigid: this.hasRigidRows(),
            nextDayThreshold: this.nextDayThreshold
        });
    };
    return DayGridView;
}(DayGridView));
function buildDayTable(dateProfile, dateProfileGenerator) {
    var daySeries = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DaySeries"](dateProfile.renderRange, dateProfileGenerator);
    return new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DayTable"](daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
}

var main = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
    defaultView: 'dayGridMonth',
    views: {
        dayGrid: DayGridView$1,
        dayGridDay: {
            type: 'dayGrid',
            duration: { days: 1 }
        },
        dayGridWeek: {
            type: 'dayGrid',
            duration: { weeks: 1 }
        },
        dayGridMonth: {
            type: 'dayGrid',
            duration: { months: 1 },
            monthMode: true,
            fixedWeekCount: true
        }
    }
});

/* harmony default export */ __webpack_exports__["default"] = (main);



/***/ }),

/***/ "./node_modules/@fullcalendar/interaction/main.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/@fullcalendar/interaction/main.esm.js ***!
  \************************************************************/
/*! exports provided: default, Draggable, FeaturefulElementDragging, PointerDragging, ThirdPartyDraggable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return ExternalDraggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturefulElementDragging", function() { return FeaturefulElementDragging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerDragging", function() { return PointerDragging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPartyDraggable", function() { return ThirdPartyDraggable; });
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/main.esm.js");
/*!
FullCalendar Interaction Plugin v4.3.0
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["config"].touchMouseIgnoreWait = 500;
var ignoreMouseDepth = 0;
var listenerCnt = 0;
var isWindowTouchMoveCancelled = false;
/*
Uses a "pointer" abstraction, which monitors UI events for both mouse and touch.
Tracks when the pointer "drags" on a certain element, meaning down+move+up.

Also, tracks if there was touch-scrolling.
Also, can prevent touch-scrolling from happening.
Also, can fire pointermove events when scrolling happens underneath, even when no real pointer movement.

emits:
- pointerdown
- pointermove
- pointerup
*/
var PointerDragging = /** @class */ (function () {
    function PointerDragging(containerEl) {
        var _this = this;
        this.subjectEl = null;
        this.downEl = null;
        // options that can be directly assigned by caller
        this.selector = ''; // will cause subjectEl in all emitted events to be this element
        this.handleSelector = '';
        this.shouldIgnoreMove = false;
        this.shouldWatchScroll = true; // for simulating pointermove on scroll
        // internal states
        this.isDragging = false;
        this.isTouchDragging = false;
        this.wasTouchScroll = false;
        // Mouse
        // ----------------------------------------------------------------------------------------------------
        this.handleMouseDown = function (ev) {
            if (!_this.shouldIgnoreMouse() &&
                isPrimaryMouseButton(ev) &&
                _this.tryStart(ev)) {
                var pev = _this.createEventFromMouse(ev, true);
                _this.emitter.trigger('pointerdown', pev);
                _this.initScrollWatch(pev);
                if (!_this.shouldIgnoreMove) {
                    document.addEventListener('mousemove', _this.handleMouseMove);
                }
                document.addEventListener('mouseup', _this.handleMouseUp);
            }
        };
        this.handleMouseMove = function (ev) {
            var pev = _this.createEventFromMouse(ev);
            _this.recordCoords(pev);
            _this.emitter.trigger('pointermove', pev);
        };
        this.handleMouseUp = function (ev) {
            document.removeEventListener('mousemove', _this.handleMouseMove);
            document.removeEventListener('mouseup', _this.handleMouseUp);
            _this.emitter.trigger('pointerup', _this.createEventFromMouse(ev));
            _this.cleanup(); // call last so that pointerup has access to props
        };
        // Touch
        // ----------------------------------------------------------------------------------------------------
        this.handleTouchStart = function (ev) {
            if (_this.tryStart(ev)) {
                _this.isTouchDragging = true;
                var pev = _this.createEventFromTouch(ev, true);
                _this.emitter.trigger('pointerdown', pev);
                _this.initScrollWatch(pev);
                // unlike mouse, need to attach to target, not document
                // https://stackoverflow.com/a/45760014
                var target = ev.target;
                if (!_this.shouldIgnoreMove) {
                    target.addEventListener('touchmove', _this.handleTouchMove);
                }
                target.addEventListener('touchend', _this.handleTouchEnd);
                target.addEventListener('touchcancel', _this.handleTouchEnd); // treat it as a touch end
                // attach a handler to get called when ANY scroll action happens on the page.
                // this was impossible to do with normal on/off because 'scroll' doesn't bubble.
                // http://stackoverflow.com/a/32954565/96342
                window.addEventListener('scroll', _this.handleTouchScroll, true // useCapture
                );
            }
        };
        this.handleTouchMove = function (ev) {
            var pev = _this.createEventFromTouch(ev);
            _this.recordCoords(pev);
            _this.emitter.trigger('pointermove', pev);
        };
        this.handleTouchEnd = function (ev) {
            if (_this.isDragging) { // done to guard against touchend followed by touchcancel
                var target = ev.target;
                target.removeEventListener('touchmove', _this.handleTouchMove);
                target.removeEventListener('touchend', _this.handleTouchEnd);
                target.removeEventListener('touchcancel', _this.handleTouchEnd);
                window.removeEventListener('scroll', _this.handleTouchScroll, true); // useCaptured=true
                _this.emitter.trigger('pointerup', _this.createEventFromTouch(ev));
                _this.cleanup(); // call last so that pointerup has access to props
                _this.isTouchDragging = false;
                startIgnoringMouse();
            }
        };
        this.handleTouchScroll = function () {
            _this.wasTouchScroll = true;
        };
        this.handleScroll = function (ev) {
            if (!_this.shouldIgnoreMove) {
                var pageX = (window.pageXOffset - _this.prevScrollX) + _this.prevPageX;
                var pageY = (window.pageYOffset - _this.prevScrollY) + _this.prevPageY;
                _this.emitter.trigger('pointermove', {
                    origEvent: ev,
                    isTouch: _this.isTouchDragging,
                    subjectEl: _this.subjectEl,
                    pageX: pageX,
                    pageY: pageY,
                    deltaX: pageX - _this.origPageX,
                    deltaY: pageY - _this.origPageY
                });
            }
        };
        this.containerEl = containerEl;
        this.emitter = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EmitterMixin"]();
        containerEl.addEventListener('mousedown', this.handleMouseDown);
        containerEl.addEventListener('touchstart', this.handleTouchStart, { passive: true });
        listenerCreated();
    }
    PointerDragging.prototype.destroy = function () {
        this.containerEl.removeEventListener('mousedown', this.handleMouseDown);
        this.containerEl.removeEventListener('touchstart', this.handleTouchStart, { passive: true });
        listenerDestroyed();
    };
    PointerDragging.prototype.tryStart = function (ev) {
        var subjectEl = this.querySubjectEl(ev);
        var downEl = ev.target;
        if (subjectEl &&
            (!this.handleSelector || Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(downEl, this.handleSelector))) {
            this.subjectEl = subjectEl;
            this.downEl = downEl;
            this.isDragging = true; // do this first so cancelTouchScroll will work
            this.wasTouchScroll = false;
            return true;
        }
        return false;
    };
    PointerDragging.prototype.cleanup = function () {
        isWindowTouchMoveCancelled = false;
        this.isDragging = false;
        this.subjectEl = null;
        this.downEl = null;
        // keep wasTouchScroll around for later access
        this.destroyScrollWatch();
    };
    PointerDragging.prototype.querySubjectEl = function (ev) {
        if (this.selector) {
            return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(ev.target, this.selector);
        }
        else {
            return this.containerEl;
        }
    };
    PointerDragging.prototype.shouldIgnoreMouse = function () {
        return ignoreMouseDepth || this.isTouchDragging;
    };
    // can be called by user of this class, to cancel touch-based scrolling for the current drag
    PointerDragging.prototype.cancelTouchScroll = function () {
        if (this.isDragging) {
            isWindowTouchMoveCancelled = true;
        }
    };
    // Scrolling that simulates pointermoves
    // ----------------------------------------------------------------------------------------------------
    PointerDragging.prototype.initScrollWatch = function (ev) {
        if (this.shouldWatchScroll) {
            this.recordCoords(ev);
            window.addEventListener('scroll', this.handleScroll, true); // useCapture=true
        }
    };
    PointerDragging.prototype.recordCoords = function (ev) {
        if (this.shouldWatchScroll) {
            this.prevPageX = ev.pageX;
            this.prevPageY = ev.pageY;
            this.prevScrollX = window.pageXOffset;
            this.prevScrollY = window.pageYOffset;
        }
    };
    PointerDragging.prototype.destroyScrollWatch = function () {
        if (this.shouldWatchScroll) {
            window.removeEventListener('scroll', this.handleScroll, true); // useCaptured=true
        }
    };
    // Event Normalization
    // ----------------------------------------------------------------------------------------------------
    PointerDragging.prototype.createEventFromMouse = function (ev, isFirst) {
        var deltaX = 0;
        var deltaY = 0;
        // TODO: repeat code
        if (isFirst) {
            this.origPageX = ev.pageX;
            this.origPageY = ev.pageY;
        }
        else {
            deltaX = ev.pageX - this.origPageX;
            deltaY = ev.pageY - this.origPageY;
        }
        return {
            origEvent: ev,
            isTouch: false,
            subjectEl: this.subjectEl,
            pageX: ev.pageX,
            pageY: ev.pageY,
            deltaX: deltaX,
            deltaY: deltaY
        };
    };
    PointerDragging.prototype.createEventFromTouch = function (ev, isFirst) {
        var touches = ev.touches;
        var pageX;
        var pageY;
        var deltaX = 0;
        var deltaY = 0;
        // if touch coords available, prefer,
        // because FF would give bad ev.pageX ev.pageY
        if (touches && touches.length) {
            pageX = touches[0].pageX;
            pageY = touches[0].pageY;
        }
        else {
            pageX = ev.pageX;
            pageY = ev.pageY;
        }
        // TODO: repeat code
        if (isFirst) {
            this.origPageX = pageX;
            this.origPageY = pageY;
        }
        else {
            deltaX = pageX - this.origPageX;
            deltaY = pageY - this.origPageY;
        }
        return {
            origEvent: ev,
            isTouch: true,
            subjectEl: this.subjectEl,
            pageX: pageX,
            pageY: pageY,
            deltaX: deltaX,
            deltaY: deltaY
        };
    };
    return PointerDragging;
}());
// Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)
function isPrimaryMouseButton(ev) {
    return ev.button === 0 && !ev.ctrlKey;
}
// Ignoring fake mouse events generated by touch
// ----------------------------------------------------------------------------------------------------
function startIgnoringMouse() {
    ignoreMouseDepth++;
    setTimeout(function () {
        ignoreMouseDepth--;
    }, _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["config"].touchMouseIgnoreWait);
}
// We want to attach touchmove as early as possible for Safari
// ----------------------------------------------------------------------------------------------------
function listenerCreated() {
    if (!(listenerCnt++)) {
        window.addEventListener('touchmove', onWindowTouchMove, { passive: false });
    }
}
function listenerDestroyed() {
    if (!(--listenerCnt)) {
        window.removeEventListener('touchmove', onWindowTouchMove, { passive: false });
    }
}
function onWindowTouchMove(ev) {
    if (isWindowTouchMoveCancelled) {
        ev.preventDefault();
    }
}

/*
An effect in which an element follows the movement of a pointer across the screen.
The moving element is a clone of some other element.
Must call start + handleMove + stop.
*/
var ElementMirror = /** @class */ (function () {
    function ElementMirror() {
        this.isVisible = false; // must be explicitly enabled
        this.sourceEl = null;
        this.mirrorEl = null;
        this.sourceElRect = null; // screen coords relative to viewport
        // options that can be set directly by caller
        this.parentNode = document.body;
        this.zIndex = 9999;
        this.revertDuration = 0;
    }
    ElementMirror.prototype.start = function (sourceEl, pageX, pageY) {
        this.sourceEl = sourceEl;
        this.sourceElRect = this.sourceEl.getBoundingClientRect();
        this.origScreenX = pageX - window.pageXOffset;
        this.origScreenY = pageY - window.pageYOffset;
        this.deltaX = 0;
        this.deltaY = 0;
        this.updateElPosition();
    };
    ElementMirror.prototype.handleMove = function (pageX, pageY) {
        this.deltaX = (pageX - window.pageXOffset) - this.origScreenX;
        this.deltaY = (pageY - window.pageYOffset) - this.origScreenY;
        this.updateElPosition();
    };
    // can be called before start
    ElementMirror.prototype.setIsVisible = function (bool) {
        if (bool) {
            if (!this.isVisible) {
                if (this.mirrorEl) {
                    this.mirrorEl.style.display = '';
                }
                this.isVisible = bool; // needs to happen before updateElPosition
                this.updateElPosition(); // because was not updating the position while invisible
            }
        }
        else {
            if (this.isVisible) {
                if (this.mirrorEl) {
                    this.mirrorEl.style.display = 'none';
                }
                this.isVisible = bool;
            }
        }
    };
    // always async
    ElementMirror.prototype.stop = function (needsRevertAnimation, callback) {
        var _this = this;
        var done = function () {
            _this.cleanup();
            callback();
        };
        if (needsRevertAnimation &&
            this.mirrorEl &&
            this.isVisible &&
            this.revertDuration && // if 0, transition won't work
            (this.deltaX || this.deltaY) // if same coords, transition won't work
        ) {
            this.doRevertAnimation(done, this.revertDuration);
        }
        else {
            setTimeout(done, 0);
        }
    };
    ElementMirror.prototype.doRevertAnimation = function (callback, revertDuration) {
        var mirrorEl = this.mirrorEl;
        var finalSourceElRect = this.sourceEl.getBoundingClientRect(); // because autoscrolling might have happened
        mirrorEl.style.transition =
            'top ' + revertDuration + 'ms,' +
                'left ' + revertDuration + 'ms';
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(mirrorEl, {
            left: finalSourceElRect.left,
            top: finalSourceElRect.top
        });
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["whenTransitionDone"])(mirrorEl, function () {
            mirrorEl.style.transition = '';
            callback();
        });
    };
    ElementMirror.prototype.cleanup = function () {
        if (this.mirrorEl) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(this.mirrorEl);
            this.mirrorEl = null;
        }
        this.sourceEl = null;
    };
    ElementMirror.prototype.updateElPosition = function () {
        if (this.sourceEl && this.isVisible) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(this.getMirrorEl(), {
                left: this.sourceElRect.left + this.deltaX,
                top: this.sourceElRect.top + this.deltaY
            });
        }
    };
    ElementMirror.prototype.getMirrorEl = function () {
        var sourceElRect = this.sourceElRect;
        var mirrorEl = this.mirrorEl;
        if (!mirrorEl) {
            mirrorEl = this.mirrorEl = this.sourceEl.cloneNode(true); // cloneChildren=true
            // we don't want long taps or any mouse interaction causing selection/menus.
            // would use preventSelection(), but that prevents selectstart, causing problems.
            mirrorEl.classList.add('fc-unselectable');
            mirrorEl.classList.add('fc-dragging');
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(mirrorEl, {
                position: 'fixed',
                zIndex: this.zIndex,
                visibility: '',
                boxSizing: 'border-box',
                width: sourceElRect.right - sourceElRect.left,
                height: sourceElRect.bottom - sourceElRect.top,
                right: 'auto',
                bottom: 'auto',
                margin: 0
            });
            this.parentNode.appendChild(mirrorEl);
        }
        return mirrorEl;
    };
    return ElementMirror;
}());

/*
Is a cache for a given element's scroll information (all the info that ScrollController stores)
in addition the "client rectangle" of the element.. the area within the scrollbars.

The cache can be in one of two modes:
- doesListening:false - ignores when the container is scrolled by someone else
- doesListening:true - watch for scrolling and update the cache
*/
var ScrollGeomCache = /** @class */ (function (_super) {
    __extends(ScrollGeomCache, _super);
    function ScrollGeomCache(scrollController, doesListening) {
        var _this = _super.call(this) || this;
        _this.handleScroll = function () {
            _this.scrollTop = _this.scrollController.getScrollTop();
            _this.scrollLeft = _this.scrollController.getScrollLeft();
            _this.handleScrollChange();
        };
        _this.scrollController = scrollController;
        _this.doesListening = doesListening;
        _this.scrollTop = _this.origScrollTop = scrollController.getScrollTop();
        _this.scrollLeft = _this.origScrollLeft = scrollController.getScrollLeft();
        _this.scrollWidth = scrollController.getScrollWidth();
        _this.scrollHeight = scrollController.getScrollHeight();
        _this.clientWidth = scrollController.getClientWidth();
        _this.clientHeight = scrollController.getClientHeight();
        _this.clientRect = _this.computeClientRect(); // do last in case it needs cached values
        if (_this.doesListening) {
            _this.getEventTarget().addEventListener('scroll', _this.handleScroll);
        }
        return _this;
    }
    ScrollGeomCache.prototype.destroy = function () {
        if (this.doesListening) {
            this.getEventTarget().removeEventListener('scroll', this.handleScroll);
        }
    };
    ScrollGeomCache.prototype.getScrollTop = function () {
        return this.scrollTop;
    };
    ScrollGeomCache.prototype.getScrollLeft = function () {
        return this.scrollLeft;
    };
    ScrollGeomCache.prototype.setScrollTop = function (top) {
        this.scrollController.setScrollTop(top);
        if (!this.doesListening) {
            // we are not relying on the element to normalize out-of-bounds scroll values
            // so we need to sanitize ourselves
            this.scrollTop = Math.max(Math.min(top, this.getMaxScrollTop()), 0);
            this.handleScrollChange();
        }
    };
    ScrollGeomCache.prototype.setScrollLeft = function (top) {
        this.scrollController.setScrollLeft(top);
        if (!this.doesListening) {
            // we are not relying on the element to normalize out-of-bounds scroll values
            // so we need to sanitize ourselves
            this.scrollLeft = Math.max(Math.min(top, this.getMaxScrollLeft()), 0);
            this.handleScrollChange();
        }
    };
    ScrollGeomCache.prototype.getClientWidth = function () {
        return this.clientWidth;
    };
    ScrollGeomCache.prototype.getClientHeight = function () {
        return this.clientHeight;
    };
    ScrollGeomCache.prototype.getScrollWidth = function () {
        return this.scrollWidth;
    };
    ScrollGeomCache.prototype.getScrollHeight = function () {
        return this.scrollHeight;
    };
    ScrollGeomCache.prototype.handleScrollChange = function () {
    };
    return ScrollGeomCache;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["ScrollController"]));
var ElementScrollGeomCache = /** @class */ (function (_super) {
    __extends(ElementScrollGeomCache, _super);
    function ElementScrollGeomCache(el, doesListening) {
        return _super.call(this, new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["ElementScrollController"](el), doesListening) || this;
    }
    ElementScrollGeomCache.prototype.getEventTarget = function () {
        return this.scrollController.el;
    };
    ElementScrollGeomCache.prototype.computeClientRect = function () {
        return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeInnerRect"])(this.scrollController.el);
    };
    return ElementScrollGeomCache;
}(ScrollGeomCache));
var WindowScrollGeomCache = /** @class */ (function (_super) {
    __extends(WindowScrollGeomCache, _super);
    function WindowScrollGeomCache(doesListening) {
        return _super.call(this, new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["WindowScrollController"](), doesListening) || this;
    }
    WindowScrollGeomCache.prototype.getEventTarget = function () {
        return window;
    };
    WindowScrollGeomCache.prototype.computeClientRect = function () {
        return {
            left: this.scrollLeft,
            right: this.scrollLeft + this.clientWidth,
            top: this.scrollTop,
            bottom: this.scrollTop + this.clientHeight
        };
    };
    // the window is the only scroll object that changes it's rectangle relative
    // to the document's topleft as it scrolls
    WindowScrollGeomCache.prototype.handleScrollChange = function () {
        this.clientRect = this.computeClientRect();
    };
    return WindowScrollGeomCache;
}(ScrollGeomCache));

// If available we are using native "performance" API instead of "Date"
// Read more about it on MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Performance
var getTime = typeof performance === 'function' ? performance.now : Date.now;
/*
For a pointer interaction, automatically scrolls certain scroll containers when the pointer
approaches the edge.

The caller must call start + handleMove + stop.
*/
var AutoScroller = /** @class */ (function () {
    function AutoScroller() {
        var _this = this;
        // options that can be set by caller
        this.isEnabled = true;
        this.scrollQuery = [window, '.fc-scroller'];
        this.edgeThreshold = 50; // pixels
        this.maxVelocity = 300; // pixels per second
        // internal state
        this.pointerScreenX = null;
        this.pointerScreenY = null;
        this.isAnimating = false;
        this.scrollCaches = null;
        // protect against the initial pointerdown being too close to an edge and starting the scroll
        this.everMovedUp = false;
        this.everMovedDown = false;
        this.everMovedLeft = false;
        this.everMovedRight = false;
        this.animate = function () {
            if (_this.isAnimating) { // wasn't cancelled between animation calls
                var edge = _this.computeBestEdge(_this.pointerScreenX + window.pageXOffset, _this.pointerScreenY + window.pageYOffset);
                if (edge) {
                    var now = getTime();
                    _this.handleSide(edge, (now - _this.msSinceRequest) / 1000);
                    _this.requestAnimation(now);
                }
                else {
                    _this.isAnimating = false; // will stop animation
                }
            }
        };
    }
    AutoScroller.prototype.start = function (pageX, pageY) {
        if (this.isEnabled) {
            this.scrollCaches = this.buildCaches();
            this.pointerScreenX = null;
            this.pointerScreenY = null;
            this.everMovedUp = false;
            this.everMovedDown = false;
            this.everMovedLeft = false;
            this.everMovedRight = false;
            this.handleMove(pageX, pageY);
        }
    };
    AutoScroller.prototype.handleMove = function (pageX, pageY) {
        if (this.isEnabled) {
            var pointerScreenX = pageX - window.pageXOffset;
            var pointerScreenY = pageY - window.pageYOffset;
            var yDelta = this.pointerScreenY === null ? 0 : pointerScreenY - this.pointerScreenY;
            var xDelta = this.pointerScreenX === null ? 0 : pointerScreenX - this.pointerScreenX;
            if (yDelta < 0) {
                this.everMovedUp = true;
            }
            else if (yDelta > 0) {
                this.everMovedDown = true;
            }
            if (xDelta < 0) {
                this.everMovedLeft = true;
            }
            else if (xDelta > 0) {
                this.everMovedRight = true;
            }
            this.pointerScreenX = pointerScreenX;
            this.pointerScreenY = pointerScreenY;
            if (!this.isAnimating) {
                this.isAnimating = true;
                this.requestAnimation(getTime());
            }
        }
    };
    AutoScroller.prototype.stop = function () {
        if (this.isEnabled) {
            this.isAnimating = false; // will stop animation
            for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
                var scrollCache = _a[_i];
                scrollCache.destroy();
            }
            this.scrollCaches = null;
        }
    };
    AutoScroller.prototype.requestAnimation = function (now) {
        this.msSinceRequest = now;
        requestAnimationFrame(this.animate);
    };
    AutoScroller.prototype.handleSide = function (edge, seconds) {
        var scrollCache = edge.scrollCache;
        var edgeThreshold = this.edgeThreshold;
        var invDistance = edgeThreshold - edge.distance;
        var velocity = // the closer to the edge, the faster we scroll
         (invDistance * invDistance) / (edgeThreshold * edgeThreshold) * // quadratic
            this.maxVelocity * seconds;
        var sign = 1;
        switch (edge.name) {
            case 'left':
                sign = -1;
            // falls through
            case 'right':
                scrollCache.setScrollLeft(scrollCache.getScrollLeft() + velocity * sign);
                break;
            case 'top':
                sign = -1;
            // falls through
            case 'bottom':
                scrollCache.setScrollTop(scrollCache.getScrollTop() + velocity * sign);
                break;
        }
    };
    // left/top are relative to document topleft
    AutoScroller.prototype.computeBestEdge = function (left, top) {
        var edgeThreshold = this.edgeThreshold;
        var bestSide = null;
        for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
            var scrollCache = _a[_i];
            var rect = scrollCache.clientRect;
            var leftDist = left - rect.left;
            var rightDist = rect.right - left;
            var topDist = top - rect.top;
            var bottomDist = rect.bottom - top;
            // completely within the rect?
            if (leftDist >= 0 && rightDist >= 0 && topDist >= 0 && bottomDist >= 0) {
                if (topDist <= edgeThreshold && this.everMovedUp && scrollCache.canScrollUp() &&
                    (!bestSide || bestSide.distance > topDist)) {
                    bestSide = { scrollCache: scrollCache, name: 'top', distance: topDist };
                }
                if (bottomDist <= edgeThreshold && this.everMovedDown && scrollCache.canScrollDown() &&
                    (!bestSide || bestSide.distance > bottomDist)) {
                    bestSide = { scrollCache: scrollCache, name: 'bottom', distance: bottomDist };
                }
                if (leftDist <= edgeThreshold && this.everMovedLeft && scrollCache.canScrollLeft() &&
                    (!bestSide || bestSide.distance > leftDist)) {
                    bestSide = { scrollCache: scrollCache, name: 'left', distance: leftDist };
                }
                if (rightDist <= edgeThreshold && this.everMovedRight && scrollCache.canScrollRight() &&
                    (!bestSide || bestSide.distance > rightDist)) {
                    bestSide = { scrollCache: scrollCache, name: 'right', distance: rightDist };
                }
            }
        }
        return bestSide;
    };
    AutoScroller.prototype.buildCaches = function () {
        return this.queryScrollEls().map(function (el) {
            if (el === window) {
                return new WindowScrollGeomCache(false); // false = don't listen to user-generated scrolls
            }
            else {
                return new ElementScrollGeomCache(el, false); // false = don't listen to user-generated scrolls
            }
        });
    };
    AutoScroller.prototype.queryScrollEls = function () {
        var els = [];
        for (var _i = 0, _a = this.scrollQuery; _i < _a.length; _i++) {
            var query = _a[_i];
            if (typeof query === 'object') {
                els.push(query);
            }
            else {
                els.push.apply(els, Array.prototype.slice.call(document.querySelectorAll(query)));
            }
        }
        return els;
    };
    return AutoScroller;
}());

/*
Monitors dragging on an element. Has a number of high-level features:
- minimum distance required before dragging
- minimum wait time ("delay") before dragging
- a mirror element that follows the pointer
*/
var FeaturefulElementDragging = /** @class */ (function (_super) {
    __extends(FeaturefulElementDragging, _super);
    function FeaturefulElementDragging(containerEl) {
        var _this = _super.call(this, containerEl) || this;
        // options that can be directly set by caller
        // the caller can also set the PointerDragging's options as well
        _this.delay = null;
        _this.minDistance = 0;
        _this.touchScrollAllowed = true; // prevents drag from starting and blocks scrolling during drag
        _this.mirrorNeedsRevert = false;
        _this.isInteracting = false; // is the user validly moving the pointer? lasts until pointerup
        _this.isDragging = false; // is it INTENTFULLY dragging? lasts until after revert animation
        _this.isDelayEnded = false;
        _this.isDistanceSurpassed = false;
        _this.delayTimeoutId = null;
        _this.onPointerDown = function (ev) {
            if (!_this.isDragging) { // so new drag doesn't happen while revert animation is going
                _this.isInteracting = true;
                _this.isDelayEnded = false;
                _this.isDistanceSurpassed = false;
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["preventSelection"])(document.body);
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["preventContextMenu"])(document.body);
                // prevent links from being visited if there's an eventual drag.
                // also prevents selection in older browsers (maybe?).
                // not necessary for touch, besides, browser would complain about passiveness.
                if (!ev.isTouch) {
                    ev.origEvent.preventDefault();
                }
                _this.emitter.trigger('pointerdown', ev);
                if (!_this.pointer.shouldIgnoreMove) {
                    // actions related to initiating dragstart+dragmove+dragend...
                    _this.mirror.setIsVisible(false); // reset. caller must set-visible
                    _this.mirror.start(ev.subjectEl, ev.pageX, ev.pageY); // must happen on first pointer down
                    _this.startDelay(ev);
                    if (!_this.minDistance) {
                        _this.handleDistanceSurpassed(ev);
                    }
                }
            }
        };
        _this.onPointerMove = function (ev) {
            if (_this.isInteracting) { // if false, still waiting for previous drag's revert
                _this.emitter.trigger('pointermove', ev);
                if (!_this.isDistanceSurpassed) {
                    var minDistance = _this.minDistance;
                    var distanceSq = void 0; // current distance from the origin, squared
                    var deltaX = ev.deltaX, deltaY = ev.deltaY;
                    distanceSq = deltaX * deltaX + deltaY * deltaY;
                    if (distanceSq >= minDistance * minDistance) { // use pythagorean theorem
                        _this.handleDistanceSurpassed(ev);
                    }
                }
                if (_this.isDragging) {
                    // a real pointer move? (not one simulated by scrolling)
                    if (ev.origEvent.type !== 'scroll') {
                        _this.mirror.handleMove(ev.pageX, ev.pageY);
                        _this.autoScroller.handleMove(ev.pageX, ev.pageY);
                    }
                    _this.emitter.trigger('dragmove', ev);
                }
            }
        };
        _this.onPointerUp = function (ev) {
            if (_this.isInteracting) { // if false, still waiting for previous drag's revert
                _this.isInteracting = false;
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["allowSelection"])(document.body);
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["allowContextMenu"])(document.body);
                _this.emitter.trigger('pointerup', ev); // can potentially set mirrorNeedsRevert
                if (_this.isDragging) {
                    _this.autoScroller.stop();
                    _this.tryStopDrag(ev); // which will stop the mirror
                }
                if (_this.delayTimeoutId) {
                    clearTimeout(_this.delayTimeoutId);
                    _this.delayTimeoutId = null;
                }
            }
        };
        var pointer = _this.pointer = new PointerDragging(containerEl);
        pointer.emitter.on('pointerdown', _this.onPointerDown);
        pointer.emitter.on('pointermove', _this.onPointerMove);
        pointer.emitter.on('pointerup', _this.onPointerUp);
        _this.mirror = new ElementMirror();
        _this.autoScroller = new AutoScroller();
        return _this;
    }
    FeaturefulElementDragging.prototype.destroy = function () {
        this.pointer.destroy();
    };
    FeaturefulElementDragging.prototype.startDelay = function (ev) {
        var _this = this;
        if (typeof this.delay === 'number') {
            this.delayTimeoutId = setTimeout(function () {
                _this.delayTimeoutId = null;
                _this.handleDelayEnd(ev);
            }, this.delay); // not assignable to number!
        }
        else {
            this.handleDelayEnd(ev);
        }
    };
    FeaturefulElementDragging.prototype.handleDelayEnd = function (ev) {
        this.isDelayEnded = true;
        this.tryStartDrag(ev);
    };
    FeaturefulElementDragging.prototype.handleDistanceSurpassed = function (ev) {
        this.isDistanceSurpassed = true;
        this.tryStartDrag(ev);
    };
    FeaturefulElementDragging.prototype.tryStartDrag = function (ev) {
        if (this.isDelayEnded && this.isDistanceSurpassed) {
            if (!this.pointer.wasTouchScroll || this.touchScrollAllowed) {
                this.isDragging = true;
                this.mirrorNeedsRevert = false;
                this.autoScroller.start(ev.pageX, ev.pageY);
                this.emitter.trigger('dragstart', ev);
                if (this.touchScrollAllowed === false) {
                    this.pointer.cancelTouchScroll();
                }
            }
        }
    };
    FeaturefulElementDragging.prototype.tryStopDrag = function (ev) {
        // .stop() is ALWAYS asynchronous, which we NEED because we want all pointerup events
        // that come from the document to fire beforehand. much more convenient this way.
        this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, ev) // bound with args
        );
    };
    FeaturefulElementDragging.prototype.stopDrag = function (ev) {
        this.isDragging = false;
        this.emitter.trigger('dragend', ev);
    };
    // fill in the implementations...
    FeaturefulElementDragging.prototype.setIgnoreMove = function (bool) {
        this.pointer.shouldIgnoreMove = bool;
    };
    FeaturefulElementDragging.prototype.setMirrorIsVisible = function (bool) {
        this.mirror.setIsVisible(bool);
    };
    FeaturefulElementDragging.prototype.setMirrorNeedsRevert = function (bool) {
        this.mirrorNeedsRevert = bool;
    };
    FeaturefulElementDragging.prototype.setAutoScrollEnabled = function (bool) {
        this.autoScroller.isEnabled = bool;
    };
    return FeaturefulElementDragging;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["ElementDragging"]));

/*
When this class is instantiated, it records the offset of an element (relative to the document topleft),
and continues to monitor scrolling, updating the cached coordinates if it needs to.
Does not access the DOM after instantiation, so highly performant.

Also keeps track of all scrolling/overflow:hidden containers that are parents of the given element
and an determine if a given point is inside the combined clipping rectangle.
*/
var OffsetTracker = /** @class */ (function () {
    function OffsetTracker(el) {
        this.origRect = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeRect"])(el);
        // will work fine for divs that have overflow:hidden
        this.scrollCaches = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getClippingParents"])(el).map(function (el) {
            return new ElementScrollGeomCache(el, true); // listen=true
        });
    }
    OffsetTracker.prototype.destroy = function () {
        for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
            var scrollCache = _a[_i];
            scrollCache.destroy();
        }
    };
    OffsetTracker.prototype.computeLeft = function () {
        var left = this.origRect.left;
        for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
            var scrollCache = _a[_i];
            left += scrollCache.origScrollLeft - scrollCache.getScrollLeft();
        }
        return left;
    };
    OffsetTracker.prototype.computeTop = function () {
        var top = this.origRect.top;
        for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
            var scrollCache = _a[_i];
            top += scrollCache.origScrollTop - scrollCache.getScrollTop();
        }
        return top;
    };
    OffsetTracker.prototype.isWithinClipping = function (pageX, pageY) {
        var point = { left: pageX, top: pageY };
        for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
            var scrollCache = _a[_i];
            if (!isIgnoredClipping(scrollCache.getEventTarget()) &&
                !Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["pointInsideRect"])(point, scrollCache.clientRect)) {
                return false;
            }
        }
        return true;
    };
    return OffsetTracker;
}());
// certain clipping containers should never constrain interactions, like <html> and <body>
// https://github.com/fullcalendar/fullcalendar/issues/3615
function isIgnoredClipping(node) {
    var tagName = node.tagName;
    return tagName === 'HTML' || tagName === 'BODY';
}

/*
Tracks movement over multiple droppable areas (aka "hits")
that exist in one or more DateComponents.
Relies on an existing draggable.

emits:
- pointerdown
- dragstart
- hitchange - fires initially, even if not over a hit
- pointerup
- (hitchange - again, to null, if ended over a hit)
- dragend
*/
var HitDragging = /** @class */ (function () {
    function HitDragging(dragging, droppableStore) {
        var _this = this;
        // options that can be set by caller
        this.useSubjectCenter = false;
        this.requireInitial = true; // if doesn't start out on a hit, won't emit any events
        this.initialHit = null;
        this.movingHit = null;
        this.finalHit = null; // won't ever be populated if shouldIgnoreMove
        this.handlePointerDown = function (ev) {
            var dragging = _this.dragging;
            _this.initialHit = null;
            _this.movingHit = null;
            _this.finalHit = null;
            _this.prepareHits();
            _this.processFirstCoord(ev);
            if (_this.initialHit || !_this.requireInitial) {
                dragging.setIgnoreMove(false);
                _this.emitter.trigger('pointerdown', ev); // TODO: fire this before computing processFirstCoord, so listeners can cancel. this gets fired by almost every handler :(
            }
            else {
                dragging.setIgnoreMove(true);
            }
        };
        this.handleDragStart = function (ev) {
            _this.emitter.trigger('dragstart', ev);
            _this.handleMove(ev, true); // force = fire even if initially null
        };
        this.handleDragMove = function (ev) {
            _this.emitter.trigger('dragmove', ev);
            _this.handleMove(ev);
        };
        this.handlePointerUp = function (ev) {
            _this.releaseHits();
            _this.emitter.trigger('pointerup', ev);
        };
        this.handleDragEnd = function (ev) {
            if (_this.movingHit) {
                _this.emitter.trigger('hitupdate', null, true, ev);
            }
            _this.finalHit = _this.movingHit;
            _this.movingHit = null;
            _this.emitter.trigger('dragend', ev);
        };
        this.droppableStore = droppableStore;
        dragging.emitter.on('pointerdown', this.handlePointerDown);
        dragging.emitter.on('dragstart', this.handleDragStart);
        dragging.emitter.on('dragmove', this.handleDragMove);
        dragging.emitter.on('pointerup', this.handlePointerUp);
        dragging.emitter.on('dragend', this.handleDragEnd);
        this.dragging = dragging;
        this.emitter = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EmitterMixin"]();
    }
    // sets initialHit
    // sets coordAdjust
    HitDragging.prototype.processFirstCoord = function (ev) {
        var origPoint = { left: ev.pageX, top: ev.pageY };
        var adjustedPoint = origPoint;
        var subjectEl = ev.subjectEl;
        var subjectRect;
        if (subjectEl !== document) {
            subjectRect = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeRect"])(subjectEl);
            adjustedPoint = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["constrainPoint"])(adjustedPoint, subjectRect);
        }
        var initialHit = this.initialHit = this.queryHitForOffset(adjustedPoint.left, adjustedPoint.top);
        if (initialHit) {
            if (this.useSubjectCenter && subjectRect) {
                var slicedSubjectRect = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["intersectRects"])(subjectRect, initialHit.rect);
                if (slicedSubjectRect) {
                    adjustedPoint = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getRectCenter"])(slicedSubjectRect);
                }
            }
            this.coordAdjust = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["diffPoints"])(adjustedPoint, origPoint);
        }
        else {
            this.coordAdjust = { left: 0, top: 0 };
        }
    };
    HitDragging.prototype.handleMove = function (ev, forceHandle) {
        var hit = this.queryHitForOffset(ev.pageX + this.coordAdjust.left, ev.pageY + this.coordAdjust.top);
        if (forceHandle || !isHitsEqual(this.movingHit, hit)) {
            this.movingHit = hit;
            this.emitter.trigger('hitupdate', hit, false, ev);
        }
    };
    HitDragging.prototype.prepareHits = function () {
        this.offsetTrackers = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["mapHash"])(this.droppableStore, function (interactionSettings) {
            interactionSettings.component.buildPositionCaches();
            return new OffsetTracker(interactionSettings.el);
        });
    };
    HitDragging.prototype.releaseHits = function () {
        var offsetTrackers = this.offsetTrackers;
        for (var id in offsetTrackers) {
            offsetTrackers[id].destroy();
        }
        this.offsetTrackers = {};
    };
    HitDragging.prototype.queryHitForOffset = function (offsetLeft, offsetTop) {
        var _a = this, droppableStore = _a.droppableStore, offsetTrackers = _a.offsetTrackers;
        var bestHit = null;
        for (var id in droppableStore) {
            var component = droppableStore[id].component;
            var offsetTracker = offsetTrackers[id];
            if (offsetTracker.isWithinClipping(offsetLeft, offsetTop)) {
                var originLeft = offsetTracker.computeLeft();
                var originTop = offsetTracker.computeTop();
                var positionLeft = offsetLeft - originLeft;
                var positionTop = offsetTop - originTop;
                var origRect = offsetTracker.origRect;
                var width = origRect.right - origRect.left;
                var height = origRect.bottom - origRect.top;
                if (
                // must be within the element's bounds
                positionLeft >= 0 && positionLeft < width &&
                    positionTop >= 0 && positionTop < height) {
                    var hit = component.queryHit(positionLeft, positionTop, width, height);
                    if (hit &&
                        (
                        // make sure the hit is within activeRange, meaning it's not a deal cell
                        !component.props.dateProfile || // hack for DayTile
                            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["rangeContainsRange"])(component.props.dateProfile.activeRange, hit.dateSpan.range)) &&
                        (!bestHit || hit.layer > bestHit.layer)) {
                        // TODO: better way to re-orient rectangle
                        hit.rect.left += originLeft;
                        hit.rect.right += originLeft;
                        hit.rect.top += originTop;
                        hit.rect.bottom += originTop;
                        bestHit = hit;
                    }
                }
            }
        }
        return bestHit;
    };
    return HitDragging;
}());
function isHitsEqual(hit0, hit1) {
    if (!hit0 && !hit1) {
        return true;
    }
    if (Boolean(hit0) !== Boolean(hit1)) {
        return false;
    }
    return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["isDateSpansEqual"])(hit0.dateSpan, hit1.dateSpan);
}

/*
Monitors when the user clicks on a specific date/time of a component.
A pointerdown+pointerup on the same "hit" constitutes a click.
*/
var DateClicking = /** @class */ (function (_super) {
    __extends(DateClicking, _super);
    function DateClicking(settings) {
        var _this = _super.call(this, settings) || this;
        _this.handlePointerDown = function (ev) {
            var dragging = _this.dragging;
            // do this in pointerdown (not dragend) because DOM might be mutated by the time dragend is fired
            dragging.setIgnoreMove(!_this.component.isValidDateDownEl(dragging.pointer.downEl));
        };
        // won't even fire if moving was ignored
        _this.handleDragEnd = function (ev) {
            var component = _this.component;
            var pointer = _this.dragging.pointer;
            if (!pointer.wasTouchScroll) {
                var _a = _this.hitDragging, initialHit = _a.initialHit, finalHit = _a.finalHit;
                if (initialHit && finalHit && isHitsEqual(initialHit, finalHit)) {
                    component.calendar.triggerDateClick(initialHit.dateSpan, initialHit.dayEl, component.view, ev.origEvent);
                }
            }
        };
        var component = settings.component;
        // we DO want to watch pointer moves because otherwise finalHit won't get populated
        _this.dragging = new FeaturefulElementDragging(component.el);
        _this.dragging.autoScroller.isEnabled = false;
        var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["interactionSettingsToStore"])(settings));
        hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
        hitDragging.emitter.on('dragend', _this.handleDragEnd);
        return _this;
    }
    DateClicking.prototype.destroy = function () {
        this.dragging.destroy();
    };
    return DateClicking;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Interaction"]));

/*
Tracks when the user selects a portion of time of a component,
constituted by a drag over date cells, with a possible delay at the beginning of the drag.
*/
var DateSelecting = /** @class */ (function (_super) {
    __extends(DateSelecting, _super);
    function DateSelecting(settings) {
        var _this = _super.call(this, settings) || this;
        _this.dragSelection = null;
        _this.handlePointerDown = function (ev) {
            var _a = _this, component = _a.component, dragging = _a.dragging;
            var canSelect = component.opt('selectable') &&
                component.isValidDateDownEl(ev.origEvent.target);
            // don't bother to watch expensive moves if component won't do selection
            dragging.setIgnoreMove(!canSelect);
            // if touch, require user to hold down
            dragging.delay = ev.isTouch ? getComponentTouchDelay(component) : null;
        };
        _this.handleDragStart = function (ev) {
            _this.component.calendar.unselect(ev); // unselect previous selections
        };
        _this.handleHitUpdate = function (hit, isFinal) {
            var calendar = _this.component.calendar;
            var dragSelection = null;
            var isInvalid = false;
            if (hit) {
                dragSelection = joinHitsIntoSelection(_this.hitDragging.initialHit, hit, calendar.pluginSystem.hooks.dateSelectionTransformers);
                if (!dragSelection || !_this.component.isDateSelectionValid(dragSelection)) {
                    isInvalid = true;
                    dragSelection = null;
                }
            }
            if (dragSelection) {
                calendar.dispatch({ type: 'SELECT_DATES', selection: dragSelection });
            }
            else if (!isFinal) { // only unselect if moved away while dragging
                calendar.dispatch({ type: 'UNSELECT_DATES' });
            }
            if (!isInvalid) {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["enableCursor"])();
            }
            else {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["disableCursor"])();
            }
            if (!isFinal) {
                _this.dragSelection = dragSelection; // only clear if moved away from all hits while dragging
            }
        };
        _this.handlePointerUp = function (pev) {
            if (_this.dragSelection) {
                // selection is already rendered, so just need to report selection
                _this.component.calendar.triggerDateSelect(_this.dragSelection, pev);
                _this.dragSelection = null;
            }
        };
        var component = settings.component;
        var dragging = _this.dragging = new FeaturefulElementDragging(component.el);
        dragging.touchScrollAllowed = false;
        dragging.minDistance = component.opt('selectMinDistance') || 0;
        dragging.autoScroller.isEnabled = component.opt('dragScroll');
        var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["interactionSettingsToStore"])(settings));
        hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
        hitDragging.emitter.on('dragstart', _this.handleDragStart);
        hitDragging.emitter.on('hitupdate', _this.handleHitUpdate);
        hitDragging.emitter.on('pointerup', _this.handlePointerUp);
        return _this;
    }
    DateSelecting.prototype.destroy = function () {
        this.dragging.destroy();
    };
    return DateSelecting;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Interaction"]));
function getComponentTouchDelay(component) {
    var delay = component.opt('selectLongPressDelay');
    if (delay == null) {
        delay = component.opt('longPressDelay');
    }
    return delay;
}
function joinHitsIntoSelection(hit0, hit1, dateSelectionTransformers) {
    var dateSpan0 = hit0.dateSpan;
    var dateSpan1 = hit1.dateSpan;
    var ms = [
        dateSpan0.range.start,
        dateSpan0.range.end,
        dateSpan1.range.start,
        dateSpan1.range.end
    ];
    ms.sort(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["compareNumbers"]);
    var props = {};
    for (var _i = 0, dateSelectionTransformers_1 = dateSelectionTransformers; _i < dateSelectionTransformers_1.length; _i++) {
        var transformer = dateSelectionTransformers_1[_i];
        var res = transformer(hit0, hit1);
        if (res === false) {
            return null;
        }
        else if (res) {
            __assign(props, res);
        }
    }
    props.range = { start: ms[0], end: ms[3] };
    props.allDay = dateSpan0.allDay;
    return props;
}

var EventDragging = /** @class */ (function (_super) {
    __extends(EventDragging, _super);
    function EventDragging(settings) {
        var _this = _super.call(this, settings) || this;
        // internal state
        _this.subjectSeg = null; // the seg being selected/dragged
        _this.isDragging = false;
        _this.eventRange = null;
        _this.relevantEvents = null; // the events being dragged
        _this.receivingCalendar = null;
        _this.validMutation = null;
        _this.mutatedRelevantEvents = null;
        _this.handlePointerDown = function (ev) {
            var origTarget = ev.origEvent.target;
            var _a = _this, component = _a.component, dragging = _a.dragging;
            var mirror = dragging.mirror;
            var initialCalendar = component.calendar;
            var subjectSeg = _this.subjectSeg = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getElSeg"])(ev.subjectEl);
            var eventRange = _this.eventRange = subjectSeg.eventRange;
            var eventInstanceId = eventRange.instance.instanceId;
            _this.relevantEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getRelevantEvents"])(initialCalendar.state.eventStore, eventInstanceId);
            dragging.minDistance = ev.isTouch ? 0 : component.opt('eventDragMinDistance');
            dragging.delay =
                // only do a touch delay if touch and this event hasn't been selected yet
                (ev.isTouch && eventInstanceId !== component.props.eventSelection) ?
                    getComponentTouchDelay$1(component) :
                    null;
            mirror.parentNode = initialCalendar.el;
            mirror.revertDuration = component.opt('dragRevertDuration');
            var isValid = component.isValidSegDownEl(origTarget) &&
                !Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(origTarget, '.fc-resizer'); // NOT on a resizer
            dragging.setIgnoreMove(!isValid);
            // disable dragging for elements that are resizable (ie, selectable)
            // but are not draggable
            _this.isDragging = isValid &&
                ev.subjectEl.classList.contains('fc-draggable');
        };
        _this.handleDragStart = function (ev) {
            var initialCalendar = _this.component.calendar;
            var eventRange = _this.eventRange;
            var eventInstanceId = eventRange.instance.instanceId;
            if (ev.isTouch) {
                // need to select a different event?
                if (eventInstanceId !== _this.component.props.eventSelection) {
                    initialCalendar.dispatch({ type: 'SELECT_EVENT', eventInstanceId: eventInstanceId });
                }
            }
            else {
                // if now using mouse, but was previous touch interaction, clear selected event
                initialCalendar.dispatch({ type: 'UNSELECT_EVENT' });
            }
            if (_this.isDragging) {
                initialCalendar.unselect(ev); // unselect *date* selection
                initialCalendar.publiclyTrigger('eventDragStart', [
                    {
                        el: _this.subjectSeg.el,
                        event: new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"](initialCalendar, eventRange.def, eventRange.instance),
                        jsEvent: ev.origEvent,
                        view: _this.component.view
                    }
                ]);
            }
        };
        _this.handleHitUpdate = function (hit, isFinal) {
            if (!_this.isDragging) {
                return;
            }
            var relevantEvents = _this.relevantEvents;
            var initialHit = _this.hitDragging.initialHit;
            var initialCalendar = _this.component.calendar;
            // states based on new hit
            var receivingCalendar = null;
            var mutation = null;
            var mutatedRelevantEvents = null;
            var isInvalid = false;
            var interaction = {
                affectedEvents: relevantEvents,
                mutatedEvents: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])(),
                isEvent: true,
                origSeg: _this.subjectSeg
            };
            if (hit) {
                var receivingComponent = hit.component;
                receivingCalendar = receivingComponent.calendar;
                if (initialCalendar === receivingCalendar ||
                    receivingComponent.opt('editable') && receivingComponent.opt('droppable')) {
                    mutation = computeEventMutation(initialHit, hit, receivingCalendar.pluginSystem.hooks.eventDragMutationMassagers);
                    if (mutation) {
                        mutatedRelevantEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyMutationToEventStore"])(relevantEvents, receivingCalendar.eventUiBases, mutation, receivingCalendar);
                        interaction.mutatedEvents = mutatedRelevantEvents;
                        if (!receivingComponent.isInteractionValid(interaction)) {
                            isInvalid = true;
                            mutation = null;
                            mutatedRelevantEvents = null;
                            interaction.mutatedEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])();
                        }
                    }
                }
                else {
                    receivingCalendar = null;
                }
            }
            _this.displayDrag(receivingCalendar, interaction);
            if (!isInvalid) {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["enableCursor"])();
            }
            else {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["disableCursor"])();
            }
            if (!isFinal) {
                if (initialCalendar === receivingCalendar && // TODO: write test for this
                    isHitsEqual(initialHit, hit)) {
                    mutation = null;
                }
                _this.dragging.setMirrorNeedsRevert(!mutation);
                // render the mirror if no already-rendered mirror
                // TODO: wish we could somehow wait for dispatch to guarantee render
                _this.dragging.setMirrorIsVisible(!hit || !document.querySelector('.fc-mirror'));
                // assign states based on new hit
                _this.receivingCalendar = receivingCalendar;
                _this.validMutation = mutation;
                _this.mutatedRelevantEvents = mutatedRelevantEvents;
            }
        };
        _this.handlePointerUp = function () {
            if (!_this.isDragging) {
                _this.cleanup(); // because handleDragEnd won't fire
            }
        };
        _this.handleDragEnd = function (ev) {
            if (_this.isDragging) {
                var initialCalendar_1 = _this.component.calendar;
                var initialView = _this.component.view;
                var _a = _this, receivingCalendar = _a.receivingCalendar, validMutation = _a.validMutation;
                var eventDef = _this.eventRange.def;
                var eventInstance = _this.eventRange.instance;
                var eventApi = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"](initialCalendar_1, eventDef, eventInstance);
                var relevantEvents_1 = _this.relevantEvents;
                var mutatedRelevantEvents = _this.mutatedRelevantEvents;
                var finalHit = _this.hitDragging.finalHit;
                _this.clearDrag(); // must happen after revert animation
                initialCalendar_1.publiclyTrigger('eventDragStop', [
                    {
                        el: _this.subjectSeg.el,
                        event: eventApi,
                        jsEvent: ev.origEvent,
                        view: initialView
                    }
                ]);
                if (validMutation) {
                    // dropped within same calendar
                    if (receivingCalendar === initialCalendar_1) {
                        initialCalendar_1.dispatch({
                            type: 'MERGE_EVENTS',
                            eventStore: mutatedRelevantEvents
                        });
                        var transformed = {};
                        for (var _i = 0, _b = initialCalendar_1.pluginSystem.hooks.eventDropTransformers; _i < _b.length; _i++) {
                            var transformer = _b[_i];
                            __assign(transformed, transformer(validMutation, initialCalendar_1));
                        }
                        var eventDropArg = __assign({}, transformed, { el: ev.subjectEl, delta: validMutation.datesDelta, oldEvent: eventApi, event: new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"](// the data AFTER the mutation
                            initialCalendar_1, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null), revert: function () {
                                initialCalendar_1.dispatch({
                                    type: 'MERGE_EVENTS',
                                    eventStore: relevantEvents_1
                                });
                            }, jsEvent: ev.origEvent, view: initialView });
                        initialCalendar_1.publiclyTrigger('eventDrop', [eventDropArg]);
                        // dropped in different calendar
                    }
                    else if (receivingCalendar) {
                        initialCalendar_1.publiclyTrigger('eventLeave', [
                            {
                                draggedEl: ev.subjectEl,
                                event: eventApi,
                                view: initialView
                            }
                        ]);
                        initialCalendar_1.dispatch({
                            type: 'REMOVE_EVENT_INSTANCES',
                            instances: _this.mutatedRelevantEvents.instances
                        });
                        receivingCalendar.dispatch({
                            type: 'MERGE_EVENTS',
                            eventStore: _this.mutatedRelevantEvents
                        });
                        if (ev.isTouch) {
                            receivingCalendar.dispatch({
                                type: 'SELECT_EVENT',
                                eventInstanceId: eventInstance.instanceId
                            });
                        }
                        var dropArg = __assign({}, receivingCalendar.buildDatePointApi(finalHit.dateSpan), { draggedEl: ev.subjectEl, jsEvent: ev.origEvent, view: finalHit.component // should this be finalHit.component.view? See #4644
                         });
                        receivingCalendar.publiclyTrigger('drop', [dropArg]);
                        receivingCalendar.publiclyTrigger('eventReceive', [
                            {
                                draggedEl: ev.subjectEl,
                                event: new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"](// the data AFTER the mutation
                                receivingCalendar, mutatedRelevantEvents.defs[eventDef.defId], mutatedRelevantEvents.instances[eventInstance.instanceId]),
                                view: finalHit.component // should this be finalHit.component.view? See #4644
                            }
                        ]);
                    }
                }
                else {
                    initialCalendar_1.publiclyTrigger('_noEventDrop');
                }
            }
            _this.cleanup();
        };
        var component = _this.component;
        var dragging = _this.dragging = new FeaturefulElementDragging(component.el);
        dragging.pointer.selector = EventDragging.SELECTOR;
        dragging.touchScrollAllowed = false;
        dragging.autoScroller.isEnabled = component.opt('dragScroll');
        var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["interactionSettingsStore"]);
        hitDragging.useSubjectCenter = settings.useEventCenter;
        hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
        hitDragging.emitter.on('dragstart', _this.handleDragStart);
        hitDragging.emitter.on('hitupdate', _this.handleHitUpdate);
        hitDragging.emitter.on('pointerup', _this.handlePointerUp);
        hitDragging.emitter.on('dragend', _this.handleDragEnd);
        return _this;
    }
    EventDragging.prototype.destroy = function () {
        this.dragging.destroy();
    };
    // render a drag state on the next receivingCalendar
    EventDragging.prototype.displayDrag = function (nextCalendar, state) {
        var initialCalendar = this.component.calendar;
        var prevCalendar = this.receivingCalendar;
        // does the previous calendar need to be cleared?
        if (prevCalendar && prevCalendar !== nextCalendar) {
            // does the initial calendar need to be cleared?
            // if so, don't clear all the way. we still need to to hide the affectedEvents
            if (prevCalendar === initialCalendar) {
                prevCalendar.dispatch({
                    type: 'SET_EVENT_DRAG',
                    state: {
                        affectedEvents: state.affectedEvents,
                        mutatedEvents: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])(),
                        isEvent: true,
                        origSeg: state.origSeg
                    }
                });
                // completely clear the old calendar if it wasn't the initial
            }
            else {
                prevCalendar.dispatch({ type: 'UNSET_EVENT_DRAG' });
            }
        }
        if (nextCalendar) {
            nextCalendar.dispatch({ type: 'SET_EVENT_DRAG', state: state });
        }
    };
    EventDragging.prototype.clearDrag = function () {
        var initialCalendar = this.component.calendar;
        var receivingCalendar = this.receivingCalendar;
        if (receivingCalendar) {
            receivingCalendar.dispatch({ type: 'UNSET_EVENT_DRAG' });
        }
        // the initial calendar might have an dummy drag state from displayDrag
        if (initialCalendar !== receivingCalendar) {
            initialCalendar.dispatch({ type: 'UNSET_EVENT_DRAG' });
        }
    };
    EventDragging.prototype.cleanup = function () {
        this.subjectSeg = null;
        this.isDragging = false;
        this.eventRange = null;
        this.relevantEvents = null;
        this.receivingCalendar = null;
        this.validMutation = null;
        this.mutatedRelevantEvents = null;
    };
    EventDragging.SELECTOR = '.fc-draggable, .fc-resizable'; // TODO: test this in IE11
    return EventDragging;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Interaction"]));
function computeEventMutation(hit0, hit1, massagers) {
    var dateSpan0 = hit0.dateSpan;
    var dateSpan1 = hit1.dateSpan;
    var date0 = dateSpan0.range.start;
    var date1 = dateSpan1.range.start;
    var standardProps = {};
    if (dateSpan0.allDay !== dateSpan1.allDay) {
        standardProps.allDay = dateSpan1.allDay;
        standardProps.hasEnd = hit1.component.opt('allDayMaintainDuration');
        if (dateSpan1.allDay) {
            // means date1 is already start-of-day,
            // but date0 needs to be converted
            date0 = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["startOfDay"])(date0);
        }
    }
    var delta = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["diffDates"])(date0, date1, hit0.component.dateEnv, hit0.component === hit1.component ?
        hit0.component.largeUnit :
        null);
    if (delta.milliseconds) { // has hours/minutes/seconds
        standardProps.allDay = false;
    }
    var mutation = {
        datesDelta: delta,
        standardProps: standardProps
    };
    for (var _i = 0, massagers_1 = massagers; _i < massagers_1.length; _i++) {
        var massager = massagers_1[_i];
        massager(mutation, hit0, hit1);
    }
    return mutation;
}
function getComponentTouchDelay$1(component) {
    var delay = component.opt('eventLongPressDelay');
    if (delay == null) {
        delay = component.opt('longPressDelay');
    }
    return delay;
}

var EventDragging$1 = /** @class */ (function (_super) {
    __extends(EventDragging, _super);
    function EventDragging(settings) {
        var _this = _super.call(this, settings) || this;
        // internal state
        _this.draggingSeg = null; // TODO: rename to resizingSeg? subjectSeg?
        _this.eventRange = null;
        _this.relevantEvents = null;
        _this.validMutation = null;
        _this.mutatedRelevantEvents = null;
        _this.handlePointerDown = function (ev) {
            var component = _this.component;
            var seg = _this.querySeg(ev);
            var eventRange = _this.eventRange = seg.eventRange;
            _this.dragging.minDistance = component.opt('eventDragMinDistance');
            // if touch, need to be working with a selected event
            _this.dragging.setIgnoreMove(!_this.component.isValidSegDownEl(ev.origEvent.target) ||
                (ev.isTouch && _this.component.props.eventSelection !== eventRange.instance.instanceId));
        };
        _this.handleDragStart = function (ev) {
            var calendar = _this.component.calendar;
            var eventRange = _this.eventRange;
            _this.relevantEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getRelevantEvents"])(calendar.state.eventStore, _this.eventRange.instance.instanceId);
            _this.draggingSeg = _this.querySeg(ev);
            calendar.unselect();
            calendar.publiclyTrigger('eventResizeStart', [
                {
                    el: _this.draggingSeg.el,
                    event: new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"](calendar, eventRange.def, eventRange.instance),
                    jsEvent: ev.origEvent,
                    view: _this.component.view
                }
            ]);
        };
        _this.handleHitUpdate = function (hit, isFinal, ev) {
            var calendar = _this.component.calendar;
            var relevantEvents = _this.relevantEvents;
            var initialHit = _this.hitDragging.initialHit;
            var eventInstance = _this.eventRange.instance;
            var mutation = null;
            var mutatedRelevantEvents = null;
            var isInvalid = false;
            var interaction = {
                affectedEvents: relevantEvents,
                mutatedEvents: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])(),
                isEvent: true,
                origSeg: _this.draggingSeg
            };
            if (hit) {
                mutation = computeMutation(initialHit, hit, ev.subjectEl.classList.contains('fc-start-resizer'), eventInstance.range, calendar.pluginSystem.hooks.eventResizeJoinTransforms);
            }
            if (mutation) {
                mutatedRelevantEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyMutationToEventStore"])(relevantEvents, calendar.eventUiBases, mutation, calendar);
                interaction.mutatedEvents = mutatedRelevantEvents;
                if (!_this.component.isInteractionValid(interaction)) {
                    isInvalid = true;
                    mutation = null;
                    mutatedRelevantEvents = null;
                    interaction.mutatedEvents = null;
                }
            }
            if (mutatedRelevantEvents) {
                calendar.dispatch({
                    type: 'SET_EVENT_RESIZE',
                    state: interaction
                });
            }
            else {
                calendar.dispatch({ type: 'UNSET_EVENT_RESIZE' });
            }
            if (!isInvalid) {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["enableCursor"])();
            }
            else {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["disableCursor"])();
            }
            if (!isFinal) {
                if (mutation && isHitsEqual(initialHit, hit)) {
                    mutation = null;
                }
                _this.validMutation = mutation;
                _this.mutatedRelevantEvents = mutatedRelevantEvents;
            }
        };
        _this.handleDragEnd = function (ev) {
            var calendar = _this.component.calendar;
            var view = _this.component.view;
            var eventDef = _this.eventRange.def;
            var eventInstance = _this.eventRange.instance;
            var eventApi = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"](calendar, eventDef, eventInstance);
            var relevantEvents = _this.relevantEvents;
            var mutatedRelevantEvents = _this.mutatedRelevantEvents;
            calendar.publiclyTrigger('eventResizeStop', [
                {
                    el: _this.draggingSeg.el,
                    event: eventApi,
                    jsEvent: ev.origEvent,
                    view: view
                }
            ]);
            if (_this.validMutation) {
                calendar.dispatch({
                    type: 'MERGE_EVENTS',
                    eventStore: mutatedRelevantEvents
                });
                calendar.publiclyTrigger('eventResize', [
                    {
                        el: _this.draggingSeg.el,
                        startDelta: _this.validMutation.startDelta || Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(0),
                        endDelta: _this.validMutation.endDelta || Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(0),
                        prevEvent: eventApi,
                        event: new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"](// the data AFTER the mutation
                        calendar, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null),
                        revert: function () {
                            calendar.dispatch({
                                type: 'MERGE_EVENTS',
                                eventStore: relevantEvents
                            });
                        },
                        jsEvent: ev.origEvent,
                        view: view
                    }
                ]);
            }
            else {
                calendar.publiclyTrigger('_noEventResize');
            }
            // reset all internal state
            _this.draggingSeg = null;
            _this.relevantEvents = null;
            _this.validMutation = null;
            // okay to keep eventInstance around. useful to set it in handlePointerDown
        };
        var component = settings.component;
        var dragging = _this.dragging = new FeaturefulElementDragging(component.el);
        dragging.pointer.selector = '.fc-resizer';
        dragging.touchScrollAllowed = false;
        dragging.autoScroller.isEnabled = component.opt('dragScroll');
        var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["interactionSettingsToStore"])(settings));
        hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
        hitDragging.emitter.on('dragstart', _this.handleDragStart);
        hitDragging.emitter.on('hitupdate', _this.handleHitUpdate);
        hitDragging.emitter.on('dragend', _this.handleDragEnd);
        return _this;
    }
    EventDragging.prototype.destroy = function () {
        this.dragging.destroy();
    };
    EventDragging.prototype.querySeg = function (ev) {
        return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getElSeg"])(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(ev.subjectEl, this.component.fgSegSelector));
    };
    return EventDragging;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Interaction"]));
function computeMutation(hit0, hit1, isFromStart, instanceRange, transforms) {
    var dateEnv = hit0.component.dateEnv;
    var date0 = hit0.dateSpan.range.start;
    var date1 = hit1.dateSpan.range.start;
    var delta = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["diffDates"])(date0, date1, dateEnv, hit0.component.largeUnit);
    var props = {};
    for (var _i = 0, transforms_1 = transforms; _i < transforms_1.length; _i++) {
        var transform = transforms_1[_i];
        var res = transform(hit0, hit1);
        if (res === false) {
            return null;
        }
        else if (res) {
            __assign(props, res);
        }
    }
    if (isFromStart) {
        if (dateEnv.add(instanceRange.start, delta) < instanceRange.end) {
            props.startDelta = delta;
            return props;
        }
    }
    else {
        if (dateEnv.add(instanceRange.end, delta) > instanceRange.start) {
            props.endDelta = delta;
            return props;
        }
    }
    return null;
}

var UnselectAuto = /** @class */ (function () {
    function UnselectAuto(calendar) {
        var _this = this;
        this.isRecentPointerDateSelect = false; // wish we could use a selector to detect date selection, but uses hit system
        this.onSelect = function (selectInfo) {
            if (selectInfo.jsEvent) {
                _this.isRecentPointerDateSelect = true;
            }
        };
        this.onDocumentPointerUp = function (pev) {
            var _a = _this, calendar = _a.calendar, documentPointer = _a.documentPointer;
            var state = calendar.state;
            // touch-scrolling should never unfocus any type of selection
            if (!documentPointer.wasTouchScroll) {
                if (state.dateSelection && // an existing date selection?
                    !_this.isRecentPointerDateSelect // a new pointer-initiated date selection since last onDocumentPointerUp?
                ) {
                    var unselectAuto = calendar.viewOpt('unselectAuto');
                    var unselectCancel = calendar.viewOpt('unselectCancel');
                    if (unselectAuto && (!unselectAuto || !Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(documentPointer.downEl, unselectCancel))) {
                        calendar.unselect(pev);
                    }
                }
                if (state.eventSelection && // an existing event selected?
                    !Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(documentPointer.downEl, EventDragging.SELECTOR) // interaction DIDN'T start on an event
                ) {
                    calendar.dispatch({ type: 'UNSELECT_EVENT' });
                }
            }
            _this.isRecentPointerDateSelect = false;
        };
        this.calendar = calendar;
        var documentPointer = this.documentPointer = new PointerDragging(document);
        documentPointer.shouldIgnoreMove = true;
        documentPointer.shouldWatchScroll = false;
        documentPointer.emitter.on('pointerup', this.onDocumentPointerUp);
        /*
        TODO: better way to know about whether there was a selection with the pointer
        */
        calendar.on('select', this.onSelect);
    }
    UnselectAuto.prototype.destroy = function () {
        this.calendar.off('select', this.onSelect);
        this.documentPointer.destroy();
    };
    return UnselectAuto;
}());

/*
Given an already instantiated draggable object for one-or-more elements,
Interprets any dragging as an attempt to drag an events that lives outside
of a calendar onto a calendar.
*/
var ExternalElementDragging = /** @class */ (function () {
    function ExternalElementDragging(dragging, suppliedDragMeta) {
        var _this = this;
        this.receivingCalendar = null;
        this.droppableEvent = null; // will exist for all drags, even if create:false
        this.suppliedDragMeta = null;
        this.dragMeta = null;
        this.handleDragStart = function (ev) {
            _this.dragMeta = _this.buildDragMeta(ev.subjectEl);
        };
        this.handleHitUpdate = function (hit, isFinal, ev) {
            var dragging = _this.hitDragging.dragging;
            var receivingCalendar = null;
            var droppableEvent = null;
            var isInvalid = false;
            var interaction = {
                affectedEvents: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])(),
                mutatedEvents: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])(),
                isEvent: _this.dragMeta.create,
                origSeg: null
            };
            if (hit) {
                receivingCalendar = hit.component.calendar;
                if (_this.canDropElOnCalendar(ev.subjectEl, receivingCalendar)) {
                    droppableEvent = computeEventForDateSpan(hit.dateSpan, _this.dragMeta, receivingCalendar);
                    interaction.mutatedEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["eventTupleToStore"])(droppableEvent);
                    isInvalid = !Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["isInteractionValid"])(interaction, receivingCalendar);
                    if (isInvalid) {
                        interaction.mutatedEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])();
                        droppableEvent = null;
                    }
                }
            }
            _this.displayDrag(receivingCalendar, interaction);
            // show mirror if no already-rendered mirror element OR if we are shutting down the mirror (?)
            // TODO: wish we could somehow wait for dispatch to guarantee render
            dragging.setMirrorIsVisible(isFinal || !droppableEvent || !document.querySelector('.fc-mirror'));
            if (!isInvalid) {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["enableCursor"])();
            }
            else {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["disableCursor"])();
            }
            if (!isFinal) {
                dragging.setMirrorNeedsRevert(!droppableEvent);
                _this.receivingCalendar = receivingCalendar;
                _this.droppableEvent = droppableEvent;
            }
        };
        this.handleDragEnd = function (pev) {
            var _a = _this, receivingCalendar = _a.receivingCalendar, droppableEvent = _a.droppableEvent;
            _this.clearDrag();
            if (receivingCalendar && droppableEvent) {
                var finalHit = _this.hitDragging.finalHit;
                var finalView = finalHit.component.view;
                var dragMeta = _this.dragMeta;
                var arg = __assign({}, receivingCalendar.buildDatePointApi(finalHit.dateSpan), { draggedEl: pev.subjectEl, jsEvent: pev.origEvent, view: finalView });
                receivingCalendar.publiclyTrigger('drop', [arg]);
                if (dragMeta.create) {
                    receivingCalendar.dispatch({
                        type: 'MERGE_EVENTS',
                        eventStore: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["eventTupleToStore"])(droppableEvent)
                    });
                    if (pev.isTouch) {
                        receivingCalendar.dispatch({
                            type: 'SELECT_EVENT',
                            eventInstanceId: droppableEvent.instance.instanceId
                        });
                    }
                    // signal that an external event landed
                    receivingCalendar.publiclyTrigger('eventReceive', [
                        {
                            draggedEl: pev.subjectEl,
                            event: new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"](receivingCalendar, droppableEvent.def, droppableEvent.instance),
                            view: finalView
                        }
                    ]);
                }
            }
            _this.receivingCalendar = null;
            _this.droppableEvent = null;
        };
        var hitDragging = this.hitDragging = new HitDragging(dragging, _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["interactionSettingsStore"]);
        hitDragging.requireInitial = false; // will start outside of a component
        hitDragging.emitter.on('dragstart', this.handleDragStart);
        hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
        hitDragging.emitter.on('dragend', this.handleDragEnd);
        this.suppliedDragMeta = suppliedDragMeta;
    }
    ExternalElementDragging.prototype.buildDragMeta = function (subjectEl) {
        if (typeof this.suppliedDragMeta === 'object') {
            return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["parseDragMeta"])(this.suppliedDragMeta);
        }
        else if (typeof this.suppliedDragMeta === 'function') {
            return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["parseDragMeta"])(this.suppliedDragMeta(subjectEl));
        }
        else {
            return getDragMetaFromEl(subjectEl);
        }
    };
    ExternalElementDragging.prototype.displayDrag = function (nextCalendar, state) {
        var prevCalendar = this.receivingCalendar;
        if (prevCalendar && prevCalendar !== nextCalendar) {
            prevCalendar.dispatch({ type: 'UNSET_EVENT_DRAG' });
        }
        if (nextCalendar) {
            nextCalendar.dispatch({ type: 'SET_EVENT_DRAG', state: state });
        }
    };
    ExternalElementDragging.prototype.clearDrag = function () {
        if (this.receivingCalendar) {
            this.receivingCalendar.dispatch({ type: 'UNSET_EVENT_DRAG' });
        }
    };
    ExternalElementDragging.prototype.canDropElOnCalendar = function (el, receivingCalendar) {
        var dropAccept = receivingCalendar.opt('dropAccept');
        if (typeof dropAccept === 'function') {
            return dropAccept(el);
        }
        else if (typeof dropAccept === 'string' && dropAccept) {
            return Boolean(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["elementMatches"])(el, dropAccept));
        }
        return true;
    };
    return ExternalElementDragging;
}());
// Utils for computing event store from the DragMeta
// ----------------------------------------------------------------------------------------------------
function computeEventForDateSpan(dateSpan, dragMeta, calendar) {
    var defProps = __assign({}, dragMeta.leftoverProps);
    for (var _i = 0, _a = calendar.pluginSystem.hooks.externalDefTransforms; _i < _a.length; _i++) {
        var transform = _a[_i];
        __assign(defProps, transform(dateSpan, dragMeta));
    }
    var def = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["parseEventDef"])(defProps, dragMeta.sourceId, dateSpan.allDay, calendar.opt('forceEventDuration') || Boolean(dragMeta.duration), // hasEnd
    calendar);
    var start = dateSpan.range.start;
    // only rely on time info if drop zone is all-day,
    // otherwise, we already know the time
    if (dateSpan.allDay && dragMeta.startTime) {
        start = calendar.dateEnv.add(start, dragMeta.startTime);
    }
    var end = dragMeta.duration ?
        calendar.dateEnv.add(start, dragMeta.duration) :
        calendar.getDefaultEventEnd(dateSpan.allDay, start);
    var instance = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEventInstance"])(def.defId, { start: start, end: end });
    return { def: def, instance: instance };
}
// Utils for extracting data from element
// ----------------------------------------------------------------------------------------------------
function getDragMetaFromEl(el) {
    var str = getEmbeddedElData(el, 'event');
    var obj = str ?
        JSON.parse(str) :
        { create: false }; // if no embedded data, assume no event creation
    return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["parseDragMeta"])(obj);
}
_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["config"].dataAttrPrefix = '';
function getEmbeddedElData(el, name) {
    var prefix = _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["config"].dataAttrPrefix;
    var prefixedName = (prefix ? prefix + '-' : '') + name;
    return el.getAttribute('data-' + prefixedName) || '';
}

/*
Makes an element (that is *external* to any calendar) draggable.
Can pass in data that determines how an event will be created when dropped onto a calendar.
Leverages FullCalendar's internal drag-n-drop functionality WITHOUT a third-party drag system.
*/
var ExternalDraggable = /** @class */ (function () {
    function ExternalDraggable(el, settings) {
        var _this = this;
        if (settings === void 0) { settings = {}; }
        this.handlePointerDown = function (ev) {
            var dragging = _this.dragging;
            var _a = _this.settings, minDistance = _a.minDistance, longPressDelay = _a.longPressDelay;
            dragging.minDistance =
                minDistance != null ?
                    minDistance :
                    (ev.isTouch ? 0 : _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["globalDefaults"].eventDragMinDistance);
            dragging.delay =
                ev.isTouch ? // TODO: eventually read eventLongPressDelay instead vvv
                    (longPressDelay != null ? longPressDelay : _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["globalDefaults"].longPressDelay) :
                    0;
        };
        this.handleDragStart = function (ev) {
            if (ev.isTouch &&
                _this.dragging.delay &&
                ev.subjectEl.classList.contains('fc-event')) {
                _this.dragging.mirror.getMirrorEl().classList.add('fc-selected');
            }
        };
        this.settings = settings;
        var dragging = this.dragging = new FeaturefulElementDragging(el);
        dragging.touchScrollAllowed = false;
        if (settings.itemSelector != null) {
            dragging.pointer.selector = settings.itemSelector;
        }
        if (settings.appendTo != null) {
            dragging.mirror.parentNode = settings.appendTo; // TODO: write tests
        }
        dragging.emitter.on('pointerdown', this.handlePointerDown);
        dragging.emitter.on('dragstart', this.handleDragStart);
        new ExternalElementDragging(dragging, settings.eventData);
    }
    ExternalDraggable.prototype.destroy = function () {
        this.dragging.destroy();
    };
    return ExternalDraggable;
}());

/*
Detects when a *THIRD-PARTY* drag-n-drop system interacts with elements.
The third-party system is responsible for drawing the visuals effects of the drag.
This class simply monitors for pointer movements and fires events.
It also has the ability to hide the moving element (the "mirror") during the drag.
*/
var InferredElementDragging = /** @class */ (function (_super) {
    __extends(InferredElementDragging, _super);
    function InferredElementDragging(containerEl) {
        var _this = _super.call(this, containerEl) || this;
        _this.shouldIgnoreMove = false;
        _this.mirrorSelector = '';
        _this.currentMirrorEl = null;
        _this.handlePointerDown = function (ev) {
            _this.emitter.trigger('pointerdown', ev);
            if (!_this.shouldIgnoreMove) {
                // fire dragstart right away. does not support delay or min-distance
                _this.emitter.trigger('dragstart', ev);
            }
        };
        _this.handlePointerMove = function (ev) {
            if (!_this.shouldIgnoreMove) {
                _this.emitter.trigger('dragmove', ev);
            }
        };
        _this.handlePointerUp = function (ev) {
            _this.emitter.trigger('pointerup', ev);
            if (!_this.shouldIgnoreMove) {
                // fire dragend right away. does not support a revert animation
                _this.emitter.trigger('dragend', ev);
            }
        };
        var pointer = _this.pointer = new PointerDragging(containerEl);
        pointer.emitter.on('pointerdown', _this.handlePointerDown);
        pointer.emitter.on('pointermove', _this.handlePointerMove);
        pointer.emitter.on('pointerup', _this.handlePointerUp);
        return _this;
    }
    InferredElementDragging.prototype.destroy = function () {
        this.pointer.destroy();
    };
    InferredElementDragging.prototype.setIgnoreMove = function (bool) {
        this.shouldIgnoreMove = bool;
    };
    InferredElementDragging.prototype.setMirrorIsVisible = function (bool) {
        if (bool) {
            // restore a previously hidden element.
            // use the reference in case the selector class has already been removed.
            if (this.currentMirrorEl) {
                this.currentMirrorEl.style.visibility = '';
                this.currentMirrorEl = null;
            }
        }
        else {
            var mirrorEl = this.mirrorSelector ?
                document.querySelector(this.mirrorSelector) :
                null;
            if (mirrorEl) {
                this.currentMirrorEl = mirrorEl;
                mirrorEl.style.visibility = 'hidden';
            }
        }
    };
    return InferredElementDragging;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["ElementDragging"]));

/*
Bridges third-party drag-n-drop systems with FullCalendar.
Must be instantiated and destroyed by caller.
*/
var ThirdPartyDraggable = /** @class */ (function () {
    function ThirdPartyDraggable(containerOrSettings, settings) {
        var containerEl = document;
        if (
        // wish we could just test instanceof EventTarget, but doesn't work in IE11
        containerOrSettings === document ||
            containerOrSettings instanceof Element) {
            containerEl = containerOrSettings;
            settings = settings || {};
        }
        else {
            settings = (containerOrSettings || {});
        }
        var dragging = this.dragging = new InferredElementDragging(containerEl);
        if (typeof settings.itemSelector === 'string') {
            dragging.pointer.selector = settings.itemSelector;
        }
        else if (containerEl === document) {
            dragging.pointer.selector = '[data-event]';
        }
        if (typeof settings.mirrorSelector === 'string') {
            dragging.mirrorSelector = settings.mirrorSelector;
        }
        new ExternalElementDragging(dragging, settings.eventData);
    }
    ThirdPartyDraggable.prototype.destroy = function () {
        this.dragging.destroy();
    };
    return ThirdPartyDraggable;
}());

var main = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
    componentInteractions: [DateClicking, DateSelecting, EventDragging, EventDragging$1],
    calendarInteractions: [UnselectAuto],
    elementDraggingImpl: FeaturefulElementDragging
});

/* harmony default export */ __webpack_exports__["default"] = (main);



/***/ }),

/***/ "./node_modules/@fullcalendar/list/main.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/list/main.esm.js ***!
  \*****************************************************/
/*! exports provided: default, ListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListView", function() { return ListView; });
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/main.esm.js");
/*!
FullCalendar List View Plugin v4.3.0
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var ListEventRenderer = /** @class */ (function (_super) {
    __extends(ListEventRenderer, _super);
    function ListEventRenderer(listView) {
        var _this = _super.call(this, listView.context) || this;
        _this.listView = listView;
        return _this;
    }
    ListEventRenderer.prototype.attachSegs = function (segs) {
        if (!segs.length) {
            this.listView.renderEmptyMessage();
        }
        else {
            this.listView.renderSegList(segs);
        }
    };
    ListEventRenderer.prototype.detachSegs = function () {
    };
    // generates the HTML for a single event row
    ListEventRenderer.prototype.renderSegHtml = function (seg) {
        var _a = this.context, view = _a.view, theme = _a.theme;
        var eventRange = seg.eventRange;
        var eventDef = eventRange.def;
        var eventInstance = eventRange.instance;
        var eventUi = eventRange.ui;
        var url = eventDef.url;
        var classes = ['fc-list-item'].concat(eventUi.classNames);
        var bgColor = eventUi.backgroundColor;
        var timeHtml;
        if (eventDef.allDay) {
            timeHtml = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getAllDayHtml"])(view);
        }
        else if (Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["isMultiDayRange"])(eventRange.range)) {
            if (seg.isStart) {
                timeHtml = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(this._getTimeText(eventInstance.range.start, seg.end, false // allDay
                ));
            }
            else if (seg.isEnd) {
                timeHtml = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(this._getTimeText(seg.start, eventInstance.range.end, false // allDay
                ));
            }
            else { // inner segment that lasts the whole day
                timeHtml = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getAllDayHtml"])(view);
            }
        }
        else {
            // Display the normal time text for the *event's* times
            timeHtml = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(this.getTimeText(eventRange));
        }
        if (url) {
            classes.push('fc-has-url');
        }
        return '<tr class="' + classes.join(' ') + '">' +
            (this.displayEventTime ?
                '<td class="fc-list-item-time ' + theme.getClass('widgetContent') + '">' +
                    (timeHtml || '') +
                    '</td>' :
                '') +
            '<td class="fc-list-item-marker ' + theme.getClass('widgetContent') + '">' +
            '<span class="fc-event-dot"' +
            (bgColor ?
                ' style="background-color:' + bgColor + '"' :
                '') +
            '></span>' +
            '</td>' +
            '<td class="fc-list-item-title ' + theme.getClass('widgetContent') + '">' +
            '<a' + (url ? ' href="' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(url) + '"' : '') + '>' +
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(eventDef.title || '') +
            '</a>' +
            '</td>' +
            '</tr>';
    };
    // like "4:00am"
    ListEventRenderer.prototype.computeEventTimeFormat = function () {
        return {
            hour: 'numeric',
            minute: '2-digit',
            meridiem: 'short'
        };
    };
    return ListEventRenderer;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["FgEventRenderer"]));

/*
Responsible for the scroller, and forwarding event-related actions into the "grid".
*/
var ListView = /** @class */ (function (_super) {
    __extends(ListView, _super);
    function ListView(context, viewSpec, dateProfileGenerator, parentEl) {
        var _this = _super.call(this, context, viewSpec, dateProfileGenerator, parentEl) || this;
        _this.computeDateVars = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(computeDateVars);
        _this.eventStoreToSegs = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(_this._eventStoreToSegs);
        var eventRenderer = _this.eventRenderer = new ListEventRenderer(_this);
        _this.renderContent = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.renderSegs.bind(eventRenderer), eventRenderer.unrender.bind(eventRenderer));
        _this.el.classList.add('fc-list-view');
        var listViewClassNames = (_this.theme.getClass('listView') || '').split(' '); // wish we didn't have to do this
        for (var _i = 0, listViewClassNames_1 = listViewClassNames; _i < listViewClassNames_1.length; _i++) {
            var listViewClassName = listViewClassNames_1[_i];
            if (listViewClassName) { // in case input was empty string
                _this.el.classList.add(listViewClassName);
            }
        }
        _this.scroller = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["ScrollComponent"]('hidden', // overflow x
        'auto' // overflow y
        );
        _this.el.appendChild(_this.scroller.el);
        _this.contentEl = _this.scroller.el; // shortcut
        context.calendar.registerInteractiveComponent(_this, {
            el: _this.el
            // TODO: make aware that it doesn't do Hits
        });
        return _this;
    }
    ListView.prototype.render = function (props) {
        var _a = this.computeDateVars(props.dateProfile), dayDates = _a.dayDates, dayRanges = _a.dayRanges;
        this.dayDates = dayDates;
        this.renderContent(this.eventStoreToSegs(props.eventStore, props.eventUiBases, dayRanges));
    };
    ListView.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.renderContent.unrender();
        this.scroller.destroy(); // will remove the Grid too
        this.calendar.unregisterInteractiveComponent(this);
    };
    ListView.prototype.updateSize = function (isResize, viewHeight, isAuto) {
        _super.prototype.updateSize.call(this, isResize, viewHeight, isAuto);
        this.eventRenderer.computeSizes(isResize);
        this.eventRenderer.assignSizes(isResize);
        this.scroller.clear(); // sets height to 'auto' and clears overflow
        if (!isAuto) {
            this.scroller.setHeight(this.computeScrollerHeight(viewHeight));
        }
    };
    ListView.prototype.computeScrollerHeight = function (viewHeight) {
        return viewHeight -
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["subtractInnerElHeight"])(this.el, this.scroller.el); // everything that's NOT the scroller
    };
    ListView.prototype._eventStoreToSegs = function (eventStore, eventUiBases, dayRanges) {
        return this.eventRangesToSegs(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["sliceEventStore"])(eventStore, eventUiBases, this.props.dateProfile.activeRange, this.nextDayThreshold).fg, dayRanges);
    };
    ListView.prototype.eventRangesToSegs = function (eventRanges, dayRanges) {
        var segs = [];
        for (var _i = 0, eventRanges_1 = eventRanges; _i < eventRanges_1.length; _i++) {
            var eventRange = eventRanges_1[_i];
            segs.push.apply(segs, this.eventRangeToSegs(eventRange, dayRanges));
        }
        return segs;
    };
    ListView.prototype.eventRangeToSegs = function (eventRange, dayRanges) {
        var _a = this, dateEnv = _a.dateEnv, nextDayThreshold = _a.nextDayThreshold;
        var range = eventRange.range;
        var allDay = eventRange.def.allDay;
        var dayIndex;
        var segRange;
        var seg;
        var segs = [];
        for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex++) {
            segRange = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["intersectRanges"])(range, dayRanges[dayIndex]);
            if (segRange) {
                seg = {
                    component: this,
                    eventRange: eventRange,
                    start: segRange.start,
                    end: segRange.end,
                    isStart: eventRange.isStart && segRange.start.valueOf() === range.start.valueOf(),
                    isEnd: eventRange.isEnd && segRange.end.valueOf() === range.end.valueOf(),
                    dayIndex: dayIndex
                };
                segs.push(seg);
                // detect when range won't go fully into the next day,
                // and mutate the latest seg to the be the end.
                if (!seg.isEnd && !allDay &&
                    dayIndex + 1 < dayRanges.length &&
                    range.end <
                        dateEnv.add(dayRanges[dayIndex + 1].start, nextDayThreshold)) {
                    seg.end = range.end;
                    seg.isEnd = true;
                    break;
                }
            }
        }
        return segs;
    };
    ListView.prototype.renderEmptyMessage = function () {
        this.contentEl.innerHTML =
            '<div class="fc-list-empty-wrap2">' + // TODO: try less wraps
                '<div class="fc-list-empty-wrap1">' +
                '<div class="fc-list-empty">' +
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(this.opt('noEventsMessage')) +
                '</div>' +
                '</div>' +
                '</div>';
    };
    // called by ListEventRenderer
    ListView.prototype.renderSegList = function (allSegs) {
        var segsByDay = this.groupSegsByDay(allSegs); // sparse array
        var dayIndex;
        var daySegs;
        var i;
        var tableEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlToElement"])('<table class="fc-list-table ' + this.calendar.theme.getClass('tableList') + '"><tbody></tbody></table>');
        var tbodyEl = tableEl.querySelector('tbody');
        for (dayIndex = 0; dayIndex < segsByDay.length; dayIndex++) {
            daySegs = segsByDay[dayIndex];
            if (daySegs) { // sparse array, so might be undefined
                // append a day header
                tbodyEl.appendChild(this.buildDayHeaderRow(this.dayDates[dayIndex]));
                daySegs = this.eventRenderer.sortEventSegs(daySegs);
                for (i = 0; i < daySegs.length; i++) {
                    tbodyEl.appendChild(daySegs[i].el); // append event row
                }
            }
        }
        this.contentEl.innerHTML = '';
        this.contentEl.appendChild(tableEl);
    };
    // Returns a sparse array of arrays, segs grouped by their dayIndex
    ListView.prototype.groupSegsByDay = function (segs) {
        var segsByDay = []; // sparse array
        var i;
        var seg;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            (segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = []))
                .push(seg);
        }
        return segsByDay;
    };
    // generates the HTML for the day headers that live amongst the event rows
    ListView.prototype.buildDayHeaderRow = function (dayDate) {
        var dateEnv = this.dateEnv;
        var mainFormat = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])(this.opt('listDayFormat')); // TODO: cache
        var altFormat = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])(this.opt('listDayAltFormat')); // TODO: cache
        return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('tr', {
            className: 'fc-list-heading',
            'data-date': dateEnv.formatIso(dayDate, { omitTime: true })
        }, '<td class="' + (this.calendar.theme.getClass('tableListHeading') ||
            this.calendar.theme.getClass('widgetHeader')) + '" colspan="3">' +
            (mainFormat ?
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["buildGotoAnchorHtml"])(this, dayDate, { 'class': 'fc-list-heading-main' }, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(dateEnv.format(dayDate, mainFormat)) // inner HTML
                ) :
                '') +
            (altFormat ?
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["buildGotoAnchorHtml"])(this, dayDate, { 'class': 'fc-list-heading-alt' }, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(dateEnv.format(dayDate, altFormat)) // inner HTML
                ) :
                '') +
            '</td>');
    };
    return ListView;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["View"]));
ListView.prototype.fgSegSelector = '.fc-list-item'; // which elements accept event actions
function computeDateVars(dateProfile) {
    var dayStart = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["startOfDay"])(dateProfile.renderRange.start);
    var viewEnd = dateProfile.renderRange.end;
    var dayDates = [];
    var dayRanges = [];
    while (dayStart < viewEnd) {
        dayDates.push(dayStart);
        dayRanges.push({
            start: dayStart,
            end: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDays"])(dayStart, 1)
        });
        dayStart = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDays"])(dayStart, 1);
    }
    return { dayDates: dayDates, dayRanges: dayRanges };
}

var main = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
    views: {
        list: {
            class: ListView,
            buttonTextKey: 'list',
            listDayFormat: { month: 'long', day: 'numeric', year: 'numeric' } // like "January 1, 2016"
        },
        listDay: {
            type: 'list',
            duration: { days: 1 },
            listDayFormat: { weekday: 'long' } // day-of-week is all we need. full date is probably in header
        },
        listWeek: {
            type: 'list',
            duration: { weeks: 1 },
            listDayFormat: { weekday: 'long' },
            listDayAltFormat: { month: 'long', day: 'numeric', year: 'numeric' }
        },
        listMonth: {
            type: 'list',
            duration: { month: 1 },
            listDayAltFormat: { weekday: 'long' } // day-of-week is nice-to-have
        },
        listYear: {
            type: 'list',
            duration: { year: 1 },
            listDayAltFormat: { weekday: 'long' } // day-of-week is nice-to-have
        }
    }
});

/* harmony default export */ __webpack_exports__["default"] = (main);



/***/ }),

/***/ "./node_modules/@fullcalendar/timegrid/main.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@fullcalendar/timegrid/main.esm.js ***!
  \*********************************************************/
/*! exports provided: default, AbstractTimeGridView, TimeGrid, TimeGridSlicer, TimeGridView, buildDayRanges, buildDayTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractTimeGridView", function() { return TimeGridView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeGrid", function() { return TimeGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeGridSlicer", function() { return TimeGridSlicer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeGridView", function() { return TimeGridView$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildDayRanges", function() { return buildDayRanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildDayTable", function() { return buildDayTable; });
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/main.esm.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.esm.js");
/*!
FullCalendar Time Grid Plugin v4.3.0
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/




/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/*
Only handles foreground segs.
Does not own rendering. Use for low-level util methods by TimeGrid.
*/
var TimeGridEventRenderer = /** @class */ (function (_super) {
    __extends(TimeGridEventRenderer, _super);
    function TimeGridEventRenderer(timeGrid) {
        var _this = _super.call(this, timeGrid.context) || this;
        _this.timeGrid = timeGrid;
        _this.fullTimeFormat = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])({
            hour: 'numeric',
            minute: '2-digit',
            separator: _this.context.options.defaultRangeSeparator
        });
        return _this;
    }
    // Given an array of foreground segments, render a DOM element for each, computes position,
    // and attaches to the column inner-container elements.
    TimeGridEventRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
        var segsByCol = this.timeGrid.groupSegsByCol(segs);
        // order the segs within each column
        // TODO: have groupSegsByCol do this?
        for (var col = 0; col < segsByCol.length; col++) {
            segsByCol[col] = this.sortEventSegs(segsByCol[col]);
        }
        this.segsByCol = segsByCol;
        this.timeGrid.attachSegsByCol(segsByCol, this.timeGrid.fgContainerEls);
    };
    TimeGridEventRenderer.prototype.detachSegs = function (segs) {
        segs.forEach(function (seg) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(seg.el);
        });
        this.segsByCol = null;
    };
    TimeGridEventRenderer.prototype.computeSegSizes = function (allSegs) {
        var _a = this, timeGrid = _a.timeGrid, segsByCol = _a.segsByCol;
        var colCnt = timeGrid.colCnt;
        timeGrid.computeSegVerticals(allSegs); // horizontals relies on this
        if (segsByCol) {
            for (var col = 0; col < colCnt; col++) {
                this.computeSegHorizontals(segsByCol[col]); // compute horizontal coordinates, z-index's, and reorder the array
            }
        }
    };
    TimeGridEventRenderer.prototype.assignSegSizes = function (allSegs) {
        var _a = this, timeGrid = _a.timeGrid, segsByCol = _a.segsByCol;
        var colCnt = timeGrid.colCnt;
        timeGrid.assignSegVerticals(allSegs); // horizontals relies on this
        if (segsByCol) {
            for (var col = 0; col < colCnt; col++) {
                this.assignSegCss(segsByCol[col]);
            }
        }
    };
    // Computes a default event time formatting string if `eventTimeFormat` is not explicitly defined
    TimeGridEventRenderer.prototype.computeEventTimeFormat = function () {
        return {
            hour: 'numeric',
            minute: '2-digit',
            meridiem: false
        };
    };
    // Computes a default `displayEventEnd` value if one is not expliclty defined
    TimeGridEventRenderer.prototype.computeDisplayEventEnd = function () {
        return true;
    };
    // Renders the HTML for a single event segment's default rendering
    TimeGridEventRenderer.prototype.renderSegHtml = function (seg, mirrorInfo) {
        var view = this.context.view;
        var eventRange = seg.eventRange;
        var eventDef = eventRange.def;
        var eventUi = eventRange.ui;
        var allDay = eventDef.allDay;
        var isDraggable = view.computeEventDraggable(eventDef, eventUi);
        var isResizableFromStart = seg.isStart && view.computeEventStartResizable(eventDef, eventUi);
        var isResizableFromEnd = seg.isEnd && view.computeEventEndResizable(eventDef, eventUi);
        var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd, mirrorInfo);
        var skinCss = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["cssToStr"])(this.getSkinCss(eventUi));
        var timeText;
        var fullTimeText; // more verbose time text. for the print stylesheet
        var startTimeText; // just the start time text
        classes.unshift('fc-time-grid-event');
        // if the event appears to span more than one day...
        if (Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["isMultiDayRange"])(eventRange.range)) {
            // Don't display time text on segments that run entirely through a day.
            // That would appear as midnight-midnight and would look dumb.
            // Otherwise, display the time text for the *segment's* times (like 6pm-midnight or midnight-10am)
            if (seg.isStart || seg.isEnd) {
                var unzonedStart = seg.start;
                var unzonedEnd = seg.end;
                timeText = this._getTimeText(unzonedStart, unzonedEnd, allDay); // TODO: give the timezones
                fullTimeText = this._getTimeText(unzonedStart, unzonedEnd, allDay, this.fullTimeFormat);
                startTimeText = this._getTimeText(unzonedStart, unzonedEnd, allDay, null, false); // displayEnd=false
            }
        }
        else {
            // Display the normal time text for the *event's* times
            timeText = this.getTimeText(eventRange);
            fullTimeText = this.getTimeText(eventRange, this.fullTimeFormat);
            startTimeText = this.getTimeText(eventRange, null, false); // displayEnd=false
        }
        return '<a class="' + classes.join(' ') + '"' +
            (eventDef.url ?
                ' href="' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(eventDef.url) + '"' :
                '') +
            (skinCss ?
                ' style="' + skinCss + '"' :
                '') +
            '>' +
            '<div class="fc-content">' +
            (timeText ?
                '<div class="fc-time"' +
                    ' data-start="' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(startTimeText) + '"' +
                    ' data-full="' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(fullTimeText) + '"' +
                    '>' +
                    '<span>' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(timeText) + '</span>' +
                    '</div>' :
                '') +
            (eventDef.title ?
                '<div class="fc-title">' +
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(eventDef.title) +
                    '</div>' :
                '') +
            '</div>' +
            /* TODO: write CSS for this
            (isResizableFromStart ?
              '<div class="fc-resizer fc-start-resizer"></div>' :
              ''
              ) +
            */
            (isResizableFromEnd ?
                '<div class="fc-resizer fc-end-resizer"></div>' :
                '') +
            '</a>';
    };
    // Given an array of segments that are all in the same column, sets the backwardCoord and forwardCoord on each.
    // Assumed the segs are already ordered.
    // NOTE: Also reorders the given array by date!
    TimeGridEventRenderer.prototype.computeSegHorizontals = function (segs) {
        var levels;
        var level0;
        var i;
        levels = buildSlotSegLevels(segs);
        computeForwardSlotSegs(levels);
        if ((level0 = levels[0])) {
            for (i = 0; i < level0.length; i++) {
                computeSlotSegPressures(level0[i]);
            }
            for (i = 0; i < level0.length; i++) {
                this.computeSegForwardBack(level0[i], 0, 0);
            }
        }
    };
    // Calculate seg.forwardCoord and seg.backwardCoord for the segment, where both values range
    // from 0 to 1. If the calendar is left-to-right, the seg.backwardCoord maps to "left" and
    // seg.forwardCoord maps to "right" (via percentage). Vice-versa if the calendar is right-to-left.
    //
    // The segment might be part of a "series", which means consecutive segments with the same pressure
    // who's width is unknown until an edge has been hit. `seriesBackwardPressure` is the number of
    // segments behind this one in the current series, and `seriesBackwardCoord` is the starting
    // coordinate of the first segment in the series.
    TimeGridEventRenderer.prototype.computeSegForwardBack = function (seg, seriesBackwardPressure, seriesBackwardCoord) {
        var forwardSegs = seg.forwardSegs;
        var i;
        if (seg.forwardCoord === undefined) { // not already computed
            if (!forwardSegs.length) {
                // if there are no forward segments, this segment should butt up against the edge
                seg.forwardCoord = 1;
            }
            else {
                // sort highest pressure first
                this.sortForwardSegs(forwardSegs);
                // this segment's forwardCoord will be calculated from the backwardCoord of the
                // highest-pressure forward segment.
                this.computeSegForwardBack(forwardSegs[0], seriesBackwardPressure + 1, seriesBackwardCoord);
                seg.forwardCoord = forwardSegs[0].backwardCoord;
            }
            // calculate the backwardCoord from the forwardCoord. consider the series
            seg.backwardCoord = seg.forwardCoord -
                (seg.forwardCoord - seriesBackwardCoord) / // available width for series
                    (seriesBackwardPressure + 1); // # of segments in the series
            // use this segment's coordinates to computed the coordinates of the less-pressurized
            // forward segments
            for (i = 0; i < forwardSegs.length; i++) {
                this.computeSegForwardBack(forwardSegs[i], 0, seg.forwardCoord);
            }
        }
    };
    TimeGridEventRenderer.prototype.sortForwardSegs = function (forwardSegs) {
        var objs = forwardSegs.map(buildTimeGridSegCompareObj);
        var specs = [
            // put higher-pressure first
            { field: 'forwardPressure', order: -1 },
            // put segments that are closer to initial edge first (and favor ones with no coords yet)
            { field: 'backwardCoord', order: 1 }
        ].concat(this.context.view.eventOrderSpecs);
        objs.sort(function (obj0, obj1) {
            return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["compareByFieldSpecs"])(obj0, obj1, specs);
        });
        return objs.map(function (c) {
            return c._seg;
        });
    };
    // Given foreground event segments that have already had their position coordinates computed,
    // assigns position-related CSS values to their elements.
    TimeGridEventRenderer.prototype.assignSegCss = function (segs) {
        for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
            var seg = segs_1[_i];
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(seg.el, this.generateSegCss(seg));
            if (seg.level > 0) {
                seg.el.classList.add('fc-time-grid-event-inset');
            }
            // if the event is short that the title will be cut off,
            // attach a className that condenses the title into the time area.
            if (seg.eventRange.def.title && seg.bottom - seg.top < 30) {
                seg.el.classList.add('fc-short'); // TODO: "condensed" is a better name
            }
        }
    };
    // Generates an object with CSS properties/values that should be applied to an event segment element.
    // Contains important positioning-related properties that should be applied to any event element, customized or not.
    TimeGridEventRenderer.prototype.generateSegCss = function (seg) {
        var shouldOverlap = this.context.options.slotEventOverlap;
        var backwardCoord = seg.backwardCoord; // the left side if LTR. the right side if RTL. floating-point
        var forwardCoord = seg.forwardCoord; // the right side if LTR. the left side if RTL. floating-point
        var props = this.timeGrid.generateSegVerticalCss(seg); // get top/bottom first
        var isRtl = this.timeGrid.isRtl;
        var left; // amount of space from left edge, a fraction of the total width
        var right; // amount of space from right edge, a fraction of the total width
        if (shouldOverlap) {
            // double the width, but don't go beyond the maximum forward coordinate (1.0)
            forwardCoord = Math.min(1, backwardCoord + (forwardCoord - backwardCoord) * 2);
        }
        if (isRtl) {
            left = 1 - forwardCoord;
            right = backwardCoord;
        }
        else {
            left = backwardCoord;
            right = 1 - forwardCoord;
        }
        props.zIndex = seg.level + 1; // convert from 0-base to 1-based
        props.left = left * 100 + '%';
        props.right = right * 100 + '%';
        if (shouldOverlap && seg.forwardPressure) {
            // add padding to the edge so that forward stacked events don't cover the resizer's icon
            props[isRtl ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
        }
        return props;
    };
    return TimeGridEventRenderer;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["FgEventRenderer"]));
// Builds an array of segments "levels". The first level will be the leftmost tier of segments if the calendar is
// left-to-right, or the rightmost if the calendar is right-to-left. Assumes the segments are already ordered by date.
function buildSlotSegLevels(segs) {
    var levels = [];
    var i;
    var seg;
    var j;
    for (i = 0; i < segs.length; i++) {
        seg = segs[i];
        // go through all the levels and stop on the first level where there are no collisions
        for (j = 0; j < levels.length; j++) {
            if (!computeSlotSegCollisions(seg, levels[j]).length) {
                break;
            }
        }
        seg.level = j;
        (levels[j] || (levels[j] = [])).push(seg);
    }
    return levels;
}
// For every segment, figure out the other segments that are in subsequent
// levels that also occupy the same vertical space. Accumulate in seg.forwardSegs
function computeForwardSlotSegs(levels) {
    var i;
    var level;
    var j;
    var seg;
    var k;
    for (i = 0; i < levels.length; i++) {
        level = levels[i];
        for (j = 0; j < level.length; j++) {
            seg = level[j];
            seg.forwardSegs = [];
            for (k = i + 1; k < levels.length; k++) {
                computeSlotSegCollisions(seg, levels[k], seg.forwardSegs);
            }
        }
    }
}
// Figure out which path forward (via seg.forwardSegs) results in the longest path until
// the furthest edge is reached. The number of segments in this path will be seg.forwardPressure
function computeSlotSegPressures(seg) {
    var forwardSegs = seg.forwardSegs;
    var forwardPressure = 0;
    var i;
    var forwardSeg;
    if (seg.forwardPressure === undefined) { // not already computed
        for (i = 0; i < forwardSegs.length; i++) {
            forwardSeg = forwardSegs[i];
            // figure out the child's maximum forward path
            computeSlotSegPressures(forwardSeg);
            // either use the existing maximum, or use the child's forward pressure
            // plus one (for the forwardSeg itself)
            forwardPressure = Math.max(forwardPressure, 1 + forwardSeg.forwardPressure);
        }
        seg.forwardPressure = forwardPressure;
    }
}
// Find all the segments in `otherSegs` that vertically collide with `seg`.
// Append into an optionally-supplied `results` array and return.
function computeSlotSegCollisions(seg, otherSegs, results) {
    if (results === void 0) { results = []; }
    for (var i = 0; i < otherSegs.length; i++) {
        if (isSlotSegCollision(seg, otherSegs[i])) {
            results.push(otherSegs[i]);
        }
    }
    return results;
}
// Do these segments occupy the same vertical space?
function isSlotSegCollision(seg1, seg2) {
    return seg1.bottom > seg2.top && seg1.top < seg2.bottom;
}
function buildTimeGridSegCompareObj(seg) {
    var obj = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["buildSegCompareObj"])(seg);
    obj.forwardPressure = seg.forwardPressure;
    obj.backwardCoord = seg.backwardCoord;
    return obj;
}

var TimeGridMirrorRenderer = /** @class */ (function (_super) {
    __extends(TimeGridMirrorRenderer, _super);
    function TimeGridMirrorRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeGridMirrorRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
        this.segsByCol = this.timeGrid.groupSegsByCol(segs);
        this.timeGrid.attachSegsByCol(this.segsByCol, this.timeGrid.mirrorContainerEls);
        this.sourceSeg = mirrorInfo.sourceSeg;
    };
    TimeGridMirrorRenderer.prototype.generateSegCss = function (seg) {
        var props = _super.prototype.generateSegCss.call(this, seg);
        var sourceSeg = this.sourceSeg;
        if (sourceSeg && sourceSeg.col === seg.col) {
            var sourceSegProps = _super.prototype.generateSegCss.call(this, sourceSeg);
            props.left = sourceSegProps.left;
            props.right = sourceSegProps.right;
            props.marginLeft = sourceSegProps.marginLeft;
            props.marginRight = sourceSegProps.marginRight;
        }
        return props;
    };
    return TimeGridMirrorRenderer;
}(TimeGridEventRenderer));

var TimeGridFillRenderer = /** @class */ (function (_super) {
    __extends(TimeGridFillRenderer, _super);
    function TimeGridFillRenderer(timeGrid) {
        var _this = _super.call(this, timeGrid.context) || this;
        _this.timeGrid = timeGrid;
        return _this;
    }
    TimeGridFillRenderer.prototype.attachSegs = function (type, segs) {
        var timeGrid = this.timeGrid;
        var containerEls;
        // TODO: more efficient lookup
        if (type === 'bgEvent') {
            containerEls = timeGrid.bgContainerEls;
        }
        else if (type === 'businessHours') {
            containerEls = timeGrid.businessContainerEls;
        }
        else if (type === 'highlight') {
            containerEls = timeGrid.highlightContainerEls;
        }
        timeGrid.attachSegsByCol(timeGrid.groupSegsByCol(segs), containerEls);
        return segs.map(function (seg) {
            return seg.el;
        });
    };
    TimeGridFillRenderer.prototype.computeSegSizes = function (segs) {
        this.timeGrid.computeSegVerticals(segs);
    };
    TimeGridFillRenderer.prototype.assignSegSizes = function (segs) {
        this.timeGrid.assignSegVerticals(segs);
    };
    return TimeGridFillRenderer;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["FillRenderer"]));

/* A component that renders one or more columns of vertical time slots
----------------------------------------------------------------------------------------------------------------------*/
// potential nice values for the slot-duration and interval-duration
// from largest to smallest
var AGENDA_STOCK_SUB_DURATIONS = [
    { hours: 1 },
    { minutes: 30 },
    { minutes: 15 },
    { seconds: 30 },
    { seconds: 15 }
];
var TimeGrid = /** @class */ (function (_super) {
    __extends(TimeGrid, _super);
    function TimeGrid(context, el, renderProps) {
        var _this = _super.call(this, context, el) || this;
        _this.isSlatSizesDirty = false;
        _this.isColSizesDirty = false;
        _this.renderSlats = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderSlats);
        var eventRenderer = _this.eventRenderer = new TimeGridEventRenderer(_this);
        var fillRenderer = _this.fillRenderer = new TimeGridFillRenderer(_this);
        _this.mirrorRenderer = new TimeGridMirrorRenderer(_this);
        var renderColumns = _this.renderColumns = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderColumns, _this._unrenderColumns);
        _this.renderBusinessHours = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(fillRenderer.renderSegs.bind(fillRenderer, 'businessHours'), fillRenderer.unrender.bind(fillRenderer, 'businessHours'), [renderColumns]);
        _this.renderDateSelection = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderDateSelection, _this._unrenderDateSelection, [renderColumns]);
        _this.renderFgEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.renderSegs.bind(eventRenderer), eventRenderer.unrender.bind(eventRenderer), [renderColumns]);
        _this.renderBgEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(fillRenderer.renderSegs.bind(fillRenderer, 'bgEvent'), fillRenderer.unrender.bind(fillRenderer, 'bgEvent'), [renderColumns]);
        _this.renderEventSelection = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.selectByInstanceId.bind(eventRenderer), eventRenderer.unselectByInstanceId.bind(eventRenderer), [_this.renderFgEvents]);
        _this.renderEventDrag = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderEventDrag, _this._unrenderEventDrag, [renderColumns]);
        _this.renderEventResize = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderEventResize, _this._unrenderEventResize, [renderColumns]);
        _this.processOptions();
        el.innerHTML =
            '<div class="fc-bg"></div>' +
                '<div class="fc-slats"></div>' +
                '<hr class="fc-divider ' + _this.theme.getClass('widgetHeader') + '" style="display:none" />';
        _this.rootBgContainerEl = el.querySelector('.fc-bg');
        _this.slatContainerEl = el.querySelector('.fc-slats');
        _this.bottomRuleEl = el.querySelector('.fc-divider');
        _this.renderProps = renderProps;
        return _this;
    }
    /* Options
    ------------------------------------------------------------------------------------------------------------------*/
    // Parses various options into properties of this object
    TimeGrid.prototype.processOptions = function () {
        var slotDuration = this.opt('slotDuration');
        var snapDuration = this.opt('snapDuration');
        var snapsPerSlot;
        var input;
        slotDuration = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(slotDuration);
        snapDuration = snapDuration ? Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(snapDuration) : slotDuration;
        snapsPerSlot = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["wholeDivideDurations"])(slotDuration, snapDuration);
        if (snapsPerSlot === null) {
            snapDuration = slotDuration;
            snapsPerSlot = 1;
            // TODO: say warning?
        }
        this.slotDuration = slotDuration;
        this.snapDuration = snapDuration;
        this.snapsPerSlot = snapsPerSlot;
        // might be an array value (for TimelineView).
        // if so, getting the most granular entry (the last one probably).
        input = this.opt('slotLabelFormat');
        if (Array.isArray(input)) {
            input = input[input.length - 1];
        }
        this.labelFormat = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])(input || {
            hour: 'numeric',
            minute: '2-digit',
            omitZeroMinute: true,
            meridiem: 'short'
        });
        input = this.opt('slotLabelInterval');
        this.labelInterval = input ?
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(input) :
            this.computeLabelInterval(slotDuration);
    };
    // Computes an automatic value for slotLabelInterval
    TimeGrid.prototype.computeLabelInterval = function (slotDuration) {
        var i;
        var labelInterval;
        var slotsPerLabel;
        // find the smallest stock label interval that results in more than one slots-per-label
        for (i = AGENDA_STOCK_SUB_DURATIONS.length - 1; i >= 0; i--) {
            labelInterval = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(AGENDA_STOCK_SUB_DURATIONS[i]);
            slotsPerLabel = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["wholeDivideDurations"])(labelInterval, slotDuration);
            if (slotsPerLabel !== null && slotsPerLabel > 1) {
                return labelInterval;
            }
        }
        return slotDuration; // fall back
    };
    /* Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype.render = function (props) {
        var cells = props.cells;
        this.colCnt = cells.length;
        this.renderSlats(props.dateProfile);
        this.renderColumns(props.cells, props.dateProfile);
        this.renderBusinessHours(props.businessHourSegs);
        this.renderDateSelection(props.dateSelectionSegs);
        this.renderFgEvents(props.fgEventSegs);
        this.renderBgEvents(props.bgEventSegs);
        this.renderEventSelection(props.eventSelection);
        this.renderEventDrag(props.eventDrag);
        this.renderEventResize(props.eventResize);
    };
    TimeGrid.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        // should unrender everything else too
        this.renderSlats.unrender();
        this.renderColumns.unrender();
    };
    TimeGrid.prototype.updateSize = function (isResize) {
        var _a = this, fillRenderer = _a.fillRenderer, eventRenderer = _a.eventRenderer, mirrorRenderer = _a.mirrorRenderer;
        if (isResize || this.isSlatSizesDirty) {
            this.buildSlatPositions();
            this.isSlatSizesDirty = false;
        }
        if (isResize || this.isColSizesDirty) {
            this.buildColPositions();
            this.isColSizesDirty = false;
        }
        fillRenderer.computeSizes(isResize);
        eventRenderer.computeSizes(isResize);
        mirrorRenderer.computeSizes(isResize);
        fillRenderer.assignSizes(isResize);
        eventRenderer.assignSizes(isResize);
        mirrorRenderer.assignSizes(isResize);
    };
    TimeGrid.prototype._renderSlats = function (dateProfile) {
        var theme = this.theme;
        this.slatContainerEl.innerHTML =
            '<table class="' + theme.getClass('tableGrid') + '">' +
                this.renderSlatRowHtml(dateProfile) +
                '</table>';
        this.slatEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.slatContainerEl, 'tr');
        this.slatPositions = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["PositionCache"](this.el, this.slatEls, false, true // vertical
        );
        this.isSlatSizesDirty = true;
    };
    // Generates the HTML for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
    TimeGrid.prototype.renderSlatRowHtml = function (dateProfile) {
        var _a = this, dateEnv = _a.dateEnv, theme = _a.theme, isRtl = _a.isRtl;
        var html = '';
        var dayStart = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["startOfDay"])(dateProfile.renderRange.start);
        var slotTime = dateProfile.minTime;
        var slotIterator = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(0);
        var slotDate; // will be on the view's first day, but we only care about its time
        var isLabeled;
        var axisHtml;
        // Calculate the time for each slot
        while (Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["asRoughMs"])(slotTime) < Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["asRoughMs"])(dateProfile.maxTime)) {
            slotDate = dateEnv.add(dayStart, slotTime);
            isLabeled = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["wholeDivideDurations"])(slotIterator, this.labelInterval) !== null;
            axisHtml =
                '<td class="fc-axis fc-time ' + theme.getClass('widgetContent') + '">' +
                    (isLabeled ?
                        '<span>' + // for matchCellWidths
                            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(dateEnv.format(slotDate, this.labelFormat)) +
                            '</span>' :
                        '') +
                    '</td>';
            html +=
                '<tr data-time="' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["formatIsoTimeString"])(slotDate) + '"' +
                    (isLabeled ? '' : ' class="fc-minor"') +
                    '>' +
                    (!isRtl ? axisHtml : '') +
                    '<td class="' + theme.getClass('widgetContent') + '"></td>' +
                    (isRtl ? axisHtml : '') +
                    '</tr>';
            slotTime = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDurations"])(slotTime, this.slotDuration);
            slotIterator = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDurations"])(slotIterator, this.slotDuration);
        }
        return html;
    };
    TimeGrid.prototype._renderColumns = function (cells, dateProfile) {
        var _a = this, theme = _a.theme, dateEnv = _a.dateEnv, view = _a.view;
        var bgRow = new _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__["DayBgRow"](this.context);
        this.rootBgContainerEl.innerHTML =
            '<table class="' + theme.getClass('tableGrid') + '">' +
                bgRow.renderHtml({
                    cells: cells,
                    dateProfile: dateProfile,
                    renderIntroHtml: this.renderProps.renderBgIntroHtml
                }) +
                '</table>';
        this.colEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.el, '.fc-day, .fc-disabled-day');
        for (var col = 0; col < this.colCnt; col++) {
            this.publiclyTrigger('dayRender', [
                {
                    date: dateEnv.toDate(cells[col].date),
                    el: this.colEls[col],
                    view: view
                }
            ]);
        }
        if (this.isRtl) {
            this.colEls.reverse();
        }
        this.colPositions = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["PositionCache"](this.el, this.colEls, true, // horizontal
        false);
        this.renderContentSkeleton();
        this.isColSizesDirty = true;
    };
    TimeGrid.prototype._unrenderColumns = function () {
        this.unrenderContentSkeleton();
    };
    /* Content Skeleton
    ------------------------------------------------------------------------------------------------------------------*/
    // Renders the DOM that the view's content will live in
    TimeGrid.prototype.renderContentSkeleton = function () {
        var parts = [];
        var skeletonEl;
        parts.push(this.renderProps.renderIntroHtml());
        for (var i = 0; i < this.colCnt; i++) {
            parts.push('<td>' +
                '<div class="fc-content-col">' +
                '<div class="fc-event-container fc-mirror-container"></div>' +
                '<div class="fc-event-container"></div>' +
                '<div class="fc-highlight-container"></div>' +
                '<div class="fc-bgevent-container"></div>' +
                '<div class="fc-business-container"></div>' +
                '</div>' +
                '</td>');
        }
        if (this.isRtl) {
            parts.reverse();
        }
        skeletonEl = this.contentSkeletonEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlToElement"])('<div class="fc-content-skeleton">' +
            '<table>' +
            '<tr>' + parts.join('') + '</tr>' +
            '</table>' +
            '</div>');
        this.colContainerEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(skeletonEl, '.fc-content-col');
        this.mirrorContainerEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(skeletonEl, '.fc-mirror-container');
        this.fgContainerEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(skeletonEl, '.fc-event-container:not(.fc-mirror-container)');
        this.bgContainerEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(skeletonEl, '.fc-bgevent-container');
        this.highlightContainerEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(skeletonEl, '.fc-highlight-container');
        this.businessContainerEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(skeletonEl, '.fc-business-container');
        if (this.isRtl) {
            this.colContainerEls.reverse();
            this.mirrorContainerEls.reverse();
            this.fgContainerEls.reverse();
            this.bgContainerEls.reverse();
            this.highlightContainerEls.reverse();
            this.businessContainerEls.reverse();
        }
        this.el.appendChild(skeletonEl);
    };
    TimeGrid.prototype.unrenderContentSkeleton = function () {
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(this.contentSkeletonEl);
    };
    // Given a flat array of segments, return an array of sub-arrays, grouped by each segment's col
    TimeGrid.prototype.groupSegsByCol = function (segs) {
        var segsByCol = [];
        var i;
        for (i = 0; i < this.colCnt; i++) {
            segsByCol.push([]);
        }
        for (i = 0; i < segs.length; i++) {
            segsByCol[segs[i].col].push(segs[i]);
        }
        return segsByCol;
    };
    // Given segments grouped by column, insert the segments' elements into a parallel array of container
    // elements, each living within a column.
    TimeGrid.prototype.attachSegsByCol = function (segsByCol, containerEls) {
        var col;
        var segs;
        var i;
        for (col = 0; col < this.colCnt; col++) { // iterate each column grouping
            segs = segsByCol[col];
            for (i = 0; i < segs.length; i++) {
                containerEls[col].appendChild(segs[i].el);
            }
        }
    };
    /* Now Indicator
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype.getNowIndicatorUnit = function () {
        return 'minute'; // will refresh on the minute
    };
    TimeGrid.prototype.renderNowIndicator = function (segs, date) {
        // HACK: if date columns not ready for some reason (scheduler)
        if (!this.colContainerEls) {
            return;
        }
        var top = this.computeDateTop(date);
        var nodes = [];
        var i;
        // render lines within the columns
        for (i = 0; i < segs.length; i++) {
            var lineEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', { className: 'fc-now-indicator fc-now-indicator-line' });
            lineEl.style.top = top + 'px';
            this.colContainerEls[segs[i].col].appendChild(lineEl);
            nodes.push(lineEl);
        }
        // render an arrow over the axis
        if (segs.length > 0) { // is the current time in view?
            var arrowEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', { className: 'fc-now-indicator fc-now-indicator-arrow' });
            arrowEl.style.top = top + 'px';
            this.contentSkeletonEl.appendChild(arrowEl);
            nodes.push(arrowEl);
        }
        this.nowIndicatorEls = nodes;
    };
    TimeGrid.prototype.unrenderNowIndicator = function () {
        if (this.nowIndicatorEls) {
            this.nowIndicatorEls.forEach(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"]);
            this.nowIndicatorEls = null;
        }
    };
    /* Coordinates
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype.getTotalSlatHeight = function () {
        return this.slatContainerEl.getBoundingClientRect().height;
    };
    // Computes the top coordinate, relative to the bounds of the grid, of the given date.
    // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
    TimeGrid.prototype.computeDateTop = function (when, startOfDayDate) {
        if (!startOfDayDate) {
            startOfDayDate = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["startOfDay"])(when);
        }
        return this.computeTimeTop(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(when.valueOf() - startOfDayDate.valueOf()));
    };
    // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
    TimeGrid.prototype.computeTimeTop = function (duration) {
        var len = this.slatEls.length;
        var dateProfile = this.props.dateProfile;
        var slatCoverage = (duration.milliseconds - Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["asRoughMs"])(dateProfile.minTime)) / Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["asRoughMs"])(this.slotDuration); // floating-point value of # of slots covered
        var slatIndex;
        var slatRemainder;
        // compute a floating-point number for how many slats should be progressed through.
        // from 0 to number of slats (inclusive)
        // constrained because minTime/maxTime might be customized.
        slatCoverage = Math.max(0, slatCoverage);
        slatCoverage = Math.min(len, slatCoverage);
        // an integer index of the furthest whole slat
        // from 0 to number slats (*exclusive*, so len-1)
        slatIndex = Math.floor(slatCoverage);
        slatIndex = Math.min(slatIndex, len - 1);
        // how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
        // could be 1.0 if slatCoverage is covering *all* the slots
        slatRemainder = slatCoverage - slatIndex;
        return this.slatPositions.tops[slatIndex] +
            this.slatPositions.getHeight(slatIndex) * slatRemainder;
    };
    // For each segment in an array, computes and assigns its top and bottom properties
    TimeGrid.prototype.computeSegVerticals = function (segs) {
        var eventMinHeight = this.opt('timeGridEventMinHeight');
        var i;
        var seg;
        var dayDate;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            dayDate = this.props.cells[seg.col].date;
            seg.top = this.computeDateTop(seg.start, dayDate);
            seg.bottom = Math.max(seg.top + eventMinHeight, this.computeDateTop(seg.end, dayDate));
        }
    };
    // Given segments that already have their top/bottom properties computed, applies those values to
    // the segments' elements.
    TimeGrid.prototype.assignSegVerticals = function (segs) {
        var i;
        var seg;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(seg.el, this.generateSegVerticalCss(seg));
        }
    };
    // Generates an object with CSS properties for the top/bottom coordinates of a segment element
    TimeGrid.prototype.generateSegVerticalCss = function (seg) {
        return {
            top: seg.top,
            bottom: -seg.bottom // flipped because needs to be space beyond bottom edge of event container
        };
    };
    /* Sizing
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype.buildPositionCaches = function () {
        this.buildColPositions();
        this.buildSlatPositions();
    };
    TimeGrid.prototype.buildColPositions = function () {
        this.colPositions.build();
    };
    TimeGrid.prototype.buildSlatPositions = function () {
        this.slatPositions.build();
    };
    /* Hit System
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype.positionToHit = function (positionLeft, positionTop) {
        var _a = this, dateEnv = _a.dateEnv, snapsPerSlot = _a.snapsPerSlot, slatPositions = _a.slatPositions, colPositions = _a.colPositions;
        var colIndex = colPositions.leftToIndex(positionLeft);
        var slatIndex = slatPositions.topToIndex(positionTop);
        if (colIndex != null && slatIndex != null) {
            var slatTop = slatPositions.tops[slatIndex];
            var slatHeight = slatPositions.getHeight(slatIndex);
            var partial = (positionTop - slatTop) / slatHeight; // floating point number between 0 and 1
            var localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
            var snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
            var dayDate = this.props.cells[colIndex].date;
            var time = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDurations"])(this.props.dateProfile.minTime, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["multiplyDuration"])(this.snapDuration, snapIndex));
            var start = dateEnv.add(dayDate, time);
            var end = dateEnv.add(start, this.snapDuration);
            return {
                col: colIndex,
                dateSpan: {
                    range: { start: start, end: end },
                    allDay: false
                },
                dayEl: this.colEls[colIndex],
                relativeRect: {
                    left: colPositions.lefts[colIndex],
                    right: colPositions.rights[colIndex],
                    top: slatTop,
                    bottom: slatTop + slatHeight
                }
            };
        }
    };
    /* Event Drag Visualization
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype._renderEventDrag = function (state) {
        if (state) {
            this.eventRenderer.hideByHash(state.affectedInstances);
            if (state.isEvent) {
                this.mirrorRenderer.renderSegs(state.segs, { isDragging: true, sourceSeg: state.sourceSeg });
            }
            else {
                this.fillRenderer.renderSegs('highlight', state.segs);
            }
        }
    };
    TimeGrid.prototype._unrenderEventDrag = function (state) {
        if (state) {
            this.eventRenderer.showByHash(state.affectedInstances);
            this.mirrorRenderer.unrender(state.segs, { isDragging: true, sourceSeg: state.sourceSeg });
            this.fillRenderer.unrender('highlight');
        }
    };
    /* Event Resize Visualization
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype._renderEventResize = function (state) {
        if (state) {
            this.eventRenderer.hideByHash(state.affectedInstances);
            this.mirrorRenderer.renderSegs(state.segs, { isResizing: true, sourceSeg: state.sourceSeg });
        }
    };
    TimeGrid.prototype._unrenderEventResize = function (state) {
        if (state) {
            this.eventRenderer.showByHash(state.affectedInstances);
            this.mirrorRenderer.unrender(state.segs, { isResizing: true, sourceSeg: state.sourceSeg });
        }
    };
    /* Selection
    ------------------------------------------------------------------------------------------------------------------*/
    // Renders a visual indication of a selection. Overrides the default, which was to simply render a highlight.
    TimeGrid.prototype._renderDateSelection = function (segs) {
        if (segs) {
            if (this.opt('selectMirror')) {
                this.mirrorRenderer.renderSegs(segs, { isSelecting: true });
            }
            else {
                this.fillRenderer.renderSegs('highlight', segs);
            }
        }
    };
    TimeGrid.prototype._unrenderDateSelection = function (segs) {
        this.mirrorRenderer.unrender(segs, { isSelecting: true });
        this.fillRenderer.unrender('highlight');
    };
    return TimeGrid;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DateComponent"]));

var AllDaySplitter = /** @class */ (function (_super) {
    __extends(AllDaySplitter, _super);
    function AllDaySplitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AllDaySplitter.prototype.getKeyInfo = function () {
        return {
            allDay: {},
            timed: {}
        };
    };
    AllDaySplitter.prototype.getKeysForDateSpan = function (dateSpan) {
        if (dateSpan.allDay) {
            return ['allDay'];
        }
        else {
            return ['timed'];
        }
    };
    AllDaySplitter.prototype.getKeysForEventDef = function (eventDef) {
        if (!eventDef.allDay) {
            return ['timed'];
        }
        else if (Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["hasBgRendering"])(eventDef)) {
            return ['timed', 'allDay'];
        }
        else {
            return ['allDay'];
        }
    };
    return AllDaySplitter;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Splitter"]));

var TIMEGRID_ALL_DAY_EVENT_LIMIT = 5;
var WEEK_HEADER_FORMAT = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])({ week: 'short' });
/* An abstract class for all timegrid-related views. Displays one more columns with time slots running vertically.
----------------------------------------------------------------------------------------------------------------------*/
// Is a manager for the TimeGrid subcomponent and possibly the DayGrid subcomponent (if allDaySlot is on).
// Responsible for managing width/height.
var TimeGridView = /** @class */ (function (_super) {
    __extends(TimeGridView, _super);
    function TimeGridView(context, viewSpec, dateProfileGenerator, parentEl) {
        var _this = _super.call(this, context, viewSpec, dateProfileGenerator, parentEl) || this;
        _this.splitter = new AllDaySplitter();
        /* Header Render Methods
        ------------------------------------------------------------------------------------------------------------------*/
        // Generates the HTML that will go before the day-of week header cells
        _this.renderHeadIntroHtml = function () {
            var _a = _this, theme = _a.theme, dateEnv = _a.dateEnv;
            var range = _this.props.dateProfile.renderRange;
            var dayCnt = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["diffDays"])(range.start, range.end);
            var weekText;
            if (_this.opt('weekNumbers')) {
                weekText = dateEnv.format(range.start, WEEK_HEADER_FORMAT);
                return '' +
                    '<th class="fc-axis fc-week-number ' + theme.getClass('widgetHeader') + '" ' + _this.axisStyleAttr() + '>' +
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["buildGotoAnchorHtml"])(// aside from link, important for matchCellWidths
                    _this, { date: range.start, type: 'week', forceOff: dayCnt > 1 }, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(weekText) // inner HTML
                    ) +
                    '</th>';
            }
            else {
                return '<th class="fc-axis ' + theme.getClass('widgetHeader') + '" ' + _this.axisStyleAttr() + '></th>';
            }
        };
        /* Time Grid Render Methods
        ------------------------------------------------------------------------------------------------------------------*/
        // Generates the HTML that goes before the bg of the TimeGrid slot area. Long vertical column.
        _this.renderTimeGridBgIntroHtml = function () {
            var theme = _this.theme;
            return '<td class="fc-axis ' + theme.getClass('widgetContent') + '" ' + _this.axisStyleAttr() + '></td>';
        };
        // Generates the HTML that goes before all other types of cells.
        // Affects content-skeleton, mirror-skeleton, highlight-skeleton for both the time-grid and day-grid.
        _this.renderTimeGridIntroHtml = function () {
            return '<td class="fc-axis" ' + _this.axisStyleAttr() + '></td>';
        };
        /* Day Grid Render Methods
        ------------------------------------------------------------------------------------------------------------------*/
        // Generates the HTML that goes before the all-day cells
        _this.renderDayGridBgIntroHtml = function () {
            var theme = _this.theme;
            return '' +
                '<td class="fc-axis ' + theme.getClass('widgetContent') + '" ' + _this.axisStyleAttr() + '>' +
                '<span>' + // needed for matchCellWidths
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getAllDayHtml"])(_this) +
                '</span>' +
                '</td>';
        };
        // Generates the HTML that goes before all other types of cells.
        // Affects content-skeleton, mirror-skeleton, highlight-skeleton for both the time-grid and day-grid.
        _this.renderDayGridIntroHtml = function () {
            return '<td class="fc-axis" ' + _this.axisStyleAttr() + '></td>';
        };
        _this.el.classList.add('fc-timeGrid-view');
        _this.el.innerHTML = _this.renderSkeletonHtml();
        _this.scroller = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["ScrollComponent"]('hidden', // overflow x
        'auto' // overflow y
        );
        var timeGridWrapEl = _this.scroller.el;
        _this.el.querySelector('.fc-body > tr > td').appendChild(timeGridWrapEl);
        timeGridWrapEl.classList.add('fc-time-grid-container');
        var timeGridEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', { className: 'fc-time-grid' });
        timeGridWrapEl.appendChild(timeGridEl);
        _this.timeGrid = new TimeGrid(_this.context, timeGridEl, {
            renderBgIntroHtml: _this.renderTimeGridBgIntroHtml,
            renderIntroHtml: _this.renderTimeGridIntroHtml
        });
        if (_this.opt('allDaySlot')) { // should we display the "all-day" area?
            _this.dayGrid = new _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__["DayGrid"](// the all-day subcomponent of this view
            _this.context, _this.el.querySelector('.fc-day-grid'), {
                renderNumberIntroHtml: _this.renderDayGridIntroHtml,
                renderBgIntroHtml: _this.renderDayGridBgIntroHtml,
                renderIntroHtml: _this.renderDayGridIntroHtml,
                colWeekNumbersVisible: false,
                cellWeekNumbersVisible: false
            });
            // have the day-grid extend it's coordinate area over the <hr> dividing the two grids
            var dividerEl = _this.el.querySelector('.fc-divider');
            _this.dayGrid.bottomCoordPadding = dividerEl.getBoundingClientRect().height;
        }
        return _this;
    }
    TimeGridView.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.timeGrid.destroy();
        if (this.dayGrid) {
            this.dayGrid.destroy();
        }
        this.scroller.destroy();
    };
    /* Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    // Builds the HTML skeleton for the view.
    // The day-grid and time-grid components will render inside containers defined by this HTML.
    TimeGridView.prototype.renderSkeletonHtml = function () {
        var theme = this.theme;
        return '' +
            '<table class="' + theme.getClass('tableGrid') + '">' +
            (this.opt('columnHeader') ?
                '<thead class="fc-head">' +
                    '<tr>' +
                    '<td class="fc-head-container ' + theme.getClass('widgetHeader') + '">&nbsp;</td>' +
                    '</tr>' +
                    '</thead>' :
                '') +
            '<tbody class="fc-body">' +
            '<tr>' +
            '<td class="' + theme.getClass('widgetContent') + '">' +
            (this.opt('allDaySlot') ?
                '<div class="fc-day-grid"></div>' +
                    '<hr class="fc-divider ' + theme.getClass('widgetHeader') + '" />' :
                '') +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>';
    };
    /* Now Indicator
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGridView.prototype.getNowIndicatorUnit = function () {
        return this.timeGrid.getNowIndicatorUnit();
    };
    // subclasses should implement
    // renderNowIndicator(date: DateMarker) {
    // }
    TimeGridView.prototype.unrenderNowIndicator = function () {
        this.timeGrid.unrenderNowIndicator();
    };
    /* Dimensions
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGridView.prototype.updateSize = function (isResize, viewHeight, isAuto) {
        _super.prototype.updateSize.call(this, isResize, viewHeight, isAuto); // will call updateBaseSize. important that executes first
        this.timeGrid.updateSize(isResize);
        if (this.dayGrid) {
            this.dayGrid.updateSize(isResize);
        }
    };
    // Adjusts the vertical dimensions of the view to the specified values
    TimeGridView.prototype.updateBaseSize = function (isResize, viewHeight, isAuto) {
        var _this = this;
        var eventLimit;
        var scrollerHeight;
        var scrollbarWidths;
        // make all axis cells line up
        this.axisWidth = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["matchCellWidths"])(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.el, '.fc-axis'));
        // hack to give the view some height prior to timeGrid's columns being rendered
        // TODO: separate setting height from scroller VS timeGrid.
        if (!this.timeGrid.colEls) {
            if (!isAuto) {
                scrollerHeight = this.computeScrollerHeight(viewHeight);
                this.scroller.setHeight(scrollerHeight);
            }
            return;
        }
        // set of fake row elements that must compensate when scroller has scrollbars
        var noScrollRowEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.el, '.fc-row').filter(function (node) {
            return !_this.scroller.el.contains(node);
        });
        // reset all dimensions back to the original state
        this.timeGrid.bottomRuleEl.style.display = 'none'; // will be shown later if this <hr> is necessary
        this.scroller.clear(); // sets height to 'auto' and clears overflow
        noScrollRowEls.forEach(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["uncompensateScroll"]);
        // limit number of events in the all-day area
        if (this.dayGrid) {
            this.dayGrid.removeSegPopover(); // kill the "more" popover if displayed
            eventLimit = this.opt('eventLimit');
            if (eventLimit && typeof eventLimit !== 'number') {
                eventLimit = TIMEGRID_ALL_DAY_EVENT_LIMIT; // make sure "auto" goes to a real number
            }
            if (eventLimit) {
                this.dayGrid.limitRows(eventLimit);
            }
        }
        if (!isAuto) { // should we force dimensions of the scroll container?
            scrollerHeight = this.computeScrollerHeight(viewHeight);
            this.scroller.setHeight(scrollerHeight);
            scrollbarWidths = this.scroller.getScrollbarWidths();
            if (scrollbarWidths.left || scrollbarWidths.right) { // using scrollbars?
                // make the all-day and header rows lines up
                noScrollRowEls.forEach(function (rowEl) {
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["compensateScroll"])(rowEl, scrollbarWidths);
                });
                // the scrollbar compensation might have changed text flow, which might affect height, so recalculate
                // and reapply the desired height to the scroller.
                scrollerHeight = this.computeScrollerHeight(viewHeight);
                this.scroller.setHeight(scrollerHeight);
            }
            // guarantees the same scrollbar widths
            this.scroller.lockOverflow(scrollbarWidths);
            // if there's any space below the slats, show the horizontal rule.
            // this won't cause any new overflow, because lockOverflow already called.
            if (this.timeGrid.getTotalSlatHeight() < scrollerHeight) {
                this.timeGrid.bottomRuleEl.style.display = '';
            }
        }
    };
    // given a desired total height of the view, returns what the height of the scroller should be
    TimeGridView.prototype.computeScrollerHeight = function (viewHeight) {
        return viewHeight -
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["subtractInnerElHeight"])(this.el, this.scroller.el); // everything that's NOT the scroller
    };
    /* Scroll
    ------------------------------------------------------------------------------------------------------------------*/
    // Computes the initial pre-configured scroll state prior to allowing the user to change it
    TimeGridView.prototype.computeDateScroll = function (duration) {
        var top = this.timeGrid.computeTimeTop(duration);
        // zoom can give weird floating-point values. rather scroll a little bit further
        top = Math.ceil(top);
        if (top) {
            top++; // to overcome top border that slots beyond the first have. looks better
        }
        return { top: top };
    };
    TimeGridView.prototype.queryDateScroll = function () {
        return { top: this.scroller.getScrollTop() };
    };
    TimeGridView.prototype.applyDateScroll = function (scroll) {
        if (scroll.top !== undefined) {
            this.scroller.setScrollTop(scroll.top);
        }
    };
    // Generates an HTML attribute string for setting the width of the axis, if it is known
    TimeGridView.prototype.axisStyleAttr = function () {
        if (this.axisWidth != null) {
            return 'style="width:' + this.axisWidth + 'px"';
        }
        return '';
    };
    return TimeGridView;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["View"]));
TimeGridView.prototype.usesMinMaxTime = true; // indicates that minTime/maxTime affects rendering

var SimpleTimeGrid = /** @class */ (function (_super) {
    __extends(SimpleTimeGrid, _super);
    function SimpleTimeGrid(context, timeGrid) {
        var _this = _super.call(this, context, timeGrid.el) || this;
        _this.buildDayRanges = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(buildDayRanges);
        _this.slicer = new TimeGridSlicer();
        _this.timeGrid = timeGrid;
        context.calendar.registerInteractiveComponent(_this, {
            el: _this.timeGrid.el
        });
        return _this;
    }
    SimpleTimeGrid.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.calendar.unregisterInteractiveComponent(this);
    };
    SimpleTimeGrid.prototype.render = function (props) {
        var dateProfile = props.dateProfile, dayTable = props.dayTable;
        var dayRanges = this.dayRanges = this.buildDayRanges(dayTable, dateProfile, this.dateEnv);
        this.timeGrid.receiveProps(__assign({}, this.slicer.sliceProps(props, dateProfile, null, this.timeGrid, dayRanges), { dateProfile: dateProfile, cells: dayTable.cells[0] }));
    };
    SimpleTimeGrid.prototype.renderNowIndicator = function (date) {
        this.timeGrid.renderNowIndicator(this.slicer.sliceNowDate(date, this.timeGrid, this.dayRanges), date);
    };
    SimpleTimeGrid.prototype.buildPositionCaches = function () {
        this.timeGrid.buildPositionCaches();
    };
    SimpleTimeGrid.prototype.queryHit = function (positionLeft, positionTop) {
        var rawHit = this.timeGrid.positionToHit(positionLeft, positionTop);
        if (rawHit) {
            return {
                component: this.timeGrid,
                dateSpan: rawHit.dateSpan,
                dayEl: rawHit.dayEl,
                rect: {
                    left: rawHit.relativeRect.left,
                    right: rawHit.relativeRect.right,
                    top: rawHit.relativeRect.top,
                    bottom: rawHit.relativeRect.bottom
                },
                layer: 0
            };
        }
    };
    return SimpleTimeGrid;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DateComponent"]));
function buildDayRanges(dayTable, dateProfile, dateEnv) {
    var ranges = [];
    for (var _i = 0, _a = dayTable.headerDates; _i < _a.length; _i++) {
        var date = _a[_i];
        ranges.push({
            start: dateEnv.add(date, dateProfile.minTime),
            end: dateEnv.add(date, dateProfile.maxTime)
        });
    }
    return ranges;
}
var TimeGridSlicer = /** @class */ (function (_super) {
    __extends(TimeGridSlicer, _super);
    function TimeGridSlicer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeGridSlicer.prototype.sliceRange = function (range, dayRanges) {
        var segs = [];
        for (var col = 0; col < dayRanges.length; col++) {
            var segRange = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["intersectRanges"])(range, dayRanges[col]);
            if (segRange) {
                segs.push({
                    start: segRange.start,
                    end: segRange.end,
                    isStart: segRange.start.valueOf() === range.start.valueOf(),
                    isEnd: segRange.end.valueOf() === range.end.valueOf(),
                    col: col
                });
            }
        }
        return segs;
    };
    return TimeGridSlicer;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Slicer"]));

var TimeGridView$1 = /** @class */ (function (_super) {
    __extends(TimeGridView, _super);
    function TimeGridView(_context, viewSpec, dateProfileGenerator, parentEl) {
        var _this = _super.call(this, _context, viewSpec, dateProfileGenerator, parentEl) || this;
        _this.buildDayTable = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(buildDayTable);
        if (_this.opt('columnHeader')) {
            _this.header = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DayHeader"](_this.context, _this.el.querySelector('.fc-head-container'));
        }
        _this.simpleTimeGrid = new SimpleTimeGrid(_this.context, _this.timeGrid);
        if (_this.dayGrid) {
            _this.simpleDayGrid = new _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__["SimpleDayGrid"](_this.context, _this.dayGrid);
        }
        return _this;
    }
    TimeGridView.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        if (this.header) {
            this.header.destroy();
        }
        this.simpleTimeGrid.destroy();
        if (this.simpleDayGrid) {
            this.simpleDayGrid.destroy();
        }
    };
    TimeGridView.prototype.render = function (props) {
        _super.prototype.render.call(this, props); // for flags for updateSize
        var dateProfile = this.props.dateProfile;
        var dayTable = this.buildDayTable(dateProfile, this.dateProfileGenerator);
        var splitProps = this.splitter.splitProps(props);
        if (this.header) {
            this.header.receiveProps({
                dateProfile: dateProfile,
                dates: dayTable.headerDates,
                datesRepDistinctDays: true,
                renderIntroHtml: this.renderHeadIntroHtml
            });
        }
        this.simpleTimeGrid.receiveProps(__assign({}, splitProps['timed'], { dateProfile: dateProfile,
            dayTable: dayTable }));
        if (this.simpleDayGrid) {
            this.simpleDayGrid.receiveProps(__assign({}, splitProps['allDay'], { dateProfile: dateProfile,
                dayTable: dayTable, nextDayThreshold: this.nextDayThreshold, isRigid: false }));
        }
    };
    TimeGridView.prototype.renderNowIndicator = function (date) {
        this.simpleTimeGrid.renderNowIndicator(date);
    };
    return TimeGridView;
}(TimeGridView));
function buildDayTable(dateProfile, dateProfileGenerator) {
    var daySeries = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DaySeries"](dateProfile.renderRange, dateProfileGenerator);
    return new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DayTable"](daySeries, false);
}

var main = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
    defaultView: 'timeGridWeek',
    views: {
        timeGrid: {
            class: TimeGridView$1,
            allDaySlot: true,
            slotDuration: '00:30:00',
            slotEventOverlap: true // a bad name. confused with overlap/constraint system
        },
        timeGridDay: {
            type: 'timeGrid',
            duration: { days: 1 }
        },
        timeGridWeek: {
            type: 'timeGrid',
            duration: { weeks: 1 }
        }
    }
});

/* harmony default export */ __webpack_exports__["default"] = (main);



/***/ }),

/***/ "./node_modules/@fullcalendar/vue/main.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/@fullcalendar/vue/main.esm.js ***!
  \****************************************************/
/*! exports provided: default, install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/main.esm.js");
/*
FullCalendar Vue Component v4.3.1
Docs: https://fullcalendar.io/docs/vue
License: MIT
*/



function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
/*
Really simple clone utility. Only copies plain arrays, objects, and Dates. Transfers everything else as-is.
Wanted to use a third-party lib, but none did exactly this.
*/

function deepCopy(input) {
  if (Array.isArray(input)) {
    return input.map(deepCopy);
  } else if (input instanceof Date) {
    return new Date(input.valueOf());
  } else if (_typeof(input) === 'object' && input) {
    // non-null object
    return mapHash(input, deepCopy);
  } else {
    // everything else (null, function, etc)
    return input;
  }
}
function mapHash(input, func) {
  var output = {};

  for (var key in input) {
    if (hasOwnProperty.call(input, key)) {
      output[key] = func(input[key], key);
    }
  }

  return output;
}

/*
the docs point to this file as an index of options.
when this files is moved, update the docs.
*/

/*
TODO: figure out booleans so attributes can be defined like:
<FullCalendar editable />
*/
var PROP_DEFS = {
  header: {},
  footer: {},
  customButtons: {},
  buttonIcons: {},
  themeSystem: {},
  bootstrapFontAwesome: {},
  firstDay: {},
  dir: {},
  weekends: {},
  hiddenDays: {},
  fixedWeekCount: {},
  weekNumbers: {},
  weekNumbersWithinDays: {},
  weekNumberCalculation: {},
  businessHours: {},
  showNonCurrentDates: {},
  height: {},
  contentHeight: {},
  aspectRatio: {},
  handleWindowResize: {},
  windowResizeDelay: {},
  eventLimit: {},
  eventLimitClick: {},
  timeZone: {},
  now: {},
  defaultView: {},
  allDaySlot: {},
  allDayText: {},
  slotDuration: {},
  slotLabelFormat: {},
  slotLabelInterval: {},
  snapDuration: {},
  scrollTime: {},
  minTime: {},
  maxTime: {},
  slotEventOverlap: {},
  listDayFormat: {},
  listDayAltFormat: {},
  noEventsMessage: {},
  defaultDate: {},
  nowIndicator: {},
  visibleRange: {},
  validRange: {},
  dateIncrement: {},
  dateAlignment: {},
  duration: {},
  dayCount: {},
  locales: {},
  locale: {},
  eventTimeFormat: {},
  columnHeader: {},
  columnHeaderFormat: {},
  columnHeaderText: {},
  columnHeaderHtml: {},
  titleFormat: {},
  weekLabel: {},
  displayEventTime: {},
  displayEventEnd: {},
  eventLimitText: {},
  dayPopoverFormat: {},
  navLinks: {},
  navLinkDayClick: {},
  navLinkWeekClick: {},
  selectable: {},
  selectMirror: {},
  unselectAuto: {},
  unselectCancel: {},
  defaultAllDayEventDuration: {},
  defaultTimedEventDuration: {},
  cmdFormatter: {},
  defaultRangeSeparator: {},
  selectConstraint: {},
  selectOverlap: {},
  selectAllow: {},
  editable: {},
  eventStartEditable: {},
  eventDurationEditable: {},
  eventConstraint: {},
  eventOverlap: {},
  eventAllow: {},
  eventClassName: {},
  eventClassNames: {},
  eventBackgroundColor: {},
  eventBorderColor: {},
  eventTextColor: {},
  eventColor: {},
  events: {},
  eventSources: {},
  allDayDefault: {},
  startParam: {},
  endParam: {},
  lazyFetching: {},
  nextDayThreshold: {},
  eventOrder: {},
  rerenderDelay: {},
  dragRevertDuration: {},
  dragScroll: {},
  longPressDelay: {},
  eventLongPressDelay: {},
  droppable: {},
  dropAccept: {},
  eventDataTransform: {},
  allDayMaintainDuration: {},
  eventResizableFromStart: {},
  timeGridEventMinHeight: {},
  allDayHtml: {},
  eventDragMinDistance: {},
  eventResourceEditable: {},
  eventSourceFailure: {},
  eventSourceSuccess: {},
  forceEventDuration: {},
  progressiveEventRendering: {},
  selectLongPressDelay: {},
  selectMinDistance: {},
  timeZoneParam: {},
  titleRangeSeparator: {},
  // compound OptionsInput...
  buttonText: {},
  views: {},
  plugins: {},
  // scheduler...
  schedulerLicenseKey: {},
  resources: {},
  resourceLabelText: {},
  resourceOrder: {},
  filterResourcesWithEvents: {},
  resourceText: {},
  resourceGroupField: {},
  resourceGroupText: {},
  resourceAreaWidth: {},
  resourceColumns: {},
  resourcesInitiallyExpanded: {},
  slotWidth: {},
  datesAboveResources: {},
  googleCalendarApiKey: {},
  refetchResourcesOnNavigate: {},
  // used to be emissions but are now props...
  datesRender: {},
  datesDestroy: {},
  dayRender: {},
  eventRender: {},
  eventDestroy: {},
  viewSkeletonRender: {},
  viewSkeletonDestroy: {},
  resourceRender: {}
};
var PROP_IS_DEEP = {
  header: true,
  footer: true,
  events: true,
  eventSources: true,
  resources: true
};
var EMISSION_NAMES = ['windowResize', 'dateClick', 'eventClick', 'eventMouseEnter', 'eventMouseLeave', 'select', 'unselect', 'loading', 'eventPositioned', '_eventsPositioned', 'eventDragStart', 'eventDragStop', 'eventDrop', 'eventResizeStart', 'eventResizeStop', 'eventResize', 'drop', 'eventReceive', 'eventLeave', '_destroyed', // should now be props... (TODO: eventually remove)
'datesRender', 'datesDestroy', 'dayRender', 'eventRender', 'eventDestroy', 'viewSkeletonRender', 'viewSkeletonDestroy', 'resourceRender']; // identify deprecated emissions (TODO: eventually remove)

var EMISSION_USE_PROP = {
  datesRender: true,
  datesDestroy: true,
  dayRender: true,
  eventRender: true,
  eventDestroy: true,
  viewSkeletonRender: true,
  viewSkeletonDestroy: true,
  resourceRender: true
};

/*
VOCAB:
"props" are the values passed in from the parent (they are NOT listeners/emissions)
"emissions" are another way to say "events that will fire"
"options" are the options that the FullCalendar API accepts

NOTE: "deep" props are complex objects that we want to watch for internal changes.
Vue allows a reference to be internally mutated. Each time we detect a mutation,
we use deepCopy to freeze the state. This has the added benefit of stripping the
getter/setter methods that Vue embeds.
*/

var FullCalendarComponent = {
  props: PROP_DEFS,
  // INTERNALS
  // this.$options.calendar
  // this.$options.deepCopies - all current deep options
  // this.$options.dirtyOptions - null/undefined means nothing dirty
  data: function data() {
    return {
      renderId: 0,
      deepCopies: {}
    };
  },
  render: function render(createElement) {
    return createElement('div', {
      // when renderId is changed, Vue will trigger a real-DOM async rerender, calling beforeUpdate/updated
      attrs: {
        'data-fc-render-id': this.renderId
      }
    });
  },
  mounted: function mounted() {
    warnDeprecatedListeners(this.$listeners);
    this.$options.calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__["Calendar"](this.$el, this.buildCalendarOptions());
    this.$options.calendar.render();
  },
  beforeUpdate: function beforeUpdate() {
    this.renderDirty();
  },
  beforeDestroy: function beforeDestroy() {
    this.$options.calendar.destroy();
  },
  watch: mapHash(PROP_DEFS, buildPropWatcher),
  methods: {
    buildCalendarOptions: function buildCalendarOptions() {
      var _this = this;

      var options = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var emissionName = _step.value;

          options[emissionName] = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this.$emit.apply(_this, [emissionName].concat(args));
          };
        };

        for (var _iterator = EMISSION_NAMES[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        } // do after emissions. these props will override emissions with same name

      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      for (var propName in PROP_DEFS) {
        var propVal = this[propName]; // protect against FullCalendar choking on undefined options

        if (propVal !== undefined) {
          if (PROP_IS_DEEP[propName]) {
            propVal = deepCopy(propVal); // freeze state

            this.deepCopies[propName] = propVal; // side effect!
          }

          options[propName] = propVal;
        }
      }

      return options;
    },
    recordDirtyOption: function recordDirtyOption(optionName, newVal) {
      (this.$options.dirtyOptions || (this.$options.dirtyOptions = {}))[optionName] = newVal;
      this.renderId++; // triggers a render eventually
    },
    renderDirty: function renderDirty() {
      var dirtyOptions = this.$options.dirtyOptions;

      if (dirtyOptions) {
        this.$options.dirtyOptions = null; // clear before rendering. might trigger new dirtiness

        this.$options.calendar.mutateOptions(dirtyOptions, [], false, fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default.a);
      }
    },
    getApi: function getApi() {
      return this.$options.calendar;
    }
  }
};

function buildPropWatcher(propDef, propName) {
  if (PROP_IS_DEEP[propName]) {
    return {
      deep: true,
      // listen to children as well
      handler: function handler(newVal) {
        // use this instead of the handler's param because if same reference, will always be equal
        var oldVal = this.deepCopies[propName];

        if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(newVal, oldVal)) {
          newVal = deepCopy(newVal); // freeze state

          this.deepCopies[propName] = newVal; // always keep this up to date

          this.recordDirtyOption(propName, newVal);
        }
      }
    };
  } else {
    return function (newVal) {
      this.recordDirtyOption(propName, newVal);
    };
  }
}

function warnDeprecatedListeners(listenerHash) {
  for (var emissionName in listenerHash) {
    if (EMISSION_USE_PROP[emissionName]) {
      console.warn('Use of ' + emissionName + ' as an event is deprecated. Please convert to a prop.');
    }
  }
}

/*
Registers the component globally if appropriate.
This modules exposes the component AND an install function.

Derived from:
https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html
*/

var installed = false; // declare install function executed by Vue.use()

function install(Vue) {
  if (!installed) {
    installed = true;
    Vue.component('FullCalendar', FullCalendarComponent);
  }
} // detect a globally availble version of Vue (eg. in browser via <script> tag)

var GlobalVue;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
} // auto-install if possible


if (GlobalVue) {
  GlobalVue.use({
    install: install
  });
} // to allow use as module (npm/webpack/etc.) export component

/* harmony default export */ __webpack_exports__["default"] = (FullCalendarComponent);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@fullcalendar/core/main.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@fullcalendar/core/main.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n.fc {\n  direction: ltr;\n  text-align: left;\n}\n\n.fc-rtl {\n  text-align: right;\n}\n\nbody .fc {\n  /* extra precedence to overcome jqui */\n  font-size: 1em;\n}\n\n/* Colors\n--------------------------------------------------------------------------------------------------*/\n.fc-highlight {\n  /* when user is selecting cells */\n  background: #bce8f1;\n  opacity: 0.3;\n}\n\n.fc-bgevent {\n  /* default look for background events */\n  background: #8fdf82;\n  opacity: 0.3;\n}\n\n.fc-nonbusiness {\n  /* default look for non-business-hours areas */\n  /* will inherit .fc-bgevent's styles */\n  background: #d7d7d7;\n}\n\n/* Popover\n--------------------------------------------------------------------------------------------------*/\n.fc-popover {\n  position: absolute;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n}\n\n.fc-popover .fc-header {\n  /* TODO: be more consistent with fc-head/fc-body */\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px 4px;\n}\n\n.fc-rtl .fc-popover .fc-header {\n  flex-direction: row-reverse;\n}\n\n.fc-popover .fc-header .fc-title {\n  margin: 0 2px;\n}\n\n.fc-popover .fc-header .fc-close {\n  cursor: pointer;\n  opacity: 0.65;\n  font-size: 1.1em;\n}\n\n/* Misc Reusable Components\n--------------------------------------------------------------------------------------------------*/\n.fc-divider {\n  border-style: solid;\n  border-width: 1px;\n}\n\nhr.fc-divider {\n  height: 0;\n  margin: 0;\n  padding: 0 0 2px;\n  /* height is unreliable across browsers, so use padding */\n  border-width: 1px 0;\n}\n\n.fc-bg,\n.fc-bgevent-skeleton,\n.fc-highlight-skeleton,\n.fc-mirror-skeleton {\n  /* these element should always cling to top-left/right corners */\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.fc-bg {\n  bottom: 0;\n  /* strech bg to bottom edge */\n}\n\n.fc-bg table {\n  height: 100%;\n  /* strech bg to bottom edge */\n}\n\n/* Tables\n--------------------------------------------------------------------------------------------------*/\n.fc table {\n  width: 100%;\n  box-sizing: border-box;\n  /* fix scrollbar issue in firefox */\n  table-layout: fixed;\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 1em;\n  /* normalize cross-browser */\n}\n\n.fc th {\n  text-align: center;\n}\n\n.fc th,\n.fc td {\n  border-style: solid;\n  border-width: 1px;\n  padding: 0;\n  vertical-align: top;\n}\n\n.fc td.fc-today {\n  border-style: double;\n  /* overcome neighboring borders */\n}\n\n/* Internal Nav Links\n--------------------------------------------------------------------------------------------------*/\na[data-goto] {\n  cursor: pointer;\n}\n\na[data-goto]:hover {\n  text-decoration: underline;\n}\n\n/* Fake Table Rows\n--------------------------------------------------------------------------------------------------*/\n.fc .fc-row {\n  /* extra precedence to overcome themes forcing a 1px border */\n  /* no visible border by default. but make available if need be (scrollbar width compensation) */\n  border-style: solid;\n  border-width: 0;\n}\n\n.fc-row table {\n  /* don't put left/right border on anything within a fake row.\n     the outer tbody will worry about this */\n  border-left: 0 hidden transparent;\n  border-right: 0 hidden transparent;\n  /* no bottom borders on rows */\n  border-bottom: 0 hidden transparent;\n}\n\n.fc-row:first-child table {\n  border-top: 0 hidden transparent;\n  /* no top border on first row */\n}\n\n/* Day Row (used within the header and the DayGrid)\n--------------------------------------------------------------------------------------------------*/\n.fc-row {\n  position: relative;\n}\n\n.fc-row .fc-bg {\n  z-index: 1;\n}\n\n/* highlighting cells & background event skeleton */\n.fc-row .fc-bgevent-skeleton,\n.fc-row .fc-highlight-skeleton {\n  bottom: 0;\n  /* stretch skeleton to bottom of row */\n}\n\n.fc-row .fc-bgevent-skeleton table,\n.fc-row .fc-highlight-skeleton table {\n  height: 100%;\n  /* stretch skeleton to bottom of row */\n}\n\n.fc-row .fc-highlight-skeleton td,\n.fc-row .fc-bgevent-skeleton td {\n  border-color: transparent;\n}\n\n.fc-row .fc-bgevent-skeleton {\n  z-index: 2;\n}\n\n.fc-row .fc-highlight-skeleton {\n  z-index: 3;\n}\n\n/*\nrow content (which contains day/week numbers and events) as well as \"mirror\" (which contains\ntemporary rendered events).\n*/\n.fc-row .fc-content-skeleton {\n  position: relative;\n  z-index: 4;\n  padding-bottom: 2px;\n  /* matches the space above the events */\n}\n\n.fc-row .fc-mirror-skeleton {\n  z-index: 5;\n}\n\n.fc .fc-row .fc-content-skeleton table,\n.fc .fc-row .fc-content-skeleton td,\n.fc .fc-row .fc-mirror-skeleton td {\n  /* see-through to the background below */\n  /* extra precedence to prevent theme-provided backgrounds */\n  background: none;\n  /* in case <td>s are globally styled */\n  border-color: transparent;\n}\n\n.fc-row .fc-content-skeleton td,\n.fc-row .fc-mirror-skeleton td {\n  /* don't put a border between events and/or the day number */\n  border-bottom: 0;\n}\n\n.fc-row .fc-content-skeleton tbody td,\n.fc-row .fc-mirror-skeleton tbody td {\n  /* don't put a border between event cells */\n  border-top: 0;\n}\n\n/* Scrolling Container\n--------------------------------------------------------------------------------------------------*/\n.fc-scroller {\n  -webkit-overflow-scrolling: touch;\n}\n\n/* TODO: move to timegrid/daygrid */\n.fc-scroller > .fc-day-grid,\n.fc-scroller > .fc-time-grid {\n  position: relative;\n  /* re-scope all positions */\n  width: 100%;\n  /* hack to force re-sizing this inner element when scrollbars appear/disappear */\n}\n\n/* Global Event Styles\n--------------------------------------------------------------------------------------------------*/\n.fc-event {\n  position: relative;\n  /* for resize handle and other inner positioning */\n  display: block;\n  /* make the <a> tag block */\n  font-size: 0.85em;\n  line-height: 1.4;\n  border-radius: 3px;\n  border: 1px solid #3788d8;\n}\n\n.fc-event,\n.fc-event-dot {\n  background-color: #3788d8;\n  /* default BACKGROUND color */\n}\n\n.fc-event,\n.fc-event:hover {\n  color: #fff;\n  /* default TEXT color */\n  text-decoration: none;\n  /* if <a> has an href */\n}\n\n.fc-event[href],\n.fc-event.fc-draggable {\n  cursor: pointer;\n  /* give events with links and draggable events a hand mouse pointer */\n}\n\n.fc-not-allowed,\n.fc-not-allowed .fc-event {\n  /* to override an event's custom cursor */\n  cursor: not-allowed;\n}\n\n.fc-event .fc-content {\n  position: relative;\n  z-index: 2;\n}\n\n/* resizer (cursor AND touch devices) */\n.fc-event .fc-resizer {\n  position: absolute;\n  z-index: 4;\n}\n\n/* resizer (touch devices) */\n.fc-event .fc-resizer {\n  display: none;\n}\n\n.fc-event.fc-allow-mouse-resize .fc-resizer,\n.fc-event.fc-selected .fc-resizer {\n  /* only show when hovering or selected (with touch) */\n  display: block;\n}\n\n/* hit area */\n.fc-event.fc-selected .fc-resizer:before {\n  /* 40x40 touch area */\n  content: \"\";\n  position: absolute;\n  z-index: 9999;\n  /* user of this util can scope within a lower z-index */\n  top: 50%;\n  left: 50%;\n  width: 40px;\n  height: 40px;\n  margin-left: -20px;\n  margin-top: -20px;\n}\n\n/* Event Selection (only for touch devices)\n--------------------------------------------------------------------------------------------------*/\n.fc-event.fc-selected {\n  z-index: 9999 !important;\n  /* overcomes inline z-index */\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n.fc-event.fc-selected:after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  /* same z-index as fc-bg, behind text */\n  /* overcome the borders */\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  left: -1px;\n  /* darkening effect */\n  background: #000;\n  opacity: 0.25;\n}\n\n/* Event Dragging\n--------------------------------------------------------------------------------------------------*/\n.fc-event.fc-dragging.fc-selected {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);\n}\n\n.fc-event.fc-dragging:not(.fc-selected) {\n  opacity: 0.75;\n}\n\n/* Horizontal Events\n--------------------------------------------------------------------------------------------------*/\n/* bigger touch area when selected */\n.fc-h-event.fc-selected:before {\n  content: \"\";\n  position: absolute;\n  z-index: 3;\n  /* below resizers */\n  top: -10px;\n  bottom: -10px;\n  left: 0;\n  right: 0;\n}\n\n/* events that are continuing to/from another week. kill rounded corners and butt up against edge */\n.fc-ltr .fc-h-event.fc-not-start,\n.fc-rtl .fc-h-event.fc-not-end {\n  margin-left: 0;\n  border-left-width: 0;\n  padding-left: 1px;\n  /* replace the border with padding */\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.fc-ltr .fc-h-event.fc-not-end,\n.fc-rtl .fc-h-event.fc-not-start {\n  margin-right: 0;\n  border-right-width: 0;\n  padding-right: 1px;\n  /* replace the border with padding */\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n/* resizer (cursor AND touch devices) */\n/* left resizer  */\n.fc-ltr .fc-h-event .fc-start-resizer,\n.fc-rtl .fc-h-event .fc-end-resizer {\n  cursor: w-resize;\n  left: -1px;\n  /* overcome border */\n}\n\n/* right resizer */\n.fc-ltr .fc-h-event .fc-end-resizer,\n.fc-rtl .fc-h-event .fc-start-resizer {\n  cursor: e-resize;\n  right: -1px;\n  /* overcome border */\n}\n\n/* resizer (mouse devices) */\n.fc-h-event.fc-allow-mouse-resize .fc-resizer {\n  width: 7px;\n  top: -1px;\n  /* overcome top border */\n  bottom: -1px;\n  /* overcome bottom border */\n}\n\n/* resizer (touch devices) */\n.fc-h-event.fc-selected .fc-resizer {\n  /* 8x8 little dot */\n  border-radius: 4px;\n  border-width: 1px;\n  width: 6px;\n  height: 6px;\n  border-style: solid;\n  border-color: inherit;\n  background: #fff;\n  /* vertically center */\n  top: 50%;\n  margin-top: -4px;\n}\n\n/* left resizer  */\n.fc-ltr .fc-h-event.fc-selected .fc-start-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-end-resizer {\n  margin-left: -4px;\n  /* centers the 8x8 dot on the left edge */\n}\n\n/* right resizer */\n.fc-ltr .fc-h-event.fc-selected .fc-end-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-start-resizer {\n  margin-right: -4px;\n  /* centers the 8x8 dot on the right edge */\n}\n\n/* DayGrid events\n----------------------------------------------------------------------------------------------------\nWe use the full \"fc-day-grid-event\" class instead of using descendants because the event won't\nbe a descendant of the grid when it is being dragged.\n*/\n.fc-day-grid-event {\n  margin: 1px 2px 0;\n  /* spacing between events and edges */\n  padding: 0 1px;\n}\n\ntr:first-child > td > .fc-day-grid-event {\n  margin-top: 2px;\n  /* a little bit more space before the first event */\n}\n\n.fc-mirror-skeleton tr:first-child > td > .fc-day-grid-event {\n  margin-top: 0;\n  /* except for mirror skeleton */\n}\n\n.fc-day-grid-event .fc-content {\n  /* force events to be one-line tall */\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.fc-day-grid-event .fc-time {\n  font-weight: bold;\n}\n\n/* resizer (cursor devices) */\n/* left resizer  */\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer {\n  margin-left: -2px;\n  /* to the day cell's edge */\n}\n\n/* right resizer */\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer {\n  margin-right: -2px;\n  /* to the day cell's edge */\n}\n\n/* Event Limiting\n--------------------------------------------------------------------------------------------------*/\n/* \"more\" link that represents hidden events */\na.fc-more {\n  margin: 1px 3px;\n  font-size: 0.85em;\n  cursor: pointer;\n  text-decoration: none;\n}\n\na.fc-more:hover {\n  text-decoration: underline;\n}\n\n.fc-limited {\n  /* rows and cells that are hidden because of a \"more\" link */\n  display: none;\n}\n\n/* popover that appears when \"more\" link is clicked */\n.fc-day-grid .fc-row {\n  z-index: 1;\n  /* make the \"more\" popover one higher than this */\n}\n\n.fc-more-popover {\n  z-index: 2;\n  width: 220px;\n}\n\n.fc-more-popover .fc-event-container {\n  padding: 10px;\n}\n\n/* Now Indicator\n--------------------------------------------------------------------------------------------------*/\n.fc-now-indicator {\n  position: absolute;\n  border: 0 solid red;\n}\n\n/* Utilities\n--------------------------------------------------------------------------------------------------*/\n.fc-unselectable {\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n/*\nTODO: more distinction between this file and common.css\n*/\n/* Colors\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed th,\n.fc-unthemed td,\n.fc-unthemed thead,\n.fc-unthemed tbody,\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-row,\n.fc-unthemed .fc-content,\n.fc-unthemed .fc-popover,\n.fc-unthemed .fc-list-view,\n.fc-unthemed .fc-list-heading td {\n  border-color: #ddd;\n}\n\n.fc-unthemed .fc-popover {\n  background-color: #fff;\n}\n\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-popover .fc-header,\n.fc-unthemed .fc-list-heading td {\n  background: #eee;\n}\n\n.fc-unthemed td.fc-today {\n  background: #fcf8e3;\n}\n\n.fc-unthemed .fc-disabled-day {\n  background: #d7d7d7;\n  opacity: 0.3;\n}\n\n/* Icons\n--------------------------------------------------------------------------------------------------\nfrom https://feathericons.com/ and built with IcoMoon\n*/\n@font-face {\n  font-family: \"fcicons\";\n  src: url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n.fc-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"fcicons\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.fc-icon-chevron-left:before {\n  content: \"\";\n}\n\n.fc-icon-chevron-right:before {\n  content: \"\";\n}\n\n.fc-icon-chevrons-left:before {\n  content: \"\";\n}\n\n.fc-icon-chevrons-right:before {\n  content: \"\";\n}\n\n.fc-icon-minus-square:before {\n  content: \"\";\n}\n\n.fc-icon-plus-square:before {\n  content: \"\";\n}\n\n.fc-icon-x:before {\n  content: \"\";\n}\n\n.fc-icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  text-align: center;\n}\n\n/* Buttons\n--------------------------------------------------------------------------------------------------\nLots taken from Flatly (MIT): https://bootswatch.com/4/flatly/bootstrap.css\n*/\n/* reset */\n.fc-button {\n  border-radius: 0;\n  overflow: visible;\n  text-transform: none;\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.fc-button:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\n.fc-button {\n  -webkit-appearance: button;\n}\n\n.fc-button:not(:disabled) {\n  cursor: pointer;\n}\n\n.fc-button::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n/* theme */\n.fc-button {\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.4em 0.65em;\n  font-size: 1em;\n  line-height: 1.5;\n  border-radius: 0.25em;\n}\n\n.fc-button:hover {\n  color: #212529;\n  text-decoration: none;\n}\n\n.fc-button:focus {\n  outline: 0;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.25);\n  box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.25);\n}\n\n.fc-button:disabled {\n  opacity: 0.65;\n}\n\n/* \"primary\" coloring */\n.fc-button-primary {\n  color: #fff;\n  background-color: #2C3E50;\n  border-color: #2C3E50;\n}\n\n.fc-button-primary:hover {\n  color: #fff;\n  background-color: #1e2b37;\n  border-color: #1a252f;\n}\n\n.fc-button-primary:focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n  box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n}\n\n.fc-button-primary:disabled {\n  color: #fff;\n  background-color: #2C3E50;\n  border-color: #2C3E50;\n}\n\n.fc-button-primary:not(:disabled):active,\n.fc-button-primary:not(:disabled).fc-button-active {\n  color: #fff;\n  background-color: #1a252f;\n  border-color: #151e27;\n}\n\n.fc-button-primary:not(:disabled):active:focus,\n.fc-button-primary:not(:disabled).fc-button-active:focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n  box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n}\n\n/* icons within buttons */\n.fc-button .fc-icon {\n  vertical-align: middle;\n  font-size: 1.5em;\n}\n\n/* Buttons Groups\n--------------------------------------------------------------------------------------------------*/\n.fc-button-group {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.fc-button-group > .fc-button {\n  position: relative;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n}\n\n.fc-button-group > .fc-button:hover {\n  z-index: 1;\n}\n\n.fc-button-group > .fc-button:focus,\n.fc-button-group > .fc-button:active,\n.fc-button-group > .fc-button.fc-button-active {\n  z-index: 1;\n}\n\n.fc-button-group > .fc-button:not(:first-child) {\n  margin-left: -1px;\n}\n\n.fc-button-group > .fc-button:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.fc-button-group > .fc-button:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n/* Popover\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed .fc-popover {\n  border-width: 1px;\n  border-style: solid;\n}\n\n/* List View\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed .fc-list-item:hover td {\n  background-color: #f5f5f5;\n}\n\n/* Toolbar\n--------------------------------------------------------------------------------------------------*/\n.fc-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.fc-toolbar.fc-header-toolbar {\n  margin-bottom: 1.5em;\n}\n\n.fc-toolbar.fc-footer-toolbar {\n  margin-top: 1.5em;\n}\n\n/* inner content */\n.fc-toolbar > * > :not(:first-child) {\n  margin-left: 0.75em;\n}\n\n.fc-toolbar h2 {\n  font-size: 1.75em;\n  margin: 0;\n}\n\n/* View Structure\n--------------------------------------------------------------------------------------------------*/\n.fc-view-container {\n  position: relative;\n}\n\n/* undo twitter bootstrap's box-sizing rules. normalizes positioning techniques */\n/* don't do this for the toolbar because we'll want bootstrap to style those buttons as some pt */\n.fc-view-container *,\n.fc-view-container *:before,\n.fc-view-container *:after {\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.fc-view,\n.fc-view > table {\n  /* so dragged elements can be above the view's main element */\n  position: relative;\n  z-index: 1;\n}\n\n@media print {\n  .fc {\n    max-width: 100% !important;\n  }\n\n  /* Global Event Restyling\n  --------------------------------------------------------------------------------------------------*/\n  .fc-event {\n    background: #fff !important;\n    color: #000 !important;\n    page-break-inside: avoid;\n  }\n\n  .fc-event .fc-resizer {\n    display: none;\n  }\n\n  /* Table & Day-Row Restyling\n  --------------------------------------------------------------------------------------------------*/\n  .fc th,\n.fc td,\n.fc hr,\n.fc thead,\n.fc tbody,\n.fc-row {\n    border-color: #ccc !important;\n    background: #fff !important;\n  }\n\n  /* kill the overlaid, absolutely-positioned components */\n  /* common... */\n  .fc-bg,\n.fc-bgevent-skeleton,\n.fc-highlight-skeleton,\n.fc-mirror-skeleton,\n.fc-bgevent-container,\n.fc-business-container,\n.fc-highlight-container,\n.fc-mirror-container {\n    display: none;\n  }\n\n  /* don't force a min-height on rows (for DayGrid) */\n  .fc tbody .fc-row {\n    height: auto !important;\n    /* undo height that JS set in distributeHeight */\n    min-height: 0 !important;\n    /* undo the min-height from each view's specific stylesheet */\n  }\n\n  .fc tbody .fc-row .fc-content-skeleton {\n    position: static;\n    /* undo .fc-rigid */\n    padding-bottom: 0 !important;\n    /* use a more border-friendly method for this... */\n  }\n\n  .fc tbody .fc-row .fc-content-skeleton tbody tr:last-child td {\n    /* only works in newer browsers */\n    padding-bottom: 1em;\n    /* ...gives space within the skeleton. also ensures min height in a way */\n  }\n\n  .fc tbody .fc-row .fc-content-skeleton table {\n    /* provides a min-height for the row, but only effective for IE, which exaggerates this value,\n       making it look more like 3em. for other browers, it will already be this tall */\n    height: 1em;\n  }\n\n  /* Undo month-view event limiting. Display all events and hide the \"more\" links\n  --------------------------------------------------------------------------------------------------*/\n  .fc-more-cell,\n.fc-more {\n    display: none !important;\n  }\n\n  .fc tr.fc-limited {\n    display: table-row !important;\n  }\n\n  .fc td.fc-limited {\n    display: table-cell !important;\n  }\n\n  .fc-popover {\n    display: none;\n    /* never display the \"more..\" popover in print mode */\n  }\n\n  /* TimeGrid Restyling\n  --------------------------------------------------------------------------------------------------*/\n  /* undo the min-height 100% trick used to fill the container's height */\n  .fc-time-grid {\n    min-height: 0 !important;\n  }\n\n  /* don't display the side axis at all (\"all-day\" and time cells) */\n  .fc-timeGrid-view .fc-axis {\n    display: none;\n  }\n\n  /* don't display the horizontal lines */\n  .fc-slats,\n.fc-time-grid hr {\n    /* this hr is used when height is underused and needs to be filled */\n    display: none !important;\n    /* important overrides inline declaration */\n  }\n\n  /* let the container that holds the events be naturally positioned and create real height */\n  .fc-time-grid .fc-content-skeleton {\n    position: static;\n  }\n\n  /* in case there are no events, we still want some height */\n  .fc-time-grid .fc-content-skeleton table {\n    height: 4em;\n  }\n\n  /* kill the horizontal spacing made by the event container. event margins will be done below */\n  .fc-time-grid .fc-event-container {\n    margin: 0 !important;\n  }\n\n  /* TimeGrid *Event* Restyling\n  --------------------------------------------------------------------------------------------------*/\n  /* naturally position events, vertically stacking them */\n  .fc-time-grid .fc-event {\n    position: static !important;\n    margin: 3px 2px !important;\n  }\n\n  /* for events that continue to a future day, give the bottom border back */\n  .fc-time-grid .fc-event.fc-not-end {\n    border-bottom-width: 1px !important;\n  }\n\n  /* indicate the event continues via \"...\" text */\n  .fc-time-grid .fc-event.fc-not-end:after {\n    content: \"...\";\n  }\n\n  /* for events that are continuations from previous days, give the top border back */\n  .fc-time-grid .fc-event.fc-not-start {\n    border-top-width: 1px !important;\n  }\n\n  /* indicate the event is a continuation via \"...\" text */\n  .fc-time-grid .fc-event.fc-not-start:before {\n    content: \"...\";\n  }\n\n  /* time */\n  /* undo a previous declaration and let the time text span to a second line */\n  .fc-time-grid .fc-event .fc-time {\n    white-space: normal !important;\n  }\n\n  /* hide the the time that is normally displayed... */\n  .fc-time-grid .fc-event .fc-time span {\n    display: none;\n  }\n\n  /* ...replace it with a more verbose version (includes AM/PM) stored in an html attribute */\n  .fc-time-grid .fc-event .fc-time:after {\n    content: attr(data-full);\n  }\n\n  /* Vertical Scroller & Containers\n  --------------------------------------------------------------------------------------------------*/\n  /* kill the scrollbars and allow natural height */\n  .fc-scroller,\n.fc-day-grid-container,\n.fc-time-grid-container {\n    /* */\n    overflow: visible !important;\n    height: auto !important;\n  }\n\n  /* kill the horizontal border/padding used to compensate for scrollbars */\n  .fc-row {\n    border: 0 !important;\n    margin: 0 !important;\n  }\n\n  /* Button Controls\n  --------------------------------------------------------------------------------------------------*/\n  .fc-button-group,\n.fc button {\n    display: none;\n    /* don't display any button-related controls */\n  }\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@fullcalendar/daygrid/main.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@fullcalendar/daygrid/main.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* DayGridView\n--------------------------------------------------------------------------------------------------*/\n/* day row structure */\n.fc-dayGridWeek-view .fc-content-skeleton,\n.fc-dayGridDay-view .fc-content-skeleton {\n  /* there may be week numbers in these views, so no padding-top */\n  padding-bottom: 1em;\n  /* ensure a space at bottom of cell for user selecting/clicking */\n}\n\n.fc-dayGrid-view .fc-body .fc-row {\n  min-height: 4em;\n  /* ensure that all rows are at least this tall */\n}\n\n/* a \"rigid\" row will take up a constant amount of height because content-skeleton is absolute */\n.fc-row.fc-rigid {\n  overflow: hidden;\n}\n\n.fc-row.fc-rigid .fc-content-skeleton {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n/* week and day number styling */\n.fc-day-top.fc-other-month {\n  opacity: 0.3;\n}\n\n.fc-dayGrid-view .fc-week-number,\n.fc-dayGrid-view .fc-day-number {\n  padding: 2px;\n}\n\n.fc-dayGrid-view th.fc-week-number,\n.fc-dayGrid-view th.fc-day-number {\n  padding: 0 2px;\n  /* column headers can't have as much v space */\n}\n\n.fc-ltr .fc-dayGrid-view .fc-day-top .fc-day-number {\n  float: right;\n}\n\n.fc-rtl .fc-dayGrid-view .fc-day-top .fc-day-number {\n  float: left;\n}\n\n.fc-ltr .fc-dayGrid-view .fc-day-top .fc-week-number {\n  float: left;\n  border-radius: 0 0 3px 0;\n}\n\n.fc-rtl .fc-dayGrid-view .fc-day-top .fc-week-number {\n  float: right;\n  border-radius: 0 0 0 3px;\n}\n\n.fc-dayGrid-view .fc-day-top .fc-week-number {\n  min-width: 1.5em;\n  text-align: center;\n  background-color: #f2f2f2;\n  color: #808080;\n}\n\n/* when week/day number have own column */\n.fc-dayGrid-view td.fc-week-number {\n  text-align: center;\n}\n\n.fc-dayGrid-view td.fc-week-number > * {\n  /* work around the way we do column resizing and ensure a minimum width */\n  display: inline-block;\n  min-width: 1.25em;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@fullcalendar/list/main.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@fullcalendar/list/main.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* List View\n--------------------------------------------------------------------------------------------------*/\n/* possibly reusable */\n.fc-event-dot {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 5px;\n}\n\n/* view wrapper */\n.fc-rtl .fc-list-view {\n  direction: rtl;\n  /* unlike core views, leverage browser RTL */\n}\n\n.fc-list-view {\n  border-width: 1px;\n  border-style: solid;\n}\n\n/* table resets */\n.fc .fc-list-table {\n  table-layout: auto;\n  /* for shrinkwrapping cell content */\n}\n\n.fc-list-table td {\n  border-width: 1px 0 0;\n  padding: 8px 14px;\n}\n\n.fc-list-table tr:first-child td {\n  border-top-width: 0;\n}\n\n/* day headings with the list */\n.fc-list-heading {\n  border-bottom-width: 1px;\n}\n\n.fc-list-heading td {\n  font-weight: bold;\n}\n\n.fc-ltr .fc-list-heading-main {\n  float: left;\n}\n\n.fc-ltr .fc-list-heading-alt {\n  float: right;\n}\n\n.fc-rtl .fc-list-heading-main {\n  float: right;\n}\n\n.fc-rtl .fc-list-heading-alt {\n  float: left;\n}\n\n/* event list items */\n.fc-list-item.fc-has-url {\n  cursor: pointer;\n  /* whole row will be clickable */\n}\n\n.fc-list-item-marker,\n.fc-list-item-time {\n  white-space: nowrap;\n  width: 1px;\n}\n\n/* make the dot closer to the event title */\n.fc-ltr .fc-list-item-marker {\n  padding-right: 0;\n}\n\n.fc-rtl .fc-list-item-marker {\n  padding-left: 0;\n}\n\n.fc-list-item-title a {\n  /* every event title cell has an <a> tag */\n  text-decoration: none;\n  color: inherit;\n}\n\n.fc-list-item-title a[href]:hover {\n  /* hover effect only on titles with hrefs */\n  text-decoration: underline;\n}\n\n/* message when no events */\n.fc-list-empty-wrap2 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.fc-list-empty-wrap1 {\n  width: 100%;\n  height: 100%;\n  display: table;\n}\n\n.fc-list-empty {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n}\n\n.fc-unthemed .fc-list-empty {\n  /* theme will provide own background */\n  background-color: #eee;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@fullcalendar/timegrid/main.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@fullcalendar/timegrid/main.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/* TimeGridView all-day area\n--------------------------------------------------------------------------------------------------*/\n.fc-timeGrid-view .fc-day-grid {\n  position: relative;\n  z-index: 2;\n  /* so the \"more..\" popover will be over the time grid */\n}\n\n.fc-timeGrid-view .fc-day-grid .fc-row {\n  min-height: 3em;\n  /* all-day section will never get shorter than this */\n}\n\n.fc-timeGrid-view .fc-day-grid .fc-row .fc-content-skeleton {\n  padding-bottom: 1em;\n  /* give space underneath events for clicking/selecting days */\n}\n\n/* TimeGrid axis running down the side (for both the all-day area and the slot area)\n--------------------------------------------------------------------------------------------------*/\n.fc .fc-axis {\n  /* .fc to overcome default cell styles */\n  vertical-align: middle;\n  padding: 0 4px;\n  white-space: nowrap;\n}\n\n.fc-ltr .fc-axis {\n  text-align: right;\n}\n\n.fc-rtl .fc-axis {\n  text-align: left;\n}\n\n/* TimeGrid Structure\n--------------------------------------------------------------------------------------------------*/\n.fc-time-grid-container,\n.fc-time-grid {\n  /* so slats/bg/content/etc positions get scoped within here */\n  position: relative;\n  z-index: 1;\n}\n\n.fc-time-grid {\n  min-height: 100%;\n  /* so if height setting is 'auto', .fc-bg stretches to fill height */\n}\n\n.fc-time-grid table {\n  /* don't put outer borders on slats/bg/content/etc */\n  border: 0 hidden transparent;\n}\n\n.fc-time-grid > .fc-bg {\n  z-index: 1;\n}\n\n.fc-time-grid .fc-slats,\n.fc-time-grid > hr {\n  /* the <hr> TimeGridView injects when grid is shorter than scroller */\n  position: relative;\n  z-index: 2;\n}\n\n.fc-time-grid .fc-content-col {\n  position: relative;\n  /* because now-indicator lives directly inside */\n}\n\n.fc-time-grid .fc-content-skeleton {\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n/* divs within a cell within the fc-content-skeleton */\n.fc-time-grid .fc-business-container {\n  position: relative;\n  z-index: 1;\n}\n\n.fc-time-grid .fc-bgevent-container {\n  position: relative;\n  z-index: 2;\n}\n\n.fc-time-grid .fc-highlight-container {\n  position: relative;\n  z-index: 3;\n}\n\n.fc-time-grid .fc-event-container {\n  position: relative;\n  z-index: 4;\n}\n\n.fc-time-grid .fc-now-indicator-line {\n  z-index: 5;\n}\n\n.fc-time-grid .fc-mirror-container {\n  /* also is fc-event-container */\n  position: relative;\n  z-index: 6;\n}\n\n/* TimeGrid Slats (lines that run horizontally)\n--------------------------------------------------------------------------------------------------*/\n.fc-time-grid .fc-slats td {\n  height: 1.5em;\n  border-bottom: 0;\n  /* each cell is responsible for its top border */\n}\n\n.fc-time-grid .fc-slats .fc-minor td {\n  border-top-style: dotted;\n}\n\n/* TimeGrid Highlighting Slots\n--------------------------------------------------------------------------------------------------*/\n.fc-time-grid .fc-highlight-container {\n  /* a div within a cell within the fc-highlight-skeleton */\n  position: relative;\n  /* scopes the left/right of the fc-highlight to be in the column */\n}\n\n.fc-time-grid .fc-highlight {\n  position: absolute;\n  left: 0;\n  right: 0;\n  /* top and bottom will be in by JS */\n}\n\n/* TimeGrid Event Containment\n--------------------------------------------------------------------------------------------------*/\n.fc-ltr .fc-time-grid .fc-event-container {\n  /* space on the sides of events for LTR (default) */\n  margin: 0 2.5% 0 2px;\n}\n\n.fc-rtl .fc-time-grid .fc-event-container {\n  /* space on the sides of events for RTL */\n  margin: 0 2px 0 2.5%;\n}\n\n.fc-time-grid .fc-event,\n.fc-time-grid .fc-bgevent {\n  position: absolute;\n  z-index: 1;\n  /* scope inner z-index's */\n}\n\n.fc-time-grid .fc-bgevent {\n  /* background events always span full width */\n  left: 0;\n  right: 0;\n}\n\n/* TimeGrid Event Styling\n----------------------------------------------------------------------------------------------------\nWe use the full \"fc-time-grid-event\" class instead of using descendants because the event won't\nbe a descendant of the grid when it is being dragged.\n*/\n.fc-time-grid-event {\n  margin-bottom: 1px;\n}\n\n.fc-time-grid-event-inset {\n  -webkit-box-shadow: 0px 0px 0px 1px #fff;\n  box-shadow: 0px 0px 0px 1px #fff;\n}\n\n.fc-time-grid-event.fc-not-start {\n  /* events that are continuing from another day */\n  /* replace space made by the top border with padding */\n  border-top-width: 0;\n  padding-top: 1px;\n  /* remove top rounded corners */\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.fc-time-grid-event.fc-not-end {\n  /* replace space made by the top border with padding */\n  border-bottom-width: 0;\n  padding-bottom: 1px;\n  /* remove bottom rounded corners */\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.fc-time-grid-event .fc-content {\n  overflow: hidden;\n  max-height: 100%;\n}\n\n.fc-time-grid-event .fc-time,\n.fc-time-grid-event .fc-title {\n  padding: 0 1px;\n}\n\n.fc-time-grid-event .fc-time {\n  font-size: 0.85em;\n  white-space: nowrap;\n}\n\n/* short mode, where time and title are on the same line */\n.fc-time-grid-event.fc-short .fc-content {\n  /* don't wrap to second line (now that contents will be inline) */\n  white-space: nowrap;\n}\n\n.fc-time-grid-event.fc-short .fc-time,\n.fc-time-grid-event.fc-short .fc-title {\n  /* put the time and title on the same line */\n  display: inline-block;\n  vertical-align: top;\n}\n\n.fc-time-grid-event.fc-short .fc-time span {\n  display: none;\n  /* don't display the full time text... */\n}\n\n.fc-time-grid-event.fc-short .fc-time:before {\n  content: attr(data-start);\n  /* ...instead, display only the start time */\n}\n\n.fc-time-grid-event.fc-short .fc-time:after {\n  content: \" - \";\n  /* seperate with a dash, wrapped in nbsp's */\n}\n\n.fc-time-grid-event.fc-short .fc-title {\n  font-size: 0.85em;\n  /* make the title text the same size as the time */\n  padding: 0;\n  /* undo padding from above */\n}\n\n/* resizer (cursor device) */\n.fc-time-grid-event.fc-allow-mouse-resize .fc-resizer {\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 8px;\n  overflow: hidden;\n  line-height: 8px;\n  font-size: 11px;\n  font-family: monospace;\n  text-align: center;\n  cursor: s-resize;\n}\n\n.fc-time-grid-event.fc-allow-mouse-resize .fc-resizer:after {\n  content: \"=\";\n}\n\n/* resizer (touch device) */\n.fc-time-grid-event.fc-selected .fc-resizer {\n  /* 10x10 dot */\n  border-radius: 5px;\n  border-width: 1px;\n  width: 8px;\n  height: 8px;\n  border-style: solid;\n  border-color: inherit;\n  background: #fff;\n  /* horizontally center */\n  left: 50%;\n  margin-left: -5px;\n  /* center on the bottom edge */\n  bottom: -5px;\n}\n\n/* Now Indicator\n--------------------------------------------------------------------------------------------------*/\n.fc-time-grid .fc-now-indicator-line {\n  border-top-width: 1px;\n  left: 0;\n  right: 0;\n}\n\n/* arrow on axis */\n.fc-time-grid .fc-now-indicator-arrow {\n  margin-top: -5px;\n  /* vertically center on top coordinate */\n}\n\n.fc-ltr .fc-time-grid .fc-now-indicator-arrow {\n  left: 0;\n  /* triangle pointing right... */\n  border-width: 5px 0 5px 6px;\n  border-top-color: transparent;\n  border-bottom-color: transparent;\n}\n\n.fc-rtl .fc-time-grid .fc-now-indicator-arrow {\n  right: 0;\n  /* triangle pointing left... */\n  border-width: 5px 6px 5px 0;\n  border-top-color: transparent;\n  border-bottom-color: transparent;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/DemoApp.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/DemoApp.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!@fullcalendar/core/main.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@fullcalendar/core/main.css"), "");
exports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!@fullcalendar/daygrid/main.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@fullcalendar/daygrid/main.css"), "");
exports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!@fullcalendar/timegrid/main.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@fullcalendar/timegrid/main.css"), "");
exports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!@fullcalendar/list/main.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@fullcalendar/list/main.css"), "");
// Module
exports.push([module.i, ".demo-app {\n  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;\n  font-size: 16px;\n}\n.demo-app-calendar {\n  margin: 6em auto;\n  max-width: 900px;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/fast-deep-equal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/DemoApp.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/source-map-loader!./src/DemoApp.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fullcalendar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/vue */ "./node_modules/@fullcalendar/vue/main.esm.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.esm.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.esm.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.esm.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FullCalendar: _fullcalendar_vue__WEBPACK_IMPORTED_MODULE_0__["default"] // make the <FullCalendar> tag available
  },
  data: function() {
    return {
      calendarPlugins: [ // plugins must be defined in the JS
        _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__["default"],
        _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_2__["default"],
        _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__["default"], // needed for dateClick
        _fullcalendar_list__WEBPACK_IMPORTED_MODULE_3__["default"]
      ],
      calendarWeekends: true,
      calendarEvents: [ // initial event data
        { title: 'QCon 全球软件开发大会 2019 上海站', start: '2019-10-17', end: '2019-10-20', url: 'https://qcon.infoq.cn/2019/shanghai/' },
        { title: 'JavaScript 中国开发者大会 2019', start: '2019-10-19', end: '2019-10-21', url: 'https://2019.jsconfchina.com', backgroundColor: 'green' },
        { title: '2019携程技术峰会', start: '2019-11-09', end: '2019-11-10', url: 'https://techsummit.ctrip.com', backgroundColor: 'green' },
        { title: 'TOP100全球软件案例研究峰会 2019', start: '2019-11-14', end: '2019-11-19', url: 'https://www.top100summit.com', backgroundColor: 'green' },
        { title: 'TWeb 腾讯前端技术大会 2019', start: '2019-11-16', end: '2019-11-17', url: 'https://tweb.tencent.com', backgroundColor: 'green' }
      ],

    }
  },
  methods: {
    toggleWeekends() {
      this.calendarWeekends = !this.calendarWeekends // update a property
    },
    gotoPast() {
      let calendarApi = this.$refs.fullCalendar.getApi() // from the ref="..."
      calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
    },
    handleDateClick(arg) {
      if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
        this.calendarEvents.push({ // add new event data
          title: 'New Event',
          start: arg.date,
          allDay: arg.allDay
        })
      }
    }
  }
});



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/DemoApp.vue?vue&type=template&id=c1a36356&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/DemoApp.vue?vue&type=template&id=c1a36356& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "demo-app" },
    [
      _c("FullCalendar", {
        ref: "fullCalendar",
        staticClass: "demo-app-calendar",
        attrs: {
          defaultView: "dayGridMonth",
          header: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth, listMonth"
          },
          buttonText: {
            listMonth: "📄️ 列表视图",
            month: "📅️ 日历视图"
          },
          plugins: _vm.calendarPlugins,
          weekends: _vm.calendarWeekends,
          events: _vm.calendarEvents
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/DemoApp.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/DemoApp.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib??vue-loader-options!./DemoApp.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/DemoApp.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("29e459f8", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       true && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     true && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ( true && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ( true &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        true
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ( true &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/DemoApp.vue":
/*!*************************!*\
  !*** ./src/DemoApp.vue ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DemoApp_vue_vue_type_template_id_c1a36356___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DemoApp.vue?vue&type=template&id=c1a36356& */ "./src/DemoApp.vue?vue&type=template&id=c1a36356&");
/* harmony import */ var _DemoApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DemoApp.vue?vue&type=script&lang=js& */ "./src/DemoApp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DemoApp_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DemoApp.vue?vue&type=style&index=0&lang=scss& */ "./src/DemoApp.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DemoApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DemoApp_vue_vue_type_template_id_c1a36356___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DemoApp_vue_vue_type_template_id_c1a36356___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/DemoApp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/DemoApp.vue?vue&type=script&lang=js&":
/*!**************************************************!*\
  !*** ./src/DemoApp.vue?vue&type=script&lang=js& ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_DemoApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!../node_modules/source-map-loader!./DemoApp.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/source-map-loader/index.js!./src/DemoApp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_source_map_loader_index_js_DemoApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/DemoApp.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************!*\
  !*** ./src/DemoApp.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DemoApp_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib??vue-loader-options!./DemoApp.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/DemoApp.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DemoApp_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DemoApp_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DemoApp_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DemoApp_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DemoApp_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/DemoApp.vue?vue&type=template&id=c1a36356&":
/*!********************************************************!*\
  !*** ./src/DemoApp.vue?vue&type=template&id=c1a36356& ***!
  \********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DemoApp_vue_vue_type_template_id_c1a36356___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./DemoApp.vue?vue&type=template&id=c1a36356& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/DemoApp.vue?vue&type=template&id=c1a36356&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DemoApp_vue_vue_type_template_id_c1a36356___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DemoApp_vue_vue_type_template_id_c1a36356___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _DemoApp_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DemoApp.vue */ "./src/DemoApp.vue");



vue__WEBPACK_IMPORTED_MODULE_0__["default"].config.productionTip = false

new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  render: h => h(_DemoApp_vue__WEBPACK_IMPORTED_MODULE_1__["default"])
}).$mount('#demo-app-placeholder')


/***/ })

/******/ });
//# sourceMappingURL=main.js.map