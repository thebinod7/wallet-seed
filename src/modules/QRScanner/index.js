import React, { useEffect, useState } from "react";
import { useQRCode } from "react-qrcodes";
import store from "store";

import web3 from "../../utils/blockchain/web3";

export default function Index() {
  const [walletInfo, setWalletInfo] = useState({});
  const [balance, setBalance] = useState(0);

  const getWalletInfo = () => {
    const wallet = store.get("wallet");
    let address = null;
    if (wallet) address = `0x${wallet[0].address}`;
    return { wallet, address };
  };

  const refreshBalance = () => {
    const { wallet } = getWalletInfo();
    console.log("=========>", web3);
    const balance = 500;
    if (wallet) {
      // let balance = await web3.eth.getBalance(address);
      // console.log("BALANCE:", balance);
      // balance = web3.utils.fromWei(balance, "ether");
      return balance;
    }
  };

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await refreshBalance();
      setBalance(response);
    }
    fetchMyAPI();
  }, []);

  useEffect(() => {
    let d = getWalletInfo();
    if (d) {
      setWalletInfo(d);
    }
  }, []);

  const [inputRef] = useQRCode({
    text: `${walletInfo ? walletInfo.address : "No address linked."}`,
    options: {
      level: "M",
      margin: 7,
      scale: 1,
      width: 300,
      color: {
        dark: "#010599FF",
        light: "#FFBF60FF",
      },
    },
  });

  return (
    <div>
      <div>
        <div className="pl-4 pt-3 pr-4 text-center">
          <canvas ref={inputRef} />
        </div>
        <div className="card-body text-center" style={{ marginTop: "-25px" }}>
          <h5 className="card-text infoAddress text-bold">
            {walletInfo.address}
          </h5>
          <small style={{ fontSize: 10 }}>
            Scan the QR Code or use the address to receive tokens to your
            account.
          </small>
        </div>
        <div className="card-footer">
          <div className="row">
            <div className="col">
              <small>
                <span className="infoNetwork" style={{ fontStyle: "italic" }} />
              </small>
            </div>
            <div className="col">
              <h3 className="card-text text-right">
                Balance: ${balance} <span className="infoBalance" />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
