import React, { useState, useEffect } from "react";

const url = "http://localhost:8000/api/questions";

export default function Quizz() {
  const [tableau, setTableau] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selection, setSelection] = useState([]);
  const [question, setQuestion]= useState(0)

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(response =>  response.json())
      .then(data => {
        setTableau(data);

        let total = 0;
        let randQuestions = [];

        while (total < 10 && data.length > 0) {
          let random = rand(data.length);
          let t = 0
          let selectionReponse= []
          let rep =[
            data[random].reponse1,
            data[random].reponse2,
            data[random].reponse3,
            data[random].reponse4,
            data[random].reponse5,
            data[random].reponse6,
            data[random].reponse7,
            data[random].reponse8,
            data[random].reponse9,
            data[random].reponse10 
          ]

          
          while(t < 4)
          {
            let randomRep = rand(rep.length);
            selectionReponse.push(rep[randomRep])
            rep.splice(randomRep, 1);
            t++;
          }

         

          let donner  = {
            question: data[random].question,
            categorie: data[random].categorie,
            rep1: selectionReponse[0],
            rep2: selectionReponse[1],
            rep3: selectionReponse[2],
            rep4: selectionReponse[3]
        }

          randQuestions.push(donner);
          data.splice(random, 1);
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

        setQuestion(question+1);
  
  };



  return (
    <div>
      
        <div >
          <p>{selection[question].question}</p>
            <ul>
              <li onClick = {next}>{selection[question].rep1}</li>
              <li onClick = {next}>{selection[question].rep2}</li>
              <li onClick = {next}>{selection[question].rep3}</li>
              <li onClick = {next}>{selection[question].rep4}</li>
            </ul>
        </div>
   
    </div>
  );
}