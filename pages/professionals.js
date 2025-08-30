const professionals = [
  { name: 'Alice Johnson', role: 'Interior Designer', rate: '£50/hr' },
  { name: 'Mark Smith', role: 'Personal Trainer', rate: '£40/hr' },
  { name: 'Sarah Lee', role: 'Marketing Consultant', rate: '£70/hr' },
  { name: 'James Carter', role: 'Web Developer', rate: '£60/hr' },
  { name: 'Emma Davis', role: 'Tutor', rate: '£35/hr' },
]

export default function Professionals() {
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

      <main className="flex-grow max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Our Professionals</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {professionals.map((pro, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-6 transform transition hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-semibold">{pro.name}</h3>
              <p className="text-gray-600">{pro.role}</p>
              <p className="text-purple-700 font-bold mt-2">{pro.rate}</p>
              <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                Contact
              </button>
            </div>
          ))}
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
