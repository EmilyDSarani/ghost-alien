import { useState } from "react"

export default function PageTwo() {
    const [moreButts, setMoreButts] = useState(0)

  return (
    <div>
        <h1>
            This is Page Two!!
        </h1>
        <button onClick={() => setMoreButts((count) => count + 1)}>
                    butts is {moreButts}
                </button>
    </div>
  )
}
