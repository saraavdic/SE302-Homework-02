# Automated Web Testing using Playwright & Page Object Model

## Overview

This project demonstrates automated web testing using **Playwright** and the **Page Object Model (POM)** design pattern. The goal is to perform both **functional testing** and **smoke testing** on a sample e-commerce application.

The tested application is **SauceDemo**:  
https://www.saucedemo.com/

The project focuses on validating core user workflows such as authentication, product browsing, shopping cart actions, and the checkout process.

---

## Technologies Used

- Playwright  
- JavaScript / TypeScript  
- Page Object Model (POM)  
- Node.js  
- GitHub  

---

## Project Structure

/pages  
&nbsp;&nbsp;loginPage.js  
&nbsp;&nbsp;inventoryPage.js  
&nbsp;&nbsp;cartPage.js  
&nbsp;&nbsp;checkoutPage.js  

/tests  
&nbsp;&nbsp;functionalTests.spec.js  
&nbsp;&nbsp;smokeTests.spec.js  

playwright.config.js  
package.json  

---

## Test Types

### Smoke Tests

Smoke tests verify that the application is stable and that critical pages load correctly.

Examples:
- Login page loads  
- Valid login works  
- Inventory page elements exist  
- Cart page loads  
- Checkout page opens  

---

### Functional Tests

Functional tests validate full user scenarios.

Covered features:
- Login (valid, invalid, empty fields)  
- Viewing inventory  
- Sorting products  
- Adding/removing items from cart  
- Product details  
- Checkout process  
- Logout  

Total test cases implemented: **25**

---

## Example Test Scenarios

- Login with valid credentials  
- Add items to cart  
- Remove items from cart  
- Sort items by name and price  
- Complete checkout  
- Cancel checkout  
- Logout  

---

## How to Run the Project

### Install dependencies

npm install  

### Run all tests

npx playwright test  

### Run with UI mode

npx playwright test --ui  

### View test report

npx playwright show-report  

---

## Page Object Model (POM)

The Page Object Model is used to:

- Separate test logic from UI selectors  
- Improve code reusability  
- Make tests easier to maintain  
- Increase readability  

Each page (Login, Inventory, Cart, Checkout) has its own class with methods like:
- login()  
- addItemToCart()  
- removeItem()  
- checkout()  

---

## Test Data

Default credentials used:

Username: standard_user  
Password: secret_sauce  

---

## Challenges & Solutions

### Challenge

Keeping selectors organized and stable.

### Solution

Used Page Object Model to centralize selectors and actions.

---

### Challenge

Handling navigation between pages.

### Solution

Explicit URL checks and Playwright assertions.

---

## Contributors

Students:
- Lana Hasanbegović  
- Hatidža Imamović  
- Sara Avdić  
- Esma Đuherić  
- Hava Dedić  

Professor:  
Dr. Amina Seferagić  

---

## Repository

https://github.com/HatidzaImamovic/SE302_Project_Saucedemo  

---

## Purpose of the Project

This project was created for the course **Software Testing and Maintenance** at the **International University of Sarajevo** and serves as a practical demonstration of modern automated web testing practices using Playwright.
