import Link from 'next/link'

export default function Footer(props) {
    const currentNum = props.comicNum;
    const nums = [];

    for ( let i = currentNum-1; i > currentNum - 11; i--) {
        nums.push(i);
    }

    return (
        <>
            <footer>
                <h2>
                    Previous {nums.length}
                </h2>
                <p>
                    {nums.map(num => (
                        <Link href="/num/[id].js" as={`/num/${num}`} key={num}>
                            <a>#{num}</a>
                        </Link>
                    ))}
                </p>
            </footer>
        </>
    )
  }
  