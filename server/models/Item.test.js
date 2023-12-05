const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { sequelize } = require("../db");
const { Item } = require("./Item");

let item;

beforeAll(async () => {
  await sequelize.sync({ force: true });
  item = await Item.create({
    name: "Test",
    description: "This is a test",
    price: 12.43,
    category: "Thing",
    image: "www.google.com",
  });
});

// clear db after tests
afterAll(async () => await sequelize.sync({ force: true }));

describe("Item", () => {
  it("has an id", async () => {
    expect(item).toHaveProperty("id");
  });

  it("properties created as expected", async () => {
    expect(item.name).toBe("Test");
    expect(item.description).toBe("This is a test");
    expect(item.price).toBe(12.43);
    expect(item.category).toBe("Thing");
    expect(item.image).toBe("www.google.com");
  });
});
