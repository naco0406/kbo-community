import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../common/Header'

export const MainLayout: FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50">
      <Header />
      <main className="w-full h-full px-4 pt-16">
        <div className="w-full h-full mx-auto max-w-[1920px]">
          <div className="grid w-full auto-rows-min gap-6 py-6
            grid-cols-[100%]  
            min-[736px]:grid-cols-[repeat(2,1fr)]
            min-[1100px]:grid-cols-[repeat(3,1fr)]">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}