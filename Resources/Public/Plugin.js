"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js
  function readFromConsumerApi(key) {
    return (...args) => {
      if (window["@Neos:HostPluginAPI"] && window["@Neos:HostPluginAPI"][`@${key}`]) {
        return window["@Neos:HostPluginAPI"][`@${key}`](...args);
      }
      throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
  }
  var init_readFromConsumerApi = __esm({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"() {
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js
  var require_react = __commonJS({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().React;
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js
  var require_neos_ui_decorators = __commonJS({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiDecorators;
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js
  var require_react_ui_components = __commonJS({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().ReactUiComponents;
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/index.js
  init_readFromConsumerApi();
  var dist_default = readFromConsumerApi("manifest");

  // Resources/Private/Editor/ColorPicker/index.tsx
  var import_react4 = __toESM(require_react());
  var import_neos_ui_decorators = __toESM(require_neos_ui_decorators());

  // node_modules/.pnpm/react-colorful@5.6.1_react-dom@16.14.0_react@16.14.0/node_modules/react-colorful/dist/index.mjs
  var import_react = __toESM(require_react(), 1);
  function u() {
    return (u = Object.assign || function(e2) {
      for (var r2 = 1; r2 < arguments.length; r2++) {
        var t2 = arguments[r2];
        for (var n3 in t2)
          Object.prototype.hasOwnProperty.call(t2, n3) && (e2[n3] = t2[n3]);
      }
      return e2;
    }).apply(this, arguments);
  }
  function c(e2, r2) {
    if (null == e2)
      return {};
    var t2, n3, o2 = {}, a2 = Object.keys(e2);
    for (n3 = 0; n3 < a2.length; n3++)
      r2.indexOf(t2 = a2[n3]) >= 0 || (o2[t2] = e2[t2]);
    return o2;
  }
  function i(e2) {
    var t2 = (0, import_react.useRef)(e2), n3 = (0, import_react.useRef)(function(e3) {
      t2.current && t2.current(e3);
    });
    return t2.current = e2, n3.current;
  }
  var s = function(e2, r2, t2) {
    return void 0 === r2 && (r2 = 0), void 0 === t2 && (t2 = 1), e2 > t2 ? t2 : e2 < r2 ? r2 : e2;
  };
  var f = function(e2) {
    return "touches" in e2;
  };
  var v = function(e2) {
    return e2 && e2.ownerDocument.defaultView || self;
  };
  var d = function(e2, r2, t2) {
    var n3 = e2.getBoundingClientRect(), o2 = f(r2) ? function(e3, r3) {
      for (var t3 = 0; t3 < e3.length; t3++)
        if (e3[t3].identifier === r3)
          return e3[t3];
      return e3[0];
    }(r2.touches, t2) : r2;
    return { left: s((o2.pageX - (n3.left + v(e2).pageXOffset)) / n3.width), top: s((o2.pageY - (n3.top + v(e2).pageYOffset)) / n3.height) };
  };
  var h = function(e2) {
    !f(e2) && e2.preventDefault();
  };
  var m = import_react.default.memo(function(o2) {
    var a2 = o2.onMove, l2 = o2.onKey, s2 = c(o2, ["onMove", "onKey"]), m3 = (0, import_react.useRef)(null), g3 = i(a2), p3 = i(l2), b3 = (0, import_react.useRef)(null), _2 = (0, import_react.useRef)(false), x2 = (0, import_react.useMemo)(function() {
      var e2 = function(e3) {
        h(e3), (f(e3) ? e3.touches.length > 0 : e3.buttons > 0) && m3.current ? g3(d(m3.current, e3, b3.current)) : t2(false);
      }, r2 = function() {
        return t2(false);
      };
      function t2(t3) {
        var n3 = _2.current, o3 = v(m3.current), a3 = t3 ? o3.addEventListener : o3.removeEventListener;
        a3(n3 ? "touchmove" : "mousemove", e2), a3(n3 ? "touchend" : "mouseup", r2);
      }
      return [function(e3) {
        var r3 = e3.nativeEvent, n3 = m3.current;
        if (n3 && (h(r3), !function(e4, r4) {
          return r4 && !f(e4);
        }(r3, _2.current) && n3)) {
          if (f(r3)) {
            _2.current = true;
            var o3 = r3.changedTouches || [];
            o3.length && (b3.current = o3[0].identifier);
          }
          n3.focus(), g3(d(n3, r3, b3.current)), t2(true);
        }
      }, function(e3) {
        var r3 = e3.which || e3.keyCode;
        r3 < 37 || r3 > 40 || (e3.preventDefault(), p3({ left: 39 === r3 ? 0.05 : 37 === r3 ? -0.05 : 0, top: 40 === r3 ? 0.05 : 38 === r3 ? -0.05 : 0 }));
      }, t2];
    }, [p3, g3]), C2 = x2[0], E = x2[1], H = x2[2];
    return (0, import_react.useEffect)(function() {
      return H;
    }, [H]), import_react.default.createElement("div", u({}, s2, { onTouchStart: C2, onMouseDown: C2, className: "react-colorful__interactive", ref: m3, onKeyDown: E, tabIndex: 0, role: "slider" }));
  });
  var g = function(e2) {
    return e2.filter(Boolean).join(" ");
  };
  var p = function(r2) {
    var t2 = r2.color, n3 = r2.left, o2 = r2.top, a2 = void 0 === o2 ? 0.5 : o2, l2 = g(["react-colorful__pointer", r2.className]);
    return import_react.default.createElement("div", { className: l2, style: { top: 100 * a2 + "%", left: 100 * n3 + "%" } }, import_react.default.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t2 } }));
  };
  var b = function(e2, r2, t2) {
    return void 0 === r2 && (r2 = 0), void 0 === t2 && (t2 = Math.pow(10, r2)), Math.round(t2 * e2) / t2;
  };
  var _ = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) };
  var x = function(e2) {
    return L(C(e2));
  };
  var C = function(e2) {
    return "#" === e2[0] && (e2 = e2.substring(1)), e2.length < 6 ? { r: parseInt(e2[0] + e2[0], 16), g: parseInt(e2[1] + e2[1], 16), b: parseInt(e2[2] + e2[2], 16), a: 4 === e2.length ? b(parseInt(e2[3] + e2[3], 16) / 255, 2) : 1 } : { r: parseInt(e2.substring(0, 2), 16), g: parseInt(e2.substring(2, 4), 16), b: parseInt(e2.substring(4, 6), 16), a: 8 === e2.length ? b(parseInt(e2.substring(6, 8), 16) / 255, 2) : 1 };
  };
  var w = function(e2) {
    return K(I(e2));
  };
  var y = function(e2) {
    var r2 = e2.s, t2 = e2.v, n3 = e2.a, o2 = (200 - r2) * t2 / 100;
    return { h: b(e2.h), s: b(o2 > 0 && o2 < 200 ? r2 * t2 / 100 / (o2 <= 100 ? o2 : 200 - o2) * 100 : 0), l: b(o2 / 2), a: b(n3, 2) };
  };
  var q = function(e2) {
    var r2 = y(e2);
    return "hsl(" + r2.h + ", " + r2.s + "%, " + r2.l + "%)";
  };
  var I = function(e2) {
    var r2 = e2.h, t2 = e2.s, n3 = e2.v, o2 = e2.a;
    r2 = r2 / 360 * 6, t2 /= 100, n3 /= 100;
    var a2 = Math.floor(r2), l2 = n3 * (1 - t2), u2 = n3 * (1 - (r2 - a2) * t2), c4 = n3 * (1 - (1 - r2 + a2) * t2), i2 = a2 % 6;
    return { r: b(255 * [n3, u2, l2, l2, c4, n3][i2]), g: b(255 * [c4, n3, n3, u2, l2, l2][i2]), b: b(255 * [l2, l2, c4, n3, n3, u2][i2]), a: b(o2, 2) };
  };
  var D = function(e2) {
    var r2 = e2.toString(16);
    return r2.length < 2 ? "0" + r2 : r2;
  };
  var K = function(e2) {
    var r2 = e2.r, t2 = e2.g, n3 = e2.b, o2 = e2.a, a2 = o2 < 1 ? D(b(255 * o2)) : "";
    return "#" + D(r2) + D(t2) + D(n3) + a2;
  };
  var L = function(e2) {
    var r2 = e2.r, t2 = e2.g, n3 = e2.b, o2 = e2.a, a2 = Math.max(r2, t2, n3), l2 = a2 - Math.min(r2, t2, n3), u2 = l2 ? a2 === r2 ? (t2 - n3) / l2 : a2 === t2 ? 2 + (n3 - r2) / l2 : 4 + (r2 - t2) / l2 : 0;
    return { h: b(60 * (u2 < 0 ? u2 + 6 : u2)), s: b(a2 ? l2 / a2 * 100 : 0), v: b(a2 / 255 * 100), a: o2 };
  };
  var S = import_react.default.memo(function(r2) {
    var t2 = r2.hue, n3 = r2.onChange, o2 = g(["react-colorful__hue", r2.className]);
    return import_react.default.createElement("div", { className: o2 }, import_react.default.createElement(m, { onMove: function(e2) {
      n3({ h: 360 * e2.left });
    }, onKey: function(e2) {
      n3({ h: s(t2 + 360 * e2.left, 0, 360) });
    }, "aria-label": "Hue", "aria-valuenow": b(t2), "aria-valuemax": "360", "aria-valuemin": "0" }, import_react.default.createElement(p, { className: "react-colorful__hue-pointer", left: t2 / 360, color: q({ h: t2, s: 100, v: 100, a: 1 }) })));
  });
  var T = import_react.default.memo(function(r2) {
    var t2 = r2.hsva, n3 = r2.onChange, o2 = { backgroundColor: q({ h: t2.h, s: 100, v: 100, a: 1 }) };
    return import_react.default.createElement("div", { className: "react-colorful__saturation", style: o2 }, import_react.default.createElement(m, { onMove: function(e2) {
      n3({ s: 100 * e2.left, v: 100 - 100 * e2.top });
    }, onKey: function(e2) {
      n3({ s: s(t2.s + 100 * e2.left, 0, 100), v: s(t2.v - 100 * e2.top, 0, 100) });
    }, "aria-label": "Color", "aria-valuetext": "Saturation " + b(t2.s) + "%, Brightness " + b(t2.v) + "%" }, import_react.default.createElement(p, { className: "react-colorful__saturation-pointer", top: 1 - t2.v / 100, left: t2.s / 100, color: q(t2) })));
  });
  var F = function(e2, r2) {
    if (e2 === r2)
      return true;
    for (var t2 in e2)
      if (e2[t2] !== r2[t2])
        return false;
    return true;
  };
  var X = function(e2, r2) {
    return e2.toLowerCase() === r2.toLowerCase() || F(C(e2), C(r2));
  };
  function Y(e2, t2, l2) {
    var u2 = i(l2), c4 = (0, import_react.useState)(function() {
      return e2.toHsva(t2);
    }), s2 = c4[0], f2 = c4[1], v2 = (0, import_react.useRef)({ color: t2, hsva: s2 });
    (0, import_react.useEffect)(function() {
      if (!e2.equal(t2, v2.current.color)) {
        var r2 = e2.toHsva(t2);
        v2.current = { hsva: r2, color: t2 }, f2(r2);
      }
    }, [t2, e2]), (0, import_react.useEffect)(function() {
      var r2;
      F(s2, v2.current.hsva) || e2.equal(r2 = e2.fromHsva(s2), v2.current.color) || (v2.current = { hsva: s2, color: r2 }, u2(r2));
    }, [s2, e2, u2]);
    var d3 = (0, import_react.useCallback)(function(e3) {
      f2(function(r2) {
        return Object.assign({}, r2, e3);
      });
    }, []);
    return [s2, d3];
  }
  var R;
  var V = "undefined" != typeof window ? import_react.useLayoutEffect : import_react.useEffect;
  var $ = function() {
    return R || ("undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
  };
  var J = /* @__PURE__ */ new Map();
  var Q = function(e2) {
    V(function() {
      var r2 = e2.current ? e2.current.ownerDocument : document;
      if (void 0 !== r2 && !J.has(r2)) {
        var t2 = r2.createElement("style");
        t2.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, J.set(r2, t2);
        var n3 = $();
        n3 && t2.setAttribute("nonce", n3), r2.head.appendChild(t2);
      }
    }, []);
  };
  var U = function(t2) {
    var n3 = t2.className, o2 = t2.colorModel, a2 = t2.color, l2 = void 0 === a2 ? o2.defaultColor : a2, i2 = t2.onChange, s2 = c(t2, ["className", "colorModel", "color", "onChange"]), f2 = (0, import_react.useRef)(null);
    Q(f2);
    var v2 = Y(o2, l2, i2), d3 = v2[0], h2 = v2[1], m3 = g(["react-colorful", n3]);
    return import_react.default.createElement("div", u({}, s2, { ref: f2, className: m3 }), import_react.default.createElement(T, { hsva: d3, onChange: h2 }), import_react.default.createElement(S, { hue: d3.h, onChange: h2, className: "react-colorful__last-control" }));
  };
  var W = { defaultColor: "000", toHsva: x, fromHsva: function(e2) {
    return w({ h: e2.h, s: e2.s, v: e2.v, a: 1 });
  }, equal: X };
  var Z = function(r2) {
    return import_react.default.createElement(U, u({}, r2, { colorModel: W }));
  };
  var qe = /^#?([0-9A-F]{3,8})$/i;
  var ke = function(r2) {
    var t2 = r2.color, l2 = void 0 === t2 ? "" : t2, s2 = r2.onChange, f2 = r2.onBlur, v2 = r2.escape, d3 = r2.validate, h2 = r2.format, m3 = r2.process, g3 = c(r2, ["color", "onChange", "onBlur", "escape", "validate", "format", "process"]), p3 = (0, import_react.useState)(function() {
      return v2(l2);
    }), b3 = p3[0], _2 = p3[1], x2 = i(s2), C2 = i(f2), E = (0, import_react.useCallback)(function(e2) {
      var r3 = v2(e2.target.value);
      _2(r3), d3(r3) && x2(m3 ? m3(r3) : r3);
    }, [v2, m3, d3, x2]), H = (0, import_react.useCallback)(function(e2) {
      d3(e2.target.value) || _2(v2(l2)), C2(e2);
    }, [l2, v2, d3, C2]);
    return (0, import_react.useEffect)(function() {
      _2(v2(l2));
    }, [l2, v2]), import_react.default.createElement("input", u({}, g3, { value: h2 ? h2(b3) : b3, spellCheck: "false", onChange: E, onBlur: H }));
  };
  var Ie = function(e2) {
    return "#" + e2;
  };
  var Oe = function(r2) {
    var t2 = r2.prefixed, n3 = r2.alpha, o2 = c(r2, ["prefixed", "alpha"]), l2 = (0, import_react.useCallback)(function(e2) {
      return e2.replace(/([^0-9A-F]+)/gi, "").substring(0, n3 ? 8 : 6);
    }, [n3]), i2 = (0, import_react.useCallback)(function(e2) {
      return function(e3, r3) {
        var t3 = qe.exec(e3), n4 = t3 ? t3[1].length : 0;
        return 3 === n4 || 6 === n4 || !!r3 && 4 === n4 || !!r3 && 8 === n4;
      }(e2, n3);
    }, [n3]);
    return import_react.default.createElement(ke, u({}, o2, { escape: l2, format: t2 ? Ie : void 0, process: Ie, validate: i2 }));
  };

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/multiply-matrices.js
  function multiplyMatrices(A, B) {
    let m3 = A.length;
    if (!Array.isArray(A[0])) {
      A = [A];
    }
    if (!Array.isArray(B[0])) {
      B = B.map((x2) => [x2]);
    }
    let p3 = B[0].length;
    let B_cols = B[0].map((_2, i2) => B.map((x2) => x2[i2]));
    let product = A.map((row) => B_cols.map((col) => {
      let ret = 0;
      if (!Array.isArray(row)) {
        for (let c4 of col) {
          ret += row * c4;
        }
        return ret;
      }
      for (let i2 = 0; i2 < row.length; i2++) {
        ret += row[i2] * (col[i2] || 0);
      }
      return ret;
    }));
    if (m3 === 1) {
      product = product[0];
    }
    if (p3 === 1) {
      return product.map((x2) => x2[0]);
    }
    return product;
  }

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/util.js
  function isString(str) {
    return type(str) === "string";
  }
  function type(o2) {
    let str = Object.prototype.toString.call(o2);
    return (str.match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
  }
  function serializeNumber(n3, { precision, unit }) {
    if (isNone(n3)) {
      return "none";
    }
    return toPrecision(n3, precision) + (unit ?? "");
  }
  function isNone(n3) {
    return Number.isNaN(n3) || n3 instanceof Number && n3?.none;
  }
  function toPrecision(n3, precision) {
    if (n3 === 0) {
      return 0;
    }
    let integer = ~~n3;
    let digits = 0;
    if (integer && precision) {
      digits = ~~Math.log10(Math.abs(integer)) + 1;
    }
    const multiplier = 10 ** (precision - digits);
    return Math.floor(n3 * multiplier + 0.5) / multiplier;
  }
  var angleFactor = {
    deg: 1,
    grad: 0.9,
    rad: 180 / Math.PI,
    turn: 360
  };
  function parseFunction(str) {
    if (!str) {
      return;
    }
    str = str.trim();
    const isFunctionRegex = /^([a-z]+)\((.+?)\)$/i;
    const isNumberRegex = /^-?[\d.]+$/;
    const unitValueRegex = /%|deg|g?rad|turn$/;
    const singleArgument = /\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;
    let parts = str.match(isFunctionRegex);
    if (parts) {
      let args = [];
      parts[2].replace(singleArgument, ($0, rawArg) => {
        let match = rawArg.match(unitValueRegex);
        let arg = rawArg;
        if (match) {
          let unit = match[0];
          let unitlessArg = arg.slice(0, -unit.length);
          if (unit === "%") {
            arg = new Number(unitlessArg / 100);
            arg.type = "<percentage>";
          } else {
            arg = new Number(unitlessArg * angleFactor[unit]);
            arg.type = "<angle>";
            arg.unit = unit;
          }
        } else if (isNumberRegex.test(arg)) {
          arg = new Number(arg);
          arg.type = "<number>";
        } else if (arg === "none") {
          arg = new Number(NaN);
          arg.none = true;
        }
        if ($0.startsWith("/")) {
          arg = arg instanceof Number ? arg : new Number(arg);
          arg.alpha = true;
        }
        if (typeof arg === "object" && arg instanceof Number) {
          arg.raw = rawArg;
        }
        args.push(arg);
      });
      return {
        name: parts[1].toLowerCase(),
        rawName: parts[1],
        rawArgs: parts[2],
        // An argument could be (as of css-color-4):
        // a number, percentage, degrees (hue), ident (in color())
        args
      };
    }
  }
  function last(arr) {
    return arr[arr.length - 1];
  }
  function interpolate(start, end, p3) {
    if (isNaN(start)) {
      return end;
    }
    if (isNaN(end)) {
      return start;
    }
    return start + (end - start) * p3;
  }
  function interpolateInv(start, end, value) {
    return (value - start) / (end - start);
  }
  function mapRange(from, to2, value) {
    return interpolate(to2[0], to2[1], interpolateInv(from[0], from[1], value));
  }
  function parseCoordGrammar(coordGrammars) {
    return coordGrammars.map((coordGrammar2) => {
      return coordGrammar2.split("|").map((type2) => {
        type2 = type2.trim();
        let range = type2.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);
        if (range) {
          let ret = new String(range[1]);
          ret.range = [+range[2], +range[3]];
          return ret;
        }
        return type2;
      });
    });
  }
  function clamp(min, val, max) {
    return Math.max(Math.min(max, val), min);
  }
  function copySign(to2, from) {
    return Math.sign(to2) === Math.sign(from) ? to2 : -to2;
  }
  function spow(base, exp) {
    return copySign(Math.abs(base) ** exp, base);
  }
  function zdiv(n3, d3) {
    return d3 === 0 ? 0 : n3 / d3;
  }
  function bisectLeft(arr, value, lo = 0, hi = arr.length) {
    while (lo < hi) {
      const mid = lo + hi >> 1;
      if (arr[mid] < value) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
    return lo;
  }

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/hooks.js
  var Hooks = class {
    add(name, callback, first) {
      if (typeof arguments[0] != "string") {
        for (var name in arguments[0]) {
          this.add(name, arguments[0][name], arguments[1]);
        }
        return;
      }
      (Array.isArray(name) ? name : [name]).forEach(function(name2) {
        this[name2] = this[name2] || [];
        if (callback) {
          this[name2][first ? "unshift" : "push"](callback);
        }
      }, this);
    }
    run(name, env) {
      this[name] = this[name] || [];
      this[name].forEach(function(callback) {
        callback.call(env && env.context ? env.context : env, env);
      });
    }
  };
  var hooks = new Hooks();
  var hooks_default = hooks;

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/adapt.js
  var WHITES = {
    // for compatibility, the four-digit chromaticity-derived ones everyone else uses
    D50: [0.3457 / 0.3585, 1, (1 - 0.3457 - 0.3585) / 0.3585],
    D65: [0.3127 / 0.329, 1, (1 - 0.3127 - 0.329) / 0.329]
  };
  function getWhite(name) {
    if (Array.isArray(name)) {
      return name;
    }
    return WHITES[name];
  }
  function adapt(W1, W2, XYZ, options = {}) {
    W1 = getWhite(W1);
    W2 = getWhite(W2);
    if (!W1 || !W2) {
      throw new TypeError(`Missing white point to convert ${!W1 ? "from" : ""}${!W1 && !W2 ? "/" : ""}${!W2 ? "to" : ""}`);
    }
    if (W1 === W2) {
      return XYZ;
    }
    let env = { W1, W2, XYZ, options };
    hooks_default.run("chromatic-adaptation-start", env);
    if (!env.M) {
      if (env.W1 === WHITES.D65 && env.W2 === WHITES.D50) {
        env.M = [
          [1.0479297925449969, 0.022946870601609652, -0.05019226628920524],
          [0.02962780877005599, 0.9904344267538799, -0.017073799063418826],
          [-0.009243040646204504, 0.015055191490298152, 0.7518742814281371]
        ];
      } else if (env.W1 === WHITES.D50 && env.W2 === WHITES.D65) {
        env.M = [
          [0.955473421488075, -0.02309845494876471, 0.06325924320057072],
          [-0.0283697093338637, 1.0099953980813041, 0.021041441191917323],
          [0.012314014864481998, -0.020507649298898964, 1.330365926242124]
        ];
      }
    }
    hooks_default.run("chromatic-adaptation-end", env);
    if (env.M) {
      return multiplyMatrices(env.M, env.XYZ);
    } else {
      throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
    }
  }

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/defaults.js
  var defaults_default = {
    gamut_mapping: "css",
    precision: 5,
    deltaE: "76",
    // Default deltaE method
    verbose: globalThis?.process?.env?.NODE_ENV?.toLowerCase() !== "test",
    warn: function warn(msg) {
      if (this.verbose) {
        globalThis?.console?.warn?.(msg);
      }
    }
  };

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/parse.js
  var noneTypes = /* @__PURE__ */ new Set(["<number>", "<percentage>", "<angle>"]);
  function coerceCoords(space, format, name, coords) {
    let types2 = Object.entries(space.coords).map(([id, coordMeta], i2) => {
      let coordGrammar2 = format.coordGrammar[i2];
      let arg = coords[i2];
      let providedType = arg?.type;
      let type2;
      if (arg.none) {
        type2 = coordGrammar2.find((c4) => noneTypes.has(c4));
      } else {
        type2 = coordGrammar2.find((c4) => c4 == providedType);
      }
      if (!type2) {
        let coordName = coordMeta.name || id;
        throw new TypeError(`${providedType ?? arg.raw} not allowed for ${coordName} in ${name}()`);
      }
      let fromRange = type2.range;
      if (providedType === "<percentage>") {
        fromRange || (fromRange = [0, 1]);
      }
      let toRange = coordMeta.range || coordMeta.refRange;
      if (fromRange && toRange) {
        coords[i2] = mapRange(fromRange, toRange, coords[i2]);
      }
      return type2;
    });
    return types2;
  }
  function parse(str, { meta } = {}) {
    let env = { "str": String(str)?.trim() };
    hooks_default.run("parse-start", env);
    if (env.color) {
      return env.color;
    }
    env.parsed = parseFunction(env.str);
    if (env.parsed) {
      let name = env.parsed.name;
      if (name === "color") {
        let id = env.parsed.args.shift();
        let alternateId = id.startsWith("--") ? id.substring(2) : `--${id}`;
        let ids = [id, alternateId];
        let alpha = env.parsed.rawArgs.indexOf("/") > 0 ? env.parsed.args.pop() : 1;
        for (let space of ColorSpace.all) {
          let colorSpec = space.getFormat("color");
          if (colorSpec) {
            if (ids.includes(colorSpec.id) || colorSpec.ids?.filter((specId) => ids.includes(specId)).length) {
              const coords = Object.keys(space.coords).map((_2, i2) => env.parsed.args[i2] || 0);
              let types2;
              if (colorSpec.coordGrammar) {
                types2 = coerceCoords(space, colorSpec, "color", coords);
              }
              if (meta) {
                Object.assign(meta, { formatId: "color", types: types2 });
              }
              if (colorSpec.id.startsWith("--") && !id.startsWith("--")) {
                defaults_default.warn(`${space.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${colorSpec.id}) instead of color(${id}).`);
              }
              if (id.startsWith("--") && !colorSpec.id.startsWith("--")) {
                defaults_default.warn(`${space.name} is a standard space and supported in the CSS spec. Use color(${colorSpec.id}) instead of prefixed color(${id}).`);
              }
              return { spaceId: space.id, coords, alpha };
            }
          }
        }
        let didYouMean = "";
        let registryId = id in ColorSpace.registry ? id : alternateId;
        if (registryId in ColorSpace.registry) {
          let cssId = ColorSpace.registry[registryId].formats?.color?.id;
          if (cssId) {
            didYouMean = `Did you mean color(${cssId})?`;
          }
        }
        throw new TypeError(`Cannot parse color(${id}). ` + (didYouMean || "Missing a plugin?"));
      } else {
        for (let space of ColorSpace.all) {
          let format = space.getFormat(name);
          if (format && format.type === "function") {
            let alpha = 1;
            if (format.lastAlpha || last(env.parsed.args).alpha) {
              alpha = env.parsed.args.pop();
            }
            let coords = env.parsed.args;
            let types2;
            if (format.coordGrammar) {
              types2 = coerceCoords(space, format, name, coords);
            }
            if (meta) {
              Object.assign(meta, { formatId: format.name, types: types2 });
            }
            return {
              spaceId: space.id,
              coords,
              alpha
            };
          }
        }
      }
    } else {
      for (let space of ColorSpace.all) {
        for (let formatId in space.formats) {
          let format = space.formats[formatId];
          if (format.type !== "custom") {
            continue;
          }
          if (format.test && !format.test(env.str)) {
            continue;
          }
          let color = format.parse(env.str);
          if (color) {
            color.alpha ?? (color.alpha = 1);
            if (meta) {
              meta.formatId = formatId;
            }
            return color;
          }
        }
      }
    }
    throw new TypeError(`Could not parse ${str} as a color. Missing a plugin?`);
  }

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/getColor.js
  function getColor(color) {
    if (Array.isArray(color)) {
      return color.map(getColor);
    }
    if (!color) {
      throw new TypeError("Empty color reference");
    }
    if (isString(color)) {
      color = parse(color);
    }
    let space = color.space || color.spaceId;
    if (!(space instanceof ColorSpace)) {
      color.space = ColorSpace.get(space);
    }
    if (color.alpha === void 0) {
      color.alpha = 1;
    }
    return color;
  }

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/space.js
  var \u03B5 = 75e-6;
  var _ColorSpace = class _ColorSpace {
    constructor(options) {
      this.id = options.id;
      this.name = options.name;
      this.base = options.base ? _ColorSpace.get(options.base) : null;
      this.aliases = options.aliases;
      if (this.base) {
        this.fromBase = options.fromBase;
        this.toBase = options.toBase;
      }
      let coords = options.coords ?? this.base.coords;
      for (let name in coords) {
        if (!("name" in coords[name])) {
          coords[name].name = name;
        }
      }
      this.coords = coords;
      let white4 = options.white ?? this.base.white ?? "D65";
      this.white = getWhite(white4);
      this.formats = options.formats ?? {};
      for (let name in this.formats) {
        let format = this.formats[name];
        format.type || (format.type = "function");
        format.name || (format.name = name);
      }
      if (!this.formats.color?.id) {
        this.formats.color = {
          ...this.formats.color ?? {},
          id: options.cssId || this.id
        };
      }
      if (options.gamutSpace) {
        this.gamutSpace = options.gamutSpace === "self" ? this : _ColorSpace.get(options.gamutSpace);
      } else {
        if (this.isPolar) {
          this.gamutSpace = this.base;
        } else {
          this.gamutSpace = this;
        }
      }
      if (this.gamutSpace.isUnbounded) {
        this.inGamut = (coords2, options2) => {
          return true;
        };
      }
      this.referred = options.referred;
      Object.defineProperty(this, "path", {
        value: getPath(this).reverse(),
        writable: false,
        enumerable: true,
        configurable: true
      });
      hooks_default.run("colorspace-init-end", this);
    }
    inGamut(coords, { epsilon = \u03B5 } = {}) {
      if (!this.equals(this.gamutSpace)) {
        coords = this.to(this.gamutSpace, coords);
        return this.gamutSpace.inGamut(coords, { epsilon });
      }
      let coordMeta = Object.values(this.coords);
      return coords.every((c4, i2) => {
        let meta = coordMeta[i2];
        if (meta.type !== "angle" && meta.range) {
          if (Number.isNaN(c4)) {
            return true;
          }
          let [min, max] = meta.range;
          return (min === void 0 || c4 >= min - epsilon) && (max === void 0 || c4 <= max + epsilon);
        }
        return true;
      });
    }
    get isUnbounded() {
      return Object.values(this.coords).every((coord) => !("range" in coord));
    }
    get cssId() {
      return this.formats?.color?.id || this.id;
    }
    get isPolar() {
      for (let id in this.coords) {
        if (this.coords[id].type === "angle") {
          return true;
        }
      }
      return false;
    }
    getFormat(format) {
      if (typeof format === "object") {
        format = processFormat(format, this);
        return format;
      }
      let ret;
      if (format === "default") {
        ret = Object.values(this.formats)[0];
      } else {
        ret = this.formats[format];
      }
      if (ret) {
        ret = processFormat(ret, this);
        return ret;
      }
      return null;
    }
    /**
     * Check if this color space is the same as another color space reference.
     * Allows proxying color space objects and comparing color spaces with ids.
     * @param {string | ColorSpace} space ColorSpace object or id to compare to
     * @returns {boolean}
     */
    equals(space) {
      if (!space) {
        return false;
      }
      return this === space || this.id === space || this.id === space.id;
    }
    to(space, coords) {
      if (arguments.length === 1) {
        const color = getColor(space);
        [space, coords] = [color.space, color.coords];
      }
      space = _ColorSpace.get(space);
      if (this.equals(space)) {
        return coords;
      }
      coords = coords.map((c4) => Number.isNaN(c4) ? 0 : c4);
      let myPath = this.path;
      let otherPath = space.path;
      let connectionSpace, connectionSpaceIndex;
      for (let i2 = 0; i2 < myPath.length; i2++) {
        if (myPath[i2].equals(otherPath[i2])) {
          connectionSpace = myPath[i2];
          connectionSpaceIndex = i2;
        } else {
          break;
        }
      }
      if (!connectionSpace) {
        throw new Error(`Cannot convert between color spaces ${this} and ${space}: no connection space was found`);
      }
      for (let i2 = myPath.length - 1; i2 > connectionSpaceIndex; i2--) {
        coords = myPath[i2].toBase(coords);
      }
      for (let i2 = connectionSpaceIndex + 1; i2 < otherPath.length; i2++) {
        coords = otherPath[i2].fromBase(coords);
      }
      return coords;
    }
    from(space, coords) {
      if (arguments.length === 1) {
        const color = getColor(space);
        [space, coords] = [color.space, color.coords];
      }
      space = _ColorSpace.get(space);
      return space.to(this, coords);
    }
    toString() {
      return `${this.name} (${this.id})`;
    }
    getMinCoords() {
      let ret = [];
      for (let id in this.coords) {
        let meta = this.coords[id];
        let range = meta.range || meta.refRange;
        ret.push(range?.min ?? 0);
      }
      return ret;
    }
    // Returns array of unique color spaces
    static get all() {
      return [...new Set(Object.values(_ColorSpace.registry))];
    }
    static register(id, space) {
      if (arguments.length === 1) {
        space = arguments[0];
        id = space.id;
      }
      space = this.get(space);
      if (this.registry[id] && this.registry[id] !== space) {
        throw new Error(`Duplicate color space registration: '${id}'`);
      }
      this.registry[id] = space;
      if (arguments.length === 1 && space.aliases) {
        for (let alias of space.aliases) {
          this.register(alias, space);
        }
      }
      return space;
    }
    /**
     * Lookup ColorSpace object by name
     * @param {ColorSpace | string} name
     */
    static get(space, ...alternatives) {
      if (!space || space instanceof _ColorSpace) {
        return space;
      }
      let argType = type(space);
      if (argType === "string") {
        let ret = _ColorSpace.registry[space.toLowerCase()];
        if (!ret) {
          throw new TypeError(`No color space found with id = "${space}"`);
        }
        return ret;
      }
      if (alternatives.length) {
        return _ColorSpace.get(...alternatives);
      }
      throw new TypeError(`${space} is not a valid color space`);
    }
    /**
     * Get metadata about a coordinate of a color space
     *
     * @static
     * @param {Array | string} ref
     * @param {ColorSpace | string} [workingSpace]
     * @return {Object}
     */
    static resolveCoord(ref, workingSpace) {
      let coordType = type(ref);
      let space, coord;
      if (coordType === "string") {
        if (ref.includes(".")) {
          [space, coord] = ref.split(".");
        } else {
          [space, coord] = [, ref];
        }
      } else if (Array.isArray(ref)) {
        [space, coord] = ref;
      } else {
        space = ref.space;
        coord = ref.coordId;
      }
      space = _ColorSpace.get(space);
      if (!space) {
        space = workingSpace;
      }
      if (!space) {
        throw new TypeError(`Cannot resolve coordinate reference ${ref}: No color space specified and relative references are not allowed here`);
      }
      coordType = type(coord);
      if (coordType === "number" || coordType === "string" && coord >= 0) {
        let meta = Object.entries(space.coords)[coord];
        if (meta) {
          return { space, id: meta[0], index: coord, ...meta[1] };
        }
      }
      space = _ColorSpace.get(space);
      let normalizedCoord = coord.toLowerCase();
      let i2 = 0;
      for (let id in space.coords) {
        let meta = space.coords[id];
        if (id.toLowerCase() === normalizedCoord || meta.name?.toLowerCase() === normalizedCoord) {
          return { space, id, index: i2, ...meta };
        }
        i2++;
      }
      throw new TypeError(`No "${coord}" coordinate found in ${space.name}. Its coordinates are: ${Object.keys(space.coords).join(", ")}`);
    }
  };
  __publicField(_ColorSpace, "registry", {});
  __publicField(_ColorSpace, "DEFAULT_FORMAT", {
    type: "functions",
    name: "color"
  });
  var ColorSpace = _ColorSpace;
  function getPath(space) {
    let ret = [space];
    for (let s2 = space; s2 = s2.base; ) {
      ret.push(s2);
    }
    return ret;
  }
  function processFormat(format, { coords } = {}) {
    if (format.coords && !format.coordGrammar) {
      format.type || (format.type = "function");
      format.name || (format.name = "color");
      format.coordGrammar = parseCoordGrammar(format.coords);
      let coordFormats = Object.entries(coords).map(([id, coordMeta], i2) => {
        let outputType = format.coordGrammar[i2][0];
        let fromRange = coordMeta.range || coordMeta.refRange;
        let toRange = outputType.range, suffix = "";
        if (outputType == "<percentage>") {
          toRange = [0, 100];
          suffix = "%";
        } else if (outputType == "<angle>") {
          suffix = "deg";
        }
        return { fromRange, toRange, suffix };
      });
      format.serializeCoords = (coords2, precision) => {
        return coords2.map((c4, i2) => {
          let { fromRange, toRange, suffix } = coordFormats[i2];
          if (fromRange && toRange) {
            c4 = mapRange(fromRange, toRange, c4);
          }
          c4 = serializeNumber(c4, { precision, unit: suffix });
          return c4;
        });
      };
    }
    return format;
  }

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/spaces/xyz-d65.js
  var xyz_d65_default = new ColorSpace({
    id: "xyz-d65",
    name: "XYZ D65",
    coords: {
      x: { name: "X" },
      y: { name: "Y" },
      z: { name: "Z" }
    },
    white: "D65",
    formats: {
      color: {
        ids: ["xyz-d65", "xyz"]
      }
    },
    aliases: ["xyz"]
  });

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/rgbspace.js
  var RGBColorSpace = class extends ColorSpace {
    /**
     * Creates a new RGB ColorSpace.
     * If coords are not specified, they will use the default RGB coords.
     * Instead of `fromBase()` and `toBase()` functions,
     * you can specify to/from XYZ matrices and have `toBase()` and `fromBase()` automatically generated.
     * @param {*} options - Same options as {@link ColorSpace} plus:
     * @param {number[][]} options.toXYZ_M - Matrix to convert to XYZ
     * @param {number[][]} options.fromXYZ_M - Matrix to convert from XYZ
     */
    constructor(options) {
      if (!options.coords) {
        options.coords = {
          r: {
            range: [0, 1],
            name: "Red"
          },
          g: {
            range: [0, 1],
            name: "Green"
          },
          b: {
            range: [0, 1],
            name: "Blue"
          }
        };
      }
      if (!options.base) {
        options.base = xyz_d65_default;
      }
      if (options.toXYZ_M && options.fromXYZ_M) {
        options.toBase ?? (options.toBase = (rgb) => {
          let xyz = multiplyMatrices(options.toXYZ_M, rgb);
          if (this.white !== this.base.white) {
            xyz = adapt(this.white, this.base.white, xyz);
          }
          return xyz;
        });
        options.fromBase ?? (options.fromBase = (xyz) => {
          xyz = adapt(this.base.white, this.white, xyz);
          return multiplyMatrices(options.fromXYZ_M, xyz);
        });
      }
      options.referred ?? (options.referred = "display");
      super(options);
    }
  };

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/getAll.js
  function getAll(color, space) {
    color = getColor(color);
    if (!space || color.space.equals(space)) {
      return color.coords.slice();
    }
    space = ColorSpace.get(space);
    return space.from(color);
  }

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/get.js
  function get(color, prop) {
    color = getColor(color);
    let { space, index } = ColorSpace.resolveCoord(prop, color.space);
    let coords = getAll(color, space);
    return coords[index];
  }

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/setAll.js
  function setAll(color, space, coords) {
    color = getColor(color);
    space = ColorSpace.get(space);
    color.coords = space.to(color.space, coords);
    return color;
  }
  setAll.returns = "color";

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/set.js
  function set(color, prop, value) {
    color = getColor(color);
    if (arguments.length === 2 && type(arguments[1]) === "object") {
      let object = arguments[1];
      for (let p3 in object) {
        set(color, p3, object[p3]);
      }
    } else {
      if (typeof value === "function") {
        value = value(get(color, prop));
      }
      let { space, index } = ColorSpace.resolveCoord(prop, color.space);
      let coords = getAll(color, space);
      coords[index] = value;
      setAll(color, space, coords);
    }
    return color;
  }
  set.returns = "color";

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/spaces/xyz-d50.js
  var xyz_d50_default = new ColorSpace({
    id: "xyz-d50",
    name: "XYZ D50",
    white: "D50",
    base: xyz_d65_default,
    fromBase: (coords) => adapt(xyz_d65_default.white, "D50", coords),
    toBase: (coords) => adapt("D50", xyz_d65_default.white, coords)
  });

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/spaces/lab.js
  var \u03B52 = 216 / 24389;
  var \u03B53 = 24 / 116;
  var \u03BA = 24389 / 27;
  var white = WHITES.D50;
  var lab_default = new ColorSpace({
    id: "lab",
    name: "Lab",
    coords: {
      l: {
        refRange: [0, 100],
        name: "Lightness"
      },
      a: {
        refRange: [-125, 125]
      },
      b: {
        refRange: [-125, 125]
      }
    },
    // Assuming XYZ is relative to D50, convert to CIE Lab
    // from CIE standard, which now defines these as a rational fraction
    white,
    base: xyz_d50_default,
    // Convert D50-adapted XYX to Lab
    //  CIE 15.3:2004 section 8.2.1.1
    fromBase(XYZ) {
      let xyz = XYZ.map((value, i2) => value / white[i2]);
      let f2 = xyz.map((value) => value > \u03B52 ? Math.cbrt(value) : (\u03BA * value + 16) / 116);
      return [
        116 * f2[1] - 16,
        // L
        500 * (f2[0] - f2[1]),
        // a
        200 * (f2[1] - f2[2])
        // b
      ];
    },
    // Convert Lab to D50-adapted XYZ
    // Same result as CIE 15.3:2004 Appendix D although the derivation is different
    // http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
    toBase(Lab) {
      let f2 = [];
      f2[1] = (Lab[0] + 16) / 116;
      f2[0] = Lab[1] / 500 + f2[1];
      f2[2] = f2[1] - Lab[2] / 200;
      let xyz = [
        f2[0] > \u03B53 ? Math.pow(f2[0], 3) : (116 * f2[0] - 16) / \u03BA,
        Lab[0] > 8 ? Math.pow((Lab[0] + 16) / 116, 3) : Lab[0] / \u03BA,
        f2[2] > \u03B53 ? Math.pow(f2[2], 3) : (116 * f2[2] - 16) / \u03BA
      ];
      return xyz.map((value, i2) => value * white[i2]);
    },
    formats: {
      "lab": {
        coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
      }
    }
  });

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/angles.js
  function constrain(angle) {
    return (angle % 360 + 360) % 360;
  }

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/spaces/lch.js
  var lch_default = new ColorSpace({
    id: "lch",
    name: "LCH",
    coords: {
      l: {
        refRange: [0, 100],
        name: "Lightness"
      },
      c: {
        refRange: [0, 150],
        name: "Chroma"
      },
      h: {
        refRange: [0, 360],
        type: "angle",
        name: "Hue"
      }
    },
    base: lab_default,
    fromBase(Lab) {
      let [L2, a2, b3] = Lab;
      let hue;
      const \u03B56 = 0.02;
      if (Math.abs(a2) < \u03B56 && Math.abs(b3) < \u03B56) {
        hue = NaN;
      } else {
        hue = Math.atan2(b3, a2) * 180 / Math.PI;
      }
      return [
        L2,
        // L is still L
        Math.sqrt(a2 ** 2 + b3 ** 2),
        // Chroma
        constrain(hue)
        // Hue, in degrees [0 to 360)
      ];
    },
    toBase(LCH) {
      let [Lightness, Chroma, Hue] = LCH;
      if (Chroma < 0) {
        Chroma = 0;
      }
      if (isNaN(Hue)) {
        Hue = 0;
      }
      return [
        Lightness,
        // L is still L
        Chroma * Math.cos(Hue * Math.PI / 180),
        // a
        Chroma * Math.sin(Hue * Math.PI / 180)
        // b
      ];
    },
    formats: {
      "lch": {
        coords: ["<number> | <percentage>", "<number> | <percentage>", "<number> | <angle>"]
      }
    }
  });

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/deltaE/deltaE2000.js
  var Gfactor = 25 ** 7;
  var \u03C0 = Math.PI;
  var r2d = 180 / \u03C0;
  var d2r = \u03C0 / 180;
  function pow7(x2) {
    const x22 = x2 * x2;
    const x7 = x22 * x22 * x22 * x2;
    return x7;
  }
  function deltaE2000_default(color, sample, { kL = 1, kC = 1, kH = 1 } = {}) {
    [color, sample] = getColor([color, sample]);
    let [L1, a1, b1] = lab_default.from(color);
    let C1 = lch_default.from(lab_default, [L1, a1, b1])[1];
    let [L2, a2, b22] = lab_default.from(sample);
    let C2 = lch_default.from(lab_default, [L2, a2, b22])[1];
    if (C1 < 0) {
      C1 = 0;
    }
    if (C2 < 0) {
      C2 = 0;
    }
    let Cbar = (C1 + C2) / 2;
    let C7 = pow7(Cbar);
    let G = 0.5 * (1 - Math.sqrt(C7 / (C7 + Gfactor)));
    let adash1 = (1 + G) * a1;
    let adash2 = (1 + G) * a2;
    let Cdash1 = Math.sqrt(adash1 ** 2 + b1 ** 2);
    let Cdash2 = Math.sqrt(adash2 ** 2 + b22 ** 2);
    let h1 = adash1 === 0 && b1 === 0 ? 0 : Math.atan2(b1, adash1);
    let h2 = adash2 === 0 && b22 === 0 ? 0 : Math.atan2(b22, adash2);
    if (h1 < 0) {
      h1 += 2 * \u03C0;
    }
    if (h2 < 0) {
      h2 += 2 * \u03C0;
    }
    h1 *= r2d;
    h2 *= r2d;
    let \u0394L = L2 - L1;
    let \u0394C = Cdash2 - Cdash1;
    let hdiff = h2 - h1;
    let hsum = h1 + h2;
    let habs = Math.abs(hdiff);
    let \u0394h;
    if (Cdash1 * Cdash2 === 0) {
      \u0394h = 0;
    } else if (habs <= 180) {
      \u0394h = hdiff;
    } else if (hdiff > 180) {
      \u0394h = hdiff - 360;
    } else if (hdiff < -180) {
      \u0394h = hdiff + 360;
    } else {
      defaults_default.warn("the unthinkable has happened");
    }
    let \u0394H = 2 * Math.sqrt(Cdash2 * Cdash1) * Math.sin(\u0394h * d2r / 2);
    let Ldash = (L1 + L2) / 2;
    let Cdash = (Cdash1 + Cdash2) / 2;
    let Cdash7 = pow7(Cdash);
    let hdash;
    if (Cdash1 * Cdash2 === 0) {
      hdash = hsum;
    } else if (habs <= 180) {
      hdash = hsum / 2;
    } else if (hsum < 360) {
      hdash = (hsum + 360) / 2;
    } else {
      hdash = (hsum - 360) / 2;
    }
    let lsq = (Ldash - 50) ** 2;
    let SL = 1 + 0.015 * lsq / Math.sqrt(20 + lsq);
    let SC = 1 + 0.045 * Cdash;
    let T2 = 1;
    T2 -= 0.17 * Math.cos((hdash - 30) * d2r);
    T2 += 0.24 * Math.cos(2 * hdash * d2r);
    T2 += 0.32 * Math.cos((3 * hdash + 6) * d2r);
    T2 -= 0.2 * Math.cos((4 * hdash - 63) * d2r);
    let SH = 1 + 0.015 * Cdash * T2;
    let \u0394\u03B8 = 30 * Math.exp(-1 * ((hdash - 275) / 25) ** 2);
    let RC = 2 * Math.sqrt(Cdash7 / (Cdash7 + Gfactor));
    let RT = -1 * Math.sin(2 * \u0394\u03B8 * d2r) * RC;
    let dE = (\u0394L / (kL * SL)) ** 2;
    dE += (\u0394C / (kC * SC)) ** 2;
    dE += (\u0394H / (kH * SH)) ** 2;
    dE += RT * (\u0394C / (kC * SC)) * (\u0394H / (kH * SH));
    return Math.sqrt(dE);
  }

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/spaces/oklab.js
  var XYZtoLMS_M = [
    [0.819022437996703, 0.3619062600528904, -0.1288737815209879],
    [0.0329836539323885, 0.9292868615863434, 0.0361446663506424],
    [0.0481771893596242, 0.2642395317527308, 0.6335478284694309]
  ];
  var LMStoXYZ_M = [
    [1.2268798758459243, -0.5578149944602171, 0.2813910456659647],
    [-0.0405757452148008, 1.112286803280317, -0.0717110580655164],
    [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816]
  ];
  var LMStoLab_M = [
    [0.210454268309314, 0.7936177747023054, -0.0040720430116193],
    [1.9779985324311684, -2.42859224204858, 0.450593709617411],
    [0.0259040424655478, 0.7827717124575296, -0.8086757549230774]
  ];
  var LabtoLMS_M = [
    [1, 0.3963377773761749, 0.2158037573099136],
    [1, -0.1055613458156586, -0.0638541728258133],
    [1, -0.0894841775298119, -1.2914855480194092]
  ];
  var oklab_default = new ColorSpace({
    id: "oklab",
    name: "Oklab",
    coords: {
      l: {
        refRange: [0, 1],
        name: "Lightness"
      },
      a: {
        refRange: [-0.4, 0.4]
      },
      b: {
        refRange: [-0.4, 0.4]
      }
    },
    // Note that XYZ is relative to D65
    white: "D65",
    base: xyz_d65_default,
    fromBase(XYZ) {
      let LMS = multiplyMatrices(XYZtoLMS_M, XYZ);
      let LMSg = LMS.map((val) => Math.cbrt(val));
      return multiplyMatrices(LMStoLab_M, LMSg);
    },
    toBase(OKLab) {
      let LMSg = multiplyMatrices(LabtoLMS_M, OKLab);
      let LMS = LMSg.map((val) => val ** 3);
      return multiplyMatrices(LMStoXYZ_M, LMS);
    },
    formats: {
      "oklab": {
        coords: ["<percentage> | <number>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
      }
    }
  });

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/deltaE/deltaEOK.js
  function deltaEOK_default(color, sample) {
    [color, sample] = getColor([color, sample]);
    let [L1, a1, b1] = oklab_default.from(color);
    let [L2, a2, b22] = oklab_default.from(sample);
    let \u0394L = L1 - L2;
    let \u0394a = a1 - a2;
    let \u0394b = b1 - b22;
    return Math.sqrt(\u0394L ** 2 + \u0394a ** 2 + \u0394b ** 2);
  }

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/inGamut.js
  var \u03B54 = 75e-6;
  function inGamut(color, space, { epsilon = \u03B54 } = {}) {
    color = getColor(color);
    if (!space) {
      space = color.space;
    }
    space = ColorSpace.get(space);
    let coords = color.coords;
    if (space !== color.space) {
      coords = space.from(color);
    }
    return space.inGamut(coords, { epsilon });
  }

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/clone.js
  function clone(color) {
    return {
      space: color.space,
      coords: color.coords.slice(),
      alpha: color.alpha
    };
  }

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/distance.js
  function distance(color1, color2, space = "lab") {
    space = ColorSpace.get(space);
    let coords1 = space.from(color1);
    let coords2 = space.from(color2);
    return Math.sqrt(coords1.reduce((acc, c13, i2) => {
      let c23 = coords2[i2];
      if (isNaN(c13) || isNaN(c23)) {
        return acc;
      }
      return acc + (c23 - c13) ** 2;
    }, 0));
  }

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/deltaE/deltaE76.js
  function deltaE76(color, sample) {
    return distance(color, sample, "lab");
  }

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/deltaE/deltaECMC.js
  var \u03C02 = Math.PI;
  var d2r2 = \u03C02 / 180;
  function deltaECMC_default(color, sample, { l: l2 = 2, c: c4 = 1 } = {}) {
    [color, sample] = getColor([color, sample]);
    let [L1, a1, b1] = lab_default.from(color);
    let [, C1, H1] = lch_default.from(lab_default, [L1, a1, b1]);
    let [L2, a2, b22] = lab_default.from(sample);
    let C2 = lch_default.from(lab_default, [L2, a2, b22])[1];
    if (C1 < 0) {
      C1 = 0;
    }
    if (C2 < 0) {
      C2 = 0;
    }
    let \u0394L = L1 - L2;
    let \u0394C = C1 - C2;
    let \u0394a = a1 - a2;
    let \u0394b = b1 - b22;
    let H2 = \u0394a ** 2 + \u0394b ** 2 - \u0394C ** 2;
    let SL = 0.511;
    if (L1 >= 16) {
      SL = 0.040975 * L1 / (1 + 0.01765 * L1);
    }
    let SC = 0.0638 * C1 / (1 + 0.0131 * C1) + 0.638;
    let T2;
    if (Number.isNaN(H1)) {
      H1 = 0;
    }
    if (H1 >= 164 && H1 <= 345) {
      T2 = 0.56 + Math.abs(0.2 * Math.cos((H1 + 168) * d2r2));
    } else {
      T2 = 0.36 + Math.abs(0.4 * Math.cos((H1 + 35) * d2r2));
    }
    let C4 = Math.pow(C1, 4);
    let F2 = Math.sqrt(C4 / (C4 + 1900));
    let SH = SC * (F2 * T2 + 1 - F2);
    let dE = (\u0394L / (l2 * SL)) ** 2;
    dE += (\u0394C / (c4 * SC)) ** 2;
    dE += H2 / SH ** 2;
    return Math.sqrt(dE);
  }

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/spaces/xyz-abs-d65.js
  var Yw = 203;
  var xyz_abs_d65_default = new ColorSpace({
    // Absolute CIE XYZ, with a D65 whitepoint,
    // as used in most HDR colorspaces as a starting point.
    // SDR spaces are converted per BT.2048
    // so that diffuse, media white is 203 cd/m²
    id: "xyz-abs-d65",
    cssId: "--xyz-abs-d65",
    name: "Absolute XYZ D65",
    coords: {
      x: {
        refRange: [0, 9504.7],
        name: "Xa"
      },
      y: {
        refRange: [0, 1e4],
        name: "Ya"
      },
      z: {
        refRange: [0, 10888.3],
        name: "Za"
      }
    },
    base: xyz_d65_default,
    fromBase(XYZ) {
      return XYZ.map((v2) => Math.max(v2 * Yw, 0));
    },
    toBase(AbsXYZ) {
      return AbsXYZ.map((v2) => Math.max(v2 / Yw, 0));
    }
  });

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/spaces/jzazbz.js
  var b2 = 1.15;
  var g2 = 0.66;
  var n2 = 2610 / 2 ** 14;
  var ninv = 2 ** 14 / 2610;
  var c1 = 3424 / 2 ** 12;
  var c2 = 2413 / 2 ** 7;
  var c3 = 2392 / 2 ** 7;
  var p2 = 1.7 * 2523 / 2 ** 5;
  var pinv = 2 ** 5 / (1.7 * 2523);
  var d2 = -0.56;
  var d0 = 16295499532821565e-27;
  var XYZtoCone_M = [
    [0.41478972, 0.579999, 0.014648],
    [-0.20151, 1.120649, 0.0531008],
    [-0.0166008, 0.2648, 0.6684799]
  ];
  var ConetoXYZ_M = [
    [1.9242264357876067, -1.0047923125953657, 0.037651404030618],
    [0.35031676209499907, 0.7264811939316552, -0.06538442294808501],
    [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603]
  ];
  var ConetoIab_M = [
    [0.5, 0.5, 0],
    [3.524, -4.066708, 0.542708],
    [0.199076, 1.096799, -1.295875]
  ];
  var IabtoCone_M = [
    [1, 0.1386050432715393, 0.05804731615611886],
    [0.9999999999999999, -0.1386050432715393, -0.05804731615611886],
    [0.9999999999999998, -0.09601924202631895, -0.8118918960560388]
  ];
  var jzazbz_default = new ColorSpace({
    id: "jzazbz",
    name: "Jzazbz",
    coords: {
      jz: {
        refRange: [0, 1],
        name: "Jz"
      },
      az: {
        refRange: [-0.5, 0.5]
      },
      bz: {
        refRange: [-0.5, 0.5]
      }
    },
    base: xyz_abs_d65_default,
    fromBase(XYZ) {
      let [Xa, Ya, Za] = XYZ;
      let Xm = b2 * Xa - (b2 - 1) * Za;
      let Ym = g2 * Ya - (g2 - 1) * Xa;
      let LMS = multiplyMatrices(XYZtoCone_M, [Xm, Ym, Za]);
      let PQLMS = LMS.map(function(val) {
        let num = c1 + c2 * (val / 1e4) ** n2;
        let denom = 1 + c3 * (val / 1e4) ** n2;
        return (num / denom) ** p2;
      });
      let [Iz, az, bz] = multiplyMatrices(ConetoIab_M, PQLMS);
      let Jz = (1 + d2) * Iz / (1 + d2 * Iz) - d0;
      return [Jz, az, bz];
    },
    toBase(Jzazbz) {
      let [Jz, az, bz] = Jzazbz;
      let Iz = (Jz + d0) / (1 + d2 - d2 * (Jz + d0));
      let PQLMS = multiplyMatrices(IabtoCone_M, [Iz, az, bz]);
      let LMS = PQLMS.map(function(val) {
        let num = c1 - val ** pinv;
        let denom = c3 * val ** pinv - c2;
        let x2 = 1e4 * (num / denom) ** ninv;
        return x2;
      });
      let [Xm, Ym, Za] = multiplyMatrices(ConetoXYZ_M, LMS);
      let Xa = (Xm + (b2 - 1) * Za) / b2;
      let Ya = (Ym + (g2 - 1) * Xa) / g2;
      return [Xa, Ya, Za];
    },
    formats: {
      // https://drafts.csswg.org/css-color-hdr/#Jzazbz
      "color": {
        coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
      }
    }
  });

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/spaces/jzczhz.js
  var jzczhz_default = new ColorSpace({
    id: "jzczhz",
    name: "JzCzHz",
    coords: {
      jz: {
        refRange: [0, 1],
        name: "Jz"
      },
      cz: {
        refRange: [0, 1],
        name: "Chroma"
      },
      hz: {
        refRange: [0, 360],
        type: "angle",
        name: "Hue"
      }
    },
    base: jzazbz_default,
    fromBase(jzazbz) {
      let [Jz, az, bz] = jzazbz;
      let hue;
      const \u03B56 = 2e-4;
      if (Math.abs(az) < \u03B56 && Math.abs(bz) < \u03B56) {
        hue = NaN;
      } else {
        hue = Math.atan2(bz, az) * 180 / Math.PI;
      }
      return [
        Jz,
        // Jz is still Jz
        Math.sqrt(az ** 2 + bz ** 2),
        // Chroma
        constrain(hue)
        // Hue, in degrees [0 to 360)
      ];
    },
    toBase(jzczhz) {
      return [
        jzczhz[0],
        // Jz is still Jz
        jzczhz[1] * Math.cos(jzczhz[2] * Math.PI / 180),
        // az
        jzczhz[1] * Math.sin(jzczhz[2] * Math.PI / 180)
        // bz
      ];
    }
  });

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/deltaE/deltaEJz.js
  function deltaEJz_default(color, sample) {
    [color, sample] = getColor([color, sample]);
    let [Jz1, Cz1, Hz1] = jzczhz_default.from(color);
    let [Jz2, Cz2, Hz2] = jzczhz_default.from(sample);
    let \u0394J = Jz1 - Jz2;
    let \u0394C = Cz1 - Cz2;
    if (Number.isNaN(Hz1) && Number.isNaN(Hz2)) {
      Hz1 = 0;
      Hz2 = 0;
    } else if (Number.isNaN(Hz1)) {
      Hz1 = Hz2;
    } else if (Number.isNaN(Hz2)) {
      Hz2 = Hz1;
    }
    let \u0394h = Hz1 - Hz2;
    let \u0394H = 2 * Math.sqrt(Cz1 * Cz2) * Math.sin(\u0394h / 2 * (Math.PI / 180));
    return Math.sqrt(\u0394J ** 2 + \u0394C ** 2 + \u0394H ** 2);
  }

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/spaces/ictcp.js
  var c12 = 3424 / 4096;
  var c22 = 2413 / 128;
  var c32 = 2392 / 128;
  var m1 = 2610 / 16384;
  var m2 = 2523 / 32;
  var im1 = 16384 / 2610;
  var im2 = 32 / 2523;
  var XYZtoLMS_M2 = [
    [0.3592832590121217, 0.6976051147779502, -0.035891593232029],
    [-0.1920808463704993, 1.100476797037432, 0.0753748658519118],
    [0.0070797844607479, 0.0748396662186362, 0.8433265453898765]
  ];
  var LMStoIPT_M = [
    [2048 / 4096, 2048 / 4096, 0],
    [6610 / 4096, -13613 / 4096, 7003 / 4096],
    [17933 / 4096, -17390 / 4096, -543 / 4096]
  ];
  var IPTtoLMS_M = [
    [0.9999999999999998, 0.0086090370379328, 0.111029625003026],
    [0.9999999999999998, -0.0086090370379328, -0.1110296250030259],
    [0.9999999999999998, 0.5600313357106791, -0.3206271749873188]
  ];
  var LMStoXYZ_M2 = [
    [2.0701522183894223, -1.3263473389671563, 0.2066510476294053],
    [0.3647385209748072, 0.6805660249472273, -0.0453045459220347],
    [-0.0497472075358123, -0.0492609666966131, 1.1880659249923042]
  ];
  var ictcp_default = new ColorSpace({
    id: "ictcp",
    name: "ICTCP",
    // From BT.2100-2 page 7:
    // During production, signal values are expected to exceed the
    // range E′ = [0.0 : 1.0]. This provides processing headroom and avoids
    // signal degradation during cascaded processing. Such values of E′,
    // below 0.0 or exceeding 1.0, should not be clipped during production
    // and exchange.
    // Values below 0.0 should not be clipped in reference displays (even
    // though they represent “negative” light) to allow the black level of
    // the signal (LB) to be properly set using test signals known as “PLUGE”
    coords: {
      i: {
        refRange: [0, 1],
        // Constant luminance,
        name: "I"
      },
      ct: {
        refRange: [-0.5, 0.5],
        // Full BT.2020 gamut in range [-0.5, 0.5]
        name: "CT"
      },
      cp: {
        refRange: [-0.5, 0.5],
        name: "CP"
      }
    },
    base: xyz_abs_d65_default,
    fromBase(XYZ) {
      let LMS = multiplyMatrices(XYZtoLMS_M2, XYZ);
      return LMStoICtCp(LMS);
    },
    toBase(ICtCp) {
      let LMS = ICtCptoLMS(ICtCp);
      return multiplyMatrices(LMStoXYZ_M2, LMS);
    }
  });
  function LMStoICtCp(LMS) {
    let PQLMS = LMS.map(function(val) {
      let num = c12 + c22 * (val / 1e4) ** m1;
      let denom = 1 + c32 * (val / 1e4) ** m1;
      return (num / denom) ** m2;
    });
    return multiplyMatrices(LMStoIPT_M, PQLMS);
  }
  function ICtCptoLMS(ICtCp) {
    let PQLMS = multiplyMatrices(IPTtoLMS_M, ICtCp);
    let LMS = PQLMS.map(function(val) {
      let num = Math.max(val ** im2 - c12, 0);
      let denom = c22 - c32 * val ** im2;
      return 1e4 * (num / denom) ** im1;
    });
    return LMS;
  }

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/deltaE/deltaEITP.js
  function deltaEITP_default(color, sample) {
    [color, sample] = getColor([color, sample]);
    let [I1, T1, P1] = ictcp_default.from(color);
    let [I2, T2, P2] = ictcp_default.from(sample);
    return 720 * Math.sqrt((I1 - I2) ** 2 + 0.25 * (T1 - T2) ** 2 + (P1 - P2) ** 2);
  }

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/spaces/cam16.js
  var white2 = WHITES.D65;
  var adaptedCoef = 0.42;
  var adaptedCoefInv = 1 / adaptedCoef;
  var tau = 2 * Math.PI;
  var cat16 = [
    [0.401288, 0.650173, -0.051461],
    [-0.250268, 1.204414, 0.045854],
    [-2079e-6, 0.048952, 0.953127]
  ];
  var cat16Inv = [
    [1.8620678550872327, -1.0112546305316843, 0.14918677544445175],
    [0.38752654323613717, 0.6214474419314753, -0.008973985167612518],
    [-0.015841498849333856, -0.03412293802851557, 1.0499644368778496]
  ];
  var m12 = [
    [460, 451, 288],
    [460, -891, -261],
    [460, -220, -6300]
  ];
  var surroundMap = {
    dark: [0.8, 0.525, 0.8],
    dim: [0.9, 0.59, 0.9],
    average: [1, 0.69, 1]
  };
  var hueQuadMap = {
    // Red, Yellow, Green, Blue, Red
    h: [20.14, 90, 164.25, 237.53, 380.14],
    e: [0.8, 0.7, 1, 1.2, 0.8],
    H: [0, 100, 200, 300, 400]
  };
  var rad2deg = 180 / Math.PI;
  var deg2rad = Math.PI / 180;
  function adapt2(coords, fl) {
    const temp = coords.map((c4) => {
      const x2 = spow(fl * Math.abs(c4) * 0.01, adaptedCoef);
      return 400 * copySign(x2, c4) / (x2 + 27.13);
    });
    return temp;
  }
  function unadapt(adapted, fl) {
    const constant = 100 / fl * 27.13 ** adaptedCoefInv;
    return adapted.map((c4) => {
      const cabs = Math.abs(c4);
      return copySign(constant * spow(cabs / (400 - cabs), adaptedCoefInv), c4);
    });
  }
  function hueQuadrature(h2) {
    let hp = constrain(h2);
    if (hp <= hueQuadMap.h[0]) {
      hp += 360;
    }
    const i2 = bisectLeft(hueQuadMap.h, hp) - 1;
    const [hi, hii] = hueQuadMap.h.slice(i2, i2 + 2);
    const [ei, eii] = hueQuadMap.e.slice(i2, i2 + 2);
    const Hi = hueQuadMap.H[i2];
    const t2 = (hp - hi) / ei;
    return Hi + 100 * t2 / (t2 + (hii - hp) / eii);
  }
  function invHueQuadrature(H) {
    let Hp = (H % 400 + 400) % 400;
    const i2 = Math.floor(0.01 * Hp);
    Hp = Hp % 100;
    const [hi, hii] = hueQuadMap.h.slice(i2, i2 + 2);
    const [ei, eii] = hueQuadMap.e.slice(i2, i2 + 2);
    return constrain(
      (Hp * (eii * hi - ei * hii) - 100 * hi * eii) / (Hp * (eii - ei) - 100 * eii)
    );
  }
  function environment(refWhite, adaptingLuminance, backgroundLuminance, surround, discounting) {
    const env = {};
    env.discounting = discounting;
    env.refWhite = refWhite;
    env.surround = surround;
    const xyzW = refWhite.map((c4) => {
      return c4 * 100;
    });
    env.la = adaptingLuminance;
    env.yb = backgroundLuminance;
    const yw = xyzW[1];
    const rgbW = multiplyMatrices(cat16, xyzW);
    surround = surroundMap[env.surround];
    const f2 = surround[0];
    env.c = surround[1];
    env.nc = surround[2];
    const k = 1 / (5 * env.la + 1);
    const k4 = k ** 4;
    env.fl = k4 * env.la + 0.1 * (1 - k4) * (1 - k4) * Math.cbrt(5 * env.la);
    env.flRoot = env.fl ** 0.25;
    env.n = env.yb / yw;
    env.z = 1.48 + Math.sqrt(env.n);
    env.nbb = 0.725 * env.n ** -0.2;
    env.ncb = env.nbb;
    const d3 = discounting ? 1 : Math.max(
      Math.min(f2 * (1 - 1 / 3.6 * Math.exp((-env.la - 42) / 92)), 1),
      0
    );
    env.dRgb = rgbW.map((c4) => {
      return interpolate(1, yw / c4, d3);
    });
    env.dRgbInv = env.dRgb.map((c4) => {
      return 1 / c4;
    });
    const rgbCW = rgbW.map((c4, i2) => {
      return c4 * env.dRgb[i2];
    });
    const rgbAW = adapt2(rgbCW, env.fl);
    env.aW = env.nbb * (2 * rgbAW[0] + rgbAW[1] + 0.05 * rgbAW[2]);
    return env;
  }
  var viewingConditions = environment(
    white2,
    64 / Math.PI * 0.2,
    20,
    "average",
    false
  );
  function fromCam16(cam16, env) {
    if (!(cam16.J !== void 0 ^ cam16.Q !== void 0)) {
      throw new Error("Conversion requires one and only one: 'J' or 'Q'");
    }
    if (!(cam16.C !== void 0 ^ cam16.M !== void 0 ^ cam16.s !== void 0)) {
      throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");
    }
    if (!(cam16.h !== void 0 ^ cam16.H !== void 0)) {
      throw new Error("Conversion requires one and only one: 'h' or 'H'");
    }
    if (cam16.J === 0 || cam16.Q === 0) {
      return [0, 0, 0];
    }
    let hRad = 0;
    if (cam16.h !== void 0) {
      hRad = constrain(cam16.h) * deg2rad;
    } else {
      hRad = invHueQuadrature(cam16.H) * deg2rad;
    }
    const cosh = Math.cos(hRad);
    const sinh = Math.sin(hRad);
    let Jroot = 0;
    if (cam16.J !== void 0) {
      Jroot = spow(cam16.J, 1 / 2) * 0.1;
    } else if (cam16.Q !== void 0) {
      Jroot = 0.25 * env.c * cam16.Q / ((env.aW + 4) * env.flRoot);
    }
    let alpha = 0;
    if (cam16.C !== void 0) {
      alpha = cam16.C / Jroot;
    } else if (cam16.M !== void 0) {
      alpha = cam16.M / env.flRoot / Jroot;
    } else if (cam16.s !== void 0) {
      alpha = 4e-4 * cam16.s ** 2 * (env.aW + 4) / env.c;
    }
    const t2 = spow(
      alpha * Math.pow(1.64 - Math.pow(0.29, env.n), -0.73),
      10 / 9
    );
    const et = 0.25 * (Math.cos(hRad + 2) + 3.8);
    const A = env.aW * spow(Jroot, 2 / env.c / env.z);
    const p1 = 5e4 / 13 * env.nc * env.ncb * et;
    const p22 = A / env.nbb;
    const r2 = 23 * (p22 + 0.305) * zdiv(t2, 23 * p1 + t2 * (11 * cosh + 108 * sinh));
    const a2 = r2 * cosh;
    const b3 = r2 * sinh;
    const rgb_c = unadapt(
      multiplyMatrices(m12, [p22, a2, b3]).map((c4) => {
        return c4 * 1 / 1403;
      }),
      env.fl
    );
    return multiplyMatrices(
      cat16Inv,
      rgb_c.map((c4, i2) => {
        return c4 * env.dRgbInv[i2];
      })
    ).map((c4) => {
      return c4 / 100;
    });
  }
  function toCam16(xyzd65, env) {
    const xyz100 = xyzd65.map((c4) => {
      return c4 * 100;
    });
    const rgbA = adapt2(
      multiplyMatrices(cat16, xyz100).map((c4, i2) => {
        return c4 * env.dRgb[i2];
      }),
      env.fl
    );
    const a2 = rgbA[0] + (-12 * rgbA[1] + rgbA[2]) / 11;
    const b3 = (rgbA[0] + rgbA[1] - 2 * rgbA[2]) / 9;
    const hRad = (Math.atan2(b3, a2) % tau + tau) % tau;
    const et = 0.25 * (Math.cos(hRad + 2) + 3.8);
    const t2 = 5e4 / 13 * env.nc * env.ncb * zdiv(
      et * Math.sqrt(a2 ** 2 + b3 ** 2),
      rgbA[0] + rgbA[1] + 1.05 * rgbA[2] + 0.305
    );
    const alpha = spow(t2, 0.9) * Math.pow(1.64 - Math.pow(0.29, env.n), 0.73);
    const A = env.nbb * (2 * rgbA[0] + rgbA[1] + 0.05 * rgbA[2]);
    const Jroot = spow(A / env.aW, 0.5 * env.c * env.z);
    const J2 = 100 * spow(Jroot, 2);
    const Q2 = 4 / env.c * Jroot * (env.aW + 4) * env.flRoot;
    const C2 = alpha * Jroot;
    const M = C2 * env.flRoot;
    const h2 = constrain(hRad * rad2deg);
    const H = hueQuadrature(h2);
    const s2 = 50 * spow(env.c * alpha / (env.aW + 4), 1 / 2);
    return { J: J2, C: C2, h: h2, s: s2, Q: Q2, M, H };
  }
  var cam16_default = new ColorSpace({
    id: "cam16-jmh",
    cssId: "--cam16-jmh",
    name: "CAM16-JMh",
    coords: {
      j: {
        refRange: [0, 100],
        name: "J"
      },
      m: {
        refRange: [0, 105],
        name: "Colorfulness"
      },
      h: {
        refRange: [0, 360],
        type: "angle",
        name: "Hue"
      }
    },
    base: xyz_d65_default,
    fromBase(xyz) {
      const cam16 = toCam16(xyz, viewingConditions);
      return [cam16.J, cam16.M, cam16.h];
    },
    toBase(cam16) {
      return fromCam16(
        { J: cam16[0], M: cam16[1], h: cam16[2] },
        viewingConditions
      );
    }
  });

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/spaces/hct.js
  var white3 = WHITES.D65;
  var \u03B55 = 216 / 24389;
  var \u03BA2 = 24389 / 27;
  function toLstar(y2) {
    const fy = y2 > \u03B55 ? Math.cbrt(y2) : (\u03BA2 * y2 + 16) / 116;
    return 116 * fy - 16;
  }
  function fromLstar(lstar) {
    return lstar > 8 ? Math.pow((lstar + 16) / 116, 3) : lstar / \u03BA2;
  }
  function fromHct(coords, env) {
    let [h2, c4, t2] = coords;
    let xyz = [];
    let j = 0;
    if (t2 === 0) {
      return [0, 0, 0];
    }
    let y2 = fromLstar(t2);
    if (t2 > 0) {
      j = 0.00379058511492914 * t2 ** 2 + 0.608983189401032 * t2 + 0.9155088574762233;
    } else {
      j = 9514440756550361e-21 * t2 ** 2 + 0.08693057439788597 * t2 - 21.928975842194614;
    }
    const threshold = 2e-12;
    const max_attempts = 15;
    let attempt = 0;
    let last2 = Infinity;
    let best = j;
    while (attempt <= max_attempts) {
      xyz = fromCam16({ J: j, C: c4, h: h2 }, env);
      const delta = Math.abs(xyz[1] - y2);
      if (delta < last2) {
        if (delta <= threshold) {
          return xyz;
        }
        best = j;
        last2 = delta;
      }
      j = j - (xyz[1] - y2) * j / (2 * xyz[1]);
      attempt += 1;
    }
    return fromCam16({ J: j, C: c4, h: h2 }, env);
  }
  function toHct(xyz, env) {
    const t2 = toLstar(xyz[1]);
    if (t2 === 0) {
      return [0, 0, 0];
    }
    const cam16 = toCam16(xyz, viewingConditions2);
    return [constrain(cam16.h), cam16.C, t2];
  }
  var viewingConditions2 = environment(
    white3,
    200 / Math.PI * fromLstar(50),
    fromLstar(50) * 100,
    "average",
    false
  );
  var hct_default = new ColorSpace({
    id: "hct",
    name: "HCT",
    coords: {
      h: {
        refRange: [0, 360],
        type: "angle",
        name: "Hue"
      },
      c: {
        refRange: [0, 145],
        name: "Colorfulness"
      },
      t: {
        refRange: [0, 100],
        name: "Tone"
      }
    },
    base: xyz_d65_default,
    fromBase(xyz) {
      return toHct(xyz, viewingConditions2);
    },
    toBase(hct) {
      return fromHct(hct, viewingConditions2);
    },
    formats: {
      color: {
        id: "--hct",
        coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
      }
    }
  });

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/deltaE/deltaEHCT.js
  var rad2deg2 = 180 / Math.PI;
  var deg2rad2 = Math.PI / 180;
  var ucsCoeff = [1, 7e-3, 0.0228];
  function convertUcsAb(coords) {
    if (coords[1] < 0) {
      coords = hct_default.fromBase(hct_default.toBase(coords));
    }
    const M = Math.log(Math.max(1 + ucsCoeff[2] * coords[1] * viewingConditions2.flRoot, 1)) / ucsCoeff[2];
    const hrad = coords[0] * deg2rad2;
    const a2 = M * Math.cos(hrad);
    const b3 = M * Math.sin(hrad);
    return [coords[2], a2, b3];
  }
  function deltaEHCT_default(color, sample) {
    [color, sample] = getColor([color, sample]);
    let [t1, a1, b1] = convertUcsAb(hct_default.from(color));
    let [t2, a2, b22] = convertUcsAb(hct_default.from(sample));
    return Math.sqrt((t1 - t2) ** 2 + (a1 - a2) ** 2 + (b1 - b22) ** 2);
  }

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/deltaE/index.js
  var deltaE_default = {
    deltaE76,
    deltaECMC: deltaECMC_default,
    deltaE2000: deltaE2000_default,
    deltaEJz: deltaEJz_default,
    deltaEITP: deltaEITP_default,
    deltaEOK: deltaEOK_default,
    deltaEHCT: deltaEHCT_default
  };

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/toGamut.js
  function calcEpsilon(jnd) {
    const order = !jnd ? 0 : Math.floor(Math.log10(Math.abs(jnd)));
    return Math.max(parseFloat(`1e${order - 2}`), 1e-6);
  }
  var GMAPPRESET = {
    "hct": {
      method: "hct.c",
      jnd: 2,
      deltaEMethod: "hct",
      blackWhiteClamp: {}
    },
    "hct-tonal": {
      method: "hct.c",
      jnd: 0,
      deltaEMethod: "hct",
      blackWhiteClamp: { channel: "hct.t", min: 0, max: 100 }
    }
  };
  function toGamut(color, {
    method = defaults_default.gamut_mapping,
    space = void 0,
    deltaEMethod = "",
    jnd = 2,
    blackWhiteClamp = {}
  } = {}) {
    color = getColor(color);
    if (isString(arguments[1])) {
      space = arguments[1];
    } else if (!space) {
      space = color.space;
    }
    space = ColorSpace.get(space);
    if (inGamut(color, space, { epsilon: 0 })) {
      return color;
    }
    let spaceColor;
    if (method === "css") {
      spaceColor = toGamutCSS(color, { space });
    } else {
      if (method !== "clip" && !inGamut(color, space)) {
        if (Object.prototype.hasOwnProperty.call(GMAPPRESET, method)) {
          ({ method, jnd, deltaEMethod, blackWhiteClamp } = GMAPPRESET[method]);
        }
        let de = deltaE2000_default;
        if (deltaEMethod !== "") {
          for (let m3 in deltaE_default) {
            if ("deltae" + deltaEMethod.toLowerCase() === m3.toLowerCase()) {
              de = deltaE_default[m3];
              break;
            }
          }
        }
        let clipped = toGamut(to(color, space), { method: "clip", space });
        if (de(color, clipped) > jnd) {
          if (Object.keys(blackWhiteClamp).length === 3) {
            let channelMeta = ColorSpace.resolveCoord(blackWhiteClamp.channel);
            let channel = get(to(color, channelMeta.space), channelMeta.id);
            if (isNone(channel)) {
              channel = 0;
            }
            if (channel >= blackWhiteClamp.max) {
              return to({ space: "xyz-d65", coords: WHITES["D65"] }, color.space);
            } else if (channel <= blackWhiteClamp.min) {
              return to({ space: "xyz-d65", coords: [0, 0, 0] }, color.space);
            }
          }
          let coordMeta = ColorSpace.resolveCoord(method);
          let mapSpace = coordMeta.space;
          let coordId = coordMeta.id;
          let mappedColor = to(color, mapSpace);
          mappedColor.coords.forEach((c4, i2) => {
            if (isNone(c4)) {
              mappedColor.coords[i2] = 0;
            }
          });
          let bounds = coordMeta.range || coordMeta.refRange;
          let min = bounds[0];
          let \u03B56 = calcEpsilon(jnd);
          let low = min;
          let high = get(mappedColor, coordId);
          while (high - low > \u03B56) {
            let clipped2 = clone(mappedColor);
            clipped2 = toGamut(clipped2, { space, method: "clip" });
            let deltaE = de(mappedColor, clipped2);
            if (deltaE - jnd < \u03B56) {
              low = get(mappedColor, coordId);
            } else {
              high = get(mappedColor, coordId);
            }
            set(mappedColor, coordId, (low + high) / 2);
          }
          spaceColor = to(mappedColor, space);
        } else {
          spaceColor = clipped;
        }
      } else {
        spaceColor = to(color, space);
      }
      if (method === "clip" || !inGamut(spaceColor, space, { epsilon: 0 })) {
        let bounds = Object.values(space.coords).map((c4) => c4.range || []);
        spaceColor.coords = spaceColor.coords.map((c4, i2) => {
          let [min, max] = bounds[i2];
          if (min !== void 0) {
            c4 = Math.max(min, c4);
          }
          if (max !== void 0) {
            c4 = Math.min(c4, max);
          }
          return c4;
        });
      }
    }
    if (space !== color.space) {
      spaceColor = to(spaceColor, color.space);
    }
    color.coords = spaceColor.coords;
    return color;
  }
  toGamut.returns = "color";
  var COLORS = {
    WHITE: { space: oklab_default, coords: [1, 0, 0] },
    BLACK: { space: oklab_default, coords: [0, 0, 0] }
  };
  function toGamutCSS(origin, { space } = {}) {
    const JND = 0.02;
    const \u03B56 = 1e-4;
    origin = getColor(origin);
    if (!space) {
      space = origin.space;
    }
    space = ColorSpace.get(space);
    const oklchSpace = ColorSpace.get("oklch");
    if (space.isUnbounded) {
      return to(origin, space);
    }
    const origin_OKLCH = to(origin, oklchSpace);
    let L2 = origin_OKLCH.coords[0];
    if (L2 >= 1) {
      const white4 = to(COLORS.WHITE, space);
      white4.alpha = origin.alpha;
      return to(white4, space);
    }
    if (L2 <= 0) {
      const black = to(COLORS.BLACK, space);
      black.alpha = origin.alpha;
      return to(black, space);
    }
    if (inGamut(origin_OKLCH, space, { epsilon: 0 })) {
      return to(origin_OKLCH, space);
    }
    function clip(_color) {
      const destColor = to(_color, space);
      const spaceCoords = Object.values(space.coords);
      destColor.coords = destColor.coords.map((coord, index) => {
        if ("range" in spaceCoords[index]) {
          const [min2, max2] = spaceCoords[index].range;
          return clamp(min2, coord, max2);
        }
        return coord;
      });
      return destColor;
    }
    let min = 0;
    let max = origin_OKLCH.coords[1];
    let min_inGamut = true;
    let current = clone(origin_OKLCH);
    let clipped = clip(current);
    let E = deltaEOK_default(clipped, current);
    if (E < JND) {
      return clipped;
    }
    while (max - min > \u03B56) {
      const chroma = (min + max) / 2;
      current.coords[1] = chroma;
      if (min_inGamut && inGamut(current, space, { epsilon: 0 })) {
        min = chroma;
      } else {
        clipped = clip(current);
        E = deltaEOK_default(clipped, current);
        if (E < JND) {
          if (JND - E < \u03B56) {
            break;
          } else {
            min_inGamut = false;
            min = chroma;
          }
        } else {
          max = chroma;
        }
      }
    }
    return clipped;
  }

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/to.js
  function to(color, space, { inGamut: inGamut2 } = {}) {
    color = getColor(color);
    space = ColorSpace.get(space);
    let coords = space.from(color);
    let ret = { space, coords, alpha: color.alpha };
    if (inGamut2) {
      ret = toGamut(ret, inGamut2 === true ? void 0 : inGamut2);
    }
    return ret;
  }
  to.returns = "color";

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/serialize.js
  function serialize(color, {
    precision = defaults_default.precision,
    format = "default",
    inGamut: inGamut2 = true,
    ...customOptions
  } = {}) {
    let ret;
    color = getColor(color);
    let formatId = format;
    format = color.space.getFormat(format) ?? color.space.getFormat("default") ?? ColorSpace.DEFAULT_FORMAT;
    let coords = color.coords.slice();
    inGamut2 || (inGamut2 = format.toGamut);
    if (inGamut2 && !inGamut(color)) {
      coords = toGamut(clone(color), inGamut2 === true ? void 0 : inGamut2).coords;
    }
    if (format.type === "custom") {
      customOptions.precision = precision;
      if (format.serialize) {
        ret = format.serialize(coords, color.alpha, customOptions);
      } else {
        throw new TypeError(`format ${formatId} can only be used to parse colors, not for serialization`);
      }
    } else {
      let name = format.name || "color";
      if (format.serializeCoords) {
        coords = format.serializeCoords(coords, precision);
      } else {
        if (precision !== null) {
          coords = coords.map((c4) => {
            return serializeNumber(c4, { precision });
          });
        }
      }
      let args = [...coords];
      if (name === "color") {
        let cssId = format.id || format.ids?.[0] || color.space.id;
        args.unshift(cssId);
      }
      let alpha = color.alpha;
      if (precision !== null) {
        alpha = serializeNumber(alpha, { precision });
      }
      let strAlpha = color.alpha >= 1 || format.noAlpha ? "" : `${format.commas ? "," : " /"} ${alpha}`;
      ret = `${name}(${args.join(format.commas ? ", " : " ")}${strAlpha})`;
    }
    return ret;
  }

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/spaces/srgb-linear.js
  var toXYZ_M = [
    [0.41239079926595934, 0.357584339383878, 0.1804807884018343],
    [0.21263900587151027, 0.715168678767756, 0.07219231536073371],
    [0.01933081871559182, 0.11919477979462598, 0.9505321522496607]
  ];
  var fromXYZ_M = [
    [3.2409699419045226, -1.537383177570094, -0.4986107602930034],
    [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559],
    [0.05563007969699366, -0.20397695888897652, 1.0569715142428786]
  ];
  var srgb_linear_default = new RGBColorSpace({
    id: "srgb-linear",
    name: "Linear sRGB",
    white: "D65",
    toXYZ_M,
    fromXYZ_M
  });

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/keywords.js
  var keywords_default = {
    "aliceblue": [240 / 255, 248 / 255, 1],
    "antiquewhite": [250 / 255, 235 / 255, 215 / 255],
    "aqua": [0, 1, 1],
    "aquamarine": [127 / 255, 1, 212 / 255],
    "azure": [240 / 255, 1, 1],
    "beige": [245 / 255, 245 / 255, 220 / 255],
    "bisque": [1, 228 / 255, 196 / 255],
    "black": [0, 0, 0],
    "blanchedalmond": [1, 235 / 255, 205 / 255],
    "blue": [0, 0, 1],
    "blueviolet": [138 / 255, 43 / 255, 226 / 255],
    "brown": [165 / 255, 42 / 255, 42 / 255],
    "burlywood": [222 / 255, 184 / 255, 135 / 255],
    "cadetblue": [95 / 255, 158 / 255, 160 / 255],
    "chartreuse": [127 / 255, 1, 0],
    "chocolate": [210 / 255, 105 / 255, 30 / 255],
    "coral": [1, 127 / 255, 80 / 255],
    "cornflowerblue": [100 / 255, 149 / 255, 237 / 255],
    "cornsilk": [1, 248 / 255, 220 / 255],
    "crimson": [220 / 255, 20 / 255, 60 / 255],
    "cyan": [0, 1, 1],
    "darkblue": [0, 0, 139 / 255],
    "darkcyan": [0, 139 / 255, 139 / 255],
    "darkgoldenrod": [184 / 255, 134 / 255, 11 / 255],
    "darkgray": [169 / 255, 169 / 255, 169 / 255],
    "darkgreen": [0, 100 / 255, 0],
    "darkgrey": [169 / 255, 169 / 255, 169 / 255],
    "darkkhaki": [189 / 255, 183 / 255, 107 / 255],
    "darkmagenta": [139 / 255, 0, 139 / 255],
    "darkolivegreen": [85 / 255, 107 / 255, 47 / 255],
    "darkorange": [1, 140 / 255, 0],
    "darkorchid": [153 / 255, 50 / 255, 204 / 255],
    "darkred": [139 / 255, 0, 0],
    "darksalmon": [233 / 255, 150 / 255, 122 / 255],
    "darkseagreen": [143 / 255, 188 / 255, 143 / 255],
    "darkslateblue": [72 / 255, 61 / 255, 139 / 255],
    "darkslategray": [47 / 255, 79 / 255, 79 / 255],
    "darkslategrey": [47 / 255, 79 / 255, 79 / 255],
    "darkturquoise": [0, 206 / 255, 209 / 255],
    "darkviolet": [148 / 255, 0, 211 / 255],
    "deeppink": [1, 20 / 255, 147 / 255],
    "deepskyblue": [0, 191 / 255, 1],
    "dimgray": [105 / 255, 105 / 255, 105 / 255],
    "dimgrey": [105 / 255, 105 / 255, 105 / 255],
    "dodgerblue": [30 / 255, 144 / 255, 1],
    "firebrick": [178 / 255, 34 / 255, 34 / 255],
    "floralwhite": [1, 250 / 255, 240 / 255],
    "forestgreen": [34 / 255, 139 / 255, 34 / 255],
    "fuchsia": [1, 0, 1],
    "gainsboro": [220 / 255, 220 / 255, 220 / 255],
    "ghostwhite": [248 / 255, 248 / 255, 1],
    "gold": [1, 215 / 255, 0],
    "goldenrod": [218 / 255, 165 / 255, 32 / 255],
    "gray": [128 / 255, 128 / 255, 128 / 255],
    "green": [0, 128 / 255, 0],
    "greenyellow": [173 / 255, 1, 47 / 255],
    "grey": [128 / 255, 128 / 255, 128 / 255],
    "honeydew": [240 / 255, 1, 240 / 255],
    "hotpink": [1, 105 / 255, 180 / 255],
    "indianred": [205 / 255, 92 / 255, 92 / 255],
    "indigo": [75 / 255, 0, 130 / 255],
    "ivory": [1, 1, 240 / 255],
    "khaki": [240 / 255, 230 / 255, 140 / 255],
    "lavender": [230 / 255, 230 / 255, 250 / 255],
    "lavenderblush": [1, 240 / 255, 245 / 255],
    "lawngreen": [124 / 255, 252 / 255, 0],
    "lemonchiffon": [1, 250 / 255, 205 / 255],
    "lightblue": [173 / 255, 216 / 255, 230 / 255],
    "lightcoral": [240 / 255, 128 / 255, 128 / 255],
    "lightcyan": [224 / 255, 1, 1],
    "lightgoldenrodyellow": [250 / 255, 250 / 255, 210 / 255],
    "lightgray": [211 / 255, 211 / 255, 211 / 255],
    "lightgreen": [144 / 255, 238 / 255, 144 / 255],
    "lightgrey": [211 / 255, 211 / 255, 211 / 255],
    "lightpink": [1, 182 / 255, 193 / 255],
    "lightsalmon": [1, 160 / 255, 122 / 255],
    "lightseagreen": [32 / 255, 178 / 255, 170 / 255],
    "lightskyblue": [135 / 255, 206 / 255, 250 / 255],
    "lightslategray": [119 / 255, 136 / 255, 153 / 255],
    "lightslategrey": [119 / 255, 136 / 255, 153 / 255],
    "lightsteelblue": [176 / 255, 196 / 255, 222 / 255],
    "lightyellow": [1, 1, 224 / 255],
    "lime": [0, 1, 0],
    "limegreen": [50 / 255, 205 / 255, 50 / 255],
    "linen": [250 / 255, 240 / 255, 230 / 255],
    "magenta": [1, 0, 1],
    "maroon": [128 / 255, 0, 0],
    "mediumaquamarine": [102 / 255, 205 / 255, 170 / 255],
    "mediumblue": [0, 0, 205 / 255],
    "mediumorchid": [186 / 255, 85 / 255, 211 / 255],
    "mediumpurple": [147 / 255, 112 / 255, 219 / 255],
    "mediumseagreen": [60 / 255, 179 / 255, 113 / 255],
    "mediumslateblue": [123 / 255, 104 / 255, 238 / 255],
    "mediumspringgreen": [0, 250 / 255, 154 / 255],
    "mediumturquoise": [72 / 255, 209 / 255, 204 / 255],
    "mediumvioletred": [199 / 255, 21 / 255, 133 / 255],
    "midnightblue": [25 / 255, 25 / 255, 112 / 255],
    "mintcream": [245 / 255, 1, 250 / 255],
    "mistyrose": [1, 228 / 255, 225 / 255],
    "moccasin": [1, 228 / 255, 181 / 255],
    "navajowhite": [1, 222 / 255, 173 / 255],
    "navy": [0, 0, 128 / 255],
    "oldlace": [253 / 255, 245 / 255, 230 / 255],
    "olive": [128 / 255, 128 / 255, 0],
    "olivedrab": [107 / 255, 142 / 255, 35 / 255],
    "orange": [1, 165 / 255, 0],
    "orangered": [1, 69 / 255, 0],
    "orchid": [218 / 255, 112 / 255, 214 / 255],
    "palegoldenrod": [238 / 255, 232 / 255, 170 / 255],
    "palegreen": [152 / 255, 251 / 255, 152 / 255],
    "paleturquoise": [175 / 255, 238 / 255, 238 / 255],
    "palevioletred": [219 / 255, 112 / 255, 147 / 255],
    "papayawhip": [1, 239 / 255, 213 / 255],
    "peachpuff": [1, 218 / 255, 185 / 255],
    "peru": [205 / 255, 133 / 255, 63 / 255],
    "pink": [1, 192 / 255, 203 / 255],
    "plum": [221 / 255, 160 / 255, 221 / 255],
    "powderblue": [176 / 255, 224 / 255, 230 / 255],
    "purple": [128 / 255, 0, 128 / 255],
    "rebeccapurple": [102 / 255, 51 / 255, 153 / 255],
    "red": [1, 0, 0],
    "rosybrown": [188 / 255, 143 / 255, 143 / 255],
    "royalblue": [65 / 255, 105 / 255, 225 / 255],
    "saddlebrown": [139 / 255, 69 / 255, 19 / 255],
    "salmon": [250 / 255, 128 / 255, 114 / 255],
    "sandybrown": [244 / 255, 164 / 255, 96 / 255],
    "seagreen": [46 / 255, 139 / 255, 87 / 255],
    "seashell": [1, 245 / 255, 238 / 255],
    "sienna": [160 / 255, 82 / 255, 45 / 255],
    "silver": [192 / 255, 192 / 255, 192 / 255],
    "skyblue": [135 / 255, 206 / 255, 235 / 255],
    "slateblue": [106 / 255, 90 / 255, 205 / 255],
    "slategray": [112 / 255, 128 / 255, 144 / 255],
    "slategrey": [112 / 255, 128 / 255, 144 / 255],
    "snow": [1, 250 / 255, 250 / 255],
    "springgreen": [0, 1, 127 / 255],
    "steelblue": [70 / 255, 130 / 255, 180 / 255],
    "tan": [210 / 255, 180 / 255, 140 / 255],
    "teal": [0, 128 / 255, 128 / 255],
    "thistle": [216 / 255, 191 / 255, 216 / 255],
    "tomato": [1, 99 / 255, 71 / 255],
    "turquoise": [64 / 255, 224 / 255, 208 / 255],
    "violet": [238 / 255, 130 / 255, 238 / 255],
    "wheat": [245 / 255, 222 / 255, 179 / 255],
    "white": [1, 1, 1],
    "whitesmoke": [245 / 255, 245 / 255, 245 / 255],
    "yellow": [1, 1, 0],
    "yellowgreen": [154 / 255, 205 / 255, 50 / 255]
  };

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/spaces/srgb.js
  var coordGrammar = Array(3).fill("<percentage> | <number>[0, 255]");
  var coordGrammarNumber = Array(3).fill("<number>[0, 255]");
  var srgb_default = new RGBColorSpace({
    id: "srgb",
    name: "sRGB",
    base: srgb_linear_default,
    fromBase: (rgb) => {
      return rgb.map((val) => {
        let sign = val < 0 ? -1 : 1;
        let abs = val * sign;
        if (abs > 31308e-7) {
          return sign * (1.055 * abs ** (1 / 2.4) - 0.055);
        }
        return 12.92 * val;
      });
    },
    toBase: (rgb) => {
      return rgb.map((val) => {
        let sign = val < 0 ? -1 : 1;
        let abs = val * sign;
        if (abs <= 0.04045) {
          return val / 12.92;
        }
        return sign * ((abs + 0.055) / 1.055) ** 2.4;
      });
    },
    formats: {
      "rgb": {
        coords: coordGrammar
      },
      "rgb_number": {
        name: "rgb",
        commas: true,
        coords: coordGrammarNumber,
        noAlpha: true
      },
      "color": {
        /* use defaults */
      },
      "rgba": {
        coords: coordGrammar,
        commas: true,
        lastAlpha: true
      },
      "rgba_number": {
        name: "rgba",
        commas: true,
        coords: coordGrammarNumber
      },
      "hex": {
        type: "custom",
        toGamut: true,
        test: (str) => /^#([a-f0-9]{3,4}){1,2}$/i.test(str),
        parse(str) {
          if (str.length <= 5) {
            str = str.replace(/[a-f0-9]/gi, "$&$&");
          }
          let rgba = [];
          str.replace(/[a-f0-9]{2}/gi, (component) => {
            rgba.push(parseInt(component, 16) / 255);
          });
          return {
            spaceId: "srgb",
            coords: rgba.slice(0, 3),
            alpha: rgba.slice(3)[0]
          };
        },
        serialize: (coords, alpha, {
          collapse = true
          // collapse to 3-4 digit hex when possible?
        } = {}) => {
          if (alpha < 1) {
            coords.push(alpha);
          }
          coords = coords.map((c4) => Math.round(c4 * 255));
          let collapsible = collapse && coords.every((c4) => c4 % 17 === 0);
          let hex = coords.map((c4) => {
            if (collapsible) {
              return (c4 / 17).toString(16);
            }
            return c4.toString(16).padStart(2, "0");
          }).join("");
          return "#" + hex;
        }
      },
      "keyword": {
        type: "custom",
        test: (str) => /^[a-z]+$/i.test(str),
        parse(str) {
          str = str.toLowerCase();
          let ret = { spaceId: "srgb", coords: null, alpha: 1 };
          if (str === "transparent") {
            ret.coords = keywords_default.black;
            ret.alpha = 0;
          } else {
            ret.coords = keywords_default[str];
          }
          if (ret.coords) {
            return ret;
          }
        }
      }
    }
  });

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/spaces/hsl.js
  var hsl_default = new ColorSpace({
    id: "hsl",
    name: "HSL",
    coords: {
      h: {
        refRange: [0, 360],
        type: "angle",
        name: "Hue"
      },
      s: {
        range: [0, 100],
        name: "Saturation"
      },
      l: {
        range: [0, 100],
        name: "Lightness"
      }
    },
    base: srgb_default,
    // Adapted from https://drafts.csswg.org/css-color-4/better-rgbToHsl.js
    fromBase: (rgb) => {
      let max = Math.max(...rgb);
      let min = Math.min(...rgb);
      let [r2, g3, b3] = rgb;
      let [h2, s2, l2] = [NaN, 0, (min + max) / 2];
      let d3 = max - min;
      if (d3 !== 0) {
        s2 = l2 === 0 || l2 === 1 ? 0 : (max - l2) / Math.min(l2, 1 - l2);
        switch (max) {
          case r2:
            h2 = (g3 - b3) / d3 + (g3 < b3 ? 6 : 0);
            break;
          case g3:
            h2 = (b3 - r2) / d3 + 2;
            break;
          case b3:
            h2 = (r2 - g3) / d3 + 4;
        }
        h2 = h2 * 60;
      }
      if (s2 < 0) {
        h2 += 180;
        s2 = Math.abs(s2);
      }
      if (h2 >= 360) {
        h2 -= 360;
      }
      return [h2, s2 * 100, l2 * 100];
    },
    // Adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative
    toBase: (hsl) => {
      let [h2, s2, l2] = hsl;
      h2 = h2 % 360;
      if (h2 < 0) {
        h2 += 360;
      }
      s2 /= 100;
      l2 /= 100;
      function f2(n3) {
        let k = (n3 + h2 / 30) % 12;
        let a2 = s2 * Math.min(l2, 1 - l2);
        return l2 - a2 * Math.max(-1, Math.min(k - 3, 9 - k, 1));
      }
      return [f2(0), f2(8), f2(4)];
    },
    formats: {
      "hsl": {
        coords: ["<number> | <angle>", "<percentage>", "<percentage>"]
      },
      "hsla": {
        coords: ["<number> | <angle>", "<percentage>", "<percentage>"],
        commas: true,
        lastAlpha: true
      }
    }
  });

  // node_modules/.pnpm/colorjs.io@0.5.0/node_modules/colorjs.io/src/spaces/oklch.js
  var oklch_default = new ColorSpace({
    id: "oklch",
    name: "Oklch",
    coords: {
      l: {
        refRange: [0, 1],
        name: "Lightness"
      },
      c: {
        refRange: [0, 0.4],
        name: "Chroma"
      },
      h: {
        refRange: [0, 360],
        type: "angle",
        name: "Hue"
      }
    },
    white: "D65",
    base: oklab_default,
    fromBase(oklab) {
      let [L2, a2, b3] = oklab;
      let h2;
      const \u03B56 = 2e-4;
      if (Math.abs(a2) < \u03B56 && Math.abs(b3) < \u03B56) {
        h2 = NaN;
      } else {
        h2 = Math.atan2(b3, a2) * 180 / Math.PI;
      }
      return [
        L2,
        // OKLab L is still L
        Math.sqrt(a2 ** 2 + b3 ** 2),
        // Chroma
        constrain(h2)
        // Hue, in degrees [0 to 360)
      ];
    },
    // Convert from polar form
    toBase(oklch) {
      let [L2, C2, h2] = oklch;
      let a2, b3;
      if (isNaN(h2)) {
        a2 = 0;
        b3 = 0;
      } else {
        a2 = C2 * Math.cos(h2 * Math.PI / 180);
        b3 = C2 * Math.sin(h2 * Math.PI / 180);
      }
      return [L2, a2, b3];
    },
    formats: {
      "oklch": {
        coords: ["<percentage> | <number>", "<number> | <percentage>[0,1]", "<number> | <angle>"]
      }
    }
  });

  // Resources/Private/Editor/ColorPicker/Components/ColorConverter.ts
  ColorSpace.register(srgb_default);
  ColorSpace.register(oklch_default);
  ColorSpace.register(hsl_default);
  function setStateFromValue(value, mode, precision) {
    if (!value || Array.isArray(value) && value.length === 0 || typeof value === "object" && Object.keys(value).length === 0) {
      return {};
    }
    if (mode === "all") {
      return value?.hex ? value : {};
    }
    if (mode === "coords") {
      if (value?.l === void 0 || value?.c === void 0 || value?.h === void 0) {
        return {};
      }
      return convertOKLCHFromValue(`oklch(${value.l} ${value.c} ${value.h})`, precision);
    }
    if (mode === "hex") {
      return onHexChange(value, precision);
    }
    if (mode === "oklch") {
      return convertOKLCHFromValue(value, precision);
    }
    return {};
  }
  function convertOKLCHFromValue(value, precision) {
    const color = parse(value);
    const lightness = getLightness(color);
    const rgb = to(color, srgb_default);
    return {
      hex: serialize(rgb, { format: "hex" }),
      oklch: serialize(color, { precision }),
      coords: convertToOkLchCoords(color, precision),
      lightness
    };
  }
  function setLightness(hex, lightness) {
    const color = parse(hex);
    const hsl = to(color, hsl_default);
    hsl.coords[2] = lightness;
    return serialize(to(hsl, srgb_default), { format: "hex" });
  }
  function setLuminance(oklch, luminance) {
    const color = parse(oklch);
    color.coords[0] = luminance / 100;
    const rgb = to(color, srgb_default);
    return serialize(rgb, { format: "hex" });
  }
  function onHexChange(hex, precision) {
    const color = parse(hex);
    const lightness = getLightness(color);
    const oklch = to(color, oklch_default);
    return {
      hex,
      oklch: serialize(oklch, { precision }),
      coords: convertToOkLchCoords(oklch, precision),
      lightness
    };
  }
  function getLightness(color) {
    const { coords } = to(color, hsl_default);
    return Math.round(coords[2]);
  }
  function convertToOkLchCoords(oklch, precision = 5) {
    const { coords } = oklch;
    return {
      l: round(coords[0], precision),
      c: round(coords[1], precision),
      h: round(coords[2], precision)
    };
  }
  function round(value, precision = void 0) {
    value = value || 0;
    if (!precision) {
      return value;
    }
    const factor = Math.pow(10, precision);
    return Math.round(value * factor) / factor;
  }

  // Resources/Private/Editor/ColorPicker/Components/OptionPreview.tsx
  var import_react2 = __toESM(require_react());

  // node_modules/.pnpm/@stylexjs+stylex@0.5.1/node_modules/@stylexjs/stylex/lib/es/stylex.mjs
  var styleq$1 = {};
  Object.defineProperty(styleq$1, "__esModule", {
    value: true
  });
  var styleq_2 = styleq$1.styleq = void 0;
  var cache = /* @__PURE__ */ new WeakMap();
  var compiledKey = "$$css";
  function createStyleq(options) {
    var disableCache;
    var disableMix;
    var transform;
    if (options != null) {
      disableCache = options.disableCache === true;
      disableMix = options.disableMix === true;
      transform = options.transform;
    }
    return function styleq2() {
      var definedProperties = [];
      var className = "";
      var inlineStyle = null;
      var nextCache = disableCache ? null : cache;
      var styles4 = new Array(arguments.length);
      for (var i2 = 0; i2 < arguments.length; i2++) {
        styles4[i2] = arguments[i2];
      }
      while (styles4.length > 0) {
        var possibleStyle = styles4.pop();
        if (possibleStyle == null || possibleStyle === false) {
          continue;
        }
        if (Array.isArray(possibleStyle)) {
          for (var _i = 0; _i < possibleStyle.length; _i++) {
            styles4.push(possibleStyle[_i]);
          }
          continue;
        }
        var style = transform != null ? transform(possibleStyle) : possibleStyle;
        if (style.$$css) {
          var classNameChunk = "";
          if (nextCache != null && nextCache.has(style)) {
            var cacheEntry = nextCache.get(style);
            if (cacheEntry != null) {
              classNameChunk = cacheEntry[0];
              definedProperties.push.apply(definedProperties, cacheEntry[1]);
              nextCache = cacheEntry[2];
            }
          } else {
            var definedPropertiesChunk = [];
            for (var prop in style) {
              var value = style[prop];
              if (prop === compiledKey)
                continue;
              if (typeof value === "string" || value === null) {
                if (!definedProperties.includes(prop)) {
                  definedProperties.push(prop);
                  if (nextCache != null) {
                    definedPropertiesChunk.push(prop);
                  }
                  if (typeof value === "string") {
                    classNameChunk += classNameChunk ? " " + value : value;
                  }
                }
              } else {
                console.error("styleq: ".concat(prop, " typeof ").concat(String(value), ' is not "string" or "null".'));
              }
            }
            if (nextCache != null) {
              var weakMap = /* @__PURE__ */ new WeakMap();
              nextCache.set(style, [classNameChunk, definedPropertiesChunk, weakMap]);
              nextCache = weakMap;
            }
          }
          if (classNameChunk) {
            className = className ? classNameChunk + " " + className : classNameChunk;
          }
        } else {
          if (disableMix) {
            if (inlineStyle == null) {
              inlineStyle = {};
            }
            inlineStyle = Object.assign({}, style, inlineStyle);
          } else {
            var subStyle = null;
            for (var _prop in style) {
              var _value = style[_prop];
              if (_value !== void 0) {
                if (!definedProperties.includes(_prop)) {
                  if (_value != null) {
                    if (inlineStyle == null) {
                      inlineStyle = {};
                    }
                    if (subStyle == null) {
                      subStyle = {};
                    }
                    subStyle[_prop] = _value;
                  }
                  definedProperties.push(_prop);
                  nextCache = null;
                }
              }
            }
            if (subStyle != null) {
              inlineStyle = Object.assign(subStyle, inlineStyle);
            }
          }
        }
      }
      var styleProps = [className, inlineStyle];
      return styleProps;
    };
  }
  var styleq = createStyleq();
  styleq_2 = styleq$1.styleq = styleq;
  styleq.factory = createStyleq;
  var errorForFn = (name) => new Error(`'stylex.${name}' should never be called at runtime. It should be compiled away by '@stylexjs/babel-plugin'`);
  var errorForType = (key) => errorForFn(`types.${key}`);
  function props() {
    const options = this;
    for (var _len = arguments.length, styles4 = new Array(_len), _key = 0; _key < _len; _key++) {
      styles4[_key] = arguments[_key];
    }
    if (__implementations.props) {
      return __implementations.props.call(options, styles4);
    }
    const [className, style] = styleq_2(styles4);
    const result = {};
    if (className != null && className !== "") {
      result.className = className;
    }
    if (style != null && Object.keys(style).length > 0) {
      result.style = style;
    }
    return result;
  }
  function attrs() {
    const {
      className,
      style
    } = props(...arguments);
    const result = {};
    if (className != null && className !== "") {
      result.class = className;
    }
    if (style != null && Object.keys(style).length > 0) {
      result.style = Object.keys(style).map((key) => `${key}:${style[key]};`).join("");
    }
    return result;
  }
  function stylexCreate(styles4) {
    if (__implementations.create != null) {
      const create2 = __implementations.create;
      return create2(styles4);
    }
    throw errorForFn("create");
  }
  function stylexDefineVars(styles4) {
    if (__implementations.defineVars) {
      return __implementations.defineVars(styles4);
    }
    throw errorForFn("defineVars");
  }
  var stylexCreateTheme = (baseTokens, overrides) => {
    if (__implementations.createTheme) {
      return __implementations.createTheme(baseTokens, overrides);
    }
    throw errorForFn("createTheme");
  };
  var stylexInclude = (styles4) => {
    if (__implementations.include) {
      return __implementations.include(styles4);
    }
    throw errorForFn("include");
  };
  var create = stylexCreate;
  var defineVars = stylexDefineVars;
  var createTheme = stylexCreateTheme;
  var include = stylexInclude;
  var types = {
    angle: (_v) => {
      throw errorForType("angle");
    },
    color: (_v) => {
      throw errorForType("color");
    },
    url: (_v) => {
      throw errorForType("url");
    },
    image: (_v) => {
      throw errorForType("image");
    },
    integer: (_v) => {
      throw errorForType("integer");
    },
    lengthPercentage: (_v) => {
      throw errorForType("lengthPercentage");
    },
    length: (_v) => {
      throw errorForType("length");
    },
    percentage: (_v) => {
      throw errorForType("percentage");
    },
    number: (_v) => {
      throw errorForType("number");
    },
    resolution: (_v) => {
      throw errorForType("resolution");
    },
    time: (_v) => {
      throw errorForType("time");
    },
    transformFunction: (_v) => {
      throw errorForType("transformFunction");
    },
    transformList: (_v) => {
      throw errorForType("transformList");
    }
  };
  var keyframes = (keyframes2) => {
    if (__implementations.keyframes) {
      return __implementations.keyframes(keyframes2);
    }
    throw errorForFn("keyframes");
  };
  var firstThatWorks = function() {
    if (__implementations.firstThatWorks) {
      return __implementations.firstThatWorks(...arguments);
    }
    throw errorForFn("firstThatWorks");
  };
  function _stylex() {
    for (var _len2 = arguments.length, styles4 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      styles4[_key2] = arguments[_key2];
    }
    const [className] = styleq_2(styles4);
    return className;
  }
  _stylex.props = props;
  _stylex.attrs = attrs;
  _stylex.create = create;
  _stylex.defineVars = defineVars;
  _stylex.createTheme = createTheme;
  _stylex.include = include;
  _stylex.keyframes = keyframes;
  _stylex.firstThatWorks = firstThatWorks;
  _stylex.types = types;
  var __implementations = {};

  // Resources/Private/Editor/ColorPicker/Components/OptionPreview.tsx
  var styles = {
    button: {
      cursor: "x1ypdohk",
      textOverflow: "xlyipyv",
      whiteSpace: "xuxw1ft",
      fontSize: "xiq9r4",
      lineHeight: "x1bexyg0",
      padding: "x1dskcqz",
      overflow: "xb3r6kr",
      display: "x78zum5",
      gap: "x188dswm",
      alignItems: "x6s0dn4",
      border: "x1wty727",
      background: "x11g6tue",
      borderRadius: "x2u8bby",
      color: "x1awj2ng",
      width: "xh8yej3",
      $$css: true
    },
    buttonHighlighted: {
      backgroundColor: "x18z1ewl",
      $$css: true
    }
  };
  function OptionPreview({
    option,
    onClick,
    isHighlighted,
    onMouseEnter
  }) {
    const label = capitalizeFirstLetter(option.label);
    return /* @__PURE__ */ import_react2.default.createElement("button", { ...props(styles.button, isHighlighted && styles.buttonHighlighted), onClick, onMouseEnter, type: "button" }, /* @__PURE__ */ import_react2.default.createElement("span", { ...{
      className: "x1lliihq xwqb0wv x1wyezfn xorixrz xyqm4zk x6ka6pt"
    }, style: {
      backgroundColor: option.value
    } }), /* @__PURE__ */ import_react2.default.createElement("span", { title: label }, label));
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Resources/Private/Editor/ColorPicker/Components/RangeSlider.tsx
  var import_react3 = __toESM(require_react());

  // node_modules/.pnpm/nanoid@5.0.6/node_modules/nanoid/url-alphabet/index.js
  var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";

  // node_modules/.pnpm/nanoid@5.0.6/node_modules/nanoid/index.browser.js
  var nanoid = (size = 21) => {
    let id = "";
    let bytes = crypto.getRandomValues(new Uint8Array(size));
    while (size--) {
      id += urlAlphabet[bytes[size] & 63];
    }
    return id;
  };

  // Resources/Private/Editor/ColorPicker/Components/RangeSlider.tsx
  var styles2 = {
    wrapper: {
      display: "x78zum5",
      flexDirection: "xdt5ytf",
      maxWidth: "x193iq5w",
      gap: "x188dswm",
      $$css: true
    },
    disabled: {
      cursor: "x1h6gzvc",
      opacity: "x190dgpg",
      ":where(*) *_pointerEvents": "x8ie97q",
      $$css: true
    }
  };
  function RangeSlider({
    value,
    onChange,
    label,
    disabled
  }) {
    const [number, setNumber] = (0, import_react3.useState)(value || 0);
    const id = "range-" + nanoid();
    const min = 0;
    const max = 100;
    (0, import_react3.useEffect)(() => {
      setNumber(value);
    }, [value]);
    function handleChange(event) {
      onChange(event?.currentTarget?.valueAsNumber);
    }
    const numLength = (value2) => value2.toString().length;
    const minWidth = Math.max(numLength(min), numLength(max)) + "ch";
    const minWidthInput = `calc(${minWidth} + 2rem)`;
    return /* @__PURE__ */ import_react3.default.createElement("div", { ...props(styles2.wrapper, disabled && styles2.disabled) }, /* @__PURE__ */ import_react3.default.createElement("div", { ...{
      className: "x78zum5 x1qughib x188dswm"
    } }, /* @__PURE__ */ import_react3.default.createElement("label", { htmlFor: id, ...{
      className: "x87ps6o x1ypdohk xiq9r4"
    } }, label), /* @__PURE__ */ import_react3.default.createElement("input", { ...{
      className: "x1lo5vof xdneb0g xjohyra x1hr2gdg x1awj2ng x1sirlc8 x1wty727 x11g6tue x1a2a7pz x1i1gfen x9pjoqp xtilpmw x1yrzqix xo6swyp xpf6v1x x1agkqgv"
    }, style: {
      minWidth: minWidthInput
    }, min, max, type: "number", value: Math.round(number), onChange: handleChange, id, inputMode: "numeric" })), /* @__PURE__ */ import_react3.default.createElement("input", { ...{
      className: "xh8yej3 x1wyezfn xjyslct xjohyra x1wty727 x1a2a7pz x1qjns4s xibs45w x8cq3ga x1kthjsd xu2yhzc x1p6diu8 x1iqn34f xjpt6gn x1c6sthy x1butzbu x1tx7z28 xbepbgz xnwzpgn xd8b9pn x1tk0e90 x1xk2y70 x13fi9fm x4wtp0 x66xn83 x1w3w5 x1qquo6a xovb9ml xs99pfi x1l5f1bp x55q4sf x16hwx1y x3jfnhq xsahp4b x1272q6d xuyzg6f xoo02y2"
    }, type: "range", min, max, step: "1", value: Math.round(number), onChange: handleChange }));
  }

  // Resources/Private/Editor/ColorPicker/index.tsx
  var import_react_ui_components = __toESM(require_react_ui_components());
  var neosifier = (0, import_neos_ui_decorators.neos)((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    config: globalRegistry.get("frontendConfiguration").get("Carbon.ColorPicker.OKLCH")
  }));
  var defaultProps = {
    options: {
      mode: "all",
      disabled: false,
      allowEmpty: true,
      showPresets: true,
      showPicker: true,
      showHexInput: true,
      showLightness: false,
      showLuminance: false,
      precision: 5,
      presets: {}
    }
  };
  var styles3 = {
    disabled: {
      cursor: "x1h6gzvc",
      opacity: "x190dgpg",
      ":where(*) *_pointerEvents": "x1g8rrie",
      $$css: true
    },
    highlight: {
      borderRadius: "xjohyra",
      borderStartStartRadius: null,
      borderStartEndRadius: null,
      borderEndStartRadius: null,
      borderEndEndRadius: null,
      borderTopLeftRadius: null,
      borderTopRightRadius: null,
      borderBottomLeftRadius: null,
      borderBottomRightRadius: null,
      boxShadow: "x11mstge",
      $$css: true
    },
    wrapper: {
      display: "x78zum5",
      flexDirection: "xdt5ytf",
      gap: "x188dswm",
      $$css: true
    },
    colorPreview: {
      borderRadius: "xjohyra",
      height: "x1hhc0k",
      minWidth: "x15g7okx",
      flex: "x98rzlu",
      $$css: true
    },
    colorPreviewTransparent: {
      backgroundSize: "x1ht9rhz",
      backgroundColor: "x1qjns4s",
      backgroundImage: "x1149thc",
      $$css: true
    }
  };
  function Editor(props2) {
    const options = {
      ...defaultProps.options,
      ...props2.config,
      ...props2.options
    };
    const {
      value,
      commit,
      highlight,
      i18nRegistry
    } = props2;
    const {
      allowEmpty,
      disabled,
      mode,
      precision,
      presets,
      showHexInput,
      showLightness,
      showLuminance,
      showPicker,
      showPresets
    } = options;
    if (mode !== "coords" && mode !== "hex" && mode !== "all" && mode !== "oklch") {
      return /* @__PURE__ */ import_react4.default.createElement("div", { ...{
        className: "xjohyra x1hgx17m x89w75u"
      } }, i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:invalidMode", "", [mode]));
    }
    const [state, setState] = (0, import_react4.useState)(setStateFromValue(value, mode, precision));
    (0, import_react4.useEffect)(() => {
      if (!state?.hex) {
        if (mode == "all" || mode == "coords") {
          commit({});
          return;
        }
        commit("");
        return;
      }
      if (mode === "all") {
        commit({
          hex: state.hex,
          oklch: state.oklch,
          coords: state.coords
        });
        return;
      }
      commit(state[mode]);
    }, [state]);
    function handleHexChange(hex) {
      setState(onHexChange(hex, precision));
    }
    function handleLightnessChange(lightness2) {
      handleHexChange(setLightness(state?.hex, lightness2));
    }
    function handleLuminanceChange(luminance2) {
      handleHexChange(setLuminance(state?.oklch, luminance2));
    }
    const presetOptions = showPresets && presets && Object.entries(presets).map(([key, color]) => ({
      value: color,
      label: key
    })).filter((preset) => !!preset.value);
    const lightness = state?.lightness || 0;
    const luminance = state?.coords?.l || 0;
    return /* @__PURE__ */ import_react4.default.createElement("div", { ...props(styles3.wrapper, disabled && styles3.disabled) }, Boolean(showPicker) && /* @__PURE__ */ import_react4.default.createElement(Z, { ...{
      className: "xh8yej3 xt7dq6l x1plog1 xlt0ddm xf5yl2k x9av0op xdosjj7 xkmff00 xbq8i1p x19mnrqj x13bp1ud x1th5coa x1lptuiq x4hip2o xfbmp4j x2lqnu4 xmxw2tw x46gmau"
    }, color: state?.hex, onChange: handleHexChange }), Boolean(showLightness) && /* @__PURE__ */ import_react4.default.createElement(RangeSlider, { disabled: state?.hex ? false : true, value: lightness, onChange: handleLightnessChange, label: i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:lightness") }), Boolean(showLuminance) && /* @__PURE__ */ import_react4.default.createElement(RangeSlider, { disabled: state?.coords?.l ? false : true, value: luminance * 100, onChange: handleLuminanceChange, label: i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:luminance") }), /* @__PURE__ */ import_react4.default.createElement("div", { ...{
      className: "x78zum5 x188dswm"
    } }, /* @__PURE__ */ import_react4.default.createElement("div", { ...props(styles3.colorPreview, state?.oklch || styles3.colorPreviewTransparent, highlight && styles3.highlight), style: {
      backgroundColor: state?.oklch
    } }), Boolean(showHexInput) && /* @__PURE__ */ import_react4.default.createElement(Oe, { ...{
      className: "x1iyjqo2 x1hhc0k xh8yej3 xjohyra x1wty727 x1qjns4s xtqyqw7 x1awj2ng x1a2a7pz x1agkqgv xtw1abo x1sirlc8"
    }, title: i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:setHexColor"), color: state?.hex, onChange: handleHexChange, prefixed: false }), Boolean(allowEmpty) && /* @__PURE__ */ import_react4.default.createElement(import_react_ui_components.IconButton, { style: "lighter", icon: "times", title: i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:resetColor"), onClick: () => {
      setState(null);
    } })), Boolean(!!presetOptions) && /* @__PURE__ */ import_react4.default.createElement(import_react_ui_components.SelectBox, { options: presetOptions, value: state?.hex, placeholder: i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:preset"), allowEmpty: false, onValueChange: handleHexChange, ListPreviewElement: OptionPreview }));
  }
  var ColorPicker_default = neosifier(Editor);

  // Resources/Private/Editor/manifest.ts
  dist_default("Carbon.ColorPicker:OKLCH", {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get("inspector").get("editors");
    editorsRegistry.set("Carbon.ColorPicker/OKLCH", {
      component: ColorPicker_default
    });
  });
})();
//# sourceMappingURL=Plugin.js.map
