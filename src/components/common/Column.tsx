import { FC, PropsWithChildren } from 'react'

export const Column: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return <div className="w-full min-w-[340px] space-y-6">{children}</div>
}