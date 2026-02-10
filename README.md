# Sweet Shop Playwright Automation Tests

## Project Overview
This project contains automated end-to-end tests for the **Sweet Shop** web application using **Playwright** and **Page Object Model (POM)** design pattern.  
The goal is to validate core functionalities such as navigation, cart operations, form validation, and search.

## Tech Stack
* Playwright  
* JavaScript  
* Node.js  
* Page Object Model (POM)  
* Automated Testing  

## Project Structure
* tests/ – Contains Playwright test cases  
* pages/ – Page Object classes (HomePage, CartPage)  
* playwright.config.js – Playwright configuration  

## Implemented Test Cases
# TC01 – Homepage loads successfully  
# TC04 – Add product to cart  
# TC07 – Invalid quantity submission (negative test)  
# TC08 – Search form submission  

## Test Case Details

### TC01 – Homepage Loads Successfully
# Navigates to the Sweet Shop homepage  
# Verifies that the URL loads correctly  

### TC04 – Add Product to Cart
# Adds the first product to the cart  
# Verifies that the cart icon becomes visible  

### TC07 – Invalid Quantity Submission
# Adds a product to the cart  
# Enters an invalid quantity value (-5)  
# Submits the cart update form  
# Verifies quantity correction and error message visibility  

### TC08 – Search Form Submission
# Enters a product name into the search field  
# Submits the search form  
# Verifies URL contains search query  
# Confirms search results are displayed  

## How to Run the Tests
# Install dependencies  
```bash
npm install
```
# Run all tests
```bash
npx playwright test
```
# Run tests with UI mode
``` bash
npx playwright test --ui
```

#3# Notes
# Tests follow best practices for maintainability
# Negative testing is included for input validation
# Project is part of SE302 – Software Testing and Maintenance coursework
## Author
# Sara Avdić
# Software Engineering Student – International University of Sarajevo
