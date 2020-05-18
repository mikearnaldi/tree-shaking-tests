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
    r((r.s = 9));
})({
  9: function (t, e, r) {
    "use strict";
    r.r(e);
    const n = { _tag: "None" };
    function i(t) {
      return { _tag: "Done", value: t };
    }
    const s = (...t) =>
      t.length > 0
        ? { _tag: "Interrupt", errors: t, remaining: n }
        : { _tag: "Interrupt", remaining: n };
    function u(t) {
      return { _tag: "Raise", error: t, remaining: n };
    }
    function a(t, e, r, n, i, s, u, a, h, l) {
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
          return l(h(a(u(s(i(n(r(e(t)))))))));
      }
    }
    class h {
      constructor(t) {
        this.a = t;
      }
      tag() {
        return "IPure";
      }
    }
    class l {
      constructor(t) {
        this.e = t;
      }
      tag() {
        return "IRaised";
      }
    }
    class o {
      constructor(t) {
        this.e = t;
      }
      tag() {
        return "ICompleted";
      }
    }
    class c {
      constructor(t, e) {
        (this.e = t), (this.f = e);
      }
      tag() {
        return "IChain";
      }
    }
    class p {
      constructor(t, e) {
        (this.e = t), (this.f = e);
      }
      tag() {
        return "IMap";
      }
    }
    class d {
      constructor(t, e, r) {
        (this.inner = t), (this.failure = e), (this.success = r);
      }
      tag() {
        return "ICollapse";
      }
    }
    class m {
      constructor(t, e = null, r = null) {
        (this.value = t), (this.next = e), (this.previous = r);
      }
    }
    class g {
      constructor(t = null, e = null) {
        (this.head = t), (this.tail = e);
      }
      prepend(t) {
        const e = new m(t, this.head);
        return (
          this.head && (this.head.previous = e),
          (this.head = e),
          this.tail || (this.tail = e),
          this
        );
      }
      append(t) {
        const e = new m(t);
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
    class v {
      constructor(t, e = null) {
        (this.value = t), (this.next = e);
      }
    }
    class f {
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
        const e = new v(t, this.head);
        return (this.head = e), this.tail || (this.tail = e), this;
      }
      append(t) {
        const e = new v(t);
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
    class I {
      constructor() {
        (this.running = !1),
          (this.array = new f()),
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
    const y = (() => new I())();
    class w {
      constructor(t, e) {
        (this.apply = t), (this.prev = e);
      }
      tag() {
        return "Frame";
      }
    }
    class x {
      constructor(t, e, r) {
        (this.apply = t), (this.recover = e), (this.prev = r);
      }
      tag() {
        return "FoldFrame";
      }
    }
    class F {
      constructor(t, e) {
        (this.apply = t), (this.prev = e);
      }
      tag() {
        return "MapFrame";
      }
    }
    class b {
      constructor(t, e) {
        (this.interruptStatus = t), (this.prev = e);
      }
      apply(t) {
        return this.interruptStatus.pop(), new h(t);
      }
      exitRegion() {
        this.interruptStatus.pop();
      }
      tag() {
        return "InterruptFrame";
      }
    }
    class S {
      constructor() {
        (this.completed = null),
          (this.interrupted = !1),
          (this.currentFrame = void 0),
          (this.envStack = new g());
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
        const e = this.handle(s(...(t || [])));
        e && this.loop(e);
      }
      resumeInterrupt(t) {
        y.dispatch(this.dispatchResumeInterrupt.bind(this), { errors: t });
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
              ? void this.complete(i(r.apply(t)))
              : new h(r.apply(t))
            : r.apply(t);
        this.complete(i(t));
      }
      foldResume(t) {
        if ("Right" === t._tag) {
          const e = this.next(t.right);
          e && this.loop(e);
        } else {
          const e = this.handle(u(t.left));
          e && this.loop(e);
        }
      }
      resume(t) {
        (this.cancelAsync = void 0), y.dispatch(this.foldResume.bind(this), t);
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
          new d(
            t.e,
            (t) => (this.envStack.deleteTail(), new o(t)),
            (t) => (this.envStack.deleteTail(), new o(i(t)))
          )
        );
      }
      IPure(t) {
        return this.next(t.a);
      }
      IPureOption(t) {
        return "Some" === t.a._tag
          ? this.next(t.a.value)
          : this.handle(u(t.onEmpty()));
      }
      IPureEither(t) {
        return "Right" === t.a._tag
          ? this.next(t.a.right)
          : this.handle(u(t.a.left));
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
        return (this.currentFrame = new w(t.f, this.currentFrame)), t.e;
      }
      IMap(t) {
        return (this.currentFrame = new F(t.f, this.currentFrame)), t.e;
      }
      ICollapse(t) {
        return (
          (this.currentFrame = new x(t.success, t.failure, this.currentFrame)),
          t.inner
        );
      }
      IInterruptibleRegion(t) {
        return (
          void 0 === this.interruptRegionStack
            ? (this.interruptRegionStack = [t.int])
            : this.interruptRegionStack.push(t.int),
          (this.currentFrame = new b(
            this.interruptRegionStack,
            this.currentFrame
          )),
          t.e
        );
      }
      IAccessRuntime(t) {
        return new h(t.f(y));
      }
      IAccessInterruptible(t) {
        return new h(t.f(this.isInterruptible()));
      }
      loop(t) {
        let e = t;
        for (; e && (!this.interrupted || !this.isInterruptible()); )
          try {
            e = this[e.tag()](e);
          } catch (t) {
            e = new l({
              _tag: "Abort",
              abortedWith: t,
              remaining: { _tag: "None" },
            });
          }
        this.interrupted && e && this.resumeInterrupt();
      }
      start(t) {
        y.dispatch(this.loop.bind(this), t);
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
    function R(t, e) {
      return "IPure" === t.tag() ? e(t.a) : new c(t, e);
    }
    function _(t, e) {
      return "IPure" === t.tag() ? new h(e(t.a)) : new p(t, e);
    }
    function k(t) {
      return new h(t);
    }
    function P(t, e) {
      const r = new S();
      return (
        e && r.onExit(e),
        r.start(t),
        (t) => {
          r.interrupt(), t && r.onExit(t);
        }
      );
    }
    var A;
    a(
      k(1),
      ((A = function (t) {
        return t + 1;
      }),
      (t) => _(t, A)),
      ((t) => (e) => R(e, t))(function (t) {
        return k(t + 1);
      }),
      function (t) {
        return new Promise((e) => P(t, e));
      }
    ).then(console.log);
  },
});
