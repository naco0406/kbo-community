import { Card } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'
import { FC, PropsWithChildren } from 'react'

interface Props {
    icon?: LucideIcon
    title: string
}

export const ContentCard: FC<PropsWithChildren<Props>> = ({ icon: Icon, title, children }) => {
    return (
        <Card className="p-4">
            <div className="flex items-center gap-2 mb-4">
                {Icon && <Icon className="h-5 w-5" />}
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
            {children}
        </Card>
    )
}