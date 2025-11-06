import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InventoryList from './components/InventoryList';
import LoanForm from './components/LoanForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-50 to-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LoanForm />
        <InventoryList />
      </main>
      <Footer />
    </div>
  )
}

export default App
