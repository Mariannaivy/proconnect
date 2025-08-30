import { useEffect, useState } from 'react'

export default function Home() {
  const [show, setShow] = useState(false)
  useEffect(() => { setShow(true) }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-purple-700 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold">Pro Connect</a>
          <div className="space-x-6">
            <a href="/" className="hover:text-gray-200">Home</a>
            <a href="/professionals" className="hover:text-gray-200">Professionals</a>
            <a href="/login" className="hover:text-gray-200">Login</a>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h2 className={`text-4xl font-bold text-gray-900 transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0'}`}>
          Welcome to Pro Connect
        </h2>
        <p className={`mt-2 text-lg text-gray-600 transition-opacity duration-500 delay-200 ${show ? 'opacity-100' : 'opacity-0'}`}>
          Connecting customers with trusted professionals
        </p>
        <button
          onClick={async () => {
            try {
              const res = await fetch('/api/create-booking', { method: 'POST' })
              const data = await res.json()
              alert('PaymentIntent created: ' + (data.clientSecret || data.error))
            } catch (e) {
              alert('Error: ' + e.message)
            }
          }}
          className={`mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg shadow transition-colors duration-300 hover:bg-purple-700 transition-opacity delay-500 ${show ? 'opacity-100' : 'opacity-0'}`}
        >
          Test a Booking
        </button>
      </main>

      <footer className={`bg-gray-900 text-white py-6 shadow-inner transition-opacity delay-500 ${show ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <p>© Pro Connect 2025. All rights reserved.</p>
          <div className="space-x-6">
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/professionals" className="hover:text-gray-300">Professionals</a>
            <a href="/login" className="hover:text-gray-300">Login</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
