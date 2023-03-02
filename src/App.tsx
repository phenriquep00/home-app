import './App.css'
import { Content } from './components/Content'
import { Navigator } from './components/Navigator'

function App() {
  return (
    <div className="flex flex-col text-slate-200 bg-zinc-900 w-screen h-screen">
      <Content />
      <Navigator />
    </div>
  )
}

export default App
