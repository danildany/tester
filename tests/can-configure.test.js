import { describe, expect, it } from "vitest";

const canConfig = (from, to) => {
  // if(from == undefined) throw new Error('from is required')
  if (typeof from != "string") throw new Error("from must be a string");
  if (typeof to != "string") throw new Error("to must be a string");
  const isSameLength = from.length == to.length;
  if (!isSameLength) return false;
  const hasSameUniqueLetters = new Set(from).size === new Set(to).size;
  if (!hasSameUniqueLetters) return false;
  const transformation = {};
  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i];
    const toLetter = to[i];

    const storedLetter = transformation[fromLetter];
    if (storedLetter && storedLetter != toLetter) return false;

    transformation[fromLetter] = toLetter;
  }

  return true;
};

describe("canConfig", () => {
  // it('canConfig should be a function',()=>{
  //     expect(canConfig).toBeTypeOf('function')
  // })
  // it('canConfig should throw if first parameter is missing',()=>{
  //     expect(()=>{canConfig()}).toThrow()
  // })
  it("canConfig should throw if first parameter is not a string", () => {
    expect(() => {
      canConfig(1);
    }).toThrow();
  });
  it("canConfig should throw if first parameter is not a string", () => {
    expect(() => {
      canConfig("a");
    }).toThrow();
  });
  it("canConfig should return a boolean", () => {
    expect(canConfig("a", "b")).toBeTypeOf("boolean");
  });
  it("canConfig should return false if strings provided have diferent length", () => {
    expect(canConfig("abc", "bc")).toBe(false);
  });
  it("canConfig should return false if strings provided have diferent number of unique letters", () => {
    expect(canConfig("abc", "ddd")).toBe(false);
  });
  it("canConfig should return false if strings provided have diferent length even whit same unique letters", () => {
    expect(canConfig("abb", "ba")).toBe(false);
  });
  it("canConfig should return false if strings has a diferent order of transformation", () => {
    expect(canConfig("XBOX", "XXBO")).toBe(false);
  });
});
