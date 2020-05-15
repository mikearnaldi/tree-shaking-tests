import { Lens } from "@matechs/model/Monocle";
import { Newtype, iso } from "@matechs/model/Newtype";
import { pipe } from "@matechs/core/Pipe";

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

const personName = name.get(person)
const personId = id.get(person)

pipe(personName, console.log);
pipe(personId, console.log);
