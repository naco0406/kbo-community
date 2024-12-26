import { MainLayout } from '@/components/layouts/MainLayout'
import CommunityPage from '@/pages/community'
import { HomePage } from '@/pages/home'
import NewsPage from '@/pages/news'
import TeamsPage from '@/pages/teams'
import { FC, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'

const CommunityRouter: FC = () => {
    return (
        <Fragment>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/community" element={<CommunityPage />} />
                    <Route path="/teams" element={<TeamsPage />} />
                </Route>
            </Routes>
        </Fragment>
    )
}

export default CommunityRouter