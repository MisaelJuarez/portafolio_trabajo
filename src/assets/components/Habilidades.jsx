import '../styles/Habilidades.css';
import ConTec from './ConTec';
import html_tec from '../img/html.png';
import css_tec from '../img/css.png';
import javascript from '../img/js.png';
import php_tec from '../img/php.png';
import node_tec from '../img/node.webp';
import bootstrap_tec from '../img/bootstrap.png';
import react_tec from '../img/react.png';
import mysql_tec from '../img/mysql.png';
import mongo_tec from '../img/mongo.png';
import python_tec from '../img/python.png';
import git_tec from '../img/git.png';
import github_tec from '../img/github.png';
import npm_tec from '../img/npm.png';
import next_tec from '../img/next.webp';
import laravel_tec from '../img/laravel.png';
import docker_tec from '../img/docker.png';
import type_tec from '../img/type.png';
import { useState } from 'react';

const Habilidades = () => {
    const [mostrar,setMostrar] = useState('frontend');

    const [front,setFront] = useState([
        {img:html_tec,tecnologia:'HTML'},
        {img:css_tec,tecnologia:'CSS'},
        {img:javascript,tecnologia:'JAVASCRIPT'},
        {img:bootstrap_tec,tecnologia:'BOOTSTRAP'},
        {img:react_tec,tecnologia:'REACT'},
    ]);

    const [back,setBack] = useState([
        {img:php_tec,tecnologia:'PHP'},
        {img:node_tec,tecnologia:'NODE JS'},
        {img:mysql_tec,tecnologia:'MYSQL'},
        {img:mongo_tec,tecnologia:'MONGO DB'},
        {img:python_tec,tecnologia:'PYTHON'},
    ]);
    
    const [herramienras,setHerramienras] = useState([
        {img:git_tec,tecnologia:'GIT'},
        {img:github_tec,tecnologia:'GITHUB'},
        {img:npm_tec,tecnologia:'NPM'},
    ]);
    
    const [aprendiendo,setAprendiendo] = useState([
        {img:next_tec,tecnologia:'NEXT.JS'},
        {img:laravel_tec,tecnologia:'LARAVEL'},
        {img:docker_tec,tecnologia:'DOCKER'},
        {img:type_tec,tecnologia:'TYPESCRIPT'},
    ]);
    
    return(
        <div className="container p-5" id='habilidades'>
            <p className="text-white text-center fs-1">Tecnologias</p>
            <p className='text-white text-center'>
                En mi viaje por el <span className='frase-1'>mundo del desarrollo web </span>, he cultivado 
                <span className='frase-2'> experienciay habilidades</span> <br /> 
                en una variedad de tecnologias. <span className='frase-3'> Mi stack tecnologico incluye</span>:
            </p>
            <div className="d-flex justify-content-center mt-5 btns-habilidades">
                <button className="boton-tec primero" onClick={() => setMostrar('frontend')}>Font-end</button>
                <button className="boton-tec" onClick={() => setMostrar('backend')}>Back-end</button>
                <button className="boton-tec" onClick={() => setMostrar('herramientas')}>Herramientas</button>
                <button className="boton-tec ultimo" onClick={() => setMostrar('aprendiendo')}>Aprendiendo</button>
            </div>
            { (mostrar === 'frontend') ? <ConTec tecnologias={front}/> : '' }
            { (mostrar === 'backend') ? <ConTec tecnologias={back}/> : '' }
            { (mostrar === 'herramientas') ? <ConTec tecnologias={herramienras}/> : '' }
            { (mostrar === 'aprendiendo') ? <ConTec tecnologias={aprendiendo}/> : '' }
        </div>
    );
}

export default Habilidades;