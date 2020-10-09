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
                <ul className="links">
                    {nums.map(num => (
                        <Link href="/num/[id].js" as={`/num/${num}`} key={num}>
                            <a className="pastComics">#{num}</a>
                        </Link>
                    ))}
                    
                    <style jsx> {`
                        .links {
                            padding-left: 40px;
                        }

                        .pastComics {
                         margin-right: 5px;
                        }
                        // /* unvisited link */
                        // a:link {
                        // color: #0000EE;
                        // }

                        // /* visited link */
                        // a:visited {
                        // color: #551a8b;
                        // }
                    `}
                    </style>
                </ul>
            </footer>
        </>
    )
  }
  