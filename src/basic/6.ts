interface User {
  name: string;
  surname: string;
  age: number;
  email: string;
  password: string;
  address?: { city: string; country: string };
}

const mango: User = {
  name: "Mango",
  surname: "Doe",
  age: 30,
  email: "john@example.com",
  password: "password123",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: User = {
  name: "Mango",
  surname: "Doe",
  age: 30,
  email: "john@example.com",
  password: "password123",
};
