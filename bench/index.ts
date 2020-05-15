import { QIO, defaultRuntime } from "@qio/core";
import { Suite } from "benchmark";
import * as T from "@matechs/core/Effect";

export const fib = (n: bigint): bigint => {
  if (n < BigInt(2)) {
    return BigInt(1);
  }

  return fib(n - BigInt(1)) + fib(n - BigInt(2));
};

export const fibQio = (n: bigint): QIO<bigint> => {
  if (n < BigInt(2)) {
    return QIO.resolve(BigInt(1));
  }
  return QIO.chain(fibQio(n - BigInt(1)), (a) =>
    QIO.map(fibQio(n - BigInt(2)), (b) => a + b)
  );
};

export const fibEffect = (n: bigint): T.Sync<bigint> => {
  if (n < BigInt(2)) {
    return T.pure(BigInt(1));
  }
  return T.chain_(fibEffect(n - BigInt(1)), (a) =>
    T.map_(fibEffect(n - BigInt(2)), (b) => a + b)
  );
};

const n = BigInt(10);

const benchmark = new Suite("Fibonacci", { minTime: 10000 });

benchmark
  .add(
    "effect",
    (cb: any) => {
      T.run(fibEffect(n), () => {
        cb.resolve();
      });
    },
    { defer: true }
  )
  .add(
    "qio",
    (cb: any) => {
      defaultRuntime().unsafeExecute(fibQio(n), () => {
        cb.resolve();
      });
    },
    { defer: true }
  )
  .add(
    "native",
    (cb: any) => {
      fib(n);
      cb.resolve();
    },
    { defer: true }
  )
  .on("cycle", function (event: any) {
    console.log(String(event.target));
  })
  .on("complete", function (this: any) {
    console.log(`Fastest is ${this.filter("fastest").map("name")}`);
  })
  .run({ async: true });
