import * as T from "@matechs/core/Effect";
import { pipe } from "@matechs/core/Pipe";

pipe(
  T.pure(1),
  T.map(n => n + 1),
  T.chain(n => T.pure(n + 1)),
  T.runToPromiseExit
).then(console.log)