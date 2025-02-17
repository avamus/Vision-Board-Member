import { useState, useRef } from "react"
import { useDrag, useDrop } from "react-dnd"
import { Edit2, Trash2, Move } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { GalleryImage } from "./image-gallery"

interface ImageDisplayProps {
  image: GalleryImage
  onUpdate: (image: GalleryImage) => void
  onDelete: (imageId: string) => void
  onReorder: (dragIndex: number, hoverIndex: number) => void
  index: number
}

export function ImageDisplay({ image, onUpdate, onDelete, onReorder, index }: ImageDisplayProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [caption, setCaption] = useState(image.caption)

  const ref = useRef<HTMLDivElement>(null)

  const [{ isDragging }, drag] = useDrag({
    type: "IMAGE",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [, drop] = useDrop({
    accept: "IMAGE",
    hover(item: { index: number }, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      onReorder(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })

  drag(drop(ref))

  const handleSave = () => {
    onUpdate({ ...image, caption })
    setIsEditing(false)
  }

  return (
    <div
      ref={ref}
      className={`relative group rounded-xl overflow-hidden shadow-md transition-opacity duration-200 ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <img src={image.url || "/placeholder.svg"} alt={image.altText} className="w-full h-48 object-cover" />
      {!isEditing && (
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsEditing(true)}
            className="text-white hover:text-primary"
          >
            <Edit2 className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(image.id)}
            className="text-white hover:text-primary ml-2"
          >
            <Trash2 className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-primary ml-2 cursor-move">
            <Move className="h-6 w-6" />
          </Button>
        </div>
      )}
      {isEditing ? (
        <div className="p-2 space-y-2">
          <Input value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Add a caption..." />
          <Button onClick={handleSave}>Save</Button>
        </div>
      ) : (
        <p className="p-2 text-sm">{image.caption}</p>
      )}
    </div>
  )
}
