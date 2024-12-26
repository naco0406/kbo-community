import { LoginPage } from '@/pages/auth/login'
import ProfilePage from '@/pages/profile'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthGuard } from './guards/AuthGuard'

const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
                path="/profile"
                element={
                    <AuthGuard>
                        <ProfilePage />
                    </AuthGuard>
                }
            />
            <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
    )
}

export default AuthRouter