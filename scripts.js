
const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

const getData = async (url) =>{
  const response = await fetch(url);
  if (response.ok) {
  return response.json();
} else{
  throw Error(`Error getting data: ${response.statusText}`);
  }
}

const addData = async () =>{
  try{
   const data = await getData('https://ghibliapi.herokuapp.com/films');
    console.log(data);
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;
      const h2 = document.createElement('h2');
      h2.textContent = movie.director;

      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(h2);
      card.appendChild(p);
    });
  }catch(error){
    console.log(error);
  }
}

addData();

  