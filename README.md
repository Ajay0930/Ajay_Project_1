# Cypress Project

This project contains automated test scripts for testing various features of a web application using Cypress. The test scripts cover scenarios such as user login, search functionality, placing an order, and the checkout process.

## Table of Contents

- Prerequisites
- Installation
- Running the Tests
- Interactive Mode
- Test Scripts Overview
- Test Cases
- Troubleshooting
- Contributing

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (includes npm)
- [Git](https://git-scm.com/)

## Installation

1. **Clone the Repository:**

   git clone <repository-url>

2. **Install Project Dependencies:**
   "npm install cypress"

## Running the Tests
To open the Cypress Test Runner in interactive mode, run: "npx cypress open"
This command will launch the Cypress Test Runner. You can select and run specific test files from the list displayed.

## Test Scripts Overview

The following test scripts are included in the project:

- Login Feature Test: Verifies the user login functionality and navigation to the homepage.
- Search Feature Test: Verifies search functionality with valid and invalid keywords.
- Placing Order Flow: Verifies the process of adding a product to the cart.
- Checkout Process Test: Verifies the complete checkout process for placing an order.
- API Test: Verified the request status and validated the response of GET, POST, PUT and DELETE requests.
- Load Test: Verified the response time of the http request.

## Test Cases
1. Verify User Login and Navigation to Homepage
- Test Case ID: TC_LOGIN_001
- Description: Validate user login with valid credentials and redirection to the homepage.
- Expected Result: User is successfully logged in and redirected to the homepage.

2. Verify Search Functionality for Valid Product Keyword
- Test Case ID: TC_SEARCH_002
- Description: Validate that the user can search for a product using a valid keyword.
- Expected Result: Search results display products matching the keyword.

3. Verify Search Functionality for Invalid Product Keyword
- Test Case ID: TC_SEARCH_003
- Description: Validate that the search feature correctly handles an invalid product keyword.
- Expected Result: Displays the message "No results were found."

4. Verify Checkout Process for Placing an Order
- Test Case ID: TC_CHECKOUT_002
- Description: Validate that the user can successfully complete the checkout process and place an order.
- Expected Result: The order is successfully placed, and a confirmation message is displayed.

## Troubleshooting
   1. Cypress Test Runner Does Not Open:

   - Ensure that Node.js and npm are correctly installed.
   - Reinstall Cypress using npm install cypress --save-dev.
     
   2. Tests Fail Unexpectedly:

   - Verify that the application under test is accessible and the test data is correct.
   - Review error messages in the Cypress Test Runner or terminal output.

## Contributing
Contributions are welcome! Please follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes.
- Commit your changes (git commit -m 'Add new feature').
- Push to the branch (git push origin feature-branch).
- Open a pull request.




