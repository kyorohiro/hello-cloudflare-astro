import { useState } from 'react'

export default function Counter() {
  const [n, setN] = useState(0)
  return (
    <button className="rounded bg-blue-600 px-3 py-2 font-medium text-white"
            onClick={() => setN(n + 1)}>
      count: {n}
    </button>
  )
}

