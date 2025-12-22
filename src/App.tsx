import { HashRouter, Route, Routes } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Technology from './pages/Technology'
import Ecosystem from './pages/Ecosystem'
import Team from './pages/Team'
import Business from './pages/Business'
import Insights from './pages/Insights'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const App = () => (
  <HashRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="technology" element={<Technology />} />
        <Route path="ecosystem" element={<Ecosystem />} />
        <Route path="team" element={<Team />} />
        <Route path="business" element={<Business />} />
        <Route path="insights" element={<Insights />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </HashRouter>
)

export default App
