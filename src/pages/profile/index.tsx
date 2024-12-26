import { useAuthStore } from "@/store/authStore"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserCircle, Settings, Mail, Phone, MapPin, Calendar, BookOpen, MessageSquare, Heart, ArrowLeft } from "lucide-react"

const ProfilePage = () => {
  const { isAuthenticated, logout } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    if (isAuthenticated) {
      logout()
    }
    navigate('/community')
  }

  return (
    <>
      <Link
        to="/"
        className="absolute top-4 left-4 text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>홈으로</span>
      </Link>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto pt-8 space-y-8">
          <div className="relative h-48 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow-lg mx-4">
            <div className="flex items-end gap-6 flex-row h-full justify-start items-center pl-6">
              <div className="relative">
                <div className="h-40 w-40 rounded-full bg-white p-1 shadow-lg">
                  <div className="h-full w-full rounded-full bg-gray-100 flex items-center justify-center">
                    <UserCircle className="h-24 w-24 text-gray-400" />
                  </div>
                </div>
                <Button
                  size="icon"
                  className="absolute bottom-2 right-2 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
                >
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-white">
                <h1 className="text-3xl font-bold tracking-tight">사용자 이름</h1>
                <p className="text-blue-100 font-medium">@username</p>
              </div>
            </div>
          </div>

          <div className="mt-24 px-4">
            <Tabs defaultValue="profile" className="space-y-8">
              <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-slate-100 p-1">
                <TabsTrigger value="profile" className="rounded-sm px-6">프로필</TabsTrigger>
                <TabsTrigger value="posts" className="rounded-sm px-6">게시글</TabsTrigger>
                <TabsTrigger value="comments" className="rounded-sm px-6">댓글</TabsTrigger>
                <TabsTrigger value="likes" className="rounded-sm px-6">좋아요</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="bg-white shadow-lg">
                    <CardHeader className="pb-3">
                      <CardTitle>기본 정보</CardTitle>
                      <CardDescription>프로필 기본 정보를 확인하고 수정하세요</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-blue-500" />
                        <span className="text-gray-700">user@example.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-blue-500" />
                        <span className="text-gray-700">010-1234-5678</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-blue-500" />
                        <span className="text-gray-700">서울시 강남구</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-blue-500" />
                        <span className="text-gray-700">2023년 가입</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-lg">
                    <CardHeader className="pb-3">
                      <CardTitle>활동 통계</CardTitle>
                      <CardDescription>커뮤니티 활동 내역을 확인하세요</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <BookOpen className="h-5 w-5 text-blue-500" />
                          <span className="text-gray-700">작성한 글</span>
                        </div>
                        <span className="text-xl font-semibold text-blue-600">42</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <MessageSquare className="h-5 w-5 text-blue-500" />
                          <span className="text-gray-700">작성한 댓글</span>
                        </div>
                        <span className="text-xl font-semibold text-blue-600">128</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Heart className="h-5 w-5 text-blue-500" />
                          <span className="text-gray-700">받은 좋아요</span>
                        </div>
                        <span className="text-xl font-semibold text-blue-600">256</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="posts">
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle>내가 쓴 글</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Posts list component */}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="comments">
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle>내가 쓴 댓글</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Comments list component */}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="likes">
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle>좋아요한 글</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Liked posts list component */}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="px-4 pb-8">
            <Button
              variant="destructive"
              onClick={handleLogout}
              className="shadow-md hover:shadow-lg transition-shadow"
            >
              로그아웃
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage