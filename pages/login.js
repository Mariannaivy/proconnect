export default function Login() {
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

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login to Pro Connect</h2>
          <input type="email" placeholder="Email" className="w-full mb-4 px-4 py-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full mb-6 px-4 py-2 border rounded" />
          <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
            Login
          </button>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-6 shadow-inner">
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
