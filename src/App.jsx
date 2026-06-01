import FocusInput from "./FocusInput";
import FilterList from "./FilterList";



function App() {
  const DATA = [
    {id: 1, name: 'A'},
    {id: 2, name: 'Ab'},
    {id: 3, name: 'AbcD'},
    {id: 4, name: 'Baca'}
  ]

  return (
    <>
      <FocusInput />
      <FilterList users={DATA} />
    </>
  )
}

export default App;