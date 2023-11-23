import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/mainPage/mainPage"
import MoviePage from "./pages/moviePage/moviePage"
import SeriesPage from "./pages/serialPage/seriesPage"
import RegistrationPage from "./pages/registrationPage/registrationPage"
import SubscriptionPage from "./pages/subscriptionPage/subscriptionPage"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/movie/:id" element={<MoviePage />} />
                <Route path="/series/:id" element={<SeriesPage />} />
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="/subscription" element={<SubscriptionPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
