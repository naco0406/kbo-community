import { TrendingUp } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ContentCard } from '@/components/common/ContentCard'
import { FC } from 'react'

export const PopularPosts: FC = () => {
  return (
    <ContentCard icon={TrendingUp} title="실시간 인기글">
      <ScrollArea className="h-[300px]">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div key={i} className="flex items-center gap-2 p-2 hover:bg-slate-50 rounded cursor-pointer">
            <span className="text-sm text-muted-foreground">제목</span>
            <span className="ml-auto text-xs text-muted-foreground">댓글 수</span>
          </div>
        ))}
      </ScrollArea>
    </ContentCard>
  )
}