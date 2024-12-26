import { ContentCard } from '@/components/common/ContentCard'
import { MessageSquare, UserCircle2 } from 'lucide-react'
import { FC } from 'react'

export const CommunityActivity: FC = () => {
  return (
    <ContentCard icon={MessageSquare} title="커뮤니티 활동">
      <div className="space-y-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-2 p-2 hover:bg-slate-50 rounded">
            <UserCircle2 className="h-4 w-4" />
            <span className="text-sm">활동 내용</span>
            <span className="ml-auto text-xs text-muted-foreground">시간</span>
          </div>
        ))}
      </div>
    </ContentCard>
  )
}