import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test.describe('Sweet Shop Tests', () => {

  // URL assertion
  test('TC01 - Homepage loads successfully', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();
    await expect(page).toHaveURL(/sweetshop/);
  });

  // Button interaction
  test('TC04 - Add product to cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);

    await homePage.navigate();
    await homePage.addFirstProductToCart(); // clicks "Add to cart" button

    await expect(cartPage.cartIcon).toBeVisible();
  });

  // Negative scenario with form submission
  test('TC07 - Invalid quantity submission', async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);

    await homePage.navigate();
    await homePage.addFirstProductToCart();

    // Fill the quantity input with invalid value
    await cartPage.quantityInput.fill('-5');

    // Submit the form (e.g., "Update Cart" button)
    await cartPage.updateCartButton.click();

    // Assert that the input was corrected (negative scenario)
    await expect(cartPage.quantityInput).toHaveValue('0');

    // Optional: assert an error message is visible
    await expect(cartPage.quantityError).toBeVisible();
  });

  // Form interaction + submit
  test('TC08 - Search form submission', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();
    
    // Fill input field
    await homePage.searchInput.fill('Chocolate');
    // Submit the form
    await homePage.searchButton.click();

    // Assert URL contains search query
    await expect(page).toHaveURL(/search\?q=Chocolate/);
    // Assert that search results appear
    await expect(homePage.searchResults).toBeVisible();
  });

});
