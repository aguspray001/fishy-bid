import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import Layout from '../components/Layout'

export default function Home() {
  const router = useRouter()
  
  useEffect(() => {
    if(localStorage.getItem("token") === null){
      router.push("/login")
    }
  }, [])
  
  return (
    <Layout title="Home" desc="Home">
      <h1 style={{textAlign:'center', marginTop:'15%'}}>Welcome to the FishyBid Home Page!</h1>
    </Layout>
  )
}
