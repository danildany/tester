import { describe, expect, it } from "vitest";

import { fizzbuzz } from "../src/fizzbuzz";
describe("fizzbuzz", () => {
  // it('should be a function',()=>{
  //     expect(typeof fizzbuzz).toBe('function')
  // })
  it("should throw if not a number is provider as a parameter", () => {
    expect(() => {
      fizzbuzz();
    }).toThrow();
  });
  it("should throw an specific error message if not a number is provider as a parameter", () => {
    expect(() => {
      fizzbuzz();
    }).toThrow("parameter provided must be a number");
  });
  it("should throw an specific error message if not a number is provider as a parameter", () => {
    expect(() => {
      fizzbuzz(NaN);
    }).toThrow("parameter provided must be a number");
  });
  it("it should return 1 if number provided is 1", () => {
    expect(fizzbuzz(1)).toBe(1);
  });

  it('it should return "fizz" if number provided is 3', () => {
    expect(fizzbuzz(3)).toBe("fizz");
  });
  it('it should return "fizz" if number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe("fizz");
    expect(fizzbuzz(9)).toBe("fizz");
    expect(fizzbuzz(12)).toBe("fizz");
  });
  it('it should return "buzz" if number provided is 5', () => {
    expect(fizzbuzz(5)).toBe("buzz");
  });
  it('it should return "buzz" if number provided is multiple of 5', () => {
    expect(fizzbuzz(10)).toBe("buzz");
    expect(fizzbuzz(20)).toBe("buzz");
    expect(fizzbuzz(25)).toBe("buzz");
  });
  it('it should return "fizzbuzz" if number provided is multiple of both 3 and 5', () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
    expect(fizzbuzz(30)).toBe("fizzbuzz");
    expect(fizzbuzz(60)).toBe("fizzbuzz");
    expect(fizzbuzz(90)).toBe("fizzbuzz");
  });
});
