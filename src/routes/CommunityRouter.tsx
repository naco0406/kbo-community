import { MainLayout } from '@/components/layouts/MainLayout'
import { HomePage } from '@/pages/home'
import { FC, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'

const CommunityRouter: FC = () => {
    return (
        <Fragment>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
            </Routes>
        </Fragment>
    )
}

export default CommunityRouter