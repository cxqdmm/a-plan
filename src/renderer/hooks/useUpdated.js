import { useEffect } from 'react';
let ind = 0;
export default function useUpdated(func) {
    ind++;
    useEffect(func, [ind]);
}