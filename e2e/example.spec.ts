import { test, expect } from "@playwright/test";

test("nav bar link works on homepage", async ({ page }) => {
  await page.goto("/");

  const link = await page.getByTestId("page-link");
  await expect(link).toHaveText("About");

  await link.click();
  const url = await page.url();
  await expect(url).toEqual("http://localhost:3000/about");
});

test("nav bar link works on about page", async ({ page }) => {
  await page.goto("/about");

  const link = await page.getByTestId("page-link");
  await expect(link).toHaveText("Home");

  await link.click();
  const url = await page.url();
  await expect(url).toEqual("http://localhost:3000/");
});

test("draw card button is displayed on homepage", async ({ page }) => {
  await page.goto("/");

  const button = await page.getByTestId("draw-button");
  await expect(button).toHaveText("Draw Card");
});

test("clicking the button will draw a card", async ({ page }) => {
  await page.goto("/");

  const button = await page.getByTestId("draw-button");
  await button.click();
  await page.isVisible("[data-testId='new-card']");
});
