import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
function MyApp({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps} />
  <header className ={`bg-gray-50 
    fixed top-0 w-full
    flex `} >
    <Link href = "/">
      <a className="text-2xl p-4 rounded-2xl hover:bg-gray-100" >Device </a>
    </Link>
    <Link href = "category">
      <a className="text-2xl p-4 rounded-2xl hover:bg-gray-100" >Category </a>
    </Link>
   
   

  </header>
  </>  
    
    )
}

export default MyApp
