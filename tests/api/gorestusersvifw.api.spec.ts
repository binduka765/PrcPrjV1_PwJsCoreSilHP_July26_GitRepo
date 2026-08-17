import { test, expect } from "@playwright/test";

let AUTH_TOKEN = {
  Authorization:
    "Bearer e6eec72969defa5772b22533590ebc176ed8184fb982e6582b5eff0f4cbf8cdd",
};

test("tc1:get all users- go rest ALL ", async ({ request }) => {
  let allUsersRes = await request.get("https://gorest.co.in/public/v2/users", {
    headers: AUTH_TOKEN,
  });
  let jsonBody = await allUsersRes.json();
  console.log(jsonBody);

  console.log(allUsersRes.status());
  console.log(allUsersRes.statusText());
});

test("2-get single user", async ({ request }) => {
  let singleUser = await request.get(
    "https://gorest.co.in/public/v2/users/8577798",
    {
      headers: AUTH_TOKEN,
    },
  );
  let userBody = await singleUser.json();
  console.log(userBody);

  console.log(singleUser.status());
  console.log(singleUser.statusText());
});

test("3-post a user", async ({ request }) => {
  let userData = {
    name: "schema test",
    email: `binAuto_${Date.now()}@open.com`,
    gender: "male",
    status: "active",
  };

  let postRes = await request.post("https://gorest.co.in/public/v2/users", {
    headers: AUTH_TOKEN,
    data: userData,
  });
  let resBody = await postRes.json();
  console.log(resBody);

  console.log(postRes.status());
  console.log(postRes.statusText());
});

test("4-update a user", async ({ request }) => {
  let updatedUserserData = {
    name: "api test",
    email: `binAuto_${Date.now()}@appmail.com`,
    gender: "female",
    status: "inactive",
  };

  let putRes = await request.put(
    "https://gorest.co.in/public/v2/users/8577796",
    {
      headers: AUTH_TOKEN,
      data: updatedUserserData,
    },
  );

  let resBody = await putRes.json();
  console.log(resBody);

  console.log(putRes.status());
  console.log(putRes.statusText());
});

test("5-delete user", async ({ request }) => {
  let delRes = await request.delete(
    "https://gorest.co.in/public/v2/users/8577796",
    {
      headers: AUTH_TOKEN,
    },
  );
  let resBody = await delRes.json();
  console.log(resBody);

  console.log(delRes.status());
  console.log(delRes.statusText());

  expect(delRes.status()).toBe(404);
});
