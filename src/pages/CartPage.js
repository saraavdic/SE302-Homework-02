export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartIcon = page.locator('.cart');
    this.quantityInput = page.locator('input[type="number"]');
  }

  async isCartVisible() {
    return await this.cartIcon.isVisible();
  }

  async enterQuantity(value) {
    await this.quantityInput.fill(value);
  }

  async getQuantityValue() {
    return await this.quantityInput.inputValue();
  }
}
