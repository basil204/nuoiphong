import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TeamSection } from './components/TeamSection';
import { DonationTable } from './components/DonationTable';
import { PoemSection } from './components/PoemSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-slate-800 font-sans selection:bg-orange-200 selection:text-orange-900">
      <Header />
      <main>
        <Hero />
        <TeamSection />
        <DonationTable />
        <PoemSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;