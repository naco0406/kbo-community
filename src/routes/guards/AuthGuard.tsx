import { useAuthStore } from '@/store/authStore'
import { Navigate } from 'react-router-dom'

interface AuthGuardProps {
    children: React.ReactNode
    redirectTo?: string
}

export const AuthGuard = ({
    children,
    redirectTo = '/auth'
}: AuthGuardProps) => {
    const isAuthenticated = useAuthStore(state => state.isAuthenticated)
    return isAuthenticated ? children : <Navigate to={redirectTo} />
}