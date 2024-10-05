import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function InitialScreen() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/app', { replace: true })
    }, 2000)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center bg-brand-blue-950 text-gray-300 w-screen h-screen max-w-screen overflow-hidden select-none">
      <div className="text-4xl font-bold">Welcome to Nexus Downloader!</div>
      <div className="text-xl font-bold pt-8">Loading...</div>
    </div>
  )
}
