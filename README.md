# Cypress Automation Framework:

This Cypress Automation framework is a JavaScript-based Using Mocha framework and Chai Assertion library

### **Cypress.io General info** 

[Cypress](https://www.cypress.io/)
users are typically developers or QA engineers building web applications using modern JavaScript frameworks. This is the top tier UI automation framework which outsmarts Selenium based frameworks in most of the aspects!

Cypress enables you to write all types of tests: 
1. End-to-end tests; 
2. Integration tests; 
3. Unit tests; 
4. Cypress can test anything that runs in a browser; 

Apart from that Cypress provides the Dashboard facility for CI/CD

#### **CYPRESS – KEY DIFFERENCES:**

##### **PROS – OF CYPRESS:**

Easy to Setup – execute one command; npm install cypress --save-dev, no need to download external libraries etc (Unlike Selenium WebDriver). 
* Quick & Very Stable – Cypress uses JavaScript a native web browser language, uses a different architecture and executes directly inside the browser (Instead of outside the browser).
* Flake Resistant – Cypress is notified the moment the page loads and the moment the page unloads. It is impossible for Cypress to miss elements when it fires events.
* API Testing – Ability to test & mock API’s.

##### **CONS – OF CYPRESS:**

Ideally some Knowledge / Experience using JavaScript – would be desirable!
* No Mobile Testing – Whilst Cypress enables you to alter viewport sizes it does not 
support mobile testing.
* Single Domain & Single Tab. 
* If you intend to upgrade your dashboard service – Gain greater access to more dashboard recordings and the ability to increase the amount of tests which you can execute in parallel, then you will need to pay a monthly fee; Note this is not a con; its a way for Cypress to continue their efforts to further enhance and support their product. ( More info can be found here: https://www.cypress.io/pricing)


### **Mocha General info**

[Mocha](https://mochajs.org) is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on GitHub.

##### **FUNCTION CALLS**
* MOCHA - Comes pre bundled with two function calls which are describe() and it() both have their own specific purpose.
* describe() is simply a way to group our tests in Mocha; basically enabling us to group a series of tests together. describe() takes two arguments: first argument: the name of the test group and the second argument is simply the call-back function (Simply put: A call-back is a function that is to be executed after another function has finished executing — hence the name ‘call back’) 
* it() is way to describe each individual test case which is nested inside the describe() block. it() should be described in way that makes sense for the given test case. describe is used to define and group tests, it is used to define individual test cases.

##### **MOCHA EXAMPLE**

describe("Test Contact Us form WebdriverUni", () => {

		it("Should be able to submit a successful submission via contact us form", () => {	cy.get('[name="first_name"]').type("Joe")
		cy.get('[name="last_name"]').type("Blogs")
		cy.get('[name="email"]').type("joe_blogs@mail.com")
		cy.get('textarea').type("How much does product x cost?")
		cy.get('#form_buttons .contact_button:nth-of-type(2)').click()
		});
		
		it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
		cy.get('[name="first_name"]').type("Joe")
		cy.get('[name="last_name"]').type("Blogs")
		cy.get('#form_buttons .contact_button:nth-of-type(2)').click()		
		});		
})

### **Chai General info**

[Chai](https://www.chaijs.com/) is a BDD / TDD assertion library for Node.js and the browser that can be paired with any JavaScript testing framework.

Chai is an assertion library, similar to Node's built-in assert and makes testing easier by giving you many assertions you can run against your code. It also includes a robust Plugin architecture for extending Chai's assertions and interfaces.

![image](https://user-images.githubusercontent.com/76844360/146765921-952aac75-9079-4e5b-9b7e-f114e7e22a4c.png)

# **Prerequisite :**
Installation of Cypress Testing Framework

### **Environment Setup :**
Cypress can be installed using Npm package manager as shown below:

**1. Setup Chrome & Firefox Browser Installation**

https://www.mozilla.org/en-US/

https://www.google.com/chrome/

**2. Setup NodeJs**

https://nodejs.org/en/download/

**3. Setup Gitbash**

https://git-scm.com/downloads/

**4. Setup VS Code Installation & Configuration**

https://code.visualstudio.com/download

### **Cypress Installation & Setup** :
[Cypress Overview](https://docs.cypress.io/guides/core-concepts/test-runner#Overview)

Run Command on Gitbash Terminal **npm install --save-dev cypress@8.5.0**

Run Command on Gitbash Terminal **./node_modules/.bin/cypress open**

![image](https://user-images.githubusercontent.com/76844360/146769652-dce9e908-c781-428c-9e8e-c153e016b5f5.png)


 
### **Install [Mocha](https://mochajs.org/)** :

**Install with npm globally:**


Run Command on Gitbash Terminal **$ npm install --global mocha**

or as a development dependency for your project:

Run Command on Gitbash Terminal **$ npm install --save-dev mocha**


### **Install [Chai](https://www.chaijs.com/)** :

Run Command on Gitbash Terminal **npm install --save-dev chai**


![image](https://user-images.githubusercontent.com/76844360/146770348-c6f5dd75-8ab9-405c-92c1-76bd506773b6.png)


# **Great Course:**


Great Course on Udemy for Cypress V8- UI Automation Testing + API Testing + Frameworks

**https://www.udemy.com/course/cypress-io-master-class/**


