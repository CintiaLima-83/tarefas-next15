"use client";

import { useState } from "react";
import { Tarefa } from "../data/tarefas";

type Props = {
  onAdicionar: (tarefa: Tarefa) => void;
};

export default function NovaTarefa({ onAdicionar }: Props) {
  const [titulo, setTitulo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo.trim()) return;
    const novaTarefa: Tarefa = {
      id: Date.now(),
      titulo,
    };
    onAdicionar(novaTarefa);
    setTitulo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Digite a tarefa"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
