import { Children } from "react"

function Error({children}) {
  return (
    <div className="bg-red-800 text-white uppercase p-3 mb-3 rounded-lg text-center">
    {children}</div>
  )
}

export default Error