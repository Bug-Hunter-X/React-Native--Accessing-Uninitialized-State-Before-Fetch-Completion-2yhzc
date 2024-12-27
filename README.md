# React Native: Accessing Uninitialized State Before Fetch Completion

This repository demonstrates a common error in React Native applications where a state variable or property is accessed before it has been properly initialized, typically during asynchronous operations like API calls. The issue arises when components render before data fetching is complete, leading to runtime errors.

## Problem
The `bug.js` file illustrates the problem.  An attempt is made to access `data.someProperty` before the `setData` function has been called with a value (likely because of the asynchronous nature of the `fetch` call). This results in a runtime error because `data` is `null` at the time of render.

## Solution
The `bugSolution.js` file provides the solution.  It uses optional chaining (`?.`) to safely access `data.someProperty` only if `data` is not null. Alternatively, you could use a conditional rendering to display loading state or a fallback message when `data` is still null.