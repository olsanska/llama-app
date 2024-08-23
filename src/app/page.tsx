'use client'

import { getLlamaCompletion } from '@/lib/llama'
import { useState } from 'react'

export default function Home() {
  const [prompt, setPrompt] = useState<string>('')

  const completion = async () => {
    console.log(prompt)
    const completion = await getLlamaCompletion()
    console.log(completion)
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col gap-5'>
        <textarea onChange={(e) => setPrompt(e.target.value)} className='p-5 w-[30-rem] rounded-lg' />

        <button type='button' onClick={completion} className='p-5 bg-pink-300 hover:bg-pink-400 rounded-lg text-white'>
          Send
        </button>
      </div>
    </main>
  )
}
