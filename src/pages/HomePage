export class HomePage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.locator('text=Add to cart').first();
  }

  async navigate() {
    await this.page.goto('https://sweetshop.netlify.app/');
  }

  async addFirstProductToCart() {
    await this.addToCartButton.click();
  }
}
