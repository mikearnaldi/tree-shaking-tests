!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var u = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(u.exports, u, u.exports, r), (u.l = !0), u.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var u in e)
          r.d(
            n,
            u,
            function (t) {
              return e[t];
            }.bind(null, u)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 1));
})([
  ,
  function (e, t, r) {
    "use strict";
    r.r(t);
    const n = (e, t) => (u(e) ? e : t(e.right));
    function u(e) {
      switch (e._tag) {
        case "Left":
          return !0;
        case "Right":
          return !1;
      }
    }
    function o(e) {
      return { _tag: "Right", right: e };
    }
    var c;
    !(function (e, t, r, n, u, o, c, i, a, f) {
      switch (arguments.length) {
        case 1:
          return e;
        case 2:
          return t(e);
        case 3:
          return r(t(e));
        case 4:
          return n(r(t(e)));
        case 5:
          return u(n(r(t(e))));
        case 6:
          return o(u(n(r(t(e)))));
        case 7:
          return c(o(u(n(r(t(e))))));
        case 8:
          return i(c(o(u(n(r(t(e)))))));
        case 9:
          return a(i(c(o(u(n(r(t(e))))))));
        case 10:
          f(a(i(c(o(u(n(r(t(e)))))))));
      }
    })(
      o(1),
      ((c = function (e) {
        return o(e + 1);
      }),
      (e) => n(e, c)),
      console.log
    );
  },
]);
