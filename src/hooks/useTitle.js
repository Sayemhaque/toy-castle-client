import { useEffect } from "react"

const useTitle = (title) => {
  useEffect(() => {
      document.title = `Toy Castle | ${title}`
  } ,[title])
}

export default useTitle;