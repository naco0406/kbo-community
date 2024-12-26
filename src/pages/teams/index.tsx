import { PageHeader } from "@/components/common/PageHeader"
import { SearchBar } from "@/components/common/SearchBar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, Users } from 'lucide-react'
import { useState } from "react"

const teamsData = [
  {
    id: 1,
    name: "프론트엔드 스터디",
    description: "React, Vue.js 등 프론트엔드 기술 스터디",
    members: 8,
    maxMembers: 10,
    tags: ["React", "Vue", "TypeScript"],
    imageUrl: "/api/placeholder/400/200",
    status: "모집중"
  },
  // ... more teams
]

const TeamsPage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="팀 찾기" 
        description="함께 성장할 팀을 찾아보세요"
      />
      
      <div className="flex justify-between items-center mb-8">
        <SearchBar placeholder="팀 검색..." onChange={setSearchQuery} />
        <Button>팀 만들기</Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamsData.map((team) => (
          <Card key={team.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src={team.imageUrl} 
              alt={team.name} 
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">{team.name}</CardTitle>
                <span className={`px-3 py-1 rounded-full text-sm 
                  ${team.status === "모집중" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-gray-100 text-gray-800"
                  }`}>
                  {team.status}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{team.description}</p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">
                    {team.members}/{team.maxMembers}명
                  </span>
                </div>
                <Button variant="outline" size="sm">
                  <UserPlus className="w-4 h-4 mr-2" />
                  참여하기
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {team.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default TeamsPage