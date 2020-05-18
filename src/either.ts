import * as E from "@matechs/core/Either";
import { pipe } from "@matechs/core/Pipe";

pipe(
  E.right(1),
  E.chain((n) => E.right(n + 1)),
  console.log
);
