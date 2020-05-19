import { Suite } from "benchmark";
import * as A from "@matechs/core/Array";
import * as FA from "fp-ts/lib/Array";
import { pipe } from "@matechs/core/Pipe";
import { pipe as fpipe } from "fp-ts/lib/pipeable";

export const fp = () => {
  fpipe(
    FA.makeBy(10, (x) => x),
    FA.map((n) => n + 1)
  );
};

export const mat = () => {
  pipe(
    A.makeBy(10, (x) => x),
    A.map((n) => n + 1)
  );
};

const benchmark = new Suite("FP/MAT");

benchmark
  .add(
    "matechs",
    () => {
      fp();
    },
    { defer: false }
  )
  .add(
    "fp-ts",
    () => {
      mat();
    },
    { defer: false }
  )

  .on("cycle", function (event: any) {
    console.log(String(event.target));
  })
  .on("complete", function (this: any) {
    console.log(`[array] fastest is ${this.filter("fastest").map("name")}`);
  })
  .run({ async: false });
