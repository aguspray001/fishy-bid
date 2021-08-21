import { Button } from "@material-ui/core";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import CardPreview from "../../components/CardPreview";
import Layout from "../../components/Layout";
import { getDataItemsByMarketId } from "../../redux/actions/item";

function DetailLelang() {
  const router = useRouter();
  const [user, setUser] = useState({})
  const { id } = router.query;
  const { data } = useSelector((state) => state.itemReducer);
  const socket = io("http://127.0.0.1:3600/");
  const dispatch = useDispatch();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = jwt_decode(token);
    setUser(user)
  }, [])

  useEffect(() => {
    dispatch(getDataItemsByMarketId(id));
  }, [id]);

  socket.on(`timer`, (r) => {
    console.log(r.countdown + `item`);
  });

  console.log(user);
  return (
    <Layout title="Detail Unit Lelang" desc="detail lelang">
      <p>Pasar : {id}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {data?.data?.map((item) => {
          return (
            <>
              <CardPreview
                src={"http://localhost:3333/src/public/images/" + item.image[0]}
                title={item.price}
                nama={item.name}
                desc={`grade ${item.grade} - ${
                  item.status === 0 ? "ready to bid" : "sold"
                }`}
              />
              <Button
                style={{ backgroundColor: "blue", color: "white" }}
                onClick={() => {socket.emit("bid", { itemId: item._id, userId: user._id })}}
              >
                Reset
              </Button>
            </>
          );
        })}
      </div>
    </Layout>
  );
}

export default DetailLelang;
