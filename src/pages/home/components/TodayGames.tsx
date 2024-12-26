import { ContentCard } from '@/components/common/ContentCard'
import { Card } from '@/components/ui/card'
import { Calendar } from 'lucide-react'
import { FC } from 'react'

export const TodayGames: FC = () => {
  return (
    <ContentCard icon={Calendar} title="오늘의 경기">
      <div className="grid grid-cols-1 gap-4 bg-slate-50 p-4 rounded-lg">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="p-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">2024.03.27 18:30</p>
              <p className="font-semibold">두산 vs 롯데</p>
            </div>
          </Card>
        ))}
      </div>
    </ContentCard>
  )
}