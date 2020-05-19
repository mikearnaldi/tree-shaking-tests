!(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var i = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          r.d(
            n,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 2));
})({
  2: function (t, e, r) {
    "use strict";
    r.r(e);
    const n = { _tag: "None" };
    const i = {};
    function s(t) {
      const e = u(t);
      return (t) => (r) => e(r, t);
    }
    const u = (t) => (e, r) => {
      const n = Object.keys(e);
      if (0 === n.length) return t.of(i);
      let s = t.of({});
      for (const i of n)
        s = t.ap(
          t.map(s, (t) => (e) => ((t[i] = e), t)),
          r(i, e[i])
        );
      return s;
    };
    function a(t) {
      return { _tag: "Done", value: t };
    }
    const h = (...t) =>
      t.length > 0
        ? { _tag: "Interrupt", errors: t, remaining: n }
        : { _tag: "Interrupt", remaining: n };
    function o(t) {
      return { _tag: "Raise", error: t, remaining: n };
    }
    function c(t, e, r, n, i, s, u, a, h, o) {
      switch (arguments.length) {
        case 1:
          return t;
        case 2:
          return e(t);
        case 3:
          return r(e(t));
        case 4:
          return n(r(e(t)));
        case 5:
          return i(n(r(e(t))));
        case 6:
          return s(i(n(r(e(t)))));
        case 7:
          return u(s(i(n(r(e(t))))));
        case 8:
          return a(u(s(i(n(r(e(t)))))));
        case 9:
          return h(a(u(s(i(n(r(e(t))))))));
        case 10:
          return o(h(a(u(s(i(n(r(e(t)))))))));
      }
    }
    class l {
      constructor(t) {
        this.a = t;
      }
      tag() {
        return "IPure";
      }
    }
    class p {
      constructor(t) {
        this.e = t;
      }
      tag() {
        return "IRaised";
      }
    }
    class d {
      constructor(t) {
        this.e = t;
      }
      tag() {
        return "ICompleted";
      }
    }
    class f {
      constructor(t, e) {
        (this.e = t), (this.f = e);
      }
      tag() {
        return "IChain";
      }
    }
    class g {
      constructor(t, e) {
        (this.e = t), (this.f = e);
      }
      tag() {
        return "IMap";
      }
    }
    class m {
      constructor(t, e, r) {
        (this.inner = t), (this.failure = e), (this.success = r);
      }
      tag() {
        return "ICollapse";
      }
    }
    class v {
      constructor(t, e) {
        (this.e = t), (this.r = e);
      }
      tag() {
        return "IProvideEnv";
      }
    }
    class I {
      tag() {
        return "IAccessEnv";
      }
    }
    const y = "@matechs/core/Effect";
    class b {
      constructor(t, e = null, r = null) {
        (this.value = t), (this.next = e), (this.previous = r);
      }
    }
    class w {
      constructor(t = null, e = null) {
        (this.head = t), (this.tail = e);
      }
      prepend(t) {
        const e = new b(t, this.head);
        return (
          this.head && (this.head.previous = e),
          (this.head = e),
          this.tail || (this.tail = e),
          this
        );
      }
      append(t) {
        const e = new b(t);
        return this.head
          ? ((this.tail.next = e),
            (e.previous = this.tail),
            (this.tail = e),
            this)
          : ((this.head = e), (this.tail = e), this);
      }
      deleteTail() {
        if (!this.tail) return null;
        if (this.head === this.tail) {
          const t = this.tail;
          return (this.head = null), (this.tail = null), t;
        }
        const t = this.tail;
        return (this.tail = this.tail.previous), (this.tail.next = null), t;
      }
      deleteHead() {
        if (!this.head) return null;
        const t = this.head;
        return (
          this.head.next
            ? ((this.head = this.head.next), (this.head.previous = null))
            : ((this.head = null), (this.tail = null)),
          t
        );
      }
      empty() {
        return null === this.head;
      }
    }
    class x {
      constructor(t, e = null) {
        (this.value = t), (this.next = e);
      }
    }
    class F {
      constructor(t = null, e = null) {
        (this.head = t),
          (this.tail = e),
          (this.head = null),
          (this.tail = null);
      }
      empty() {
        return null === this.head;
      }
      prepend(t) {
        const e = new x(t, this.head);
        return (this.head = e), this.tail || (this.tail = e), this;
      }
      append(t) {
        const e = new x(t);
        return this.head
          ? ((this.tail.next = e), (this.tail = e), this)
          : ((this.head = e), (this.tail = e), this);
      }
      deleteHead() {
        if (!this.head) return null;
        const t = this.head;
        return (
          this.head.next
            ? (this.head = this.head.next)
            : ((this.head = null), (this.tail = null)),
          t
        );
      }
    }
    class S {
      constructor() {
        (this.running = !1),
          (this.array = new F()),
          (this.isRunning = () => this.running);
      }
      run() {
        var t, e;
        this.running = !0;
        let r =
          null === (t = this.array.deleteHead()) || void 0 === t
            ? void 0
            : t.value;
        for (; r; )
          r[0](r[1]),
            (r =
              null === (e = this.array.deleteHead()) || void 0 === e
                ? void 0
                : e.value);
        this.running = !1;
      }
      dispatch(t, e) {
        this.array.append([t, e]), this.running || this.run();
      }
      dispatchLater(t, e, r) {
        const n = setTimeout(() => this.dispatch(t, e), r);
        return (t) => {
          clearTimeout(n), t();
        };
      }
    }
    const R = (() => new S())();
    class _ {
      constructor(t, e) {
        (this.apply = t), (this.prev = e);
      }
      tag() {
        return "Frame";
      }
    }
    class k {
      constructor(t, e, r) {
        (this.apply = t), (this.recover = e), (this.prev = r);
      }
      tag() {
        return "FoldFrame";
      }
    }
    class P {
      constructor(t, e) {
        (this.apply = t), (this.prev = e);
      }
      tag() {
        return "MapFrame";
      }
    }
    class O {
      constructor(t, e) {
        (this.interruptStatus = t), (this.prev = e);
      }
      apply(t) {
        return this.interruptStatus.pop(), new l(t);
      }
      exitRegion() {
        this.interruptStatus.pop();
      }
      tag() {
        return "InterruptFrame";
      }
    }
    class j {
      constructor() {
        (this.completed = null),
          (this.interrupted = !1),
          (this.currentFrame = void 0),
          (this.envStack = new w());
      }
      isComplete() {
        return null !== this.completed;
      }
      complete(t) {
        if (((this.completed = t), void 0 !== this.listeners))
          for (const e of this.listeners) e(t);
      }
      onExit(t) {
        return (
          null !== this.completed && t(this.completed),
          void 0 === this.listeners
            ? (this.listeners = [t])
            : this.listeners.push(t),
          () => {
            void 0 !== this.listeners &&
              (this.listeners = this.listeners.filter((e) => e !== t));
          }
        );
      }
      exit() {
        return this.completed;
      }
      isInterruptible() {
        return (
          !(
            void 0 !== this.interruptRegionStack &&
            this.interruptRegionStack.length > 0
          ) || this.interruptRegionStack[this.interruptRegionStack.length - 1]
        );
      }
      handle(t) {
        var e, r;
        let n = this.currentFrame;
        for (
          this.currentFrame =
            null === (e = this.currentFrame) || void 0 === e ? void 0 : e.prev;
          n;

        ) {
          if (
            "FoldFrame" === n.tag() &&
            ("Interrupt" !== t._tag || !this.isInterruptible())
          )
            return n.recover(t);
          "InterruptFrame" === n.tag() && n.exitRegion(),
            (n = this.currentFrame),
            (this.currentFrame =
              null === (r = this.currentFrame) || void 0 === r
                ? void 0
                : r.prev);
        }
        this.complete(t);
      }
      dispatchResumeInterrupt({ errors: t }) {
        const e = this.handle(h(...(t || [])));
        e && this.loop(e);
      }
      resumeInterrupt(t) {
        R.dispatch(this.dispatchResumeInterrupt.bind(this), { errors: t });
      }
      next(t) {
        var e;
        const r = this.currentFrame;
        if (
          ((this.currentFrame =
            null === (e = this.currentFrame) || void 0 === e ? void 0 : e.prev),
          r)
        )
          return "MapFrame" === r.tag()
            ? void 0 === this.currentFrame
              ? void this.complete(a(r.apply(t)))
              : new l(r.apply(t))
            : r.apply(t);
        this.complete(a(t));
      }
      foldResume(t) {
        if ("Right" === t._tag) {
          const e = this.next(t.right);
          e && this.loop(e);
        } else {
          const e = this.handle(o(t.left));
          e && this.loop(e);
        }
      }
      resume(t) {
        (this.cancelAsync = void 0), R.dispatch(this.foldResume.bind(this), t);
      }
      contextSwitch(t) {
        let e = !1;
        const r = t((t) => {
          e || ((e = !0), this.resume(t));
        });
        this.cancelAsync = (t) => {
          (e = !0),
            r((...e) => {
              t(...e);
            });
        };
      }
      IAccessEnv(t) {
        var e;
        const r =
          (null === (e = this.envStack.tail) || void 0 === e
            ? void 0
            : e.value) || {};
        return this.next(r);
      }
      IProvideEnv(t) {
        return (
          this.envStack.append(t.r),
          new m(
            t.e,
            (t) => (this.envStack.deleteTail(), new d(t)),
            (t) => (this.envStack.deleteTail(), new d(a(t)))
          )
        );
      }
      IPure(t) {
        return this.next(t.a);
      }
      IPureOption(t) {
        return "Some" === t.a._tag
          ? this.next(t.a.value)
          : this.handle(o(t.onEmpty()));
      }
      IPureEither(t) {
        return "Right" === t.a._tag
          ? this.next(t.a.right)
          : this.handle(o(t.a.left));
      }
      IRaised(t) {
        return (
          "Interrupt" === t.e._tag && (this.interrupted = !0), this.handle(t.e)
        );
      }
      ICompleted(t) {
        return "Done" === t.e._tag ? this.next(t.e.value) : this.handle(t.e);
      }
      ISuspended(t) {
        return t.e();
      }
      IAsync(t) {
        this.contextSwitch(t.e);
      }
      IChain(t) {
        return (this.currentFrame = new _(t.f, this.currentFrame)), t.e;
      }
      IMap(t) {
        return (this.currentFrame = new P(t.f, this.currentFrame)), t.e;
      }
      ICollapse(t) {
        return (
          (this.currentFrame = new k(t.success, t.failure, this.currentFrame)),
          t.inner
        );
      }
      IInterruptibleRegion(t) {
        return (
          void 0 === this.interruptRegionStack
            ? (this.interruptRegionStack = [t.int])
            : this.interruptRegionStack.push(t.int),
          (this.currentFrame = new O(
            this.interruptRegionStack,
            this.currentFrame
          )),
          t.e
        );
      }
      IAccessRuntime(t) {
        return new l(t.f(R));
      }
      IAccessInterruptible(t) {
        return new l(t.f(this.isInterruptible()));
      }
      loop(t) {
        let e = t;
        for (; e && (!this.interrupted || !this.isInterruptible()); )
          try {
            e = this[e.tag()](e);
          } catch (t) {
            e = new p({
              _tag: "Abort",
              abortedWith: t,
              remaining: { _tag: "None" },
            });
          }
        this.interrupted && e && this.resumeInterrupt();
      }
      start(t) {
        R.dispatch(this.loop.bind(this), t);
      }
      interrupt() {
        this.interrupted ||
          this.isComplete() ||
          ((this.interrupted = !0),
          this.cancelAsync &&
            this.isInterruptible() &&
            this.cancelAsync((...t) => {
              this.resumeInterrupt(t);
            }));
      }
    }
    function A(t) {
      return D(E(), t);
    }
    function E() {
      return new I();
    }
    function C(t) {
      return T(E(), t);
    }
    function M(t, e) {
      return q(t, e, (t, e) => t(e));
    }
    function T(t, e) {
      return "IPure" === t.tag() ? e(t.a) : new f(t, e);
    }
    const H = { URI: y, map: D, of: U, ap: M, chain: T };
    function D(t, e) {
      return "IPure" === t.tag() ? new l(e(t.a)) : new g(t, e);
    }
    function N(t, e = "regular") {
      return (r) =>
        L((r) =>
          "inverted" === e
            ? Object.assign(Object.assign({}, t), r)
            : Object.assign(Object.assign({}, r), t)
        )(r);
    }
    const L = (t) => (e) => C((r) => new v(e, t(r)));
    function U(t) {
      return new l(t);
    }
    function W(t, e) {
      const r = new j();
      return (
        e && r.onExit(e),
        r.start(t),
        (t) => {
          r.interrupt(), t && r.onExit(t);
        }
      );
    }
    function q(t, e, r) {
      return T(t, (t) => D(e, (e) => r(t, e)));
    }
    var z;
    c(
      { a: "foo", b: "bar" },
      ((z = H),
      (function (t) {
        const e = s(t);
        return (t) => e((e, r) => t(r));
      })(z))(function (t) {
        return A(function (e) {
          return "".concat(t).concat(e.suffix.value);
        });
      }),
      N({ suffix: { value: "-ok" } }),
      function (t) {
        return new Promise((e) => W(t, e));
      }
    ).then(function (t) {
      console.log(t);
    });
  },
});
