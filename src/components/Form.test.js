import { fireEvent, render, screen } from "@testing-library/react";
import EnquiryForm from "./Form";

test("shows friendly field guidance and validates email and message on blur", () => {
  render(<EnquiryForm />);

  expect(
    screen.getByText(/we’ll use this address to reply to your enquiry/i)
  ).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText(/email address/i), {
    target: { value: "not-an-email" }
  });
  fireEvent.blur(screen.getByLabelText(/email address/i));
  expect(screen.getByRole("alert")).toHaveTextContent(/valid email address/i);

  fireEvent.blur(screen.getByLabelText(/your message/i));
  expect(screen.getByText(/at least 10 characters/i)).toBeInTheDocument();
});

test("rejects invalid name and phone characters with immediate messages", () => {
  render(<EnquiryForm />);

  const nameInput = screen.getByLabelText(/full name/i);
  fireEvent.change(nameInput, {
    target: { value: "Lerato" }
  });
  expect(nameInput).toHaveValue("Lerato");

  fireEvent.change(nameInput, {
    target: { value: "Lerato2" }
  });
  expect(nameInput).toHaveValue("Lerato");
  expect(screen.getByRole("alert")).toHaveTextContent(/letters and spaces only/i);

  const phoneInput = screen.getByLabelText(/phone number/i);
  fireEvent.change(phoneInput, {
    target: { value: "2665012" }
  });
  expect(phoneInput).toHaveValue("2665012");

  fireEvent.change(phoneInput, {
    target: { value: "2665012a" }
  });
  expect(phoneInput).toHaveValue("2665012");
  expect(screen.getByText(/digits only/i)).toBeInTheDocument();
});

test("allows up to 20 name characters and rejects longer names", () => {
  render(<EnquiryForm />);

  const nameInput = screen.getByLabelText(/full name/i);
  const twentyCharacters = "Abcdefghij Klmnopqrs";
  expect(twentyCharacters).toHaveLength(20);

  fireEvent.change(nameInput, {
    target: { value: twentyCharacters }
  });
  expect(nameInput).toHaveValue(twentyCharacters);

  fireEvent.change(nameInput, {
    target: { value: `${twentyCharacters}t` }
  });
  expect(nameInput).toHaveValue(twentyCharacters);
  expect(screen.getByRole("alert")).toHaveTextContent(/20 characters or fewer/i);
  expect(nameInput).toHaveAttribute("maxLength", "20");
});
