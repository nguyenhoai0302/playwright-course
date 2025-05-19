import { test, expect } from "@playwright/test";

test.skip("Open new window and navigate back", async ({ context, page }) => {
  await page.goto("http://127.0.0.1:3000/");
  const pageProsime = context.waitForEvent("page");
  await page.click("#openNewWindow");
  const newPage = await pageProsime;
  await newPage.waitForLoadState();
  console.log(await newPage.title());
  await expect(
    newPage.getByRole("heading", { name: "Welcome to the New Page" })
  ).toBeVisible();
});

test.skip("Add Cookie", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000/");
  await page.click("#setCookie");

  const cookies = await page.context().cookies();
  const sessionCookie = cookies.find((c) => c.name === "session");
  console.log("Session cookie", sessionCookie);

  await expect(sessionCookie).toBeDefined();
});

test.only("Delete Cookie", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000/");
  await page.click("#setCookie");
  const cookies = await page.context().cookies("http://127.0.0.1:3000/");
  const sessionCookie = cookies.find((c) => c.name === "session");
  console.log("Session cookie", sessionCookie);

  await page.click("#deleteCookie");
  const deleteCookies = await page.context().cookies('http://127.0.0.1:3000/');
  const deleteSessionCookie = deleteCookies.find((c) => c.name === "session");
  
  await expect(deleteSessionCookie).toBeUndefined();
});
