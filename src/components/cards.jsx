import img1 from './img/fantastic4.webp';
import img2 from './img/renger.jpeg';
import img3 from './img/ultra.jpeg';

import Stars from './stars';
import './style.css'
const films = [
{
 nameFilm: 'фантастическая четверка',
 age: 2015,
 img: img1,
 stars: 0,
},
{
  nameFilm: 'одинокий рейнджер',
  age: 2013,
  img: img2,
  stars: 4,
 },
 {
  nameFilm: 'ультраамериканцы',
  age: 2015,
  img: img3,
  stars: 5,
 },
];



function CreateFilmCard({ data }) {
  return (
    <div className="containerCards">
      {data.map((film, index) => (
        <div key={index} className="card">
          <img className='filmImg' src={film.img} alt={film.nameFilm} />
          <h3 className='filmTitle'>{film.nameFilm}</h3>
          <p className='filmDate'>{film.age}</p>
          <Stars count={film.stars} />
        </div>
      ))}
    </div>
  );
}


const SectionFilms = () => {
  return ( 
    <section className="section"> 
      <h3 className="titleSection">Фильмы</h3>     
      <CreateFilmCard data={films}/>
    </section>  
  );
}

export default SectionFilms;