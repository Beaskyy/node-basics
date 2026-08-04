type User = {
  id: number;
  name: string;
  role: "user" | "super-admin";
};

const users: User[] = [
  { id: 1, name: "Alice", role: "super-admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Charlie", role: "user" },
];

function getUserById(id: number, callback: (user: User | null) => void): void {
  const user = users.find((user) => user.id === id);
  if (user) {
    callback(user);
  } else {
    callback(null);
  }
}

getUserById(2, (user) => {
  if (user) {
    console.log(`User found: ${user.name}, Role: ${user.role}`);
  } else {
    console.log("User not found");
  }
});

function fetchUserWithPromise(id: number): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === id);
      if (user) {
        resolve(user);
      } else {
        reject(new Error("User not found"));
      }
    }, 1000);
  });
}

fetchUserWithPromise(3)
  .then((user) => {
    console.log(`User found: ${user.name}, Role: ${user.role}`);
  })
  .catch((error) => {
    console.error(error.message);
  });

async function fetchUserWithAsyncAwait(id: number): Promise<void> {
  try {
    const user = await fetchUserWithPromise(id);
    console.log(`User found: ${user.name}, Role: ${user.role}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}

fetchUserWithAsyncAwait(4);
