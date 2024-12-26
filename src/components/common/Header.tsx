import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/store/authStore'
import { Gauge, Menu, Search, UserCircle } from 'lucide-react'
import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../ui/input'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'

export const Header: FC = () => {
    const { isAuthenticated, logout } = useAuthStore()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isSearchVisible, setIsSearchVisible] = useState(false)

    const handleLogout = () => {
        if (isAuthenticated) {
            logout()
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`bg-white fixed w-full top-0 z-50 transition-all duration-300 
        ${isScrolled ? 'shadow-lg' : 'border-b'}`}>
            <div className="max-w-[1920px] mx-auto px-4">
                <div className="h-16 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link to="/auth" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <Gauge className="h-6 w-6 text-blue-600" />
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                                KBO 커뮤니티
                            </span>
                        </Link>

                        <nav className="hidden md:flex items-center gap-6">
                            <Link to="/news" className="text-gray-600 hover:text-blue-600 transition-colors">뉴스</Link>
                            <Link to="/community" className="text-gray-600 hover:text-blue-600 transition-colors">커뮤니티</Link>
                            <Link to="/teams" className="text-gray-600 hover:text-blue-600 transition-colors">팀</Link>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className={`transition-all duration-300 ${isSearchVisible ? 'w-64' : 'w-0'} overflow-hidden`}>
                            <Input
                                type="search"
                                placeholder="검색어를 입력하세요..."
                                className="w-full"
                            />
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsSearchVisible(!isSearchVisible)}
                            className="text-gray-600 hover:text-blue-600"
                        >
                            <Search className="h-5 w-5" />
                        </Button>

                        {isAuthenticated ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="hover:bg-blue-50">
                                        <UserCircle className="h-6 w-6 text-blue-600" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-48">
                                    <DropdownMenuItem>
                                        <Link to="/auth/profile" className="w-full">프로필</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link to="/settings" className="w-full">설정</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-red-600" onClick={handleLogout}>
                                        로그아웃
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Link to="/auth/login">
                                <Button
                                    variant="default"
                                    className="bg-blue-600 hover:bg-blue-700 transition-colors"
                                >
                                    로그인
                                </Button>
                            </Link>
                        )}

                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden text-gray-600"
                        >
                            <Menu className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}