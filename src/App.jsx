// TODO 1: Create an array of at least 6 students.
import students from './data/students';
import Header from './components/Header';
import Footer from './components/Footer';
import StudentList from './components/StudentList';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Our Students</h2>
          <p className="text-slate-500 mt-2">Explore our students, their department and technical skills</p>
        </div>

        <StudentList students={students} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
