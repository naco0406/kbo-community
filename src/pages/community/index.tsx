import { PageHeader } from "@/components/common/PageHeader"
import { SearchBar } from "@/components/common/SearchBar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Heart, Eye } from 'lucide-react'
import { useState } from "react"

const postsData = [
  {
    id: 1,
    title: "React 18의 새로운 기능들",
    author: {
      name: "김개발",
      avatar: "/api/placeholder/40/40"
    },
    content: "React 18에서 추가된 새로운 기능들을 정리해보았습니다...",
    date: "2024-03-27",
    likes: 42,
    comments: 15,
    views: 230,
    tags: ["React", "Frontend", "JavaScript"]
  },
  // ... more posts
]

const CommunityPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  console.log(searchQuery);

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="커뮤니티" 
        description="개발자들과 지식을 공유하고 토론하세요"
      />
      
      <div className="flex justify-between items-center mb-8">
        <SearchBar placeholder="게시글 검색..." onChange={setSearchQuery} />
        <Button>글쓰기</Button>
      </div>

      <div className="space-y-6">
        {postsData.map((post) => (
          <Card key={post.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>{post.author.name}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3 text-gray-600">{post.content}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between text-gray-500">
              <div className="flex space-x-6">
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>{post.comments}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>{post.views}</span>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CommunityPage