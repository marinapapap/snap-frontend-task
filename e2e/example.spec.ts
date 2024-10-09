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

  await page.route(
    "https://deckofcardsapi.com/api/deck/*/draw/?count=1",
    async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          cards: [
            {
              image: "image.png",
            },
          ],
        }),
      });
    }
  );

  const button = await page.getByTestId("draw-button");
  await button.click();
  await page.isVisible("[data-testid='new-card']");
  const srcValue = await page.getAttribute("[data-testid='new-card']", "src");
  expect(srcValue).toContain("image.png");
});

test("snap value text will appear if there is a value match", async ({
  page,
}) => {
  await page.goto("/");

  await page.route(
    "https://deckofcardsapi.com/api/deck/*/draw/?count=1",
    async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          cards: [
            {
              value: "3",
              suit: "SPADES",
            },
          ],
        }),
      });
    }
  );

  const button = await page.getByTestId("draw-button");
  await button.click();

  await page.route(
    "https://deckofcardsapi.com/api/deck/*/draw/?count=1",
    async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          cards: [
            {
              value: "3",
              suit: "CLUBS",
            },
          ],
        }),
      });
    }
  );

  await button.click();

  const snapValueElement = await page.$("[data-testid='snap-value']");
  const isVisible = await snapValueElement.isVisible();
  expect(isVisible).toBe(true);
  const snapValueText = await snapValueElement.innerText();
  expect(snapValueText).toContain("SNAP VALUE!");
});

test("snap suit text will appear if there is a suit match", async ({
  page,
}) => {
  await page.goto("/");

  await page.route(
    "https://deckofcardsapi.com/api/deck/*/draw/?count=1",
    async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          cards: [
            {
              value: "3",
              suit: "SPADES",
            },
          ],
        }),
      });
    }
  );

  const button = await page.getByTestId("draw-button");
  await button.click();

  await page.route(
    "https://deckofcardsapi.com/api/deck/*/draw/?count=1",
    async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          cards: [
            {
              value: "5",
              suit: "SPADES",
            },
          ],
        }),
      });
    }
  );

  await button.click();

  const snapSuitElement = await page.$("[data-testid='snap-suit']");
  const isVisible = await snapSuitElement.isVisible();
  expect(isVisible).toBe(true);
  const snapSuitText = await snapSuitElement.innerText();
  expect(snapSuitText).toContain("SNAP SUIT!");
});

test.describe("Total matches display when no cards remain", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");

    await page.route(
      "https://deckofcardsapi.com/api/deck/*/draw/?count=1",
      async (route) => {
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({
            remaining: 0,
            cards: [
              {
                value: "5",
                suit: "SPADES",
              },
            ],
          }),
        });
      }
    );

    const button = await page.getByTestId("draw-button");
    await button.click();

    await page.waitForSelector("[data-testid='value-matches']");
  });

  test("displays total value matches when no cards remain", async ({
    page,
  }) => {
    const valueMatches = await page.$("[data-testid='value-matches']");
    const valMatchesVisible = await valueMatches.isVisible();
    expect(valMatchesVisible).toBe(true);
    const text = await valueMatches.innerText();
    expect(text).toContain("VALUE MATCHES: 0");
  });

  test("displays total suit matches when no cards remain", async ({ page }) => {
    const suitMatches = await page.$("[data-testid='suit-matches']");
    const suitMatchesVisible = await suitMatches.isVisible();
    expect(suitMatchesVisible).toBe(true);
    const suitText = await suitMatches.innerText();
    expect(suitText).toContain("SUIT MATCHES: 0");
  });
});
