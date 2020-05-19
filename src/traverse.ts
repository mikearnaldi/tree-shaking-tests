import * as R from "@matechs/core/Record";
import * as T from "@matechs/core/Effect";
import { pipe } from "@matechs/core/Pipe";

const rec = {
  a: "foo",
  b: "bar",
};

interface Suffix {
  suffix: {
    value: string;
  };
}

pipe(
  rec,
  R.traverse(T.effect)((s) => T.access((_: Suffix) => `${s}${_.suffix.value}`)),
  T.provide<Suffix>({
    suffix: {
      value: "-ok",
    },
  }),
  T.runToPromiseExit
).then((x) => {
  console.log(x);
});
