import { fetchCharacter } from "./api/fetchCharacter"
import { useQuery } from "react-query"
function App() {
  const {isLoading,data} = useQuery({
    queryFn:fetchCharacter
  })

  
  
  return (
    <div className="App">

    </div>
  )
}

export default App
