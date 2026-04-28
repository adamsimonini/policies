import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'

function Nav() {
  const { pathname } = useLocation()
  return (
    <nav style={styles.nav}>
      <Link to="/privacy-policy" style={{ ...styles.link, ...(pathname === '/privacy-policy' ? styles.active : {}) }}>
        Privacy Policy
      </Link>
      <Link to="/terms-and-conditions" style={{ ...styles.link, ...(pathname === '/terms-and-conditions' ? styles.active : {}) }}>
        Terms &amp; Conditions
      </Link>
    </nav>
  )
}

export default function App() {
  return (
    <HashRouter>
      <div style={styles.container}>
        <Nav />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<PrivacyPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

const styles = {
  container: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    maxWidth: 800,
    margin: '0 auto',
    padding: '1em',
  },
  nav: {
    display: 'flex',
    gap: '1.5em',
    borderBottom: '1px solid #ddd',
    paddingBottom: '0.75em',
    marginBottom: '1.5em',
  },
  link: {
    textDecoration: 'none',
    color: '#555',
    fontWeight: 500,
  },
  active: {
    color: '#000',
    borderBottom: '2px solid #000',
    paddingBottom: '0.75em',
  },
  main: {
    lineHeight: 1.6,
  },
}
