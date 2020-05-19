!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "a", function () {
        return g;
      });
    function r(e) {
      return e;
    }
    const o = (e, t) => {
        let n = 0;
        const r = e.length,
          o = new Array(r);
        for (let u = 0; u < r; u++) {
          const r = t(e[u]);
          (n += r.length), (o[u] = r);
        }
        const u = Array(n);
        let c = 0;
        for (let e = 0; e < r; e++) {
          const t = o[e],
            n = t.length;
          for (let e = 0; e < n; e++) u[e + c] = t[e];
          c += n;
        }
        return u;
      },
      u = (e) => (t) => o(t, e);
    function c(e) {
      return e.length > 0;
    }
    function f(e, t) {
      const n = [];
      for (let r = 0; r < e; r++) n.push(t(r));
      return n;
    }
    const l = (e, t) => e.map((e) => t(e)),
      s = (e) => (t) => l(t, e);
    const i = (e) => [e];
    const a = c,
      p = f;
    const d = i;
    const y = u,
      b = s;
    var g = p(10, r);
    a(g) &&
      (function (e, t, n, r, o, u, c, f, l, s) {
        switch (arguments.length) {
          case 1:
            return e;
          case 2:
            return t(e);
          case 3:
            return n(t(e));
          case 4:
            return r(n(t(e)));
          case 5:
            return o(r(n(t(e))));
          case 6:
            return u(o(r(n(t(e)))));
          case 7:
            return c(u(o(r(n(t(e))))));
          case 8:
            return f(c(u(o(r(n(t(e)))))));
          case 9:
            return l(f(c(u(o(r(n(t(e))))))));
          case 10:
            s(l(f(c(u(o(r(n(t(e)))))))));
        }
      })(
        g,
        b(function (e) {
          return e + 1;
        }),
        y(function (e) {
          return d(e + 1);
        }),
        console.log
      );
  },
]);
