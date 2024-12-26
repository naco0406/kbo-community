import { Column } from '@/components/common/Column'
import { CommunityActivity } from './components/CommunityActivity'
import { LatestNews } from './components/LatestNews'
import { PopularPosts } from './components/PopularPosts'
import { RealTimeRanking } from './components/RealTimeRanking'
import { TodayGames } from './components/TodayGames'

export const HomePage = () => {
    return (
        <>
            <Column>
                <TodayGames />
                <RealTimeRanking />
            </Column>
            <Column>
                <PopularPosts />
                <LatestNews />
            </Column>
            <Column>
                <CommunityActivity />
            </Column>
        </>
    )
}