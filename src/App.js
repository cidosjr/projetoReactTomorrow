import './App.css';
import React, {Component} from 'react';
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    alunos: []
  }

  removerAluno = (index) => {
    const {alunos} = this.state
    this.setState(
      {
      alunos: alunos.filter((aluno, i) => {
        return i !== index
        })
      }
    )
  }

  handleSubmit = (alunoDisc) => {
    this.setState({
      alunos: [...this.state.alunos, alunoDisc]
    })
  }


  render(){
    const {alunos} = this.state

    return (
      <div className='container'>
        <Table alunos = {alunos}
               removerAluno={this.removerAluno}
        />
        <Form  handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default App;



/**
 {
    alunos: [
      {
        nome: 'Dudu',
        turma: 'Programação Web'
      },
      {
        nome: 'Paty',
        turma: 'Análise de Algoritmos'
      },
      {
        nome: 'Joãozinho',
        turma: 'Programação OO'
      },
      {
        nome: 'Ju',
        turma: 'Eng de Requisitos'
      },

    ]
  }

**/