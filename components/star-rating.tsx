import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  maxStars?: number
  size?: "sm" | "md" | "lg"
  className?: string
}

export function StarRating({ rating, maxStars = 5, size = "md", className = "" }: StarRatingProps) {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }

  const starSize = sizeClasses[size]

  const renderStar = (index: number) => {
    const starValue = index + 1
    const fillPercentage = Math.min(Math.max(rating - index, 0), 1)

    if (fillPercentage === 0) {
      // Пуста зірочка
      return <Star key={index} className={`${starSize} text-gray-300 ${className}`} fill="none" stroke="currentColor" />
    } else if (fillPercentage === 1) {
      // Повністю заповнена зірочка
      return (
        <Star
          key={index}
          className={`${starSize} text-gold-400 ${className}`}
          fill="currentColor"
          stroke="currentColor"
        />
      )
    } else {
      // Частково заповнена зірочка
      return (
        <div key={index} className="relative inline-block">
          {/* Фонова пуста зірочка */}
          <Star className={`${starSize} text-gray-300 ${className}`} fill="none" stroke="currentColor" />
          {/* Заповнена частина */}
          <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercentage * 100}%` }}>
            <Star className={`${starSize} text-gold-400 ${className}`} fill="currentColor" stroke="currentColor" />
          </div>
        </div>
      )
    }
  }

  return (
    <div className="flex items-center gap-0.5">{Array.from({ length: maxStars }, (_, index) => renderStar(index))}</div>
  )
}
