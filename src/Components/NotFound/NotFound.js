import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';



export default class NotFound extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super()

    }

    render(){


   return <h1 className='alert alert-danger'>404 <p>
       NotFound
       <Link to='/'> Navigate To HomePage </Link>
       </p> </h1>

    }






}