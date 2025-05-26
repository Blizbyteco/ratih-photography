import React from 'react'

export default function LabeledText({title, content, icon}) {
  return (
    <div className='flex items-start gap-x-2'>
        <p className='font-semibold flex items-center'>{icon ? icon : title[0].toUpperCase()}:</p>
        <p className='text-gray-300'>{content}</p>
    </div>
  )
}
