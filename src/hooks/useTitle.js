import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Disney World`;
    } ,[title])
}

export default useTitle;