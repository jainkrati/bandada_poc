import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Web3ReactProvider } from "@web3-react/core"
import { BrowserProvider } from "ethers"
import Layout from "../components/layout"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider
      getLibrary={(provider) => new BrowserProvider(provider)}
    >
      <main className={inter.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </Web3ReactProvider>
  )
}
