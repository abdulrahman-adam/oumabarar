import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const Loading = () => {
  const { navigate, setCartItems } = useAppContext();
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  const nextUrl = query.get('next');

  useEffect(() => {
    if (nextUrl) {
      setTimeout(() => {
        setCartItems({})
        navigate(`/${nextUrl}`)
      }, 3000)
    }
  }, [nextUrl])

  return (
    <div className="flex min-h-[400px] w-full flex-col items-center justify-center bg-transparent px-4 py-16 text-center animate-fade-in">
      
      {/* 🔮 High-End Orbital Spinner */}
      <div className="relative flex items-center justify-center">
        {/* Outer Glowing Ring */}
        <div className="absolute h-20 w-20 rounded-full border-4 border-indigo-500/10 blur-sm"></div>
        
        {/* Track Ring */}
        <div className="h-20 w-20 rounded-full border-4 border-slate-100 dark:border-slate-800/40"></div>
        
        {/* Active Animated Ring */}
        <div className="absolute top-0 left-0 h-20 w-20 animate-spin rounded-full border-4 border-transparent border-t-indigo-600 border-r-indigo-400 [animation-duration:0.8s]"></div>
        
        {/* Inner Pulsing Core */}
        <div className="absolute h-4 w-4 animate-ping rounded-full bg-indigo-500/60 opacity-75 [animation-duration:1.5s]"></div>
      </div>

      {/* 📝 Typography Content */}
      <div className="mt-8 space-y-2 max-w-xs">
        <h3 className="animate-pulse bg-gradient-to-r from-slate-800 to-slate-500 bg-clip-text text-base font-semibold tracking-wide text-transparent uppercase dark:from-slate-200 dark:to-slate-400">
          Chargement en cours
        </h3>
        
        <p className="text-sm font-medium tracking-normal text-slate-400 dark:text-slate-500">
          Veuillez patienter un instant
        </p>
      </div>

    </div>
  )
}

export default Loading;