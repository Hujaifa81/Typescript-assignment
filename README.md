
## ❓ Question: What is the difference between `any`, `unknown`, and `never` in TypeScript?

Understanding TypeScript's core types is essential for writing clean, type-safe code. Here's a breakdown of the differences:

### 🔸 `any`
- **Definition**: Disables type checking. Variables of type `any` can hold any value.
- **Behavior**: No type safety; we can call any method or access any property.

### 🔸 `unknown`
- **Definition**: Like `any`, but safer. We must perform a type check before using the value.
- **Behavior**: TypeScript will not allow us to use unknown values without narrowing.

### 🔸 `never`
- **Definition**: Represents a value that should never occur.
- **Use Cases**: Functions that throw errors or never return.

---

## ❓ Question: Provide an example of using Union and Intersection types in TypeScript.

TypeScript allows us to combine types in flexible ways using **union** (`|`) and **intersection** (`&`) types.

---

### 🔸 Union Types (`|`)

A union type allows a value to be **one of several types**.

#### ✅ Example:
```ts
type StringOrNumber = string | number;

function printValue(value: StringOrNumber): void {
  console.log(value);
}

printValue("Hello"); 
printValue(42);      
```

#### 🔍 Use Case:
- When a function can accept more than one type of input.

---

### 🔸 Intersection Types (`&`)

An intersection type allows a value to have **all characteristics** of multiple types.

#### ✅ Example:
```ts
interface Person {
  name: string;
  age: number;
}

interface Address {
  city: string;
  zip: string;
}

type PersonWithAddress = Person & Address;

const user: PersonWithAddress = {
  name: "Sabbir",
  age: 28,
  city: "Dhaka",
  zip: "1207"
};
```

