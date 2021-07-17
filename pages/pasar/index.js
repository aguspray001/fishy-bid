import { useRouter } from 'next/dist/client/router';
import React from 'react';
import CardPreview from '../../components/CardPreview';
import Layout from '../../components/Layout';
import Pasar1 from '../../public/pasar1.jpg';
import Pasar2 from '../../public/pasar2.jpg';
import Pasar3 from '../../public/pasar3.jpg';


function Lelang() {
    const router = useRouter();
    const arrayPasar = [
        {
            nama : "Kalang Anyar",
            img : Pasar1,
            barangLelang: "Ikan Laut",
            id: 1 
        },
        {
            nama : "Porong",
            img : Pasar2,
            barangLelang: "Ikan Tawar",
            id: 2
        },
        {
            nama : "Sedati",
            img : Pasar3,
            barangLelang: "Ikan Tambak",
            id: 3
        }
    ]
    return (
        <Layout title="FishyBid | Auction Market" desc="detail lelang">
            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', width:'100%', justifyContent:'center'}}>
            {
                arrayPasar?.map((item)=>{
                    return(
                        <CardPreview src={item.img} nama={item.nama} desc={item.barangLelang} onClick={()=>router.push(`pasar/${item.nama}`)}/>
                    )
                })
            }
            </div>
        </Layout>
    )
}

export default Lelang;
