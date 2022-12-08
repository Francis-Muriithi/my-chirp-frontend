import BirdList from './BirdList'
import useFetch from './useFetch'

function Home() {
const {data: birds, isLoading, error} = useFetch('https://6389cd9e4eccb986e89ae6f9.mockapi.io/Birds')


  return (
    <div className="home">
    {error && <div>{error}</div>}
    {isLoading && <div> Loading...</div>}
    {birds && <BirdList birds={birds} title= "All Bird!"/> }
    </div>
  )
}

export default Home