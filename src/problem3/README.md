# Computational Inefficiencies and Anti-Patterns

## 1. **Incorrect variable name**

- **Issue:** The `filter` condition in `sortedBalances` has incorrect or redundant logic:

  - The variable `lhsPriority` is used but is undefined. It should likely be `balancePriority`.

- **Optimization:** Update the variable name.

## 2. Improve the getPriority function's logic

- **Issue:** Using `Swith case` verbose and harder to maintain
  - Each case requires multiple lines, making the function unnecessarily long.
  - If you add a new blockchain, you have to modify multiple lines.
- **Optimization:** Using `Object Lookup` leaner and more Maintainable Code
  - Instead of writing multiple case statements, an object stores values in a single place
  - dding or modifying a blockchain only requires changing one line.

## 3. **Inefficient `useMemo` Dependency**

- **Issue:** The `useMemo` for `sortedBalances` includes `prices` in the dependency array, but `prices` is not used in the memoization logic.
- **Optimization:** Remove unnecessary dependencies to avoid recalculating `sortedBalances` when irrelevant values change.

## 4. **Formatted Balance defined but unused**

- **Issue:** Formatted Balance is defined and computed but unused:
  - `formattedBalances` array mapping.
  - In `rows` during rendering. (Actually the formattedBalance is not being used any where, might be a mistake in the rows rendering - should be formattedBalance.map...)
- **Optimization:** Format amounts once during mapping and reuse the formatted values in `rows`.

## 5. **Dynamic Key Usage in Rows**

- **Issue:** Using `index` as the `key` in the `WalletRow` component is an anti-pattern in React. It can cause issues with rendering and reconciliation.
- **Optimization:** Use a unique identifier such as `balance.currency` or a combination of blockchain and currency for the `key`(Assume that balance.currency is unique).

## 6. **Unnecessary Data Transformations**

- **Issue:** The `formattedBalances` array is created but not used directly in rendering. Instead, the `sortedBalances` array is reused with transformations applied in the `rows` mapping.
- **Optimization:** Eliminate `formattedBalances` and incorporate the formatting directly into the `rows` mapping.

## 7. **Potential Rendering Bottleneck**

- **Issue:** The `rows` array is recomputed for every render even if the `sortedBalances` do not change.
- **Optimization:** Memoize the `rows` array to avoid redundant computation.

## 8. **Ambiguous Function Return Logic**

- **Issue:** The return logic in `filter` for `sortedBalances` is unnecessarily complex and potentially incorrect, eg:
  ```typescript
  if (balance.amount <= 0) {
    return true;
  }
  return false;
  ```
- **Optimization:** Simplify to:
  ```typescript
  return balance.amount <= 0;
  ```

### 9. Poor Naming Conventions

- **Issue:** Names like `lhs` and `rhs` are cryptic and reduce readability.
- **Optimization:** Use descriptive names such as `leftBalance` and `rightBalance`.
