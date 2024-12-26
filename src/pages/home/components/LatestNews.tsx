import { ContentCard } from "@/components/common/ContentCard"
import { FC } from "react"


export const LatestNews: FC = () => {
  return (
    <ContentCard title="최신 뉴스">
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-1 cursor-pointer">
            <p className="font-medium hover:text-blue-600">뉴스 제목</p>
            <p className="text-sm text-muted-foreground">뉴스 내용 미리보기...</p>
          </div>
        ))}
      </div>
    </ContentCard>
  )
}