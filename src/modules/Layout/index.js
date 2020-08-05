import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default function index() {
  return (
    <div>
      <Header />
      <div id="appCapsule">
        <div id="cmpCreateWallet">
          <div className="header-large-title">
            <h1 className="title">Rumsan Simple Wallet</h1>
            <h4 className="subtitle">Welcome Buddy,</h4>
          </div>
          <div className="section mt-2 mb-5" id="cmpInfo">
            <div className="card mt-5">
              <div className="card-header">
                <h4>
                  Let's setup your wallet. You can either create a new wallet or
                  restore existing wallet. Let's begin.
                </h4>
              </div>
              <div className="card-body text-center">
                <div className="row">
                  <div className="col-md-12 pr-3 pl-3">
                    <button
                      id="btnSetupWallet"
                      type="button"
                      className="btn btn-block btn-linkedin mb-2"
                    >
                      <ion-icon
                        name="wallet-outline"
                        className="md hydrated"
                        aria-label="Create New Wallet"
                      />
                      Setup My Wallet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
