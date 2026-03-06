import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";

test("retorna número correto de tarefas", () => {
  const tarefas = [{ id: 1, titulo: "Teste" }, { id: 2, titulo: "Outra" }];
  const { result } = renderHook(() => useContadorDeTarefas(tarefas));
  expect(result.current).toBe(2);
});
