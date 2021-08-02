const app = require("../src/index");
const request = require("supertest");

describe("Testing JWT Functionality", () => {
  it("Tests Creation on JWT tokens", async () => {
    const res = await request(app)
      .post("/create")
      .send({
        content: { SomeValue: "SomeData" },
        expires: "1627677783",
      });
    expect(res.statusCode).toEqual(200);
  });
  it("Tests Decoding of JWT tokens", async () => {
    const res = await request(app).get("/decode").send({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzIjoiMTYyNzY3Nzc4MyIsImNvbnRlbnQiOiJ7TWFkaGF2OiBLaG9zbGF9IiwiaWF0IjoxNjI3Njc3ODE4fQ.8TTF6IkHAOERgouHdWF2H8nv6VnTdDNiLJqQJiGsmYs",
    });
    expect(res.statusCode).toEqual(200);
  });
  it("Tests Verification of JWT tokens", async () => {
    const res = await request(app).get("/verify").send({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzIjoiMTYyNzY3Nzc4MyIsImNvbnRlbnQiOiJ7TWFkaGF2OiBLaG9zbGF9IiwiaWF0IjoxNjI3Njc3ODE4fQ.8TTF6IkHAOERgouHdWF2H8nv6VnTdDNiLJqQJiGsmYs",
    });
    expect(res.statusCode).toEqual(200);
  });
  it("Tests Deletion of JWT tokens", async () => {
    const res = await request(app).delete("/delete").send({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzIjoiMTYyNzY3Nzc4MyIsImNvbnRlbnQiOiJ7TWFkaGF2OiBLaG9zbGF9IiwiaWF0IjoxNjI3Njc3ODE4fQ.8TTF6IkHAOERgouHdWF2H8nv6VnTdDNiLJqQJiGsmYs",
    });
    expect(res.statusCode).toEqual(200);
  });
});

describe("Testing body validation", () => {
  it("Testing body validation (for deletion)", async () => {
    const res = await request(app)
      .delete("/delete")
      .send({
        notToken: {
          data: 1,
        },
      });
    expect(res.statusCode).toEqual(400);
  });
  it("Testing body validation (for Validation of JWT)", async () => {
    const res = await request(app)
      .get("/verify")
      .send({
        notToken: {
          data: 1,
        },
      });
    expect(res.statusCode).toEqual(400);
  });

  it("Testing body validation (for Decode of JWT)", async () => {
    const res = await request(app)
      .get("/decode")
      .send({
        notToken: {
          data: 1,
        },
      });
    expect(res.statusCode).toEqual(400);
  });

  it("Testing body validation (for Creation of JWT)", async () => {
    const res = await request(app).post("/create").send({
      expires: 4,
      content: 4,
    });
    expect(res.statusCode).toEqual(400);
  });
});
