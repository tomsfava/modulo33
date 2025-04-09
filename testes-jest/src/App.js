import {useState} from 'react'

function App() {
  const [tarefas, setTarefas] = useState([])
  const [tarefaTemp, setTarefaTemp] = useState('')

  function cadastrarTarefa() {
    setTarefas([...tarefas, tarefaTemp])
    setTarefaTemp('')
  }
  return (
    <div className="App">
      <input type="text" value={tarefaTemp} onChange={e => setTarefaTemp(e.target.value)} />
      <button type="button" onClick={cadastrarTarefa}>Cadastrar</button>
      <ul>
        {tarefas.map(tarefa => (
          <li>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
