import { FC } from 'react'

interface PageHeaderProps {
  title: string
  description: string
}

export const PageHeader: FC<PageHeaderProps> = ({ title, description }) => (
  <div className="space-y-2 pb-8 pt-6 md:space-y-5">
    <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {title}
    </h1>
    <p className="text-lg leading-7 text-gray-500">{description}</p>
  </div>
)