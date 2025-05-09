const { test, expect } = require('@playwright/test');

test('should add a book', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  const input = page.locator('input');
  const button = page.locator('button');
  const bookList = page.locator('ul');

  await input.fill('The Great Gatsby'); // Ensure the input is filled
  await button.click(); // Click the add button

  // Wait for the book list to update by checking the presence of the new book
  await page.waitForSelector('ul li'); // Wait for the book to appear in the list

  await expect(bookList).toHaveText('The Great Gatsby'); // Assert the list contains the added book
});

test('should not add blank titles', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  const input = page.locator('input');
  const button = page.locator('button');
  const bookList = page.locator('ul');

  await input.fill(''); // Fill input with a blank string
  await button.click(); // Click the add button

  // Wait for the book list to remain empty
  await page.waitForSelector('ul li', { state: 'detached' }); // Ensure the list remains empty

  await expect(bookList).toHaveText(''); // Assert the list remains empty
});
