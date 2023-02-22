// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext()

// 🐨 create a CountProvider component here that does this:
//   🐨 get the count state and setCount updater with React.useState
const CountProvider = props => {
  const value = React.useState(0)
  return (
    <CountContext.Provider value={value} {...props}></CountContext.Provider>
  )
}

const useCountContext = () => {
  const context = React.useContext(CountContext)
  if (!context) {
    throw new Error(
      'useCountContext may only be used from within a (child of a) CountProvider.',
    )
  }
  return context
}

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const [count] = useCountContext()
  // const count = 0
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  const [_, setCount] = useCountContext()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
