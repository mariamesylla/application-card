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
  test("./items get all", async () => {
    const res = await request(app).get("/api/items");
    expect(res.statusCode).toBe(200);

    const resData = res.text;

    let allItems = await Item.findAll();

    allItems = JSON.stringify(allItems);

    expect(resData).toMatch(allItems);
  });
});
