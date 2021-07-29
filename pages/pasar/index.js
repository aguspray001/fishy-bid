import { Button } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardPreview from '../../components/CardPreview';
import Layout from '../../components/Layout';
import Pasar1 from '../../public/pasar1.jpg';
import Pasar2 from '../../public/pasar2.jpg';
import Pasar3 from '../../public/pasar3.jpg';
import { getDataMarket } from '../../redux/actions/market';
import { BaseUrl } from '../../utils/utils';
import {io} from 'socket.io-client'


function Lelang() {
    const router = useRouter();
    const dispatch = useDispatch();
    const {data} = useSelector((state)=>state.marketReducer)
    const [timer, setTimer] = useState([]);

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
    const socket = io('http://localhost:3333');

    useEffect(() => {
        dispatch(getDataMarket())
    }, [])

    socket.on("timer1", (r)=>{
        setTimer(r.countdown)
    })
    return (
        <Layout title="FishyBid | Auction Market" desc="detail lelang">
            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', width:'100%', justifyContent:'center'}}>
            {
                (data.data||[])?.map((item)=>{
                    return(
                        <CardPreview src={"http://localhost:3333/"+item.image} nama={item.name} desc={item.location} onClick={()=>router.push(`pasar/${item._id}`)}/>
                    )
                })
            }
            </div>
            <Button style={{backgroundColor:'blue', color:'white'}} onClick={()=>{socket.emit('reset')}}>Reset Button {timer}</Button>
        </Layout>
    )
}

export default Lelang;
