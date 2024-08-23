'use server'

const LLAMA_API_URL = 'https://api.llama-api.com/chat/completions'

export const getLlamaCompletion = async () => {
  console.log('getLlamaCompletion')

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.LLAMA_API_TOKEN}`,
    'Access-Control-Allow-Origin': '*',
  }

  try {
    const response = await fetch(LLAMA_API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        messages: [{ role: 'user', content: 'How are you?' }],
      }),
    })

    const data = await response.json()
    console.log(data)
    // console.log(data.choices[0].message.content)

    return data
  } catch (e) {
    console.log(e)
    throw e
  }
}
