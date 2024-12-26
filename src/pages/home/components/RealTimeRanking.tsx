import { ContentCard } from '@/components/common/ContentCard'
import { Trophy } from 'lucide-react'
import { FC } from 'react'

export const RealTimeRanking: FC = () => {
  return (
    <ContentCard icon={Trophy} title="실시간 순위">
      <div className="space-y-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded">
            <span className="font-bold w-6">{i}</span>
            <span>팀명</span>
            <span className="ml-auto text-muted-foreground">승률</span>
          </div>
        ))}
      </div>
    </ContentCard>
  )
}
