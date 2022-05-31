import movies from '../movies.json'
import Link from 'next/link'
const Blog =()=>(
    <div>
        <ul>
        {Object.entries(movies).map((value, index) => {
            return <li key={index}>
                <Link href='/movie/[id]' as={'/movie/'+value[0]}>
                    <a>{value[1].title}</a>
                </Link>
                </li>
        })}

        </ul>
        
    </div>
)
export default Blog