import { faker } from "@faker-js/faker";

export default function Page() {
  const number = faker.number.int(100);

  console.log("fake name page rendered");

  return <div>Hello World {number}</div>;
}
