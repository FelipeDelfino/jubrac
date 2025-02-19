import "../styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from "next/app";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: ['400', '500', '700','900'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  )
}
