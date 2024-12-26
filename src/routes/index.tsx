import { Navigate, Route, Routes } from 'react-router-dom'
import AuthRouter from './AuthRouter'
import CommunityRouter from './CommunityRouter'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<CommunityRouter />} />
            <Route path="/auth/*" element={<AuthRouter />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes