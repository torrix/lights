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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/alpinejs/dist/alpine.js":
/*!**********************************************!*\
  !*** ./node_modules/alpinejs/dist/alpine.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  // Thanks @stimulus:
  // https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts
  function domReady() {
    return new Promise(resolve => {
      if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", resolve);
      } else {
        resolve();
      }
    });
  }
  function arrayUnique(array) {
    return Array.from(new Set(array));
  }
  function isTesting() {
    return navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function warnIfMalformedTemplate(el, directive) {
    if (el.tagName.toLowerCase() !== 'template') {
      console.warn(`Alpine: [${directive}] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#${directive}`);
    } else if (el.content.childElementCount !== 1) {
      console.warn(`Alpine: <template> tag with [${directive}] encountered with multiple element roots. Make sure <template> only has a single child element.`);
    }
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[_\s]/, '-').toLowerCase();
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function walk(el, callback) {
    if (callback(el) === false) return;
    let node = el.firstElementChild;

    while (node) {
      walk(node, callback);
      node = node.nextElementSibling;
    }
  }
  function debounce(func, wait) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  function saferEval(expression, dataContext, additionalHelperVariables = {}) {
    if (typeof expression === 'function') {
      return expression.call(dataContext);
    }

    return new Function(['$data', ...Object.keys(additionalHelperVariables)], `var __alpine_result; with($data) { __alpine_result = ${expression} }; return __alpine_result`)(dataContext, ...Object.values(additionalHelperVariables));
  }
  function saferEvalNoReturn(expression, dataContext, additionalHelperVariables = {}) {
    if (typeof expression === 'function') {
      return Promise.resolve(expression.call(dataContext, additionalHelperVariables['$event']));
    }

    let AsyncFunction = Function;
    /* MODERN-ONLY:START */

    AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
    /* MODERN-ONLY:END */
    // For the cases when users pass only a function reference to the caller: `x-on:click="foo"`
    // Where "foo" is a function. Also, we'll pass the function the event instance when we call it.

    if (Object.keys(dataContext).includes(expression)) {
      let methodReference = new Function(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { return ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables));

      if (typeof methodReference === 'function') {
        return Promise.resolve(methodReference.call(dataContext, additionalHelperVariables['$event']));
      } else {
        return Promise.resolve();
      }
    }

    return Promise.resolve(new AsyncFunction(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables)));
  }
  const xAttrRE = /^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref|spread)\b/;
  function isXAttr(attr) {
    const name = replaceAtAndColonWithStandardSyntax(attr.name);
    return xAttrRE.test(name);
  }
  function getXAttrs(el, component, type) {
    let directives = Array.from(el.attributes).filter(isXAttr).map(parseHtmlAttribute); // Get an object of directives from x-spread.

    let spreadDirective = directives.filter(directive => directive.type === 'spread')[0];

    if (spreadDirective) {
      let spreadObject = saferEval(spreadDirective.expression, component.$data); // Add x-spread directives to the pile of existing directives.

      directives = directives.concat(Object.entries(spreadObject).map(([name, value]) => parseHtmlAttribute({
        name,
        value
      })));
    }

    if (type) return directives.filter(i => i.type === type);
    return sortDirectives(directives);
  }

  function sortDirectives(directives) {
    let directiveOrder = ['bind', 'model', 'show', 'catch-all'];
    return directives.sort((a, b) => {
      let typeA = directiveOrder.indexOf(a.type) === -1 ? 'catch-all' : a.type;
      let typeB = directiveOrder.indexOf(b.type) === -1 ? 'catch-all' : b.type;
      return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
    });
  }

  function parseHtmlAttribute({
    name,
    value
  }) {
    const normalizedName = replaceAtAndColonWithStandardSyntax(name);
    const typeMatch = normalizedName.match(xAttrRE);
    const valueMatch = normalizedName.match(/:([a-zA-Z0-9\-:]+)/);
    const modifiers = normalizedName.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map(i => i.replace('.', '')),
      expression: value
    };
  }
  function isBooleanAttr(attrName) {
    // As per HTML spec table https://html.spec.whatwg.org/multipage/indices.html#attributes-3:boolean-attribute
    // Array roughly ordered by estimated usage
    const booleanAttributes = ['disabled', 'checked', 'required', 'readonly', 'hidden', 'open', 'selected', 'autofocus', 'itemscope', 'multiple', 'novalidate', 'allowfullscreen', 'allowpaymentrequest', 'formnovalidate', 'autoplay', 'controls', 'loop', 'muted', 'playsinline', 'default', 'ismap', 'reversed', 'async', 'defer', 'nomodule'];
    return booleanAttributes.includes(attrName);
  }
  function replaceAtAndColonWithStandardSyntax(name) {
    if (name.startsWith('@')) {
      return name.replace('@', 'x-on:');
    } else if (name.startsWith(':')) {
      return name.replace(':', 'x-bind:');
    }

    return name;
  }
  function convertClassStringToArray(classList, filterFn = Boolean) {
    return classList.split(' ').filter(filterFn);
  }
  const TRANSITION_TYPE_IN = 'in';
  const TRANSITION_TYPE_OUT = 'out';
  function transitionIn(el, show, component, forceSkip = false) {
    // We don't want to transition on the initial page load.
    if (forceSkip) return show();

    if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_IN) {
      // there is already a similar transition going on, this was probably triggered by
      // a change in a different property, let's just leave the previous one doing its job
      return;
    }

    const attrs = getXAttrs(el, component, 'transition');
    const showAttr = getXAttrs(el, component, 'show')[0]; // If this is triggered by a x-show.transition.

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers; // If x-show.transition.out, we'll skip the "in" transition.

      if (modifiers.includes('out') && !modifiers.includes('in')) return show();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out'); // If x-show.transition.in...out... only use "in" related modifiers for this transition.

      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index < modifiers.indexOf('out')) : modifiers;
      transitionHelperIn(el, modifiers, show); // Otherwise, we can assume x-transition:enter.
    } else if (attrs.some(attr => ['enter', 'enter-start', 'enter-end'].includes(attr.value))) {
      transitionClassesIn(el, component, attrs, show);
    } else {
      // If neither, just show that damn thing.
      show();
    }
  }
  function transitionOut(el, hide, component, forceSkip = false) {
    // We don't want to transition on the initial page load.
    if (forceSkip) return hide();

    if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_OUT) {
      // there is already a similar transition going on, this was probably triggered by
      // a change in a different property, let's just leave the previous one doing its job
      return;
    }

    const attrs = getXAttrs(el, component, 'transition');
    const showAttr = getXAttrs(el, component, 'show')[0];

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers;
      if (modifiers.includes('in') && !modifiers.includes('out')) return hide();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out');
      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index > modifiers.indexOf('out')) : modifiers;
      transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hide);
    } else if (attrs.some(attr => ['leave', 'leave-start', 'leave-end'].includes(attr.value))) {
      transitionClassesOut(el, component, attrs, hide);
    } else {
      hide();
    }
  }
  function transitionHelperIn(el, modifiers, showCallback) {
    // Default values inspired by: https://material.io/design/motion/speed.html#duration
    const styleValues = {
      duration: modifierValue(modifiers, 'duration', 150),
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      },
      second: {
        opacity: 1,
        scale: 100
      }
    };
    transitionHelper(el, modifiers, showCallback, () => {}, styleValues, TRANSITION_TYPE_IN);
  }
  function transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hideCallback) {
    // Make the "out" transition .5x slower than the "in". (Visually better)
    // HOWEVER, if they explicitly set a duration for the "out" transition,
    // use that.
    const duration = settingBothSidesOfTransition ? modifierValue(modifiers, 'duration', 150) : modifierValue(modifiers, 'duration', 150) / 2;
    const styleValues = {
      duration: duration,
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 1,
        scale: 100
      },
      second: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      }
    };
    transitionHelper(el, modifiers, () => {}, hideCallback, styleValues, TRANSITION_TYPE_OUT);
  }

  function modifierValue(modifiers, key, fallback) {
    // If the modifier isn't present, use the default.
    if (modifiers.indexOf(key) === -1) return fallback; // If it IS present, grab the value after it: x-show.transition.duration.500ms

    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;

    if (key === 'scale') {
      // Check if the very next value is NOT a number and return the fallback.
      // If x-show.transition.scale, we'll use the default scale value.
      // That is how a user opts out of the opacity transition.
      if (!isNumeric(rawValue)) return fallback;
    }

    if (key === 'duration') {
      // Support x-show.transition.duration.500ms && duration.500
      let match = rawValue.match(/([0-9]+)ms/);
      if (match) return match[1];
    }

    if (key === 'origin') {
      // Support chaining origin directions: x-show.transition.top.right
      if (['top', 'right', 'left', 'center', 'bottom'].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(' ');
      }
    }

    return rawValue;
  }

  function transitionHelper(el, modifiers, hook1, hook2, styleValues, type) {
    // clear the previous transition if exists to avoid caching the wrong styles
    if (el.__x_transition) {
      cancelAnimationFrame(el.__x_transition.nextFrame);
      el.__x_transition.callback && el.__x_transition.callback();
    } // If the user set these style values, we'll put them back when we're done with them.


    const opacityCache = el.style.opacity;
    const transformCache = el.style.transform;
    const transformOriginCache = el.style.transformOrigin; // If no modifiers are present: x-show.transition, we'll default to both opacity and scale.

    const noModifiers = !modifiers.includes('opacity') && !modifiers.includes('scale');
    const transitionOpacity = noModifiers || modifiers.includes('opacity');
    const transitionScale = noModifiers || modifiers.includes('scale'); // These are the explicit stages of a transition (same stages for in and for out).
    // This way you can get a birds eye view of the hooks, and the differences
    // between them.

    const stages = {
      start() {
        if (transitionOpacity) el.style.opacity = styleValues.first.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.first.scale / 100})`;
      },

      during() {
        if (transitionScale) el.style.transformOrigin = styleValues.origin;
        el.style.transitionProperty = [transitionOpacity ? `opacity` : ``, transitionScale ? `transform` : ``].join(' ').trim();
        el.style.transitionDuration = `${styleValues.duration / 1000}s`;
        el.style.transitionTimingFunction = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
      },

      show() {
        hook1();
      },

      end() {
        if (transitionOpacity) el.style.opacity = styleValues.second.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.second.scale / 100})`;
      },

      hide() {
        hook2();
      },

      cleanup() {
        if (transitionOpacity) el.style.opacity = opacityCache;
        if (transitionScale) el.style.transform = transformCache;
        if (transitionScale) el.style.transformOrigin = transformOriginCache;
        el.style.transitionProperty = null;
        el.style.transitionDuration = null;
        el.style.transitionTimingFunction = null;
      }

    };
    transition(el, stages, type);
  }

  const ensureStringExpression = (expression, el, component) => {
    return typeof expression === 'function' ? component.evaluateReturnExpression(el, expression) : expression;
  };

  function transitionClassesIn(el, component, directives, showCallback) {
    const enter = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter') || {
      expression: ''
    }).expression, el, component));
    const enterStart = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter-start') || {
      expression: ''
    }).expression, el, component));
    const enterEnd = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter-end') || {
      expression: ''
    }).expression, el, component));
    transitionClasses(el, enter, enterStart, enterEnd, showCallback, () => {}, TRANSITION_TYPE_IN);
  }
  function transitionClassesOut(el, component, directives, hideCallback) {
    const leave = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave') || {
      expression: ''
    }).expression, el, component));
    const leaveStart = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave-start') || {
      expression: ''
    }).expression, el, component));
    const leaveEnd = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave-end') || {
      expression: ''
    }).expression, el, component));
    transitionClasses(el, leave, leaveStart, leaveEnd, () => {}, hideCallback, TRANSITION_TYPE_OUT);
  }
  function transitionClasses(el, classesDuring, classesStart, classesEnd, hook1, hook2, type) {
    // clear the previous transition if exists to avoid caching the wrong classes
    if (el.__x_transition) {
      cancelAnimationFrame(el.__x_transition.nextFrame);
      el.__x_transition.callback && el.__x_transition.callback();
    }

    const originalClasses = el.__x_original_classes || [];
    const stages = {
      start() {
        el.classList.add(...classesStart);
      },

      during() {
        el.classList.add(...classesDuring);
      },

      show() {
        hook1();
      },

      end() {
        // Don't remove classes that were in the original class attribute.
        el.classList.remove(...classesStart.filter(i => !originalClasses.includes(i)));
        el.classList.add(...classesEnd);
      },

      hide() {
        hook2();
      },

      cleanup() {
        el.classList.remove(...classesDuring.filter(i => !originalClasses.includes(i)));
        el.classList.remove(...classesEnd.filter(i => !originalClasses.includes(i)));
      }

    };
    transition(el, stages, type);
  }
  function transition(el, stages, type) {
    el.__x_transition = {
      // Set transition type so we can avoid clearing transition if the direction is the same
      type: type,
      // create a callback for the last stages of the transition so we can call it
      // from different point and early terminate it. Once will ensure that function
      // is only called one time.
      callback: once(() => {
        stages.hide(); // Adding an "isConnected" check, in case the callback
        // removed the element from the DOM.

        if (el.isConnected) {
          stages.cleanup();
        }

        delete el.__x_transition;
      }),
      // This store the next animation frame so we can cancel it
      nextFrame: null
    };
    stages.start();
    stages.during();
    el.__x_transition.nextFrame = requestAnimationFrame(() => {
      // Note: Safari's transitionDuration property will list out comma separated transition durations
      // for every single transition property. Let's grab the first one and call it a day.
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, '').replace('s', '')) * 1000;

      if (duration === 0) {
        duration = Number(getComputedStyle(el).animationDuration.replace('s', '')) * 1000;
      }

      stages.show();
      el.__x_transition.nextFrame = requestAnimationFrame(() => {
        stages.end();
        setTimeout(el.__x_transition.callback, duration);
      });
    });
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  } // Thanks @vuejs
  // https://github.com/vuejs/vue/blob/4de4649d9637262a9b007720b59f80ac72a5620c/src/shared/util.js

  function once(callback) {
    let called = false;
    return function () {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      }
    };
  }

  function handleForDirective(component, templateEl, expression, initialUpdate, extraVars) {
    warnIfMalformedTemplate(templateEl, 'x-for');
    let iteratorNames = typeof expression === 'function' ? parseForExpression(component.evaluateReturnExpression(templateEl, expression)) : parseForExpression(expression);
    let items = evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, templateEl, iteratorNames, extraVars); // As we walk the array, we'll also walk the DOM (updating/creating as we go).

    let currentEl = templateEl;
    items.forEach((item, index) => {
      let iterationScopeVariables = getIterationScopeVariables(iteratorNames, item, index, items, extraVars());
      let currentKey = generateKeyForIteration(component, templateEl, index, iterationScopeVariables);
      let nextEl = lookAheadForMatchingKeyedElementAndMoveItIfFound(currentEl.nextElementSibling, currentKey); // If we haven't found a matching key, insert the element at the current position.

      if (!nextEl) {
        nextEl = addElementInLoopAfterCurrentEl(templateEl, currentEl); // And transition it in if it's not the first page load.

        transitionIn(nextEl, () => {}, component, initialUpdate);
        nextEl.__x_for = iterationScopeVariables;
        component.initializeElements(nextEl, () => nextEl.__x_for); // Otherwise update the element we found.
      } else {
        // Temporarily remove the key indicator to allow the normal "updateElements" to work.
        delete nextEl.__x_for_key;
        nextEl.__x_for = iterationScopeVariables;
        component.updateElements(nextEl, () => nextEl.__x_for);
      }

      currentEl = nextEl;
      currentEl.__x_for_key = currentKey;
    });
    removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component);
  } // This was taken from VueJS 2.* core. Thanks Vue!

  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\(|\)$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch) return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].trim().replace(stripParensRE, '');
    let iteratorMatch = item.match(forIteratorRE);

    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, '').trim();
      res.index = iteratorMatch[1].trim();

      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }

    return res;
  }

  function getIterationScopeVariables(iteratorNames, item, index, items, extraVars) {
    // We must create a new object, so each iteration has a new scope
    let scopeVariables = extraVars ? _objectSpread2({}, extraVars) : {};
    scopeVariables[iteratorNames.item] = item;
    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }

  function generateKeyForIteration(component, el, index, iterationScopeVariables) {
    let bindKeyAttribute = getXAttrs(el, component, 'bind').filter(attr => attr.value === 'key')[0]; // If the dev hasn't specified a key, just return the index of the iteration.

    if (!bindKeyAttribute) return index;
    return component.evaluateReturnExpression(el, bindKeyAttribute.expression, () => iterationScopeVariables);
  }

  function evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, el, iteratorNames, extraVars) {
    let ifAttribute = getXAttrs(el, component, 'if')[0];

    if (ifAttribute && !component.evaluateReturnExpression(el, ifAttribute.expression)) {
      return [];
    }

    let items = component.evaluateReturnExpression(el, iteratorNames.items, extraVars); // This adds support for the `i in n` syntax.

    if (isNumeric(items) && items > 0) {
      items = Array.from(Array(items).keys(), i => i + 1);
    }

    return items;
  }

  function addElementInLoopAfterCurrentEl(templateEl, currentEl) {
    let clone = document.importNode(templateEl.content, true);
    currentEl.parentElement.insertBefore(clone, currentEl.nextElementSibling);
    return currentEl.nextElementSibling;
  }

  function lookAheadForMatchingKeyedElementAndMoveItIfFound(nextEl, currentKey) {
    if (!nextEl) return; // If the the key's DO match, no need to look ahead.

    if (nextEl.__x_for_key === currentKey) return nextEl; // If they don't, we'll look ahead for a match.
    // If we find it, we'll move it to the current position in the loop.

    let tmpNextEl = nextEl;

    while (tmpNextEl) {
      if (tmpNextEl.__x_for_key === currentKey) {
        return tmpNextEl.parentElement.insertBefore(tmpNextEl, nextEl);
      }

      tmpNextEl = tmpNextEl.nextElementSibling && tmpNextEl.nextElementSibling.__x_for_key !== undefined ? tmpNextEl.nextElementSibling : false;
    }
  }

  function removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component) {
    var nextElementFromOldLoop = currentEl.nextElementSibling && currentEl.nextElementSibling.__x_for_key !== undefined ? currentEl.nextElementSibling : false;

    while (nextElementFromOldLoop) {
      let nextElementFromOldLoopImmutable = nextElementFromOldLoop;
      let nextSibling = nextElementFromOldLoop.nextElementSibling;
      transitionOut(nextElementFromOldLoop, () => {
        nextElementFromOldLoopImmutable.remove();
      }, component);
      nextElementFromOldLoop = nextSibling && nextSibling.__x_for_key !== undefined ? nextSibling : false;
    }
  }

  function handleAttributeBindingDirective(component, el, attrName, expression, extraVars, attrType, modifiers) {
    var value = component.evaluateReturnExpression(el, expression, extraVars);

    if (attrName === 'value') {
      if (Alpine.ignoreFocusedForValueBinding && document.activeElement.isSameNode(el)) return; // If nested model key is undefined, set the default value to empty string.

      if (value === undefined && expression.match(/\./)) {
        value = '';
      }

      if (el.type === 'radio') {
        // Set radio value from x-bind:value, if no "value" attribute exists.
        // If there are any initial state values, radio will have a correct
        // "checked" value since x-bind:value is processed before x-model.
        if (el.attributes.value === undefined && attrType === 'bind') {
          el.value = value;
        } else if (attrType !== 'bind') {
          el.checked = checkedAttrLooseCompare(el.value, value);
        }
      } else if (el.type === 'checkbox') {
        // If we are explicitly binding a string to the :value, set the string,
        // If the value is a boolean, leave it alone, it will be set to "on"
        // automatically.
        if (typeof value !== 'boolean' && ![null, undefined].includes(value) && attrType === 'bind') {
          el.value = String(value);
        } else if (attrType !== 'bind') {
          if (Array.isArray(value)) {
            // I'm purposely not using Array.includes here because it's
            // strict, and because of Numeric/String mis-casting, I
            // want the "includes" to be "fuzzy".
            el.checked = value.some(val => checkedAttrLooseCompare(val, el.value));
          } else {
            el.checked = !!value;
          }
        }
      } else if (el.tagName === 'SELECT') {
        updateSelect(el, value);
      } else {
        if (el.value === value) return;
        el.value = value;
      }
    } else if (attrName === 'class') {
      if (Array.isArray(value)) {
        const originalClasses = el.__x_original_classes || [];
        el.setAttribute('class', arrayUnique(originalClasses.concat(value)).join(' '));
      } else if (typeof value === 'object') {
        // Sorting the keys / class names by their boolean value will ensure that
        // anything that evaluates to `false` and needs to remove classes is run first.
        const keysSortedByBooleanValue = Object.keys(value).sort((a, b) => value[a] - value[b]);
        keysSortedByBooleanValue.forEach(classNames => {
          if (value[classNames]) {
            convertClassStringToArray(classNames).forEach(className => el.classList.add(className));
          } else {
            convertClassStringToArray(classNames).forEach(className => el.classList.remove(className));
          }
        });
      } else {
        const originalClasses = el.__x_original_classes || [];
        const newClasses = convertClassStringToArray(value);
        el.setAttribute('class', arrayUnique(originalClasses.concat(newClasses)).join(' '));
      }
    } else {
      attrName = modifiers.includes('camel') ? camelCase(attrName) : attrName; // If an attribute's bound value is null, undefined or false, remove the attribute

      if ([null, undefined, false].includes(value)) {
        el.removeAttribute(attrName);
      } else {
        isBooleanAttr(attrName) ? setIfChanged(el, attrName, attrName) : setIfChanged(el, attrName, value);
      }
    }
  }

  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }

  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map(value => {
      return value + '';
    });
    Array.from(el.options).forEach(option => {
      option.selected = arrayWrappedValue.includes(option.value || option.text);
    });
  }

  function handleTextDirective(el, output, expression) {
    // If nested model key is undefined, set the default value to empty string.
    if (output === undefined && expression.match(/\./)) {
      output = '';
    }

    el.textContent = output;
  }

  function handleHtmlDirective(component, el, expression, extraVars) {
    el.innerHTML = component.evaluateReturnExpression(el, expression, extraVars);
  }

  function handleShowDirective(component, el, value, modifiers, initialUpdate = false) {
    const hide = () => {
      el.style.display = 'none';
    };

    const show = () => {
      if (el.style.length === 1 && el.style.display === 'none') {
        el.removeAttribute('style');
      } else {
        el.style.removeProperty('display');
      }
    };

    if (initialUpdate === true) {
      if (value) {
        show();
      } else {
        hide();
      }

      return;
    }

    const handle = resolve => {
      if (value) {
        if (el.style.display === 'none' || el.__x_transition) {
          transitionIn(el, () => {
            show();
          }, component);
        }

        resolve(() => {});
      } else {
        if (el.style.display !== 'none') {
          transitionOut(el, () => {
            resolve(() => {
              hide();
            });
          }, component);
        } else {
          resolve(() => {});
        }
      }
    }; // The working of x-show is a bit complex because we need to
    // wait for any child transitions to finish before hiding
    // some element. Also, this has to be done recursively.
    // If x-show.immediate, foregoe the waiting.


    if (modifiers.includes('immediate')) {
      handle(finish => finish());
      return;
    } // x-show is encountered during a DOM tree walk. If an element
    // we encounter is NOT a child of another x-show element we
    // can execute the previous x-show stack (if one exists).


    if (component.showDirectiveLastElement && !component.showDirectiveLastElement.contains(el)) {
      component.executeAndClearRemainingShowDirectiveStack();
    }

    component.showDirectiveStack.push(handle);
    component.showDirectiveLastElement = el;
  }

  function handleIfDirective(component, el, expressionResult, initialUpdate, extraVars) {
    warnIfMalformedTemplate(el, 'x-if');
    const elementHasAlreadyBeenAdded = el.nextElementSibling && el.nextElementSibling.__x_inserted_me === true;

    if (expressionResult && (!elementHasAlreadyBeenAdded || el.__x_transition)) {
      const clone = document.importNode(el.content, true);
      el.parentElement.insertBefore(clone, el.nextElementSibling);
      transitionIn(el.nextElementSibling, () => {}, component, initialUpdate);
      component.initializeElements(el.nextElementSibling, extraVars);
      el.nextElementSibling.__x_inserted_me = true;
    } else if (!expressionResult && elementHasAlreadyBeenAdded) {
      transitionOut(el.nextElementSibling, () => {
        el.nextElementSibling.remove();
      }, component, initialUpdate);
    }
  }

  function registerListener(component, el, event, modifiers, expression, extraVars = {}) {
    const options = {
      passive: modifiers.includes('passive')
    };

    if (modifiers.includes('camel')) {
      event = camelCase(event);
    }

    if (modifiers.includes('away')) {
      let handler = e => {
        // Don't do anything if the click came from the element or within it.
        if (el.contains(e.target)) return; // Don't do anything if this element isn't currently visible.

        if (el.offsetWidth < 1 && el.offsetHeight < 1) return; // Now that we are sure the element is visible, AND the click
        // is from outside it, let's run the expression.

        runListenerHandler(component, expression, e, extraVars);

        if (modifiers.includes('once')) {
          document.removeEventListener(event, handler, options);
        }
      }; // Listen for this event at the root level.


      document.addEventListener(event, handler, options);
    } else {
      let listenerTarget = modifiers.includes('window') ? window : modifiers.includes('document') ? document : el;

      let handler = e => {
        // Remove this global event handler if the element that declared it
        // has been removed. It's now stale.
        if (listenerTarget === window || listenerTarget === document) {
          if (!document.body.contains(el)) {
            listenerTarget.removeEventListener(event, handler, options);
            return;
          }
        }

        if (isKeyEvent(event)) {
          if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
            return;
          }
        }

        if (modifiers.includes('prevent')) e.preventDefault();
        if (modifiers.includes('stop')) e.stopPropagation(); // If the .self modifier isn't present, or if it is present and
        // the target element matches the element we are registering the
        // event on, run the handler

        if (!modifiers.includes('self') || e.target === el) {
          const returnValue = runListenerHandler(component, expression, e, extraVars);
          returnValue.then(value => {
            if (value === false) {
              e.preventDefault();
            } else {
              if (modifiers.includes('once')) {
                listenerTarget.removeEventListener(event, handler, options);
              }
            }
          });
        }
      };

      if (modifiers.includes('debounce')) {
        let nextModifier = modifiers[modifiers.indexOf('debounce') + 1] || 'invalid-wait';
        let wait = isNumeric(nextModifier.split('ms')[0]) ? Number(nextModifier.split('ms')[0]) : 250;
        handler = debounce(handler, wait);
      }

      listenerTarget.addEventListener(event, handler, options);
    }
  }

  function runListenerHandler(component, expression, e, extraVars) {
    return component.evaluateCommandExpression(e.target, expression, () => {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        '$event': e
      });
    });
  }

  function isKeyEvent(event) {
    return ['keydown', 'keyup'].includes(event);
  }

  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter(i => {
      return !['window', 'document', 'prevent', 'stop'].includes(i);
    });

    if (keyModifiers.includes('debounce')) {
      let debounceIndex = keyModifiers.indexOf('debounce');
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || 'invalid-wait').split('ms')[0]) ? 2 : 1);
    } // If no modifier is specified, we'll call it a press.


    if (keyModifiers.length === 0) return false; // If one is passed, AND it matches the key pressed, we'll call it a press.

    if (keyModifiers.length === 1 && keyModifiers[0] === keyToModifier(e.key)) return false; // The user is listening for key combinations.

    const systemKeyModifiers = ['ctrl', 'shift', 'alt', 'meta', 'cmd', 'super'];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter(modifier => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter(i => !selectedSystemKeyModifiers.includes(i));

    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter(modifier => {
        // Alias "cmd" and "super" to "meta"
        if (modifier === 'cmd' || modifier === 'super') modifier = 'meta';
        return e[`${modifier}Key`];
      }); // If all the modifiers selected are pressed, ...

      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        // AND the remaining key is pressed as well. It's a press.
        if (keyModifiers[0] === keyToModifier(e.key)) return false;
      }
    } // We'll call it NOT a valid keypress.


    return true;
  }

  function keyToModifier(key) {
    switch (key) {
      case '/':
        return 'slash';

      case ' ':
      case 'Spacebar':
        return 'space';

      default:
        return key && kebabCase(key);
    }
  }

  function registerModelListener(component, el, modifiers, expression, extraVars) {
    // If the element we are binding to is a select, a radio, or checkbox
    // we'll listen for the change event instead of the "input" event.
    var event = el.tagName.toLowerCase() === 'select' || ['checkbox', 'radio'].includes(el.type) || modifiers.includes('lazy') ? 'change' : 'input';
    const listenerExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
    registerListener(component, el, event, modifiers, listenerExpression, () => {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        rightSideOfExpression: generateModelAssignmentFunction(el, modifiers, expression)
      });
    });
  }

  function generateModelAssignmentFunction(el, modifiers, expression) {
    if (el.type === 'radio') {
      // Radio buttons only work properly when they share a name attribute.
      // People might assume we take care of that for them, because
      // they already set a shared "x-model" attribute.
      if (!el.hasAttribute('name')) el.setAttribute('name', expression);
    }

    return (event, currentValue) => {
      // Check for event.detail due to an issue where IE11 handles other events as a CustomEvent.
      if (event instanceof CustomEvent && event.detail) {
        return event.detail;
      } else if (el.type === 'checkbox') {
        // If the data we are binding to is an array, toggle its value inside the array.
        if (Array.isArray(currentValue)) {
          const newValue = modifiers.includes('number') ? safeParseNumber(event.target.value) : event.target.value;
          return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter(el => !checkedAttrLooseCompare(el, newValue));
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === 'select' && el.multiple) {
        return modifiers.includes('number') ? Array.from(event.target.selectedOptions).map(option => {
          const rawValue = option.value || option.text;
          return safeParseNumber(rawValue);
        }) : Array.from(event.target.selectedOptions).map(option => {
          return option.value || option.text;
        });
      } else {
        const rawValue = event.target.value;
        return modifiers.includes('number') ? safeParseNumber(rawValue) : modifiers.includes('trim') ? rawValue.trim() : rawValue;
      }
    };
  }

  function safeParseNumber(rawValue) {
    const number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric(number) ? number : rawValue;
  }

  /**
   * Copyright (C) 2017 salesforce.com, inc.
   */
  const { isArray } = Array;
  const { getPrototypeOf, create: ObjectCreate, defineProperty: ObjectDefineProperty, defineProperties: ObjectDefineProperties, isExtensible, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, preventExtensions, hasOwnProperty, } = Object;
  const { push: ArrayPush, concat: ArrayConcat, map: ArrayMap, } = Array.prototype;
  function isUndefined(obj) {
      return obj === undefined;
  }
  function isFunction(obj) {
      return typeof obj === 'function';
  }
  function isObject(obj) {
      return typeof obj === 'object';
  }
  const proxyToValueMap = new WeakMap();
  function registerProxy(proxy, value) {
      proxyToValueMap.set(proxy, value);
  }
  const unwrap = (replicaOrAny) => proxyToValueMap.get(replicaOrAny) || replicaOrAny;

  function wrapValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getProxy(value) : value;
  }
  /**
   * Unwrap property descriptors will set value on original descriptor
   * We only need to unwrap if value is specified
   * @param descriptor external descrpitor provided to define new property on original value
   */
  function unwrapDescriptor(descriptor) {
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = unwrap(descriptor.value);
      }
      return descriptor;
  }
  function lockShadowTarget(membrane, shadowTarget, originalTarget) {
      const targetKeys = ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      targetKeys.forEach((key) => {
          let descriptor = getOwnPropertyDescriptor(originalTarget, key);
          // We do not need to wrap the descriptor if configurable
          // Because we can deal with wrapping it when user goes through
          // Get own property descriptor. There is also a chance that this descriptor
          // could change sometime in the future, so we can defer wrapping
          // until we need to
          if (!descriptor.configurable) {
              descriptor = wrapDescriptor(membrane, descriptor, wrapValue);
          }
          ObjectDefineProperty(shadowTarget, key, descriptor);
      });
      preventExtensions(shadowTarget);
  }
  class ReactiveProxyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getProxy(value);
      }
      set(shadowTarget, key, value) {
          const { originalTarget, membrane: { valueMutated } } = this;
          const oldValue = originalTarget[key];
          if (oldValue !== value) {
              originalTarget[key] = value;
              valueMutated(originalTarget, key);
          }
          else if (key === 'length' && isArray(originalTarget)) {
              // fix for issue #236: push will add the new index, and by the time length
              // is updated, the internal length is already equal to the new length value
              // therefore, the oldValue is equal to the value. This is the forking logic
              // to support this use case.
              valueMutated(originalTarget, key);
          }
          return true;
      }
      deleteProperty(shadowTarget, key) {
          const { originalTarget, membrane: { valueMutated } } = this;
          delete originalTarget[key];
          valueMutated(originalTarget, key);
          return true;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      isExtensible(shadowTarget) {
          const shadowIsExtensible = isExtensible(shadowTarget);
          if (!shadowIsExtensible) {
              return shadowIsExtensible;
          }
          const { originalTarget, membrane } = this;
          const targetIsExtensible = isExtensible(originalTarget);
          if (!targetIsExtensible) {
              lockShadowTarget(membrane, shadowTarget, originalTarget);
          }
          return targetIsExtensible;
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getPrototypeOf(shadowTarget) {
          const { originalTarget } = this;
          return getPrototypeOf(originalTarget);
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = this.membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value, setter or getter (if available) cannot observe
          // mutations, just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapValue);
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          const { originalTarget, membrane } = this;
          lockShadowTarget(membrane, shadowTarget, originalTarget);
          preventExtensions(originalTarget);
          return true;
      }
      defineProperty(shadowTarget, key, descriptor) {
          const { originalTarget, membrane } = this;
          const { valueMutated } = membrane;
          const { configurable } = descriptor;
          // We have to check for value in descriptor
          // because Object.freeze(proxy) calls this method
          // with only { configurable: false, writeable: false }
          // Additionally, method will only be called with writeable:false
          // if the descriptor has a value, as opposed to getter/setter
          // So we can just check if writable is present and then see if
          // value is present. This eliminates getter and setter descriptors
          if (hasOwnProperty.call(descriptor, 'writable') && !hasOwnProperty.call(descriptor, 'value')) {
              const originalDescriptor = getOwnPropertyDescriptor(originalTarget, key);
              descriptor.value = originalDescriptor.value;
          }
          ObjectDefineProperty(originalTarget, key, unwrapDescriptor(descriptor));
          if (configurable === false) {
              ObjectDefineProperty(shadowTarget, key, wrapDescriptor(membrane, descriptor, wrapValue));
          }
          valueMutated(originalTarget, key);
          return true;
      }
  }

  function wrapReadOnlyValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getReadOnlyProxy(value) : value;
  }
  class ReadOnlyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { membrane, originalTarget } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getReadOnlyProxy(value);
      }
      set(shadowTarget, key, value) {
          return false;
      }
      deleteProperty(shadowTarget, key) {
          return false;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value or getter (if available) cannot be observed,
          // just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapReadOnlyValue);
          if (hasOwnProperty.call(desc, 'set')) {
              desc.set = undefined; // readOnly membrane does not allow setters
          }
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          return false;
      }
      defineProperty(shadowTarget, key, descriptor) {
          return false;
      }
  }
  function createShadowTarget(value) {
      let shadowTarget = undefined;
      if (isArray(value)) {
          shadowTarget = [];
      }
      else if (isObject(value)) {
          shadowTarget = {};
      }
      return shadowTarget;
  }
  const ObjectDotPrototype = Object.prototype;
  function defaultValueIsObservable(value) {
      // intentionally checking for null
      if (value === null) {
          return false;
      }
      // treat all non-object types, including undefined, as non-observable values
      if (typeof value !== 'object') {
          return false;
      }
      if (isArray(value)) {
          return true;
      }
      const proto = getPrototypeOf(value);
      return (proto === ObjectDotPrototype || proto === null || getPrototypeOf(proto) === null);
  }
  const defaultValueObserved = (obj, key) => {
      /* do nothing */
  };
  const defaultValueMutated = (obj, key) => {
      /* do nothing */
  };
  const defaultValueDistortion = (value) => value;
  function wrapDescriptor(membrane, descriptor, getValue) {
      const { set, get } = descriptor;
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = getValue(membrane, descriptor.value);
      }
      else {
          if (!isUndefined(get)) {
              descriptor.get = function () {
                  // invoking the original getter with the original target
                  return getValue(membrane, get.call(unwrap(this)));
              };
          }
          if (!isUndefined(set)) {
              descriptor.set = function (value) {
                  // At this point we don't have a clear indication of whether
                  // or not a valid mutation will occur, we don't have the key,
                  // and we are not sure why and how they are invoking this setter.
                  // Nevertheless we preserve the original semantics by invoking the
                  // original setter with the original target and the unwrapped value
                  set.call(unwrap(this), membrane.unwrapProxy(value));
              };
          }
      }
      return descriptor;
  }
  class ReactiveMembrane {
      constructor(options) {
          this.valueDistortion = defaultValueDistortion;
          this.valueMutated = defaultValueMutated;
          this.valueObserved = defaultValueObserved;
          this.valueIsObservable = defaultValueIsObservable;
          this.objectGraph = new WeakMap();
          if (!isUndefined(options)) {
              const { valueDistortion, valueMutated, valueObserved, valueIsObservable } = options;
              this.valueDistortion = isFunction(valueDistortion) ? valueDistortion : defaultValueDistortion;
              this.valueMutated = isFunction(valueMutated) ? valueMutated : defaultValueMutated;
              this.valueObserved = isFunction(valueObserved) ? valueObserved : defaultValueObserved;
              this.valueIsObservable = isFunction(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
          }
      }
      getProxy(value) {
          const unwrappedValue = unwrap(value);
          const distorted = this.valueDistortion(unwrappedValue);
          if (this.valueIsObservable(distorted)) {
              const o = this.getReactiveState(unwrappedValue, distorted);
              // when trying to extract the writable version of a readonly
              // we return the readonly.
              return o.readOnly === value ? value : o.reactive;
          }
          return distorted;
      }
      getReadOnlyProxy(value) {
          value = unwrap(value);
          const distorted = this.valueDistortion(value);
          if (this.valueIsObservable(distorted)) {
              return this.getReactiveState(value, distorted).readOnly;
          }
          return distorted;
      }
      unwrapProxy(p) {
          return unwrap(p);
      }
      getReactiveState(value, distortedValue) {
          const { objectGraph, } = this;
          let reactiveState = objectGraph.get(distortedValue);
          if (reactiveState) {
              return reactiveState;
          }
          const membrane = this;
          reactiveState = {
              get reactive() {
                  const reactiveHandler = new ReactiveProxyHandler(membrane, distortedValue);
                  // caching the reactive proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), reactiveHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'reactive', { value: proxy });
                  return proxy;
              },
              get readOnly() {
                  const readOnlyHandler = new ReadOnlyHandler(membrane, distortedValue);
                  // caching the readOnly proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), readOnlyHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'readOnly', { value: proxy });
                  return proxy;
              }
          };
          objectGraph.set(distortedValue, reactiveState);
          return reactiveState;
      }
  }
  /** version: 0.26.0 */

  function wrap(data, mutationCallback) {

    let membrane = new ReactiveMembrane({
      valueMutated(target, key) {
        mutationCallback(target, key);
      }

    });
    return {
      data: membrane.getProxy(data),
      membrane: membrane
    };
  }
  function unwrap$1(membrane, observable) {
    let unwrappedData = membrane.unwrapProxy(observable);
    let copy = {};
    Object.keys(unwrappedData).forEach(key => {
      if (['$el', '$refs', '$nextTick', '$watch'].includes(key)) return;
      copy[key] = unwrappedData[key];
    });
    return copy;
  }

  class Component {
    constructor(el, componentForClone = null) {
      this.$el = el;
      const dataAttr = this.$el.getAttribute('x-data');
      const dataExpression = dataAttr === '' ? '{}' : dataAttr;
      const initExpression = this.$el.getAttribute('x-init');
      let dataExtras = {
        $el: this.$el
      };
      let canonicalComponentElementReference = componentForClone ? componentForClone.$el : this.$el;
      Object.entries(Alpine.magicProperties).forEach(([name, callback]) => {
        Object.defineProperty(dataExtras, `$${name}`, {
          get: function get() {
            return callback(canonicalComponentElementReference);
          }
        });
      });
      this.unobservedData = componentForClone ? componentForClone.getUnobservedData() : saferEval(dataExpression, dataExtras);
      // Construct a Proxy-based observable. This will be used to handle reactivity.

      let {
        membrane,
        data
      } = this.wrapDataInObservable(this.unobservedData);
      this.$data = data;
      this.membrane = membrane; // After making user-supplied data methods reactive, we can now add
      // our magic properties to the original data for access.

      this.unobservedData.$el = this.$el;
      this.unobservedData.$refs = this.getRefsProxy();
      this.nextTickStack = [];

      this.unobservedData.$nextTick = callback => {
        this.nextTickStack.push(callback);
      };

      this.watchers = {};

      this.unobservedData.$watch = (property, callback) => {
        if (!this.watchers[property]) this.watchers[property] = [];
        this.watchers[property].push(callback);
      };
      /* MODERN-ONLY:START */
      // We remove this piece of code from the legacy build.
      // In IE11, we have already defined our helpers at this point.
      // Register custom magic properties.


      Object.entries(Alpine.magicProperties).forEach(([name, callback]) => {
        Object.defineProperty(this.unobservedData, `$${name}`, {
          get: function get() {
            return callback(canonicalComponentElementReference);
          }
        });
      });
      /* MODERN-ONLY:END */

      this.showDirectiveStack = [];
      this.showDirectiveLastElement;
      componentForClone || Alpine.onBeforeComponentInitializeds.forEach(callback => callback(this));
      var initReturnedCallback; // If x-init is present AND we aren't cloning (skip x-init on clone)

      if (initExpression && !componentForClone) {
        // We want to allow data manipulation, but not trigger DOM updates just yet.
        // We haven't even initialized the elements with their Alpine bindings. I mean c'mon.
        this.pauseReactivity = true;
        initReturnedCallback = this.evaluateReturnExpression(this.$el, initExpression);
        this.pauseReactivity = false;
      } // Register all our listeners and set all our attribute bindings.


      this.initializeElements(this.$el); // Use mutation observer to detect new elements being added within this component at run-time.
      // Alpine's just so darn flexible amirite?

      this.listenForNewElementsToInitialize();

      if (typeof initReturnedCallback === 'function') {
        // Run the callback returned from the "x-init" hook to allow the user to do stuff after
        // Alpine's got it's grubby little paws all over everything.
        initReturnedCallback.call(this.$data);
      }

      componentForClone || setTimeout(() => {
        Alpine.onComponentInitializeds.forEach(callback => callback(this));
      }, 0);
    }

    getUnobservedData() {
      return unwrap$1(this.membrane, this.$data);
    }

    wrapDataInObservable(data) {
      var self = this;
      let updateDom = debounce(function () {
        self.updateElements(self.$el);
      }, 0);
      return wrap(data, (target, key) => {
        if (self.watchers[key]) {
          // If there's a watcher for this specific key, run it.
          self.watchers[key].forEach(callback => callback(target[key]));
        } else if (Array.isArray(target)) {
          // Arrays are special cases, if any of the items change, we consider the array as mutated.
          Object.keys(self.watchers).forEach(fullDotNotationKey => {
            let dotNotationParts = fullDotNotationKey.split('.'); // Ignore length mutations since they would result in duplicate calls.
            // For example, when calling push, we would get a mutation for the item's key
            // and a second mutation for the length property.

            if (key === 'length') return;
            dotNotationParts.reduce((comparisonData, part) => {
              if (Object.is(target, comparisonData[part])) {
                self.watchers[fullDotNotationKey].forEach(callback => callback(target));
              }

              return comparisonData[part];
            }, self.unobservedData);
          });
        } else {
          // Let's walk through the watchers with "dot-notation" (foo.bar) and see
          // if this mutation fits any of them.
          Object.keys(self.watchers).filter(i => i.includes('.')).forEach(fullDotNotationKey => {
            let dotNotationParts = fullDotNotationKey.split('.'); // If this dot-notation watcher's last "part" doesn't match the current
            // key, then skip it early for performance reasons.

            if (key !== dotNotationParts[dotNotationParts.length - 1]) return; // Now, walk through the dot-notation "parts" recursively to find
            // a match, and call the watcher if one's found.

            dotNotationParts.reduce((comparisonData, part) => {
              if (Object.is(target, comparisonData)) {
                // Run the watchers.
                self.watchers[fullDotNotationKey].forEach(callback => callback(target[key]));
              }

              return comparisonData[part];
            }, self.unobservedData);
          });
        } // Don't react to data changes for cases like the `x-created` hook.


        if (self.pauseReactivity) return;
        updateDom();
      });
    }

    walkAndSkipNestedComponents(el, callback, initializeComponentCallback = () => {}) {
      walk(el, el => {
        // We've hit a component.
        if (el.hasAttribute('x-data')) {
          // If it's not the current one.
          if (!el.isSameNode(this.$el)) {
            // Initialize it if it's not.
            if (!el.__x) initializeComponentCallback(el); // Now we'll let that sub-component deal with itself.

            return false;
          }
        }

        return callback(el);
      });
    }

    initializeElements(rootEl, extraVars = () => {}) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop
        if (el.__x_for_key !== undefined) return false; // Don't touch spawns from if directives

        if (el.__x_inserted_me !== undefined) return false;
        this.initializeElement(el, extraVars);
      }, el => {
        el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    initializeElement(el, extraVars) {
      // To support class attribute merging, we have to know what the element's
      // original class attribute looked like for reference.
      if (el.hasAttribute('class') && getXAttrs(el, this).length > 0) {
        el.__x_original_classes = convertClassStringToArray(el.getAttribute('class'));
      }

      this.registerListeners(el, extraVars);
      this.resolveBoundAttributes(el, true, extraVars);
    }

    updateElements(rootEl, extraVars = () => {}) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop (and check if the root is actually a for loop in a parent, don't skip it.)
        if (el.__x_for_key !== undefined && !el.isSameNode(this.$el)) return false;
        this.updateElement(el, extraVars);
      }, el => {
        el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    executeAndClearNextTickStack(el) {
      // Skip spawns from alpine directives
      if (el === this.$el && this.nextTickStack.length > 0) {
        // We run the tick stack after the next frame to allow any
        // running transitions to pass the initial show stage.
        requestAnimationFrame(() => {
          while (this.nextTickStack.length > 0) {
            this.nextTickStack.shift()();
          }
        });
      }
    }

    executeAndClearRemainingShowDirectiveStack() {
      // The goal here is to start all the x-show transitions
      // and build a nested promise chain so that elements
      // only hide when the children are finished hiding.
      this.showDirectiveStack.reverse().map(thing => {
        return new Promise(resolve => {
          thing(finish => {
            resolve(finish);
          });
        });
      }).reduce((nestedPromise, promise) => {
        return nestedPromise.then(() => {
          return promise.then(finish => finish());
        });
      }, Promise.resolve(() => {})); // We've processed the handler stack. let's clear it.

      this.showDirectiveStack = [];
      this.showDirectiveLastElement = undefined;
    }

    updateElement(el, extraVars) {
      this.resolveBoundAttributes(el, false, extraVars);
    }

    registerListeners(el, extraVars) {
      getXAttrs(el, this).forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'on':
            registerListener(this, el, value, modifiers, expression, extraVars);
            break;

          case 'model':
            registerModelListener(this, el, modifiers, expression, extraVars);
            break;
        }
      });
    }

    resolveBoundAttributes(el, initialUpdate = false, extraVars) {
      let attrs = getXAttrs(el, this);
      attrs.forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'model':
            handleAttributeBindingDirective(this, el, 'value', expression, extraVars, type, modifiers);
            break;

          case 'bind':
            // The :key binding on an x-for is special, ignore it.
            if (el.tagName.toLowerCase() === 'template' && value === 'key') return;
            handleAttributeBindingDirective(this, el, value, expression, extraVars, type, modifiers);
            break;

          case 'text':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleTextDirective(el, output, expression);
            break;

          case 'html':
            handleHtmlDirective(this, el, expression, extraVars);
            break;

          case 'show':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleShowDirective(this, el, output, modifiers, initialUpdate);
            break;

          case 'if':
            // If this element also has x-for on it, don't process x-if.
            // We will let the "x-for" directive handle the "if"ing.
            if (attrs.some(i => i.type === 'for')) return;
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleIfDirective(this, el, output, initialUpdate, extraVars);
            break;

          case 'for':
            handleForDirective(this, el, expression, initialUpdate, extraVars);
            break;

          case 'cloak':
            el.removeAttribute('x-cloak');
            break;
        }
      });
    }

    evaluateReturnExpression(el, expression, extraVars = () => {}) {
      return saferEval(expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    evaluateCommandExpression(el, expression, extraVars = () => {}) {
      return saferEvalNoReturn(expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    getDispatchFunction(el) {
      return (event, detail = {}) => {
        el.dispatchEvent(new CustomEvent(event, {
          detail,
          bubbles: true
        }));
      };
    }

    listenForNewElementsToInitialize() {
      const targetNode = this.$el;
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        for (let i = 0; i < mutations.length; i++) {
          // Filter out mutations triggered from child components.
          const closestParentComponent = mutations[i].target.closest('[x-data]');
          if (!(closestParentComponent && closestParentComponent.isSameNode(this.$el))) continue;

          if (mutations[i].type === 'attributes' && mutations[i].attributeName === 'x-data') {
            const rawData = saferEval(mutations[i].target.getAttribute('x-data') || '{}', {
              $el: this.$el
            });
            Object.keys(rawData).forEach(key => {
              if (this.$data[key] !== rawData[key]) {
                this.$data[key] = rawData[key];
              }
            });
          }

          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              if (node.nodeType !== 1 || node.__x_inserted_me) return;

              if (node.matches('[x-data]') && !node.__x) {
                node.__x = new Component(node);
                return;
              }

              this.initializeElements(node);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    }

    getRefsProxy() {
      var self = this;
      var refObj = {};
      // One of the goals of this is to not hold elements in memory, but rather re-evaluate
      // the DOM when the system needs something from it. This way, the framework is flexible and
      // friendly to outside DOM changes from libraries like Vue/Livewire.
      // For this reason, I'm using an "on-demand" proxy to fake a "$refs" object.

      return new Proxy(refObj, {
        get(object, property) {
          if (property === '$isAlpineProxy') return true;
          var ref; // We can't just query the DOM because it's hard to filter out refs in
          // nested components.

          self.walkAndSkipNestedComponents(self.$el, el => {
            if (el.hasAttribute('x-ref') && el.getAttribute('x-ref') === property) {
              ref = el;
            }
          });
          return ref;
        }

      });
    }

  }

  const Alpine = {
    version: "2.7.2",
    pauseMutationObserver: false,
    magicProperties: {},
    onComponentInitializeds: [],
    onBeforeComponentInitializeds: [],
    ignoreFocusedForValueBinding: false,
    start: async function start() {
      if (!isTesting()) {
        await domReady();
      }

      this.discoverComponents(el => {
        this.initializeComponent(el);
      }); // It's easier and more performant to just support Turbolinks than listen
      // to MutationObserver mutations at the document level.

      document.addEventListener("turbolinks:load", () => {
        this.discoverUninitializedComponents(el => {
          this.initializeComponent(el);
        });
      });
      this.listenForNewUninitializedComponentsAtRunTime();
    },
    discoverComponents: function discoverComponents(callback) {
      const rootEls = document.querySelectorAll('[x-data]');
      rootEls.forEach(rootEl => {
        callback(rootEl);
      });
    },
    discoverUninitializedComponents: function discoverUninitializedComponents(callback, el = null) {
      const rootEls = (el || document).querySelectorAll('[x-data]');
      Array.from(rootEls).filter(el => el.__x === undefined).forEach(rootEl => {
        callback(rootEl);
      });
    },
    listenForNewUninitializedComponentsAtRunTime: function listenForNewUninitializedComponentsAtRunTime() {
      const targetNode = document.querySelector('body');
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        if (this.pauseMutationObserver) return;

        for (let i = 0; i < mutations.length; i++) {
          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              // Discard non-element nodes (like line-breaks)
              if (node.nodeType !== 1) return; // Discard any changes happening within an existing component.
              // They will take care of themselves.

              if (node.parentElement && node.parentElement.closest('[x-data]')) return;
              this.discoverUninitializedComponents(el => {
                this.initializeComponent(el);
              }, node.parentElement);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    },
    initializeComponent: function initializeComponent(el) {
      if (!el.__x) {
        // Wrap in a try/catch so that we don't prevent other components
        // from initializing when one component contains an error.
        try {
          el.__x = new Component(el);
        } catch (error) {
          setTimeout(() => {
            throw error;
          }, 0);
        }
      }
    },
    clone: function clone(component, newEl) {
      if (!newEl.__x) {
        newEl.__x = new Component(newEl, component);
      }
    },
    addMagicProperty: function addMagicProperty(name, callback) {
      this.magicProperties[name] = callback;
    },
    onComponentInitialized: function onComponentInitialized(callback) {
      this.onComponentInitializeds.push(callback);
    },
    onBeforeComponentInitialized: function onBeforeComponentInitialized(callback) {
      this.onBeforeComponentInitializeds.push(callback);
    }
  };

  if (!isTesting()) {
    window.Alpine = Alpine;

    if (window.deferLoadingAlpine) {
      window.deferLoadingAlpine(function () {
        window.Alpine.start();
      });
    } else {
      window.Alpine.start();
    }
  }

  return Alpine;

})));


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
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

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js"); // TODO: INJECT REAL VALUES FROM CONTROLLER


var defaultLight = {
  "reachable": false,
  "isOn": false,
  "brightness": 0,
  "colour": "0,0,0"
};
window.lightStatus = {
  "hue11": defaultLight,
  "hue16": defaultLight,
  "hue17": defaultLight,
  "hue19": defaultLight,
  "hue20": defaultLight,
  "hue21": defaultLight,
  "hue22": defaultLight,
  "hue23": defaultLight,
  "hue24": defaultLight,
  "hue25": defaultLight,
  "hue26": defaultLight,
  "hue27": defaultLight,
  "hue28": defaultLight,
  "lifxd073d512326b": defaultLight,
  "lifxd073d5032114": defaultLight
};

(function updateStatus() {
  axios.get('/lights').then(function (response) {
    window.lightStatus = response.data;
    window.dispatchEvent(new Event('new-status'));
  })["catch"](function (error) {
    console.log(error);
  });
  setTimeout(updateStatus, 2.5 * 1000);
})();

window.dashboard = function () {
  return {
    loaded: false,
    lightStatus: window.lightStatus,
    updateStatus: function updateStatus() {
      console.log('Updating status');
      this.lightStatus = window.lightStatus;
      this.loaded = true;
    }
  };
};

window.light = function (id) {
  return {
    wait: false,
    id: id,
    toggle: function toggle() {
      var _this = this;

      this.wait = true;
      axios.get('/lights/' + id + '/toggle').then(function () {
        _this.wait = false;
      })["catch"](function (error) {
        console.log(error);
        this.wait = false;
      });
    },
    details: function details() {
      location.href = '/lights/' + id + '/detail';
    }
  };
};

window.group = function (path) {
  return {
    path: path,
    toggle: function toggle() {
      axios.get('/groups/' + path + '/toggle').then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  };
};

window.details = function (id, brightness) {
  return {
    id: id,
    brightness: brightness,
    setColour: function setColour(colour) {
      axios.get('/lights/' + id + '/set-colour', {
        params: {
          colour: colour
        }
      }).then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    on: function on() {
      axios.get('/lights/' + id + '/on').then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    off: function off() {
      axios.get('/lights/' + id + '/off').then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    setBrightness: function setBrightness() {
      axios.get('/lights/' + id + '/set-brightness', {
        params: {
          brightness: this.brightness
        }
      }).then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  };
};

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.alpinejs = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/alpine.js");
window.UIkit = __webpack_require__(/*! ../../vendor/uikit/uikit */ "./vendor/uikit/uikit/dist/js/uikit.js");
window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./vendor/uikit/uikit/dist/js/uikit.js":
/*!*********************************************!*\
  !*** ./vendor/uikit/uikit/dist/js/uikit.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! UIkit 3.5.8 | https://www.getuikit.com | (c) 2014 - 2020 YOOtheme | MIT License */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function () {
  'use strict';

  var objPrototype = Object.prototype;
  var hasOwnProperty = objPrototype.hasOwnProperty;

  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }

  var hyphenateCache = {};
  var hyphenateRe = /([a-z\d])([A-Z])/g;

  function hyphenate(str) {
    if (!(str in hyphenateCache)) {
      hyphenateCache[str] = str.replace(hyphenateRe, '$1-$2').toLowerCase();
    }

    return hyphenateCache[str];
  }

  var camelizeRe = /-(\w)/g;

  function camelize(str) {
    return str.replace(camelizeRe, toUpper);
  }

  function toUpper(_, c) {
    return c ? c.toUpperCase() : '';
  }

  function ucfirst(str) {
    return str.length ? toUpper(null, str.charAt(0)) + str.slice(1) : '';
  }

  var strPrototype = String.prototype;

  var startsWithFn = strPrototype.startsWith || function (search) {
    return this.lastIndexOf(search, 0) === 0;
  };

  function startsWith(str, search) {
    return startsWithFn.call(str, search);
  }

  var endsWithFn = strPrototype.endsWith || function (search) {
    return this.substr(-search.length) === search;
  };

  function endsWith(str, search) {
    return endsWithFn.call(str, search);
  }

  var arrPrototype = Array.prototype;

  var includesFn = function includesFn(search, i) {
    return !!~this.indexOf(search, i);
  };

  var includesStr = strPrototype.includes || includesFn;
  var includesArray = arrPrototype.includes || includesFn;

  function includes(obj, search) {
    return obj && (isString(obj) ? includesStr : includesArray).call(obj, search);
  }

  var findIndexFn = arrPrototype.findIndex || function (predicate) {
    var arguments$1 = arguments;

    for (var i = 0; i < this.length; i++) {
      if (predicate.call(arguments$1[1], this[i], i, this)) {
        return i;
      }
    }

    return -1;
  };

  function findIndex(array, predicate) {
    return findIndexFn.call(array, predicate);
  }

  var isArray = Array.isArray;

  function isFunction(obj) {
    return typeof obj === 'function';
  }

  function isObject(obj) {
    return obj !== null && _typeof(obj) === 'object';
  }

  var toString = objPrototype.toString;

  function isPlainObject(obj) {
    return toString.call(obj) === '[object Object]';
  }

  function isWindow(obj) {
    return isObject(obj) && obj === obj.window;
  }

  function isDocument(obj) {
    return isObject(obj) && obj.nodeType === 9;
  }

  function isJQuery(obj) {
    return isObject(obj) && !!obj.jquery;
  }

  function isNode(obj) {
    return isObject(obj) && obj.nodeType >= 1;
  }

  function isElement(obj) {
    return isObject(obj) && obj.nodeType === 1;
  }

  function isNodeCollection(obj) {
    return toString.call(obj).match(/^\[object (NodeList|HTMLCollection)\]$/);
  }

  function isBoolean(value) {
    return typeof value === 'boolean';
  }

  function isString(value) {
    return typeof value === 'string';
  }

  function isNumber(value) {
    return typeof value === 'number';
  }

  function isNumeric(value) {
    return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value));
  }

  function isEmpty(obj) {
    return !(isArray(obj) ? obj.length : isObject(obj) ? Object.keys(obj).length : false);
  }

  function isUndefined(value) {
    return value === void 0;
  }

  function toBoolean(value) {
    return isBoolean(value) ? value : value === 'true' || value === '1' || value === '' ? true : value === 'false' || value === '0' ? false : value;
  }

  function toNumber(value) {
    var number = Number(value);
    return !isNaN(number) ? number : false;
  }

  function toFloat(value) {
    return parseFloat(value) || 0;
  }

  function toNode(element) {
    return isNode(element) ? element : isNodeCollection(element) || isJQuery(element) ? element[0] : isArray(element) ? toNode(element[0]) : null;
  }

  function toNodes(element) {
    return isNode(element) ? [element] : isNodeCollection(element) ? arrPrototype.slice.call(element) : isArray(element) ? element.map(toNode).filter(Boolean) : isJQuery(element) ? element.toArray() : [];
  }

  function toWindow(element) {
    if (isWindow(element)) {
      return element;
    }

    element = toNode(element);
    return element ? (isDocument(element) ? element : element.ownerDocument).defaultView : window;
  }

  function toList(value) {
    return isArray(value) ? value : isString(value) ? value.split(/,(?![^(]*\))/).map(function (value) {
      return isNumeric(value) ? toNumber(value) : toBoolean(value.trim());
    }) : [value];
  }

  function toMs(time) {
    return !time ? 0 : endsWith(time, 'ms') ? toFloat(time) : toFloat(time) * 1000;
  }

  function isEqual(value, other) {
    return value === other || isObject(value) && isObject(other) && Object.keys(value).length === Object.keys(other).length && each(value, function (val, key) {
      return val === other[key];
    });
  }

  function swap(value, a, b) {
    return value.replace(new RegExp(a + "|" + b, 'g'), function (match) {
      return match === a ? b : a;
    });
  }

  var assign = Object.assign || function (target) {
    var args = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }

    target = Object(target);

    for (var i = 0; i < args.length; i++) {
      var source = args[i];

      if (source !== null) {
        for (var key in source) {
          if (hasOwn(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }

    return target;
  };

  function last(array) {
    return array[array.length - 1];
  }

  function each(obj, cb) {
    for (var key in obj) {
      if (false === cb(obj[key], key)) {
        return false;
      }
    }

    return true;
  }

  function sortBy(array, prop) {
    return array.sort(function (ref, ref$1) {
      var propA = ref[prop];
      if (propA === void 0) propA = 0;
      var propB = ref$1[prop];
      if (propB === void 0) propB = 0;
      return propA > propB ? 1 : propB > propA ? -1 : 0;
    });
  }

  function uniqueBy(array, prop) {
    var seen = new Set();
    return array.filter(function (ref) {
      var check = ref[prop];
      return seen.has(check) ? false : seen.add(check) || true;
    } // IE 11 does not return the Set object
    );
  }

  function clamp(number, min, max) {
    if (min === void 0) min = 0;
    if (max === void 0) max = 1;
    return Math.min(Math.max(toNumber(number) || 0, min), max);
  }

  function noop() {}

  function intersectRect(r1, r2) {
    return r1.left < r2.right && r1.right > r2.left && r1.top < r2.bottom && r1.bottom > r2.top;
  }

  function pointInRect(point, rect) {
    return point.x <= rect.right && point.x >= rect.left && point.y <= rect.bottom && point.y >= rect.top;
  }

  var Dimensions = {
    ratio: function ratio(dimensions, prop, value) {
      var obj;
      var aProp = prop === 'width' ? 'height' : 'width';
      return obj = {}, obj[aProp] = dimensions[prop] ? Math.round(value * dimensions[aProp] / dimensions[prop]) : dimensions[aProp], obj[prop] = value, obj;
    },
    contain: function contain(dimensions, maxDimensions) {
      var this$1 = this;
      dimensions = assign({}, dimensions);
      each(dimensions, function (_, prop) {
        return dimensions = dimensions[prop] > maxDimensions[prop] ? this$1.ratio(dimensions, prop, maxDimensions[prop]) : dimensions;
      });
      return dimensions;
    },
    cover: function cover(dimensions, maxDimensions) {
      var this$1 = this;
      dimensions = this.contain(dimensions, maxDimensions);
      each(dimensions, function (_, prop) {
        return dimensions = dimensions[prop] < maxDimensions[prop] ? this$1.ratio(dimensions, prop, maxDimensions[prop]) : dimensions;
      });
      return dimensions;
    }
  };

  function attr(element, name, value) {
    if (isObject(name)) {
      for (var key in name) {
        attr(element, key, name[key]);
      }

      return;
    }

    if (isUndefined(value)) {
      element = toNode(element);
      return element && element.getAttribute(name);
    } else {
      toNodes(element).forEach(function (element) {
        if (isFunction(value)) {
          value = value.call(element, attr(element, name));
        }

        if (value === null) {
          removeAttr(element, name);
        } else {
          element.setAttribute(name, value);
        }
      });
    }
  }

  function hasAttr(element, name) {
    return toNodes(element).some(function (element) {
      return element.hasAttribute(name);
    });
  }

  function removeAttr(element, name) {
    element = toNodes(element);
    name.split(' ').forEach(function (name) {
      return element.forEach(function (element) {
        return element.hasAttribute(name) && element.removeAttribute(name);
      });
    });
  }

  function data(element, attribute) {
    for (var i = 0, attrs = [attribute, "data-" + attribute]; i < attrs.length; i++) {
      if (hasAttr(element, attrs[i])) {
        return attr(element, attrs[i]);
      }
    }
  }
  /* global DocumentTouch */


  var inBrowser = typeof window !== 'undefined';
  var isIE = inBrowser && /msie|trident/i.test(window.navigator.userAgent);
  var isRtl = inBrowser && attr(document.documentElement, 'dir') === 'rtl';
  var hasTouchEvents = inBrowser && 'ontouchstart' in window;
  var hasPointerEvents = inBrowser && window.PointerEvent;
  var hasTouch = inBrowser && (hasTouchEvents || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints); // IE >=11

  var pointerDown = hasPointerEvents ? 'pointerdown' : hasTouchEvents ? 'touchstart' : 'mousedown';
  var pointerMove = hasPointerEvents ? 'pointermove' : hasTouchEvents ? 'touchmove' : 'mousemove';
  var pointerUp = hasPointerEvents ? 'pointerup' : hasTouchEvents ? 'touchend' : 'mouseup';
  var pointerEnter = hasPointerEvents ? 'pointerenter' : hasTouchEvents ? '' : 'mouseenter';
  var pointerLeave = hasPointerEvents ? 'pointerleave' : hasTouchEvents ? '' : 'mouseleave';
  var pointerCancel = hasPointerEvents ? 'pointercancel' : 'touchcancel';

  function query(selector, context) {
    return toNode(selector) || find(selector, getContext(selector, context));
  }

  function queryAll(selector, context) {
    var nodes = toNodes(selector);
    return nodes.length && nodes || findAll(selector, getContext(selector, context));
  }

  function getContext(selector, context) {
    if (context === void 0) context = document;
    return isContextSelector(selector) || isDocument(context) ? context : context.ownerDocument;
  }

  function find(selector, context) {
    return toNode(_query(selector, context, 'querySelector'));
  }

  function findAll(selector, context) {
    return toNodes(_query(selector, context, 'querySelectorAll'));
  }

  function _query(selector, context, queryFn) {
    if (context === void 0) context = document;

    if (!selector || !isString(selector)) {
      return null;
    }

    selector = selector.replace(contextSanitizeRe, '$1 *');
    var removes;

    if (isContextSelector(selector)) {
      removes = [];
      selector = splitSelector(selector).map(function (selector, i) {
        var ctx = context;

        if (selector[0] === '!') {
          var selectors = selector.substr(1).trim().split(' ');
          ctx = closest(parent(context), selectors[0]);
          selector = selectors.slice(1).join(' ').trim();
        }

        if (selector[0] === '-') {
          var selectors$1 = selector.substr(1).trim().split(' ');
          var prev = (ctx || context).previousElementSibling;
          ctx = matches(prev, selector.substr(1)) ? prev : null;
          selector = selectors$1.slice(1).join(' ');
        }

        if (!ctx) {
          return null;
        }

        if (!ctx.id) {
          ctx.id = "uk-" + Date.now() + i;
          removes.push(function () {
            return removeAttr(ctx, 'id');
          });
        }

        return "#" + escape(ctx.id) + " " + selector;
      }).filter(Boolean).join(',');
      context = document;
    }

    try {
      return context[queryFn](selector);
    } catch (e) {
      return null;
    } finally {
      removes && removes.forEach(function (remove) {
        return remove();
      });
    }
  }

  var contextSelectorRe = /(^|[^\\],)\s*[!>+~-]/;
  var contextSanitizeRe = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;

  function isContextSelector(selector) {
    return isString(selector) && selector.match(contextSelectorRe);
  }

  var selectorRe = /.*?[^\\](?:,|$)/g;

  function splitSelector(selector) {
    return selector.match(selectorRe).map(function (selector) {
      return selector.replace(/,$/, '').trim();
    });
  }

  var elProto = inBrowser ? Element.prototype : {};
  var matchesFn = elProto.matches || elProto.webkitMatchesSelector || elProto.msMatchesSelector || noop;

  function matches(element, selector) {
    return toNodes(element).some(function (element) {
      return matchesFn.call(element, selector);
    });
  }

  var closestFn = elProto.closest || function (selector) {
    var ancestor = this;

    do {
      if (matches(ancestor, selector)) {
        return ancestor;
      }
    } while (ancestor = parent(ancestor));
  };

  function closest(element, selector) {
    if (startsWith(selector, '>')) {
      selector = selector.slice(1);
    }

    return isElement(element) ? closestFn.call(element, selector) : toNodes(element).map(function (element) {
      return closest(element, selector);
    }).filter(Boolean);
  }

  function parent(element) {
    element = toNode(element);
    return element && isElement(element.parentNode) && element.parentNode;
  }

  var escapeFn = inBrowser && window.CSS && CSS.escape || function (css) {
    return css.replace(/([^\x7f-\uFFFF\w-])/g, function (match) {
      return "\\" + match;
    });
  };

  function escape(css) {
    return isString(css) ? escapeFn.call(null, css) : '';
  }

  var voidElements = {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    menuitem: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
  };

  function isVoidElement(element) {
    return toNodes(element).some(function (element) {
      return voidElements[element.tagName.toLowerCase()];
    });
  }

  function isVisible(element) {
    return toNodes(element).some(function (element) {
      return element.offsetWidth || element.offsetHeight || element.getClientRects().length;
    });
  }

  var selInput = 'input,select,textarea,button';

  function isInput(element) {
    return toNodes(element).some(function (element) {
      return matches(element, selInput);
    });
  }

  function filter(element, selector) {
    return toNodes(element).filter(function (element) {
      return matches(element, selector);
    });
  }

  function within(element, selector) {
    return !isString(selector) ? element === selector || (isDocument(selector) ? selector.documentElement : toNode(selector)).contains(toNode(element)) // IE 11 document does not implement contains
    : matches(element, selector) || !!closest(element, selector);
  }

  function parents(element, selector) {
    var elements = [];

    while (element = parent(element)) {
      if (!selector || matches(element, selector)) {
        elements.push(element);
      }
    }

    return elements;
  }

  function _children(element, selector) {
    element = toNode(element);
    var children = element ? toNodes(element.children) : [];
    return selector ? filter(children, selector) : children;
  }

  function on() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    var ref = getArgs(args);
    var targets = ref[0];
    var type = ref[1];
    var selector = ref[2];
    var listener = ref[3];
    var useCapture = ref[4];
    targets = toEventTargets(targets);

    if (listener.length > 1) {
      listener = detail(listener);
    }

    if (useCapture && useCapture.self) {
      listener = selfFilter(listener);
    }

    if (selector) {
      listener = delegate(targets, selector, listener);
    }

    useCapture = useCaptureFilter(useCapture);
    type.split(' ').forEach(function (type) {
      return targets.forEach(function (target) {
        return target.addEventListener(type, listener, useCapture);
      });
    });
    return function () {
      return off(targets, type, listener, useCapture);
    };
  }

  function off(targets, type, listener, useCapture) {
    if (useCapture === void 0) useCapture = false;
    useCapture = useCaptureFilter(useCapture);
    targets = toEventTargets(targets);
    type.split(' ').forEach(function (type) {
      return targets.forEach(function (target) {
        return target.removeEventListener(type, listener, useCapture);
      });
    });
  }

  function once() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    var ref = getArgs(args);
    var element = ref[0];
    var type = ref[1];
    var selector = ref[2];
    var listener = ref[3];
    var useCapture = ref[4];
    var condition = ref[5];
    var off = on(element, type, selector, function (e) {
      var result = !condition || condition(e);

      if (result) {
        off();
        listener(e, result);
      }
    }, useCapture);
    return off;
  }

  function trigger(targets, event, detail) {
    return toEventTargets(targets).reduce(function (notCanceled, target) {
      return notCanceled && target.dispatchEvent(createEvent(event, true, true, detail));
    }, true);
  }

  function createEvent(e, bubbles, cancelable, detail) {
    if (bubbles === void 0) bubbles = true;
    if (cancelable === void 0) cancelable = false;

    if (isString(e)) {
      var event = document.createEvent('CustomEvent'); // IE 11

      event.initCustomEvent(e, bubbles, cancelable, detail);
      e = event;
    }

    return e;
  }

  function getArgs(args) {
    if (isFunction(args[2])) {
      args.splice(2, 0, false);
    }

    return args;
  }

  function delegate(delegates, selector, listener) {
    var this$1 = this;
    return function (e) {
      delegates.forEach(function (delegate) {
        var current = selector[0] === '>' ? findAll(selector, delegate).reverse().filter(function (element) {
          return within(e.target, element);
        })[0] : closest(e.target, selector);

        if (current) {
          e.delegate = delegate;
          e.current = current;
          listener.call(this$1, e);
        }
      });
    };
  }

  function detail(listener) {
    return function (e) {
      return isArray(e.detail) ? listener.apply(void 0, [e].concat(e.detail)) : listener(e);
    };
  }

  function selfFilter(listener) {
    return function (e) {
      if (e.target === e.currentTarget || e.target === e.current) {
        return listener.call(null, e);
      }
    };
  }

  function useCaptureFilter(options) {
    return options && isIE && !isBoolean(options) ? !!options.capture : options;
  }

  function isEventTarget(target) {
    return target && 'addEventListener' in target;
  }

  function toEventTarget(target) {
    return isEventTarget(target) ? target : toNode(target);
  }

  function toEventTargets(target) {
    return isArray(target) ? target.map(toEventTarget).filter(Boolean) : isString(target) ? findAll(target) : isEventTarget(target) ? [target] : toNodes(target);
  }

  function isTouch(e) {
    return e.pointerType === 'touch' || !!e.touches;
  }

  function getEventPos(e) {
    var touches = e.touches;
    var changedTouches = e.changedTouches;
    var ref = touches && touches[0] || changedTouches && changedTouches[0] || e;
    var x = ref.clientX;
    var y = ref.clientY;
    return {
      x: x,
      y: y
    };
  }
  /* global setImmediate */


  var Promise = inBrowser && window.Promise || PromiseFn;

  var Deferred = function Deferred() {
    var this$1 = this;
    this.promise = new Promise(function (resolve, reject) {
      this$1.reject = reject;
      this$1.resolve = resolve;
    });
  };
  /**
   * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
   */


  var RESOLVED = 0;
  var REJECTED = 1;
  var PENDING = 2;
  var async = inBrowser && window.setImmediate || setTimeout;

  function PromiseFn(executor) {
    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];
    var promise = this;

    try {
      executor(function (x) {
        promise.resolve(x);
      }, function (r) {
        promise.reject(r);
      });
    } catch (e) {
      promise.reject(e);
    }
  }

  PromiseFn.reject = function (r) {
    return new PromiseFn(function (resolve, reject) {
      reject(r);
    });
  };

  PromiseFn.resolve = function (x) {
    return new PromiseFn(function (resolve, reject) {
      resolve(x);
    });
  };

  PromiseFn.all = function all(iterable) {
    return new PromiseFn(function (resolve, reject) {
      var result = [];
      var count = 0;

      if (iterable.length === 0) {
        resolve(result);
      }

      function resolver(i) {
        return function (x) {
          result[i] = x;
          count += 1;

          if (count === iterable.length) {
            resolve(result);
          }
        };
      }

      for (var i = 0; i < iterable.length; i += 1) {
        PromiseFn.resolve(iterable[i]).then(resolver(i), reject);
      }
    });
  };

  PromiseFn.race = function race(iterable) {
    return new PromiseFn(function (resolve, reject) {
      for (var i = 0; i < iterable.length; i += 1) {
        PromiseFn.resolve(iterable[i]).then(resolve, reject);
      }
    });
  };

  var p = PromiseFn.prototype;

  p.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
      if (x === promise) {
        throw new TypeError('Promise settled with itself.');
      }

      var called = false;

      try {
        var then = x && x.then;

        if (x !== null && isObject(x) && isFunction(then)) {
          then.call(x, function (x) {
            if (!called) {
              promise.resolve(x);
            }

            called = true;
          }, function (r) {
            if (!called) {
              promise.reject(r);
            }

            called = true;
          });
          return;
        }
      } catch (e) {
        if (!called) {
          promise.reject(e);
        }

        return;
      }

      promise.state = RESOLVED;
      promise.value = x;
      promise.notify();
    }
  };

  p.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
      if (reason === promise) {
        throw new TypeError('Promise settled with itself.');
      }

      promise.state = REJECTED;
      promise.value = reason;
      promise.notify();
    }
  };

  p.notify = function notify() {
    var this$1 = this;
    async(function () {
      if (this$1.state !== PENDING) {
        while (this$1.deferred.length) {
          var ref = this$1.deferred.shift();
          var onResolved = ref[0];
          var onRejected = ref[1];
          var resolve = ref[2];
          var reject = ref[3];

          try {
            if (this$1.state === RESOLVED) {
              if (isFunction(onResolved)) {
                resolve(onResolved.call(undefined, this$1.value));
              } else {
                resolve(this$1.value);
              }
            } else if (this$1.state === REJECTED) {
              if (isFunction(onRejected)) {
                resolve(onRejected.call(undefined, this$1.value));
              } else {
                reject(this$1.value);
              }
            }
          } catch (e) {
            reject(e);
          }
        }
      }
    });
  };

  p.then = function then(onResolved, onRejected) {
    var this$1 = this;
    return new PromiseFn(function (resolve, reject) {
      this$1.deferred.push([onResolved, onRejected, resolve, reject]);
      this$1.notify();
    });
  };

  p["catch"] = function (onRejected) {
    return this.then(undefined, onRejected);
  };

  function ajax(url, options) {
    return new Promise(function (resolve, reject) {
      var env = assign({
        data: null,
        method: 'GET',
        headers: {},
        xhr: new XMLHttpRequest(),
        beforeSend: noop,
        responseType: ''
      }, options);
      env.beforeSend(env);
      var xhr = env.xhr;

      for (var prop in env) {
        if (prop in xhr) {
          try {
            xhr[prop] = env[prop];
          } catch (e) {}
        }
      }

      xhr.open(env.method.toUpperCase(), url);

      for (var header in env.headers) {
        xhr.setRequestHeader(header, env.headers[header]);
      }

      on(xhr, 'load', function () {
        if (xhr.status === 0 || xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
          // IE 11 does not support responseType 'json'
          if (env.responseType === 'json' && isString(xhr.response)) {
            xhr = assign(copyXhr(xhr), {
              response: JSON.parse(xhr.response)
            });
          }

          resolve(xhr);
        } else {
          reject(assign(Error(xhr.statusText), {
            xhr: xhr,
            status: xhr.status
          }));
        }
      });
      on(xhr, 'error', function () {
        return reject(assign(Error('Network Error'), {
          xhr: xhr
        }));
      });
      on(xhr, 'timeout', function () {
        return reject(assign(Error('Network Timeout'), {
          xhr: xhr
        }));
      });
      xhr.send(env.data);
    });
  }

  function getImage(src, srcset, sizes) {
    return new Promise(function (resolve, reject) {
      var img = new Image();

      img.onerror = function (e) {
        return reject(e);
      };

      img.onload = function () {
        return resolve(img);
      };

      sizes && (img.sizes = sizes);
      srcset && (img.srcset = srcset);
      img.src = src;
    });
  }

  function copyXhr(source) {
    var target = {};

    for (var key in source) {
      target[key] = source[key];
    }

    return target;
  }

  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
      return;
    }

    var unbind = on(document, 'DOMContentLoaded', function () {
      unbind();
      fn();
    });
  }

  function index(element, ref) {
    return ref ? toNodes(element).indexOf(toNode(ref)) : _children(parent(element)).indexOf(element);
  }

  function _getIndex(i, elements, current, finite) {
    if (current === void 0) current = 0;
    if (finite === void 0) finite = false;
    elements = toNodes(elements);
    var length = elements.length;
    i = isNumeric(i) ? toNumber(i) : i === 'next' ? current + 1 : i === 'previous' ? current - 1 : index(elements, i);

    if (finite) {
      return clamp(i, 0, length - 1);
    }

    i %= length;
    return i < 0 ? i + length : i;
  }

  function empty(element) {
    element = $(element);
    element.innerHTML = '';
    return element;
  }

  function html(parent, html) {
    parent = $(parent);
    return isUndefined(html) ? parent.innerHTML : append(parent.hasChildNodes() ? empty(parent) : parent, html);
  }

  function prepend(parent, element) {
    parent = $(parent);

    if (!parent.hasChildNodes()) {
      return append(parent, element);
    } else {
      return insertNodes(element, function (element) {
        return parent.insertBefore(element, parent.firstChild);
      });
    }
  }

  function append(parent, element) {
    parent = $(parent);
    return insertNodes(element, function (element) {
      return parent.appendChild(element);
    });
  }

  function before(ref, element) {
    ref = $(ref);
    return insertNodes(element, function (element) {
      return ref.parentNode.insertBefore(element, ref);
    });
  }

  function after(ref, element) {
    ref = $(ref);
    return insertNodes(element, function (element) {
      return ref.nextSibling ? before(ref.nextSibling, element) : append(ref.parentNode, element);
    });
  }

  function insertNodes(element, fn) {
    element = isString(element) ? fragment(element) : element;
    return element ? 'length' in element ? toNodes(element).map(fn) : fn(element) : null;
  }

  function _remove(element) {
    toNodes(element).map(function (element) {
      return element.parentNode && element.parentNode.removeChild(element);
    });
  }

  function wrapAll(element, structure) {
    structure = toNode(before(element, structure));

    while (structure.firstChild) {
      structure = structure.firstChild;
    }

    append(structure, element);
    return structure;
  }

  function wrapInner(element, structure) {
    return toNodes(toNodes(element).map(function (element) {
      return element.hasChildNodes ? wrapAll(toNodes(element.childNodes), structure) : append(element, structure);
    }));
  }

  function unwrap(element) {
    toNodes(element).map(parent).filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (parent) {
      before(parent, parent.childNodes);

      _remove(parent);
    });
  }

  var fragmentRe = /^\s*<(\w+|!)[^>]*>/;
  var singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

  function fragment(html) {
    var matches = singleTagRe.exec(html);

    if (matches) {
      return document.createElement(matches[1]);
    }

    var container = document.createElement('div');

    if (fragmentRe.test(html)) {
      container.insertAdjacentHTML('beforeend', html.trim());
    } else {
      container.textContent = html;
    }

    return container.childNodes.length > 1 ? toNodes(container.childNodes) : container.firstChild;
  }

  function apply(node, fn) {
    if (!isElement(node)) {
      return;
    }

    fn(node);
    node = node.firstElementChild;

    while (node) {
      var next = node.nextElementSibling;
      apply(node, fn);
      node = next;
    }
  }

  function $(selector, context) {
    return !isString(selector) ? toNode(selector) : isHtml(selector) ? toNode(fragment(selector)) : find(selector, context);
  }

  function $$(selector, context) {
    return !isString(selector) ? toNodes(selector) : isHtml(selector) ? toNodes(fragment(selector)) : findAll(selector, context);
  }

  function isHtml(str) {
    return str[0] === '<' || str.match(/^\s*</);
  }

  function addClass(element) {
    var args = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }

    apply$1(element, args, 'add');
  }

  function removeClass(element) {
    var args = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }

    apply$1(element, args, 'remove');
  }

  function removeClasses(element, cls) {
    attr(element, 'class', function (value) {
      return (value || '').replace(new RegExp("\\b" + cls + "\\b", 'g'), '');
    });
  }

  function replaceClass(element) {
    var args = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }

    args[0] && removeClass(element, args[0]);
    args[1] && addClass(element, args[1]);
  }

  function hasClass(element, cls) {
    return cls && toNodes(element).some(function (element) {
      return element.classList.contains(cls.split(' ')[0]);
    });
  }

  function toggleClass(element) {
    var args = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }

    if (!args.length) {
      return;
    }

    args = getArgs$1(args);
    var force = !isString(last(args)) ? args.pop() : []; // in iOS 9.3 force === undefined evaluates to false

    args = args.filter(Boolean);
    toNodes(element).forEach(function (ref) {
      var classList = ref.classList;

      for (var i = 0; i < args.length; i++) {
        supports.Force ? classList.toggle.apply(classList, [args[i]].concat(force)) : classList[(!isUndefined(force) ? force : !classList.contains(args[i])) ? 'add' : 'remove'](args[i]);
      }
    });
  }

  function apply$1(element, args, fn) {
    args = getArgs$1(args).filter(Boolean);
    args.length && toNodes(element).forEach(function (ref) {
      var classList = ref.classList;
      supports.Multiple ? classList[fn].apply(classList, args) : args.forEach(function (cls) {
        return classList[fn](cls);
      });
    });
  }

  function getArgs$1(args) {
    return args.reduce(function (args, arg) {
      return args.concat.call(args, isString(arg) && includes(arg, ' ') ? arg.trim().split(' ') : arg);
    }, []);
  } // IE 11


  var supports = {
    get Multiple() {
      return this.get('_multiple');
    },

    get Force() {
      return this.get('_force');
    },

    get: function get(key) {
      if (!hasOwn(this, key)) {
        var ref = document.createElement('_');
        var classList = ref.classList;
        classList.add('a', 'b');
        classList.toggle('c', false);
        this._multiple = classList.contains('b');
        this._force = !classList.contains('c');
      }

      return this[key];
    }
  };
  var cssNumber = {
    'animation-iteration-count': true,
    'column-count': true,
    'fill-opacity': true,
    'flex-grow': true,
    'flex-shrink': true,
    'font-weight': true,
    'line-height': true,
    'opacity': true,
    'order': true,
    'orphans': true,
    'stroke-dasharray': true,
    'stroke-dashoffset': true,
    'widows': true,
    'z-index': true,
    'zoom': true
  };

  function css(element, property, value) {
    return toNodes(element).map(function (element) {
      if (isString(property)) {
        property = propName(property);

        if (isUndefined(value)) {
          return getStyle(element, property);
        } else if (!value && !isNumber(value)) {
          element.style.removeProperty(property);
        } else {
          element.style[property] = isNumeric(value) && !cssNumber[property] ? value + "px" : value;
        }
      } else if (isArray(property)) {
        var styles = getStyles(element);
        return property.reduce(function (props, property) {
          props[property] = styles[propName(property)];
          return props;
        }, {});
      } else if (isObject(property)) {
        each(property, function (value, property) {
          return css(element, property, value);
        });
      }

      return element;
    })[0];
  }

  function getStyles(element, pseudoElt) {
    element = toNode(element);
    return element.ownerDocument.defaultView.getComputedStyle(element, pseudoElt);
  }

  function getStyle(element, property, pseudoElt) {
    return getStyles(element, pseudoElt)[property];
  }

  var vars = {};

  function getCssVar(name) {
    var docEl = document.documentElement;

    if (!isIE) {
      return getStyles(docEl).getPropertyValue("--uk-" + name);
    }

    if (!(name in vars)) {
      /* usage in css: .uk-name:before { content:"xyz" } */
      var element = append(docEl, document.createElement('div'));
      addClass(element, "uk-" + name);
      vars[name] = getStyle(element, 'content', ':before').replace(/^["'](.*)["']$/, '$1');

      _remove(element);
    }

    return vars[name];
  }

  var cssProps = {};

  function propName(name) {
    var ret = cssProps[name];

    if (!ret) {
      ret = cssProps[name] = vendorPropName(name) || name;
    }

    return ret;
  }

  var cssPrefixes = ['webkit', 'moz', 'ms'];

  function vendorPropName(name) {
    name = hyphenate(name);
    var ref = document.documentElement;
    var style = ref.style;

    if (name in style) {
      return name;
    }

    var i = cssPrefixes.length,
        prefixedName;

    while (i--) {
      prefixedName = "-" + cssPrefixes[i] + "-" + name;

      if (prefixedName in style) {
        return prefixedName;
      }
    }
  }

  function transition(element, props, duration, timing) {
    if (duration === void 0) duration = 400;
    if (timing === void 0) timing = 'linear';
    return Promise.all(toNodes(element).map(function (element) {
      return new Promise(function (resolve, reject) {
        for (var name in props) {
          var value = css(element, name);

          if (value === '') {
            css(element, name, value);
          }
        }

        var timer = setTimeout(function () {
          return trigger(element, 'transitionend');
        }, duration);
        once(element, 'transitionend transitioncanceled', function (ref) {
          var type = ref.type;
          clearTimeout(timer);
          removeClass(element, 'uk-transition');
          css(element, {
            transitionProperty: '',
            transitionDuration: '',
            transitionTimingFunction: ''
          });
          type === 'transitioncanceled' ? reject() : resolve();
        }, {
          self: true
        });
        addClass(element, 'uk-transition');
        css(element, assign({
          transitionProperty: Object.keys(props).map(propName).join(','),
          transitionDuration: duration + "ms",
          transitionTimingFunction: timing
        }, props));
      });
    }));
  }

  var Transition = {
    start: transition,
    stop: function stop(element) {
      trigger(element, 'transitionend');
      return Promise.resolve();
    },
    cancel: function cancel(element) {
      trigger(element, 'transitioncanceled');
    },
    inProgress: function inProgress(element) {
      return hasClass(element, 'uk-transition');
    }
  };
  var animationPrefix = 'uk-animation-';

  function animate(element, animation, duration, origin, out) {
    if (duration === void 0) duration = 200;
    return Promise.all(toNodes(element).map(function (element) {
      return new Promise(function (resolve, reject) {
        trigger(element, 'animationcanceled');
        var timer = setTimeout(function () {
          return trigger(element, 'animationend');
        }, duration);
        once(element, 'animationend animationcanceled', function (ref) {
          var type = ref.type;
          clearTimeout(timer);
          type === 'animationcanceled' ? reject() : resolve();
          css(element, 'animationDuration', '');
          removeClasses(element, animationPrefix + "\\S*");
        }, {
          self: true
        });
        css(element, 'animationDuration', duration + "ms");
        addClass(element, animation, animationPrefix + (out ? 'leave' : 'enter'));

        if (startsWith(animation, animationPrefix)) {
          addClass(element, origin && "uk-transform-origin-" + origin, out && animationPrefix + "reverse");
        }
      });
    }));
  }

  var _inProgress = new RegExp(animationPrefix + "(enter|leave)");

  var Animation = {
    "in": animate,
    out: function out(element, animation, duration, origin) {
      return animate(element, animation, duration, origin, true);
    },
    inProgress: function inProgress(element) {
      return _inProgress.test(attr(element, 'class'));
    },
    cancel: function cancel(element) {
      trigger(element, 'animationcanceled');
    }
  };
  var dirs = {
    width: ['x', 'left', 'right'],
    height: ['y', 'top', 'bottom']
  };

  function _positionAt(element, target, elAttach, targetAttach, elOffset, targetOffset, flip, boundary) {
    elAttach = getPos(elAttach);
    targetAttach = getPos(targetAttach);
    var flipped = {
      element: elAttach,
      target: targetAttach
    };

    if (!element || !target) {
      return flipped;
    }

    var dim = getDimensions(element);
    var targetDim = getDimensions(target);
    var position = targetDim;
    moveTo(position, elAttach, dim, -1);
    moveTo(position, targetAttach, targetDim, 1);
    elOffset = getOffsets(elOffset, dim.width, dim.height);
    targetOffset = getOffsets(targetOffset, targetDim.width, targetDim.height);
    elOffset['x'] += targetOffset['x'];
    elOffset['y'] += targetOffset['y'];
    position.left += elOffset['x'];
    position.top += elOffset['y'];

    if (flip) {
      var boundaries = [getDimensions(toWindow(element))];

      if (boundary) {
        boundaries.unshift(getDimensions(boundary));
      }

      each(dirs, function (ref, prop) {
        var dir = ref[0];
        var align = ref[1];
        var alignFlip = ref[2];

        if (!(flip === true || includes(flip, dir))) {
          return;
        }

        boundaries.some(function (boundary) {
          var elemOffset = elAttach[dir] === align ? -dim[prop] : elAttach[dir] === alignFlip ? dim[prop] : 0;
          var targetOffset = targetAttach[dir] === align ? targetDim[prop] : targetAttach[dir] === alignFlip ? -targetDim[prop] : 0;

          if (position[align] < boundary[align] || position[align] + dim[prop] > boundary[alignFlip]) {
            var centerOffset = dim[prop] / 2;
            var centerTargetOffset = targetAttach[dir] === 'center' ? -targetDim[prop] / 2 : 0;
            return elAttach[dir] === 'center' && (apply(centerOffset, centerTargetOffset) || apply(-centerOffset, -centerTargetOffset)) || apply(elemOffset, targetOffset);
          }

          function apply(elemOffset, targetOffset) {
            var newVal = toFloat((position[align] + elemOffset + targetOffset - elOffset[dir] * 2).toFixed(4));

            if (newVal >= boundary[align] && newVal + dim[prop] <= boundary[alignFlip]) {
              position[align] = newVal;
              ['element', 'target'].forEach(function (el) {
                flipped[el][dir] = !elemOffset ? flipped[el][dir] : flipped[el][dir] === dirs[prop][1] ? dirs[prop][2] : dirs[prop][1];
              });
              return true;
            }
          }
        });
      });
    }

    offset(element, position);
    return flipped;
  }

  function offset(element, coordinates) {
    if (!coordinates) {
      return getDimensions(element);
    }

    var currentOffset = getDimensions(element);
    var pos = css(element, 'position');
    ['left', 'top'].forEach(function (prop) {
      if (prop in coordinates) {
        var value = css(element, prop);
        css(element, prop, coordinates[prop] - currentOffset[prop] + toFloat(pos === 'absolute' && value === 'auto' ? position(element)[prop] : value));
      }
    });
  }

  function getDimensions(element) {
    var ref = toWindow(element);
    var top = ref.pageYOffset;
    var left = ref.pageXOffset;
    var rect = isWindow(element) ? {
      height: height(element),
      width: width(element),
      top: 0,
      left: 0
    } : getRect(toNode(element));
    return {
      height: rect.height,
      width: rect.width,
      top: rect.top + top,
      left: rect.left + left,
      bottom: rect.top + rect.height + top,
      right: rect.left + rect.width + left
    };
  }

  function position(element, parent) {
    parent = parent || (toNode(element) || {}).offsetParent || toWindow(element).document.documentElement;
    var elementOffset = offset(element);
    var parentOffset = offset(parent);
    return {
      top: elementOffset.top - parentOffset.top - toFloat(css(parent, 'borderTopWidth')),
      left: elementOffset.left - parentOffset.left - toFloat(css(parent, 'borderLeftWidth'))
    };
  }

  function offsetPosition(element) {
    var offset = [0, 0];
    element = toNode(element);

    do {
      offset[0] += element.offsetTop;
      offset[1] += element.offsetLeft;

      if (css(element, 'position') === 'fixed') {
        var win = toWindow(element);
        offset[0] += win.pageYOffset;
        offset[1] += win.pageXOffset;
        return offset;
      }
    } while (element = element.offsetParent);

    return offset;
  }

  var height = dimension('height');
  var width = dimension('width');

  function dimension(prop) {
    var propName = ucfirst(prop);
    return function (element, value) {
      if (isUndefined(value)) {
        if (isWindow(element)) {
          return element["inner" + propName];
        }

        if (isDocument(element)) {
          var doc = element.documentElement;
          return Math.max(doc["offset" + propName], doc["scroll" + propName]);
        }

        element = toNode(element);
        value = css(element, prop);
        value = value === 'auto' ? element["offset" + propName] : toFloat(value) || 0;
        return value - boxModelAdjust(element, prop);
      } else {
        css(element, prop, !value && value !== 0 ? '' : +value + boxModelAdjust(element, prop) + 'px');
      }
    };
  }

  function boxModelAdjust(element, prop, sizing) {
    if (sizing === void 0) sizing = 'border-box';
    return css(element, 'boxSizing') === sizing ? dirs[prop].slice(1).map(ucfirst).reduce(function (value, prop) {
      return value + toFloat(css(element, "padding" + prop)) + toFloat(css(element, "border" + prop + "Width"));
    }, 0) : 0;
  }

  function moveTo(position, attach, dim, factor) {
    each(dirs, function (ref, prop) {
      var dir = ref[0];
      var align = ref[1];
      var alignFlip = ref[2];

      if (attach[dir] === alignFlip) {
        position[align] += dim[prop] * factor;
      } else if (attach[dir] === 'center') {
        position[align] += dim[prop] * factor / 2;
      }
    });
  }

  function getPos(pos) {
    var x = /left|center|right/;
    var y = /top|center|bottom/;
    pos = (pos || '').split(' ');

    if (pos.length === 1) {
      pos = x.test(pos[0]) ? pos.concat('center') : y.test(pos[0]) ? ['center'].concat(pos) : ['center', 'center'];
    }

    return {
      x: x.test(pos[0]) ? pos[0] : 'center',
      y: y.test(pos[1]) ? pos[1] : 'center'
    };
  }

  function getOffsets(offsets, width, height) {
    var ref = (offsets || '').split(' ');
    var x = ref[0];
    var y = ref[1];
    return {
      x: x ? toFloat(x) * (endsWith(x, '%') ? width / 100 : 1) : 0,
      y: y ? toFloat(y) * (endsWith(y, '%') ? height / 100 : 1) : 0
    };
  }

  function flipPosition(pos) {
    switch (pos) {
      case 'left':
        return 'right';

      case 'right':
        return 'left';

      case 'top':
        return 'bottom';

      case 'bottom':
        return 'top';

      default:
        return pos;
    }
  }

  function toPx(value, property, element) {
    if (property === void 0) property = 'width';
    if (element === void 0) element = window;
    return isNumeric(value) ? +value : endsWith(value, 'vh') ? percent(height(toWindow(element)), value) : endsWith(value, 'vw') ? percent(width(toWindow(element)), value) : endsWith(value, '%') ? percent(getDimensions(element)[property], value) : toFloat(value);
  }

  function percent(base, value) {
    return base * toFloat(value) / 100;
  }

  function getRect(element) {
    if (!element) {
      return {};
    }

    var style;

    if (!isVisible(element)) {
      style = attr(element, 'style');
      element.style.setProperty('display', 'block', 'important');
    }

    var rect = element.getBoundingClientRect();
    attr(element, 'style', style);
    return rect;
  }
  /*
      Based on:
      Copyright (c) 2016 Wilson Page wilsonpage@me.com
      https://github.com/wilsonpage/fastdom
  */


  var fastdom = {
    reads: [],
    writes: [],
    read: function read(task) {
      this.reads.push(task);
      scheduleFlush();
      return task;
    },
    write: function write(task) {
      this.writes.push(task);
      scheduleFlush();
      return task;
    },
    clear: function clear(task) {
      return remove$1(this.reads, task) || remove$1(this.writes, task);
    },
    flush: flush
  };

  function flush(recursion) {
    if (recursion === void 0) recursion = 1;
    runTasks(fastdom.reads);
    runTasks(fastdom.writes.splice(0, fastdom.writes.length));
    fastdom.scheduled = false;

    if (fastdom.reads.length || fastdom.writes.length) {
      scheduleFlush(recursion + 1);
    }
  }

  var RECURSION_LIMIT = 4;

  function scheduleFlush(recursion) {
    if (fastdom.scheduled) {
      return;
    }

    fastdom.scheduled = true;

    if (recursion && recursion < RECURSION_LIMIT) {
      Promise.resolve().then(function () {
        return flush(recursion);
      });
    } else {
      requestAnimationFrame(function () {
        return flush();
      });
    }
  }

  function runTasks(tasks) {
    var task;

    while (task = tasks.shift()) {
      task();
    }
  }

  function remove$1(array, item) {
    var index = array.indexOf(item);
    return !!~index && !!array.splice(index, 1);
  }

  function MouseTracker() {}

  MouseTracker.prototype = {
    positions: [],
    init: function init() {
      var this$1 = this;
      this.positions = [];
      var position;
      this.unbind = on(document, 'mousemove', function (e) {
        return position = getEventPos(e);
      });
      this.interval = setInterval(function () {
        if (!position) {
          return;
        }

        this$1.positions.push(position);

        if (this$1.positions.length > 5) {
          this$1.positions.shift();
        }
      }, 50);
    },
    cancel: function cancel() {
      this.unbind && this.unbind();
      this.interval && clearInterval(this.interval);
    },
    movesTo: function movesTo(target) {
      if (this.positions.length < 2) {
        return false;
      }

      var p = target.getBoundingClientRect();
      var left = p.left;
      var right = p.right;
      var top = p.top;
      var bottom = p.bottom;
      var ref = this.positions;
      var prevPosition = ref[0];
      var position = last(this.positions);
      var path = [prevPosition, position];

      if (pointInRect(position, p)) {
        return false;
      }

      var diagonals = [[{
        x: left,
        y: top
      }, {
        x: right,
        y: bottom
      }], [{
        x: left,
        y: bottom
      }, {
        x: right,
        y: top
      }]];
      return diagonals.some(function (diagonal) {
        var intersection = intersect(path, diagonal);
        return intersection && pointInRect(intersection, p);
      });
    }
  }; // Inspired by http://paulbourke.net/geometry/pointlineplane/

  function intersect(ref, ref$1) {
    var ref_0 = ref[0];
    var x1 = ref_0.x;
    var y1 = ref_0.y;
    var ref_1 = ref[1];
    var x2 = ref_1.x;
    var y2 = ref_1.y;
    var ref$1_0 = ref$1[0];
    var x3 = ref$1_0.x;
    var y3 = ref$1_0.y;
    var ref$1_1 = ref$1[1];
    var x4 = ref$1_1.x;
    var y4 = ref$1_1.y;
    var denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1); // Lines are parallel

    if (denominator === 0) {
      return false;
    }

    var ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;

    if (ua < 0) {
      return false;
    } // Return an object with the x and y coordinates of the intersection


    return {
      x: x1 + ua * (x2 - x1),
      y: y1 + ua * (y2 - y1)
    };
  }

  var strats = {};
  strats.events = strats.created = strats.beforeConnect = strats.connected = strats.beforeDisconnect = strats.disconnected = strats.destroy = concatStrat; // args strategy

  strats.args = function (parentVal, childVal) {
    return childVal !== false && concatStrat(childVal || parentVal);
  }; // update strategy


  strats.update = function (parentVal, childVal) {
    return sortBy(concatStrat(parentVal, isFunction(childVal) ? {
      read: childVal
    } : childVal), 'order');
  }; // property strategy


  strats.props = function (parentVal, childVal) {
    if (isArray(childVal)) {
      childVal = childVal.reduce(function (value, key) {
        value[key] = String;
        return value;
      }, {});
    }

    return strats.methods(parentVal, childVal);
  }; // extend strategy


  strats.computed = strats.methods = function (parentVal, childVal) {
    return childVal ? parentVal ? assign({}, parentVal, childVal) : childVal : parentVal;
  }; // data strategy


  strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
      if (!childVal) {
        return parentVal;
      }

      if (!parentVal) {
        return childVal;
      }

      return function (vm) {
        return mergeFnData(parentVal, childVal, vm);
      };
    }

    return mergeFnData(parentVal, childVal, vm);
  };

  function mergeFnData(parentVal, childVal, vm) {
    return strats.computed(isFunction(parentVal) ? parentVal.call(vm, vm) : parentVal, isFunction(childVal) ? childVal.call(vm, vm) : childVal);
  } // concat strategy


  function concatStrat(parentVal, childVal) {
    parentVal = parentVal && !isArray(parentVal) ? [parentVal] : parentVal;
    return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
  } // default strategy


  function defaultStrat(parentVal, childVal) {
    return isUndefined(childVal) ? parentVal : childVal;
  }

  function mergeOptions(parent, child, vm) {
    var options = {};

    if (isFunction(child)) {
      child = child.options;
    }

    if (child["extends"]) {
      parent = mergeOptions(parent, child["extends"], vm);
    }

    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }

    for (var key in parent) {
      mergeKey(key);
    }

    for (var key$1 in child) {
      if (!hasOwn(parent, key$1)) {
        mergeKey(key$1);
      }
    }

    function mergeKey(key) {
      options[key] = (strats[key] || defaultStrat)(parent[key], child[key], vm);
    }

    return options;
  }

  function parseOptions(options, args) {
    var obj;
    if (args === void 0) args = [];

    try {
      return !options ? {} : startsWith(options, '{') ? JSON.parse(options) : args.length && !includes(options, ':') ? (obj = {}, obj[args[0]] = options, obj) : options.split(';').reduce(function (options, option) {
        var ref = option.split(/:(.*)/);
        var key = ref[0];
        var value = ref[1];

        if (key && !isUndefined(value)) {
          options[key.trim()] = value.trim();
        }

        return options;
      }, {});
    } catch (e) {
      return {};
    }
  }

  function play(el) {
    if (isIFrame(el)) {
      call(el, {
        func: 'playVideo',
        method: 'play'
      });
    }

    if (isHTML5(el)) {
      try {
        el.play()["catch"](noop);
      } catch (e) {}
    }
  }

  function pause(el) {
    if (isIFrame(el)) {
      call(el, {
        func: 'pauseVideo',
        method: 'pause'
      });
    }

    if (isHTML5(el)) {
      el.pause();
    }
  }

  function mute(el) {
    if (isIFrame(el)) {
      call(el, {
        func: 'mute',
        method: 'setVolume',
        value: 0
      });
    }

    if (isHTML5(el)) {
      el.muted = true;
    }
  }

  function isHTML5(el) {
    return el && el.tagName === 'VIDEO';
  }

  function isIFrame(el) {
    return el && el.tagName === 'IFRAME' && (isYoutube(el) || isVimeo(el));
  }

  function isYoutube(el) {
    return !!el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
  }

  function isVimeo(el) {
    return !!el.src.match(/vimeo\.com\/video\/.*/);
  }

  function call(el, cmd) {
    enableApi(el).then(function () {
      return post(el, cmd);
    });
  }

  function post(el, cmd) {
    try {
      el.contentWindow.postMessage(JSON.stringify(assign({
        event: 'command'
      }, cmd)), '*');
    } catch (e) {}
  }

  var stateKey = '_ukPlayer';
  var counter = 0;

  function enableApi(el) {
    if (el[stateKey]) {
      return el[stateKey];
    }

    var youtube = isYoutube(el);
    var vimeo = isVimeo(el);
    var id = ++counter;
    var poller;
    return el[stateKey] = new Promise(function (resolve) {
      youtube && once(el, 'load', function () {
        var listener = function listener() {
          return post(el, {
            event: 'listening',
            id: id
          });
        };

        poller = setInterval(listener, 100);
        listener();
      });
      once(window, 'message', resolve, false, function (ref) {
        var data = ref.data;

        try {
          data = JSON.parse(data);
          return data && (youtube && data.id === id && data.event === 'onReady' || vimeo && Number(data.player_id) === id);
        } catch (e) {}
      });
      el.src = "" + el.src + (includes(el.src, '?') ? '&' : '?') + (youtube ? 'enablejsapi=1' : "api=1&player_id=" + id);
    }).then(function () {
      return clearInterval(poller);
    });
  }

  function isInView(element, offsetTop, offsetLeft) {
    if (offsetTop === void 0) offsetTop = 0;
    if (offsetLeft === void 0) offsetLeft = 0;

    if (!isVisible(element)) {
      return false;
    }

    var parents = overflowParents(element);
    return parents.every(function (parent, i) {
      var client = offset(parents[i + 1] || element);
      var ref = offset(getViewport(parent));
      var top = ref.top;
      var left = ref.left;
      var bottom = ref.bottom;
      var right = ref.right;
      return intersectRect(client, {
        top: top - offsetTop,
        left: left - offsetLeft,
        bottom: bottom + offsetTop,
        right: right + offsetLeft
      });
    });
  }

  function scrollTop(element, top) {
    if (isWindow(element) || isDocument(element)) {
      element = getScrollingElement(element);
    } else {
      element = toNode(element);
    }

    element.scrollTop = top;
  }

  function scrollIntoView(element, ref) {
    if (ref === void 0) ref = {};
    var offsetBy = ref.offset;
    if (offsetBy === void 0) offsetBy = 0;

    if (!isVisible(element)) {
      return;
    }

    var parents = overflowParents(element).concat(element);
    var promise = Promise.resolve();

    var loop = function loop(i) {
      promise = promise.then(function () {
        return new Promise(function (resolve) {
          var scrollElement = parents[i];
          var element = parents[i + 1];
          var scroll = scrollElement.scrollTop;
          var top = Math.ceil(position(element, getViewport(scrollElement)).top - offsetBy);
          var duration = getDuration(Math.abs(top));
          var start = Date.now();

          var step = function step() {
            var percent = ease(clamp((Date.now() - start) / duration));
            scrollTop(scrollElement, scroll + top * percent); // scroll more if we have not reached our destination

            if (percent !== 1) {
              requestAnimationFrame(step);
            } else {
              resolve();
            }
          };

          step();
        });
      });
    };

    for (var i = 0; i < parents.length - 1; i++) {
      loop(i);
    }

    return promise;

    function getDuration(dist) {
      return 40 * Math.pow(dist, .375);
    }

    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }
  }

  function scrolledOver(element, heightOffset) {
    if (heightOffset === void 0) heightOffset = 0;

    if (!isVisible(element)) {
      return 0;
    }

    var scrollElement = last(scrollParents(element));
    var scrollHeight = scrollElement.scrollHeight;
    var scrollTop = scrollElement.scrollTop;
    var viewport = getViewport(scrollElement);
    var viewportHeight = offset(viewport).height;
    var viewportTop = offsetPosition(element)[0] - scrollTop - offsetPosition(scrollElement)[0];
    var viewportDist = Math.min(viewportHeight, viewportTop + scrollTop);
    var top = viewportTop - viewportDist;
    var dist = Math.min(offset(element).height + heightOffset + viewportDist, scrollHeight - (viewportTop + scrollTop), scrollHeight - viewportHeight);
    return clamp(-1 * top / dist);
  }

  function scrollParents(element, overflowRe) {
    if (overflowRe === void 0) overflowRe = /auto|scroll/;
    var scrollEl = getScrollingElement(element);
    var scrollParents = parents(element).filter(function (parent) {
      return parent === scrollEl || overflowRe.test(css(parent, 'overflow')) && parent.scrollHeight > Math.round(offset(parent).height);
    }).reverse();
    return scrollParents.length ? scrollParents : [scrollEl];
  }

  function getViewport(scrollElement) {
    return scrollElement === getScrollingElement(scrollElement) ? window : scrollElement;
  }

  function overflowParents(element) {
    return scrollParents(element, /auto|scroll|hidden/);
  }

  function getScrollingElement(element) {
    var ref = toWindow(element);
    var document = ref.document;
    return document.scrollingElement || document.documentElement;
  }

  var IntersectionObserver = inBrowser && window.IntersectionObserver || /*@__PURE__*/function () {
    function IntersectionObserverClass(callback, ref) {
      var this$1 = this;
      if (ref === void 0) ref = {};
      var rootMargin = ref.rootMargin;
      if (rootMargin === void 0) rootMargin = '0 0';
      this.targets = [];
      var ref$1 = (rootMargin || '0 0').split(' ').map(toFloat);
      var offsetTop = ref$1[0];
      var offsetLeft = ref$1[1];
      this.offsetTop = offsetTop;
      this.offsetLeft = offsetLeft;
      var pending;

      this.apply = function () {
        if (pending) {
          return;
        }

        pending = requestAnimationFrame(function () {
          return setTimeout(function () {
            var records = this$1.takeRecords();

            if (records.length) {
              callback(records, this$1);
            }

            pending = false;
          });
        });
      };

      this.off = on(window, 'scroll resize load', this.apply, {
        passive: true,
        capture: true
      });
    }

    IntersectionObserverClass.prototype.takeRecords = function () {
      var this$1 = this;
      return this.targets.filter(function (entry) {
        var inView = isInView(entry.target, this$1.offsetTop, this$1.offsetLeft);

        if (entry.isIntersecting === null || inView ^ entry.isIntersecting) {
          entry.isIntersecting = inView;
          return true;
        }
      });
    };

    IntersectionObserverClass.prototype.observe = function (target) {
      this.targets.push({
        target: target,
        isIntersecting: null
      });
      this.apply();
    };

    IntersectionObserverClass.prototype.disconnect = function () {
      this.targets = [];
      this.off();
    };

    return IntersectionObserverClass;
  }();

  var util = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ajax: ajax,
    getImage: getImage,
    transition: transition,
    Transition: Transition,
    animate: animate,
    Animation: Animation,
    attr: attr,
    hasAttr: hasAttr,
    removeAttr: removeAttr,
    data: data,
    addClass: addClass,
    removeClass: removeClass,
    removeClasses: removeClasses,
    replaceClass: replaceClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    positionAt: _positionAt,
    offset: offset,
    position: position,
    offsetPosition: offsetPosition,
    height: height,
    width: width,
    boxModelAdjust: boxModelAdjust,
    flipPosition: flipPosition,
    toPx: toPx,
    ready: ready,
    index: index,
    getIndex: _getIndex,
    empty: empty,
    html: html,
    prepend: prepend,
    append: append,
    before: before,
    after: after,
    remove: _remove,
    wrapAll: wrapAll,
    wrapInner: wrapInner,
    unwrap: unwrap,
    fragment: fragment,
    apply: apply,
    $: $,
    $$: $$,
    inBrowser: inBrowser,
    isIE: isIE,
    isRtl: isRtl,
    hasTouch: hasTouch,
    pointerDown: pointerDown,
    pointerMove: pointerMove,
    pointerUp: pointerUp,
    pointerEnter: pointerEnter,
    pointerLeave: pointerLeave,
    pointerCancel: pointerCancel,
    on: on,
    off: off,
    once: once,
    trigger: trigger,
    createEvent: createEvent,
    toEventTargets: toEventTargets,
    isTouch: isTouch,
    getEventPos: getEventPos,
    fastdom: fastdom,
    isVoidElement: isVoidElement,
    isVisible: isVisible,
    selInput: selInput,
    isInput: isInput,
    filter: filter,
    within: within,
    parents: parents,
    children: _children,
    hasOwn: hasOwn,
    hyphenate: hyphenate,
    camelize: camelize,
    ucfirst: ucfirst,
    startsWith: startsWith,
    endsWith: endsWith,
    includes: includes,
    findIndex: findIndex,
    isArray: isArray,
    isFunction: isFunction,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isWindow: isWindow,
    isDocument: isDocument,
    isJQuery: isJQuery,
    isNode: isNode,
    isElement: isElement,
    isNodeCollection: isNodeCollection,
    isBoolean: isBoolean,
    isString: isString,
    isNumber: isNumber,
    isNumeric: isNumeric,
    isEmpty: isEmpty,
    isUndefined: isUndefined,
    toBoolean: toBoolean,
    toNumber: toNumber,
    toFloat: toFloat,
    toNode: toNode,
    toNodes: toNodes,
    toWindow: toWindow,
    toList: toList,
    toMs: toMs,
    isEqual: isEqual,
    swap: swap,
    assign: assign,
    last: last,
    each: each,
    sortBy: sortBy,
    uniqueBy: uniqueBy,
    clamp: clamp,
    noop: noop,
    intersectRect: intersectRect,
    pointInRect: pointInRect,
    Dimensions: Dimensions,
    MouseTracker: MouseTracker,
    mergeOptions: mergeOptions,
    parseOptions: parseOptions,
    play: play,
    pause: pause,
    mute: mute,
    Promise: Promise,
    Deferred: Deferred,
    IntersectionObserver: IntersectionObserver,
    query: query,
    queryAll: queryAll,
    find: find,
    findAll: findAll,
    matches: matches,
    closest: closest,
    parent: parent,
    escape: escape,
    css: css,
    getStyles: getStyles,
    getStyle: getStyle,
    getCssVar: getCssVar,
    propName: propName,
    isInView: isInView,
    scrollTop: scrollTop,
    scrollIntoView: scrollIntoView,
    scrolledOver: scrolledOver,
    scrollParents: scrollParents,
    getViewport: getViewport
  });

  function globalAPI(UIkit) {
    var DATA = UIkit.data;

    UIkit.use = function (plugin) {
      if (plugin.installed) {
        return;
      }

      plugin.call(null, this);
      plugin.installed = true;
      return this;
    };

    UIkit.mixin = function (mixin, component) {
      component = (isString(component) ? UIkit.component(component) : component) || this;
      component.options = mergeOptions(component.options, mixin);
    };

    UIkit.extend = function (options) {
      options = options || {};
      var Super = this;

      var Sub = function UIkitComponent(options) {
        this._init(options);
      };

      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.options = mergeOptions(Super.options, options);
      Sub["super"] = Super;
      Sub.extend = Super.extend;
      return Sub;
    };

    UIkit.update = function (element, e) {
      element = element ? toNode(element) : document.body;
      parents(element).reverse().forEach(function (element) {
        return update(element[DATA], e);
      });
      apply(element, function (element) {
        return update(element[DATA], e);
      });
    };

    var container;
    Object.defineProperty(UIkit, 'container', {
      get: function get() {
        return container || document.body;
      },
      set: function set(element) {
        container = $(element);
      }
    });

    function update(data, e) {
      if (!data) {
        return;
      }

      for (var name in data) {
        if (data[name]._connected) {
          data[name]._callUpdate(e);
        }
      }
    }
  }

  function hooksAPI(UIkit) {
    UIkit.prototype._callHook = function (hook) {
      var this$1 = this;
      var handlers = this.$options[hook];

      if (handlers) {
        handlers.forEach(function (handler) {
          return handler.call(this$1);
        });
      }
    };

    UIkit.prototype._callConnected = function () {
      if (this._connected) {
        return;
      }

      this._data = {};
      this._computeds = {};
      this._frames = {
        reads: {},
        writes: {}
      };

      this._initProps();

      this._callHook('beforeConnect');

      this._connected = true;

      this._initEvents();

      this._initObserver();

      this._callHook('connected');

      this._callUpdate();
    };

    UIkit.prototype._callDisconnected = function () {
      if (!this._connected) {
        return;
      }

      this._callHook('beforeDisconnect');

      if (this._observer) {
        this._observer.disconnect();

        this._observer = null;
      }

      this._unbindEvents();

      this._callHook('disconnected');

      this._connected = false;
    };

    UIkit.prototype._callUpdate = function (e) {
      var this$1 = this;
      if (e === void 0) e = 'update';
      var type = e.type || e;

      if (includes(['update', 'resize'], type)) {
        this._callWatches();
      }

      var updates = this.$options.update;
      var ref = this._frames;
      var reads = ref.reads;
      var writes = ref.writes;

      if (!updates) {
        return;
      }

      updates.forEach(function (ref, i) {
        var read = ref.read;
        var write = ref.write;
        var events = ref.events;

        if (type !== 'update' && !includes(events, type)) {
          return;
        }

        if (read && !includes(fastdom.reads, reads[i])) {
          reads[i] = fastdom.read(function () {
            var result = this$1._connected && read.call(this$1, this$1._data, type);

            if (result === false && write) {
              fastdom.clear(writes[i]);
            } else if (isPlainObject(result)) {
              assign(this$1._data, result);
            }
          });
        }

        if (write && !includes(fastdom.writes, writes[i])) {
          writes[i] = fastdom.write(function () {
            return this$1._connected && write.call(this$1, this$1._data, type);
          });
        }
      });
    };

    UIkit.prototype._callWatches = function () {
      var this$1 = this;
      var ref = this;
      var _frames = ref._frames;

      if (_frames._watch) {
        return;
      }

      var initital = !hasOwn(_frames, '_watch');
      _frames._watch = fastdom.read(function () {
        if (!this$1._connected) {
          return;
        }

        var ref = this$1;
        var computed = ref.$options.computed;
        var _computeds = ref._computeds;

        for (var key in computed) {
          var hasPrev = hasOwn(_computeds, key);
          var prev = _computeds[key];
          delete _computeds[key];
          var ref$1 = computed[key];
          var watch = ref$1.watch;
          var immediate = ref$1.immediate;

          if (watch && (initital && immediate || hasPrev && !isEqual(prev, this$1[key]))) {
            watch.call(this$1, this$1[key], prev);
          }
        }

        _frames._watch = null;
      });
    };
  }

  function stateAPI(UIkit) {
    var uid = 0;

    UIkit.prototype._init = function (options) {
      options = options || {};
      options.data = normalizeData(options, this.constructor.options);
      this.$options = mergeOptions(this.constructor.options, options, this);
      this.$el = null;
      this.$props = {};
      this._uid = uid++;

      this._initData();

      this._initMethods();

      this._initComputeds();

      this._callHook('created');

      if (options.el) {
        this.$mount(options.el);
      }
    };

    UIkit.prototype._initData = function () {
      var ref = this.$options;
      var data = ref.data;
      if (data === void 0) data = {};

      for (var key in data) {
        this.$props[key] = this[key] = data[key];
      }
    };

    UIkit.prototype._initMethods = function () {
      var ref = this.$options;
      var methods = ref.methods;

      if (methods) {
        for (var key in methods) {
          this[key] = methods[key].bind(this);
        }
      }
    };

    UIkit.prototype._initComputeds = function () {
      var ref = this.$options;
      var computed = ref.computed;
      this._computeds = {};

      if (computed) {
        for (var key in computed) {
          registerComputed(this, key, computed[key]);
        }
      }
    };

    UIkit.prototype._initProps = function (props) {
      var key;
      props = props || getProps(this.$options, this.$name);

      for (key in props) {
        if (!isUndefined(props[key])) {
          this.$props[key] = props[key];
        }
      }

      var exclude = [this.$options.computed, this.$options.methods];

      for (key in this.$props) {
        if (key in props && notIn(exclude, key)) {
          this[key] = this.$props[key];
        }
      }
    };

    UIkit.prototype._initEvents = function () {
      var this$1 = this;
      this._events = [];
      var ref = this.$options;
      var events = ref.events;

      if (events) {
        events.forEach(function (event) {
          if (!hasOwn(event, 'handler')) {
            for (var key in event) {
              registerEvent(this$1, event[key], key);
            }
          } else {
            registerEvent(this$1, event);
          }
        });
      }
    };

    UIkit.prototype._unbindEvents = function () {
      this._events.forEach(function (unbind) {
        return unbind();
      });

      delete this._events;
    };

    UIkit.prototype._initObserver = function () {
      var this$1 = this;
      var ref = this.$options;
      var attrs = ref.attrs;
      var props = ref.props;
      var el = ref.el;

      if (this._observer || !props || attrs === false) {
        return;
      }

      attrs = isArray(attrs) ? attrs : Object.keys(props);
      this._observer = new MutationObserver(function (records) {
        var data = getProps(this$1.$options, this$1.$name);

        if (records.some(function (ref) {
          var attributeName = ref.attributeName;
          var prop = attributeName.replace('data-', '');
          return (prop === this$1.$name ? attrs : [camelize(prop), camelize(attributeName)]).some(function (prop) {
            return !isUndefined(data[prop]) && data[prop] !== this$1.$props[prop];
          });
        })) {
          this$1.$reset();
        }
      });
      var filter = attrs.map(function (key) {
        return hyphenate(key);
      }).concat(this.$name);

      this._observer.observe(el, {
        attributes: true,
        attributeFilter: filter.concat(filter.map(function (key) {
          return "data-" + key;
        }))
      });
    };

    function getProps(opts, name) {
      var data$1 = {};
      var args = opts.args;
      if (args === void 0) args = [];
      var props = opts.props;
      if (props === void 0) props = {};
      var el = opts.el;

      if (!props) {
        return data$1;
      }

      for (var key in props) {
        var prop = hyphenate(key);
        var value = data(el, prop);

        if (isUndefined(value)) {
          continue;
        }

        value = props[key] === Boolean && value === '' ? true : coerce(props[key], value);

        if (prop === 'target' && (!value || startsWith(value, '_'))) {
          continue;
        }

        data$1[key] = value;
      }

      var options = parseOptions(data(el, name), args);

      for (var key$1 in options) {
        var prop$1 = camelize(key$1);

        if (props[prop$1] !== undefined) {
          data$1[prop$1] = coerce(props[prop$1], options[key$1]);
        }
      }

      return data$1;
    }

    function registerComputed(component, key, cb) {
      Object.defineProperty(component, key, {
        enumerable: true,
        get: function get() {
          var _computeds = component._computeds;
          var $props = component.$props;
          var $el = component.$el;

          if (!hasOwn(_computeds, key)) {
            _computeds[key] = (cb.get || cb).call(component, $props, $el);
          }

          return _computeds[key];
        },
        set: function set(value) {
          var _computeds = component._computeds;
          _computeds[key] = cb.set ? cb.set.call(component, value) : value;

          if (isUndefined(_computeds[key])) {
            delete _computeds[key];
          }
        }
      });
    }

    function registerEvent(component, event, key) {
      if (!isPlainObject(event)) {
        event = {
          name: key,
          handler: event
        };
      }

      var name = event.name;
      var el = event.el;
      var handler = event.handler;
      var capture = event.capture;
      var passive = event.passive;
      var delegate = event.delegate;
      var filter = event.filter;
      var self = event.self;
      el = isFunction(el) ? el.call(component) : el || component.$el;

      if (isArray(el)) {
        el.forEach(function (el) {
          return registerEvent(component, assign({}, event, {
            el: el
          }), key);
        });
        return;
      }

      if (!el || filter && !filter.call(component)) {
        return;
      }

      component._events.push(on(el, name, !delegate ? null : isString(delegate) ? delegate : delegate.call(component), isString(handler) ? component[handler] : handler.bind(component), {
        passive: passive,
        capture: capture,
        self: self
      }));
    }

    function notIn(options, key) {
      return options.every(function (arr) {
        return !arr || !hasOwn(arr, key);
      });
    }

    function coerce(type, value) {
      if (type === Boolean) {
        return toBoolean(value);
      } else if (type === Number) {
        return toNumber(value);
      } else if (type === 'list') {
        return toList(value);
      }

      return type ? type(value) : value;
    }

    function normalizeData(ref, ref$1) {
      var data = ref.data;
      var el = ref.el;
      var args = ref$1.args;
      var props = ref$1.props;
      if (props === void 0) props = {};
      data = isArray(data) ? !isEmpty(args) ? data.slice(0, args.length).reduce(function (data, value, index) {
        if (isPlainObject(value)) {
          assign(data, value);
        } else {
          data[args[index]] = value;
        }

        return data;
      }, {}) : undefined : data;

      if (data) {
        for (var key in data) {
          if (isUndefined(data[key])) {
            delete data[key];
          } else {
            data[key] = props[key] ? coerce(props[key], data[key]) : data[key];
          }
        }
      }

      return data;
    }
  }

  function instanceAPI(UIkit) {
    var DATA = UIkit.data;

    UIkit.prototype.$create = function (component, element, data) {
      return UIkit[component](element, data);
    };

    UIkit.prototype.$mount = function (el) {
      var ref = this.$options;
      var name = ref.name;

      if (!el[DATA]) {
        el[DATA] = {};
      }

      if (el[DATA][name]) {
        return;
      }

      el[DATA][name] = this;
      this.$el = this.$options.el = this.$options.el || el;

      if (within(el, document)) {
        this._callConnected();
      }
    };

    UIkit.prototype.$reset = function () {
      this._callDisconnected();

      this._callConnected();
    };

    UIkit.prototype.$destroy = function (removeEl) {
      if (removeEl === void 0) removeEl = false;
      var ref = this.$options;
      var el = ref.el;
      var name = ref.name;

      if (el) {
        this._callDisconnected();
      }

      this._callHook('destroy');

      if (!el || !el[DATA]) {
        return;
      }

      delete el[DATA][name];

      if (!isEmpty(el[DATA])) {
        delete el[DATA];
      }

      if (removeEl) {
        _remove(this.$el);
      }
    };

    UIkit.prototype.$emit = function (e) {
      this._callUpdate(e);
    };

    UIkit.prototype.$update = function (element, e) {
      if (element === void 0) element = this.$el;
      UIkit.update(element, e);
    };

    UIkit.prototype.$getComponent = UIkit.getComponent;
    var names = {};
    Object.defineProperties(UIkit.prototype, {
      $container: Object.getOwnPropertyDescriptor(UIkit, 'container'),
      $name: {
        get: function get() {
          var ref = this.$options;
          var name = ref.name;

          if (!names[name]) {
            names[name] = UIkit.prefix + hyphenate(name);
          }

          return names[name];
        }
      }
    });
  }

  function componentAPI(UIkit) {
    var DATA = UIkit.data;
    var components = {};

    UIkit.component = function (name, options) {
      var id = hyphenate(name);
      name = camelize(id);

      if (!options) {
        if (isPlainObject(components[name])) {
          components[name] = UIkit.extend(components[name]);
        }

        return components[name];
      }

      UIkit[name] = function (element, data) {
        var i = arguments.length,
            argsArray = Array(i);

        while (i--) {
          argsArray[i] = arguments[i];
        }

        var component = UIkit.component(name);
        return component.options.functional ? new component({
          data: isPlainObject(element) ? element : [].concat(argsArray)
        }) : !element ? init(element) : $$(element).map(init)[0];

        function init(element) {
          var instance = UIkit.getComponent(element, name);

          if (instance) {
            if (!data) {
              return instance;
            } else {
              instance.$destroy();
            }
          }

          return new component({
            el: element,
            data: data
          });
        }
      };

      var opt = isPlainObject(options) ? assign({}, options) : options.options;
      opt.name = name;

      if (opt.install) {
        opt.install(UIkit, opt, name);
      }

      if (UIkit._initialized && !opt.functional) {
        fastdom.read(function () {
          return UIkit[name]("[uk-" + id + "],[data-uk-" + id + "]");
        });
      }

      return components[name] = isPlainObject(options) ? opt : options;
    };

    UIkit.getComponents = function (element) {
      return element && element[DATA] || {};
    };

    UIkit.getComponent = function (element, name) {
      return UIkit.getComponents(element)[name];
    };

    UIkit.connect = function (node) {
      if (node[DATA]) {
        for (var name in node[DATA]) {
          node[DATA][name]._callConnected();
        }
      }

      for (var i = 0; i < node.attributes.length; i++) {
        var name$1 = getComponentName(node.attributes[i].name);

        if (name$1 && name$1 in components) {
          UIkit[name$1](node);
        }
      }
    };

    UIkit.disconnect = function (node) {
      for (var name in node[DATA]) {
        node[DATA][name]._callDisconnected();
      }
    };
  }

  function getComponentName(attribute) {
    return startsWith(attribute, 'uk-') || startsWith(attribute, 'data-uk-') ? camelize(attribute.replace('data-uk-', '').replace('uk-', '')) : false;
  }

  var UIkit = function UIkit(options) {
    this._init(options);
  };

  UIkit.util = util;
  UIkit.data = '__uikit__';
  UIkit.prefix = 'uk-';
  UIkit.options = {};
  UIkit.version = '3.5.8';
  globalAPI(UIkit);
  hooksAPI(UIkit);
  stateAPI(UIkit);
  componentAPI(UIkit);
  instanceAPI(UIkit);

  function Core(UIkit) {
    inBrowser && ready(function () {
      UIkit.update();
      on(window, 'load resize', function () {
        return UIkit.update(null, 'resize');
      });
      on(document, 'loadedmetadata load', function (ref) {
        var target = ref.target;
        return UIkit.update(target, 'resize');
      }, true); // throttle `scroll` event (Safari triggers multiple `scroll` events per frame)

      var pending;
      on(window, 'scroll', function (e) {
        if (pending) {
          return;
        }

        pending = true;
        fastdom.write(function () {
          return pending = false;
        });
        UIkit.update(null, e.type);
      }, {
        passive: true,
        capture: true
      });
      var started = 0;
      on(document, 'animationstart', function (ref) {
        var target = ref.target;

        if ((css(target, 'animationName') || '').match(/^uk-.*(left|right)/)) {
          started++;
          css(document.body, 'overflowX', 'hidden');
          setTimeout(function () {
            if (! --started) {
              css(document.body, 'overflowX', '');
            }
          }, toMs(css(target, 'animationDuration')) + 100);
        }
      }, true);
      var off;
      on(document, pointerDown, function (e) {
        off && off();

        if (!isTouch(e)) {
          return;
        } // Handle Swipe Gesture


        var pos = getEventPos(e);
        var target = 'tagName' in e.target ? e.target : e.target.parentNode;
        off = once(document, pointerUp + " " + pointerCancel, function (e) {
          var ref = getEventPos(e);
          var x = ref.x;
          var y = ref.y; // swipe

          if (target && x && Math.abs(pos.x - x) > 100 || y && Math.abs(pos.y - y) > 100) {
            setTimeout(function () {
              trigger(target, 'swipe');
              trigger(target, "swipe" + swipeDirection(pos.x, pos.y, x, y));
            });
          }
        });
      }, {
        passive: true
      });
    });
  }

  function swipeDirection(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
  }

  function boot(UIkit) {
    var connect = UIkit.connect;
    var disconnect = UIkit.disconnect;

    if (!inBrowser || !window.MutationObserver) {
      return;
    }

    fastdom.read(init);

    function init() {
      if (document.body) {
        apply(document.body, connect);
      }

      new MutationObserver(function (mutations) {
        var updates = [];
        mutations.forEach(function (mutation) {
          return applyMutation(mutation, updates);
        });
        updates.forEach(function (el) {
          return UIkit.update(el);
        });
      }).observe(document, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
      UIkit._initialized = true;
    }

    function applyMutation(mutation, updates) {
      var target = mutation.target;
      var type = mutation.type;
      var update = type !== 'attributes' ? applyChildList(mutation) : applyAttribute(mutation);

      if (update && !updates.some(function (element) {
        return element.contains(target);
      })) {
        updates.push(target.contains ? target : target.parentNode); // IE 11 text node does not implement contains
      }
    }

    function applyAttribute(ref) {
      var target = ref.target;
      var attributeName = ref.attributeName;

      if (attributeName === 'href') {
        return true;
      }

      var name = getComponentName(attributeName);

      if (!name || !(name in UIkit)) {
        return;
      }

      if (hasAttr(target, attributeName)) {
        UIkit[name](target);
        return true;
      }

      var component = UIkit.getComponent(target, name);

      if (component) {
        component.$destroy();
        return true;
      }
    }

    function applyChildList(ref) {
      var addedNodes = ref.addedNodes;
      var removedNodes = ref.removedNodes;

      for (var i = 0; i < addedNodes.length; i++) {
        apply(addedNodes[i], connect);
      }

      for (var i$1 = 0; i$1 < removedNodes.length; i$1++) {
        apply(removedNodes[i$1], disconnect);
      }

      return true;
    }
  }

  var Class = {
    connected: function connected() {
      !hasClass(this.$el, this.$name) && addClass(this.$el, this.$name);
    }
  };
  var Togglable = {
    props: {
      cls: Boolean,
      animation: 'list',
      duration: Number,
      origin: String,
      transition: String
    },
    data: {
      cls: false,
      animation: [false],
      duration: 200,
      origin: false,
      transition: 'linear',
      initProps: {
        overflow: '',
        height: '',
        paddingTop: '',
        paddingBottom: '',
        marginTop: '',
        marginBottom: ''
      },
      hideProps: {
        overflow: 'hidden',
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0
      }
    },
    computed: {
      hasAnimation: function hasAnimation(ref) {
        var animation = ref.animation;
        return !!animation[0];
      },
      hasTransition: function hasTransition(ref) {
        var animation = ref.animation;
        return this.hasAnimation && animation[0] === true;
      }
    },
    methods: {
      toggleElement: function toggleElement(targets, show, animate) {
        var this$1 = this;
        return Promise.all(toNodes(targets).map(function (el) {
          return new Promise(function (resolve) {
            return this$1._toggleElement(el, show, animate).then(resolve, noop);
          });
        }));
      },
      isToggled: function isToggled(el) {
        var nodes = toNodes(el || this.$el);
        return this.cls ? hasClass(nodes, this.cls.split(' ')[0]) : !hasAttr(nodes, 'hidden');
      },
      updateAria: function updateAria(el) {
        if (this.cls === false) {
          attr(el, 'aria-hidden', !this.isToggled(el));
        }
      },
      _toggleElement: function _toggleElement(el, show, animate) {
        var this$1 = this;
        show = isBoolean(show) ? show : Animation.inProgress(el) ? hasClass(el, 'uk-animation-leave') : Transition.inProgress(el) ? el.style.height === '0px' : !this.isToggled(el);

        if (!trigger(el, "before" + (show ? 'show' : 'hide'), [this])) {
          return Promise.reject();
        }

        var promise = (isFunction(animate) ? animate : animate === false || !this.hasAnimation ? this._toggle : this.hasTransition ? toggleHeight(this) : toggleAnimation(this))(el, show);
        trigger(el, show ? 'show' : 'hide', [this]);

        var _final = function _final() {
          trigger(el, show ? 'shown' : 'hidden', [this$1]);
          this$1.$update(el);
        };

        return (promise || Promise.resolve()).then(_final);
      },
      _toggle: function _toggle(el, toggled) {
        if (!el) {
          return;
        }

        toggled = Boolean(toggled);
        var changed;

        if (this.cls) {
          changed = includes(this.cls, ' ') || toggled !== hasClass(el, this.cls);
          changed && toggleClass(el, this.cls, includes(this.cls, ' ') ? undefined : toggled);
        } else {
          changed = toggled === el.hidden;
          changed && (el.hidden = !toggled);
        }

        $$('[autofocus]', el).some(function (el) {
          return isVisible(el) ? el.focus() || true : el.blur();
        });
        this.updateAria(el);

        if (changed) {
          trigger(el, 'toggled', [this]);
          this.$update(el);
        }
      }
    }
  };

  function toggleHeight(ref) {
    var isToggled = ref.isToggled;
    var duration = ref.duration;
    var initProps = ref.initProps;
    var hideProps = ref.hideProps;
    var transition = ref.transition;
    var _toggle = ref._toggle;
    return function (el, show) {
      var inProgress = Transition.inProgress(el);
      var inner = el.hasChildNodes ? toFloat(css(el.firstElementChild, 'marginTop')) + toFloat(css(el.lastElementChild, 'marginBottom')) : 0;
      var currentHeight = isVisible(el) ? height(el) + (inProgress ? 0 : inner) : 0;
      Transition.cancel(el);

      if (!isToggled(el)) {
        _toggle(el, true);
      }

      height(el, ''); // Update child components first

      fastdom.flush();
      var endHeight = height(el) + (inProgress ? 0 : inner);
      height(el, currentHeight);
      return (show ? Transition.start(el, assign({}, initProps, {
        overflow: 'hidden',
        height: endHeight
      }), Math.round(duration * (1 - currentHeight / endHeight)), transition) : Transition.start(el, hideProps, Math.round(duration * (currentHeight / endHeight)), transition).then(function () {
        return _toggle(el, false);
      })).then(function () {
        return css(el, initProps);
      });
    };
  }

  function toggleAnimation(cmp) {
    return function (el, show) {
      Animation.cancel(el);
      var animation = cmp.animation;
      var duration = cmp.duration;
      var _toggle = cmp._toggle;

      if (show) {
        _toggle(el, true);

        return Animation["in"](el, animation[0], duration, cmp.origin);
      }

      return Animation.out(el, animation[1] || animation[0], duration, cmp.origin).then(function () {
        return _toggle(el, false);
      });
    };
  }

  var Accordion = {
    mixins: [Class, Togglable],
    props: {
      targets: String,
      active: null,
      collapsible: Boolean,
      multiple: Boolean,
      toggle: String,
      content: String,
      transition: String,
      offset: Number
    },
    data: {
      targets: '> *',
      active: false,
      animation: [true],
      collapsible: true,
      multiple: false,
      clsOpen: 'uk-open',
      toggle: '> .uk-accordion-title',
      content: '> .uk-accordion-content',
      transition: 'ease',
      offset: 0
    },
    computed: {
      items: {
        get: function get(ref, $el) {
          var targets = ref.targets;
          return $$(targets, $el);
        },
        watch: function watch(items, prev) {
          var this$1 = this;
          items.forEach(function (el) {
            return hide($(this$1.content, el), !hasClass(el, this$1.clsOpen));
          });

          if (prev || hasClass(items, this.clsOpen)) {
            return;
          }

          var active = this.active !== false && items[Number(this.active)] || !this.collapsible && items[0];

          if (active) {
            this.toggle(active, false);
          }
        },
        immediate: true
      }
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return this.targets + " " + this.$props.toggle;
      },
      handler: function handler(e) {
        e.preventDefault();
        this.toggle(index($$(this.targets + " " + this.$props.toggle, this.$el), e.current));
      }
    }],
    methods: {
      toggle: function toggle(item, animate) {
        var this$1 = this;
        var items = [this.items[_getIndex(item, this.items)]];
        var activeItems = filter(this.items, "." + this.clsOpen);

        if (!this.multiple && !includes(activeItems, items[0])) {
          items = items.concat(activeItems);
        }

        if (!this.collapsible && activeItems.length < 2 && !filter(items, ":not(." + this.clsOpen + ")").length) {
          return;
        }

        items.forEach(function (el) {
          return this$1.toggleElement(el, !hasClass(el, this$1.clsOpen), function (el, show) {
            toggleClass(el, this$1.clsOpen, show);
            var content = $("" + (el._wrapper ? '> * ' : '') + this$1.content, el);

            if (animate === false || !this$1.hasTransition) {
              hide(content, !show);
              return;
            }

            if (!el._wrapper) {
              el._wrapper = wrapAll(content, "<div" + (show ? ' hidden' : '') + ">");
            }

            hide(content, false);
            return toggleHeight(this$1)(el._wrapper, show).then(function () {
              hide(content, !show);
              delete el._wrapper;
              unwrap(content);

              if (show) {
                var toggle = $(this$1.$props.toggle, el);

                if (!isInView(toggle)) {
                  scrollIntoView(toggle, {
                    offset: this$1.offset
                  });
                }
              }
            });
          });
        });
      }
    }
  };

  function hide(el, hide) {
    el && (el.hidden = hide);
  }

  var alert = {
    mixins: [Class, Togglable],
    args: 'animation',
    props: {
      close: String
    },
    data: {
      animation: [true],
      selClose: '.uk-alert-close',
      duration: 150,
      hideProps: assign({
        opacity: 0
      }, Togglable.data.hideProps)
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return this.selClose;
      },
      handler: function handler(e) {
        e.preventDefault();
        this.close();
      }
    }],
    methods: {
      close: function close() {
        var this$1 = this;
        this.toggleElement(this.$el).then(function () {
          return this$1.$destroy(true);
        });
      }
    }
  };
  var Video = {
    args: 'autoplay',
    props: {
      automute: Boolean,
      autoplay: Boolean
    },
    data: {
      automute: false,
      autoplay: true
    },
    computed: {
      inView: function inView(ref) {
        var autoplay = ref.autoplay;
        return autoplay === 'inview';
      }
    },
    connected: function connected() {
      if (this.inView && !hasAttr(this.$el, 'preload')) {
        this.$el.preload = 'none';
      }

      if (this.automute) {
        mute(this.$el);
      }
    },
    update: {
      read: function read() {
        return {
          visible: isVisible(this.$el) && css(this.$el, 'visibility') !== 'hidden',
          inView: this.inView && isInView(this.$el)
        };
      },
      write: function write(ref) {
        var visible = ref.visible;
        var inView = ref.inView;

        if (!visible || this.inView && !inView) {
          pause(this.$el);
        } else if (this.autoplay === true || this.inView && inView) {
          play(this.$el);
        }
      },
      events: ['resize', 'scroll']
    }
  };
  var cover = {
    mixins: [Class, Video],
    props: {
      width: Number,
      height: Number
    },
    data: {
      automute: true
    },
    update: {
      read: function read() {
        var el = this.$el;
        var ref = getPositionedParent(el) || el.parentNode;
        var height = ref.offsetHeight;
        var width = ref.offsetWidth;
        var dim = Dimensions.cover({
          width: this.width || el.naturalWidth || el.videoWidth || el.clientWidth,
          height: this.height || el.naturalHeight || el.videoHeight || el.clientHeight
        }, {
          width: width + (width % 2 ? 1 : 0),
          height: height + (height % 2 ? 1 : 0)
        });

        if (!dim.width || !dim.height) {
          return false;
        }

        return dim;
      },
      write: function write(ref) {
        var height = ref.height;
        var width = ref.width;
        css(this.$el, {
          height: height,
          width: width
        });
      },
      events: ['resize']
    }
  };

  function getPositionedParent(el) {
    while (el = parent(el)) {
      if (css(el, 'position') !== 'static') {
        return el;
      }
    }
  }

  var Position = {
    props: {
      pos: String,
      offset: null,
      flip: Boolean,
      clsPos: String
    },
    data: {
      pos: "bottom-" + (!isRtl ? 'left' : 'right'),
      flip: true,
      offset: false,
      clsPos: ''
    },
    computed: {
      pos: function pos(ref) {
        var pos = ref.pos;
        return (pos + (!includes(pos, '-') ? '-center' : '')).split('-');
      },
      dir: function dir() {
        return this.pos[0];
      },
      align: function align() {
        return this.pos[1];
      }
    },
    methods: {
      positionAt: function positionAt(element, target, boundary) {
        removeClasses(element, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?");
        var node;
        var ref = this;
        var offset$1 = ref.offset;
        var axis = this.getAxis();

        if (!isNumeric(offset$1)) {
          node = $(offset$1);
          offset$1 = node ? offset(node)[axis === 'x' ? 'left' : 'top'] - offset(target)[axis === 'x' ? 'right' : 'bottom'] : 0;
        }

        var ref$1 = _positionAt(element, target, axis === 'x' ? flipPosition(this.dir) + " " + this.align : this.align + " " + flipPosition(this.dir), axis === 'x' ? this.dir + " " + this.align : this.align + " " + this.dir, axis === 'x' ? "" + (this.dir === 'left' ? -offset$1 : offset$1) : " " + (this.dir === 'top' ? -offset$1 : offset$1), null, this.flip, boundary).target;

        var x = ref$1.x;
        var y = ref$1.y;
        this.dir = axis === 'x' ? x : y;
        this.align = axis === 'x' ? y : x;
        toggleClass(element, this.clsPos + "-" + this.dir + "-" + this.align, this.offset === false);
      },
      getAxis: function getAxis() {
        return this.dir === 'top' || this.dir === 'bottom' ? 'y' : 'x';
      }
    }
  };
  var active;
  var drop = {
    mixins: [Position, Togglable],
    args: 'pos',
    props: {
      mode: 'list',
      toggle: Boolean,
      boundary: Boolean,
      boundaryAlign: Boolean,
      delayShow: Number,
      delayHide: Number,
      clsDrop: String
    },
    data: {
      mode: ['click', 'hover'],
      toggle: '- *',
      boundary: inBrowser && window,
      boundaryAlign: false,
      delayShow: 0,
      delayHide: 800,
      clsDrop: false,
      animation: ['uk-animation-fade'],
      cls: 'uk-open'
    },
    computed: {
      boundary: function boundary(ref, $el) {
        var boundary = ref.boundary;
        return query(boundary, $el);
      },
      clsDrop: function clsDrop(ref) {
        var clsDrop = ref.clsDrop;
        return clsDrop || "uk-" + this.$options.name;
      },
      clsPos: function clsPos() {
        return this.clsDrop;
      }
    },
    created: function created() {
      this.tracker = new MouseTracker();
    },
    connected: function connected() {
      addClass(this.$el, this.clsDrop);
      var ref = this.$props;
      var toggle = ref.toggle;
      this.toggle = toggle && this.$create('toggle', query(toggle, this.$el), {
        target: this.$el,
        mode: this.mode
      });
      !this.toggle && trigger(this.$el, 'updatearia');
    },
    disconnected: function disconnected() {
      if (this.isActive()) {
        active = null;
      }
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return "." + this.clsDrop + "-close";
      },
      handler: function handler(e) {
        e.preventDefault();
        this.hide(false);
      }
    }, {
      name: 'click',
      delegate: function delegate() {
        return 'a[href^="#"]';
      },
      handler: function handler(ref) {
        var defaultPrevented = ref.defaultPrevented;
        var hash = ref.current.hash;

        if (!defaultPrevented && hash && !within(hash, this.$el)) {
          this.hide(false);
        }
      }
    }, {
      name: 'beforescroll',
      handler: function handler() {
        this.hide(false);
      }
    }, {
      name: 'toggle',
      self: true,
      handler: function handler(e, toggle) {
        e.preventDefault();

        if (this.isToggled()) {
          this.hide(false);
        } else {
          this.show(toggle, false);
        }
      }
    }, {
      name: 'toggleshow',
      self: true,
      handler: function handler(e, toggle) {
        e.preventDefault();
        this.show(toggle);
      }
    }, {
      name: 'togglehide',
      self: true,
      handler: function handler(e) {
        e.preventDefault();
        this.hide();
      }
    }, {
      name: pointerEnter,
      filter: function filter() {
        return includes(this.mode, 'hover');
      },
      handler: function handler(e) {
        if (!isTouch(e)) {
          this.clearTimers();
        }
      }
    }, {
      name: pointerLeave,
      filter: function filter() {
        return includes(this.mode, 'hover');
      },
      handler: function handler(e) {
        if (!isTouch(e) && e.relatedTarget) {
          this.hide();
        }
      }
    }, {
      name: 'toggled',
      self: true,
      handler: function handler() {
        if (!this.isToggled()) {
          return;
        }

        this.clearTimers();
        this.position();
      }
    }, {
      name: 'show',
      self: true,
      handler: function handler() {
        var this$1 = this;
        active = this;
        this.tracker.init();
        trigger(this.$el, 'updatearia');
        once(this.$el, 'hide', on(document, pointerDown, function (ref) {
          var target = ref.target;
          return !within(target, this$1.$el) && once(document, pointerUp + " " + pointerCancel + " scroll", function (ref) {
            var defaultPrevented = ref.defaultPrevented;
            var type = ref.type;
            var newTarget = ref.target;

            if (!defaultPrevented && type === pointerUp && target === newTarget && !(this$1.toggle && within(target, this$1.toggle.$el))) {
              this$1.hide(false);
            }
          }, true);
        }), {
          self: true
        });
        once(this.$el, 'hide', on(document, 'keydown', function (e) {
          if (e.keyCode === 27) {
            e.preventDefault();
            this$1.hide(false);
          }
        }), {
          self: true
        });
      }
    }, {
      name: 'beforehide',
      self: true,
      handler: function handler() {
        this.clearTimers();
      }
    }, {
      name: 'hide',
      handler: function handler(ref) {
        var target = ref.target;

        if (this.$el !== target) {
          active = active === null && within(target, this.$el) && this.isToggled() ? this : active;
          return;
        }

        active = this.isActive() ? null : active;
        trigger(this.$el, 'updatearia');
        this.tracker.cancel();
      }
    }, {
      name: 'updatearia',
      self: true,
      handler: function handler(e, toggle) {
        e.preventDefault();
        this.updateAria(this.$el);

        if (toggle || this.toggle) {
          attr((toggle || this.toggle).$el, 'aria-expanded', this.isToggled());
          toggleClass(this.toggle.$el, this.cls, this.isToggled());
        }
      }
    }],
    update: {
      write: function write() {
        if (this.isToggled() && !Animation.inProgress(this.$el)) {
          this.position();
        }
      },
      events: ['resize']
    },
    methods: {
      show: function show(toggle, delay) {
        var this$1 = this;
        if (toggle === void 0) toggle = this.toggle;
        if (delay === void 0) delay = true;

        if (this.isToggled() && toggle && this.toggle && toggle.$el !== this.toggle.$el) {
          this.hide(false);
        }

        this.toggle = toggle;
        this.clearTimers();

        if (this.isActive()) {
          return;
        }

        if (active) {
          if (delay && active.isDelaying) {
            this.showTimer = setTimeout(this.show, 10);
            return;
          }

          var prev;

          while (active && prev !== active && !within(this.$el, active.$el)) {
            prev = active;
            active.hide(false);
          }
        }

        this.showTimer = setTimeout(function () {
          return !this$1.isToggled() && this$1.toggleElement(this$1.$el, true);
        }, delay && this.delayShow || 0);
      },
      hide: function hide(delay) {
        var this$1 = this;
        if (delay === void 0) delay = true;

        var hide = function hide() {
          return this$1.toggleElement(this$1.$el, false, false);
        };

        this.clearTimers();
        this.isDelaying = getPositionedElements(this.$el).some(function (el) {
          return this$1.tracker.movesTo(el);
        });

        if (delay && this.isDelaying) {
          this.hideTimer = setTimeout(this.hide, 50);
        } else if (delay && this.delayHide) {
          this.hideTimer = setTimeout(hide, this.delayHide);
        } else {
          hide();
        }
      },
      clearTimers: function clearTimers() {
        clearTimeout(this.showTimer);
        clearTimeout(this.hideTimer);
        this.showTimer = null;
        this.hideTimer = null;
        this.isDelaying = false;
      },
      isActive: function isActive() {
        return active === this;
      },
      position: function position() {
        removeClass(this.$el, this.clsDrop + "-stack");
        toggleClass(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
        var boundary = offset(this.boundary);
        var alignTo = this.boundaryAlign ? boundary : offset(this.toggle.$el);

        if (this.align === 'justify') {
          var prop = this.getAxis() === 'y' ? 'width' : 'height';
          css(this.$el, prop, alignTo[prop]);
        } else if (this.$el.offsetWidth > Math.max(boundary.right - alignTo.left, alignTo.right - boundary.left)) {
          addClass(this.$el, this.clsDrop + "-stack");
        }

        this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary);
      }
    }
  };

  function getPositionedElements(el) {
    var result = [];
    apply(el, function (el) {
      return css(el, 'position') !== 'static' && result.push(el);
    });
    return result;
  }

  var formCustom = {
    mixins: [Class],
    args: 'target',
    props: {
      target: Boolean
    },
    data: {
      target: false
    },
    computed: {
      input: function input(_, $el) {
        return $(selInput, $el);
      },
      state: function state() {
        return this.input.nextElementSibling;
      },
      target: function target(ref, $el) {
        var target = ref.target;
        return target && (target === true && this.input.parentNode === $el && this.input.nextElementSibling || query(target, $el));
      }
    },
    update: function update() {
      var ref = this;
      var target = ref.target;
      var input = ref.input;

      if (!target) {
        return;
      }

      var option;
      var prop = isInput(target) ? 'value' : 'textContent';
      var prev = target[prop];
      var value = input.files && input.files[0] ? input.files[0].name : matches(input, 'select') && (option = $$('option', input).filter(function (el) {
        return el.selected;
      })[0]) // eslint-disable-line prefer-destructuring
      ? option.textContent : input.value;

      if (prev !== value) {
        target[prop] = value;
      }
    },
    events: [{
      name: 'change',
      handler: function handler() {
        this.$update();
      }
    }, {
      name: 'reset',
      el: function el() {
        return closest(this.$el, 'form');
      },
      handler: function handler() {
        this.$update();
      }
    }]
  }; // Deprecated

  var gif = {
    update: {
      read: function read(data) {
        var inview = isInView(this.$el);

        if (!inview || data.isInView === inview) {
          return false;
        }

        data.isInView = inview;
      },
      write: function write() {
        this.$el.src = '' + this.$el.src; // force self-assign
      },
      events: ['scroll', 'resize']
    }
  };
  var Margin = {
    props: {
      margin: String,
      firstColumn: Boolean
    },
    data: {
      margin: 'uk-margin-small-top',
      firstColumn: 'uk-first-column'
    },
    update: {
      read: function read() {
        var rows = getRows(this.$el.children);
        return {
          rows: rows,
          columns: getColumns(rows)
        };
      },
      write: function write(ref) {
        var this$1 = this;
        var columns = ref.columns;
        var rows = ref.rows;
        rows.forEach(function (row, i) {
          return row.forEach(function (el) {
            toggleClass(el, this$1.margin, i !== 0);
            toggleClass(el, this$1.firstColumn, includes(columns[0], el));
          });
        });
      },
      events: ['resize']
    }
  };

  function getRows(items) {
    return sortBy$1(items, 'top', 'bottom');
  }

  function getColumns(rows) {
    var columns = [[]];
    rows.forEach(function (row) {
      return sortBy$1(row, 'left', 'right').forEach(function (column, i) {
        return columns[i] = !columns[i] ? column : columns[i].concat(column);
      });
    });
    return isRtl ? columns.reverse() : columns;
  }

  function sortBy$1(items, startProp, endProp) {
    var sorted = [[]];

    for (var i = 0; i < items.length; i++) {
      var el = items[i];

      if (!isVisible(el)) {
        continue;
      }

      var dim = getOffset(el);

      for (var j = sorted.length - 1; j >= 0; j--) {
        var current = sorted[j];

        if (!current[0]) {
          current.push(el);
          break;
        }

        var startDim = void 0;

        if (current[0].offsetParent === el.offsetParent) {
          startDim = getOffset(current[0]);
        } else {
          dim = getOffset(el, true);
          startDim = getOffset(current[0], true);
        }

        if (dim[startProp] >= startDim[endProp] - 1 && dim[startProp] !== startDim[startProp]) {
          sorted.push([el]);
          break;
        }

        if (dim[endProp] - 1 > startDim[startProp] || dim[startProp] === startDim[startProp]) {
          current.push(el);
          break;
        }

        if (j === 0) {
          sorted.unshift([el]);
          break;
        }
      }
    }

    return sorted;
  }

  function getOffset(element, offset) {
    var assign;
    if (offset === void 0) offset = false;
    var offsetTop = element.offsetTop;
    var offsetLeft = element.offsetLeft;
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;

    if (offset) {
      assign = offsetPosition(element), offsetTop = assign[0], offsetLeft = assign[1];
    }

    return {
      top: offsetTop,
      left: offsetLeft,
      bottom: offsetTop + offsetHeight,
      right: offsetLeft + offsetWidth
    };
  }

  var grid = {
    "extends": Margin,
    mixins: [Class],
    name: 'grid',
    props: {
      masonry: Boolean,
      parallax: Number
    },
    data: {
      margin: 'uk-grid-margin',
      clsStack: 'uk-grid-stack',
      masonry: false,
      parallax: 0
    },
    connected: function connected() {
      this.masonry && addClass(this.$el, 'uk-flex-top uk-flex-wrap-top');
    },
    update: [{
      write: function write(ref) {
        var columns = ref.columns;
        toggleClass(this.$el, this.clsStack, columns.length < 2);
      },
      events: ['resize']
    }, {
      read: function read(ref) {
        var columns = ref.columns;
        var rows = ref.rows;

        var nodes = _children(this.$el);

        if (!nodes.length || !this.masonry && !this.parallax) {
          return false;
        }

        var transitionInProgress = nodes.some(Transition.inProgress);
        var translates = false;
        var columnHeights = getColumnHeights(columns);
        var margin = getMarginTop(nodes, this.margin) * (rows.length - 1);
        var elHeight = Math.max.apply(Math, columnHeights) + margin;

        if (this.masonry) {
          columns = columns.map(function (column) {
            return sortBy(column, 'offsetTop');
          });
          translates = getTranslates(rows, columns);
        }

        var padding = Math.abs(this.parallax);

        if (padding) {
          padding = columnHeights.reduce(function (newPadding, hgt, i) {
            return Math.max(newPadding, hgt + margin + (i % 2 ? padding : padding / 8) - elHeight);
          }, 0);
        }

        return {
          padding: padding,
          columns: columns,
          translates: translates,
          height: transitionInProgress ? false : this.masonry ? elHeight : ''
        };
      },
      write: function write(ref) {
        var height = ref.height;
        var padding = ref.padding;
        css(this.$el, 'paddingBottom', padding || '');
        height !== false && css(this.$el, 'height', height);
      },
      events: ['resize']
    }, {
      read: function read(ref) {
        var height$1 = ref.height;
        return {
          scrolled: this.parallax ? scrolledOver(this.$el, height$1 ? height$1 - height(this.$el) : 0) * Math.abs(this.parallax) : false
        };
      },
      write: function write(ref) {
        var columns = ref.columns;
        var scrolled = ref.scrolled;
        var translates = ref.translates;

        if (scrolled === false && !translates) {
          return;
        }

        columns.forEach(function (column, i) {
          return column.forEach(function (el, j) {
            return css(el, 'transform', !scrolled && !translates ? '' : "translateY(" + ((translates && -translates[i][j]) + (scrolled ? i % 2 ? scrolled : scrolled / 8 : 0)) + "px)");
          });
        });
      },
      events: ['scroll', 'resize']
    }]
  };

  function getTranslates(rows, columns) {
    var rowHeights = rows.map(function (row) {
      return Math.max.apply(Math, row.map(function (el) {
        return el.offsetHeight;
      }));
    });
    return columns.map(function (elements) {
      var prev = 0;
      return elements.map(function (element, row) {
        return prev += row ? rowHeights[row - 1] - elements[row - 1].offsetHeight : 0;
      });
    });
  }

  function getMarginTop(nodes, cls) {
    var ref = nodes.filter(function (el) {
      return hasClass(el, cls);
    });
    var node = ref[0];
    return toFloat(node ? css(node, 'marginTop') : css(nodes[0], 'paddingLeft'));
  }

  function getColumnHeights(columns) {
    return columns.map(function (column) {
      return column.reduce(function (sum, el) {
        return sum + el.offsetHeight;
      }, 0);
    });
  } // IE 11 fix (min-height on a flex container won't apply to its flex items)


  var FlexBug = isIE ? {
    props: {
      selMinHeight: String
    },
    data: {
      selMinHeight: false,
      forceHeight: false
    },
    computed: {
      elements: function elements(ref, $el) {
        var selMinHeight = ref.selMinHeight;
        return selMinHeight ? $$(selMinHeight, $el) : [$el];
      }
    },
    update: [{
      read: function read() {
        css(this.elements, 'height', '');
      },
      order: -5,
      events: ['resize']
    }, {
      write: function write() {
        var this$1 = this;
        this.elements.forEach(function (el) {
          var height = toFloat(css(el, 'minHeight'));

          if (height && (this$1.forceHeight || Math.round(height + boxModelAdjust(el, 'height', 'content-box')) >= el.offsetHeight)) {
            css(el, 'height', height);
          }
        });
      },
      order: 5,
      events: ['resize']
    }]
  } : {};
  var heightMatch = {
    mixins: [FlexBug],
    args: 'target',
    props: {
      target: String,
      row: Boolean
    },
    data: {
      target: '> *',
      row: true,
      forceHeight: true
    },
    computed: {
      elements: function elements(ref, $el) {
        var target = ref.target;
        return $$(target, $el);
      }
    },
    update: {
      read: function read() {
        return {
          rows: (this.row ? getRows(this.elements) : [this.elements]).map(match)
        };
      },
      write: function write(ref) {
        var rows = ref.rows;
        rows.forEach(function (ref) {
          var heights = ref.heights;
          var elements = ref.elements;
          return elements.forEach(function (el, i) {
            return css(el, 'minHeight', heights[i]);
          });
        });
      },
      events: ['resize']
    }
  };

  function match(elements) {
    var assign;

    if (elements.length < 2) {
      return {
        heights: [''],
        elements: elements
      };
    }

    var ref = getHeights(elements);
    var heights = ref.heights;
    var max = ref.max;
    var hasMinHeight = elements.some(function (el) {
      return el.style.minHeight;
    });
    var hasShrunk = elements.some(function (el, i) {
      return !el.style.minHeight && heights[i] < max;
    });

    if (hasMinHeight && hasShrunk) {
      css(elements, 'minHeight', '');
      assign = getHeights(elements), heights = assign.heights, max = assign.max;
    }

    heights = elements.map(function (el, i) {
      return heights[i] === max && toFloat(el.style.minHeight).toFixed(2) !== max.toFixed(2) ? '' : max;
    });
    return {
      heights: heights,
      elements: elements
    };
  }

  function getHeights(elements) {
    var heights = elements.map(function (el) {
      return offset(el).height - boxModelAdjust(el, 'height', 'content-box');
    });
    var max = Math.max.apply(null, heights);
    return {
      heights: heights,
      max: max
    };
  }

  var heightViewport = {
    mixins: [FlexBug],
    props: {
      expand: Boolean,
      offsetTop: Boolean,
      offsetBottom: Boolean,
      minHeight: Number
    },
    data: {
      expand: false,
      offsetTop: false,
      offsetBottom: false,
      minHeight: 0
    },
    update: {
      read: function read(ref) {
        var prev = ref.minHeight;

        if (!isVisible(this.$el)) {
          return false;
        }

        var minHeight = '';
        var box = boxModelAdjust(this.$el, 'height', 'content-box');

        if (this.expand) {
          this.$el.dataset.heightExpand = '';

          if ($('[data-height-expand]') !== this.$el) {
            return false;
          }

          minHeight = height(window) - (offsetHeight(document.documentElement) - offsetHeight(this.$el)) - box || '';
        } else {
          // on mobile devices (iOS and Android) window.innerHeight !== 100vh
          minHeight = 'calc(100vh';

          if (this.offsetTop) {
            var ref$1 = offset(this.$el);
            var top = ref$1.top;
            minHeight += top > 0 && top < height(window) / 2 ? " - " + top + "px" : '';
          }

          if (this.offsetBottom === true) {
            minHeight += " - " + offsetHeight(this.$el.nextElementSibling) + "px";
          } else if (isNumeric(this.offsetBottom)) {
            minHeight += " - " + this.offsetBottom + "vh";
          } else if (this.offsetBottom && endsWith(this.offsetBottom, 'px')) {
            minHeight += " - " + toFloat(this.offsetBottom) + "px";
          } else if (isString(this.offsetBottom)) {
            minHeight += " - " + offsetHeight(query(this.offsetBottom, this.$el)) + "px";
          }

          minHeight += (box ? " - " + box + "px" : '') + ")";
        }

        return {
          minHeight: minHeight,
          prev: prev
        };
      },
      write: function write(ref) {
        var minHeight = ref.minHeight;
        var prev = ref.prev;
        css(this.$el, {
          minHeight: minHeight
        });

        if (minHeight !== prev) {
          this.$update(this.$el, 'resize');
        }

        if (this.minHeight && toFloat(css(this.$el, 'minHeight')) < this.minHeight) {
          css(this.$el, 'minHeight', this.minHeight);
        }
      },
      events: ['resize']
    }
  };

  function offsetHeight(el) {
    return el && offset(el).height || 0;
  }

  var SVG = {
    args: 'src',
    props: {
      id: Boolean,
      icon: String,
      src: String,
      style: String,
      width: Number,
      height: Number,
      ratio: Number,
      "class": String,
      strokeAnimation: Boolean,
      focusable: Boolean,
      // IE 11
      attributes: 'list'
    },
    data: {
      ratio: 1,
      include: ['style', 'class', 'focusable'],
      "class": '',
      strokeAnimation: false
    },
    beforeConnect: function beforeConnect() {
      this["class"] += ' uk-svg';
    },
    connected: function connected() {
      var this$1 = this;
      var assign;

      if (!this.icon && includes(this.src, '#')) {
        assign = this.src.split('#'), this.src = assign[0], this.icon = assign[1];
      }

      this.svg = this.getSvg().then(function (el) {
        this$1.applyAttributes(el);
        return this$1.svgEl = insertSVG(el, this$1.$el);
      }, noop);
    },
    disconnected: function disconnected() {
      var this$1 = this;

      if (isVoidElement(this.$el)) {
        this.$el.hidden = false;
      }

      if (this.svg) {
        this.svg.then(function (svg) {
          return (!this$1._connected || svg !== this$1.svgEl) && _remove(svg);
        }, noop);
      }

      this.svg = this.svgEl = null;
    },
    update: {
      read: function read() {
        return !!(this.strokeAnimation && this.svgEl && isVisible(this.svgEl));
      },
      write: function write() {
        applyAnimation(this.svgEl);
      },
      type: ['resize']
    },
    methods: {
      getSvg: function getSvg() {
        var this$1 = this;
        return loadSVG(this.src).then(function (svg) {
          return parseSVG(svg, this$1.icon) || Promise.reject('SVG not found.');
        });
      },
      applyAttributes: function applyAttributes(el) {
        var this$1 = this;

        for (var prop in this.$options.props) {
          if (this[prop] && includes(this.include, prop)) {
            attr(el, prop, this[prop]);
          }
        }

        for (var attribute in this.attributes) {
          var ref = this.attributes[attribute].split(':', 2);
          var prop$1 = ref[0];
          var value = ref[1];
          attr(el, prop$1, value);
        }

        if (!this.id) {
          removeAttr(el, 'id');
        }

        var props = ['width', 'height'];
        var dimensions = [this.width, this.height];

        if (!dimensions.some(function (val) {
          return val;
        })) {
          dimensions = props.map(function (prop) {
            return attr(el, prop);
          });
        }

        var viewBox = attr(el, 'viewBox');

        if (viewBox && !dimensions.some(function (val) {
          return val;
        })) {
          dimensions = viewBox.split(' ').slice(2);
        }

        dimensions.forEach(function (val, i) {
          val = (val | 0) * this$1.ratio;
          val && attr(el, props[i], val);

          if (val && !dimensions[i ^ 1]) {
            removeAttr(el, props[i ^ 1]);
          }
        });
        attr(el, 'data-svg', this.icon || this.src);
      }
    }
  };
  var svgs = {};

  function loadSVG(src) {
    if (svgs[src]) {
      return svgs[src];
    }

    return svgs[src] = new Promise(function (resolve, reject) {
      if (!src) {
        reject();
        return;
      }

      if (startsWith(src, 'data:')) {
        resolve(decodeURIComponent(src.split(',')[1]));
      } else {
        ajax(src).then(function (xhr) {
          return resolve(xhr.response);
        }, function () {
          return reject('SVG not found.');
        });
      }
    });
  }

  function parseSVG(svg, icon) {
    if (icon && includes(svg, '<symbol')) {
      svg = parseSymbols(svg, icon) || svg;
    }

    svg = $(svg.substr(svg.indexOf('<svg')));
    return svg && svg.hasChildNodes() && svg;
  }

  var symbolRe = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g;
  var symbols = {};

  function parseSymbols(svg, icon) {
    if (!symbols[svg]) {
      symbols[svg] = {};
      symbolRe.lastIndex = 0;
      var match;

      while (match = symbolRe.exec(svg)) {
        symbols[svg][match[3]] = "<svg xmlns=\"http://www.w3.org/2000/svg\"" + match[1] + "svg>";
      }
    }

    return symbols[svg][icon];
  }

  function applyAnimation(el) {
    var length = getMaxPathLength(el);

    if (length) {
      el.style.setProperty('--uk-animation-stroke', length);
    }
  }

  function getMaxPathLength(el) {
    return Math.ceil(Math.max.apply(Math, [0].concat($$('[stroke]', el).map(function (stroke) {
      try {
        return stroke.getTotalLength();
      } catch (e) {
        return 0;
      }
    }))));
  }

  function insertSVG(el, root) {
    if (isVoidElement(root) || root.tagName === 'CANVAS') {
      root.hidden = true;
      var next = root.nextElementSibling;
      return equals(el, next) ? next : after(root, el);
    }

    var last = root.lastElementChild;
    return equals(el, last) ? last : append(root, el);
  }

  function equals(el, other) {
    return attr(el, 'data-svg') === attr(other, 'data-svg');
  }

  var closeIcon = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"1\" y1=\"1\" x2=\"13\" y2=\"13\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13\" y1=\"1\" x2=\"1\" y2=\"13\"/></svg>";
  var closeLarge = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"1\" y1=\"1\" x2=\"19\" y2=\"19\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"19\" y1=\"1\" x2=\"1\" y2=\"19\"/></svg>";
  var marker = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"9\" y=\"4\" width=\"1\" height=\"11\"/><rect x=\"4\" y=\"9\" width=\"11\" height=\"1\"/></svg>";
  var navbarToggleIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"9\" width=\"20\" height=\"2\"/><rect y=\"3\" width=\"20\" height=\"2\"/><rect y=\"15\" width=\"20\" height=\"2\"/></svg>";
  var overlayIcon = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"19\" y=\"0\" width=\"1\" height=\"40\"/><rect x=\"0\" y=\"19\" width=\"40\" height=\"1\"/></svg>";
  var paginationNext = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 1 6 6 1 11\"/></svg>";
  var paginationPrevious = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"6 1 1 6 6 11\"/></svg>";
  var searchIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\"/></svg>";
  var searchLarge = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" cx=\"17.5\" cy=\"17.5\" r=\"16.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" x1=\"38\" y1=\"39\" x2=\"29\" y2=\"30\"/></svg>";
  var searchNavbar = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10.5\" cy=\"10.5\" r=\"9.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"23\" y1=\"23\" x2=\"17\" y2=\"17\"/></svg>";
  var slidenavNext = "<svg width=\"14px\" height=\"24px\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"1.225,23 12.775,12 1.225,1 \"/></svg>";
  var slidenavNextLarge = "<svg width=\"25px\" height=\"40px\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"4.002,38.547 22.527,20.024 4,1.5 \"/></svg>";
  var slidenavPrevious = "<svg width=\"14px\" height=\"24px\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"12.775,1 1.225,12 12.775,23 \"/></svg>";
  var slidenavPreviousLarge = "<svg width=\"25px\" height=\"40px\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"20.527,1.5 2,20.024 20.525,38.547 \"/></svg>";
  var spinner = "<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" cx=\"15\" cy=\"15\" r=\"14\"/></svg>";
  var totop = "<svg width=\"18\" height=\"10\" viewBox=\"0 0 18 10\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 9 9 1 17 9 \"/></svg>";
  var icons = {
    spinner: spinner,
    totop: totop,
    marker: marker,
    'close-icon': closeIcon,
    'close-large': closeLarge,
    'navbar-toggle-icon': navbarToggleIcon,
    'overlay-icon': overlayIcon,
    'pagination-next': paginationNext,
    'pagination-previous': paginationPrevious,
    'search-icon': searchIcon,
    'search-large': searchLarge,
    'search-navbar': searchNavbar,
    'slidenav-next': slidenavNext,
    'slidenav-next-large': slidenavNextLarge,
    'slidenav-previous': slidenavPrevious,
    'slidenav-previous-large': slidenavPreviousLarge
  };
  var Icon = {
    install: install,
    "extends": SVG,
    args: 'icon',
    props: ['icon'],
    data: {
      include: ['focusable']
    },
    isIcon: true,
    beforeConnect: function beforeConnect() {
      addClass(this.$el, 'uk-icon');
    },
    methods: {
      getSvg: function getSvg() {
        var icon = getIcon(this.icon);

        if (!icon) {
          return Promise.reject('Icon not found.');
        }

        return Promise.resolve(icon);
      }
    }
  };
  var IconComponent = {
    args: false,
    "extends": Icon,
    data: function data(vm) {
      return {
        icon: hyphenate(vm.constructor.options.name)
      };
    },
    beforeConnect: function beforeConnect() {
      addClass(this.$el, this.$name);
    }
  };
  var Slidenav = {
    "extends": IconComponent,
    beforeConnect: function beforeConnect() {
      addClass(this.$el, 'uk-slidenav');
    },
    computed: {
      icon: function icon(ref, $el) {
        var icon = ref.icon;
        return hasClass($el, 'uk-slidenav-large') ? icon + "-large" : icon;
      }
    }
  };
  var Search = {
    "extends": IconComponent,
    computed: {
      icon: function icon(ref, $el) {
        var icon = ref.icon;
        return hasClass($el, 'uk-search-icon') && parents($el, '.uk-search-large').length ? 'search-large' : parents($el, '.uk-search-navbar').length ? 'search-navbar' : icon;
      }
    }
  };
  var Close = {
    "extends": IconComponent,
    computed: {
      icon: function icon() {
        return "close-" + (hasClass(this.$el, 'uk-close-large') ? 'large' : 'icon');
      }
    }
  };
  var Spinner = {
    "extends": IconComponent,
    connected: function connected() {
      var this$1 = this;
      this.svg.then(function (svg) {
        return this$1.ratio !== 1 && css($('circle', svg), 'strokeWidth', 1 / this$1.ratio);
      }, noop);
    }
  };
  var parsed = {};

  function install(UIkit) {
    UIkit.icon.add = function (name, svg) {
      var obj;
      var added = isString(name) ? (obj = {}, obj[name] = svg, obj) : name;
      each(added, function (svg, name) {
        icons[name] = svg;
        delete parsed[name];
      });

      if (UIkit._initialized) {
        apply(document.body, function (el) {
          return each(UIkit.getComponents(el), function (cmp) {
            cmp.$options.isIcon && cmp.icon in added && cmp.$reset();
          });
        });
      }
    };
  }

  function getIcon(icon) {
    if (!icons[icon]) {
      return null;
    }

    if (!parsed[icon]) {
      parsed[icon] = $((icons[applyRtl(icon)] || icons[icon]).trim());
    }

    return parsed[icon].cloneNode(true);
  }

  function applyRtl(icon) {
    return isRtl ? swap(swap(icon, 'left', 'right'), 'previous', 'next') : icon;
  }

  var img = {
    args: 'dataSrc',
    props: {
      dataSrc: String,
      dataSrcset: Boolean,
      sizes: String,
      width: Number,
      height: Number,
      offsetTop: String,
      offsetLeft: String,
      target: String
    },
    data: {
      dataSrc: '',
      dataSrcset: false,
      sizes: false,
      width: false,
      height: false,
      offsetTop: '50vh',
      offsetLeft: 0,
      target: false
    },
    computed: {
      cacheKey: function cacheKey(ref) {
        var dataSrc = ref.dataSrc;
        return this.$name + "." + dataSrc;
      },
      width: function width(ref) {
        var width = ref.width;
        var dataWidth = ref.dataWidth;
        return width || dataWidth;
      },
      height: function height(ref) {
        var height = ref.height;
        var dataHeight = ref.dataHeight;
        return height || dataHeight;
      },
      sizes: function sizes(ref) {
        var sizes = ref.sizes;
        var dataSizes = ref.dataSizes;
        return sizes || dataSizes;
      },
      isImg: function isImg(_, $el) {
        return _isImg($el);
      },
      target: {
        get: function get(ref) {
          var target = ref.target;
          return [this.$el].concat(queryAll(target, this.$el));
        },
        watch: function watch() {
          this.observe();
        }
      },
      offsetTop: function offsetTop(ref) {
        var offsetTop = ref.offsetTop;
        return toPx(offsetTop, 'height');
      },
      offsetLeft: function offsetLeft(ref) {
        var offsetLeft = ref.offsetLeft;
        return toPx(offsetLeft, 'width');
      }
    },
    connected: function connected() {
      if (storage[this.cacheKey]) {
        setSrcAttrs(this.$el, storage[this.cacheKey], this.dataSrcset, this.sizes);
      } else if (this.isImg && this.width && this.height) {
        setSrcAttrs(this.$el, getPlaceholderImage(this.width, this.height, this.sizes));
      }

      this.observer = new IntersectionObserver(this.load, {
        rootMargin: this.offsetTop + "px " + this.offsetLeft + "px"
      });
      requestAnimationFrame(this.observe);
    },
    disconnected: function disconnected() {
      this.observer.disconnect();
    },
    update: {
      read: function read(ref) {
        var this$1 = this;
        var image = ref.image;

        if (!image && document.readyState === 'complete') {
          this.load(this.observer.takeRecords());
        }

        if (this.isImg) {
          return false;
        }

        image && image.then(function (img) {
          return img && img.currentSrc !== '' && setSrcAttrs(this$1.$el, currentSrc(img));
        });
      },
      write: function write(data) {
        if (this.dataSrcset && window.devicePixelRatio !== 1) {
          var bgSize = css(this.$el, 'backgroundSize');

          if (bgSize.match(/^(auto\s?)+$/) || toFloat(bgSize) === data.bgSize) {
            data.bgSize = getSourceSize(this.dataSrcset, this.sizes);
            css(this.$el, 'backgroundSize', data.bgSize + "px");
          }
        }
      },
      events: ['resize']
    },
    methods: {
      load: function load(entries) {
        var this$1 = this; // Old chromium based browsers (UC Browser) did not implement `isIntersecting`

        if (!entries.some(function (entry) {
          return isUndefined(entry.isIntersecting) || entry.isIntersecting;
        })) {
          return;
        }

        this._data.image = getImage(this.dataSrc, this.dataSrcset, this.sizes).then(function (img) {
          setSrcAttrs(this$1.$el, currentSrc(img), img.srcset, img.sizes);
          storage[this$1.cacheKey] = currentSrc(img);
          return img;
        }, function (e) {
          return trigger(this$1.$el, new e.constructor(e.type, e));
        });
        this.observer.disconnect();
      },
      observe: function observe() {
        var this$1 = this;

        if (this._connected && !this._data.image) {
          this.target.forEach(function (el) {
            return this$1.observer.observe(el);
          });
        }
      }
    }
  };

  function setSrcAttrs(el, src, srcset, sizes) {
    if (_isImg(el)) {
      sizes && (el.sizes = sizes);
      srcset && (el.srcset = srcset);
      src && (el.src = src);
    } else if (src) {
      var change = !includes(el.style.backgroundImage, src);

      if (change) {
        css(el, 'backgroundImage', "url(" + escape(src) + ")");
        trigger(el, createEvent('load', false));
      }
    }
  }

  function getPlaceholderImage(width, height, sizes) {
    var assign;

    if (sizes) {
      assign = Dimensions.ratio({
        width: width,
        height: height
      }, 'width', toPx(sizesToPixel(sizes))), width = assign.width, height = assign.height;
    }

    return "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"" + width + "\" height=\"" + height + "\"></svg>";
  }

  var sizesRe = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;

  function sizesToPixel(sizes) {
    var matches;
    sizesRe.lastIndex = 0;

    while (matches = sizesRe.exec(sizes)) {
      if (!matches[1] || window.matchMedia(matches[1]).matches) {
        matches = evaluateSize(matches[2]);
        break;
      }
    }

    return matches || '100vw';
  }

  var sizeRe = /\d+(?:\w+|%)/g;
  var additionRe = /[+-]?(\d+)/g;

  function evaluateSize(size) {
    return startsWith(size, 'calc') ? size.substring(5, size.length - 1).replace(sizeRe, function (size) {
      return toPx(size);
    }).replace(/ /g, '').match(additionRe).reduce(function (a, b) {
      return a + +b;
    }, 0) : size;
  }

  var srcSetRe = /\s+\d+w\s*(?:,|$)/g;

  function getSourceSize(srcset, sizes) {
    var srcSize = toPx(sizesToPixel(sizes));
    var descriptors = (srcset.match(srcSetRe) || []).map(toFloat).sort(function (a, b) {
      return a - b;
    });
    return descriptors.filter(function (size) {
      return size >= srcSize;
    })[0] || descriptors.pop() || '';
  }

  function _isImg(el) {
    return el.tagName === 'IMG';
  }

  function currentSrc(el) {
    return el.currentSrc || el.src;
  }

  var key = '__test__';
  var storage; // workaround for Safari's private browsing mode and accessing sessionStorage in Blink

  try {
    storage = window.sessionStorage || {};
    storage[key] = 1;
    delete storage[key];
  } catch (e) {
    storage = {};
  }

  var Media = {
    props: {
      media: Boolean
    },
    data: {
      media: false
    },
    computed: {
      matchMedia: function matchMedia() {
        var media = toMedia(this.media);
        return !media || window.matchMedia(media).matches;
      }
    }
  };

  function toMedia(value) {
    if (isString(value)) {
      if (value[0] === '@') {
        var name = "breakpoint-" + value.substr(1);
        value = toFloat(getCssVar(name));
      } else if (isNaN(value)) {
        return value;
      }
    }

    return value && !isNaN(value) ? "(min-width: " + value + "px)" : false;
  }

  var leader = {
    mixins: [Class, Media],
    props: {
      fill: String
    },
    data: {
      fill: '',
      clsWrapper: 'uk-leader-fill',
      clsHide: 'uk-leader-hide',
      attrFill: 'data-fill'
    },
    computed: {
      fill: function fill(ref) {
        var fill = ref.fill;
        return fill || getCssVar('leader-fill-content');
      }
    },
    connected: function connected() {
      var assign;
      assign = wrapInner(this.$el, "<span class=\"" + this.clsWrapper + "\">"), this.wrapper = assign[0];
    },
    disconnected: function disconnected() {
      unwrap(this.wrapper.childNodes);
    },
    update: {
      read: function read(ref) {
        var changed = ref.changed;
        var width = ref.width;
        var prev = width;
        width = Math.floor(this.$el.offsetWidth / 2);
        return {
          width: width,
          fill: this.fill,
          changed: changed || prev !== width,
          hide: !this.matchMedia
        };
      },
      write: function write(data) {
        toggleClass(this.wrapper, this.clsHide, data.hide);

        if (data.changed) {
          data.changed = false;
          attr(this.wrapper, this.attrFill, new Array(data.width).join(data.fill));
        }
      },
      events: ['resize']
    }
  };
  var Container = {
    props: {
      container: Boolean
    },
    data: {
      container: true
    },
    computed: {
      container: function container(ref) {
        var container = ref.container;
        return container === true && this.$container || container && $(container);
      }
    }
  };
  var active$1 = [];
  var Modal = {
    mixins: [Class, Container, Togglable],
    props: {
      selPanel: String,
      selClose: String,
      escClose: Boolean,
      bgClose: Boolean,
      stack: Boolean
    },
    data: {
      cls: 'uk-open',
      escClose: true,
      bgClose: true,
      overlay: true,
      stack: false
    },
    computed: {
      panel: function panel(ref, $el) {
        var selPanel = ref.selPanel;
        return $(selPanel, $el);
      },
      transitionElement: function transitionElement() {
        return this.panel;
      },
      bgClose: function bgClose(ref) {
        var bgClose = ref.bgClose;
        return bgClose && this.panel;
      }
    },
    beforeDisconnect: function beforeDisconnect() {
      if (this.isToggled()) {
        this.toggleElement(this.$el, false, false);
      }
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return this.selClose;
      },
      handler: function handler(e) {
        e.preventDefault();
        this.hide();
      }
    }, {
      name: 'toggle',
      self: true,
      handler: function handler(e) {
        if (e.defaultPrevented) {
          return;
        }

        e.preventDefault();

        if (this.isToggled() === includes(active$1, this)) {
          this.toggle();
        }
      }
    }, {
      name: 'beforeshow',
      self: true,
      handler: function handler(e) {
        if (includes(active$1, this)) {
          return false;
        }

        if (!this.stack && active$1.length) {
          Promise.all(active$1.map(function (modal) {
            return modal.hide();
          })).then(this.show);
          e.preventDefault();
        } else {
          active$1.push(this);
        }
      }
    }, {
      name: 'show',
      self: true,
      handler: function handler() {
        var this$1 = this;

        if (width(window) - width(document) && this.overlay) {
          css(document.body, 'overflowY', 'scroll');
        }

        if (this.stack) {
          css(this.$el, 'zIndex', toFloat(css(this.$el, 'zIndex')) + active$1.length);
        }

        addClass(document.documentElement, this.clsPage);

        if (this.bgClose) {
          once(this.$el, 'hide', on(document, pointerDown, function (ref) {
            var target = ref.target;

            if (last(active$1) !== this$1 || this$1.overlay && !within(target, this$1.$el) || within(target, this$1.panel)) {
              return;
            }

            once(document, pointerUp + " " + pointerCancel + " scroll", function (ref) {
              var defaultPrevented = ref.defaultPrevented;
              var type = ref.type;
              var newTarget = ref.target;

              if (!defaultPrevented && type === pointerUp && target === newTarget) {
                this$1.hide();
              }
            }, true);
          }), {
            self: true
          });
        }

        if (this.escClose) {
          once(this.$el, 'hide', on(document, 'keydown', function (e) {
            if (e.keyCode === 27 && last(active$1) === this$1) {
              e.preventDefault();
              this$1.hide();
            }
          }), {
            self: true
          });
        }
      }
    }, {
      name: 'hidden',
      self: true,
      handler: function handler() {
        var this$1 = this;
        active$1.splice(active$1.indexOf(this), 1);

        if (!active$1.length) {
          css(document.body, 'overflowY', '');
        }

        css(this.$el, 'zIndex', '');

        if (!active$1.some(function (modal) {
          return modal.clsPage === this$1.clsPage;
        })) {
          removeClass(document.documentElement, this.clsPage);
        }
      }
    }],
    methods: {
      toggle: function toggle() {
        return this.isToggled() ? this.hide() : this.show();
      },
      show: function show() {
        var this$1 = this;

        if (this.container && this.$el.parentNode !== this.container) {
          append(this.container, this.$el);
          return new Promise(function (resolve) {
            return requestAnimationFrame(function () {
              return this$1.show().then(resolve);
            });
          });
        }

        return this.toggleElement(this.$el, true, animate$1(this));
      },
      hide: function hide() {
        return this.toggleElement(this.$el, false, animate$1(this));
      }
    }
  };

  function animate$1(ref) {
    var transitionElement = ref.transitionElement;
    var _toggle = ref._toggle;
    return function (el, show) {
      return new Promise(function (resolve, reject) {
        return once(el, 'show hide', function () {
          el._reject && el._reject();
          el._reject = reject;

          _toggle(el, show);

          var off = once(transitionElement, 'transitionstart', function () {
            once(transitionElement, 'transitionend transitioncancel', resolve, {
              self: true
            });
            clearTimeout(timer);
          }, {
            self: true
          });
          var timer = setTimeout(function () {
            off();
            resolve();
          }, toMs(css(transitionElement, 'transitionDuration')));
        });
      });
    };
  }

  var modal = {
    install: install$1,
    mixins: [Modal],
    data: {
      clsPage: 'uk-modal-page',
      selPanel: '.uk-modal-dialog',
      selClose: '.uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full'
    },
    events: [{
      name: 'show',
      self: true,
      handler: function handler() {
        if (hasClass(this.panel, 'uk-margin-auto-vertical')) {
          addClass(this.$el, 'uk-flex');
        } else {
          css(this.$el, 'display', 'block');
        }

        height(this.$el); // force reflow
      }
    }, {
      name: 'hidden',
      self: true,
      handler: function handler() {
        css(this.$el, 'display', '');
        removeClass(this.$el, 'uk-flex');
      }
    }]
  };

  function install$1(ref) {
    var modal = ref.modal;

    modal.dialog = function (content, options) {
      var dialog = modal("<div class=\"uk-modal\"> <div class=\"uk-modal-dialog\">" + content + "</div> </div>", options);
      dialog.show();
      on(dialog.$el, 'hidden', function () {
        return Promise.resolve().then(function () {
          return dialog.$destroy(true);
        });
      }, {
        self: true
      });
      return dialog;
    };

    modal.alert = function (message, options) {
      return openDialog(function (ref) {
        var labels = ref.labels;
        return "<div class=\"uk-modal-body\">" + (isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-primary uk-modal-close\" autofocus>" + labels.ok + "</button> </div>";
      }, options, function (deferred) {
        return deferred.resolve();
      });
    };

    modal.confirm = function (message, options) {
      return openDialog(function (ref) {
        var labels = ref.labels;
        return "<form> <div class=\"uk-modal-body\">" + (isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" + labels.cancel + "</button> <button class=\"uk-button uk-button-primary\" autofocus>" + labels.ok + "</button> </div> </form>";
      }, options, function (deferred) {
        return deferred.reject();
      });
    };

    modal.prompt = function (message, value, options) {
      return openDialog(function (ref) {
        var labels = ref.labels;
        return "<form class=\"uk-form-stacked\"> <div class=\"uk-modal-body\"> <label>" + (isString(message) ? message : html(message)) + "</label> <input class=\"uk-input\" value=\"" + (value || '') + "\" autofocus> </div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" + labels.cancel + "</button> <button class=\"uk-button uk-button-primary\">" + labels.ok + "</button> </div> </form>";
      }, options, function (deferred) {
        return deferred.resolve(null);
      }, function (dialog) {
        return $('input', dialog.$el).value;
      });
    };

    modal.labels = {
      ok: 'Ok',
      cancel: 'Cancel'
    };

    function openDialog(tmpl, options, hideFn, submitFn) {
      options = assign({
        bgClose: false,
        escClose: true,
        labels: modal.labels
      }, options);
      var dialog = modal.dialog(tmpl(options), options);
      var deferred = new Deferred();
      var resolved = false;
      on(dialog.$el, 'submit', 'form', function (e) {
        e.preventDefault();
        deferred.resolve(submitFn && submitFn(dialog));
        resolved = true;
        dialog.hide();
      });
      on(dialog.$el, 'hide', function () {
        return !resolved && hideFn(deferred);
      });
      deferred.promise.dialog = dialog;
      return deferred.promise;
    }
  }

  var nav = {
    "extends": Accordion,
    data: {
      targets: '> .uk-parent',
      toggle: '> a',
      content: '> ul'
    }
  };
  var navbar = {
    mixins: [Class, FlexBug],
    props: {
      dropdown: String,
      mode: 'list',
      align: String,
      offset: Number,
      boundary: Boolean,
      boundaryAlign: Boolean,
      clsDrop: String,
      delayShow: Number,
      delayHide: Number,
      dropbar: Boolean,
      dropbarMode: String,
      dropbarAnchor: Boolean,
      duration: Number
    },
    data: {
      dropdown: '.uk-navbar-nav > li',
      align: !isRtl ? 'left' : 'right',
      clsDrop: 'uk-navbar-dropdown',
      mode: undefined,
      offset: undefined,
      delayShow: undefined,
      delayHide: undefined,
      boundaryAlign: undefined,
      flip: 'x',
      boundary: true,
      dropbar: false,
      dropbarMode: 'slide',
      dropbarAnchor: false,
      duration: 200,
      forceHeight: true,
      selMinHeight: '.uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle'
    },
    computed: {
      boundary: function boundary(ref, $el) {
        var boundary = ref.boundary;
        var boundaryAlign = ref.boundaryAlign;
        return boundary === true || boundaryAlign ? $el : boundary;
      },
      dropbarAnchor: function dropbarAnchor(ref, $el) {
        var dropbarAnchor = ref.dropbarAnchor;
        return query(dropbarAnchor, $el);
      },
      pos: function pos(ref) {
        var align = ref.align;
        return "bottom-" + align;
      },
      dropbar: {
        get: function get(ref) {
          var dropbar = ref.dropbar;

          if (!dropbar) {
            return null;
          }

          dropbar = this._dropbar || query(dropbar, this.$el) || $('+ .uk-navbar-dropbar', this.$el);
          return dropbar ? dropbar : this._dropbar = $('<div></div>');
        },
        watch: function watch(dropbar) {
          addClass(dropbar, 'uk-navbar-dropbar');
        },
        immediate: true
      },
      dropdowns: {
        get: function get(ref, $el) {
          var dropdown = ref.dropdown;
          var clsDrop = ref.clsDrop;
          return $$(dropdown + " ." + clsDrop, $el);
        },
        watch: function watch(dropdowns) {
          var this$1 = this;
          this.$create('drop', dropdowns.filter(function (el) {
            return !this$1.getDropdown(el);
          }), assign({}, this.$props, {
            boundary: this.boundary,
            pos: this.pos,
            offset: this.dropbar || this.offset
          }));
        },
        immediate: true
      }
    },
    disconnected: function disconnected() {
      this.dropbar && _remove(this.dropbar);
      delete this._dropbar;
    },
    events: [{
      name: 'mouseover',
      delegate: function delegate() {
        return this.dropdown;
      },
      handler: function handler(ref) {
        var current = ref.current;
        var active = this.getActive();

        if (active && active.toggle && !within(active.toggle.$el, current) && !active.tracker.movesTo(active.$el)) {
          active.hide(false);
        }
      }
    }, {
      name: 'mouseleave',
      el: function el() {
        return this.dropbar;
      },
      handler: function handler() {
        var active = this.getActive();

        if (active && !this.dropdowns.some(function (el) {
          return matches(el, ':hover');
        })) {
          active.hide();
        }
      }
    }, {
      name: 'beforeshow',
      capture: true,
      filter: function filter() {
        return this.dropbar;
      },
      handler: function handler() {
        if (!this.dropbar.parentNode) {
          after(this.dropbarAnchor || this.$el, this.dropbar);
        }
      }
    }, {
      name: 'show',
      filter: function filter() {
        return this.dropbar;
      },
      handler: function handler(_, ref) {
        var $el = ref.$el;
        var dir = ref.dir;

        if (!hasClass($el, this.clsDrop)) {
          return;
        }

        if (this.dropbarMode === 'slide') {
          addClass(this.dropbar, 'uk-navbar-dropbar-slide');
        }

        this.clsDrop && addClass($el, this.clsDrop + "-dropbar");

        if (dir === 'bottom') {
          this.transitionTo($el.offsetHeight + toFloat(css($el, 'marginTop')) + toFloat(css($el, 'marginBottom')), $el);
        }
      }
    }, {
      name: 'beforehide',
      filter: function filter() {
        return this.dropbar;
      },
      handler: function handler(e, ref) {
        var $el = ref.$el;
        var active = this.getActive();

        if (matches(this.dropbar, ':hover') && active && active.$el === $el) {
          e.preventDefault();
        }
      }
    }, {
      name: 'hide',
      filter: function filter() {
        return this.dropbar;
      },
      handler: function handler(_, ref) {
        var $el = ref.$el;

        if (!hasClass($el, this.clsDrop)) {
          return;
        }

        var active = this.getActive();

        if (!active || active && active.$el === $el) {
          this.transitionTo(0);
        }
      }
    }],
    methods: {
      getActive: function getActive() {
        var ref = this.dropdowns.map(this.getDropdown).filter(function (drop) {
          return drop && drop.isActive();
        });
        var active = ref[0];
        return active && includes(active.mode, 'hover') && within(active.toggle.$el, this.$el) && active;
      },
      transitionTo: function transitionTo(newHeight, el) {
        var this$1 = this;
        var ref = this;
        var dropbar = ref.dropbar;
        var oldHeight = isVisible(dropbar) ? height(dropbar) : 0;
        el = oldHeight < newHeight && el;
        css(el, 'clip', "rect(0," + el.offsetWidth + "px," + oldHeight + "px,0)");
        height(dropbar, oldHeight);
        Transition.cancel([el, dropbar]);
        return Promise.all([Transition.start(dropbar, {
          height: newHeight
        }, this.duration), Transition.start(el, {
          clip: "rect(0," + el.offsetWidth + "px," + newHeight + "px,0)"
        }, this.duration)])["catch"](noop).then(function () {
          css(el, {
            clip: ''
          });
          this$1.$update(dropbar);
        });
      },
      getDropdown: function getDropdown(el) {
        return this.$getComponent(el, 'drop') || this.$getComponent(el, 'dropdown');
      }
    }
  };
  var offcanvas = {
    mixins: [Modal],
    args: 'mode',
    props: {
      mode: String,
      flip: Boolean,
      overlay: Boolean
    },
    data: {
      mode: 'slide',
      flip: false,
      overlay: false,
      clsPage: 'uk-offcanvas-page',
      clsContainer: 'uk-offcanvas-container',
      selPanel: '.uk-offcanvas-bar',
      clsFlip: 'uk-offcanvas-flip',
      clsContainerAnimation: 'uk-offcanvas-container-animation',
      clsSidebarAnimation: 'uk-offcanvas-bar-animation',
      clsMode: 'uk-offcanvas',
      clsOverlay: 'uk-offcanvas-overlay',
      selClose: '.uk-offcanvas-close',
      container: false
    },
    computed: {
      clsFlip: function clsFlip(ref) {
        var flip = ref.flip;
        var clsFlip = ref.clsFlip;
        return flip ? clsFlip : '';
      },
      clsOverlay: function clsOverlay(ref) {
        var overlay = ref.overlay;
        var clsOverlay = ref.clsOverlay;
        return overlay ? clsOverlay : '';
      },
      clsMode: function clsMode(ref) {
        var mode = ref.mode;
        var clsMode = ref.clsMode;
        return clsMode + "-" + mode;
      },
      clsSidebarAnimation: function clsSidebarAnimation(ref) {
        var mode = ref.mode;
        var clsSidebarAnimation = ref.clsSidebarAnimation;
        return mode === 'none' || mode === 'reveal' ? '' : clsSidebarAnimation;
      },
      clsContainerAnimation: function clsContainerAnimation(ref) {
        var mode = ref.mode;
        var clsContainerAnimation = ref.clsContainerAnimation;
        return mode !== 'push' && mode !== 'reveal' ? '' : clsContainerAnimation;
      },
      transitionElement: function transitionElement(ref) {
        var mode = ref.mode;
        return mode === 'reveal' ? this.panel.parentNode : this.panel;
      }
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return 'a[href^="#"]';
      },
      handler: function handler(ref) {
        var hash = ref.current.hash;
        var defaultPrevented = ref.defaultPrevented;

        if (!defaultPrevented && hash && $(hash, document.body)) {
          this.hide();
        }
      }
    }, {
      name: 'touchstart',
      passive: true,
      el: function el() {
        return this.panel;
      },
      handler: function handler(ref) {
        var targetTouches = ref.targetTouches;

        if (targetTouches.length === 1) {
          this.clientY = targetTouches[0].clientY;
        }
      }
    }, {
      name: 'touchmove',
      self: true,
      passive: false,
      filter: function filter() {
        return this.overlay;
      },
      handler: function handler(e) {
        e.cancelable && e.preventDefault();
      }
    }, {
      name: 'touchmove',
      passive: false,
      el: function el() {
        return this.panel;
      },
      handler: function handler(e) {
        if (e.targetTouches.length !== 1) {
          return;
        }

        var clientY = event.targetTouches[0].clientY - this.clientY;
        var ref = this.panel;
        var scrollTop = ref.scrollTop;
        var scrollHeight = ref.scrollHeight;
        var clientHeight = ref.clientHeight;

        if (clientHeight >= scrollHeight || scrollTop === 0 && clientY > 0 || scrollHeight - scrollTop <= clientHeight && clientY < 0) {
          e.cancelable && e.preventDefault();
        }
      }
    }, {
      name: 'show',
      self: true,
      handler: function handler() {
        if (this.mode === 'reveal' && !hasClass(this.panel.parentNode, this.clsMode)) {
          wrapAll(this.panel, '<div>');
          addClass(this.panel.parentNode, this.clsMode);
        }

        css(document.documentElement, 'overflowY', this.overlay ? 'hidden' : '');
        addClass(document.body, this.clsContainer, this.clsFlip);
        css(document.body, 'touch-action', 'pan-y pinch-zoom');
        css(this.$el, 'display', 'block');
        addClass(this.$el, this.clsOverlay);
        addClass(this.panel, this.clsSidebarAnimation, this.mode !== 'reveal' ? this.clsMode : '');
        height(document.body); // force reflow

        addClass(document.body, this.clsContainerAnimation);
        this.clsContainerAnimation && suppressUserScale();
      }
    }, {
      name: 'hide',
      self: true,
      handler: function handler() {
        removeClass(document.body, this.clsContainerAnimation);
        css(document.body, 'touch-action', '');
      }
    }, {
      name: 'hidden',
      self: true,
      handler: function handler() {
        this.clsContainerAnimation && resumeUserScale();

        if (this.mode === 'reveal') {
          unwrap(this.panel);
        }

        removeClass(this.panel, this.clsSidebarAnimation, this.clsMode);
        removeClass(this.$el, this.clsOverlay);
        css(this.$el, 'display', '');
        removeClass(document.body, this.clsContainer, this.clsFlip);
        css(document.documentElement, 'overflowY', '');
      }
    }, {
      name: 'swipeLeft swipeRight',
      handler: function handler(e) {
        if (this.isToggled() && endsWith(e.type, 'Left') ^ this.flip) {
          this.hide();
        }
      }
    }]
  }; // Chrome in responsive mode zooms page upon opening offcanvas

  function suppressUserScale() {
    getViewport$1().content += ',user-scalable=0';
  }

  function resumeUserScale() {
    var viewport = getViewport$1();
    viewport.content = viewport.content.replace(/,user-scalable=0$/, '');
  }

  function getViewport$1() {
    return $('meta[name="viewport"]', document.head) || append(document.head, '<meta name="viewport">');
  }

  var overflowAuto = {
    mixins: [Class],
    props: {
      selContainer: String,
      selContent: String
    },
    data: {
      selContainer: '.uk-modal',
      selContent: '.uk-modal-dialog'
    },
    computed: {
      container: function container(ref, $el) {
        var selContainer = ref.selContainer;
        return closest($el, selContainer);
      },
      content: function content(ref, $el) {
        var selContent = ref.selContent;
        return closest($el, selContent);
      }
    },
    connected: function connected() {
      css(this.$el, 'minHeight', 150);
    },
    update: {
      read: function read() {
        if (!this.content || !this.container) {
          return false;
        }

        return {
          current: toFloat(css(this.$el, 'maxHeight')),
          max: Math.max(150, height(this.container) - (offset(this.content).height - height(this.$el)))
        };
      },
      write: function write(ref) {
        var current = ref.current;
        var max = ref.max;
        css(this.$el, 'maxHeight', max);

        if (Math.round(current) !== Math.round(max)) {
          trigger(this.$el, 'resize');
        }
      },
      events: ['resize']
    }
  };
  var responsive = {
    props: ['width', 'height'],
    connected: function connected() {
      addClass(this.$el, 'uk-responsive-width');
    },
    update: {
      read: function read() {
        return isVisible(this.$el) && this.width && this.height ? {
          width: width(this.$el.parentNode),
          height: this.height
        } : false;
      },
      write: function write(dim) {
        height(this.$el, Dimensions.contain({
          height: this.height,
          width: this.width
        }, dim).height);
      },
      events: ['resize']
    }
  };
  var scroll = {
    props: {
      offset: Number
    },
    data: {
      offset: 0
    },
    methods: {
      scrollTo: function scrollTo(el) {
        var this$1 = this;
        el = el && $(el) || document.body;

        if (trigger(this.$el, 'beforescroll', [this, el])) {
          scrollIntoView(el, {
            offset: this.offset
          }).then(function () {
            return trigger(this$1.$el, 'scrolled', [this$1, el]);
          });
        }
      }
    },
    events: {
      click: function click(e) {
        if (e.defaultPrevented) {
          return;
        }

        e.preventDefault();
        this.scrollTo(escape(decodeURIComponent(this.$el.hash)).substr(1));
      }
    }
  };
  var stateKey$1 = '_ukScrollspy';
  var scrollspy = {
    args: 'cls',
    props: {
      cls: String,
      target: String,
      hidden: Boolean,
      offsetTop: Number,
      offsetLeft: Number,
      repeat: Boolean,
      delay: Number
    },
    data: function data() {
      return {
        cls: false,
        target: false,
        hidden: true,
        offsetTop: 0,
        offsetLeft: 0,
        repeat: false,
        delay: 0,
        inViewClass: 'uk-scrollspy-inview'
      };
    },
    computed: {
      elements: {
        get: function get(ref, $el) {
          var target = ref.target;
          return target ? $$(target, $el) : [$el];
        },
        watch: function watch(elements) {
          if (this.hidden) {
            css(filter(elements, ":not(." + this.inViewClass + ")"), 'visibility', 'hidden');
          }
        },
        immediate: true
      }
    },
    update: [{
      read: function read(ref) {
        var this$1 = this;
        var update = ref.update;

        if (!update) {
          return;
        }

        this.elements.forEach(function (el) {
          if (!el[stateKey$1]) {
            el[stateKey$1] = {
              cls: data(el, 'uk-scrollspy-class') || this$1.cls
            };
          }

          el[stateKey$1].show = isInView(el, this$1.offsetTop, this$1.offsetLeft);
        });
      },
      write: function write(data) {
        var this$1 = this; // Let child components be applied at least once first

        if (!data.update) {
          this.$emit();
          return data.update = true;
        }

        this.elements.forEach(function (el) {
          var state = el[stateKey$1];

          var toggle = function toggle(inview) {
            css(el, 'visibility', !inview && this$1.hidden ? 'hidden' : '');
            toggleClass(el, this$1.inViewClass, inview);
            toggleClass(el, state.cls);
            trigger(el, inview ? 'inview' : 'outview');
            state.inview = inview;
            this$1.$update(el);
          };

          if (state.show && !state.inview && !state.queued) {
            state.queued = true;
            data.promise = (data.promise || Promise.resolve()).then(function () {
              return new Promise(function (resolve) {
                return setTimeout(resolve, this$1.delay);
              });
            }).then(function () {
              toggle(true);
              setTimeout(function () {
                state.queued = false;
                this$1.$emit();
              }, 300);
            });
          } else if (!state.show && state.inview && !state.queued && this$1.repeat) {
            toggle(false);
          }
        });
      },
      events: ['scroll', 'resize']
    }]
  };
  var scrollspyNav = {
    props: {
      cls: String,
      closest: String,
      scroll: Boolean,
      overflow: Boolean,
      offset: Number
    },
    data: {
      cls: 'uk-active',
      closest: false,
      scroll: false,
      overflow: true,
      offset: 0
    },
    computed: {
      links: {
        get: function get(_, $el) {
          return $$('a[href^="#"]', $el).filter(function (el) {
            return el.hash;
          });
        },
        watch: function watch(links) {
          if (this.scroll) {
            this.$create('scroll', links, {
              offset: this.offset || 0
            });
          }
        },
        immediate: true
      },
      targets: function targets() {
        return $$(this.links.map(function (el) {
          return escape(el.hash).substr(1);
        }).join(','));
      },
      elements: function elements(ref) {
        var selector = ref.closest;
        return closest(this.links, selector || '*');
      }
    },
    update: [{
      read: function read() {
        var this$1 = this;
        var ref = this.targets;
        var length = ref.length;

        if (!length || !isVisible(this.$el)) {
          return false;
        }

        var scrollElement = last(scrollParents(this.targets[0]));
        var scrollTop = scrollElement.scrollTop;
        var scrollHeight = scrollElement.scrollHeight;
        var viewport = getViewport(scrollElement);
        var max = scrollHeight - offset(viewport).height;
        var active = false;

        if (scrollTop === max) {
          active = length - 1;
        } else {
          this.targets.every(function (el, i) {
            if (position(el, viewport).top - this$1.offset <= 0) {
              active = i;
              return true;
            }
          });

          if (active === false && this.overflow) {
            active = 0;
          }
        }

        return {
          active: active
        };
      },
      write: function write(ref) {
        var active = ref.active;
        this.links.forEach(function (el) {
          return el.blur();
        });
        removeClass(this.elements, this.cls);

        if (active !== false) {
          trigger(this.$el, 'active', [active, addClass(this.elements[active], this.cls)]);
        }
      },
      events: ['scroll', 'resize']
    }]
  };
  var sticky = {
    mixins: [Class, Media],
    props: {
      top: null,
      bottom: Boolean,
      offset: String,
      animation: String,
      clsActive: String,
      clsInactive: String,
      clsFixed: String,
      clsBelow: String,
      selTarget: String,
      widthElement: Boolean,
      showOnUp: Boolean,
      targetOffset: Number
    },
    data: {
      top: 0,
      bottom: false,
      offset: 0,
      animation: '',
      clsActive: 'uk-active',
      clsInactive: '',
      clsFixed: 'uk-sticky-fixed',
      clsBelow: 'uk-sticky-below',
      selTarget: '',
      widthElement: false,
      showOnUp: false,
      targetOffset: false
    },
    computed: {
      offset: function offset(ref) {
        var offset = ref.offset;
        return toPx(offset);
      },
      selTarget: function selTarget(ref, $el) {
        var selTarget = ref.selTarget;
        return selTarget && $(selTarget, $el) || $el;
      },
      widthElement: function widthElement(ref, $el) {
        var widthElement = ref.widthElement;
        return query(widthElement, $el) || this.placeholder;
      },
      isActive: {
        get: function get() {
          return hasClass(this.selTarget, this.clsActive);
        },
        set: function set(value) {
          if (value && !this.isActive) {
            replaceClass(this.selTarget, this.clsInactive, this.clsActive);
            trigger(this.$el, 'active');
          } else if (!value && !hasClass(this.selTarget, this.clsInactive)) {
            replaceClass(this.selTarget, this.clsActive, this.clsInactive);
            trigger(this.$el, 'inactive');
          }
        }
      }
    },
    connected: function connected() {
      this.placeholder = $('+ .uk-sticky-placeholder', this.$el) || $('<div class="uk-sticky-placeholder"></div>');
      this.isFixed = false;
      this.isActive = false;
    },
    disconnected: function disconnected() {
      if (this.isFixed) {
        this.hide();
        removeClass(this.selTarget, this.clsInactive);
      }

      _remove(this.placeholder);

      this.placeholder = null;
      this.widthElement = null;
    },
    events: [{
      name: 'load hashchange popstate',
      el: inBrowser && window,
      handler: function handler() {
        var this$1 = this;

        if (!(this.targetOffset !== false && location.hash && window.pageYOffset > 0)) {
          return;
        }

        var target = $(location.hash);

        if (target) {
          fastdom.read(function () {
            var ref = offset(target);
            var top = ref.top;
            var elTop = offset(this$1.$el).top;
            var elHeight = this$1.$el.offsetHeight;

            if (this$1.isFixed && elTop + elHeight >= top && elTop <= top + target.offsetHeight) {
              scrollTop(window, top - elHeight - (isNumeric(this$1.targetOffset) ? this$1.targetOffset : 0) - this$1.offset);
            }
          });
        }
      }
    }],
    update: [{
      read: function read(ref, type) {
        var height = ref.height;
        this.inactive = !this.matchMedia || !isVisible(this.$el);

        if (this.inactive) {
          return false;
        }

        if (this.isActive && type !== 'update') {
          this.hide();
          height = this.$el.offsetHeight;
          this.show();
        }

        height = !this.isActive ? this.$el.offsetHeight : height;
        this.topOffset = offset(this.isFixed ? this.placeholder : this.$el).top;
        this.bottomOffset = this.topOffset + height;
        var bottom = parseProp('bottom', this);
        this.top = Math.max(toFloat(parseProp('top', this)), this.topOffset) - this.offset;
        this.bottom = bottom && bottom - this.$el.offsetHeight;
        this.width = offset(isVisible(this.widthElement) ? this.widthElement : this.$el).width;
        return {
          height: height,
          top: offsetPosition(this.placeholder)[0],
          margins: css(this.$el, ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'])
        };
      },
      write: function write(ref) {
        var height = ref.height;
        var margins = ref.margins;
        var ref$1 = this;
        var placeholder = ref$1.placeholder;
        css(placeholder, assign({
          height: height
        }, margins));

        if (!within(placeholder, document)) {
          after(this.$el, placeholder);
          placeholder.hidden = true;
        }

        this.isActive = !!this.isActive; // force self-assign
      },
      events: ['resize']
    }, {
      read: function read(ref) {
        var scroll = ref.scroll;
        if (scroll === void 0) scroll = 0;
        this.scroll = window.pageYOffset;
        return {
          dir: scroll <= this.scroll ? 'down' : 'up',
          scroll: this.scroll
        };
      },
      write: function write(data, type) {
        var this$1 = this;
        var now = Date.now();
        var initTimestamp = data.initTimestamp;
        if (initTimestamp === void 0) initTimestamp = 0;
        var dir = data.dir;
        var lastDir = data.lastDir;
        var lastScroll = data.lastScroll;
        var scroll = data.scroll;
        var top = data.top;
        data.lastScroll = scroll;

        if (scroll < 0 || scroll === lastScroll && type === 'scroll' || this.showOnUp && type !== 'scroll' && !this.isFixed) {
          return;
        }

        if (now - initTimestamp > 300 || dir !== lastDir) {
          data.initScroll = scroll;
          data.initTimestamp = now;
        }

        data.lastDir = dir;

        if (this.showOnUp && !this.isFixed && Math.abs(data.initScroll - scroll) <= 30 && Math.abs(lastScroll - scroll) <= 10) {
          return;
        }

        if (this.inactive || scroll < this.top || this.showOnUp && (scroll <= this.top || dir === 'down' && type === 'scroll' || dir === 'up' && !this.isFixed && scroll <= this.bottomOffset)) {
          if (!this.isFixed) {
            if (Animation.inProgress(this.$el) && top > scroll) {
              Animation.cancel(this.$el);
              this.hide();
            }

            return;
          }

          this.isFixed = false;

          if (this.animation && scroll > this.topOffset) {
            Animation.cancel(this.$el);
            Animation.out(this.$el, this.animation).then(function () {
              return this$1.hide();
            }, noop);
          } else {
            this.hide();
          }
        } else if (this.isFixed) {
          this.update();
        } else if (this.animation) {
          Animation.cancel(this.$el);
          this.show();
          Animation["in"](this.$el, this.animation)["catch"](noop);
        } else {
          this.show();
        }
      },
      events: ['resize', 'scroll']
    }],
    methods: {
      show: function show() {
        this.isFixed = true;
        this.update();
        this.placeholder.hidden = false;
      },
      hide: function hide() {
        this.isActive = false;
        removeClass(this.$el, this.clsFixed, this.clsBelow);
        css(this.$el, {
          position: '',
          top: '',
          width: ''
        });
        this.placeholder.hidden = true;
      },
      update: function update() {
        var active = this.top !== 0 || this.scroll > this.top;
        var top = Math.max(0, this.offset);

        if (isNumeric(this.bottom) && this.scroll > this.bottom - this.offset) {
          top = this.bottom - this.scroll;
        }

        css(this.$el, {
          position: 'fixed',
          top: top + "px",
          width: this.width
        });
        this.isActive = active;
        toggleClass(this.$el, this.clsBelow, this.scroll > this.bottomOffset);
        addClass(this.$el, this.clsFixed);
      }
    }
  };

  function parseProp(prop, ref) {
    var $props = ref.$props;
    var $el = ref.$el;
    var propOffset = ref[prop + "Offset"];
    var value = $props[prop];

    if (!value) {
      return;
    }

    if (isString(value) && value.match(/^-?\d/)) {
      return propOffset + toPx(value);
    } else {
      return offset(value === true ? $el.parentNode : query(value, $el)).bottom;
    }
  }

  var Switcher = {
    mixins: [Togglable],
    args: 'connect',
    props: {
      connect: String,
      toggle: String,
      active: Number,
      swiping: Boolean
    },
    data: {
      connect: '~.uk-switcher',
      toggle: '> * > :first-child',
      active: 0,
      swiping: true,
      cls: 'uk-active',
      clsContainer: 'uk-switcher',
      attrItem: 'uk-switcher-item'
    },
    computed: {
      connects: {
        get: function get(ref, $el) {
          var connect = ref.connect;
          return queryAll(connect, $el);
        },
        watch: function watch(connects) {
          var this$1 = this;
          connects.forEach(function (list) {
            return this$1.updateAria(list.children);
          });

          if (this.swiping) {
            css(connects, 'touch-action', 'pan-y pinch-zoom');
          }
        },
        immediate: true
      },
      toggles: {
        get: function get(ref, $el) {
          var toggle = ref.toggle;
          return $$(toggle, $el).filter(function (el) {
            return !matches(el, '.uk-disabled *, .uk-disabled, [disabled]');
          });
        },
        watch: function watch(toggles) {
          var active = this.index();
          this.show(~active && active || toggles[this.active] || toggles[0]);
        },
        immediate: true
      },
      children: function children() {
        var this$1 = this;
        return _children(this.$el).filter(function (child) {
          return this$1.toggles.some(function (toggle) {
            return within(toggle, child);
          });
        });
      }
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return this.toggle;
      },
      handler: function handler(e) {
        if (!includes(this.toggles, e.current)) {
          return;
        }

        e.preventDefault();
        this.show(e.current);
      }
    }, {
      name: 'click',
      el: function el() {
        return this.connects;
      },
      delegate: function delegate() {
        return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
      },
      handler: function handler(e) {
        e.preventDefault();
        this.show(data(e.current, this.attrItem));
      }
    }, {
      name: 'swipeRight swipeLeft',
      filter: function filter() {
        return this.swiping;
      },
      el: function el() {
        return this.connects;
      },
      handler: function handler(ref) {
        var type = ref.type;
        this.show(endsWith(type, 'Left') ? 'next' : 'previous');
      }
    }],
    methods: {
      index: function index() {
        var this$1 = this;
        return findIndex(this.children, function (el) {
          return hasClass(el, this$1.cls);
        });
      },
      show: function show(item) {
        var this$1 = this;
        var prev = this.index();

        var next = _getIndex(item, this.toggles, prev);

        if (prev === next) {
          return;
        }

        this.children.forEach(function (child, i) {
          toggleClass(child, this$1.cls, next === i);
          attr(this$1.toggles[i], 'aria-expanded', next === i);
        });
        this.connects.forEach(function (ref) {
          var children = ref.children;
          return this$1.toggleElement(toNodes(children).filter(function (child, i) {
            return i !== next && this$1.isToggled(child);
          }), false, prev >= 0).then(function () {
            return this$1.toggleElement(children[next], true, prev >= 0);
          });
        });
      }
    }
  };
  var tab = {
    mixins: [Class],
    "extends": Switcher,
    props: {
      media: Boolean
    },
    data: {
      media: 960,
      attrItem: 'uk-tab-item'
    },
    connected: function connected() {
      var cls = hasClass(this.$el, 'uk-tab-left') ? 'uk-tab-left' : hasClass(this.$el, 'uk-tab-right') ? 'uk-tab-right' : false;

      if (cls) {
        this.$create('toggle', this.$el, {
          cls: cls,
          mode: 'media',
          media: this.media
        });
      }
    }
  };
  var toggle = {
    mixins: [Media, Togglable],
    args: 'target',
    props: {
      href: String,
      target: null,
      mode: 'list',
      queued: Boolean
    },
    data: {
      href: false,
      target: false,
      mode: 'click',
      queued: true
    },
    computed: {
      target: {
        get: function get(ref, $el) {
          var href = ref.href;
          var target = ref.target;
          target = queryAll(target || href, $el);
          return target.length && target || [$el];
        },
        watch: function watch() {
          trigger(this.target, 'updatearia', [this]);
        },
        immediate: true
      }
    },
    events: [{
      name: pointerEnter + " " + pointerLeave,
      filter: function filter() {
        return includes(this.mode, 'hover');
      },
      handler: function handler(e) {
        if (!isTouch(e)) {
          this.toggle("toggle" + (e.type === pointerEnter ? 'show' : 'hide'));
        }
      }
    }, {
      name: 'click',
      filter: function filter() {
        return includes(this.mode, 'click') || hasTouch && includes(this.mode, 'hover');
      },
      handler: function handler(e) {
        // TODO better isToggled handling
        var link;

        if (closest(e.target, 'a[href="#"], a[href=""]') || (link = closest(e.target, 'a[href]')) && (this.cls && !hasClass(this.target, this.cls.split(' ')[0]) || !isVisible(this.target) || link.hash && matches(this.target, link.hash))) {
          e.preventDefault();
        }

        this.toggle();
      }
    }],
    update: {
      read: function read() {
        return includes(this.mode, 'media') && this.media ? {
          match: this.matchMedia
        } : false;
      },
      write: function write(ref) {
        var match = ref.match;
        var toggled = this.isToggled(this.target);

        if (match ? !toggled : toggled) {
          this.toggle();
        }
      },
      events: ['resize']
    },
    methods: {
      toggle: function toggle(type) {
        var this$1 = this;

        if (!trigger(this.target, type || 'toggle', [this])) {
          return;
        }

        if (this.queued) {
          var toggled = this.target.filter(this.isToggled);
          this.toggleElement(toggled, false).then(function () {
            return this$1.toggleElement(this$1.target.filter(function (el) {
              return !includes(toggled, el);
            }), true);
          });
        } else {
          this.toggleElement(this.target);
        }
      }
    }
  };
  var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Accordion: Accordion,
    Alert: alert,
    Cover: cover,
    Drop: drop,
    Dropdown: drop,
    FormCustom: formCustom,
    Gif: gif,
    Grid: grid,
    HeightMatch: heightMatch,
    HeightViewport: heightViewport,
    Icon: Icon,
    Img: img,
    Leader: leader,
    Margin: Margin,
    Modal: modal,
    Nav: nav,
    Navbar: navbar,
    Offcanvas: offcanvas,
    OverflowAuto: overflowAuto,
    Responsive: responsive,
    Scroll: scroll,
    Scrollspy: scrollspy,
    ScrollspyNav: scrollspyNav,
    Sticky: sticky,
    Svg: SVG,
    Switcher: Switcher,
    Tab: tab,
    Toggle: toggle,
    Video: Video,
    Close: Close,
    Spinner: Spinner,
    SlidenavNext: Slidenav,
    SlidenavPrevious: Slidenav,
    SearchIcon: Search,
    Marker: IconComponent,
    NavbarToggleIcon: IconComponent,
    OverlayIcon: IconComponent,
    PaginationNext: IconComponent,
    PaginationPrevious: IconComponent,
    Totop: IconComponent
  }); // register components

  each(components, function (component, name) {
    return UIkit.component(name, component);
  }); // core functionality

  UIkit.use(Core);
  boot(UIkit);
  var countdown = {
    mixins: [Class],
    props: {
      date: String,
      clsWrapper: String
    },
    data: {
      date: '',
      clsWrapper: '.uk-countdown-%unit%'
    },
    computed: {
      date: function date(ref) {
        var date = ref.date;
        return Date.parse(date);
      },
      days: function days(ref, $el) {
        var clsWrapper = ref.clsWrapper;
        return $(clsWrapper.replace('%unit%', 'days'), $el);
      },
      hours: function hours(ref, $el) {
        var clsWrapper = ref.clsWrapper;
        return $(clsWrapper.replace('%unit%', 'hours'), $el);
      },
      minutes: function minutes(ref, $el) {
        var clsWrapper = ref.clsWrapper;
        return $(clsWrapper.replace('%unit%', 'minutes'), $el);
      },
      seconds: function seconds(ref, $el) {
        var clsWrapper = ref.clsWrapper;
        return $(clsWrapper.replace('%unit%', 'seconds'), $el);
      },
      units: function units() {
        var this$1 = this;
        return ['days', 'hours', 'minutes', 'seconds'].filter(function (unit) {
          return this$1[unit];
        });
      }
    },
    connected: function connected() {
      this.start();
    },
    disconnected: function disconnected() {
      var this$1 = this;
      this.stop();
      this.units.forEach(function (unit) {
        return empty(this$1[unit]);
      });
    },
    events: [{
      name: 'visibilitychange',
      el: inBrowser && document,
      handler: function handler() {
        if (document.hidden) {
          this.stop();
        } else {
          this.start();
        }
      }
    }],
    update: {
      write: function write() {
        var this$1 = this;
        var timespan = getTimeSpan(this.date);

        if (timespan.total <= 0) {
          this.stop();
          timespan.days = timespan.hours = timespan.minutes = timespan.seconds = 0;
        }

        this.units.forEach(function (unit) {
          var digits = String(Math.floor(timespan[unit]));
          digits = digits.length < 2 ? "0" + digits : digits;
          var el = this$1[unit];

          if (el.textContent !== digits) {
            digits = digits.split('');

            if (digits.length !== el.children.length) {
              html(el, digits.map(function () {
                return '<span></span>';
              }).join(''));
            }

            digits.forEach(function (digit, i) {
              return el.children[i].textContent = digit;
            });
          }
        });
      }
    },
    methods: {
      start: function start() {
        this.stop();

        if (this.date && this.units.length) {
          this.$update();
          this.timer = setInterval(this.$update, 1000);
        }
      },
      stop: function stop() {
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
      }
    }
  };

  function getTimeSpan(date) {
    var total = date - Date.now();
    return {
      total: total,
      seconds: total / 1000 % 60,
      minutes: total / 1000 / 60 % 60,
      hours: total / 1000 / 60 / 60 % 24,
      days: total / 1000 / 60 / 60 / 24
    };
  }

  var targetClass = 'uk-animation-target';
  var Animate = {
    props: {
      animation: Number
    },
    data: {
      animation: 150
    },
    methods: {
      animate: function animate(action, target) {
        var this$1 = this;
        if (target === void 0) target = this.$el;
        addStyle();

        var children$1 = _children(target);

        var propsFrom = children$1.map(function (el) {
          return getProps(el, true);
        });
        var oldHeight = height(target);
        var oldScrollY = window.pageYOffset;
        action();
        Transition.cancel(target);
        children$1.forEach(Transition.cancel);
        reset(target);
        this.$update(target, 'resize');
        fastdom.flush();
        var newHeight = height(target);
        children$1 = children$1.concat(_children(target).filter(function (el) {
          return !includes(children$1, el);
        }));
        var propsTo = children$1.map(function (el, i) {
          return el.parentNode && i in propsFrom ? propsFrom[i] ? isVisible(el) ? getPositionWithMargin(el) : {
            opacity: 0
          } : {
            opacity: isVisible(el) ? 1 : 0
          } : false;
        });
        propsFrom = propsTo.map(function (props, i) {
          var from = children$1[i].parentNode === target ? propsFrom[i] || getProps(children$1[i]) : false;

          if (from) {
            if (!props) {
              delete from.opacity;
            } else if (!('opacity' in props)) {
              var opacity = from.opacity;

              if (opacity % 1) {
                props.opacity = 1;
              } else {
                delete from.opacity;
              }
            }
          }

          return from;
        });
        addClass(target, targetClass);
        children$1.forEach(function (el, i) {
          return propsFrom[i] && css(el, propsFrom[i]);
        });
        css(target, {
          height: oldHeight,
          display: 'block'
        });
        scrollTop(window, oldScrollY);
        return Promise.all(children$1.map(function (el, i) {
          return ['top', 'left', 'height', 'width'].some(function (prop) {
            return propsFrom[i][prop] !== propsTo[i][prop];
          }) && Transition.start(el, propsTo[i], this$1.animation, 'ease');
        }).concat(oldHeight !== newHeight && Transition.start(target, {
          height: newHeight
        }, this.animation, 'ease'))).then(function () {
          children$1.forEach(function (el, i) {
            return css(el, {
              display: propsTo[i].opacity === 0 ? 'none' : '',
              zIndex: ''
            });
          });
          reset(target);
          this$1.$update(target, 'resize');
          fastdom.flush(); // needed for IE11
        }, noop);
      }
    }
  };

  function getProps(el, opacity) {
    var zIndex = css(el, 'zIndex');
    return isVisible(el) ? assign({
      display: '',
      opacity: opacity ? css(el, 'opacity') : '0',
      pointerEvents: 'none',
      position: 'absolute',
      zIndex: zIndex === 'auto' ? index(el) : zIndex
    }, getPositionWithMargin(el)) : false;
  }

  function reset(el) {
    css(el.children, {
      height: '',
      left: '',
      opacity: '',
      pointerEvents: '',
      position: '',
      top: '',
      width: ''
    });
    removeClass(el, targetClass);
    css(el, {
      height: '',
      display: ''
    });
  }

  function getPositionWithMargin(el) {
    var ref = offset(el);
    var height = ref.height;
    var width = ref.width;
    var ref$1 = position(el);
    var top = ref$1.top;
    var left = ref$1.left;
    return {
      top: top,
      left: left,
      height: height,
      width: width
    };
  }

  var style;

  function addStyle() {
    if (style) {
      return;
    }

    style = append(document.head, '<style>').sheet;
    style.insertRule("." + targetClass + " > * {\n            margin-top: 0 !important;\n            transform: none !important;\n        }", 0);
  }

  var filter$1 = {
    mixins: [Animate],
    args: 'target',
    props: {
      target: Boolean,
      selActive: Boolean
    },
    data: {
      target: null,
      selActive: false,
      attrItem: 'uk-filter-control',
      cls: 'uk-active',
      animation: 250
    },
    computed: {
      toggles: {
        get: function get(ref, $el) {
          var attrItem = ref.attrItem;
          return $$("[" + this.attrItem + "],[data-" + this.attrItem + "]", $el);
        },
        watch: function watch() {
          var this$1 = this;
          this.updateState();

          if (this.selActive !== false) {
            var actives = $$(this.selActive, this.$el);
            this.toggles.forEach(function (el) {
              return toggleClass(el, this$1.cls, includes(actives, el));
            });
          }
        },
        immediate: true
      },
      children: {
        get: function get(ref, $el) {
          var target = ref.target;
          return $$(target + " > *", $el);
        },
        watch: function watch(list, old) {
          if (!isEqualList(list, old)) {
            this.updateState();
          }
        }
      }
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
      },
      handler: function handler(e) {
        e.preventDefault();
        this.apply(e.current);
      }
    }],
    methods: {
      apply: function apply(el) {
        this.setState(mergeState(el, this.attrItem, this.getState()));
      },
      getState: function getState() {
        var this$1 = this;
        return this.toggles.filter(function (item) {
          return hasClass(item, this$1.cls);
        }).reduce(function (state, el) {
          return mergeState(el, this$1.attrItem, state);
        }, {
          filter: {
            '': ''
          },
          sort: []
        });
      },
      setState: function setState(state, animate) {
        var this$1 = this;
        if (animate === void 0) animate = true;
        state = assign({
          filter: {
            '': ''
          },
          sort: []
        }, state);
        trigger(this.$el, 'beforeFilter', [this, state]);
        this.toggles.forEach(function (el) {
          return toggleClass(el, this$1.cls, !!matchFilter(el, this$1.attrItem, state));
        });
        Promise.all($$(this.target, this.$el).map(function (target) {
          var children$1 = _children(target);

          return animate ? this$1.animate(function () {
            return applyState(state, target, children$1);
          }, target) : applyState(state, target, children$1);
        })).then(function () {
          return trigger(this$1.$el, 'afterFilter', [this$1]);
        });
      },
      updateState: function updateState() {
        var this$1 = this;
        fastdom.write(function () {
          return this$1.setState(this$1.getState(), false);
        });
      }
    }
  };

  function getFilter(el, attr) {
    return parseOptions(data(el, attr), ['filter']);
  }

  function applyState(state, target, children) {
    var selector = getSelector(state);
    children.forEach(function (el) {
      return css(el, 'display', selector && !matches(el, selector) ? 'none' : '');
    });
    var ref = state.sort;
    var sort = ref[0];
    var order = ref[1];

    if (sort) {
      var sorted = sortItems(children, sort, order);

      if (!isEqual(sorted, children)) {
        append(target, sorted);
      }
    }
  }

  function mergeState(el, attr, state) {
    var filterBy = getFilter(el, attr);
    var filter = filterBy.filter;
    var group = filterBy.group;
    var sort = filterBy.sort;
    var order = filterBy.order;
    if (order === void 0) order = 'asc';

    if (filter || isUndefined(sort)) {
      if (group) {
        if (filter) {
          delete state.filter[''];
          state.filter[group] = filter;
        } else {
          delete state.filter[group];

          if (isEmpty(state.filter) || '' in state.filter) {
            state.filter = {
              '': filter || ''
            };
          }
        }
      } else {
        state.filter = {
          '': filter || ''
        };
      }
    }

    if (!isUndefined(sort)) {
      state.sort = [sort, order];
    }

    return state;
  }

  function matchFilter(el, attr, ref) {
    var stateFilter = ref.filter;
    if (stateFilter === void 0) stateFilter = {
      '': ''
    };
    var ref_sort = ref.sort;
    var stateSort = ref_sort[0];
    var stateOrder = ref_sort[1];
    var ref$1 = getFilter(el, attr);
    var filter = ref$1.filter;
    if (filter === void 0) filter = '';
    var group = ref$1.group;
    if (group === void 0) group = '';
    var sort = ref$1.sort;
    var order = ref$1.order;
    if (order === void 0) order = 'asc';
    return isUndefined(sort) ? group in stateFilter && filter === stateFilter[group] || !filter && group && !(group in stateFilter) && !stateFilter[''] : stateSort === sort && stateOrder === order;
  }

  function isEqualList(listA, listB) {
    return listA.length === listB.length && listA.every(function (el) {
      return ~listB.indexOf(el);
    });
  }

  function getSelector(ref) {
    var filter = ref.filter;
    var selector = '';
    each(filter, function (value) {
      return selector += value || '';
    });
    return selector;
  }

  function sortItems(nodes, sort, order) {
    return assign([], nodes).sort(function (a, b) {
      return data(a, sort).localeCompare(data(b, sort), undefined, {
        numeric: true
      }) * (order === 'asc' || -1);
    });
  }

  var Animations = {
    slide: {
      show: function show(dir) {
        return [{
          transform: _translate(dir * -100)
        }, {
          transform: _translate()
        }];
      },
      percent: function percent(current) {
        return translated(current);
      },
      translate: function translate(percent, dir) {
        return [{
          transform: _translate(dir * -100 * percent)
        }, {
          transform: _translate(dir * 100 * (1 - percent))
        }];
      }
    }
  };

  function translated(el) {
    return Math.abs(css(el, 'transform').split(',')[4] / el.offsetWidth) || 0;
  }

  function _translate(value, unit) {
    if (value === void 0) value = 0;
    if (unit === void 0) unit = '%';
    value += value ? unit : '';
    return isIE ? "translateX(" + value + ")" : "translate3d(" + value + ", 0, 0)"; // currently not translate3d in IE, translate3d within translate3d does not work while transitioning
  }

  function scale3d(value) {
    return "scale3d(" + value + ", " + value + ", 1)";
  }

  var Animations$1 = assign({}, Animations, {
    fade: {
      show: function show() {
        return [{
          opacity: 0
        }, {
          opacity: 1
        }];
      },
      percent: function percent(current) {
        return 1 - css(current, 'opacity');
      },
      translate: function translate(percent) {
        return [{
          opacity: 1 - percent
        }, {
          opacity: percent
        }];
      }
    },
    scale: {
      show: function show() {
        return [{
          opacity: 0,
          transform: scale3d(1 - .2)
        }, {
          opacity: 1,
          transform: scale3d(1)
        }];
      },
      percent: function percent(current) {
        return 1 - css(current, 'opacity');
      },
      translate: function translate(percent) {
        return [{
          opacity: 1 - percent,
          transform: scale3d(1 - .2 * percent)
        }, {
          opacity: percent,
          transform: scale3d(1 - .2 + .2 * percent)
        }];
      }
    }
  });

  function Transitioner(prev, next, dir, ref) {
    var animation = ref.animation;
    var easing = ref.easing;
    var _percent = animation.percent;
    var _translate2 = animation.translate;
    var show = animation.show;
    if (show === void 0) show = noop;
    var props = show(dir);
    var deferred = new Deferred();
    return {
      dir: dir,
      show: function show(duration, percent, linear) {
        var this$1 = this;
        if (percent === void 0) percent = 0;
        var timing = linear ? 'linear' : easing;
        duration -= Math.round(duration * clamp(percent, -1, 1));
        this.translate(percent);
        triggerUpdate(next, 'itemin', {
          percent: percent,
          duration: duration,
          timing: timing,
          dir: dir
        });
        triggerUpdate(prev, 'itemout', {
          percent: 1 - percent,
          duration: duration,
          timing: timing,
          dir: dir
        });
        Promise.all([Transition.start(next, props[1], duration, timing), Transition.start(prev, props[0], duration, timing)]).then(function () {
          this$1.reset();
          deferred.resolve();
        }, noop);
        return deferred.promise;
      },
      stop: function stop() {
        return Transition.stop([next, prev]);
      },
      cancel: function cancel() {
        Transition.cancel([next, prev]);
      },
      reset: function reset() {
        for (var prop in props[0]) {
          css([next, prev], prop, '');
        }
      },
      forward: function forward(duration, percent) {
        if (percent === void 0) percent = this.percent();
        Transition.cancel([next, prev]);
        return this.show(duration, percent, true);
      },
      translate: function translate(percent) {
        this.reset();

        var props = _translate2(percent, dir);

        css(next, props[1]);
        css(prev, props[0]);
        triggerUpdate(next, 'itemtranslatein', {
          percent: percent,
          dir: dir
        });
        triggerUpdate(prev, 'itemtranslateout', {
          percent: 1 - percent,
          dir: dir
        });
      },
      percent: function percent() {
        return _percent(prev || next, next, dir);
      },
      getDistance: function getDistance() {
        return prev && prev.offsetWidth;
      }
    };
  }

  function triggerUpdate(el, type, data) {
    trigger(el, createEvent(type, false, false, data));
  }

  var SliderAutoplay = {
    props: {
      autoplay: Boolean,
      autoplayInterval: Number,
      pauseOnHover: Boolean
    },
    data: {
      autoplay: false,
      autoplayInterval: 7000,
      pauseOnHover: true
    },
    connected: function connected() {
      this.autoplay && this.startAutoplay();
    },
    disconnected: function disconnected() {
      this.stopAutoplay();
    },
    update: function update() {
      attr(this.slides, 'tabindex', '-1');
    },
    events: [{
      name: 'visibilitychange',
      el: inBrowser && document,
      filter: function filter() {
        return this.autoplay;
      },
      handler: function handler() {
        if (document.hidden) {
          this.stopAutoplay();
        } else {
          this.startAutoplay();
        }
      }
    }],
    methods: {
      startAutoplay: function startAutoplay() {
        var this$1 = this;
        this.stopAutoplay();
        this.interval = setInterval(function () {
          return (!this$1.draggable || !$(':focus', this$1.$el)) && (!this$1.pauseOnHover || !matches(this$1.$el, ':hover')) && !this$1.stack.length && this$1.show('next');
        }, this.autoplayInterval);
      },
      stopAutoplay: function stopAutoplay() {
        this.interval && clearInterval(this.interval);
      }
    }
  };
  var SliderDrag = {
    props: {
      draggable: Boolean
    },
    data: {
      draggable: true,
      threshold: 10
    },
    created: function created() {
      var this$1 = this;
      ['start', 'move', 'end'].forEach(function (key) {
        var fn = this$1[key];

        this$1[key] = function (e) {
          var pos = getEventPos(e).x * (isRtl ? -1 : 1);
          this$1.prevPos = pos !== this$1.pos ? this$1.pos : this$1.prevPos;
          this$1.pos = pos;
          fn(e);
        };
      });
    },
    events: [{
      name: pointerDown,
      delegate: function delegate() {
        return this.selSlides;
      },
      handler: function handler(e) {
        if (!this.draggable || !isTouch(e) && hasTextNodesOnly(e.target) || closest(e.target, selInput) || e.button > 0 || this.length < 2) {
          return;
        }

        this.start(e);
      }
    }, {
      name: 'dragstart',
      handler: function handler(e) {
        e.preventDefault();
      }
    }],
    methods: {
      start: function start() {
        this.drag = this.pos;

        if (this._transitioner) {
          this.percent = this._transitioner.percent();
          this.drag += this._transitioner.getDistance() * this.percent * this.dir;

          this._transitioner.cancel();

          this._transitioner.translate(this.percent);

          this.dragging = true;
          this.stack = [];
        } else {
          this.prevIndex = this.index;
        } // See above workaround notice


        on(document, pointerMove, this.move, {
          passive: false
        });
        on(document, pointerUp + " " + pointerCancel, this.end, true);
        css(this.list, 'userSelect', 'none');
      },
      move: function move(e) {
        var this$1 = this;
        var distance = this.pos - this.drag;

        if (distance === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(distance) < this.threshold) {
          return;
        }

        css(this.list, 'pointerEvents', 'none');
        e.cancelable && e.preventDefault();
        this.dragging = true;
        this.dir = distance < 0 ? 1 : -1;
        var ref = this;
        var slides = ref.slides;
        var ref$1 = this;
        var prevIndex = ref$1.prevIndex;
        var dis = Math.abs(distance);
        var nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
        var width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;

        while (nextIndex !== prevIndex && dis > width) {
          this.drag -= width * this.dir;
          prevIndex = nextIndex;
          dis -= width;
          nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
          width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;
        }

        this.percent = dis / width;
        var prev = slides[prevIndex];
        var next = slides[nextIndex];
        var changed = this.index !== nextIndex;
        var edge = prevIndex === nextIndex;
        var itemShown;
        [this.index, this.prevIndex].filter(function (i) {
          return !includes([nextIndex, prevIndex], i);
        }).forEach(function (i) {
          trigger(slides[i], 'itemhidden', [this$1]);

          if (edge) {
            itemShown = true;
            this$1.prevIndex = prevIndex;
          }
        });

        if (this.index === prevIndex && this.prevIndex !== prevIndex || itemShown) {
          trigger(slides[this.index], 'itemshown', [this]);
        }

        if (changed) {
          this.prevIndex = prevIndex;
          this.index = nextIndex;
          !edge && trigger(prev, 'beforeitemhide', [this]);
          trigger(next, 'beforeitemshow', [this]);
        }

        this._transitioner = this._translate(Math.abs(this.percent), prev, !edge && next);

        if (changed) {
          !edge && trigger(prev, 'itemhide', [this]);
          trigger(next, 'itemshow', [this]);
        }
      },
      end: function end() {
        off(document, pointerMove, this.move, {
          passive: false
        });
        off(document, pointerUp + " " + pointerCancel, this.end, true);

        if (this.dragging) {
          this.dragging = null;

          if (this.index === this.prevIndex) {
            this.percent = 1 - this.percent;
            this.dir *= -1;

            this._show(false, this.index, true);

            this._transitioner = null;
          } else {
            var dirChange = (isRtl ? this.dir * (isRtl ? 1 : -1) : this.dir) < 0 === this.prevPos > this.pos;
            this.index = dirChange ? this.index : this.prevIndex;

            if (dirChange) {
              this.percent = 1 - this.percent;
            }

            this.show(this.dir > 0 && !dirChange || this.dir < 0 && dirChange ? 'next' : 'previous', true);
          }
        }

        css(this.list, {
          userSelect: '',
          pointerEvents: ''
        });
        this.drag = this.percent = null;
      }
    }
  };

  function hasTextNodesOnly(el) {
    return !el.children.length && el.childNodes.length;
  }

  var SliderNav = {
    data: {
      selNav: false
    },
    computed: {
      nav: function nav(ref, $el) {
        var selNav = ref.selNav;
        return $(selNav, $el);
      },
      selNavItem: function selNavItem(ref) {
        var attrItem = ref.attrItem;
        return "[" + attrItem + "],[data-" + attrItem + "]";
      },
      navItems: function navItems(_, $el) {
        return $$(this.selNavItem, $el);
      }
    },
    update: {
      write: function write() {
        var this$1 = this;

        if (this.nav && this.length !== this.nav.children.length) {
          html(this.nav, this.slides.map(function (_, i) {
            return "<li " + this$1.attrItem + "=\"" + i + "\"><a href></a></li>";
          }).join(''));
        }

        toggleClass($$(this.selNavItem, this.$el).concat(this.nav), 'uk-hidden', !this.maxIndex);
        this.updateNav();
      },
      events: ['resize']
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return this.selNavItem;
      },
      handler: function handler(e) {
        e.preventDefault();
        this.show(data(e.current, this.attrItem));
      }
    }, {
      name: 'itemshow',
      handler: 'updateNav'
    }],
    methods: {
      updateNav: function updateNav() {
        var this$1 = this;
        var i = this.getValidIndex();
        this.navItems.forEach(function (el) {
          var cmd = data(el, this$1.attrItem);
          toggleClass(el, this$1.clsActive, toNumber(cmd) === i);
          toggleClass(el, 'uk-invisible', this$1.finite && (cmd === 'previous' && i === 0 || cmd === 'next' && i >= this$1.maxIndex));
        });
      }
    }
  };
  var Slider = {
    mixins: [SliderAutoplay, SliderDrag, SliderNav],
    props: {
      clsActivated: Boolean,
      easing: String,
      index: Number,
      finite: Boolean,
      velocity: Number,
      selSlides: String
    },
    data: function data() {
      return {
        easing: 'ease',
        finite: false,
        velocity: 1,
        index: 0,
        prevIndex: -1,
        stack: [],
        percent: 0,
        clsActive: 'uk-active',
        clsActivated: false,
        Transitioner: false,
        transitionOptions: {}
      };
    },
    connected: function connected() {
      this.prevIndex = -1;
      this.index = this.getValidIndex(this.index);
      this.stack = [];
    },
    disconnected: function disconnected() {
      removeClass(this.slides, this.clsActive);
    },
    computed: {
      duration: function duration(ref, $el) {
        var velocity = ref.velocity;
        return speedUp($el.offsetWidth / velocity);
      },
      list: function list(ref, $el) {
        var selList = ref.selList;
        return $(selList, $el);
      },
      maxIndex: function maxIndex() {
        return this.length - 1;
      },
      selSlides: function selSlides(ref) {
        var selList = ref.selList;
        var selSlides = ref.selSlides;
        return selList + " " + (selSlides || '> *');
      },
      slides: {
        get: function get() {
          return $$(this.selSlides, this.$el);
        },
        watch: function watch() {
          this.$reset();
        }
      },
      length: function length() {
        return this.slides.length;
      }
    },
    events: {
      itemshown: function itemshown() {
        this.$update(this.list);
      }
    },
    methods: {
      show: function show(index, force) {
        var this$1 = this;
        if (force === void 0) force = false;

        if (this.dragging || !this.length) {
          return;
        }

        var ref = this;
        var stack = ref.stack;
        var queueIndex = force ? 0 : stack.length;

        var reset = function reset() {
          stack.splice(queueIndex, 1);

          if (stack.length) {
            this$1.show(stack.shift(), true);
          }
        };

        stack[force ? 'unshift' : 'push'](index);

        if (!force && stack.length > 1) {
          if (stack.length === 2) {
            this._transitioner.forward(Math.min(this.duration, 200));
          }

          return;
        }

        var prevIndex = this.getIndex(this.index);
        var prev = hasClass(this.slides, this.clsActive) && this.slides[prevIndex];
        var nextIndex = this.getIndex(index, this.index);
        var next = this.slides[nextIndex];

        if (prev === next) {
          reset();
          return;
        }

        this.dir = getDirection(index, prevIndex);
        this.prevIndex = prevIndex;
        this.index = nextIndex;

        if (prev && !trigger(prev, 'beforeitemhide', [this]) || !trigger(next, 'beforeitemshow', [this, prev])) {
          this.index = this.prevIndex;
          reset();
          return;
        }

        var promise = this._show(prev, next, force).then(function () {
          prev && trigger(prev, 'itemhidden', [this$1]);
          trigger(next, 'itemshown', [this$1]);
          return new Promise(function (resolve) {
            fastdom.write(function () {
              stack.shift();

              if (stack.length) {
                this$1.show(stack.shift(), true);
              } else {
                this$1._transitioner = null;
              }

              resolve();
            });
          });
        });

        prev && trigger(prev, 'itemhide', [this]);
        trigger(next, 'itemshow', [this]);
        return promise;
      },
      getIndex: function getIndex(index, prev) {
        if (index === void 0) index = this.index;
        if (prev === void 0) prev = this.index;
        return clamp(_getIndex(index, this.slides, prev, this.finite), 0, this.maxIndex);
      },
      getValidIndex: function getValidIndex(index, prevIndex) {
        if (index === void 0) index = this.index;
        if (prevIndex === void 0) prevIndex = this.prevIndex;
        return this.getIndex(index, prevIndex);
      },
      _show: function _show(prev, next, force) {
        this._transitioner = this._getTransitioner(prev, next, this.dir, assign({
          easing: force ? next.offsetWidth < 600 ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          /* easeOutQuad */
          : 'cubic-bezier(0.165, 0.84, 0.44, 1)'
          /* easeOutQuart */
          : this.easing
        }, this.transitionOptions));

        if (!force && !prev) {
          this._translate(1);

          return Promise.resolve();
        }

        var ref = this.stack;
        var length = ref.length;
        return this._transitioner[length > 1 ? 'forward' : 'show'](length > 1 ? Math.min(this.duration, 75 + 75 / (length - 1)) : this.duration, this.percent);
      },
      _getDistance: function _getDistance(prev, next) {
        return this._getTransitioner(prev, prev !== next && next).getDistance();
      },
      _translate: function _translate(percent, prev, next) {
        if (prev === void 0) prev = this.prevIndex;
        if (next === void 0) next = this.index;

        var transitioner = this._getTransitioner(prev !== next ? prev : false, next);

        transitioner.translate(percent);
        return transitioner;
      },
      _getTransitioner: function _getTransitioner(prev, next, dir, options) {
        if (prev === void 0) prev = this.prevIndex;
        if (next === void 0) next = this.index;
        if (dir === void 0) dir = this.dir || 1;
        if (options === void 0) options = this.transitionOptions;
        return new this.Transitioner(isNumber(prev) ? this.slides[prev] : prev, isNumber(next) ? this.slides[next] : next, dir * (isRtl ? -1 : 1), options);
      }
    }
  };

  function getDirection(index, prevIndex) {
    return index === 'next' ? 1 : index === 'previous' ? -1 : index < prevIndex ? -1 : 1;
  }

  function speedUp(x) {
    return .5 * x + 300; // parabola through (400,500; 600,600; 1800,1200)
  }

  var Slideshow = {
    mixins: [Slider],
    props: {
      animation: String
    },
    data: {
      animation: 'slide',
      clsActivated: 'uk-transition-active',
      Animations: Animations,
      Transitioner: Transitioner
    },
    computed: {
      animation: function animation(ref) {
        var animation = ref.animation;
        var Animations = ref.Animations;
        return assign(Animations[animation] || Animations.slide, {
          name: animation
        });
      },
      transitionOptions: function transitionOptions() {
        return {
          animation: this.animation
        };
      }
    },
    events: {
      'itemshow itemhide itemshown itemhidden': function itemshowItemhideItemshownItemhidden(ref) {
        var target = ref.target;
        this.$update(target);
      },
      beforeitemshow: function beforeitemshow(ref) {
        var target = ref.target;
        addClass(target, this.clsActive);
      },
      itemshown: function itemshown(ref) {
        var target = ref.target;
        addClass(target, this.clsActivated);
      },
      itemhidden: function itemhidden(ref) {
        var target = ref.target;
        removeClass(target, this.clsActive, this.clsActivated);
      }
    }
  };
  var LightboxPanel = {
    mixins: [Container, Modal, Togglable, Slideshow],
    functional: true,
    props: {
      delayControls: Number,
      preload: Number,
      videoAutoplay: Boolean,
      template: String
    },
    data: function data() {
      return {
        preload: 1,
        videoAutoplay: false,
        delayControls: 3000,
        items: [],
        cls: 'uk-open',
        clsPage: 'uk-lightbox-page',
        selList: '.uk-lightbox-items',
        attrItem: 'uk-lightbox-item',
        selClose: '.uk-close-large',
        selCaption: '.uk-lightbox-caption',
        pauseOnHover: false,
        velocity: 2,
        Animations: Animations$1,
        template: "<div class=\"uk-lightbox uk-overflow-hidden\"> <ul class=\"uk-lightbox-items\"></ul> <div class=\"uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque\"> <button class=\"uk-lightbox-toolbar-icon uk-close-large\" type=\"button\" uk-close></button> </div> <a class=\"uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade\" href uk-slidenav-previous uk-lightbox-item=\"previous\"></a> <a class=\"uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade\" href uk-slidenav-next uk-lightbox-item=\"next\"></a> <div class=\"uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque\"></div> </div>"
      };
    },
    created: function created() {
      var $el = $(this.template);
      var list = $(this.selList, $el);
      this.items.forEach(function () {
        return append(list, '<li>');
      });
      this.$mount(append(this.container, $el));
    },
    computed: {
      caption: function caption(ref, $el) {
        var selCaption = ref.selCaption;
        return $('.uk-lightbox-caption', $el);
      }
    },
    events: [{
      name: pointerMove + " " + pointerDown + " keydown",
      handler: 'showControls'
    }, {
      name: 'click',
      self: true,
      delegate: function delegate() {
        return this.selSlides;
      },
      handler: function handler(e) {
        if (e.defaultPrevented) {
          return;
        }

        this.hide();
      }
    }, {
      name: 'shown',
      self: true,
      handler: function handler() {
        this.showControls();
      }
    }, {
      name: 'hide',
      self: true,
      handler: function handler() {
        this.hideControls();
        removeClass(this.slides, this.clsActive);
        Transition.stop(this.slides);
      }
    }, {
      name: 'hidden',
      self: true,
      handler: function handler() {
        this.$destroy(true);
      }
    }, {
      name: 'keyup',
      el: inBrowser && document,
      handler: function handler(e) {
        if (!this.isToggled(this.$el) || !this.draggable) {
          return;
        }

        switch (e.keyCode) {
          case 37:
            this.show('previous');
            break;

          case 39:
            this.show('next');
            break;
        }
      }
    }, {
      name: 'beforeitemshow',
      handler: function handler(e) {
        if (this.isToggled()) {
          return;
        }

        this.draggable = false;
        e.preventDefault();
        this.toggleElement(this.$el, true, false);
        this.animation = Animations$1['scale'];
        removeClass(e.target, this.clsActive);
        this.stack.splice(1, 0, this.index);
      }
    }, {
      name: 'itemshow',
      handler: function handler() {
        html(this.caption, this.getItem().caption || '');

        for (var j = -this.preload; j <= this.preload; j++) {
          this.loadItem(this.index + j);
        }
      }
    }, {
      name: 'itemshown',
      handler: function handler() {
        this.draggable = this.$props.draggable;
      }
    }, {
      name: 'itemload',
      handler: function handler(_, item) {
        var this$1 = this;
        var src = item.source;
        var type = item.type;
        var alt = item.alt;
        if (alt === void 0) alt = '';
        var poster = item.poster;
        var attrs = item.attrs;
        if (attrs === void 0) attrs = {};
        this.setItem(item, '<span uk-spinner></span>');

        if (!src) {
          return;
        }

        var matches;
        var iframeAttrs = {
          frameborder: '0',
          allow: 'autoplay',
          allowfullscreen: '',
          style: 'max-width: 100%; box-sizing: border-box;',
          'uk-responsive': '',
          'uk-video': "" + this.videoAutoplay
        }; // Image

        if (type === 'image' || src.match(/\.(jpe?g|png|gif|svg|webp)($|\?)/i)) {
          getImage(src, attrs.srcset, attrs.size).then(function (ref) {
            var width = ref.width;
            var height = ref.height;
            return this$1.setItem(item, createEl('img', assign({
              src: src,
              width: width,
              height: height,
              alt: alt
            }, attrs)));
          }, function () {
            return this$1.setError(item);
          }); // Video
        } else if (type === 'video' || src.match(/\.(mp4|webm|ogv)($|\?)/i)) {
          var video = createEl('video', assign({
            src: src,
            poster: poster,
            controls: '',
            playsinline: '',
            'uk-video': "" + this.videoAutoplay
          }, attrs));
          on(video, 'loadedmetadata', function () {
            attr(video, {
              width: video.videoWidth,
              height: video.videoHeight
            });
            this$1.setItem(item, video);
          });
          on(video, 'error', function () {
            return this$1.setError(item);
          }); // Iframe
        } else if (type === 'iframe' || src.match(/\.(html|php)($|\?)/i)) {
          this.setItem(item, createEl('iframe', assign({
            src: src,
            frameborder: '0',
            allowfullscreen: '',
            "class": 'uk-lightbox-iframe'
          }, attrs))); // YouTube
        } else if (matches = src.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/)) {
          this.setItem(item, createEl('iframe', assign({
            src: "https://www.youtube" + (matches[1] || '') + ".com/embed/" + matches[2] + (matches[3] ? "?" + matches[3] : ''),
            width: 1920,
            height: 1080
          }, iframeAttrs, attrs))); // Vimeo
        } else if (matches = src.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) {
          ajax("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(src), {
            responseType: 'json',
            withCredentials: false
          }).then(function (ref) {
            var ref_response = ref.response;
            var height = ref_response.height;
            var width = ref_response.width;
            return this$1.setItem(item, createEl('iframe', assign({
              src: "https://player.vimeo.com/video/" + matches[1] + (matches[2] ? "?" + matches[2] : ''),
              width: width,
              height: height
            }, iframeAttrs, attrs)));
          }, function () {
            return this$1.setError(item);
          });
        }
      }
    }],
    methods: {
      loadItem: function loadItem(index) {
        if (index === void 0) index = this.index;
        var item = this.getItem(index);

        if (!this.getSlide(item).childElementCount) {
          trigger(this.$el, 'itemload', [item]);
        }
      },
      getItem: function getItem(index) {
        if (index === void 0) index = this.index;
        return this.items[_getIndex(index, this.slides)];
      },
      setItem: function setItem(item, content) {
        trigger(this.$el, 'itemloaded', [this, html(this.getSlide(item), content)]);
      },
      getSlide: function getSlide(item) {
        return this.slides[this.items.indexOf(item)];
      },
      setError: function setError(item) {
        this.setItem(item, '<span uk-icon="icon: bolt; ratio: 2"></span>');
      },
      showControls: function showControls() {
        clearTimeout(this.controlsTimer);
        this.controlsTimer = setTimeout(this.hideControls, this.delayControls);
        addClass(this.$el, 'uk-active', 'uk-transition-active');
      },
      hideControls: function hideControls() {
        removeClass(this.$el, 'uk-active', 'uk-transition-active');
      }
    }
  };

  function createEl(tag, attrs) {
    var el = fragment("<" + tag + ">");
    attr(el, attrs);
    return el;
  }

  var lightbox = {
    install: install$2,
    props: {
      toggle: String
    },
    data: {
      toggle: 'a'
    },
    computed: {
      toggles: {
        get: function get(ref, $el) {
          var toggle = ref.toggle;
          return $$(toggle, $el);
        },
        watch: function watch() {
          this.hide();
        }
      }
    },
    disconnected: function disconnected() {
      this.hide();
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return this.toggle + ":not(.uk-disabled)";
      },
      handler: function handler(e) {
        e.preventDefault();
        this.show(e.current);
      }
    }],
    methods: {
      show: function show(index) {
        var this$1 = this;
        var items = uniqueBy(this.toggles.map(toItem), 'source');

        if (isElement(index)) {
          var ref = toItem(index);
          var source = ref.source;
          index = findIndex(items, function (ref) {
            var src = ref.source;
            return source === src;
          });
        }

        this.panel = this.panel || this.$create('lightboxPanel', assign({}, this.$props, {
          items: items
        }));
        on(this.panel.$el, 'hidden', function () {
          return this$1.panel = false;
        });
        return this.panel.show(index);
      },
      hide: function hide() {
        return this.panel && this.panel.hide();
      }
    }
  };

  function install$2(UIkit, Lightbox) {
    if (!UIkit.lightboxPanel) {
      UIkit.component('lightboxPanel', LightboxPanel);
    }

    assign(Lightbox.props, UIkit.component('lightboxPanel').options.props);
  }

  function toItem(el) {
    var item = {};
    ['href', 'caption', 'type', 'poster', 'alt', 'attrs'].forEach(function (attr) {
      item[attr === 'href' ? 'source' : attr] = data(el, attr);
    });
    item.attrs = parseOptions(item.attrs);
    return item;
  }

  var obj;
  var notification = {
    functional: true,
    args: ['message', 'status'],
    data: {
      message: '',
      status: '',
      timeout: 5000,
      group: null,
      pos: 'top-center',
      clsContainer: 'uk-notification',
      clsClose: 'uk-notification-close',
      clsMsg: 'uk-notification-message'
    },
    install: install$3,
    computed: {
      marginProp: function marginProp(ref) {
        var pos = ref.pos;
        return "margin" + (startsWith(pos, 'top') ? 'Top' : 'Bottom');
      },
      startProps: function startProps() {
        var obj;
        return obj = {
          opacity: 0
        }, obj[this.marginProp] = -this.$el.offsetHeight, obj;
      }
    },
    created: function created() {
      var container = $("." + this.clsContainer + "-" + this.pos, this.$container) || append(this.$container, "<div class=\"" + this.clsContainer + " " + this.clsContainer + "-" + this.pos + "\" style=\"display: block\"></div>");
      this.$mount(append(container, "<div class=\"" + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : '') + "\"> <a href class=\"" + this.clsClose + "\" data-uk-close></a> <div>" + this.message + "</div> </div>"));
    },
    connected: function connected() {
      var this$1 = this;
      var obj;
      var margin = toFloat(css(this.$el, this.marginProp));
      Transition.start(css(this.$el, this.startProps), (obj = {
        opacity: 1
      }, obj[this.marginProp] = margin, obj)).then(function () {
        if (this$1.timeout) {
          this$1.timer = setTimeout(this$1.close, this$1.timeout);
        }
      });
    },
    events: (obj = {
      click: function click(e) {
        if (closest(e.target, 'a[href="#"],a[href=""]')) {
          e.preventDefault();
        }

        this.close();
      }
    }, obj[pointerEnter] = function () {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    }, obj[pointerLeave] = function () {
      if (this.timeout) {
        this.timer = setTimeout(this.close, this.timeout);
      }
    }, obj),
    methods: {
      close: function close(immediate) {
        var this$1 = this;

        var removeFn = function removeFn() {
          var container = this$1.$el.parentNode;
          trigger(this$1.$el, 'close', [this$1]);

          _remove(this$1.$el);

          if (container && !container.hasChildNodes()) {
            _remove(container);
          }
        };

        if (this.timer) {
          clearTimeout(this.timer);
        }

        if (immediate) {
          removeFn();
        } else {
          Transition.start(this.$el, this.startProps).then(removeFn);
        }
      }
    }
  };

  function install$3(UIkit) {
    UIkit.notification.closeAll = function (group, immediate) {
      apply(document.body, function (el) {
        var notification = UIkit.getComponent(el, 'notification');

        if (notification && (!group || group === notification.group)) {
          notification.close(immediate);
        }
      });
    };
  }

  var _props = ['x', 'y', 'bgx', 'bgy', 'rotate', 'scale', 'color', 'backgroundColor', 'borderColor', 'opacity', 'blur', 'hue', 'grayscale', 'invert', 'saturate', 'sepia', 'fopacity', 'stroke'];
  var Parallax = {
    mixins: [Media],
    props: _props.reduce(function (props, prop) {
      props[prop] = 'list';
      return props;
    }, {}),
    data: _props.reduce(function (data, prop) {
      data[prop] = undefined;
      return data;
    }, {}),
    computed: {
      props: function props(properties, $el) {
        var this$1 = this;
        return _props.reduce(function (props, prop) {
          if (isUndefined(properties[prop])) {
            return props;
          }

          var isColor = prop.match(/color/i);
          var isCssProp = isColor || prop === 'opacity';
          var pos, bgPos, diff;
          var steps = properties[prop].slice(0);

          if (isCssProp) {
            css($el, prop, '');
          }

          if (steps.length < 2) {
            steps.unshift((prop === 'scale' ? 1 : isCssProp ? css($el, prop) : 0) || 0);
          }

          var unit = getUnit(steps);

          if (isColor) {
            var ref = $el.style;
            var color = ref.color;
            steps = steps.map(function (step) {
              return parseColor($el, step);
            });
            $el.style.color = color;
          } else if (startsWith(prop, 'bg')) {
            var attr = prop === 'bgy' ? 'height' : 'width';
            steps = steps.map(function (step) {
              return toPx(step, attr, this$1.$el);
            });
            css($el, "background-position-" + prop[2], '');
            bgPos = css($el, 'backgroundPosition').split(' ')[prop[2] === 'x' ? 0 : 1]; // IE 11 can't read background-position-[x|y]

            if (this$1.covers) {
              var min = Math.min.apply(Math, steps);
              var max = Math.max.apply(Math, steps);
              var down = steps.indexOf(min) < steps.indexOf(max);
              diff = max - min;
              steps = steps.map(function (step) {
                return step - (down ? min : max);
              });
              pos = (down ? -diff : 0) + "px";
            } else {
              pos = bgPos;
            }
          } else {
            steps = steps.map(toFloat);
          }

          if (prop === 'stroke') {
            if (!steps.some(function (step) {
              return step;
            })) {
              return props;
            }

            var length = getMaxPathLength(this$1.$el);
            css($el, 'strokeDasharray', length);

            if (unit === '%') {
              steps = steps.map(function (step) {
                return step * length / 100;
              });
            }

            steps = steps.reverse();
            prop = 'strokeDashoffset';
          }

          props[prop] = {
            steps: steps,
            unit: unit,
            pos: pos,
            bgPos: bgPos,
            diff: diff
          };
          return props;
        }, {});
      },
      bgProps: function bgProps() {
        var this$1 = this;
        return ['bgx', 'bgy'].filter(function (bg) {
          return bg in this$1.props;
        });
      },
      covers: function covers(_, $el) {
        return _covers($el);
      }
    },
    disconnected: function disconnected() {
      delete this._image;
    },
    update: {
      read: function read(data) {
        var this$1 = this;
        data.active = this.matchMedia;

        if (!data.active) {
          return;
        }

        if (!data.image && this.covers && this.bgProps.length) {
          var src = css(this.$el, 'backgroundImage').replace(/^none|url\(["']?(.+?)["']?\)$/, '$1');

          if (src) {
            var img = new Image();
            img.src = src;
            data.image = img;

            if (!img.naturalWidth) {
              img.onload = function () {
                return this$1.$update();
              };
            }
          }
        }

        var image = data.image;

        if (!image || !image.naturalWidth) {
          return;
        }

        var dimEl = {
          width: this.$el.offsetWidth,
          height: this.$el.offsetHeight
        };
        var dimImage = {
          width: image.naturalWidth,
          height: image.naturalHeight
        };
        var dim = Dimensions.cover(dimImage, dimEl);
        this.bgProps.forEach(function (prop) {
          var ref = this$1.props[prop];
          var diff = ref.diff;
          var bgPos = ref.bgPos;
          var steps = ref.steps;
          var attr = prop === 'bgy' ? 'height' : 'width';
          var span = dim[attr] - dimEl[attr];

          if (span < diff) {
            dimEl[attr] = dim[attr] + diff - span;
          } else if (span > diff) {
            var posPercentage = dimEl[attr] / toPx(bgPos, attr, this$1.$el);

            if (posPercentage) {
              this$1.props[prop].steps = steps.map(function (step) {
                return step - (span - diff) / posPercentage;
              });
            }
          }

          dim = Dimensions.cover(dimImage, dimEl);
        });
        data.dim = dim;
      },
      write: function write(ref) {
        var dim = ref.dim;
        var active = ref.active;

        if (!active) {
          css(this.$el, {
            backgroundSize: '',
            backgroundRepeat: ''
          });
          return;
        }

        dim && css(this.$el, {
          backgroundSize: dim.width + "px " + dim.height + "px",
          backgroundRepeat: 'no-repeat'
        });
      },
      events: ['resize']
    },
    methods: {
      reset: function reset() {
        var this$1 = this;
        each(this.getCss(0), function (_, prop) {
          return css(this$1.$el, prop, '');
        });
      },
      getCss: function getCss(percent) {
        var ref = this;
        var props = ref.props;
        return Object.keys(props).reduce(function (css, prop) {
          var ref = props[prop];
          var steps = ref.steps;
          var unit = ref.unit;
          var pos = ref.pos;
          var value = getValue(steps, percent);

          switch (prop) {
            // transforms
            case 'x':
            case 'y':
              {
                unit = unit || 'px';
                css.transform += " translate" + ucfirst(prop) + "(" + toFloat(value).toFixed(unit === 'px' ? 0 : 2) + unit + ")";
                break;
              }

            case 'rotate':
              unit = unit || 'deg';
              css.transform += " rotate(" + (value + unit) + ")";
              break;

            case 'scale':
              css.transform += " scale(" + value + ")";
              break;
            // bg image

            case 'bgy':
            case 'bgx':
              css["background-position-" + prop[2]] = "calc(" + pos + " + " + value + "px)";
              break;
            // color

            case 'color':
            case 'backgroundColor':
            case 'borderColor':
              {
                var ref$1 = getStep(steps, percent);
                var start = ref$1[0];
                var end = ref$1[1];
                var p = ref$1[2];
                css[prop] = "rgba(" + start.map(function (value, i) {
                  value = value + p * (end[i] - value);
                  return i === 3 ? toFloat(value) : parseInt(value, 10);
                }).join(',') + ")";
                break;
              }
            // CSS Filter

            case 'blur':
              unit = unit || 'px';
              css.filter += " blur(" + (value + unit) + ")";
              break;

            case 'hue':
              unit = unit || 'deg';
              css.filter += " hue-rotate(" + (value + unit) + ")";
              break;

            case 'fopacity':
              unit = unit || '%';
              css.filter += " opacity(" + (value + unit) + ")";
              break;

            case 'grayscale':
            case 'invert':
            case 'saturate':
            case 'sepia':
              unit = unit || '%';
              css.filter += " " + prop + "(" + (value + unit) + ")";
              break;

            default:
              css[prop] = value;
          }

          return css;
        }, {
          transform: '',
          filter: ''
        });
      }
    }
  };

  function parseColor(el, color) {
    return css(css(el, 'color', color), 'color').split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(toFloat);
  }

  function getStep(steps, percent) {
    var count = steps.length - 1;
    var index = Math.min(Math.floor(count * percent), count - 1);
    var step = steps.slice(index, index + 2);
    step.push(percent === 1 ? 1 : percent % (1 / count) * count);
    return step;
  }

  function getValue(steps, percent, digits) {
    if (digits === void 0) digits = 2;
    var ref = getStep(steps, percent);
    var start = ref[0];
    var end = ref[1];
    var p = ref[2];
    return (isNumber(start) ? start + Math.abs(start - end) * p * (start < end ? 1 : -1) : +end).toFixed(digits);
  }

  function getUnit(steps) {
    return steps.reduce(function (unit, step) {
      return isString(step) && step.replace(/-|\d/g, '').trim() || unit;
    }, '');
  }

  function _covers(el) {
    var ref = el.style;
    var backgroundSize = ref.backgroundSize;
    var covers = css(css(el, 'backgroundSize', ''), 'backgroundSize') === 'cover';
    el.style.backgroundSize = backgroundSize;
    return covers;
  }

  var parallax = {
    mixins: [Parallax],
    props: {
      target: String,
      viewport: Number,
      easing: Number
    },
    data: {
      target: false,
      viewport: 1,
      easing: 1
    },
    computed: {
      target: function target(ref, $el) {
        var target = ref.target;
        return getOffsetElement(target && query(target, $el) || $el);
      }
    },
    update: {
      read: function read(ref, type) {
        var percent = ref.percent;
        var active = ref.active;

        if (type !== 'scroll') {
          percent = false;
        }

        if (!active) {
          return;
        }

        var prev = percent;
        percent = ease(scrolledOver(this.target) / (this.viewport || 1), this.easing);
        return {
          percent: percent,
          style: prev !== percent ? this.getCss(percent) : false
        };
      },
      write: function write(ref) {
        var style = ref.style;
        var active = ref.active;

        if (!active) {
          this.reset();
          return;
        }

        style && css(this.$el, style);
      },
      events: ['scroll', 'resize']
    }
  };

  function ease(percent, easing) {
    return clamp(percent * (1 - (easing - easing * percent)));
  } // SVG elements do not inherit from HTMLElement


  function getOffsetElement(el) {
    return el ? 'offsetTop' in el ? el : getOffsetElement(el.parentNode) : document.body;
  }

  var SliderReactive = {
    update: {
      write: function write() {
        if (this.stack.length || this.dragging) {
          return;
        }

        var index = this.getValidIndex(this.index);

        if (!~this.prevIndex || this.index !== index) {
          this.show(index);
        }
      },
      events: ['resize']
    }
  };

  function Transitioner$1(prev, next, dir, ref) {
    var center = ref.center;
    var easing = ref.easing;
    var list = ref.list;
    var deferred = new Deferred();
    var from = prev ? getLeft(prev, list, center) : getLeft(next, list, center) + offset(next).width * dir;
    var to = next ? getLeft(next, list, center) : from + offset(prev).width * dir * (isRtl ? -1 : 1);
    return {
      dir: dir,
      show: function show(duration, percent, linear) {
        if (percent === void 0) percent = 0;
        var timing = linear ? 'linear' : easing;
        duration -= Math.round(duration * clamp(percent, -1, 1));
        this.translate(percent);
        prev && this.updateTranslates();
        percent = prev ? percent : clamp(percent, 0, 1);
        triggerUpdate$1(this.getItemIn(), 'itemin', {
          percent: percent,
          duration: duration,
          timing: timing,
          dir: dir
        });
        prev && triggerUpdate$1(this.getItemIn(true), 'itemout', {
          percent: 1 - percent,
          duration: duration,
          timing: timing,
          dir: dir
        }); // Workaround for a bug in iOS Safari 14.0 which does not let you transition to the same value twice

        var randomOffset = index(next) / 10000;
        Transition.start(list, {
          transform: _translate((-to + randomOffset) * (isRtl ? -1 : 1), 'px')
        }, duration, timing).then(deferred.resolve, noop);
        return deferred.promise;
      },
      stop: function stop() {
        return Transition.stop(list);
      },
      cancel: function cancel() {
        Transition.cancel(list);
      },
      reset: function reset() {
        css(list, 'transform', '');
      },
      forward: function forward(duration, percent) {
        if (percent === void 0) percent = this.percent();
        Transition.cancel(list);
        return this.show(duration, percent, true);
      },
      translate: function translate(percent) {
        var distance = this.getDistance() * dir * (isRtl ? -1 : 1);
        css(list, 'transform', _translate(clamp(-to + (distance - distance * percent), -getWidth(list), offset(list).width) * (isRtl ? -1 : 1), 'px'));
        this.updateTranslates();

        if (prev) {
          percent = clamp(percent, -1, 1);
          triggerUpdate$1(this.getItemIn(), 'itemtranslatein', {
            percent: percent,
            dir: dir
          });
          triggerUpdate$1(this.getItemIn(true), 'itemtranslateout', {
            percent: 1 - percent,
            dir: dir
          });
        }
      },
      percent: function percent() {
        return Math.abs((css(list, 'transform').split(',')[4] * (isRtl ? -1 : 1) + from) / (to - from));
      },
      getDistance: function getDistance() {
        return Math.abs(to - from);
      },
      getItemIn: function getItemIn(out) {
        if (out === void 0) out = false;
        var actives = this.getActives();
        var all = sortBy(slides(list), 'offsetLeft');
        var i = index(all, actives[dir * (out ? -1 : 1) > 0 ? actives.length - 1 : 0]);
        return ~i && all[i + (prev && !out ? dir : 0)];
      },
      getActives: function getActives() {
        var left = getLeft(prev || next, list, center);
        return sortBy(slides(list).filter(function (slide) {
          var slideLeft = getElLeft(slide, list);
          return slideLeft >= left && slideLeft + offset(slide).width <= offset(list).width + left;
        }), 'offsetLeft');
      },
      updateTranslates: function updateTranslates() {
        var actives = this.getActives();
        slides(list).forEach(function (slide) {
          var isActive = includes(actives, slide);
          triggerUpdate$1(slide, "itemtranslate" + (isActive ? 'in' : 'out'), {
            percent: isActive ? 1 : 0,
            dir: slide.offsetLeft <= next.offsetLeft ? 1 : -1
          });
        });
      }
    };
  }

  function getLeft(el, list, center) {
    var left = getElLeft(el, list);
    return center ? left - centerEl(el, list) : Math.min(left, getMax(list));
  }

  function getMax(list) {
    return Math.max(0, getWidth(list) - offset(list).width);
  }

  function getWidth(list) {
    return slides(list).reduce(function (right, el) {
      return offset(el).width + right;
    }, 0);
  }

  function getMaxWidth(list) {
    return slides(list).reduce(function (right, el) {
      return Math.max(right, offset(el).width);
    }, 0);
  }

  function centerEl(el, list) {
    return offset(list).width / 2 - offset(el).width / 2;
  }

  function getElLeft(el, list) {
    return (position(el).left + (isRtl ? offset(el).width - offset(list).width : 0)) * (isRtl ? -1 : 1);
  }

  function triggerUpdate$1(el, type, data) {
    trigger(el, createEvent(type, false, false, data));
  }

  function slides(list) {
    return _children(list);
  }

  var slider = {
    mixins: [Class, Slider, SliderReactive],
    props: {
      center: Boolean,
      sets: Boolean
    },
    data: {
      center: false,
      sets: false,
      attrItem: 'uk-slider-item',
      selList: '.uk-slider-items',
      selNav: '.uk-slider-nav',
      clsContainer: 'uk-slider-container',
      Transitioner: Transitioner$1
    },
    computed: {
      avgWidth: function avgWidth() {
        return getWidth(this.list) / this.length;
      },
      finite: function finite(ref) {
        var finite = ref.finite;
        return finite || Math.ceil(getWidth(this.list)) < offset(this.list).width + getMaxWidth(this.list) + this.center;
      },
      maxIndex: function maxIndex() {
        if (!this.finite || this.center && !this.sets) {
          return this.length - 1;
        }

        if (this.center) {
          return last(this.sets);
        }

        css(this.slides, 'order', '');
        var max = getMax(this.list);
        var i = this.length;

        while (i--) {
          if (getElLeft(this.list.children[i], this.list) < max) {
            return Math.min(i + 1, this.length - 1);
          }
        }

        return 0;
      },
      sets: function sets(ref) {
        var this$1 = this;
        var sets = ref.sets;
        var width = offset(this.list).width / (this.center ? 2 : 1);
        var left = 0;
        var leftCenter = width;
        var slideLeft = 0;
        sets = sets && this.slides.reduce(function (sets, slide, i) {
          var ref = offset(slide);
          var slideWidth = ref.width;
          var slideRight = slideLeft + slideWidth;

          if (slideRight > left) {
            if (!this$1.center && i > this$1.maxIndex) {
              i = this$1.maxIndex;
            }

            if (!includes(sets, i)) {
              var cmp = this$1.slides[i + 1];

              if (this$1.center && cmp && slideWidth < leftCenter - offset(cmp).width / 2) {
                leftCenter -= slideWidth;
              } else {
                leftCenter = width;
                sets.push(i);
                left = slideLeft + width + (this$1.center ? slideWidth / 2 : 0);
              }
            }
          }

          slideLeft += slideWidth;
          return sets;
        }, []);
        return !isEmpty(sets) && sets;
      },
      transitionOptions: function transitionOptions() {
        return {
          center: this.center,
          list: this.list
        };
      }
    },
    connected: function connected() {
      toggleClass(this.$el, this.clsContainer, !$("." + this.clsContainer, this.$el));
    },
    update: {
      write: function write() {
        var this$1 = this;
        $$("[" + this.attrItem + "],[data-" + this.attrItem + "]", this.$el).forEach(function (el) {
          var index = data(el, this$1.attrItem);
          this$1.maxIndex && toggleClass(el, 'uk-hidden', isNumeric(index) && (this$1.sets && !includes(this$1.sets, toFloat(index)) || index > this$1.maxIndex));
        });

        if (this.length && !this.dragging && !this.stack.length) {
          this.reorder();

          this._translate(1);
        }

        var actives = this._getTransitioner(this.index).getActives();

        this.slides.forEach(function (slide) {
          return toggleClass(slide, this$1.clsActive, includes(actives, slide));
        });
        (!this.sets || includes(this.sets, toFloat(this.index))) && this.slides.forEach(function (slide) {
          return toggleClass(slide, this$1.clsActivated, includes(actives, slide));
        });
      },
      events: ['resize']
    },
    events: {
      beforeitemshow: function beforeitemshow(e) {
        if (!this.dragging && this.sets && this.stack.length < 2 && !includes(this.sets, this.index)) {
          this.index = this.getValidIndex();
        }

        var diff = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));

        if (!this.dragging && diff > 1) {
          for (var i = 0; i < diff; i++) {
            this.stack.splice(1, 0, this.dir > 0 ? 'next' : 'previous');
          }

          e.preventDefault();
          return;
        }

        this.duration = speedUp(this.avgWidth / this.velocity) * (offset(this.dir < 0 || !this.slides[this.prevIndex] ? this.slides[this.index] : this.slides[this.prevIndex]).width / this.avgWidth);
        this.reorder();
      },
      itemshow: function itemshow() {
        ~this.prevIndex && addClass(this._getTransitioner().getItemIn(), this.clsActive);
      }
    },
    methods: {
      reorder: function reorder() {
        var this$1 = this;

        if (this.finite) {
          css(this.slides, 'order', '');
          return;
        }

        var index = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
        this.slides.forEach(function (slide, i) {
          return css(slide, 'order', this$1.dir > 0 && i < index ? 1 : this$1.dir < 0 && i >= this$1.index ? -1 : '');
        });

        if (!this.center) {
          return;
        }

        var next = this.slides[index];
        var width = offset(this.list).width / 2 - offset(next).width / 2;
        var j = 0;

        while (width > 0) {
          var slideIndex = this.getIndex(--j + index, index);
          var slide = this.slides[slideIndex];
          css(slide, 'order', slideIndex > index ? -2 : -1);
          width -= offset(slide).width;
        }
      },
      getValidIndex: function getValidIndex(index, prevIndex) {
        if (index === void 0) index = this.index;
        if (prevIndex === void 0) prevIndex = this.prevIndex;
        index = this.getIndex(index, prevIndex);

        if (!this.sets) {
          return index;
        }

        var prev;

        do {
          if (includes(this.sets, index)) {
            return index;
          }

          prev = index;
          index = this.getIndex(index + this.dir, prevIndex);
        } while (index !== prev);

        return index;
      }
    }
  };
  var sliderParallax = {
    mixins: [Parallax],
    data: {
      selItem: '!li'
    },
    computed: {
      item: function item(ref, $el) {
        var selItem = ref.selItem;
        return query(selItem, $el);
      }
    },
    events: [{
      name: 'itemshown',
      self: true,
      el: function el() {
        return this.item;
      },
      handler: function handler() {
        css(this.$el, this.getCss(.5));
      }
    }, {
      name: 'itemin itemout',
      self: true,
      el: function el() {
        return this.item;
      },
      handler: function handler(ref) {
        var type = ref.type;
        var ref_detail = ref.detail;
        var percent = ref_detail.percent;
        var duration = ref_detail.duration;
        var timing = ref_detail.timing;
        var dir = ref_detail.dir;
        Transition.cancel(this.$el);
        css(this.$el, this.getCss(getCurrent(type, dir, percent)));
        Transition.start(this.$el, this.getCss(isIn(type) ? .5 : dir > 0 ? 1 : 0), duration, timing)["catch"](noop);
      }
    }, {
      name: 'transitioncanceled transitionend',
      self: true,
      el: function el() {
        return this.item;
      },
      handler: function handler() {
        Transition.cancel(this.$el);
      }
    }, {
      name: 'itemtranslatein itemtranslateout',
      self: true,
      el: function el() {
        return this.item;
      },
      handler: function handler(ref) {
        var type = ref.type;
        var ref_detail = ref.detail;
        var percent = ref_detail.percent;
        var dir = ref_detail.dir;
        Transition.cancel(this.$el);
        css(this.$el, this.getCss(getCurrent(type, dir, percent)));
      }
    }]
  };

  function isIn(type) {
    return endsWith(type, 'in');
  }

  function getCurrent(type, dir, percent) {
    percent /= 2;
    return !isIn(type) ? dir < 0 ? percent : 1 - percent : dir < 0 ? 1 - percent : percent;
  }

  var Animations$2 = assign({}, Animations, {
    fade: {
      show: function show() {
        return [{
          opacity: 0,
          zIndex: 0
        }, {
          zIndex: -1
        }];
      },
      percent: function percent(current) {
        return 1 - css(current, 'opacity');
      },
      translate: function translate(percent) {
        return [{
          opacity: 1 - percent,
          zIndex: 0
        }, {
          zIndex: -1
        }];
      }
    },
    scale: {
      show: function show() {
        return [{
          opacity: 0,
          transform: scale3d(1 + .5),
          zIndex: 0
        }, {
          zIndex: -1
        }];
      },
      percent: function percent(current) {
        return 1 - css(current, 'opacity');
      },
      translate: function translate(percent) {
        return [{
          opacity: 1 - percent,
          transform: scale3d(1 + .5 * percent),
          zIndex: 0
        }, {
          zIndex: -1
        }];
      }
    },
    pull: {
      show: function show(dir) {
        return dir < 0 ? [{
          transform: _translate(30),
          zIndex: -1
        }, {
          transform: _translate(),
          zIndex: 0
        }] : [{
          transform: _translate(-100),
          zIndex: 0
        }, {
          transform: _translate(),
          zIndex: -1
        }];
      },
      percent: function percent(current, next, dir) {
        return dir < 0 ? 1 - translated(next) : translated(current);
      },
      translate: function translate(percent, dir) {
        return dir < 0 ? [{
          transform: _translate(30 * percent),
          zIndex: -1
        }, {
          transform: _translate(-100 * (1 - percent)),
          zIndex: 0
        }] : [{
          transform: _translate(-percent * 100),
          zIndex: 0
        }, {
          transform: _translate(30 * (1 - percent)),
          zIndex: -1
        }];
      }
    },
    push: {
      show: function show(dir) {
        return dir < 0 ? [{
          transform: _translate(100),
          zIndex: 0
        }, {
          transform: _translate(),
          zIndex: -1
        }] : [{
          transform: _translate(-30),
          zIndex: -1
        }, {
          transform: _translate(),
          zIndex: 0
        }];
      },
      percent: function percent(current, next, dir) {
        return dir > 0 ? 1 - translated(next) : translated(current);
      },
      translate: function translate(percent, dir) {
        return dir < 0 ? [{
          transform: _translate(percent * 100),
          zIndex: 0
        }, {
          transform: _translate(-30 * (1 - percent)),
          zIndex: -1
        }] : [{
          transform: _translate(-30 * percent),
          zIndex: -1
        }, {
          transform: _translate(100 * (1 - percent)),
          zIndex: 0
        }];
      }
    }
  });
  var slideshow = {
    mixins: [Class, Slideshow, SliderReactive],
    props: {
      ratio: String,
      minHeight: Number,
      maxHeight: Number
    },
    data: {
      ratio: '16:9',
      minHeight: false,
      maxHeight: false,
      selList: '.uk-slideshow-items',
      attrItem: 'uk-slideshow-item',
      selNav: '.uk-slideshow-nav',
      Animations: Animations$2
    },
    update: {
      read: function read() {
        var ref = this.ratio.split(':').map(Number);
        var width = ref[0];
        var height = ref[1];
        height = height * this.list.offsetWidth / width || 0;

        if (this.minHeight) {
          height = Math.max(this.minHeight, height);
        }

        if (this.maxHeight) {
          height = Math.min(this.maxHeight, height);
        }

        return {
          height: height - boxModelAdjust(this.list, 'height', 'content-box')
        };
      },
      write: function write(ref) {
        var height = ref.height;
        height > 0 && css(this.list, 'minHeight', height);
      },
      events: ['resize']
    }
  };
  var sortable = {
    mixins: [Class, Animate],
    props: {
      group: String,
      threshold: Number,
      clsItem: String,
      clsPlaceholder: String,
      clsDrag: String,
      clsDragState: String,
      clsBase: String,
      clsNoDrag: String,
      clsEmpty: String,
      clsCustom: String,
      handle: String
    },
    data: {
      group: false,
      threshold: 5,
      clsItem: 'uk-sortable-item',
      clsPlaceholder: 'uk-sortable-placeholder',
      clsDrag: 'uk-sortable-drag',
      clsDragState: 'uk-drag',
      clsBase: 'uk-sortable',
      clsNoDrag: 'uk-sortable-nodrag',
      clsEmpty: 'uk-sortable-empty',
      clsCustom: '',
      handle: false,
      pos: {}
    },
    created: function created() {
      var this$1 = this;
      ['init', 'start', 'move', 'end'].forEach(function (key) {
        var fn = this$1[key];

        this$1[key] = function (e) {
          assign(this$1.pos, getEventPos(e));
          fn(e);
        };
      });
    },
    events: {
      name: pointerDown,
      passive: false,
      handler: 'init'
    },
    computed: {
      target: function target() {
        return (this.$el.tBodies || [this.$el])[0];
      },
      items: function items() {
        return _children(this.target);
      },
      isEmpty: {
        get: function get() {
          return isEmpty(this.items);
        },
        watch: function watch(empty) {
          toggleClass(this.target, this.clsEmpty, empty);
        },
        immediate: true
      },
      handles: {
        get: function get(ref, el) {
          var handle = ref.handle;
          return handle ? $$(handle, el) : this.items;
        },
        watch: function watch(handles, prev) {
          css(prev, {
            touchAction: '',
            userSelect: ''
          });
          css(handles, {
            touchAction: hasTouch ? 'none' : '',
            userSelect: 'none'
          }); // touchAction set to 'none' causes a performance drop in Chrome 80
        },
        immediate: true
      }
    },
    update: {
      write: function write() {
        if (!this.drag || !parent(this.placeholder)) {
          return;
        } // clamp to viewport


        var ref = this.pos;
        var x = ref.x;
        var y = ref.y;
        var ref$1 = this.origin;
        var offsetTop = ref$1.offsetTop;
        var offsetLeft = ref$1.offsetLeft;
        var ref$2 = this.drag;
        var offsetHeight = ref$2.offsetHeight;
        var offsetWidth = ref$2.offsetWidth;
        var ref$3 = offset(window);
        var right = ref$3.right;
        var bottom = ref$3.bottom;
        var target = document.elementFromPoint(x, y);
        css(this.drag, {
          top: clamp(y - offsetTop, 0, bottom - offsetHeight),
          left: clamp(x - offsetLeft, 0, right - offsetWidth)
        });
        var sortable = this.getSortable(target);
        var previous = this.getSortable(this.placeholder);
        var move = sortable !== previous;

        if (!sortable || within(target, this.placeholder) || move && (!sortable.group || sortable.group !== previous.group)) {
          return;
        }

        target = sortable.target === target.parentNode && target || sortable.items.filter(function (element) {
          return within(target, element);
        })[0];

        if (move) {
          previous.remove(this.placeholder);
        } else if (!target) {
          return;
        }

        sortable.insert(this.placeholder, target);

        if (!includes(this.touched, sortable)) {
          this.touched.push(sortable);
        }
      },
      events: ['move']
    },
    methods: {
      init: function init(e) {
        var target = e.target;
        var button = e.button;
        var defaultPrevented = e.defaultPrevented;
        var ref = this.items.filter(function (el) {
          return within(target, el);
        });
        var placeholder = ref[0];

        if (!placeholder || defaultPrevented || button > 0 || isInput(target) || within(target, "." + this.clsNoDrag) || this.handle && !within(target, this.handle)) {
          return;
        }

        e.preventDefault();
        this.touched = [this];
        this.placeholder = placeholder;
        this.origin = assign({
          target: target,
          index: index(placeholder)
        }, this.pos);
        on(document, pointerMove, this.move);
        on(document, pointerUp, this.end);

        if (!this.threshold) {
          this.start(e);
        }
      },
      start: function start(e) {
        this.drag = appendDrag(this.$container, this.placeholder);
        var ref = this.placeholder.getBoundingClientRect();
        var left = ref.left;
        var top = ref.top;
        assign(this.origin, {
          offsetLeft: this.pos.x - left,
          offsetTop: this.pos.y - top
        });
        addClass(this.drag, this.clsDrag, this.clsCustom);
        addClass(this.placeholder, this.clsPlaceholder);
        addClass(this.items, this.clsItem);
        addClass(document.documentElement, this.clsDragState);
        trigger(this.$el, 'start', [this, this.placeholder]);
        trackScroll(this.pos);
        this.move(e);
      },
      move: function move(e) {
        if (this.drag) {
          this.$emit('move');
        } else if (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) {
          this.start(e);
        }
      },
      end: function end(e) {
        off(document, pointerMove, this.move);
        off(document, pointerUp, this.end);
        off(window, 'scroll', this.scroll);

        if (!this.drag) {
          return;
        }

        untrackScroll();
        var sortable = this.getSortable(this.placeholder);

        if (this === sortable) {
          if (this.origin.index !== index(this.placeholder)) {
            trigger(this.$el, 'moved', [this, this.placeholder]);
          }
        } else {
          trigger(sortable.$el, 'added', [sortable, this.placeholder]);
          trigger(this.$el, 'removed', [this, this.placeholder]);
        }

        trigger(this.$el, 'stop', [this, this.placeholder]);

        _remove(this.drag);

        this.drag = null;
        var classes = this.touched.map(function (sortable) {
          return sortable.clsPlaceholder + " " + sortable.clsItem;
        }).join(' ');
        this.touched.forEach(function (sortable) {
          return removeClass(sortable.items, classes);
        });
        removeClass(document.documentElement, this.clsDragState);
      },
      insert: function insert(element, target) {
        var this$1 = this;
        addClass(this.items, this.clsItem);

        var insert = function insert() {
          if (target) {
            if (!within(element, this$1.target) || isPredecessor(element, target)) {
              before(target, element);
            } else {
              after(target, element);
            }
          } else {
            append(this$1.target, element);
          }
        };

        if (this.animation) {
          this.animate(insert);
        } else {
          insert();
        }
      },
      remove: function remove(element) {
        if (!within(element, this.target)) {
          return;
        }

        if (this.animation) {
          this.animate(function () {
            return _remove(element);
          });
        } else {
          _remove(element);
        }
      },
      getSortable: function getSortable(element) {
        return element && (this.$getComponent(element, 'sortable') || this.getSortable(element.parentNode));
      }
    }
  };

  function isPredecessor(element, target) {
    return element.parentNode === target.parentNode && index(element) > index(target);
  }

  var trackTimer;

  function trackScroll(pos) {
    var last = Date.now();
    trackTimer = setInterval(function () {
      var x = pos.x;
      var y = pos.y;
      y += window.pageYOffset;
      var dist = (Date.now() - last) * .3;
      last = Date.now();
      scrollParents(document.elementFromPoint(x, pos.y)).some(function (scrollEl) {
        var scroll = scrollEl.scrollTop;
        var scrollHeight = scrollEl.scrollHeight;
        var ref = offset(getViewport(scrollEl));
        var top = ref.top;
        var bottom = ref.bottom;
        var height = ref.height;

        if (top < y && top + 30 > y) {
          scroll -= dist;
        } else if (bottom > y && bottom - 30 < y) {
          scroll += dist;
        } else {
          return;
        }

        if (scroll > 0 && scroll < scrollHeight - height) {
          scrollTop(scrollEl, scroll);
          return true;
        }
      });
    }, 15);
  }

  function untrackScroll() {
    clearInterval(trackTimer);
  }

  function appendDrag(container, element) {
    var clone = append(container, element.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, '$1div$2'));
    clone.style.setProperty('margin', '0', 'important');
    css(clone, assign({
      boxSizing: 'border-box',
      width: element.offsetWidth,
      height: element.offsetHeight,
      overflow: 'hidden'
    }, css(element, ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'])));
    height(clone.firstElementChild, height(element.firstElementChild));
    return clone;
  }

  var obj$1;
  var actives = [];
  var tooltip = {
    mixins: [Container, Togglable, Position],
    args: 'title',
    props: {
      delay: Number,
      title: String
    },
    data: {
      pos: 'top',
      title: '',
      delay: 0,
      animation: ['uk-animation-scale-up'],
      duration: 100,
      cls: 'uk-active',
      clsPos: 'uk-tooltip'
    },
    beforeConnect: function beforeConnect() {
      this._hasTitle = hasAttr(this.$el, 'title');
      attr(this.$el, {
        title: '',
        'aria-expanded': false
      });
    },
    disconnected: function disconnected() {
      this.hide();
      attr(this.$el, {
        title: this._hasTitle ? this.title : null,
        'aria-expanded': null
      });
    },
    methods: {
      show: function show() {
        var this$1 = this;

        if (this.isActive() || !this.title) {
          return;
        }

        actives.forEach(function (active) {
          return active.hide();
        });
        actives.push(this);
        this._unbind = on(document, pointerUp, function (e) {
          return !within(e.target, this$1.$el) && this$1.hide();
        });
        clearTimeout(this.showTimer);
        this.showTimer = setTimeout(this._show, this.delay);
      },
      hide: function hide() {
        var this$1 = this;

        if (!this.isActive() || matches(this.$el, 'input:focus')) {
          return;
        }

        this.toggleElement(this.tooltip, false, false).then(function () {
          actives.splice(actives.indexOf(this$1), 1);
          clearTimeout(this$1.showTimer);
          this$1.tooltip = _remove(this$1.tooltip);

          this$1._unbind();
        });
      },
      _show: function _show() {
        var this$1 = this;
        this.tooltip = append(this.container, "<div class=\"" + this.clsPos + "\"> <div class=\"" + this.clsPos + "-inner\">" + this.title + "</div> </div>");
        on(this.tooltip, 'toggled', function () {
          var toggled = this$1.isToggled(this$1.tooltip);
          attr(this$1.$el, 'aria-expanded', toggled);

          if (!toggled) {
            return;
          }

          this$1.positionAt(this$1.tooltip, this$1.$el);
          this$1.origin = this$1.getAxis() === 'y' ? flipPosition(this$1.dir) + "-" + this$1.align : this$1.align + "-" + flipPosition(this$1.dir);
        });
        this.toggleElement(this.tooltip, true);
      },
      isActive: function isActive() {
        return includes(actives, this);
      }
    },
    events: (obj$1 = {
      focus: 'show',
      blur: 'hide'
    }, obj$1[pointerEnter + " " + pointerLeave] = function (e) {
      if (isTouch(e)) {
        return;
      }

      e.type === pointerEnter ? this.show() : this.hide();
    }, obj$1[pointerDown] = function (e) {
      if (!isTouch(e)) {
        return;
      }

      this.isActive() ? this.hide() : this.show();
    }, obj$1)
  };
  var upload = {
    props: {
      allow: String,
      clsDragover: String,
      concurrent: Number,
      maxSize: Number,
      method: String,
      mime: String,
      msgInvalidMime: String,
      msgInvalidName: String,
      msgInvalidSize: String,
      multiple: Boolean,
      name: String,
      params: Object,
      type: String,
      url: String
    },
    data: {
      allow: false,
      clsDragover: 'uk-dragover',
      concurrent: 1,
      maxSize: 0,
      method: 'POST',
      mime: false,
      msgInvalidMime: 'Invalid File Type: %s',
      msgInvalidName: 'Invalid File Name: %s',
      msgInvalidSize: 'Invalid File Size: %s Kilobytes Max',
      multiple: false,
      name: 'files[]',
      params: {},
      type: '',
      url: '',
      abort: noop,
      beforeAll: noop,
      beforeSend: noop,
      complete: noop,
      completeAll: noop,
      error: noop,
      fail: noop,
      load: noop,
      loadEnd: noop,
      loadStart: noop,
      progress: noop
    },
    events: {
      change: function change(e) {
        if (!matches(e.target, 'input[type="file"]')) {
          return;
        }

        e.preventDefault();

        if (e.target.files) {
          this.upload(e.target.files);
        }

        e.target.value = '';
      },
      drop: function drop(e) {
        stop(e);
        var transfer = e.dataTransfer;

        if (!transfer || !transfer.files) {
          return;
        }

        removeClass(this.$el, this.clsDragover);
        this.upload(transfer.files);
      },
      dragenter: function dragenter(e) {
        stop(e);
      },
      dragover: function dragover(e) {
        stop(e);
        addClass(this.$el, this.clsDragover);
      },
      dragleave: function dragleave(e) {
        stop(e);
        removeClass(this.$el, this.clsDragover);
      }
    },
    methods: {
      upload: function upload(files) {
        var this$1 = this;

        if (!files.length) {
          return;
        }

        trigger(this.$el, 'upload', [files]);

        for (var i = 0; i < files.length; i++) {
          if (this.maxSize && this.maxSize * 1000 < files[i].size) {
            this.fail(this.msgInvalidSize.replace('%s', this.maxSize));
            return;
          }

          if (this.allow && !match$1(this.allow, files[i].name)) {
            this.fail(this.msgInvalidName.replace('%s', this.allow));
            return;
          }

          if (this.mime && !match$1(this.mime, files[i].type)) {
            this.fail(this.msgInvalidMime.replace('%s', this.mime));
            return;
          }
        }

        if (!this.multiple) {
          files = [files[0]];
        }

        this.beforeAll(this, files);
        var chunks = chunk(files, this.concurrent);

        var upload = function upload(files) {
          var data = new FormData();
          files.forEach(function (file) {
            return data.append(this$1.name, file);
          });

          for (var key in this$1.params) {
            data.append(key, this$1.params[key]);
          }

          ajax(this$1.url, {
            data: data,
            method: this$1.method,
            responseType: this$1.type,
            beforeSend: function beforeSend(env) {
              var xhr = env.xhr;
              xhr.upload && on(xhr.upload, 'progress', this$1.progress);
              ['loadStart', 'load', 'loadEnd', 'abort'].forEach(function (type) {
                return on(xhr, type.toLowerCase(), this$1[type]);
              });
              this$1.beforeSend(env);
            }
          }).then(function (xhr) {
            this$1.complete(xhr);

            if (chunks.length) {
              upload(chunks.shift());
            } else {
              this$1.completeAll(xhr);
            }
          }, function (e) {
            return this$1.error(e);
          });
        };

        upload(chunks.shift());
      }
    }
  };

  function match$1(pattern, path) {
    return path.match(new RegExp("^" + pattern.replace(/\//g, '\\/').replace(/\*\*/g, '(\\/[^\\/]+)*').replace(/\*/g, '[^\\/]+').replace(/((?!\\))\?/g, '$1.') + "$", 'i'));
  }

  function chunk(files, size) {
    var chunks = [];

    for (var i = 0; i < files.length; i += size) {
      var chunk = [];

      for (var j = 0; j < size; j++) {
        chunk.push(files[i + j]);
      }

      chunks.push(chunk);
    }

    return chunks;
  }

  function stop(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  var components$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Countdown: countdown,
    Filter: filter$1,
    Lightbox: lightbox,
    LightboxPanel: LightboxPanel,
    Notification: notification,
    Parallax: parallax,
    Slider: slider,
    SliderParallax: sliderParallax,
    Slideshow: slideshow,
    SlideshowParallax: sliderParallax,
    Sortable: sortable,
    Tooltip: tooltip,
    Upload: upload
  });
  each(components$1, function (component, name) {
    return UIkit.component(name, component);
  });
  return UIkit;
});

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/matt/Projects/lights/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /home/matt/Projects/lights/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });