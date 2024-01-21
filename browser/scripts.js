$(".get-information").on("click", function() {
  $(function() {
    console.log("\u51E6\u7406\u958B\u59CB");
    $.ajax({
      url: "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601",
      type: "GET",
      data: {
        "applicationId": "1061100863725172366",
        // アプリID
        "genreId": 555086
        // genreId
      }
    }).done(function(data) {
      let items = data.Items;
      console.log(data);
      let Counter = 1;
      for (let i in items) {
        let itemUrl = items[i].Item.itemUrl;
        let image = items[i].Item.mediumImageUrls[0].imageUrl;
        let itemName = items[i].Item.itemName;
        $(".example-card").eq(i).find("img").attr("src", image);
        $(".example-card").eq(i).find("a").attr("href", itemUrl);
        $(".example-card").eq(i).find(".itemName").find("p").text(itemName);
        Counter++;
      }
    }).fail(function(data) {
      console.log(data);
      console.log("err");
    });
  });
});
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a, b, c, d) {
  "use strict";
  function e(a2, b2, c2) {
    return setTimeout(j(a2, c2), b2);
  }
  function f(a2, b2, c2) {
    return Array.isArray(a2) ? (g(a2, c2[b2], c2), true) : false;
  }
  function g(a2, b2, c2) {
    var e2;
    if (a2)
      if (a2.forEach)
        a2.forEach(b2, c2);
      else if (a2.length !== d)
        for (e2 = 0; e2 < a2.length; )
          b2.call(c2, a2[e2], e2, a2), e2++;
      else
        for (e2 in a2)
          a2.hasOwnProperty(e2) && b2.call(c2, a2[e2], e2, a2);
  }
  function h(b2, c2, d2) {
    var e2 = "DEPRECATED METHOD: " + c2 + "\n" + d2 + " AT \n";
    return function() {
      var c3 = new Error("get-stack-trace"), d3 = c3 && c3.stack ? c3.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", f2 = a.console && (a.console.warn || a.console.log);
      return f2 && f2.call(a.console, e2, d3), b2.apply(this, arguments);
    };
  }
  function i(a2, b2, c2) {
    var d2, e2 = b2.prototype;
    d2 = a2.prototype = Object.create(e2), d2.constructor = a2, d2._super = e2, c2 && la(d2, c2);
  }
  function j(a2, b2) {
    return function() {
      return a2.apply(b2, arguments);
    };
  }
  function k(a2, b2) {
    return typeof a2 == oa ? a2.apply(b2 ? b2[0] || d : d, b2) : a2;
  }
  function l(a2, b2) {
    return a2 === d ? b2 : a2;
  }
  function m(a2, b2, c2) {
    g(q(b2), function(b3) {
      a2.addEventListener(b3, c2, false);
    });
  }
  function n(a2, b2, c2) {
    g(q(b2), function(b3) {
      a2.removeEventListener(b3, c2, false);
    });
  }
  function o(a2, b2) {
    for (; a2; ) {
      if (a2 == b2)
        return true;
      a2 = a2.parentNode;
    }
    return false;
  }
  function p(a2, b2) {
    return a2.indexOf(b2) > -1;
  }
  function q(a2) {
    return a2.trim().split(/\s+/g);
  }
  function r(a2, b2, c2) {
    if (a2.indexOf && !c2)
      return a2.indexOf(b2);
    for (var d2 = 0; d2 < a2.length; ) {
      if (c2 && a2[d2][c2] == b2 || !c2 && a2[d2] === b2)
        return d2;
      d2++;
    }
    return -1;
  }
  function s(a2) {
    return Array.prototype.slice.call(a2, 0);
  }
  function t(a2, b2, c2) {
    for (var d2 = [], e2 = [], f2 = 0; f2 < a2.length; ) {
      var g2 = b2 ? a2[f2][b2] : a2[f2];
      r(e2, g2) < 0 && d2.push(a2[f2]), e2[f2] = g2, f2++;
    }
    return c2 && (d2 = b2 ? d2.sort(function(a3, c3) {
      return a3[b2] > c3[b2];
    }) : d2.sort()), d2;
  }
  function u(a2, b2) {
    for (var c2, e2, f2 = b2[0].toUpperCase() + b2.slice(1), g2 = 0; g2 < ma.length; ) {
      if (c2 = ma[g2], e2 = c2 ? c2 + f2 : b2, e2 in a2)
        return e2;
      g2++;
    }
    return d;
  }
  function v() {
    return ua++;
  }
  function w(b2) {
    var c2 = b2.ownerDocument || b2;
    return c2.defaultView || c2.parentWindow || a;
  }
  function x(a2, b2) {
    var c2 = this;
    this.manager = a2, this.callback = b2, this.element = a2.element, this.target = a2.options.inputTarget, this.domHandler = function(b3) {
      k(a2.options.enable, [a2]) && c2.handler(b3);
    }, this.init();
  }
  function y(a2) {
    var b2, c2 = a2.options.inputClass;
    return new (b2 = c2 ? c2 : xa ? M : ya ? P : wa ? R : L)(a2, z);
  }
  function z(a2, b2, c2) {
    var d2 = c2.pointers.length, e2 = c2.changedPointers.length, f2 = b2 & Ea && d2 - e2 === 0, g2 = b2 & (Ga | Ha) && d2 - e2 === 0;
    c2.isFirst = !!f2, c2.isFinal = !!g2, f2 && (a2.session = {}), c2.eventType = b2, A(a2, c2), a2.emit("hammer.input", c2), a2.recognize(c2), a2.session.prevInput = c2;
  }
  function A(a2, b2) {
    var c2 = a2.session, d2 = b2.pointers, e2 = d2.length;
    c2.firstInput || (c2.firstInput = D(b2)), e2 > 1 && !c2.firstMultiple ? c2.firstMultiple = D(b2) : 1 === e2 && (c2.firstMultiple = false);
    var f2 = c2.firstInput, g2 = c2.firstMultiple, h2 = g2 ? g2.center : f2.center, i2 = b2.center = E(d2);
    b2.timeStamp = ra(), b2.deltaTime = b2.timeStamp - f2.timeStamp, b2.angle = I(h2, i2), b2.distance = H(h2, i2), B(c2, b2), b2.offsetDirection = G(b2.deltaX, b2.deltaY);
    var j2 = F(b2.deltaTime, b2.deltaX, b2.deltaY);
    b2.overallVelocityX = j2.x, b2.overallVelocityY = j2.y, b2.overallVelocity = qa(j2.x) > qa(j2.y) ? j2.x : j2.y, b2.scale = g2 ? K(g2.pointers, d2) : 1, b2.rotation = g2 ? J(g2.pointers, d2) : 0, b2.maxPointers = c2.prevInput ? b2.pointers.length > c2.prevInput.maxPointers ? b2.pointers.length : c2.prevInput.maxPointers : b2.pointers.length, C(c2, b2);
    var k2 = a2.element;
    o(b2.srcEvent.target, k2) && (k2 = b2.srcEvent.target), b2.target = k2;
  }
  function B(a2, b2) {
    var c2 = b2.center, d2 = a2.offsetDelta || {}, e2 = a2.prevDelta || {}, f2 = a2.prevInput || {};
    b2.eventType !== Ea && f2.eventType !== Ga || (e2 = a2.prevDelta = { x: f2.deltaX || 0, y: f2.deltaY || 0 }, d2 = a2.offsetDelta = { x: c2.x, y: c2.y }), b2.deltaX = e2.x + (c2.x - d2.x), b2.deltaY = e2.y + (c2.y - d2.y);
  }
  function C(a2, b2) {
    var c2, e2, f2, g2, h2 = a2.lastInterval || b2, i2 = b2.timeStamp - h2.timeStamp;
    if (b2.eventType != Ha && (i2 > Da || h2.velocity === d)) {
      var j2 = b2.deltaX - h2.deltaX, k2 = b2.deltaY - h2.deltaY, l2 = F(i2, j2, k2);
      e2 = l2.x, f2 = l2.y, c2 = qa(l2.x) > qa(l2.y) ? l2.x : l2.y, g2 = G(j2, k2), a2.lastInterval = b2;
    } else
      c2 = h2.velocity, e2 = h2.velocityX, f2 = h2.velocityY, g2 = h2.direction;
    b2.velocity = c2, b2.velocityX = e2, b2.velocityY = f2, b2.direction = g2;
  }
  function D(a2) {
    for (var b2 = [], c2 = 0; c2 < a2.pointers.length; )
      b2[c2] = { clientX: pa(a2.pointers[c2].clientX), clientY: pa(a2.pointers[c2].clientY) }, c2++;
    return { timeStamp: ra(), pointers: b2, center: E(b2), deltaX: a2.deltaX, deltaY: a2.deltaY };
  }
  function E(a2) {
    var b2 = a2.length;
    if (1 === b2)
      return { x: pa(a2[0].clientX), y: pa(a2[0].clientY) };
    for (var c2 = 0, d2 = 0, e2 = 0; b2 > e2; )
      c2 += a2[e2].clientX, d2 += a2[e2].clientY, e2++;
    return { x: pa(c2 / b2), y: pa(d2 / b2) };
  }
  function F(a2, b2, c2) {
    return { x: b2 / a2 || 0, y: c2 / a2 || 0 };
  }
  function G(a2, b2) {
    return a2 === b2 ? Ia : qa(a2) >= qa(b2) ? 0 > a2 ? Ja : Ka : 0 > b2 ? La : Ma;
  }
  function H(a2, b2, c2) {
    c2 || (c2 = Qa);
    var d2 = b2[c2[0]] - a2[c2[0]], e2 = b2[c2[1]] - a2[c2[1]];
    return Math.sqrt(d2 * d2 + e2 * e2);
  }
  function I(a2, b2, c2) {
    c2 || (c2 = Qa);
    var d2 = b2[c2[0]] - a2[c2[0]], e2 = b2[c2[1]] - a2[c2[1]];
    return 180 * Math.atan2(e2, d2) / Math.PI;
  }
  function J(a2, b2) {
    return I(b2[1], b2[0], Ra) + I(a2[1], a2[0], Ra);
  }
  function K(a2, b2) {
    return H(b2[0], b2[1], Ra) / H(a2[0], a2[1], Ra);
  }
  function L() {
    this.evEl = Ta, this.evWin = Ua, this.pressed = false, x.apply(this, arguments);
  }
  function M() {
    this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
  }
  function N() {
    this.evTarget = $a, this.evWin = _a, this.started = false, x.apply(this, arguments);
  }
  function O(a2, b2) {
    var c2 = s(a2.touches), d2 = s(a2.changedTouches);
    return b2 & (Ga | Ha) && (c2 = t(c2.concat(d2), "identifier", true)), [c2, d2];
  }
  function P() {
    this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments);
  }
  function Q(a2, b2) {
    var c2 = s(a2.touches), d2 = this.targetIds;
    if (b2 & (Ea | Fa) && 1 === c2.length)
      return d2[c2[0].identifier] = true, [c2, c2];
    var e2, f2, g2 = s(a2.changedTouches), h2 = [], i2 = this.target;
    if (f2 = c2.filter(function(a3) {
      return o(a3.target, i2);
    }), b2 === Ea)
      for (e2 = 0; e2 < f2.length; )
        d2[f2[e2].identifier] = true, e2++;
    for (e2 = 0; e2 < g2.length; )
      d2[g2[e2].identifier] && h2.push(g2[e2]), b2 & (Ga | Ha) && delete d2[g2[e2].identifier], e2++;
    return h2.length ? [t(f2.concat(h2), "identifier", true), h2] : void 0;
  }
  function R() {
    x.apply(this, arguments);
    var a2 = j(this.handler, this);
    this.touch = new P(this.manager, a2), this.mouse = new L(this.manager, a2), this.primaryTouch = null, this.lastTouches = [];
  }
  function S(a2, b2) {
    a2 & Ea ? (this.primaryTouch = b2.changedPointers[0].identifier, T.call(this, b2)) : a2 & (Ga | Ha) && T.call(this, b2);
  }
  function T(a2) {
    var b2 = a2.changedPointers[0];
    if (b2.identifier === this.primaryTouch) {
      var c2 = { x: b2.clientX, y: b2.clientY };
      this.lastTouches.push(c2);
      var d2 = this.lastTouches, e2 = function() {
        var a3 = d2.indexOf(c2);
        a3 > -1 && d2.splice(a3, 1);
      };
      setTimeout(e2, cb);
    }
  }
  function U(a2) {
    for (var b2 = a2.srcEvent.clientX, c2 = a2.srcEvent.clientY, d2 = 0; d2 < this.lastTouches.length; d2++) {
      var e2 = this.lastTouches[d2], f2 = Math.abs(b2 - e2.x), g2 = Math.abs(c2 - e2.y);
      if (db >= f2 && db >= g2)
        return true;
    }
    return false;
  }
  function V(a2, b2) {
    this.manager = a2, this.set(b2);
  }
  function W(a2) {
    if (p(a2, jb))
      return jb;
    var b2 = p(a2, kb), c2 = p(a2, lb);
    return b2 && c2 ? jb : b2 || c2 ? b2 ? kb : lb : p(a2, ib) ? ib : hb;
  }
  function X() {
    if (!fb)
      return false;
    var b2 = {}, c2 = a.CSS && a.CSS.supports;
    return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(d2) {
      b2[d2] = c2 ? a.CSS.supports("touch-action", d2) : true;
    }), b2;
  }
  function Y(a2) {
    this.options = la({}, this.defaults, a2 || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, true), this.state = nb, this.simultaneous = {}, this.requireFail = [];
  }
  function Z(a2) {
    return a2 & sb ? "cancel" : a2 & qb ? "end" : a2 & pb ? "move" : a2 & ob ? "start" : "";
  }
  function $2(a2) {
    return a2 == Ma ? "down" : a2 == La ? "up" : a2 == Ja ? "left" : a2 == Ka ? "right" : "";
  }
  function _(a2, b2) {
    var c2 = b2.manager;
    return c2 ? c2.get(a2) : a2;
  }
  function aa() {
    Y.apply(this, arguments);
  }
  function ba() {
    aa.apply(this, arguments), this.pX = null, this.pY = null;
  }
  function ca() {
    aa.apply(this, arguments);
  }
  function da() {
    Y.apply(this, arguments), this._timer = null, this._input = null;
  }
  function ea() {
    aa.apply(this, arguments);
  }
  function fa() {
    aa.apply(this, arguments);
  }
  function ga() {
    Y.apply(this, arguments), this.pTime = false, this.pCenter = false, this._timer = null, this._input = null, this.count = 0;
  }
  function ha(a2, b2) {
    return b2 = b2 || {}, b2.recognizers = l(b2.recognizers, ha.defaults.preset), new ia(a2, b2);
  }
  function ia(a2, b2) {
    this.options = la({}, ha.defaults, b2 || {}), this.options.inputTarget = this.options.inputTarget || a2, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a2, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, true), g(this.options.recognizers, function(a3) {
      var b3 = this.add(new a3[0](a3[1]));
      a3[2] && b3.recognizeWith(a3[2]), a3[3] && b3.requireFailure(a3[3]);
    }, this);
  }
  function ja(a2, b2) {
    var c2 = a2.element;
    if (c2.style) {
      var d2;
      g(a2.options.cssProps, function(e2, f2) {
        d2 = u(c2.style, f2), b2 ? (a2.oldCssProps[d2] = c2.style[d2], c2.style[d2] = e2) : c2.style[d2] = a2.oldCssProps[d2] || "";
      }), b2 || (a2.oldCssProps = {});
    }
  }
  function ka(a2, c2) {
    var d2 = b.createEvent("Event");
    d2.initEvent(a2, true, true), d2.gesture = c2, c2.target.dispatchEvent(d2);
  }
  var la, ma = ["", "webkit", "Moz", "MS", "ms", "o"], na = b.createElement("div"), oa = "function", pa = Math.round, qa = Math.abs, ra = Date.now;
  la = "function" != typeof Object.assign ? function(a2) {
    if (a2 === d || null === a2)
      throw new TypeError("Cannot convert undefined or null to object");
    for (var b2 = Object(a2), c2 = 1; c2 < arguments.length; c2++) {
      var e2 = arguments[c2];
      if (e2 !== d && null !== e2)
        for (var f2 in e2)
          e2.hasOwnProperty(f2) && (b2[f2] = e2[f2]);
    }
    return b2;
  } : Object.assign;
  var sa = h(function(a2, b2, c2) {
    for (var e2 = Object.keys(b2), f2 = 0; f2 < e2.length; )
      (!c2 || c2 && a2[e2[f2]] === d) && (a2[e2[f2]] = b2[e2[f2]]), f2++;
    return a2;
  }, "extend", "Use `assign`."), ta = h(function(a2, b2) {
    return sa(a2, b2, true);
  }, "merge", "Use `assign`."), ua = 1, va = /mobile|tablet|ip(ad|hone|od)|android/i, wa = "ontouchstart" in a, xa = u(a, "PointerEvent") !== d, ya = wa && va.test(navigator.userAgent), za = "touch", Aa = "pen", Ba = "mouse", Ca = "kinect", Da = 25, Ea = 1, Fa = 2, Ga = 4, Ha = 8, Ia = 1, Ja = 2, Ka = 4, La = 8, Ma = 16, Na = Ja | Ka, Oa = La | Ma, Pa = Na | Oa, Qa = ["x", "y"], Ra = ["clientX", "clientY"];
  x.prototype = { handler: function() {
  }, init: function() {
    this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler);
  }, destroy: function() {
    this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler);
  } };
  var Sa = { mousedown: Ea, mousemove: Fa, mouseup: Ga }, Ta = "mousedown", Ua = "mousemove mouseup";
  i(L, x, { handler: function(a2) {
    var b2 = Sa[a2.type];
    b2 & Ea && 0 === a2.button && (this.pressed = true), b2 & Fa && 1 !== a2.which && (b2 = Ga), this.pressed && (b2 & Ga && (this.pressed = false), this.callback(this.manager, b2, { pointers: [a2], changedPointers: [a2], pointerType: Ba, srcEvent: a2 }));
  } });
  var Va = { pointerdown: Ea, pointermove: Fa, pointerup: Ga, pointercancel: Ha, pointerout: Ha }, Wa = { 2: za, 3: Aa, 4: Ba, 5: Ca }, Xa = "pointerdown", Ya = "pointermove pointerup pointercancel";
  a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, { handler: function(a2) {
    var b2 = this.store, c2 = false, d2 = a2.type.toLowerCase().replace("ms", ""), e2 = Va[d2], f2 = Wa[a2.pointerType] || a2.pointerType, g2 = f2 == za, h2 = r(b2, a2.pointerId, "pointerId");
    e2 & Ea && (0 === a2.button || g2) ? 0 > h2 && (b2.push(a2), h2 = b2.length - 1) : e2 & (Ga | Ha) && (c2 = true), 0 > h2 || (b2[h2] = a2, this.callback(this.manager, e2, { pointers: b2, changedPointers: [a2], pointerType: f2, srcEvent: a2 }), c2 && b2.splice(h2, 1));
  } });
  var Za = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha }, $a = "touchstart", _a = "touchstart touchmove touchend touchcancel";
  i(N, x, { handler: function(a2) {
    var b2 = Za[a2.type];
    if (b2 === Ea && (this.started = true), this.started) {
      var c2 = O.call(this, a2, b2);
      b2 & (Ga | Ha) && c2[0].length - c2[1].length === 0 && (this.started = false), this.callback(this.manager, b2, { pointers: c2[0], changedPointers: c2[1], pointerType: za, srcEvent: a2 });
    }
  } });
  var ab = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha }, bb = "touchstart touchmove touchend touchcancel";
  i(P, x, { handler: function(a2) {
    var b2 = ab[a2.type], c2 = Q.call(this, a2, b2);
    c2 && this.callback(this.manager, b2, { pointers: c2[0], changedPointers: c2[1], pointerType: za, srcEvent: a2 });
  } });
  var cb = 2500, db = 25;
  i(R, x, { handler: function(a2, b2, c2) {
    var d2 = c2.pointerType == za, e2 = c2.pointerType == Ba;
    if (!(e2 && c2.sourceCapabilities && c2.sourceCapabilities.firesTouchEvents)) {
      if (d2)
        S.call(this, b2, c2);
      else if (e2 && U.call(this, c2))
        return;
      this.callback(a2, b2, c2);
    }
  }, destroy: function() {
    this.touch.destroy(), this.mouse.destroy();
  } });
  var eb = u(na.style, "touchAction"), fb = eb !== d, gb = "compute", hb = "auto", ib = "manipulation", jb = "none", kb = "pan-x", lb = "pan-y", mb = X();
  V.prototype = { set: function(a2) {
    a2 == gb && (a2 = this.compute()), fb && this.manager.element.style && mb[a2] && (this.manager.element.style[eb] = a2), this.actions = a2.toLowerCase().trim();
  }, update: function() {
    this.set(this.manager.options.touchAction);
  }, compute: function() {
    var a2 = [];
    return g(this.manager.recognizers, function(b2) {
      k(b2.options.enable, [b2]) && (a2 = a2.concat(b2.getTouchAction()));
    }), W(a2.join(" "));
  }, preventDefaults: function(a2) {
    var b2 = a2.srcEvent, c2 = a2.offsetDirection;
    if (this.manager.session.prevented)
      return void b2.preventDefault();
    var d2 = this.actions, e2 = p(d2, jb) && !mb[jb], f2 = p(d2, lb) && !mb[lb], g2 = p(d2, kb) && !mb[kb];
    if (e2) {
      var h2 = 1 === a2.pointers.length, i2 = a2.distance < 2, j2 = a2.deltaTime < 250;
      if (h2 && i2 && j2)
        return;
    }
    return g2 && f2 ? void 0 : e2 || f2 && c2 & Na || g2 && c2 & Oa ? this.preventSrc(b2) : void 0;
  }, preventSrc: function(a2) {
    this.manager.session.prevented = true, a2.preventDefault();
  } };
  var nb = 1, ob = 2, pb = 4, qb = 8, rb = qb, sb = 16, tb = 32;
  Y.prototype = { defaults: {}, set: function(a2) {
    return la(this.options, a2), this.manager && this.manager.touchAction.update(), this;
  }, recognizeWith: function(a2) {
    if (f(a2, "recognizeWith", this))
      return this;
    var b2 = this.simultaneous;
    return a2 = _(a2, this), b2[a2.id] || (b2[a2.id] = a2, a2.recognizeWith(this)), this;
  }, dropRecognizeWith: function(a2) {
    return f(a2, "dropRecognizeWith", this) ? this : (a2 = _(a2, this), delete this.simultaneous[a2.id], this);
  }, requireFailure: function(a2) {
    if (f(a2, "requireFailure", this))
      return this;
    var b2 = this.requireFail;
    return a2 = _(a2, this), -1 === r(b2, a2) && (b2.push(a2), a2.requireFailure(this)), this;
  }, dropRequireFailure: function(a2) {
    if (f(a2, "dropRequireFailure", this))
      return this;
    a2 = _(a2, this);
    var b2 = r(this.requireFail, a2);
    return b2 > -1 && this.requireFail.splice(b2, 1), this;
  }, hasRequireFailures: function() {
    return this.requireFail.length > 0;
  }, canRecognizeWith: function(a2) {
    return !!this.simultaneous[a2.id];
  }, emit: function(a2) {
    function b2(b3) {
      c2.manager.emit(b3, a2);
    }
    var c2 = this, d2 = this.state;
    qb > d2 && b2(c2.options.event + Z(d2)), b2(c2.options.event), a2.additionalEvent && b2(a2.additionalEvent), d2 >= qb && b2(c2.options.event + Z(d2));
  }, tryEmit: function(a2) {
    return this.canEmit() ? this.emit(a2) : void (this.state = tb);
  }, canEmit: function() {
    for (var a2 = 0; a2 < this.requireFail.length; ) {
      if (!(this.requireFail[a2].state & (tb | nb)))
        return false;
      a2++;
    }
    return true;
  }, recognize: function(a2) {
    var b2 = la({}, a2);
    return k(this.options.enable, [this, b2]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b2), void (this.state & (ob | pb | qb | sb) && this.tryEmit(b2))) : (this.reset(), void (this.state = tb));
  }, process: function(a2) {
  }, getTouchAction: function() {
  }, reset: function() {
  } }, i(aa, Y, { defaults: { pointers: 1 }, attrTest: function(a2) {
    var b2 = this.options.pointers;
    return 0 === b2 || a2.pointers.length === b2;
  }, process: function(a2) {
    var b2 = this.state, c2 = a2.eventType, d2 = b2 & (ob | pb), e2 = this.attrTest(a2);
    return d2 && (c2 & Ha || !e2) ? b2 | sb : d2 || e2 ? c2 & Ga ? b2 | qb : b2 & ob ? b2 | pb : ob : tb;
  } }), i(ba, aa, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Pa }, getTouchAction: function() {
    var a2 = this.options.direction, b2 = [];
    return a2 & Na && b2.push(lb), a2 & Oa && b2.push(kb), b2;
  }, directionTest: function(a2) {
    var b2 = this.options, c2 = true, d2 = a2.distance, e2 = a2.direction, f2 = a2.deltaX, g2 = a2.deltaY;
    return e2 & b2.direction || (b2.direction & Na ? (e2 = 0 === f2 ? Ia : 0 > f2 ? Ja : Ka, c2 = f2 != this.pX, d2 = Math.abs(a2.deltaX)) : (e2 = 0 === g2 ? Ia : 0 > g2 ? La : Ma, c2 = g2 != this.pY, d2 = Math.abs(a2.deltaY))), a2.direction = e2, c2 && d2 > b2.threshold && e2 & b2.direction;
  }, attrTest: function(a2) {
    return aa.prototype.attrTest.call(this, a2) && (this.state & ob || !(this.state & ob) && this.directionTest(a2));
  }, emit: function(a2) {
    this.pX = a2.deltaX, this.pY = a2.deltaY;
    var b2 = $2(a2.direction);
    b2 && (a2.additionalEvent = this.options.event + b2), this._super.emit.call(this, a2);
  } }), i(ca, aa, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function() {
    return [jb];
  }, attrTest: function(a2) {
    return this._super.attrTest.call(this, a2) && (Math.abs(a2.scale - 1) > this.options.threshold || this.state & ob);
  }, emit: function(a2) {
    if (1 !== a2.scale) {
      var b2 = a2.scale < 1 ? "in" : "out";
      a2.additionalEvent = this.options.event + b2;
    }
    this._super.emit.call(this, a2);
  } }), i(da, Y, { defaults: { event: "press", pointers: 1, time: 251, threshold: 9 }, getTouchAction: function() {
    return [hb];
  }, process: function(a2) {
    var b2 = this.options, c2 = a2.pointers.length === b2.pointers, d2 = a2.distance < b2.threshold, f2 = a2.deltaTime > b2.time;
    if (this._input = a2, !d2 || !c2 || a2.eventType & (Ga | Ha) && !f2)
      this.reset();
    else if (a2.eventType & Ea)
      this.reset(), this._timer = e(function() {
        this.state = rb, this.tryEmit();
      }, b2.time, this);
    else if (a2.eventType & Ga)
      return rb;
    return tb;
  }, reset: function() {
    clearTimeout(this._timer);
  }, emit: function(a2) {
    this.state === rb && (a2 && a2.eventType & Ga ? this.manager.emit(this.options.event + "up", a2) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)));
  } }), i(ea, aa, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function() {
    return [jb];
  }, attrTest: function(a2) {
    return this._super.attrTest.call(this, a2) && (Math.abs(a2.rotation) > this.options.threshold || this.state & ob);
  } }), i(fa, aa, { defaults: { event: "swipe", threshold: 10, velocity: 0.3, direction: Na | Oa, pointers: 1 }, getTouchAction: function() {
    return ba.prototype.getTouchAction.call(this);
  }, attrTest: function(a2) {
    var b2, c2 = this.options.direction;
    return c2 & (Na | Oa) ? b2 = a2.overallVelocity : c2 & Na ? b2 = a2.overallVelocityX : c2 & Oa && (b2 = a2.overallVelocityY), this._super.attrTest.call(this, a2) && c2 & a2.offsetDirection && a2.distance > this.options.threshold && a2.maxPointers == this.options.pointers && qa(b2) > this.options.velocity && a2.eventType & Ga;
  }, emit: function(a2) {
    var b2 = $2(a2.offsetDirection);
    b2 && this.manager.emit(this.options.event + b2, a2), this.manager.emit(this.options.event, a2);
  } }), i(ga, Y, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 }, getTouchAction: function() {
    return [ib];
  }, process: function(a2) {
    var b2 = this.options, c2 = a2.pointers.length === b2.pointers, d2 = a2.distance < b2.threshold, f2 = a2.deltaTime < b2.time;
    if (this.reset(), a2.eventType & Ea && 0 === this.count)
      return this.failTimeout();
    if (d2 && f2 && c2) {
      if (a2.eventType != Ga)
        return this.failTimeout();
      var g2 = this.pTime ? a2.timeStamp - this.pTime < b2.interval : true, h2 = !this.pCenter || H(this.pCenter, a2.center) < b2.posThreshold;
      this.pTime = a2.timeStamp, this.pCenter = a2.center, h2 && g2 ? this.count += 1 : this.count = 1, this._input = a2;
      var i2 = this.count % b2.taps;
      if (0 === i2)
        return this.hasRequireFailures() ? (this._timer = e(function() {
          this.state = rb, this.tryEmit();
        }, b2.interval, this), ob) : rb;
    }
    return tb;
  }, failTimeout: function() {
    return this._timer = e(function() {
      this.state = tb;
    }, this.options.interval, this), tb;
  }, reset: function() {
    clearTimeout(this._timer);
  }, emit: function() {
    this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
  } }), ha.VERSION = "2.0.7", ha.defaults = { domEvents: false, touchAction: gb, enable: true, inputTarget: null, inputClass: null, preset: [[ea, { enable: false }], [ca, { enable: false }, ["rotate"]], [fa, { direction: Na }], [ba, { direction: Na }, ["swipe"]], [ga], [ga, { event: "doubletap", taps: 2 }, ["tap"]], [da]], cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };
  var ub = 1, vb = 2;
  ia.prototype = { set: function(a2) {
    return la(this.options, a2), a2.touchAction && this.touchAction.update(), a2.inputTarget && (this.input.destroy(), this.input.target = a2.inputTarget, this.input.init()), this;
  }, stop: function(a2) {
    this.session.stopped = a2 ? vb : ub;
  }, recognize: function(a2) {
    var b2 = this.session;
    if (!b2.stopped) {
      this.touchAction.preventDefaults(a2);
      var c2, d2 = this.recognizers, e2 = b2.curRecognizer;
      (!e2 || e2 && e2.state & rb) && (e2 = b2.curRecognizer = null);
      for (var f2 = 0; f2 < d2.length; )
        c2 = d2[f2], b2.stopped === vb || e2 && c2 != e2 && !c2.canRecognizeWith(e2) ? c2.reset() : c2.recognize(a2), !e2 && c2.state & (ob | pb | qb) && (e2 = b2.curRecognizer = c2), f2++;
    }
  }, get: function(a2) {
    if (a2 instanceof Y)
      return a2;
    for (var b2 = this.recognizers, c2 = 0; c2 < b2.length; c2++)
      if (b2[c2].options.event == a2)
        return b2[c2];
    return null;
  }, add: function(a2) {
    if (f(a2, "add", this))
      return this;
    var b2 = this.get(a2.options.event);
    return b2 && this.remove(b2), this.recognizers.push(a2), a2.manager = this, this.touchAction.update(), a2;
  }, remove: function(a2) {
    if (f(a2, "remove", this))
      return this;
    if (a2 = this.get(a2)) {
      var b2 = this.recognizers, c2 = r(b2, a2);
      -1 !== c2 && (b2.splice(c2, 1), this.touchAction.update());
    }
    return this;
  }, on: function(a2, b2) {
    if (a2 !== d && b2 !== d) {
      var c2 = this.handlers;
      return g(q(a2), function(a3) {
        c2[a3] = c2[a3] || [], c2[a3].push(b2);
      }), this;
    }
  }, off: function(a2, b2) {
    if (a2 !== d) {
      var c2 = this.handlers;
      return g(q(a2), function(a3) {
        b2 ? c2[a3] && c2[a3].splice(r(c2[a3], b2), 1) : delete c2[a3];
      }), this;
    }
  }, emit: function(a2, b2) {
    this.options.domEvents && ka(a2, b2);
    var c2 = this.handlers[a2] && this.handlers[a2].slice();
    if (c2 && c2.length) {
      b2.type = a2, b2.preventDefault = function() {
        b2.srcEvent.preventDefault();
      };
      for (var d2 = 0; d2 < c2.length; )
        c2[d2](b2), d2++;
    }
  }, destroy: function() {
    this.element && ja(this, false), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
  } }, la(ha, { INPUT_START: Ea, INPUT_MOVE: Fa, INPUT_END: Ga, INPUT_CANCEL: Ha, STATE_POSSIBLE: nb, STATE_BEGAN: ob, STATE_CHANGED: pb, STATE_ENDED: qb, STATE_RECOGNIZED: rb, STATE_CANCELLED: sb, STATE_FAILED: tb, DIRECTION_NONE: Ia, DIRECTION_LEFT: Ja, DIRECTION_RIGHT: Ka, DIRECTION_UP: La, DIRECTION_DOWN: Ma, DIRECTION_HORIZONTAL: Na, DIRECTION_VERTICAL: Oa, DIRECTION_ALL: Pa, Manager: ia, Input: x, TouchAction: V, TouchInput: P, MouseInput: L, PointerEventInput: M, TouchMouseInput: R, SingleTouchInput: N, Recognizer: Y, AttrRecognizer: aa, Tap: ga, Pan: ba, Swipe: fa, Pinch: ca, Rotate: ea, Press: da, on: m, off: n, each: g, merge: ta, extend: sa, assign: la, inherit: i, bindFn: j, prefixed: u });
  var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
  wb.Hammer = ha, "function" == typeof define && define.amd ? define(function() {
    return ha;
  }) : "undefined" != typeof module && module.exports ? module.exports = ha : a[c] = ha;
}(window, document, "Hammer");
//# sourceMappingURL=scripts.js.map
