import BirdList from './BirdList'
import useFetch from './useFetch'

function Home() {
const {data: birds, isLoading, error} = useFetch('https://chirplog.herokuapp.com/birds')


  return (
    <div className="home">
    {error && <div>{error}</div>}
    {isLoading && <div> Loading...</div>}
    {birds && <BirdList birds={birds} title= "All Bird!"/> }
    </div>
  )
}

export default Home