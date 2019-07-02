import { useEffect } from 'react';
export default function useMounted(func) {
    useEffect(func, []);
}