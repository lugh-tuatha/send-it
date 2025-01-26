import { useQuery } from "@tanstack/react-query"

import { getRandomGif } from "../services/giphy"

export const useGiphy = () => 
    useQuery({ 
        queryKey: ['random-gif'], 
        queryFn: getRandomGif,
        enabled: false, 
        staleTime: Infinity 
    })