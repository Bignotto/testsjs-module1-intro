# Learn to test Javascript applications

Fábio Vedovelli

## Module 1: Get Started with Jest

Introduction to Jest and project start

### Project and first tests

```bash
mkdir intro
cd intro
npm init -y

yarn add jest @types/jest -D
```

**`package.json`**

Add the test script property

```json
  "scripts": {
    "test": "jest",
    "test:watch":"jest --watchAll"
  },
```

**Create the first test**

```javascript
it("should sum 2 and 2 and return 4", () => {
  expect(sum(2, 2)).toBe(4)
})
```

This test should fail. There is no sum function.

**Implement the sum function**

```javascript
module.exports.sum = (num1, num2) => num1 + num2
```

Import `sum` function and thest should pass.

```javascript
const { sum } = require("./calculator")

it("should sum 2 and 2 and return 4", () => {
  expect(sum(2, 2)).toBe(4)
})
```
