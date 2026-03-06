import { render, screen } from "@testing-library/react";
import Page from "../../app/page";

test("renderiza lista inicial de tarefas", () => {
  render(<Page />);
  expect(screen.getByText("Estudar Next.js")).toBeInTheDocument();
  expect(screen.getByText("Praticar testes unitários")).toBeInTheDocument();
});
