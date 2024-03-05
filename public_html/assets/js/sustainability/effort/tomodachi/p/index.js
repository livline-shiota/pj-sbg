! function (e) {
  var t = {};

  function i(n) {
    if (t[n]) return t[n].exports;
    var r = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
  }
  i.m = e, i.c = t, i.d = function (e, t, n) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    })
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, i.t = function (e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var r in e) i.d(n, r, function (t) {
        return e[t]
      }.bind(null, r));
    return n
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return i.d(t, "a", t), t
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, i.p = "", i(i.s = 7)
}([function (e, t) {
  var i = !1;
  try {
    var n = Object.defineProperty({}, "passive", {
      get: function () {
        i = !0
      }
    });
    window.addEventListener("testPassive", null, n), window.removeEventListener("testPassive", null, n)
  } catch (e) {}
  e.exports = i
}, function (e, t, i) {
  var n, r;
  ! function (s) {
    if (undefined === (r = "function" == typeof (n = s) ? n.call(t, i, t, e) : n) || (e.exports = r), !0, e.exports = s(), !!0) {
      var o = window.Cookies,
        a = window.Cookies = s();
      a.noConflict = function () {
        return window.Cookies = o, a
      }
    }
  }(function () {
    function e() {
      for (var e = 0, t = {}; e < arguments.length; e++) {
        var i = arguments[e];
        for (var n in i) t[n] = i[n]
      }
      return t
    }
    return function t(i) {
      function n(t, r, s) {
        var o;
        if ("undefined" != typeof document) {
          if (arguments.length > 1) {
            if ("number" == typeof (s = e({
                path: "/"
              }, n.defaults, s)).expires) {
              var a = new Date;
              a.setMilliseconds(a.getMilliseconds() + 864e5 * s.expires), s.expires = a
            }
            s.expires = s.expires ? s.expires.toUTCString() : "";
            try {
              o = JSON.stringify(r), /^[\{\[]/.test(o) && (r = o)
            } catch (e) {}
            r = i.write ? i.write(r, t) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
            var l = "";
            for (var u in s) s[u] && (l += "; " + u, !0 !== s[u] && (l += "=" + s[u]));
            return document.cookie = t + "=" + r + l
          }
          t || (o = {});
          for (var c = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, h = 0; h < c.length; h++) {
            var f = c[h].split("="),
              p = f.slice(1).join("=");
            this.json || '"' !== p.charAt(0) || (p = p.slice(1, -1));
            try {
              var g = f[0].replace(d, decodeURIComponent);
              if (p = i.read ? i.read(p, g) : i(p, g) || p.replace(d, decodeURIComponent), this.json) try {
                p = JSON.parse(p)
              } catch (e) {}
              if (t === g) {
                o = p;
                break
              }
              t || (o[g] = p)
            } catch (e) {}
          }
          return o
        }
      }
      return n.set = n, n.get = function (e) {
        return n.call(n, e)
      }, n.getJSON = function () {
        return n.apply({
          json: !0
        }, [].slice.call(arguments))
      }, n.defaults = {}, n.remove = function (t, i) {
        n(t, "", e(i, {
          expires: -1
        }))
      }, n.withConverter = t, n
    }(function () {})
  })
}, function (e, t, i) {
  var n, r; 
  ! function (e) {
    "use strict";

    function t(e) {
      var t = e.length,
        n = i.type(e);
      return "function" !== n && !i.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    if (!e.jQuery) {
      var i = function (e, t) {
        return new i.fn.init(e, t)
      };
      i.isWindow = function (e) {
        return e && e === e.window
      }, i.type = function (e) {
        return e ? "object" == typeof e || "function" == typeof e ? r[o.call(e)] || "object" : typeof e : e + ""
      }, i.isArray = Array.isArray || function (e) {
        return "array" === i.type(e)
      }, i.isPlainObject = function (e) {
        var t;
        if (!e || "object" !== i.type(e) || e.nodeType || i.isWindow(e)) return !1;
        try {
          if (e.constructor && !s.call(e, "constructor") && !s.call(e.constructor.prototype, "isPrototypeOf")) return !1
        } catch (e) {
          return !1
        }
        for (t in e);
        return undefined === t || s.call(e, t)
      }, i.each = function (e, i, n) {
        var r = 0,
          s = e.length,
          o = t(e);
        if (n) {
          if (o)
            for (; r < s && !1 !== i.apply(e[r], n); r++);
          else
            for (r in e)
              if (e.hasOwnProperty(r) && !1 === i.apply(e[r], n)) break
        } else if (o)
          for (; r < s && !1 !== i.call(e[r], r, e[r]); r++);
        else
          for (r in e)
            if (e.hasOwnProperty(r) && !1 === i.call(e[r], r, e[r])) break;
        return e
      }, i.data = function (e, t, r) {
        if (undefined === r) {
          var s = e[i.expando],
            o = s && n[s];
          if (undefined === t) return o;
          if (o && t in o) return o[t]
        } else if (undefined !== t) {
          var a = e[i.expando] || (e[i.expando] = ++i.uuid);
          return n[a] = n[a] || {}, n[a][t] = r, r
        }
      }, i.removeData = function (e, t) {
        var r = e[i.expando],
          s = r && n[r];
        s && (t ? i.each(t, function (e, t) {
          delete s[t]
        }) : delete n[r])
      }, i.extend = function () {
        var e, t, n, r, s, o, a = arguments[0] || {},
          l = 1,
          u = arguments.length,
          c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[l] || {}, l++), "object" != typeof a && "function" !== i.type(a) && (a = {}), l === u && (a = this, l--); l < u; l++)
          if (s = arguments[l])
            for (r in s) s.hasOwnProperty(r) && (e = a[r], a !== (n = s[r]) && (c && n && (i.isPlainObject(n) || (t = i.isArray(n))) ? (t ? (t = !1, o = e && i.isArray(e) ? e : []) : o = e && i.isPlainObject(e) ? e : {}, a[r] = i.extend(c, o, n)) : undefined !== n && (a[r] = n)));
        return a
      }, i.queue = function (e, n, r) {
        if (e) {
          n = (n || "fx") + "queue";
          var s = i.data(e, n);
          return r ? (!s || i.isArray(r) ? s = i.data(e, n, function (e, i) {
            var n = [];
            return e && (t(Object(e)) ? function (e, t) {
              for (var i = +t.length, n = 0, r = e.length; n < i;) e[r++] = t[n++];
              if (i != i)
                for (; undefined !== t[n];) e[r++] = t[n++];
              e.length = r
            }(n, "string" == typeof e ? [e] : e) : [].push.call(n, e)), n
          }(r)) : s.push(r), s) : s || []
        }
      }, i.dequeue = function (e, t) {
        i.each(e.nodeType ? [e] : e, function (e, n) {
          t = t || "fx";
          var r = i.queue(n, t),
            s = r.shift();
          "inprogress" === s && (s = r.shift()), s && ("fx" === t && r.unshift("inprogress"), s.call(n, function () {
            i.dequeue(n, t)
          }))
        })
      }, i.fn = i.prototype = {
        init: function (e) {
          if (e.nodeType) return this[0] = e, this;
          throw new Error("Not a DOM node.")
        },
        offset: function () {
          var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
            top: 0,
            left: 0
          };
          return {
            top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
            left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
          }
        },
        position: function () {
          var e = this[0],
            t = function (e) {
              for (var t = e.offsetParent; t && "html" !== t.nodeName.toLowerCase() && t.style && "static" === t.style.position.toLowerCase();) t = t.offsetParent;
              return t || document
            }(e),
            n = this.offset(),
            r = /^(?:body|html)$/i.test(t.nodeName) ? {
              top: 0,
              left: 0
            } : i(t).offset();
          return n.top -= parseFloat(e.style.marginTop) || 0, n.left -= parseFloat(e.style.marginLeft) || 0, t.style && (r.top += parseFloat(t.style.borderTopWidth) || 0, r.left += parseFloat(t.style.borderLeftWidth) || 0), {
            top: n.top - r.top,
            left: n.left - r.left
          }
        }
      };
      var n = {};
      i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
      for (var r = {}, s = r.hasOwnProperty, o = r.toString, a = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < a.length; l++) r["[object " + a[l] + "]"] = a[l].toLowerCase();
      i.fn.init.prototype = i.fn, e.Velocity = {
        Utilities: i
      }
    }
  }(window),
  function (s) {
    "use strict";
    "object" == typeof e && "object" == typeof e.exports ? e.exports = s() : undefined === (r = "function" == typeof (n = s) ? n.call(t, i, t, e) : n) || (e.exports = r)
  }(function () {
    "use strict";
    return function (e, t, i, n) {
      function r(e) {
        return y.isWrapped(e) ? e = m.call(e) : y.isNode(e) && (e = [e]), e
      }

      function s(e) {
        var t = h.data(e, "velocity");
        return null === t ? n : t
      }

      function o(e, t) {
        var i = s(e);
        i && i.delayTimer && !i.delayPaused && (i.delayRemaining = i.delay - t + i.delayBegin, i.delayPaused = !0, clearTimeout(i.delayTimer.setTimeout))
      }

      function a(e, t) {
        var i = s(e);
        i && i.delayTimer && i.delayPaused && (i.delayPaused = !1, i.delayTimer.setTimeout = setTimeout(i.delayTimer.next, i.delayRemaining))
      }

      function l(e, i, n, r) {
        function s(e, t) {
          return 1 - 3 * t + 3 * e
        }

        function o(e, t) {
          return 3 * t - 6 * e
        }

        function a(e) {
          return 3 * e
        }

        function l(e, t, i) {
          return ((s(t, i) * e + o(t, i)) * e + a(t)) * e
        }

        function u(e, t, i) {
          return 3 * s(t, i) * e * e + 2 * o(t, i) * e + a(t)
        }

        function c(t, i) {
          for (var r = 0; r < f; ++r) {
            var s = u(i, e, n);
            if (0 === s) return i;
            i -= (l(i, e, n) - t) / s
          }
          return i
        }

        function d(t, i, r) {
          var s, o, a = 0;
          do {
            (s = l(o = i + (r - i) / 2, e, n) - t) > 0 ? r = o : i = o
          } while (Math.abs(s) > g && ++a < m);
          return o
        }

        function h() {
          x = !0, e === i && n === r || function () {
            for (var t = 0; t < v; ++t) S[t] = l(t * y, e, n)
          }()
        }
        var f = 4,
          p = .001,
          g = 1e-7,
          m = 10,
          v = 11,
          y = 1 / (v - 1),
          b = "Float32Array" in t;
        if (4 !== arguments.length) return !1;
        for (var w = 0; w < 4; ++w)
          if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
        e = Math.min(e, 1), n = Math.min(n, 1), e = Math.max(e, 0), n = Math.max(n, 0);
        var S = b ? new Float32Array(v) : new Array(v),
          x = !1,
          E = function (t) {
            return x || h(), e === i && n === r ? t : 0 === t ? 0 : 1 === t ? 1 : l(function (t) {
              for (var i = 0, r = 1, s = v - 1; r !== s && S[r] <= t; ++r) i += y;
              var o = i + (t - S[--r]) / (S[r + 1] - S[r]) * y,
                a = u(o, e, n);
              return a >= p ? c(t, o) : 0 === a ? o : d(t, i, i + y)
            }(t), i, r)
          };
        E.getControlPoints = function () {
          return [{
            x: e,
            y: i
          }, {
            x: n,
            y: r
          }]
        };
        var C = "generateBezier(" + [e, i, n, r] + ")";
        return E.toString = function () {
          return C
        }, E
      }

      function u(e, t) {
        var i = e;
        return y.isString(e) ? x.Easings[e] || (i = !1) : i = y.isArray(e) && 1 === e.length ? function (e) {
          return function (t) {
            return Math.round(t * e) * (1 / e)
          }
        }.apply(null, e) : y.isArray(e) && 2 === e.length ? E.apply(null, e.concat([t])) : !(!y.isArray(e) || 4 !== e.length) && l.apply(null, e), !1 === i && (i = x.Easings[x.defaults.easing] ? x.defaults.easing : S), i
      }

      function c(e) {
        if (e) {
          var t = x.timestamp && !0 !== e ? e : g.now(),
            i = x.State.calls.length;
          i > 1e4 && (x.State.calls = function (e) {
            for (var t = -1, i = e ? e.length : 0, n = []; ++t < i;) {
              var r = e[t];
              r && n.push(r)
            }
            return n
          }(x.State.calls), i = x.State.calls.length);
          for (var r = 0; r < i; r++)
            if (x.State.calls[r]) {
              var o = x.State.calls[r],
                a = o[0],
                l = o[2],
                u = o[3],
                p = !u,
                m = null,
                v = o[5],
                b = o[6];
              if (u || (u = x.State.calls[r][3] = t - 16), v) {
                if (!0 !== v.resume) continue;
                u = o[3] = Math.round(t - b - 16), o[5] = null
              }
              b = o[6] = t - u;
              for (var w = Math.min(b / l.duration, 1), S = 0, E = a.length; S < E; S++) {
                var k = a[S],
                  T = k.element;
                if (s(T)) {
                  var P = !1;
                  if (l.display !== n && null !== l.display && "none" !== l.display) {
                    if ("flex" === l.display) {
                      h.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function (e, t) {
                        C.setPropertyValue(T, "display", t)
                      })
                    }
                    C.setPropertyValue(T, "display", l.display)
                  }
                  for (var L in l.visibility !== n && "hidden" !== l.visibility && C.setPropertyValue(T, "visibility", l.visibility), k)
                    if (k.hasOwnProperty(L) && "element" !== L) {
                      var _, O = k[L],
                        V = y.isString(O.easing) ? x.Easings[O.easing] : O.easing;
                      if (y.isString(O.pattern)) {
                        var N = 1 === w ? function (e, t, i) {
                          var n = O.endValue[t];
                          return i ? Math.round(n) : n
                        } : function (e, t, i) {
                          var n = O.startValue[t],
                            r = O.endValue[t] - n,
                            s = n + r * V(w, l, r);
                          return i ? Math.round(s) : s
                        };
                        _ = O.pattern.replace(/{(\d+)(!)?}/g, N)
                      } else if (1 === w) _ = O.endValue;
                      else {
                        var F = O.endValue - O.startValue;
                        _ = O.startValue + F * V(w, l, F)
                      }
                      if (!p && _ === O.currentValue) continue;
                      if (O.currentValue = _, "tween" === L) m = _;
                      else {
                        var M;
                        if (C.Hooks.registered[L]) {
                          M = C.Hooks.getRoot(L);
                          var I = s(T).rootPropertyValueCache[M];
                          I && (O.rootPropertyValue = I)
                        }
                        var j = C.setPropertyValue(T, L, O.currentValue + (f < 9 && 0 === parseFloat(_) ? "" : O.unitType), O.rootPropertyValue, O.scrollData);
                        C.Hooks.registered[L] && (C.Normalizations.registered[M] ? s(T).rootPropertyValueCache[M] = C.Normalizations.registered[M]("extract", null, j[1]) : s(T).rootPropertyValueCache[M] = j[1]), "transform" === j[0] && (P = !0)
                      }
                    }
                  l.mobileHA && s(T).transformCache.translate3d === n && (s(T).transformCache.translate3d = "(0px, 0px, 0px)", P = !0), P && C.flushTransformCache(T)
                }
              }
              l.display !== n && "none" !== l.display && (x.State.calls[r][2].display = !1), l.visibility !== n && "hidden" !== l.visibility && (x.State.calls[r][2].visibility = !1), l.progress && l.progress.call(o[1], o[1], w, Math.max(0, u + l.duration - t), u, m), 1 === w && d(r)
            }
        }
        x.State.isTicking && A(c)
      }

      function d(e, t) {
        if (!x.State.calls[e]) return !1;
        for (var i = x.State.calls[e][0], r = x.State.calls[e][1], o = x.State.calls[e][2], a = x.State.calls[e][4], l = !1, u = 0, c = i.length; u < c; u++) {
          var d = i[u].element;
          t || o.loop || ("none" === o.display && C.setPropertyValue(d, "display", o.display), "hidden" === o.visibility && C.setPropertyValue(d, "visibility", o.visibility));
          var f = s(d);
          if (!0 !== o.loop && (h.queue(d)[1] === n || !/\.velocityQueueEntryFlag/i.test(h.queue(d)[1])) && f) {
            f.isAnimating = !1, f.rootPropertyValueCache = {};
            var p = !1;
            h.each(C.Lists.transforms3D, function (e, t) {
              var i = /^scale/.test(t) ? 1 : 0,
                r = f.transformCache[t];
              f.transformCache[t] !== n && new RegExp("^\\(" + i + "[^.]").test(r) && (p = !0, delete f.transformCache[t])
            }), o.mobileHA && (p = !0, delete f.transformCache.translate3d), p && C.flushTransformCache(d), C.Values.removeClass(d, "velocity-animating")
          }
          if (!t && o.complete && !o.loop && u === c - 1) try {
            o.complete.call(r, r)
          } catch (e) {
            setTimeout(function () {
              throw e
            }, 1)
          }
          a && !0 !== o.loop && a(r), f && !0 === o.loop && !t && (h.each(f.tweensContainer, function (e, t) {
            if (/^rotate/.test(e) && (parseFloat(t.startValue) - parseFloat(t.endValue)) % 360 == 0) {
              var i = t.startValue;
              t.startValue = t.endValue, t.endValue = i
            }
            /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
          }), x(d, "reverse", {
            loop: !0,
            delay: o.delay
          })), !1 !== o.queue && h.dequeue(d, o.queue)
        }
        x.State.calls[e] = !1;
        for (var g = 0, m = x.State.calls.length; g < m; g++)
          if (!1 !== x.State.calls[g]) {
            l = !0;
            break
          }!1 === l && (x.State.isTicking = !1, delete x.State.calls, x.State.calls = [])
      }
      var h, f = function () {
          if (i.documentMode) return i.documentMode;
          for (var e = 7; e > 4; e--) {
            var t = i.createElement("div");
            if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
          }
          return n
        }(),
        p = function () {
          var e = 0;
          return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
            var i, n = (new Date).getTime();
            return i = Math.max(0, 16 - (n - e)), e = n + i, setTimeout(function () {
              t(n + i)
            }, i)
          }
        }(),
        g = function () {
          var e = t.performance || {};
          if ("function" != typeof e.now) {
            var i = e.timing && e.timing.navigationStart ? e.timing.navigationStart : (new Date).getTime();
            e.now = function () {
              return (new Date).getTime() - i
            }
          }
          return e
        }(),
        m = function () {
          var e = Array.prototype.slice;
          try {
            return e.call(i.documentElement), e
          } catch (t) {
            return function (t, i) {
              var n = this.length;
              if ("number" != typeof t && (t = 0), "number" != typeof i && (i = n), this.slice) return e.call(this, t, i);
              var r, s = [],
                o = t >= 0 ? t : Math.max(0, n + t),
                a = (i < 0 ? n + i : Math.min(i, n)) - o;
              if (a > 0)
                if (s = new Array(a), this.charAt)
                  for (r = 0; r < a; r++) s[r] = this.charAt(o + r);
                else
                  for (r = 0; r < a; r++) s[r] = this[o + r];
              return s
            }
          }
        }(),
        v = function () {
          return Array.prototype.includes ? function (e, t) {
            return e.includes(t)
          } : Array.prototype.indexOf ? function (e, t) {
            return e.indexOf(t) >= 0
          } : function (e, t) {
            for (var i = 0; i < e.length; i++)
              if (e[i] === t) return !0;
            return !1
          }
        },
        y = {
          isNumber: function (e) {
            return "number" == typeof e
          },
          isString: function (e) {
            return "string" == typeof e
          },
          isArray: Array.isArray || function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
          },
          isFunction: function (e) {
            return "[object Function]" === Object.prototype.toString.call(e)
          },
          isNode: function (e) {
            return e && e.nodeType
          },
          isWrapped: function (e) {
            return e && e !== t && y.isNumber(e.length) && !y.isString(e) && !y.isFunction(e) && !y.isNode(e) && (0 === e.length || y.isNode(e[0]))
          },
          isSVG: function (e) {
            return t.SVGElement && e instanceof t.SVGElement
          },
          isEmptyObject: function (e) {
            for (var t in e)
              if (e.hasOwnProperty(t)) return !1;
            return !0
          }
        },
        b = !1;
      if (e.fn && e.fn.jquery ? (h = e, b = !0) : h = t.Velocity.Utilities, f <= 8 && !b) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
      if (!(f <= 7)) {
        var w = 400,
          S = "swing",
          x = {
            State: {
              isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t.navigator.userAgent),
              isAndroid: /Android/i.test(t.navigator.userAgent),
              isGingerbread: /Android 2\.3\.[3-7]/i.test(t.navigator.userAgent),
              isChrome: t.chrome,
              isFirefox: /Firefox/i.test(t.navigator.userAgent),
              prefixElement: i.createElement("div"),
              prefixMatches: {},
              scrollAnchor: null,
              scrollPropertyLeft: null,
              scrollPropertyTop: null,
              isTicking: !1,
              calls: [],
              delayedElements: {
                count: 0
              }
            },
            CSS: {},
            Utilities: h,
            Redirects: {},
            Easings: {},
            Promise: t.Promise,
            defaults: {
              queue: "",
              duration: w,
              easing: S,
              begin: n,
              complete: n,
              progress: n,
              display: n,
              visibility: n,
              loop: !1,
              delay: !1,
              mobileHA: !0,
              _cacheValues: !0,
              promiseRejectEmpty: !0
            },
            init: function (e) {
              h.data(e, "velocity", {
                isSVG: y.isSVG(e),
                isAnimating: !1,
                computedStyle: null,
                tweensContainer: null,
                rootPropertyValueCache: {},
                transformCache: {}
              })
            },
            hook: null,
            mock: !1,
            version: {
              major: 1,
              minor: 5,
              patch: 2
            },
            debug: !1,
            timestamp: !0,
            pauseAll: function (e) {
              var t = (new Date).getTime();
              h.each(x.State.calls, function (t, i) {
                if (i) {
                  if (e !== n && (i[2].queue !== e || !1 === i[2].queue)) return !0;
                  i[5] = {
                    resume: !1
                  }
                }
              }), h.each(x.State.delayedElements, function (e, i) {
                i && o(i, t)
              })
            },
            resumeAll: function (e) {
              (new Date).getTime();
              h.each(x.State.calls, function (t, i) {
                if (i) {
                  if (e !== n && (i[2].queue !== e || !1 === i[2].queue)) return !0;
                  i[5] && (i[5].resume = !0)
                }
              }), h.each(x.State.delayedElements, function (e, t) {
                t && a(t)
              })
            }
          };
        t.pageYOffset !== n ? (x.State.scrollAnchor = t, x.State.scrollPropertyLeft = "pageXOffset", x.State.scrollPropertyTop = "pageYOffset") : (x.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, x.State.scrollPropertyLeft = "scrollLeft", x.State.scrollPropertyTop = "scrollTop");
        var E = function () {
          function e(e) {
            return -e.tension * e.x - e.friction * e.v
          }

          function t(t, i, n) {
            var r = {
              x: t.x + n.dx * i,
              v: t.v + n.dv * i,
              tension: t.tension,
              friction: t.friction
            };
            return {
              dx: r.v,
              dv: e(r)
            }
          }

          function i(i, n) {
            var r = {
                dx: i.v,
                dv: e(i)
              },
              s = t(i, .5 * n, r),
              o = t(i, .5 * n, s),
              a = t(i, n, o),
              l = 1 / 6 * (r.dx + 2 * (s.dx + o.dx) + a.dx),
              u = 1 / 6 * (r.dv + 2 * (s.dv + o.dv) + a.dv);
            return i.x = i.x + l * n, i.v = i.v + u * n, i
          }
          return function e(t, n, r) {
            var s, o, a, l = {
                x: -1,
                v: 0,
                tension: null,
                friction: null
              },
              u = [0],
              c = 0;
            for (t = parseFloat(t) || 500, n = parseFloat(n) || 20, r = r || null, l.tension = t, l.friction = n, (s = null !== r) ? o = (c = e(t, n)) / r * .016 : o = .016; a = i(a || l, o), u.push(1 + a.x), c += 16, Math.abs(a.x) > 1e-4 && Math.abs(a.v) > 1e-4;);
            return s ? function (e) {
              return u[e * (u.length - 1) | 0]
            } : c
          }
        }();
        x.Easings = {
          linear: function (e) {
            return e
          },
          swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
          },
          spring: function (e) {
            return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
          }
        }, h.each([
          ["ease", [.25, .1, .25, 1]],
          ["ease-in", [.42, 0, 1, 1]],
          ["ease-out", [0, 0, .58, 1]],
          ["ease-in-out", [.42, 0, .58, 1]],
          ["easeInSine", [.47, 0, .745, .715]],
          ["easeOutSine", [.39, .575, .565, 1]],
          ["easeInOutSine", [.445, .05, .55, .95]],
          ["easeInQuad", [.55, .085, .68, .53]],
          ["easeOutQuad", [.25, .46, .45, .94]],
          ["easeInOutQuad", [.455, .03, .515, .955]],
          ["easeInCubic", [.55, .055, .675, .19]],
          ["easeOutCubic", [.215, .61, .355, 1]],
          ["easeInOutCubic", [.645, .045, .355, 1]],
          ["easeInQuart", [.895, .03, .685, .22]],
          ["easeOutQuart", [.165, .84, .44, 1]],
          ["easeInOutQuart", [.77, 0, .175, 1]],
          ["easeInQuint", [.755, .05, .855, .06]],
          ["easeOutQuint", [.23, 1, .32, 1]],
          ["easeInOutQuint", [.86, 0, .07, 1]],
          ["easeInExpo", [.95, .05, .795, .035]],
          ["easeOutExpo", [.19, 1, .22, 1]],
          ["easeInOutExpo", [1, 0, 0, 1]],
          ["easeInCirc", [.6, .04, .98, .335]],
          ["easeOutCirc", [.075, .82, .165, 1]],
          ["easeInOutCirc", [.785, .135, .15, .86]]
        ], function (e, t) {
          x.Easings[t[0]] = l.apply(null, t[1])
        });
        var C = x.CSS = {
          RegEx: {
            isHex: /^#([A-f\d]{3}){1,2}$/i,
            valueUnwrap: /^[A-z]+\((.*)\)$/i,
            wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
            valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
          },
          Lists: {
            colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
            transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
            transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
            units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
            colorNames: {
              aliceblue: "240,248,255",
              antiquewhite: "250,235,215",
              aquamarine: "127,255,212",
              aqua: "0,255,255",
              azure: "240,255,255",
              beige: "245,245,220",
              bisque: "255,228,196",
              black: "0,0,0",
              blanchedalmond: "255,235,205",
              blueviolet: "138,43,226",
              blue: "0,0,255",
              brown: "165,42,42",
              burlywood: "222,184,135",
              cadetblue: "95,158,160",
              chartreuse: "127,255,0",
              chocolate: "210,105,30",
              coral: "255,127,80",
              cornflowerblue: "100,149,237",
              cornsilk: "255,248,220",
              crimson: "220,20,60",
              cyan: "0,255,255",
              darkblue: "0,0,139",
              darkcyan: "0,139,139",
              darkgoldenrod: "184,134,11",
              darkgray: "169,169,169",
              darkgrey: "169,169,169",
              darkgreen: "0,100,0",
              darkkhaki: "189,183,107",
              darkmagenta: "139,0,139",
              darkolivegreen: "85,107,47",
              darkorange: "255,140,0",
              darkorchid: "153,50,204",
              darkred: "139,0,0",
              darksalmon: "233,150,122",
              darkseagreen: "143,188,143",
              darkslateblue: "72,61,139",
              darkslategray: "47,79,79",
              darkturquoise: "0,206,209",
              darkviolet: "148,0,211",
              deeppink: "255,20,147",
              deepskyblue: "0,191,255",
              dimgray: "105,105,105",
              dimgrey: "105,105,105",
              dodgerblue: "30,144,255",
              firebrick: "178,34,34",
              floralwhite: "255,250,240",
              forestgreen: "34,139,34",
              fuchsia: "255,0,255",
              gainsboro: "220,220,220",
              ghostwhite: "248,248,255",
              gold: "255,215,0",
              goldenrod: "218,165,32",
              gray: "128,128,128",
              grey: "128,128,128",
              greenyellow: "173,255,47",
              green: "0,128,0",
              honeydew: "240,255,240",
              hotpink: "255,105,180",
              indianred: "205,92,92",
              indigo: "75,0,130",
              ivory: "255,255,240",
              khaki: "240,230,140",
              lavenderblush: "255,240,245",
              lavender: "230,230,250",
              lawngreen: "124,252,0",
              lemonchiffon: "255,250,205",
              lightblue: "173,216,230",
              lightcoral: "240,128,128",
              lightcyan: "224,255,255",
              lightgoldenrodyellow: "250,250,210",
              lightgray: "211,211,211",
              lightgrey: "211,211,211",
              lightgreen: "144,238,144",
              lightpink: "255,182,193",
              lightsalmon: "255,160,122",
              lightseagreen: "32,178,170",
              lightskyblue: "135,206,250",
              lightslategray: "119,136,153",
              lightsteelblue: "176,196,222",
              lightyellow: "255,255,224",
              limegreen: "50,205,50",
              lime: "0,255,0",
              linen: "250,240,230",
              magenta: "255,0,255",
              maroon: "128,0,0",
              mediumaquamarine: "102,205,170",
              mediumblue: "0,0,205",
              mediumorchid: "186,85,211",
              mediumpurple: "147,112,219",
              mediumseagreen: "60,179,113",
              mediumslateblue: "123,104,238",
              mediumspringgreen: "0,250,154",
              mediumturquoise: "72,209,204",
              mediumvioletred: "199,21,133",
              midnightblue: "25,25,112",
              mintcream: "245,255,250",
              mistyrose: "255,228,225",
              moccasin: "255,228,181",
              navajowhite: "255,222,173",
              navy: "0,0,128",
              oldlace: "253,245,230",
              olivedrab: "107,142,35",
              olive: "128,128,0",
              orangered: "255,69,0",
              orange: "255,165,0",
              orchid: "218,112,214",
              palegoldenrod: "238,232,170",
              palegreen: "152,251,152",
              paleturquoise: "175,238,238",
              palevioletred: "219,112,147",
              papayawhip: "255,239,213",
              peachpuff: "255,218,185",
              peru: "205,133,63",
              pink: "255,192,203",
              plum: "221,160,221",
              powderblue: "176,224,230",
              purple: "128,0,128",
              red: "255,0,0",
              rosybrown: "188,143,143",
              royalblue: "65,105,225",
              saddlebrown: "139,69,19",
              salmon: "250,128,114",
              sandybrown: "244,164,96",
              seagreen: "46,139,87",
              seashell: "255,245,238",
              sienna: "160,82,45",
              silver: "192,192,192",
              skyblue: "135,206,235",
              slateblue: "106,90,205",
              slategray: "112,128,144",
              snow: "255,250,250",
              springgreen: "0,255,127",
              steelblue: "70,130,180",
              tan: "210,180,140",
              teal: "0,128,128",
              thistle: "216,191,216",
              tomato: "255,99,71",
              turquoise: "64,224,208",
              violet: "238,130,238",
              wheat: "245,222,179",
              whitesmoke: "245,245,245",
              white: "255,255,255",
              yellowgreen: "154,205,50",
              yellow: "255,255,0"
            }
          },
          Hooks: {
            templates: {
              textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
              boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
              clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
              backgroundPosition: ["X Y", "0% 0%"],
              transformOrigin: ["X Y Z", "50% 50% 0px"],
              perspectiveOrigin: ["X Y", "50% 50%"]
            },
            registered: {},
            register: function () {
              for (var e = 0; e < C.Lists.colors.length; e++) {
                var t = "color" === C.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                C.Hooks.templates[C.Lists.colors[e]] = ["Red Green Blue Alpha", t]
              }
              var i, n, r;
              if (f)
                for (i in C.Hooks.templates)
                  if (C.Hooks.templates.hasOwnProperty(i)) {
                    r = (n = C.Hooks.templates[i])[0].split(" ");
                    var s = n[1].match(C.RegEx.valueSplit);
                    "Color" === r[0] && (r.push(r.shift()), s.push(s.shift()), C.Hooks.templates[i] = [r.join(" "), s.join(" ")])
                  }
              for (i in C.Hooks.templates)
                if (C.Hooks.templates.hasOwnProperty(i))
                  for (var o in r = (n = C.Hooks.templates[i])[0].split(" "))
                    if (r.hasOwnProperty(o)) {
                      var a = i + r[o],
                        l = o;
                      C.Hooks.registered[a] = [i, l]
                    }
            },
            getRoot: function (e) {
              var t = C.Hooks.registered[e];
              return t ? t[0] : e
            },
            getUnit: function (e, t) {
              var i = (e.substr(t || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
              return i && v(C.Lists.units, i) ? i : ""
            },
            fixColors: function (e) {
              return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function (e, t, i) {
                return C.Lists.colorNames.hasOwnProperty(i) ? (t || "rgba(") + C.Lists.colorNames[i] + (t ? "" : ",1)") : t + i
              })
            },
            cleanRootPropertyValue: function (e, t) {
              return C.RegEx.valueUnwrap.test(t) && (t = t.match(C.RegEx.valueUnwrap)[1]), C.Values.isCSSNullValue(t) && (t = C.Hooks.templates[e][1]), t
            },
            extractValue: function (e, t) {
              var i = C.Hooks.registered[e];
              if (i) {
                var n = i[0],
                  r = i[1];
                return (t = C.Hooks.cleanRootPropertyValue(n, t)).toString().match(C.RegEx.valueSplit)[r]
              }
              return t
            },
            injectValue: function (e, t, i) {
              var n = C.Hooks.registered[e];
              if (n) {
                var r, s = n[0],
                  o = n[1];
                return (r = (i = C.Hooks.cleanRootPropertyValue(s, i)).toString().match(C.RegEx.valueSplit))[o] = t, r.join(" ")
              }
              return i
            }
          },
          Normalizations: {
            registered: {
              clip: function (e, t, i) {
                switch (e) {
                case "name":
                  return "clip";
                case "extract":
                  var n;
                  return C.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : n = (n = i.toString().match(C.RegEx.valueUnwrap)) ? n[1].replace(/,(\s+)?/g, " ") : i, n;
                case "inject":
                  return "rect(" + i + ")"
                }
              },
              blur: function (e, t, i) {
                switch (e) {
                case "name":
                  return x.State.isFirefox ? "filter" : "-webkit-filter";
                case "extract":
                  var n = parseFloat(i);
                  if (!n && 0 !== n) {
                    var r = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                    n = r ? r[1] : 0
                  }
                  return n;
                case "inject":
                  return parseFloat(i) ? "blur(" + i + ")" : "none"
                }
              },
              opacity: function (e, t, i) {
                if (f <= 8) switch (e) {
                case "name":
                  return "filter";
                case "extract":
                  var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                  return n ? n[1] / 100 : 1;
                case "inject":
                  return t.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                } else switch (e) {
                case "name":
                  return "opacity";
                case "extract":
                case "inject":
                  return i
                }
              }
            },
            register: function () {
              function e(e, t, i) {
                if ("border-box" === C.getPropertyValue(t, "boxSizing").toString().toLowerCase() === (i || !1)) {
                  var n, r, s = 0,
                    o = "width" === e ? ["Left", "Right"] : ["Top", "Bottom"],
                    a = ["padding" + o[0], "padding" + o[1], "border" + o[0] + "Width", "border" + o[1] + "Width"];
                  for (n = 0; n < a.length; n++) r = parseFloat(C.getPropertyValue(t, a[n])), isNaN(r) || (s += r);
                  return i ? -s : s
                }
                return 0
              }

              function t(t, i) {
                return function (n, r, s) {
                  switch (n) {
                  case "name":
                    return t;
                  case "extract":
                    return parseFloat(s) + e(t, r, i);
                  case "inject":
                    return parseFloat(s) - e(t, r, i) + "px"
                  }
                }
              }
              f && !(f > 9) || x.State.isGingerbread || (C.Lists.transformsBase = C.Lists.transformsBase.concat(C.Lists.transforms3D));
              for (var i = 0; i < C.Lists.transformsBase.length; i++) ! function () {
                var e = C.Lists.transformsBase[i];
                C.Normalizations.registered[e] = function (t, i, r) {
                  switch (t) {
                  case "name":
                    return "transform";
                  case "extract":
                    return s(i) === n || s(i).transformCache[e] === n ? /^scale/i.test(e) ? 1 : 0 : s(i).transformCache[e].replace(/[()]/g, "");
                  case "inject":
                    var o = !1;
                    switch (e.substr(0, e.length - 1)) {
                    case "translate":
                      o = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                      break;
                    case "scal":
                    case "scale":
                      x.State.isAndroid && s(i).transformCache[e] === n && r < 1 && (r = 1), o = !/(\d)$/i.test(r);
                      break;
                    case "skew":
                    case "rotate":
                      o = !/(deg|\d)$/i.test(r)
                    }
                    return o || (s(i).transformCache[e] = "(" + r + ")"), s(i).transformCache[e]
                  }
                }
              }();
              for (var r = 0; r < C.Lists.colors.length; r++) ! function () {
                var e = C.Lists.colors[r];
                C.Normalizations.registered[e] = function (t, i, r) {
                  switch (t) {
                  case "name":
                    return e;
                  case "extract":
                    var s;
                    if (C.RegEx.wrappedValueAlreadyExtracted.test(r)) s = r;
                    else {
                      var o, a = {
                        black: "rgb(0, 0, 0)",
                        blue: "rgb(0, 0, 255)",
                        gray: "rgb(128, 128, 128)",
                        green: "rgb(0, 128, 0)",
                        red: "rgb(255, 0, 0)",
                        white: "rgb(255, 255, 255)"
                      };
                      /^[A-z]+$/i.test(r) ? o = a[r] !== n ? a[r] : a.black : C.RegEx.isHex.test(r) ? o = "rgb(" + C.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (o = a.black), s = (o || r).toString().match(C.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                    }
                    return (!f || f > 8) && 3 === s.split(" ").length && (s += " 1"), s;
                  case "inject":
                    return /^rgb/.test(r) ? r : (f <= 8 ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"), (f <= 8 ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                  }
                }
              }();
              C.Normalizations.registered.innerWidth = t("width", !0), C.Normalizations.registered.innerHeight = t("height", !0), C.Normalizations.registered.outerWidth = t("width"), C.Normalizations.registered.outerHeight = t("height")
            }
          },
          Names: {
            camelCase: function (e) {
              return e.replace(/-(\w)/g, function (e, t) {
                return t.toUpperCase()
              })
            },
            SVGAttribute: function (e) {
              var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
              return (f || x.State.isAndroid && !x.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
            },
            prefixCheck: function (e) {
              if (x.State.prefixMatches[e]) return [x.State.prefixMatches[e], !0];
              for (var t = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = t.length; i < n; i++) {
                var r;
                if (r = 0 === i ? e : t[i] + e.replace(/^\w/, function (e) {
                    return e.toUpperCase()
                  }), y.isString(x.State.prefixElement.style[r])) return x.State.prefixMatches[e] = r, [r, !0]
              }
              return [e, !1]
            }
          },
          Values: {
            hexToRgb: function (e) {
              var t;
              return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, i, n) {
                return t + t + i + i + n + n
              }), (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
            },
            isCSSNullValue: function (e) {
              return !e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
            },
            getUnitType: function (e) {
              return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
            },
            getDisplayType: function (e) {
              var t = e && e.tagName.toString().toLowerCase();
              return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
            },
            addClass: function (e, t) {
              if (e)
                if (e.classList) e.classList.add(t);
                else if (y.isString(e.className)) e.className += (e.className.length ? " " : "") + t;
              else {
                var i = e.getAttribute(f <= 7 ? "className" : "class") || "";
                e.setAttribute("class", i + (i ? " " : "") + t)
              }
            },
            removeClass: function (e, t) {
              if (e)
                if (e.classList) e.classList.remove(t);
                else if (y.isString(e.className)) e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
              else {
                var i = e.getAttribute(f <= 7 ? "className" : "class") || "";
                e.setAttribute("class", i.replace(new RegExp("(^|s)" + t.split(" ").join("|") + "(s|$)", "gi"), " "))
              }
            }
          },
          getPropertyValue: function (e, i, r, o) {
            function a(e, i) {
              var r = 0;
              if (f <= 8) r = h.css(e, i);
              else {
                var l = !1;
                /^(width|height)$/.test(i) && 0 === C.getPropertyValue(e, "display") && (l = !0, C.setPropertyValue(e, "display", C.Values.getDisplayType(e)));
                var u, c = function () {
                  l && C.setPropertyValue(e, "display", "none")
                };
                if (!o) {
                  if ("height" === i && "border-box" !== C.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                    var d = e.offsetHeight - (parseFloat(C.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(C.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(C.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(C.getPropertyValue(e, "paddingBottom")) || 0);
                    return c(), d
                  }
                  if ("width" === i && "border-box" !== C.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                    var p = e.offsetWidth - (parseFloat(C.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(C.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(C.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(C.getPropertyValue(e, "paddingRight")) || 0);
                    return c(), p
                  }
                }
                u = s(e) === n ? t.getComputedStyle(e, null) : s(e).computedStyle ? s(e).computedStyle : s(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === i && (i = "borderTopColor"), "" !== (r = 9 === f && "filter" === i ? u.getPropertyValue(i) : u[i]) && null !== r || (r = e.style[i]), c()
              }
              if ("auto" === r && /^(top|right|bottom|left)$/i.test(i)) {
                var g = a(e, "position");
                ("fixed" === g || "absolute" === g && /top|left/i.test(i)) && (r = h(e).position()[i] + "px")
              }
              return r
            }
            var l;
            if (C.Hooks.registered[i]) {
              var u = i,
                c = C.Hooks.getRoot(u);
              r === n && (r = C.getPropertyValue(e, C.Names.prefixCheck(c)[0])), C.Normalizations.registered[c] && (r = C.Normalizations.registered[c]("extract", e, r)), l = C.Hooks.extractValue(u, r)
            } else if (C.Normalizations.registered[i]) {
              var d, p;
              "transform" !== (d = C.Normalizations.registered[i]("name", e)) && (p = a(e, C.Names.prefixCheck(d)[0]), C.Values.isCSSNullValue(p) && C.Hooks.templates[i] && (p = C.Hooks.templates[i][1])), l = C.Normalizations.registered[i]("extract", e, p)
            }
            if (!/^[\d-]/.test(l)) {
              var g = s(e);
              if (g && g.isSVG && C.Names.SVGAttribute(i))
                if (/^(height|width)$/i.test(i)) try {
                  l = e.getBBox()[i]
                } catch (e) {
                  l = 0
                } else l = e.getAttribute(i);
                else l = a(e, C.Names.prefixCheck(i)[0])
            }
            return C.Values.isCSSNullValue(l) && (l = 0), x.debug, l
          },
          setPropertyValue: function (e, i, n, r, o) {
            var a = i;
            if ("scroll" === i) o.container ? o.container["scroll" + o.direction] = n : "Left" === o.direction ? t.scrollTo(n, o.alternateValue) : t.scrollTo(o.alternateValue, n);
            else if (C.Normalizations.registered[i] && "transform" === C.Normalizations.registered[i]("name", e)) C.Normalizations.registered[i]("inject", e, n), a = "transform", n = s(e).transformCache[i];
            else {
              if (C.Hooks.registered[i]) {
                var l = i,
                  u = C.Hooks.getRoot(i);
                r = r || C.getPropertyValue(e, u), n = C.Hooks.injectValue(l, n, r), i = u
              }
              if (C.Normalizations.registered[i] && (n = C.Normalizations.registered[i]("inject", e, n), i = C.Normalizations.registered[i]("name", e)), a = C.Names.prefixCheck(i)[0], f <= 8) try {
                e.style[a] = n
              } catch (e) {
                x.debug
              } else {
                var c = s(e);
                c && c.isSVG && C.Names.SVGAttribute(i) ? e.setAttribute(i, n) : e.style[a] = n
              }
              x.debug
            }
            return [a, n]
          },
          flushTransformCache: function (e) {
            var t = "",
              i = s(e);
            if ((f || x.State.isAndroid && !x.State.isChrome) && i && i.isSVG) {
              var n = function (t) {
                  return parseFloat(C.getPropertyValue(e, t))
                },
                r = {
                  translate: [n("translateX"), n("translateY")],
                  skewX: [n("skewX")],
                  skewY: [n("skewY")],
                  scale: 1 !== n("scale") ? [n("scale"), n("scale")] : [n("scaleX"), n("scaleY")],
                  rotate: [n("rotateZ"), 0, 0]
                };
              h.each(s(e).transformCache, function (e) {
                /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), r[e] && (t += e + "(" + r[e].join(" ") + ") ", delete r[e])
              })
            } else {
              var o, a;
              h.each(s(e).transformCache, function (i) {
                if (o = s(e).transformCache[i], "transformPerspective" === i) return a = o, !0;
                9 === f && "rotateZ" === i && (i = "rotate"), t += i + o + " "
              }), a && (t = "perspective" + a + " " + t)
            }
            C.setPropertyValue(e, "transform", t)
          }
        };
        C.Hooks.register(), C.Normalizations.register(), x.hook = function (e, t, i) {
          var o;
          return e = r(e), h.each(e, function (e, r) {
            if (s(r) === n && x.init(r), i === n) o === n && (o = C.getPropertyValue(r, t));
            else {
              var a = C.setPropertyValue(r, t, i);
              "transform" === a[0] && x.CSS.flushTransformCache(r), o = a
            }
          }), o
        };
        var k = function () {
          function e() {
            return p ? T.promise || null : g
          }

          function l(e, r) {
            function o(o) {
              var f, p;
              if (l.begin && 0 === _) try {
                l.begin.call(b, b)
              } catch (e) {
                setTimeout(function () {
                  throw e
                }, 1)
              }
              if ("scroll" === P) {
                var g, m, w, k = /^x$/i.test(l.axis) ? "Left" : "Top",
                  A = parseFloat(l.offset) || 0;
                l.container ? y.isWrapped(l.container) || y.isNode(l.container) ? (l.container = l.container[0] || l.container, w = (g = l.container["scroll" + k]) + h(e).position()[k.toLowerCase()] + A) : l.container = null : (g = x.State.scrollAnchor[x.State["scrollProperty" + k]], m = x.State.scrollAnchor[x.State["scrollProperty" + ("Left" === k ? "Top" : "Left")]], w = h(e).offset()[k.toLowerCase()] + A), d = {
                  scroll: {
                    rootPropertyValue: !1,
                    startValue: g,
                    currentValue: g,
                    endValue: w,
                    unitType: "",
                    easing: l.easing,
                    scrollData: {
                      container: l.container,
                      direction: k,
                      alternateValue: m
                    }
                  },
                  element: e
                }, x.debug && d.scroll
              } else if ("reverse" === P) {
                if (!(f = s(e))) return;
                if (!f.tweensContainer) return void h.dequeue(e, l.queue);
                for (var O in "none" === f.opts.display && (f.opts.display = "auto"), "hidden" === f.opts.visibility && (f.opts.visibility = "visible"), f.opts.loop = !1, f.opts.begin = null, f.opts.complete = null, E.easing || delete l.easing, E.duration || delete l.duration, l = h.extend({}, f.opts, l), p = h.extend(!0, {}, f ? f.tweensContainer : null))
                  if (p.hasOwnProperty(O) && "element" !== O) {
                    var V = p[O].startValue;
                    p[O].startValue = p[O].currentValue = p[O].endValue, p[O].endValue = V, y.isEmptyObject(E) || (p[O].easing = l.easing), x.debug && JSON.stringify(p[O])
                  }
                d = p
              } else if ("start" === P) {
                (f = s(e)) && f.tweensContainer && !0 === f.isAnimating && (p = f.tweensContainer);
                var N = function (r, s) {
                  var o, u = C.Hooks.getRoot(r),
                    c = !1,
                    g = s[0],
                    m = s[1],
                    v = s[2];
                  if (f && f.isSVG || "tween" === u || !1 !== C.Names.prefixCheck(u)[1] || C.Normalizations.registered[u] !== n) {
                    (l.display !== n && null !== l.display && "none" !== l.display || l.visibility !== n && "hidden" !== l.visibility) && /opacity|filter/.test(r) && !v && 0 !== g && (v = 0), l._cacheValues && p && p[r] ? (v === n && (v = p[r].endValue + p[r].unitType), c = f.rootPropertyValueCache[u]) : C.Hooks.registered[r] ? v === n ? (c = C.getPropertyValue(e, u), v = C.getPropertyValue(e, r, c)) : c = C.Hooks.templates[u][1] : v === n && (v = C.getPropertyValue(e, r));
                    var b, w, S, E = !1,
                      k = function (e, t) {
                        var i, n;
                        return n = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
                          return i = e, ""
                        }), i || (i = C.Values.getUnitType(e)), [n, i]
                      };
                    if (v !== g && y.isString(v) && y.isString(g)) {
                      o = "";
                      var A = 0,
                        T = 0,
                        P = [],
                        L = [],
                        _ = 0,
                        O = 0,
                        V = 0;
                      for (v = C.Hooks.fixColors(v), g = C.Hooks.fixColors(g); A < v.length && T < g.length;) {
                        var N = v[A],
                          F = g[T];
                        if (/[\d\.-]/.test(N) && /[\d\.-]/.test(F)) {
                          for (var M = N, I = F, B = ".", R = "."; ++A < v.length;) {
                            if ((N = v[A]) === B) B = "..";
                            else if (!/\d/.test(N)) break;
                            M += N
                          }
                          for (; ++T < g.length;) {
                            if ((F = g[T]) === R) R = "..";
                            else if (!/\d/.test(F)) break;
                            I += F
                          }
                          var q = C.Hooks.getUnit(v, A),
                            z = C.Hooks.getUnit(g, T);
                          if (A += q.length, T += z.length, q === z) M === I ? o += M + q : (o += "{" + P.length + (O ? "!" : "") + "}" + q, P.push(parseFloat(M)), L.push(parseFloat(I)));
                          else {
                            var H = parseFloat(M),
                              U = parseFloat(I);
                            o += (_ < 5 ? "calc" : "") + "(" + (H ? "{" + P.length + (O ? "!" : "") + "}" : "0") + q + " + " + (U ? "{" + (P.length + (H ? 1 : 0)) + (O ? "!" : "") + "}" : "0") + z + ")", H && (P.push(H), L.push(0)), U && (P.push(0), L.push(U))
                          }
                        } else {
                          if (N !== F) {
                            _ = 0;
                            break
                          }
                          o += N, A++, T++, 0 === _ && "c" === N || 1 === _ && "a" === N || 2 === _ && "l" === N || 3 === _ && "c" === N || _ >= 4 && "(" === N ? _++ : (_ && _ < 5 || _ >= 4 && ")" === N && --_ < 5) && (_ = 0), 0 === O && "r" === N || 1 === O && "g" === N || 2 === O && "b" === N || 3 === O && "a" === N || O >= 3 && "(" === N ? (3 === O && "a" === N && (V = 1), O++) : V && "," === N ? ++V > 3 && (O = V = 0) : (V && O < (V ? 5 : 4) || O >= (V ? 4 : 3) && ")" === N && --O < (V ? 5 : 4)) && (O = V = 0)
                        }
                      }
                      A === v.length && T === g.length || (x.debug, o = n), o && (P.length ? (x.debug, v = P, g = L, w = S = "") : o = n)
                    }
                    if (o || (v = (b = k(r, v))[0], S = b[1], g = (b = k(r, g))[0].replace(/^([+-\/*])=/, function (e, t) {
                        return E = t, ""
                      }), w = b[1], v = parseFloat(v) || 0, g = parseFloat(g) || 0, "%" === w && (/^(fontSize|lineHeight)$/.test(r) ? (g /= 100, w = "em") : /^scale/.test(r) ? (g /= 100, w = "") : /(Red|Green|Blue)$/i.test(r) && (g = g / 100 * 255, w = ""))), /[\/*]/.test(E)) w = S;
                    else if (S !== w && 0 !== v)
                      if (0 === g) w = S;
                      else {
                        a = a || function () {
                          var n = {
                              myParent: e.parentNode || i.body,
                              position: C.getPropertyValue(e, "position"),
                              fontSize: C.getPropertyValue(e, "fontSize")
                            },
                            r = n.position === j.lastPosition && n.myParent === j.lastParent,
                            s = n.fontSize === j.lastFontSize;
                          j.lastParent = n.myParent, j.lastPosition = n.position, j.lastFontSize = n.fontSize;
                          var o = {};
                          if (s && r) o.emToPx = j.lastEmToPx, o.percentToPxWidth = j.lastPercentToPxWidth, o.percentToPxHeight = j.lastPercentToPxHeight;
                          else {
                            var a = f && f.isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                            x.init(a), n.myParent.appendChild(a), h.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                              x.CSS.setPropertyValue(a, t, "hidden")
                            }), x.CSS.setPropertyValue(a, "position", n.position), x.CSS.setPropertyValue(a, "fontSize", n.fontSize), x.CSS.setPropertyValue(a, "boxSizing", "content-box"), h.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                              x.CSS.setPropertyValue(a, t, "100%")
                            }), x.CSS.setPropertyValue(a, "paddingLeft", "100em"), o.percentToPxWidth = j.lastPercentToPxWidth = (parseFloat(C.getPropertyValue(a, "width", null, !0)) || 1) / 100, o.percentToPxHeight = j.lastPercentToPxHeight = (parseFloat(C.getPropertyValue(a, "height", null, !0)) || 1) / 100, o.emToPx = j.lastEmToPx = (parseFloat(C.getPropertyValue(a, "paddingLeft")) || 1) / 100, n.myParent.removeChild(a)
                          }
                          return null === j.remToPx && (j.remToPx = parseFloat(C.getPropertyValue(i.body, "fontSize")) || 16), null === j.vwToPx && (j.vwToPx = parseFloat(t.innerWidth) / 100, j.vhToPx = parseFloat(t.innerHeight) / 100), o.remToPx = j.remToPx, o.vwToPx = j.vwToPx, o.vhToPx = j.vhToPx, x.debug >= 1 && JSON.stringify(o), o
                        }();
                        var D = /margin|padding|left|right|width|text|word|letter/i.test(r) || /X$/.test(r) || "x" === r ? "x" : "y";
                        switch (S) {
                        case "%":
                          v *= "x" === D ? a.percentToPxWidth : a.percentToPxHeight;
                          break;
                        case "px":
                          break;
                        default:
                          v *= a[S + "ToPx"]
                        }
                        switch (w) {
                        case "%":
                          v *= 1 / ("x" === D ? a.percentToPxWidth : a.percentToPxHeight);
                          break;
                        case "px":
                          break;
                        default:
                          v *= 1 / a[w + "ToPx"]
                        }
                      }
                    switch (E) {
                    case "+":
                      g = v + g;
                      break;
                    case "-":
                      g = v - g;
                      break;
                    case "*":
                      g *= v;
                      break;
                    case "/":
                      g = v / g
                    }
                    d[r] = {
                      rootPropertyValue: c,
                      startValue: v,
                      currentValue: v,
                      endValue: g,
                      unitType: w,
                      easing: m
                    }, o && (d[r].pattern = o), x.debug && JSON.stringify(d[r])
                  } else x.debug
                };
                for (var F in S)
                  if (S.hasOwnProperty(F)) {
                    var M = C.Names.camelCase(F),
                      I = function (t, i) {
                        var n, s, o;
                        return y.isFunction(t) && (t = t.call(e, r, L)), y.isArray(t) ? (n = t[0], !y.isArray(t[1]) && /^[\d-]/.test(t[1]) || y.isFunction(t[1]) || C.RegEx.isHex.test(t[1]) ? o = t[1] : y.isString(t[1]) && !C.RegEx.isHex.test(t[1]) && x.Easings[t[1]] || y.isArray(t[1]) ? (s = u(t[1], l.duration), o = t[2]) : o = t[1] || t[2]) : n = t, s = s || l.easing, y.isFunction(n) && (n = n.call(e, r, L)), y.isFunction(o) && (o = o.call(e, r, L)), [n || 0, s, o]
                      }(S[F]);
                    if (v(C.Lists.colors, M)) {
                      var R = I[0],
                        q = I[1],
                        z = I[2];
                      if (C.RegEx.isHex.test(R)) {
                        for (var H = ["Red", "Green", "Blue"], U = C.Values.hexToRgb(R), D = z ? C.Values.hexToRgb(z) : n, G = 0; G < H.length; G++) {
                          var $ = [U[G]];
                          q && $.push(q), D !== n && $.push(D[G]), N(M + H[G], $)
                        }
                        continue
                      }
                    }
                    N(M, I)
                  }
                d.element = e
              }
              d.element && (C.Values.addClass(e, "velocity-animating"), B.push(d), (f = s(e)) && ("" === l.queue && (f.tweensContainer = d, f.opts = l), f.isAnimating = !0), _ === L - 1 ? (x.State.calls.push([B, b, l, null, T.resolver, null, 0]), !1 === x.State.isTicking && (x.State.isTicking = !0, c())) : _++)
            }
            var a, l = h.extend({}, x.defaults, E),
              d = {};
            switch (s(e) === n && x.init(e), parseFloat(l.delay) && !1 !== l.queue && h.queue(e, l.queue, function (t, i) {
              if (!0 === i) return !0;
              x.velocityQueueEntryFlag = !0;
              var n = x.State.delayedElements.count++;
              x.State.delayedElements[n] = e;
              var r = function (e) {
                return function () {
                  x.State.delayedElements[e] = !1, t()
                }
              }(n);
              s(e).delayBegin = (new Date).getTime(), s(e).delay = parseFloat(l.delay), s(e).delayTimer = {
                setTimeout: setTimeout(t, parseFloat(l.delay)),
                next: r
              }
            }), l.duration.toString().toLowerCase()) {
            case "fast":
              l.duration = 200;
              break;
            case "normal":
              l.duration = w;
              break;
            case "slow":
              l.duration = 600;
              break;
            default:
              l.duration = parseFloat(l.duration) || 1
            }
            if (!1 !== x.mock && (!0 === x.mock ? l.duration = l.delay = 1 : (l.duration *= parseFloat(x.mock) || 1, l.delay *= parseFloat(x.mock) || 1)), l.easing = u(l.easing, l.duration), l.begin && !y.isFunction(l.begin) && (l.begin = null), l.progress && !y.isFunction(l.progress) && (l.progress = null), l.complete && !y.isFunction(l.complete) && (l.complete = null), l.display !== n && null !== l.display && (l.display = l.display.toString().toLowerCase(), "auto" === l.display && (l.display = x.CSS.Values.getDisplayType(e))), l.visibility !== n && null !== l.visibility && (l.visibility = l.visibility.toString().toLowerCase()), l.mobileHA = l.mobileHA && x.State.isMobile && !x.State.isGingerbread, !1 === l.queue)
              if (l.delay) {
                var f = x.State.delayedElements.count++;
                x.State.delayedElements[f] = e;
                var p = function (e) {
                  return function () {
                    x.State.delayedElements[e] = !1, o()
                  }
                }(f);
                s(e).delayBegin = (new Date).getTime(), s(e).delay = parseFloat(l.delay), s(e).delayTimer = {
                  setTimeout: setTimeout(o, parseFloat(l.delay)),
                  next: p
                }
              } else o();
            else h.queue(e, l.queue, function (e, t) {
              if (!0 === t) return T.promise && T.resolver(b), !0;
              x.velocityQueueEntryFlag = !0, o()
            });
            "" !== l.queue && "fx" !== l.queue || "inprogress" === h.queue(e)[0] || h.dequeue(e)
          }
          var f, p, g, m, b, S, E, A = arguments[0] && (arguments[0].p || h.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || y.isString(arguments[0].properties));
          y.isWrapped(this) ? (p = !1, m = 0, b = this, g = this) : (p = !0, m = 1, b = A ? arguments[0].elements || arguments[0].e : arguments[0]);
          var T = {
            promise: null,
            resolver: null,
            rejecter: null
          };
          if (p && x.Promise && (T.promise = new x.Promise(function (e, t) {
              T.resolver = e, T.rejecter = t
            })), A ? (S = arguments[0].properties || arguments[0].p, E = arguments[0].options || arguments[0].o) : (S = arguments[m], E = arguments[m + 1]), b = r(b)) {
            var P, L = b.length,
              _ = 0;
            if (!/^(stop|finish|finishAll|pause|resume)$/i.test(S) && !h.isPlainObject(E)) {
              E = {};
              for (var O = m + 1; O < arguments.length; O++) y.isArray(arguments[O]) || !/^(fast|normal|slow)$/i.test(arguments[O]) && !/^\d/.test(arguments[O]) ? y.isString(arguments[O]) || y.isArray(arguments[O]) ? E.easing = arguments[O] : y.isFunction(arguments[O]) && (E.complete = arguments[O]) : E.duration = arguments[O]
            }
            switch (S) {
            case "scroll":
              P = "scroll";
              break;
            case "reverse":
              P = "reverse";
              break;
            case "pause":
              var V = (new Date).getTime();
              return h.each(b, function (e, t) {
                o(t, V)
              }), h.each(x.State.calls, function (e, t) {
                var i = !1;
                t && h.each(t[1], function (e, r) {
                  var s = E === n ? "" : E;
                  return !0 !== s && t[2].queue !== s && (E !== n || !1 !== t[2].queue) || (h.each(b, function (e, n) {
                    if (n === r) return t[5] = {
                      resume: !1
                    }, i = !0, !1
                  }), !i && undefined)
                })
              }), e();
            case "resume":
              return h.each(b, function (e, t) {
                a(t)
              }), h.each(x.State.calls, function (e, t) {
                var i = !1;
                t && h.each(t[1], function (e, r) {
                  var s = E === n ? "" : E;
                  return !0 !== s && t[2].queue !== s && (E !== n || !1 !== t[2].queue) || !t[5] || (h.each(b, function (e, n) {
                    if (n === r) return t[5].resume = !0, i = !0, !1
                  }), !i && undefined)
                })
              }), e();
            case "finish":
            case "finishAll":
            case "stop":
              h.each(b, function (e, t) {
                s(t) && s(t).delayTimer && (clearTimeout(s(t).delayTimer.setTimeout), s(t).delayTimer.next && s(t).delayTimer.next(), delete s(t).delayTimer), "finishAll" !== S || !0 !== E && !y.isString(E) || (h.each(h.queue(t, y.isString(E) ? E : ""), function (e, t) {
                  y.isFunction(t) && t()
                }), h.queue(t, y.isString(E) ? E : "", []))
              });
              var N = [];
              return h.each(x.State.calls, function (e, t) {
                t && h.each(t[1], function (i, r) {
                  var o = E === n ? "" : E;
                  if (!0 !== o && t[2].queue !== o && (E !== n || !1 !== t[2].queue)) return !0;
                  h.each(b, function (i, n) {
                    if (n === r)
                      if ((!0 === E || y.isString(E)) && (h.each(h.queue(n, y.isString(E) ? E : ""), function (e, t) {
                          y.isFunction(t) && t(null, !0)
                        }), h.queue(n, y.isString(E) ? E : "", [])), "stop" === S) {
                        var a = s(n);
                        a && a.tweensContainer && (!0 === o || "" === o) && h.each(a.tweensContainer, function (e, t) {
                          t.endValue = t.currentValue
                        }), N.push(e)
                      } else "finish" !== S && "finishAll" !== S || (t[2].duration = 1)
                  })
                })
              }), "stop" === S && (h.each(N, function (e, t) {
                d(t, !0)
              }), T.promise && T.resolver(b)), e();
            default:
              if (!h.isPlainObject(S) || y.isEmptyObject(S)) {
                if (y.isString(S) && x.Redirects[S]) {
                  var F = (f = h.extend({}, E)).duration,
                    M = f.delay || 0;
                  return !0 === f.backwards && (b = h.extend(!0, [], b).reverse()), h.each(b, function (e, t) {
                    parseFloat(f.stagger) ? f.delay = M + parseFloat(f.stagger) * e : y.isFunction(f.stagger) && (f.delay = M + f.stagger.call(t, e, L)), f.drag && (f.duration = parseFloat(F) || (/^(callout|transition)/.test(S) ? 1e3 : w), f.duration = Math.max(f.duration * (f.backwards ? 1 - e / L : (e + 1) / L), .75 * f.duration, 200)), x.Redirects[S].call(t, t, f || {}, e, L, b, T.promise ? T : n)
                  }), e()
                }
                var I = "Velocity: First argument (" + S + ") was not a property map, a known action, or a registered redirect. Aborting.";
                return T.promise ? T.rejecter(new Error(I)) : t.console, e()
              }
              P = "start"
            }
            var j = {
                lastParent: null,
                lastPosition: null,
                lastFontSize: null,
                lastPercentToPxWidth: null,
                lastPercentToPxHeight: null,
                lastEmToPx: null,
                remToPx: null,
                vwToPx: null,
                vhToPx: null
              },
              B = [];
            h.each(b, function (e, t) {
              y.isNode(t) && l(t, e)
            }), (f = h.extend({}, x.defaults, E)).loop = parseInt(f.loop, 10);
            var R = 2 * f.loop - 1;
            if (f.loop)
              for (var q = 0; q < R; q++) {
                var z = {
                  delay: f.delay,
                  progress: f.progress
                };
                q === R - 1 && (z.display = f.display, z.visibility = f.visibility, z.complete = f.complete), k(b, "reverse", z)
              }
            return e()
          }
          T.promise && (S && E && !1 === E.promiseRejectEmpty ? T.resolver() : T.rejecter())
        };
        (x = h.extend(k, x)).animate = k;
        var A = t.requestAnimationFrame || p;
        if (!x.State.isMobile && i.hidden !== n) {
          var T = function () {
            i.hidden ? (A = function (e) {
              return setTimeout(function () {
                e(!0)
              }, 16)
            }, c()) : A = t.requestAnimationFrame || p
          };
          T(), i.addEventListener("visibilitychange", T)
        }
        return e.Velocity = x, e !== t && (e.fn.velocity = k, e.fn.velocity.defaults = x.defaults), h.each(["Down", "Up"], function (e, t) {
          x.Redirects["slide" + t] = function (e, i, r, s, o, a) {
            var l = h.extend({}, i),
              u = l.begin,
              c = l.complete,
              d = {},
              f = {
                height: "",
                marginTop: "",
                marginBottom: "",
                paddingTop: "",
                paddingBottom: ""
              };
            l.display === n && (l.display = "Down" === t ? "inline" === x.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
              for (var i in 0 === r && u && u.call(o, o), f)
                if (f.hasOwnProperty(i)) {
                  d[i] = e.style[i];
                  var n = C.getPropertyValue(e, i);
                  f[i] = "Down" === t ? [n, 0] : [0, n]
                }
              d.overflow = e.style.overflow, e.style.overflow = "hidden"
            }, l.complete = function () {
              for (var t in d) d.hasOwnProperty(t) && (e.style[t] = d[t]);
              r === s - 1 && (c && c.call(o, o), a && a.resolver(o))
            }, x(e, f, l)
          }
        }), h.each(["In", "Out"], function (e, t) {
          x.Redirects["fade" + t] = function (e, i, r, s, o, a) {
            var l = h.extend({}, i),
              u = l.complete,
              c = {
                opacity: "In" === t ? 1 : 0
              };
            0 !== r && (l.begin = null), l.complete = r !== s - 1 ? null : function () {
              u && u.call(o, o), a && a.resolver(o)
            }, l.display === n && (l.display = "In" === t ? "auto" : "none"), x(this, c, l)
          }
        }), x
      }
      jQuery.fn.velocity = jQuery.fn.animate
    }(window.jQuery || window.Zepto || window, window, window ? window.document : undefined)
  })
}, function (e, t, i) {
  (function (t, i) {
    var n;
    n = function () {
      "use strict";

      function e(e) {
        return "function" == typeof e
      }
      var n = Array.isArray ? Array.isArray : function (e) {
          return "[object Array]" === Object.prototype.toString.call(e)
        },
        r = 0,
        s = undefined,
        o = undefined,
        a = function (e, t) {
          p[r] = e, p[r + 1] = t, 2 === (r += 2) && (o ? o(g) : w())
        };
      var l = "undefined" != typeof window ? window : undefined,
        u = l || {},
        c = u.MutationObserver || u.WebKitMutationObserver,
        d = "undefined" == typeof self && undefined !== t && "[object process]" === {}.toString.call(t),
        h = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

      function f() {
        var e = setTimeout;
        return function () {
          return e(g, 1)
        }
      }
      var p = new Array(1e3);

      function g() {
        for (var e = 0; e < r; e += 2) {
          (0, p[e])(p[e + 1]), p[e] = undefined, p[e + 1] = undefined
        }
        r = 0
      }
      var m, v, y, b, w = undefined;

      function S(e, t) {
        var i = this,
          n = new this.constructor(C);
        undefined === n[E] && R(n);
        var r = i._state;
        if (r) {
          var s = arguments[r - 1];
          a(function () {
            return j(r, n, s, i._result)
          })
        } else M(i, n, e, t);
        return n
      }

      function x(e) {
        if (e && "object" == typeof e && e.constructor === this) return e;
        var t = new this(C);
        return O(t, e), t
      }
      d ? w = function () {
        return t.nextTick(g)
      } : c ? (v = 0, y = new c(g), b = document.createTextNode(""), y.observe(b, {
        characterData: !0
      }), w = function () {
        b.data = v = ++v % 2
      }) : h ? ((m = new MessageChannel).port1.onmessage = g, w = function () {
        return m.port2.postMessage(0)
      }) : w = undefined === l ? function () {
        try {
          var e = Function("return this")().require("vertx");
          return undefined !== (s = e.runOnLoop || e.runOnContext) ? function () {
            s(g)
          } : f()
        } catch (e) {
          return f()
        }
      }() : f();
      var E = Math.random().toString(36).substring(2);

      function C() {}
      var k = undefined,
        A = 1,
        T = 2,
        P = {
          error: null
        };

      function L(e) {
        try {
          return e.then
        } catch (e) {
          return P.error = e, P
        }
      }

      function _(t, i, n) {
        i.constructor === t.constructor && n === S && i.constructor.resolve === x ? function (e, t) {
          t._state === A ? N(e, t._result) : t._state === T ? F(e, t._result) : M(t, undefined, function (t) {
            return O(e, t)
          }, function (t) {
            return F(e, t)
          })
        }(t, i) : n === P ? (F(t, P.error), P.error = null) : undefined === n ? N(t, i) : e(n) ? function (e, t, i) {
          a(function (e) {
            var n = !1,
              r = function (e, t, i, n) {
                try {
                  e.call(t, i, n)
                } catch (e) {
                  return e
                }
              }(i, t, function (i) {
                n || (n = !0, t !== i ? O(e, i) : N(e, i))
              }, function (t) {
                n || (n = !0, F(e, t))
              }, e._label);
            !n && r && (n = !0, F(e, r))
          }, e)
        }(t, i, n) : N(t, i)
      }

      function O(e, t) {
        var i, n;
        e === t ? F(e, new TypeError("You cannot resolve a promise with itself")) : (n = typeof (i = t), null === i || "object" !== n && "function" !== n ? N(e, t) : _(e, t, L(t)))
      }

      function V(e) {
        e._onerror && e._onerror(e._result), I(e)
      }

      function N(e, t) {
        e._state === k && (e._result = t, e._state = A, 0 !== e._subscribers.length && a(I, e))
      }

      function F(e, t) {
        e._state === k && (e._state = T, e._result = t, a(V, e))
      }

      function M(e, t, i, n) {
        var r = e._subscribers,
          s = r.length;
        e._onerror = null, r[s] = t, r[s + A] = i, r[s + T] = n, 0 === s && e._state && a(I, e)
      }

      function I(e) {
        var t = e._subscribers,
          i = e._state;
        if (0 !== t.length) {
          for (var n = undefined, r = undefined, s = e._result, o = 0; o < t.length; o += 3) n = t[o], r = t[o + i], n ? j(i, n, r, s) : r(s);
          e._subscribers.length = 0
        }
      }

      function j(t, i, n, r) {
        var s = e(n),
          o = undefined,
          a = undefined,
          l = undefined,
          u = undefined;
        if (s) {
          if ((o = function (e, t) {
              try {
                return e(t)
              } catch (e) {
                return P.error = e, P
              }
            }(n, r)) === P ? (u = !0, a = o.error, o.error = null) : l = !0, i === o) return void F(i, new TypeError("A promises callback cannot return that same promise."))
        } else o = r, l = !0;
        i._state !== k || (s && l ? O(i, o) : u ? F(i, a) : t === A ? N(i, o) : t === T && F(i, o))
      }
      var B = 0;

      function R(e) {
        e[E] = B++, e._state = undefined, e._result = undefined, e._subscribers = []
      }
      var q = function () {
        function e(e, t) {
          this._instanceConstructor = e, this.promise = new e(C), this.promise[E] || R(this.promise), n(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? N(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && N(this.promise, this._result))) : F(this.promise, new Error("Array Methods must be provided an Array"))
        }
        return e.prototype._enumerate = function (e) {
          for (var t = 0; this._state === k && t < e.length; t++) this._eachEntry(e[t], t)
        }, e.prototype._eachEntry = function (e, t) {
          var i = this._instanceConstructor,
            n = i.resolve;
          if (n === x) {
            var r = L(e);
            if (r === S && e._state !== k) this._settledAt(e._state, t, e._result);
            else if ("function" != typeof r) this._remaining--, this._result[t] = e;
            else if (i === z) {
              var s = new i(C);
              _(s, e, r), this._willSettleAt(s, t)
            } else this._willSettleAt(new i(function (t) {
              return t(e)
            }), t)
          } else this._willSettleAt(n(e), t)
        }, e.prototype._settledAt = function (e, t, i) {
          var n = this.promise;
          n._state === k && (this._remaining--, e === T ? F(n, i) : this._result[t] = i), 0 === this._remaining && N(n, this._result)
        }, e.prototype._willSettleAt = function (e, t) {
          var i = this;
          M(e, undefined, function (e) {
            return i._settledAt(A, t, e)
          }, function (e) {
            return i._settledAt(T, t, e)
          })
        }, e
      }();
      var z = function () {
        function e(t) {
          this[E] = B++, this._result = this._state = undefined, this._subscribers = [], C !== t && ("function" != typeof t && function () {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
          }(), this instanceof e ? function (e, t) {
            try {
              t(function (t) {
                O(e, t)
              }, function (t) {
                F(e, t)
              })
            } catch (t) {
              F(e, t)
            }
          }(this, t) : function () {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
          }())
        }
        return e.prototype.catch = function (e) {
          return this.then(null, e)
        }, e.prototype.finally = function (e) {
          var t = this.constructor;
          return this.then(function (i) {
            return t.resolve(e()).then(function () {
              return i
            })
          }, function (i) {
            return t.resolve(e()).then(function () {
              throw i
            })
          })
        }, e
      }();
      return z.prototype.then = S, z.all = function (e) {
        return new q(this, e).promise
      }, z.race = function (e) {
        var t = this;
        return n(e) ? new t(function (i, n) {
          for (var r = e.length, s = 0; s < r; s++) t.resolve(e[s]).then(i, n)
        }) : new t(function (e, t) {
          return t(new TypeError("You must pass an array to race."))
        })
      }, z.resolve = x, z.reject = function (e) {
        var t = new this(C);
        return F(t, e), t
      }, z._setScheduler = function (e) {
        o = e
      }, z._setAsap = function (e) {
        a = e
      }, z._asap = a, z.polyfill = function () {
        var e = undefined;
        if (undefined !== i) e = i;
        else if ("undefined" != typeof self) e = self;
        else try {
          e = Function("return this")()
        } catch (e) {
          throw new Error("polyfill failed because global object is unavailable in this environment")
        }
        var t = e.Promise;
        if (t) {
          var n = null;
          try {
            n = Object.prototype.toString.call(t.resolve())
          } catch (e) {}
          if ("[object Promise]" === n && !t.cast) return
        }
        e.Promise = z
      }, z.Promise = z, z
    }, e.exports = n()
  }).call(this, i(5), i(6))
}, function (e, t) {
  "document" in self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function (e) {
    "use strict";
    if ("Element" in e) {
      var t = e.Element.prototype,
        i = Object,
        n = String.prototype.trim || function () {
          return this.replace(/^\s+|\s+$/g, "")
        },
        r = Array.prototype.indexOf || function (e) {
          for (var t = 0, i = this.length; t < i; t++)
            if (t in this && this[t] === e) return t;
          return -1
        },
        s = function (e, t) {
          this.name = e, this.code = DOMException[e], this.message = t
        },
        o = function (e, t) {
          if ("" === t) throw new s("SYNTAX_ERR", "The token must not be empty.");
          if (/\s/.test(t)) throw new s("INVALID_CHARACTER_ERR", "The token must not contain space characters.");
          return r.call(e, t)
        },
        a = function (e) {
          for (var t = n.call(e.getAttribute("class") || ""), i = t ? t.split(/\s+/) : [], r = 0, s = i.length; r < s; r++) this.push(i[r]);
          this._updateClassName = function () {
            e.setAttribute("class", this.toString())
          }
        },
        l = a.prototype = [],
        u = function () {
          return new a(this)
        };
      if (s.prototype = Error.prototype, l.item = function (e) {
          return this[e] || null
        }, l.contains = function (e) {
          return ~o(this, e + "")
        }, l.add = function () {
          var e, t = arguments,
            i = 0,
            n = t.length,
            r = !1;
          do {
            e = t[i] + "", ~o(this, e) || (this.push(e), r = !0)
          } while (++i < n);
          r && this._updateClassName()
        }, l.remove = function () {
          var e, t, i = arguments,
            n = 0,
            r = i.length,
            s = !1;
          do {
            for (e = i[n] + "", t = o(this, e); ~t;) this.splice(t, 1), s = !0, t = o(this, e)
          } while (++n < r);
          s && this._updateClassName()
        }, l.toggle = function (e, t) {
          var i = this.contains(e),
            n = i ? !0 !== t && "remove" : !1 !== t && "add";
          return n && this[n](e), !0 === t || !1 === t ? t : !i
        }, l.replace = function (e, t) {
          var i = o(e + "");
          ~i && (this.splice(i, 1, t), this._updateClassName())
        }, l.toString = function () {
          return this.join(" ")
        }, i.defineProperty) {
        var c = {
          get: u,
          enumerable: !0,
          configurable: !0
        };
        try {
          i.defineProperty(t, "classList", c)
        } catch (e) {
          undefined !== e.number && -2146823252 !== e.number || (c.enumerable = !1, i.defineProperty(t, "classList", c))
        }
      } else i.prototype.__defineGetter__ && t.__defineGetter__("classList", u)
    }
  }(self), function () {
    "use strict";
    var e = document.createElement("_");
    if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
      var t = function (e) {
        var t = DOMTokenList.prototype[e];
        DOMTokenList.prototype[e] = function (e) {
          var i, n = arguments.length;
          for (i = 0; i < n; i++) e = arguments[i], t.call(this, e)
        }
      };
      t("add"), t("remove")
    }
    if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
      var i = DOMTokenList.prototype.toggle;
      DOMTokenList.prototype.toggle = function (e, t) {
        return 1 in arguments && !this.contains(e) == !t ? t : i.call(this, e)
      }
    }
    "replace" in document.createElement("_").classList || (DOMTokenList.prototype.replace = function (e, t) {
      var i = this.toString().split(" "),
        n = i.indexOf(e + "");
      ~n && (i = i.slice(n), this.remove.apply(this, i), this.add(t), this.add.apply(this, i.slice(1)))
    }), e = null
  }())
}, function (e, t) {
  var i, n, r = e.exports = {};

  function s() {
    throw new Error("setTimeout has not been defined")
  }

  function o() {
    throw new Error("clearTimeout has not been defined")
  }

  function a(e) {
    if (i === setTimeout) return setTimeout(e, 0);
    if ((i === s || !i) && setTimeout) return i = setTimeout, setTimeout(e, 0);
    try {
      return i(e, 0)
    } catch (t) {
      try {
        return i.call(null, e, 0)
      } catch (t) {
        return i.call(this, e, 0)
      }
    }
  }! function () {
    try {
      i = "function" == typeof setTimeout ? setTimeout : s
    } catch (e) {
      i = s
    }
    try {
      n = "function" == typeof clearTimeout ? clearTimeout : o
    } catch (e) {
      n = o
    }
  }();
  var l, u = [],
    c = !1,
    d = -1;

  function h() {
    c && l && (c = !1, l.length ? u = l.concat(u) : d = -1, u.length && f())
  }

  function f() {
    if (!c) {
      var e = a(h);
      c = !0;
      for (var t = u.length; t;) {
        for (l = u, u = []; ++d < t;) l && l[d].run();
        d = -1, t = u.length
      }
      l = null, c = !1,
        function (e) {
          if (n === clearTimeout) return clearTimeout(e);
          if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
          try {
            n(e)
          } catch (t) {
            try {
              return n.call(null, e)
            } catch (t) {
              return n.call(this, e)
            }
          }
        }(e)
    }
  }

  function p(e, t) {
    this.fun = e, this.array = t
  }

  function g() {}
  r.nextTick = function (e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
    u.push(new p(e, t)), 1 !== u.length || c || a(f)
  }, p.prototype.run = function () {
    this.fun.apply(null, this.array)
  }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = g, r.addListener = g, r.once = g, r.off = g, r.removeListener = g, r.removeAllListeners = g, r.emit = g, r.prependListener = g, r.prependOnceListener = g, r.listeners = function (e) {
    return []
  }, r.binding = function (e) {
    throw new Error("process.binding is not supported")
  }, r.cwd = function () {
    return "/"
  }, r.chdir = function (e) {
    throw new Error("process.chdir is not supported")
  }, r.umask = function () {
    return 0
  }
}, function (e, t) {
  var i;
  i = function () {
    return this
  }();
  try {
    i = i || Function("return this")() || (0, eval)("this")
  } catch (e) {
    "object" == typeof window && (i = window)
  }
  e.exports = i
}, function (e, t, i) {
  "use strict";
  i.r(t);
  i(4);
  var n = i(0),
    r = i.n(n),
    s = function () {
      function e(e) {
        this.isEnable = !1, this.hash = e, this.scrollTopDiffSpace = 0, this.handleLoadBind = this.handleLoad.bind(this), "string" == typeof this.hash && (this.isEnable = !0)
      }
      var t = e.prototype;
      return t.bind = function () {
        this.isEnable && window.addEventListener("load", this.handleLoadBind, !!r.a && {
          passive: !1,
          once: !0
        })
      }, t.unbind = function () {
        window.removeEventListener("load", this.handleLoadBind, !!r.a && {
          passive: !1,
          once: !0
        })
      }, t.setShiftPixel = function (e) {
        "number" == typeof e && (this.scrollTopDiffSpace = e)
      }, t.handleLoad = function () {
        var t = this;
        if (this.isEnable) {
          this.targetEl = document.getElementById(this.hash.replace(/^#/, ""));
          var i = document.querySelector("#sbg-appshell-v1-header").getBoundingClientRect().height;
          null !== this.targetEl && setTimeout(function () {
            e.scrollTo(t.targetEl, i + t.scrollTopDiffSpace)
          }, 0)
        }
        this.unbind()
      }, e.scrollTo = function (e, t) {
        undefined === t && (t = 0);
        var i = e.getBoundingClientRect().top - t;
        window.scrollBy(0, i)
      }, e
    }(),
    o = window.Velocity,
    a = i(2),
    l = i.n(a);
  o ? window.Velocity = o : delete window.Velocity;
  var u, c = l.a,
    d = i(3),
    h = i.n(d).a.Promise,
    f = function () {
      function e() {
        this.el = document.querySelector("#sbg-appshell-v1-header-info"), null === this.el ? this.isExist = !1 : this.isExist = !0
      }
      var t = e.prototype;
      return t.open = function (e) {
        var t = this,
          i = window.getComputedStyle(this.el).height;
        this.el.style.height = "auto";
        var n = window.getComputedStyle(this.el).height;
        return this.el.style.height = i, new h(function (i) {
          c(t.el, "stop"), c(t.el, {
            height: n
          }, {
            duration: e || 300,
            easing: "ease-out",
            complete: function () {
              i()
            }
          })
        })
      }, t.immediateOpen = function () {
        this.el.style.height = "auto"
      }, t.close = function (e) {
        var t = this;
        return new h(function (i) {
          c(t.el, "stop"), c(t.el, {
            height: 0
          }, {
            duration: e || 300,
            easing: "ease-out",
            complete: function () {
              i()
            }
          })
        })
      }, e
    }(),
    p = ((u = document.createElement("div")).style.position = "-webkit-sticky", u.style.position = "sticky", !!u.style.position);
  var g, m = function (e) {
      var t, i;

      function n() {
        var t;
        return (t = e.call(this) || this).el = document.querySelector("#sbg-appshell-v1-header-fixed-area .sbg-appshell-v1-header-fixed-area_inner"), t.setFixedItem(t.el), t.setContainer(document.querySelector("#sbg-appshell-v1-header-fixed-area")), t.className.fixed = "sbg-appshell-v1-header-fixed-area--fixed", t.className.animate = "sbg-appshell-v1-header-fixed-area--animate", t.className.sticky = "sbg-appshell-v1-header-fixed-area--sticky", t.isAutoFixedMode = !0, t.isFixedMode = !1, t.isSupportSticky && t.container.classList.add(t.className.sticky), t
      }
      i = e, (t = n).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i;
      var r = n.prototype;
      return r.bind = function () {
        this.stickyViewBind()
      }, r.unbind = function () {
        this.stickyViewUnbind()
      }, r.stickyViewBind = function () {
        e.prototype.bind.call(this)
      }, r.stickyViewUnbind = function () {
        e.prototype.unbind.call(this)
      }, r.useFixedMode = function () {
        var e = this;
        this.isAutoFixedMode = !1, this.isFixedMode = !0, "fixed" !== window.getComputedStyle(this.fixedItem).position && (this.fixedItem.style.top = this.fixedItem.getBoundingClientRect().top + "px", this.positionFixed());
        var t;
        return 0 !== this.fixedItem.getBoundingClientRect().top ? t = new h(function (t) {
          c(e.fixedItem, "stop"), c(e.fixedItem, {
            top: 0
          }, {
            duration: 300,
            easing: "ease-out",
            complete: function () {
              t()
            }
          })
        }) : (this.container.classList.add(this.className.animate), t = new h(function (t) {
          setTimeout(function () {
            e.container.classList.remove(e.className.animate), t()
          }, 300)
        })), t
      }, r.useAutoFixedMode = function (e) {
        var t = this;
        return this.isAutoFixedMode = !0, this.isFixedMode = !1, new h(function (i) {
          c(t.fixedItem, "stop"), c(t.fixedItem, {
            top: e
          }, {
            duration: 300,
            easing: "ease-out",
            complete: function () {
              var e = t.fixedItem.getAttribute("style").replace(/(\s|^)top\s*:\s*[^;]*;/, "");
              "" === e ? t.fixedItem.removeAttribute("style") : t.fixedItem.setAttribute("style", e), i()
            }
          })
        })
      }, r.useStaticMode = function () {
        this.fixedItem.style.position = "static"
      }, r.forceFixed = function (e) {
        this.fixedItem.style.top = parseFloat(e, 10) + "px"
      }, n
    }(function () {
      function e(e, t) {
        t && this.setFixedItem(t), e && this.setContainer(e), this.handleScrollBind = this.handleScroll.bind(this), this.scrollingElement = "scrollingElement" in document ? document.scrollingElement : -1 != navigator.userAgent.indexOf("WebKit") ? document.body : document.documentElement, this.isFixed = !1, this.isSupportSticky = p, this.className = {
          fixed: "fixed"
        }
      }
      var t = e.prototype;
      return t.setFixedItem = function (e) {
        this.fixedItem = e
      }, t.setContainer = function (e) {
        this.container = e
      }, t.bind = function () {
        this.isSupportSticky || window.addEventListener("scroll", this.handleScrollBind, !!r.a && {
          passive: !0,
          once: !1
        })
      }, t.unbind = function () {
        this.isSupportSticky || window.addEventListener("scroll", this.handleScrollBind, !!r.a && {
          passive: !0,
          once: !1
        })
      }, t.handleScroll = function () {
        this.updateMode()
      }, t.updateMode = function () {
        if (this.container.getBoundingClientRect().top < 0) {
          if (this.isFixed) return;
          this.isFixed = !0, this.positionFixed()
        } else {
          if (!this.isFixed) return;
          this.isFixed = !1, this.positionStatic()
        }
      }, t.positionFixed = function () {
        this.container.style.height = this.fixedItem.getBoundingClientRect().height + "px", this.container.classList.add(this.className.fixed)
      }, t.positionStatic = function () {
        this.container.style.height = "auto", this.container.classList.remove(this.className.fixed)
      }, e
    }()),
    v = function () {
      function e() {
        this.el = document.querySelector("#sbg-appshell-v1-contents"), this.className = {
          invisible: "sbg-appshell-v1-contents--invisible"
        }, this.show()
      }
      var t = e.prototype;
      return t.bind = function () {}, t.unbind = function () {}, t.hide = function () {
        this.el.classList.add(this.className.invisible)
      }, t.show = function () {
        this.el.classList.remove(this.className.invisible)
      }, e
    }(),
    y = function () {
      function e() {
        this.el = document.querySelector("#sbg-appshell-v1-category-footer"), null !== this.el ? (this.isExist = !0, this.className = {
          invisible: "sbg-appshell-v1-category-footer--invisible"
        }, this.show()) : this.isExist = !1
      }
      var t = e.prototype;
      return t.bind = function () {}, t.unbind = function () {}, t.hide = function () {
        this.el.classList.add(this.className.invisible)
      }, t.show = function () {
        this.el.classList.remove(this.className.invisible)
      }, e
    }(),
    b = function () {
      function e() {
        this.el = document.querySelector("#sbg-appshell-v1-footer"), null === this.el ? this.isExist = !1 : this.isExist = !0
      }
      var t = e.prototype;
      return t.open = function (e) {
        var t = this,
          i = window.getComputedStyle(this.el).height;
        this.el.style.height = "auto";
        var n = window.getComputedStyle(this.el).height;
        return this.el.style.height = i, new h(function (i) {
          c(t.el, "stop"), c(t.el, {
            height: n
          }, {
            duration: e || 300,
            easing: "ease-out",
            complete: function () {
              i()
            }
          })
        })
      }, t.immediateOpen = function () {
        this.el.style.height = "auto"
      }, t.immediateClose = function () {
        this.el.style.height = "0px"
      }, t.close = function (e) {
        var t = this;
        return new h(function (i) {
          c(t.el, "stop"), c(t.el, {
            height: 0
          }, {
            duration: e || 300,
            easing: "ease-out",
            complete: function () {
              i()
            }
          })
        })
      }, e
    }(),
    w = function () {
      function e() {
        this.el = document.querySelector("#sbg-appshell-v1"), this.headerInfo = new f, this.headerFixedArea = new m, this.contents = new v, this.categoryFooter = new y, this.footer = new b, this.scrollingElement = document.scrollingElement || document.documentElement, this.usingAnimation = !1
      }
      var t = e.prototype;
      return t.bind = function () {
        this.headerFixedArea.bind()
      }, t.unbind = function () {}, e
    }(),
    S = {
      name: "SB_FontSize",
      option: {
        expires: 365,
        path: "/"
      },
      value: {
        large: "large",
        medium: "middle",
        small: "small"
      }
    },
    x = {
      japanese: {
        "/site/": {
          ca: "GROUP"
        },
        "/corp/": {
          ca: "GROUP"
        }
      },
      english: {
        "/site/": {
          ca: "GROUP"
        },
        "/corp/": {
          ca: "GROUP"
        }
      }
    },
    E = function (e) {
      var t = {},
        i = e.location.pathname;
      t.isEnglish = /^\/en\//.test(i);
      try {
        t.isEnglish ? t.category = i.match(/^\/en(\/[^/]*\/)/)[1] : t.category = i.match(/^(\/[^/]*\/)/)[1]
      } catch (e) {
        t.category = ""
      }
      try {
        t.isEnglish ? t.subcategory = i.match(/^\/en(\/[^/]*\/[^/]*\/)/)[1] : t.subcategory = i.match(/^(\/[^/]*\/[^/]*\/)/)[1]
      } catch (e) {
        t.subcategory = ""
      }
      return t
    }(window),
    C = function () {
      var e = {},
        t = "" === E.category ? "/site/" : E.category;
      try {
        e = E.isEnglish ? x.english[t] || x.english["/site/"] : x.japanese[t] || x.japanese["/site/"]
      } catch (t) {
        e = E.isEnglish ? x.english["/site/"] : x.japanese["/site/"]
      }
      return e
    }(),
    k = function () {
      function e() {
        var e = this;
        this.el = document.querySelector(".sbg-appshell-v1-header"), this.className = {
          linkCurrent: "sbg-appshell-v1-header_globalnav-link--current"
        }, this.selector = {}, Object.keys(this.className).forEach(function (t) {
          e.selector[t] = "." + e.className[t]
        }), this.setCurrent()
      }
      var t = e.prototype;
      return t.setCurrent = function () {
        if (this.resetCurrent(), "" !== E.subcategory) {
          var e = E.isEnglish ? "/en" + E.subcategory : E.subcategory,
            t = this.el.querySelector('.sbg-appshell-v1-header_globalnav-link[href^="' + e + '"]');
          null !== t && t.classList.add(this.className.linkCurrent)
        }
      }, t.resetCurrent = function () {
        var e = this,
          t = this.el.querySelectorAll(this.selector.linkCurrent);
        t.length > 0 && Array.prototype.forEach.call(t, function (t) {
          t.classList.remove(e.className.linkCurrent)
        })
      }, e
    }(),
    A = i(1),
    T = i.n(A);
  "function" != typeof window.CustomEvent ? (g = function (e, t) {
    undefined === t && (t = {
      bubbles: !1,
      cancelable: !1,
      detail: undefined
    });
    var i = t.bubbles || !1,
      n = t.cancelable || !1,
      r = t.detail || undefined;
    t.bubbles && delete t.bubbles, t.cancelable && delete t.cancelable;
    var s = document.createEvent("CustomEvent");
    return s.initCustomEvent(e, i, n, r), s
  }).prototype = window.Event.prototype : g = window.CustomEvent;
  var P = g,
    L = function () {
      function e() {
        var e = this;
        this.COOKIE_NAME = S.name, this.COOKIE_OPTION = S.option, this.COOKIE_VALUE = S.value, this.className = {
          open: "sbg-appshell-v1-footer-fontsize--open",
          statusView: "sbg-appshell-v1-footer-fontsize_status",
          list: "sbg-appshell-v1-footer-fontsize_list",
          button: "sbg-appshell-v1-footer-fontsize_button",
          selected: "sbg-appshell-v1-footer-fontsize_selected"
        }, this.CURRENT_CLASS_NAME = {
          large: "sbg-appshell-v1-footer-fontsize_selected-large",
          middle: "sbg-appshell-v1-footer-fontsize_selected-medium",
          small: "sbg-appshell-v1-footer-fontsize_selected-small"
        }, this.selector = {}, Object.keys(this.className).forEach(function (t) {
          e.selector[t] = "." + e.className[t]
        }), this.selector.el = "#sbg-appshell-v1-footer-utility > .sbg-appshell-v1-footer-fontsize", this.BODY_CLASS_NAME = {
          LARGE: "fontsize-large",
          MEDIUM: "fontsize-medium",
          SMALL: "fontsize-small"
        }, this.TEXTS_BY_LANGUAGE = {
          JA: {
            large: "å¤§",
            middle: "ä¸­",
            small: "å°"
          },
          EN: {
            large: "Large",
            middle: "Middle",
            small: "Small"
          }
        }, this.isEnglish = E.isEnglish, this.isEnglish ? this.text = this.TEXTS_BY_LANGUAGE.EN : this.text = this.TEXTS_BY_LANGUAGE.JA, this.el = document.querySelector(this.selector.el), null !== this.el ? (this.isEnable = !0, this.statusView = this.el.querySelector(this.selector.statusView), this.list = this.el.querySelector(this.selector.list), this.button = this.el.querySelectorAll(this.selector.button), this.selected = this.el.querySelector(this.selector.selected), this.EVENT = {
          SBG_FONTSIZE_UPDATE: "SBG_FONTSIZE_UPDATE"
        }, this.EVENT_OBJECT = {}, Object.keys(this.EVENT).forEach(function (t) {
          e.EVENT_OBJECT[t] = new P(e.EVENT[t], {
            bubbles: !0,
            detail: undefined
          })
        }), this.handleStatusClickBind = this.handleStatusClick.bind(this), this.handleListClickBind = this.handleListClick.bind(this), this.handleMouseLeaveBind = this.handleMouseLeave.bind(this), this.status = T.a.get(this.COOKIE_NAME), this.update(this.status)) : this.isEnable = !1
      }
      var t = e.prototype;
      return t.bind = function () {
        this.isEnable && (this.el.addEventListener("mouseleave", this.handleMouseLeaveBind, !!r.a && {
          passive: !0,
          once: !1
        }), this.statusView.addEventListener("click", this.handleStatusClickBind, !!r.a && {
          passive: !0,
          once: !1
        }), this.list.addEventListener("click", this.handleListClickBind, !!r.a && {
          passive: !0,
          once: !1
        }))
      }, t.handleStatusClick = function () {
        this.el.classList.toggle(this.className.open)
      }, t.handleListClick = function (e) {
        if (e.target.classList.contains(this.className.button)) {
          var t = e.target;
          this.update(t.getAttribute("data-fontsize"))
        }
      }, t.handleMouseLeave = function () {
        this.el.classList.remove(this.className.open)
      }, t.update = function (e) {
        var t = this;
        switch (Object.keys(this.BODY_CLASS_NAME).forEach(function (e) {
          document.body.classList.remove(t.BODY_CLASS_NAME[e])
        }), e) {
        case "large":
          this._updateRoutine(this.COOKIE_VALUE.large, this.BODY_CLASS_NAME.LARGE, this.COOKIE_OPTION, this.COOKIE_VALUE.large);
          break;
        case "medium":
          this._updateRoutine(this.COOKIE_VALUE.medium, this.BODY_CLASS_NAME.MEDIUM, this.COOKIE_OPTION, this.COOKIE_VALUE.medium);
          break;
        case "small":
          this._updateRoutine(this.COOKIE_VALUE.small, this.BODY_CLASS_NAME.SMALL, this.COOKIE_OPTION, this.COOKIE_VALUE.small);
          break;
        default:
          this._updateRoutine(this.COOKIE_VALUE.medium, this.BODY_CLASS_NAME.MEDIUM, this.COOKIE_OPTION, this.COOKIE_VALUE.medium)
        }
        this.el.dispatchEvent(this.EVENT_OBJECT.SBG_FONTSIZE_UPDATE);
        try {
          window.$ && window.$.fn && window.$.fn.jquery && $(window).trigger("UpdateFontsize")
        } catch (e) {}
      }, t._updateRoutine = function (e, t, i, n) {
        var r = this;
        this.status = e, document.body.classList.add(t), T.a.set(this.COOKIE_NAME, n, i), this.selected.innerHTML = this.text[e], Object.keys(this.CURRENT_CLASS_NAME).forEach(function (e) {
          r.selected.classList.remove(r.CURRENT_CLASS_NAME[e])
        }), this.selected.classList.add(this.CURRENT_CLASS_NAME[e]), this.selected.class
      }, e
    }();

  function _(e, t) {
    var i = !1;
    try {
      for (var n = (t = t || document.body).querySelectorAll(e.tagName), r = 0; r < n.length; ++r)
        if (n.item(r) === e) {
          i = !0;
          break
        }
    } catch (e) {}
    return i
  }
  var O = function () {
    function e() {
      var e = this;
      this.el = document.querySelector("#sbg-appshell-v1-header_sitesearch"), this.isOpen = !1, this.isInsideCursor = !0, this.className = {
        open: "sbg-appshell-v1-header_sitesearch--open"
      }, this.param = C, Object.keys(this.param).forEach(function (t) {
        var i = e.el.querySelector('input[name="' + t + '"]');
        null !== i && (i.value = e.param[t])
      }), this.handleMouseEnterBind = this.handleMouseEnter.bind(this), this.handleMouseLeaveBind = this.handleMouseLeave.bind(this), this.handleFocusInBind = this.handleFocusIn.bind(this), this.handleFocusOutBind = this.handleFocusOut.bind(this), this.handleListClickBind = this.handleListClick.bind(this)
    }
    var t = e.prototype;
    return t.bind = function () {
      this.el.addEventListener("mouseenter", this.handleMouseEnterBind, !!r.a && {
        passive: !0,
        once: !1
      }), this.el.addEventListener("mouseleave", this.handleMouseLeaveBind, !!r.a && {
        passive: !0,
        once: !1
      }), this.el.addEventListener("focusin", this.handleFocusInBind, !!r.a && {
        passive: !0,
        once: !1
      }), this.el.addEventListener("focusout", this.handleFocusOutBind, !!r.a && {
        passive: !0,
        once: !1
      }), this.el.addEventListener("click", this.handleListClickBind, !r.a || {
        passive: !0,
        once: !1
      })
    }, t.unbind = function () {}, t.handleMouseEnter = function () {
      this.isInsideCursor = !0, document.activeElement, this.isOpen, this.isInsideCursor, this.isOpen || this.open()
    }, t.handleMouseLeave = function () {
      this.isInsideCursor = !1, document.activeElement, this.isOpen, this.isInsideCursor;
      var e = this.el.querySelector("#bizsearchAspQuery");
      if (e.inputAccelaSuggest) return e.inputAccelaSuggest = !1, void e.focus();
      _(document.activeElement, this.el) || this.isOpen && this.close()
    }, t.handleFocusOut = function (e) {
      this.isInsideCursor = !1, document.activeElement, this.isOpen, this.isInsideCursor, this.el.querySelector("#bizsearchAspQuery").inputAccelaSuggest || _(document.activeElement, this.el) || this.isOpen && this.close()
    }, t.handleFocusIn = function () {
      document.activeElement, this.isOpen, this.isInsideCursor, this.isOpen || this.open()
    }, t.handleListClick = function () {
      document.activeElement, this.isOpen, this.isInsideCursor, this.el.querySelector(".sbg-appshell-v1-header_sitesearch-form-text").focus()
    }, t.open = function () {
      this.isOpen = !0, this.el.classList.add(this.className.open)
    }, t.close = function () {
      this.isOpen = !1, this.el.classList.remove(this.className.open)
    }, e
  }();
  window.SB_ALL = window.SB_ALL || {}, window.SB_ALL.SUNSHINE = window.SB_ALL.SUNSHINE || {}, window.SB_ALL.HashMoveAssist = s;
  var V = new s(window.location.hash);
  V.setShiftPixel(5), V.bind(), window.addEventListener("DOMContentLoaded", function () {
    (window.SB_ALL.SUNSHINE.AppShell = new w).bind();
  })
}]);
