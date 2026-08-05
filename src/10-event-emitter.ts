import EventEmitter from "node:events";

const appEvents = new EventEmitter();

type UserRegisterPayload = {
  id: number;
  email: string;
};

appEvents.on("user:registered", (user: UserRegisterPayload) => {
  console.log(`Email listener: Sending welcome email to ${user.email}`);
});

appEvents.on("user:registered", (user: UserRegisterPayload) => {
  console.log(`Analytics listener: User with ID ${user.id} has registered`);
});

appEvents.once("once:event", () => {
  console.log("This will only run once");
});

const registerUser = (): void => {
  const user = {
    id: 1,
    email: "beasky@gmail.com",
  };
  console.log("User saved:", user);

  appEvents.emit("user:registered", user);

  appEvents.emit("once:event");
  appEvents.emit("once:event");

  console.log("User registration process completed.");
};

registerUser();
