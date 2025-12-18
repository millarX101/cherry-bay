import { X } from 'lucide-react'
import { useState } from 'react'

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-cherry-500 text-white py-2 px-4 relative">
      <div className="container-wide flex items-center justify-center">
        <p className="text-sm font-medium text-center">
          <span className="hidden sm:inline">
            Free shipping on orders over $100 | Use code{' '}
            <span className="font-bold">CHERRYBAY15</span> for 15% off your first order
          </span>
          <span className="sm:hidden">
            Free shipping over $100 | Code: <span className="font-bold">CHERRYBAY15</span>
          </span>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-cherry-600 rounded transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
