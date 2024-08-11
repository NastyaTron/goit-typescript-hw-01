interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
  age: number;
}

const originalUser: User = {
  name: "Poly",
  surname: "Doe",
  email: "poly@mail.com",
  password: "poly@mail.com",
  age: 24,
};

function createOrUpdateUser(initialValues: User, update: Partial<User>) {
  return { ...initialValues, ...update };
}

createOrUpdateUser(originalUser, {
  email: "user@mail.com",
  password: "password123",
});
