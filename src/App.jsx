import { useRive } from '@rive-app/react-canvas'
import untitledRiv from './assets/untitled.riv'
import './App.css'

function App() {
  const { RiveComponent } = useRive({
    src: untitledRiv,
    autoplay: true,
  })

  return (
    <div className="rive-container">
      <RiveComponent />
    </div>
  )
}

export default App
