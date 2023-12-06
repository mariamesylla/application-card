// install dependencies
const { execSync } = require("child_process");
execSync("npm install");
execSync("npm run seed");

const request = require("supertest");
const { sequelize } = require("../db");
const { Item } = require("../models/Item");
const app = require("../app");
const seedData = require("../seedData");

describe("items endpoints", () => {
  test("api/items get all", async () => {
    const res = await request(app).get("/api/items");
    expect(res.statusCode).toBe(200);

    const resData = res.text;

    let allItems = await Item.findAll();

    allItems = JSON.stringify(allItems);

    expect(resData).toMatch(allItems);
  });

  test("api/items/id get one", async () => {
    const res = await request(app).get("/api/items/1");
    expect(res.statusCode).toBe(200);

    const resData = res.text;

    let item = Item.findByPk(1);

    item = JSON.stringify(item);

    expect(resData).toMatch(item);
  });

  test("api/items create item", async () => {
    const itemsBeforePost = await request(app).get("/api/items");
    const lengthBefore = itemsBeforePost._body.length;

    const newItem = {
      name: "Kairi Test - Foldsack No. 1 Backpack, Fits 15 Laptops",
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      price: 109.95,
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    };

    const res = await request(app).post("/api/items").send(newItem);

    expect(res.statusCode).toBe(200);

    const itemsAfterPost = await request(app).get("/api/items");
    expect(itemsAfterPost._body).toHaveLength(lengthBefore + 1);
  });

  test("api/items/id delete", async () => {
    const itemsLength = await request(app).get("/api/items");
    await request(app).delete("/api/items/1");
    const itemsAfterDelete = await request(app).get("/api/items");
    expect(itemsAfterDelete._body.length).toBe(itemsLength._body.length - 1);
  });
});
