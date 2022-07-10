import { useEffect,useState } from 'react'
function useCustomHook(customtitle) {
    return (
        useEffect(() => {
            document.title = customtitle
            
        }, [customtitle])
    )
}

export  {useCustomHook}

export function useToggle(initState=true){
    const [flip, setflip] = useState(initState )
    return flip
}
