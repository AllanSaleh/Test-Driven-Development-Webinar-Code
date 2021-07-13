const functions = {
  add: (num1, num2) => num1 + num2,
  createUser: () => {
    const user = { firstName: "Allan" };
    user["lastName"] = "Saleh";
    return user;
  },
};

module.exports = functions;
