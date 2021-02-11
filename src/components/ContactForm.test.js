import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm.js";

test("renders", () => {
  render(<ContactForm />);
});

test("first name renders", () => {
  render(<ContactForm />);

  const fNameInput = screen.getByPlaceholderText("Edd");

  userEvent.type(fNameInput, "Alex");

  expect(fNameInput).toHaveValue("Alex");
  expect(fNameInput).toBeInTheDocument();
});

test("last name renders", () => {
  render(<ContactForm />);

  const lNameInput = screen.getByPlaceholderText("Burke");

  userEvent.type(lNameInput, "Pfeifer");

  expect(lNameInput).toHaveValue("Pfeifer");
  expect(lNameInput).toBeInTheDocument();
});

test("email renders", () => {
  render(<ContactForm />);

  const emailInput = screen.getByPlaceholderText("bluebill1049@hotmail.com");

  userEvent.type(emailInput, "alex@email.com");

  expect(emailInput).toHaveValue("alex@email.com");
  expect(emailInput).toBeInTheDocument();
});

test("message renders", () => {
  render(<ContactForm />);

  const messageInput = screen.getByLabelText(/message/i);

  userEvent.type(messageInput, "this is a message");

  expect(messageInput).toHaveValue("this is a message");
  expect(messageInput).toBeInTheDocument();
});

test("button submits", () => {
  render(<ContactForm />);

  const button = screen.getByRole("button");
  userEvent.click(button);
});
