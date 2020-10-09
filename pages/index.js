import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import '../styles/base.css'

export default function Home(props) {
  return (
    <>
      <div className="hello">
        <Header />
        <h1>XKCD</h1>
        <h2>{props.comic.title}</h2>
        <img src={props.comic.img} alt={props.comic.alt}></img>
      {/* <style>{`
        .hello {
          border: 1px solid #DDD;
          font: 15px Times New Roman, Helvetica, Ariel, sans-serif;
          margin: 20px;
          padding: 20px;
          text-align: left;
        }
      `}
      </style> */}
      <Footer comicNum={props.comic.num}/>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch('http://xkcd.com/info.0.json');
  const data = await response.json();
  return {
    props: {
      comic: data
    }
  }
}
