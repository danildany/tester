import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Calculator, numbers, equalSign, operations } from "../src/Calculator";

describe("Calculator", () => {
  afterEach(cleanup);
  it("it should render", () => {
    render(<Calculator />);
  });
  it("it Should render title correctly", () => {
    render(<Calculator />);

    screen.getByText("Calculator");
  });

  it("should renders numbers", () => {
    render(<Calculator />);

    numbers.forEach((number) => {
      screen.getByText(number);
    });
  });

  it("should renders 4 rows", () => {
    render(<Calculator />);
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(4);
  });
  it("should render operations", () => {
    render(<Calculator />);
    operations.forEach((operation) => {
      screen.getByText(operation);
    });
  });
  it("shoul render equal sign", () => {
    render(<Calculator />);
    screen.getByText("=");
  });
  it("shoul render an input", () => {
    render(<Calculator />);
    screen.getByRole("textbox");
  });
  it("should user input after click on number", () => {
    render(<Calculator />);
    const input = screen.getByRole("textbox");
    const button = screen.getByText("1");
    fireEvent.click(button);
    expect(input.value).toBe("1");
  });

  it("should user input after click several numbers", () => {
    render(<Calculator />);
    const input = screen.getByRole("textbox");
    const button = screen.getByText("1");
    const button2 = screen.getByText("2");
    fireEvent.click(button);
    fireEvent.click(button2);
    expect(input.value).toBe("12");
  });

  it("should user input after click several numbers and operations", () => {
    render(<Calculator />);
    const input = screen.getByRole("textbox");
    const button1 = screen.getByText("1");
    const button2 = screen.getByText("2");
    const mas = screen.getByText("+");
    const button4 = screen.getByText("4");
    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(mas);
    fireEvent.click(button4);
    expect(input.value).toBe("12+4");
  });
  it("should user input after click several numbers and operations and equal sign", () => {
    render(<Calculator />);
    const input = screen.getByRole("textbox");
    const button1 = screen.getByText("1");
    const button2 = screen.getByText("2");
    const mas = screen.getByText("+");
    const button4 = screen.getByText("4");
    const equal = screen.getByText("=");
    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(mas);
    fireEvent.click(button4);
    fireEvent.click(equal);
    expect(input.value).toBe("16");
  });
});
