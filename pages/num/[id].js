import Header from '../../components/Header'

export default function ComicDetail(props) {
    return (
        <>
            <div className="hello">
                <Header />
                <h2>{props.comic.title}</h2>
                <img src={props.comic.img} alt={props.comic.alt}></img>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const num = context.query.id;
    const response = await fetch(`http://xkcd.com/${num}/info.0.json`);
    const comic = await response.json();

    return {
        props: {
            comic
        }
    }
}
