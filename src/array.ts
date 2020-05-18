import * as A from "@matechs/core/Array";
import * as NEA from "@matechs/core/NonEmptyArray";
import { identity } from "@matechs/core/Function";
import { pipe } from "@matechs/core/Pipe";

export const a = A.makeBy(10, identity);

A.isNonEmpty(a) &&
  pipe(
    a,
    NEA.map(n => n + 1),
    NEA.chain(n => NEA.of(n + 1)),
    console.log
  );
