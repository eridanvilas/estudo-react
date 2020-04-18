import React, { Component } from 'react';
import api from '../../services/api';
import { Redirect } from 'react-router-dom';
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
    create = async () => {
      await api.post('/products', this.state)
        .then(function () {
          window.location.replace("http://localhost:3000/");
        })
        .catch(function (error) {
          alert(error);
        });
    };
    render(){

      return(
        <div>
          <div class="container">
            <div class="row justify-content-md-center">
                <form onSubmit={this.create}>
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
                      <input class="form-control"  type='text' value={this.state.url} name='url' onChange={this.handleChange}/>
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
