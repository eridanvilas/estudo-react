import React, { Component } from 'react';
// import api from '../../services/api';
//import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles.css';

export default class NewProduct extends Component{
  constructor(){
    super();
    this.state={ title:'', description:'', url:''}
  }
    handleChange = event =>{
      this.setState({ [event.target.name]:event.target.value })
    }
    handleSubmit = event =>{
      event.preventDefault();

      const url = "http://localhost:3001/api/products/"
      console.log(url)
      const data = { "title":this.state.title, "description":this.state.description, "url":this.state.url }
      fetch(url, { method: 'POST',
        body: JSON.stringify(data), 
        headers:{ 'Content-Type': 'application/json' }
      })
          .then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => 
            console.log('Success:', response),
            );
    }
    render(){

      return(
        <div>
          <div class="container">
            <div class="row justify-content-md-center">
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                      <label for="Titulo">Titulo: </label>
                      <input class="form-control" type='text'value={this.state.title}  name='title' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group'>
                      <label for="Descricao">Descrição: </label>
                      <textarea class="form-control"  type='description' value={this.state.description} name='description' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group'>
                      <label for="URL"> URL: </label>
                      <input class="form-control"  type='url' value={this.state.url} name='url' onChange={this.handleChange}/>
                    </div>
                    <center>
                      <div class="row justify-content-between">
                        <div className='col-4'>
                          <Link className='btn btn-secondary btn-lg active' to='/' >Voltar</Link>
                        </div>
                        <div className='col-4'>
                          <input type='submit' class="btn btn-primary btn-lg active" value='Adicionar Novo' />
                        </div>
                      </div>
                    </center>
                </form>
            </div>
          </div>
        </div>
      );
    }
}
