import Button from '~/components/Button'
import ThemeContainer from '~/themes/ThemeContainer'

import './App.css'

export default function App() {
  return (
    <ThemeContainer>
      <div className="bg-brand-blue-950 w-screen h-screen max-w-screen">
        <Button>Test</Button>
      </div>
    </ThemeContainer>
  )
}
