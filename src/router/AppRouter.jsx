import { Navigate, Route, Routes } from 'react-router-dom'
import { DcPage, MarvelPage } from '../heroes'
import { LoginPages } from '../auth'
import { Navbar } from '../ui'

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />
                <Route path="login" element={<LoginPages />} />
                
                <Route path="/" element={<Navigate to="/marvel" />} />
            </Routes>
        </>
    )
}
