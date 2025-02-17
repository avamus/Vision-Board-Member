import Image from "next/image"

export function ImageUploadSlot() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 justify-center items-center w-full max-w-[1600px] mx-auto px-4">
      <div className="relative aspect-[16/9] w-full lg:w-1/2">
        <Image
          src="https://res.cloudinary.com/drkudvyog/image/upload/v1739820401/bd7f7318-febf-4f90-9e7b-d2786f2dcc37_yiezpb.jpg"
          alt="Vision Image 1"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative aspect-[16/9] w-full lg:w-1/2">
        <Image
          src="https://res.cloudinary.com/drkudvyog/image/upload/v1739820420/hq720_ikuyzh.jpg"
          alt="Vision Image 2"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  )
}

