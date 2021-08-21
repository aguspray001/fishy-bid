import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPreview from "../../components/CardPreview";
import Layout from "../../components/Layout";
import { getDataMarket } from "../../redux/actions/market";

function Lelang() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.marketReducer);

  useEffect(() => {
    dispatch(getDataMarket());
  }, []);

  return (
    <Layout title="FishyBid | Auction Market" desc="detail lelang">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {(data.data || [])?.map((item) => {
          return (
            <>
              <CardPreview
                src={"http://localhost:3333/" + item.image}
                nama={item.name}
                desc={item.location}
                onClick={() => router.push(`pasar/${item._id}`)}
              />
            </>
          );
        })}
      </div>
    </Layout>
  );
}

export default Lelang;