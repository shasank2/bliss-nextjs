import React from 'react'

type Props = {
    info:any,
    updateInfo: React.Dispatch<React.SetStateAction<any>>
    imageUrls:string[]
    setImageUrls: React.Dispatch<React.SetStateAction<string[]>>
    handleImageChange: (e:React.ChangeEvent<HTMLInputElement>)=>void
}

const ImageUpload:React.FC<Props> = ({info, updateInfo,imageUrls, setImageUrls, handleImageChange}) => {
  return (
    <div>ImageUpload</div>
  )
}

export default ImageUpload