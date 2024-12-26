import { useAuthStore } from "@/store/authStore"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Gauge } from "lucide-react"
import { Link } from "react-router-dom"

export const LoginPage = () => {
    const { isAuthenticated, login, logout } = useAuthStore()
    const navigate = useNavigate()

    const handleAuth = () => {
        if (isAuthenticated) {
            logout()
        } else {
            login()
            navigate('/')
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col">
            <Link
                to="/"
                className="absolute top-4 left-4 text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"
            >
                <ArrowLeft className="h-4 w-4" />
                <span>홈으로</span>
            </Link>

            <div className="flex-1 flex items-center justify-center px-4">
                <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-lg">
                    <div className="text-center space-y-2">
                        <div className="flex justify-center">
                            <Gauge className="h-12 w-12 text-blue-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">KBO 커뮤니티</h1>
                        <p className="text-gray-500">커뮤니티에 오신 것을 환영합니다</p>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                type="email"
                                placeholder="이메일"
                                className="w-full"
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                type="password"
                                placeholder="비밀번호"
                                className="w-full"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                                <span className="text-sm text-gray-600">로그인 상태 유지</span>
                            </label>
                            <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
                                비밀번호 찾기
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Button
                            onClick={handleAuth}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 h-11"
                        >
                            {isAuthenticated ? '로그아웃' : '로그인'}
                        </Button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">또는</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" className="w-full">
                                <img src="/google.svg" alt="Google" className="h-5 w-5 mr-2" />
                                Google
                            </Button>
                            <Button variant="outline" className="w-full">
                                <img src="/kakao.svg" alt="Kakao" className="h-5 w-5 mr-2" />
                                Kakao
                            </Button>
                        </div>

                        <p className="text-center text-sm text-gray-600">
                            계정이 없으신가요?{' '}
                            <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium">
                                회원가입
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}