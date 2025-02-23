import { useQuery } from "@tanstack/react-query"

import { getRandomUselessFact } from "../services/useless-fact"

export const useRandomUselessFact = () => 
    useQuery({ 
        queryKey: ['useless-fact'], 
        queryFn: getRandomUselessFact,
        staleTime: Infinity,
    })
