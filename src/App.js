import './App.css';

const BookGrid=({name,image,author,price})=>{

  return(
    <div className='bookGrid'>
    <img src={image} alt='error' height={200} width={150}/>
    <hr style={{width:'100%'}}/>
    <h4 className='bookGridText'>{name}</h4><br/>
    <h5 className='bookGridText'>By {author}</h5><br/>
    <h4 className='bookGridText'>₹{price}</h4>
    </div>
  )
}

const BookLibrary=()=>{

  
const booksCollection =[
  {
  bName:"Steve Jobs: The Exclusive Biography",
  bImage:"https://m.media-amazon.com/images/I/41n1edvVlLL._AC_UL320_.jpg",
  bAuthor:"Walter Isaacson",
  bPrice:"405"
},{
  bName:"All the Light we Cannot See: The Breathtaking World Wide Bestseller",
  bImage:"https://m.media-amazon.com/images/I/71ZX-2C+9lL._AC_UL320_.jpg",
  bAuthor:"Anthony Doerr",
  bPrice:"330"
},{
  bName:"Dune: 1",
  bImage:"https://m.media-amazon.com/images/I/81ym3QUd3KL._AC_UL320_.jpg",
  bAuthor:"Frank Herbert",
  bPrice:"356"
},{
  bName:"The White Tiger: Booker Prize Winner 2008",
  bImage:"https://m.media-amazon.com/images/I/91VoUeWl3oL._AC_UY218_.jpg",
  bAuthor:"Aravind Adiga",
  bPrice:"231"
},{
  bName:"Less: Winner of the Pulitzer Prize for Fiction 2018",
  bImage:"https://m.media-amazon.com/images/I/61c98GgouUL._AC_UY218_.jpg",
  bAuthor:"Andrew Sean Greer",
  bPrice:"383"
},{
  bName:"The Remains of the Day: Booker Prize Winner 1989",
  bImage:"https://m.media-amazon.com/images/I/71+HFMIHZeL._AC_UY218_.jpg",
  bAuthor:"Kazuo Ishiguro",
  bPrice:"396"
}];

  return(
    <div className='booksLibrary'>
    {booksCollection.map((e,i)=><BookGrid name={e.bName} image={e.bImage} author={e.bAuthor} price={e.bPrice} key={i}/>)}
    </div>
  );

}

function App() {



  return (
   <BookLibrary/>
  );
}

export default App;
