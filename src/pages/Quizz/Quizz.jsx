// import React, { useState, useEffect } from "react";

// const url = "http://localhost:8000/api/questions";

// export default function Quizz() {
//   const [tableau, setTableau] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setIsLoading(true);
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         setTableau(data);
//         setIsLoading(false);
//       })
//       .catch(error => {
//         setError(error);
//         setIsLoading(false);
//       });
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>An error occured: {error.message}</div>;
//   }

//   if (!tableau.length) {
//     return <div>No data available</div>;
//   }

//   return (
//     <div>
//       <p>{tableau[0].question}</p>
//       <p>truc</p>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";

// const url = "http://localhost:8000/api/questions";

// export default function Quizz() {
//   const [tableau, setTableau] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [selection, setSelection] = useState([]);

//   useEffect(() => {
//     setIsLoading(true);
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         setTableau(data);
//         let total = 0;
//         let randomQuestions = [];

//         while (total < 10 && data.length > 0) {
//           let random = rand(data.length);
//           randomQuestions.push(data[random]);
//           data.splice(random, 1);
//           total++;
//         }
//         setSelection(randomQuestions);
//         setIsLoading(false);
//       })
//       .catch(error => {
//         setError(error);
//         setIsLoading(false);
//       });
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>An error occured: {error.message}</div>;
//   }

//   if (!tableau.length) {
//     return <div>No data available</div>;
//   }

//   function rand(max) {
//     return Math.floor(Math.random() * max);
//   }

//   return (
//     <div>
//       {selection.map((item, i) => (
//         <div key={i}>{item.question}</div>
//       ))}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

const url = "http://localhost:8000/api/questions";

export default function Quizz() {
  const [tableau, setTableau] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selection, setSelection] = useState([]);

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
          randQuestions.push(data[random]);
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

  console.log(selection)

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

  return (
    <div>
      
        <div >
          <p>{selection[0].question}</p>
        </div>
   
    </div>
  );
}