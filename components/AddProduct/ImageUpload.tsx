'use client'
import React, { useState, useEffect } from 'react'
import { CldUploadWidget } from 'next-cloudinary'
import { Button } from '../ui/button'
import { GrClose } from 'react-icons/gr'

type Props = {
  info: any,
  updateInfo: React.Dispatch<React.SetStateAction<any>>
  imageUrls: string[]
  setImageUrls: React.Dispatch<React.SetStateAction<string[]>>
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ImageUpload: React.FC<Props> = ({ info, updateInfo, imageUrls, setImageUrls, handleImageChange }) => {

  const onUploadSuccess = (result: any) => {
    updateInfo(result.info.secure_url)
    setImageUrls(prev => [...prev, result.info.secure_url])
    handleImageChange(result)
  }

  const handleDeleteImage = (index: number) => {
    
    setImageUrls(prev => {
      prev.splice(index, 1)
      return [...prev]
    })
  }


  return (
    <div>
      <CldUploadWidget uploadPreset='emd3ucx9'
        onUpload={onUploadSuccess}
      >
        {({ open }) => {
          const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault()
            open()
          }
          return (
            <Button onClick={handleClick} >
              Upload Image
            </Button>
          );
        }}
      </CldUploadWidget>

      <div className='grid'>
        {
          imageUrls.map((imageUrl, index:number) => (
            <div key={index} className='relative'>
              <img src={imageUrl} alt='asdasd' className='w-48 h-48' />
              <GrClose width={10} onClick={()=>handleDeleteImage(index)} />
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default ImageUpload