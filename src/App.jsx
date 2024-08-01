import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import './App.css'
import { rquestToGroq } from './utils/groq'

function App() {
  const [data, setData] = useState("")

  const aisubmit = async () => {
    const ai = await rquestToGroq(content.value)
    setData(ai)
 
  }

  return (
    <main className="flex flex-col min-h-[80vh] justify-center items-center max-w-xl w-full mx-auto">
      <div className="text-indigo-500 font-semibold text-4xl">
        <header>
          <h1>ADI AI</h1>
        </header>
      </div>
      <div className="text-indigo-500 text-lg">
        <p>Hi I'm ADI, let's explore the world together </p>
      </div>
      <form className="">
        <input className=" bg-slate-500 px-2 py-1 rounded-md text-white outline-white"
        id='content'
        type='text'
        
        
        />
        <button className="bg-indigo-500 text-white py-1 font-bold px-2 rounded-md"
        onClick={aisubmit}
        type='button'
         >search</button>
      </form>
      <div className="max-w-xl" >
        {data ?
          <SyntaxHighlighter language="swift" style={darcula} wrapLongLines={true}>{data}</SyntaxHighlighter>
          : null
        }
      </div>
    </main>
  )
}

export default App
