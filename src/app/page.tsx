"use client"; 

import React from "react";

import { tarefasIniciais, Tarefa } from "../app/data/tarefas";
import NovaTarefa from "../app/components/NovaTarefa";
import { useContadorDeTarefas } from "../app/hooks/useContadorDeTarefas";

export default function Page() {
  const [tarefas, setTarefas] = React.useState<Tarefa[]>(tarefasIniciais);
  const contador = useContadorDeTarefas(tarefas);

  const adicionarTarefa = (nova: Tarefa) => {
    setTarefas((prev) => [...prev, nova]);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <p>Total: {contador}</p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>{t.titulo}</li>
        ))}
      </ul>
      <NovaTarefa onAdicionar={adicionarTarefa} />
    </div>
  );
}
