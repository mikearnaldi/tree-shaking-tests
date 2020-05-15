import { Lens } from "monocle-ts";
import { Newtype, iso } from "newtype-ts";
import { pipe } from "fp-ts/es6/pipeable";

interface PersonID
  extends Newtype<
    {
      readonly PersonID: unique symbol;
    },
    string
  > {}

interface Person {
  id: PersonID;
  details: {
    name: string;
  };
}

const isoId = iso<PersonID>();

const name = Lens.fromPath<Person>()(["details", "name"]);
const id = Lens.fromPath<Person>()(["id"]);

const person: Person = {
  id: isoId.wrap("aa"),
  details: {
    name: "mike",
  },
};

pipe(name.get(person), console.log);
pipe(id.get(person), console.log);
