import { logDOM } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Timer from "../../components/Timer/Timer";

const url = "http://localhost:8000/api/questions";
var note = 0;
var compteur = 0;
var count = 0;
var valeurBtn ='Suivant';

export default function Quizz() {
  const isLogged = localStorage.getItem('isLogged');
  const [tableau, setTableau] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selection, setSelection] = useState([]);
  const [question, setQuestion]= useState(0);
  const [afficherResultat, setAfficherResultat] = useState(false);
  const [afficherResultatHtml, setAfficherResultatHtml] = useState();
  const [demarrer, setDemarrer] = useState(false);
  const [counter, setCounter] = useState(20);

useEffect(() => {
 if(counter === 0){
  result('')
 }
  const timer =
  counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
return () => clearInterval(timer);
}, [counter]);

  useEffect(() => {
    setIsLoading(true);
  
    fetch(url)
      .then(response =>  response.json())
      .then(data => {
        var paramUrl = window.location.href.split('categorie=')

        const dataTrie = data.filter(une => une.categorie === decodeURI(paramUrl[1]));
 
        setTableau(dataTrie)
        
        let total = 0;
        let randQuestions = [];
        let widthTable = dataTrie.length
        
        while (total < 10 && widthTable > 0) {
          widthTable--;
          
          let random = rand(dataTrie.length);
          let t = 0;
          let selectionReponse= [];
          let bonneRep = dataTrie[random].reponse1;

          let rep =[
            dataTrie[random].reponse2,
            dataTrie[random].reponse3,
            dataTrie[random].reponse4,
            dataTrie[random].reponse5,
            dataTrie[random].reponse6,
            dataTrie[random].reponse7,
            dataTrie[random].reponse8,
            dataTrie[random].reponse9,
            dataTrie[random].reponse10 
          ]
          
          while(t < 3)
          {
            let randomRep = rand(rep.length);
            selectionReponse.push(rep[randomRep]);
            rep.splice(randomRep, 1);
            t++;
          }
          let table = [selectionReponse[0],selectionReponse[1],selectionReponse[2],bonneRep];
          const shuffledTable = shuffle(table);
          
          let donner  = {
            question: dataTrie[random].question,
            categorie: dataTrie[random].categorie,
            br: bonneRep,
            rep1: shuffledTable[0],
            rep2: shuffledTable[1],
            rep3: shuffledTable[2],
            rep4: shuffledTable[3]
          }

          randQuestions.push(donner);
          dataTrie.splice(random, 1);  
          total++;  
         
        }
        setSelection(randQuestions);
        setIsLoading(false);   
    
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  function shuffle(t){
    return t.sort(() => Math.random() - 0.5);
  }

  function rand(max) {
    return Math.floor(Math.random() * max);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  if (!tableau.length) {
    return <div>No data available</div>;
  }

  const next = () =>{
    compteur++
    setCounter(20)
    if(compteur >= 10){
      let id = localStorage.getItem('userID');
      if(isLogged === true){
        const partie = {
          idjoueur: id,
          score: note
        };
      
        axios.post('http://localhost:8000/api/parties', partie);
      }else{alert('pas connecté')}
      setAfficherResultatHtml(
        <div>
          <p>Votre score: {note}</p> 
          <Link to='/categories'>Retour au catégories</Link>
        </div>
      );
    }else{
      setQuestion(question+1);
      setAfficherResultat(false);
    }
  };


  function result(maRep) {
    count++;
    setCounter(20)
    setAfficherResultat(true);
    if (selection[question].br === maRep) {
      note++; 
      
      if(count >= 10){
        valeurBtn='Terminer'
      }
      setAfficherResultatHtml(
        <div>
          <p>{note}/10</p>
          <p>Bonne réponse</p>
          <button onClick={next}>{valeurBtn}</button>
        </div>
      );
    } else {
      if(count >= 10){
        valeurBtn='Terminer'
      }
      setAfficherResultatHtml(
        <div>
          <p>{note}/10</p>
          <p>Mauvaise réponse</p>
          <p>La réponse correcte était: {selection[question].br}</p>
          <button onClick={next}>{valeurBtn}</button>
        </div>
      );
    }
  }

  const launch = () =>{ 
    setDemarrer(true);
  };

 
 
  if(demarrer === false){
    return(
      <div>
        <button onClick={launch}>Démarrer</button>
      </div>
    )
  }else{

    if(afficherResultat === false)
    {
      
    return (

      <div>
        <div >
        <div>Countdown: {counter}</div>
          <p>{selection[question].question}</p>
          <ul>
            <li onClick ={() => result(selection[question].rep1)}>{selection[question].rep1}</li>
            <li onClick ={() => result(selection[question].rep2)}>{selection[question].rep2}</li>
            <li onClick ={() => result(selection[question].rep3)}>{selection[question].rep3}</li>
            <li onClick ={() => result(selection[question].rep4)}>{selection[question].rep4}</li>
          </ul>
        </div>
      </div>

    );

    }else{

      return(
        <div>{afficherResultatHtml}</div>
      )

    }
  }  
}