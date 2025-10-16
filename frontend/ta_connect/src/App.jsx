import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/main/LandingPage'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors">
            <Routes>
              <Route 
                path="/" 
                element={
                  <div>
                    <LandingPage />
                  </div>
                } 
              />
              {/* Add more routes here */}
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
