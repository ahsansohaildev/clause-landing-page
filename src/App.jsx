import { lazy, Suspense, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const HomePage = lazy(() =>
  import("@/pages/HomePage").then((module) => ({
    default: module.HomePage,
  }))
)

const CaseStudy = lazy(() =>
  import("@/pages/CaseStudy").then((module) => ({
    default: module.CaseStudy,
  }))
)

function PageLoader() {
  return <div className="min-h-screen bg-[#F7F8F3]" />
}

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        element?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 80)
      return
    }

    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <>
      <ScrollManager />
      <Header />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study" element={<CaseStudy />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  )
}

export default App