// import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home(props) {
  return (
    <>
      <div className="hello">
        <Header />
        <h1>XKCD</h1>
        <h2>{props.comic.title}</h2>
        <img src={props.comic.img} alt={props.comic.alt}></img>
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
