import { useEffect, useState } from "react";
import { Trip } from './../interfaces/index';

type IsPending = boolean;
type Data = Trip[];
type Err = string | null;
type useFetchReturns = [IsPending, Data, Err];

const useFetch = (url: string): useFetchReturns => {
    const [isPending, setIsPending] = useState<boolean>(false)
    const [data, setData] = useState<Trip[]>([])
    const [err, setErr] = useState<string | null>(null)

    useEffect(() => {
        
        const fetchData = async () => {
            setIsPending(true)
            
            try {
                const response = await fetch(url);
                if(!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`)
                }                
                const json = await response.json();
                setData(json)

            } catch (error) {
                if(error instanceof Error) {
                    setIsPending(false);
                    setData([]);                    
                    setErr(error.message)
                }
            }
            setIsPending(false);

        }
        fetchData();    
    }, [])
    

    return [isPending, data, err];
}
 
export default useFetch;