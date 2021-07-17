import { useRouter } from 'next/dist/client/router';
import React from 'react'
import CardPreview from '../../components/CardPreview';
import Layout from '../../components/Layout';
import Ikan1 from '../../public/ikan1.jpg'
import Ikan2 from '../../public/ikan2.jpg'
import Ikan3 from '../../public/ikan3.jpg'


function DetailLelang() {
    const router = useRouter();
    const {id} = router.query;

    return (
        <Layout title="Detail Unit Lelang" desc="detail lelang">
            <p>Pasar : {id}</p>
            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', width:'100%', justifyContent:'center'}}>
                <CardPreview src={Ikan1} title="Ikan Kembung1" nama="Ikan Kembung" desc="dakwjeaufouaeybfuawedbaweidbawouefyvweaoufyveawdhbaweuifweapb"/>
                <CardPreview src={Ikan2} title="Ikan Kembung2" nama="Ikan Kembung" desc="dakwjeaufouaeybfuawedbaweidbawouefyvweaoufyveawdhbaweuifweapb"/>
                <CardPreview src={Ikan3} title="Ikan Kembung3" nama="Ikan Kembung" desc="dakwjeaufouaeybfuawedbaweidbawouefyvweaoufyveawdhbaweuifweapb"/>
                <CardPreview src={Ikan3} title="Ikan Kembung4" nama="Ikan Kembung" desc="dakwjeaufouaeybfuawedbaweidbawouefyvweaoufyveawdhbaweuifweapb"/>
                <CardPreview src={Ikan2} title="Ikan Kembung1" nama="Ikan Kembung" desc="dakwjeaufouaeybfuawedbaweidbawouefyvweaoufyveawdhbaweuifweapb"/>
                <CardPreview src={Ikan1} title="Ikan Kembung2" nama="Ikan Kembung" desc="dakwjeaufouaeybfuawedbaweidbawouefyvweaoufyveawdhbaweuifweapb"/>
                <CardPreview src={Ikan2} title="Ikan Kembung3" nama="Ikan Kembung" desc="dakwjeaufouaeybfuawedbaweidbawouefyvweaoufyveawdhbaweuifweapb"/>
                <CardPreview src={Ikan3} title="Ikan Kembung4" nama="Ikan Kembung" desc="dakwjeaufouaeybfuawedbaweidbawouefyvweaoufyveawdhbaweuifweapb"/>
            </div>
        </Layout>
    )
}

export default DetailLelang;
