import React, { useState } from 'react'

type Props = {
    setFormData: React.Dispatch<React.SetStateAction<any>>
}

const Size: React.FC<Props> = ({ setFormData }) => {
    const [selectedSize, setSelectedSize] = useState<string[]>([])
    const sizes = ['sm', 'md', 'lg']

    const handleSizeChange = (size: string) => {
        setSelectedSize((prevSelectedSizes) => {
            if (prevSelectedSizes.includes(size)) {
                return prevSelectedSizes.filter((s) => s !== size)
            } else {
                return [...prevSelectedSizes, size]
            }
        })
    }

    const handleSubmit = () => {
        setFormData((prevFormData: FormData) => ({
            ...prevFormData,
            size: selectedSize.join(',')
        }))
    }
    return (
        <div>
            {
                sizes.map((size, index) => {
                    return (
                        <button key={index}
                            type='button'
                            className={`${selectedSize.includes(size) ? 'bg-blue-500' : 'bg-gray-200'} text-white font-bold py-2 px-4 mx-3 rounded-full `}
                            onClick={() => handleSizeChange(size)}
                        >
                            {size}
                        </button>
                    )
                })
            }
            <button onClick={handleSubmit} type='button' className='bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Submit</button>
        </div>
    )
}

export default Size