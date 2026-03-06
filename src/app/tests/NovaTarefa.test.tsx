import { render, screen, fireEvent } from "@testing-library/react";
import NovaTarefa from "../components/NovaTarefa";

test("renderiza input e botão", () => {
  render(<NovaTarefa onAdicionar={() => {}} />);
  expect(screen.getByPlaceholderText("Digite a tarefa")).toBeInTheDocument();
  expect(screen.getByText("Adicionar")).toBeInTheDocument();
});

test("adiciona tarefa ao submeter", () => {
  const mockAdicionar = jest.fn();
  render(<NovaTarefa onAdicionar={mockAdicionar} />);
  
  fireEvent.change(screen.getByPlaceholderText("Digite a tarefa"), {
    target: { value: "Nova tarefa" },
  });
  fireEvent.click(screen.getByText("Adicionar"));

  expect(mockAdicionar).toHaveBeenCalledWith(
    expect.objectContaining({ titulo: "Nova tarefa" })
  );
});
