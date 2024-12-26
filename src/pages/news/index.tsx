import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from '@/components/common/PageHeader'
import { SearchBar } from '@/components/common/SearchBar'

const newsData = [
  {
    id: 1,
    title: "새로운 AI 기술 발전",
    description: "인공지능 기술의 최신 발전 동향",
    content: "최근 AI 기술이 급속도로 발전하면서...",
    date: "2024-03-27",
    category: "Technology",
    imageUrl: "/api/placeholder/800/400"
  },
  // ... more news items
]

const NewsPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  console.log(searchQuery);

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="최신 뉴스" 
        description="AI와 기술 분야의 최신 뉴스를 확인하세요"
      />
      
      <div className="mb-8">
        <SearchBar placeholder="뉴스 검색..." onChange={setSearchQuery} />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {newsData.map((news) => (
          <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src={news.imageUrl} 
              alt={news.title} 
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <div className="flex justify-between items-center">
                <span className="text-sm text-blue-600 font-medium">
                  {news.category}
                </span>
                <span className="text-sm text-gray-500">
                  {news.date}
                </span>
              </div>
              <CardTitle className="text-xl">{news.title}</CardTitle>
              <CardDescription>{news.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3 text-gray-600">{news.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default NewsPage
