import { Search } from 'lucide-react'
import { FC } from 'react'
import { Input } from '../ui/input'

interface SearchBarProps {
  placeholder: string
  onChange: (value: string) => void
}

export const SearchBar: FC<SearchBarProps> = ({ placeholder, onChange }) => (
  <div className="relative w-full max-w-lg">
    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
    <Input
      className="pl-10"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
)
