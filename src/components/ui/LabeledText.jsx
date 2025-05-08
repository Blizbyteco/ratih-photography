import React from 'react'

export default function LabeledText({title, content}) {
  return (
    <div className='flex gap-x-2'>
        <p className='font-semibold'>{title[0].toUpperCase()}:</p>
        <p className='text-gray-300'>{content}</p>
    </div>
  )
}
