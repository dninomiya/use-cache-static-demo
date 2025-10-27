import { faker } from "@faker-js/faker";

export default function Page() {
  const number = faker.number.int(100);

  return <div>Hello World {number}</div>;
}
