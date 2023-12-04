import React, { useState, useEffect } from 'react'
import ColorPicker from "react-color-picker"
import { GrAdd } from "react-icons/gr"

type Props = {
    setFormData: React.Dispatch<React.SetStateAction<any>>
    Color: string
}

const Color: React.FC<Props> = ({ setFormData, Color }) => {
    const [color, setColor] = useState('#fff')
    const [open, setOpen] = useState<boolean>(false)
    const colorArray: string[] = Color.split(',')
    const [selectedColors, setSelectedColors] = useState<string[]>(colorArray)

    if (colorArray.length < 0) {
        setSelectedColors([])
    }

    const handleColorButtonClick = () => {
        setSelectedColors((prevSelectedColors) => [...prevSelectedColors, color])
        setOpen(false)
    }

    useEffect(() => {
        const handleSelectedColors = () => {
            setFormData((prevFormData: FormData) => ({
                ...prevFormData,
                color: selectedColors.join(",")
            }))
        }
        handleSelectedColors()
    }, [selectedColors])

    const handleDeleteColor = (indexToDelete: number) => {
        setSelectedColors((prevSelectedColors) => {
            const updateColors = [...prevSelectedColors];
            updateColors.splice(indexToDelete, 1)
            return updateColors
        })
    }
    return (
        <>
            {/* <div className='flex items-center justify-between mt-3'>
                <button type='button' onClick={() => setOpen(!open)}>Choose Color</button>
            </div>
            {
                open && (<ColorPicker color={color} onChange={(color:any) => setColor(color.hex)} />)
            }
            <button type='button' className='flex items-center space-x-1 border-[1px] rounded-lg p-1 px-3 text-[14px]' onClick={handleColorButtonClick}>
                Add <GrAdd className='ml-1' size={16} />
            </button>

            <div className='mt-5'>
                {selectedColors.map((selectedColor, index) => (
                    <div key={index} className='flex items-center space-x-4 mb-2'>
                        <div style={{ width: '40px', height: '40px', borderRadius: '100%', backgroundColor: selectedColor, display: 'inline-block' }} />
                        <span className='border-[1px] rounded-lg p-1 px-3 text-[14px]'>{selectedColor}</span>
                        <button type='button' className='border-[1px] rounded-lg p-1 px-3 text-[14px]' onClick={()=>handleDeleteColor(index)}>Delete</button>
                    </div>
                ))}
            </div> */}
        </>
    )
}

export default Color