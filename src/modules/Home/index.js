import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Modal from "../Global/Modal";

import Wallet from "../../utils/blockchain/wallet";

export default function Index() {
  const [showWallet, setShowWallet] = useState(false);
  const [showModal, setShowModal] = useState({
    passcodeModal: false,
    restoreModal: false,
  });
  const [passcode, setPasscode] = useState("");

  const openModal = (modalName) => {
    if (modalName === "passcodeModal") {
      setShowModal({ passcodeModal: true, restoreModal: false });
    } else if (modalName === "restoreModal") {
      setShowModal({ passcodeModal: false, restoreModal: true });
    } else {
      setShowModal({ passcodeModal: false, restoreModal: false });
    }
  };

  const handlePasscodeChange = (e) => {
    setPasscode(e.target.value);
    if (e.target.value.length === 6) {
      setShowWallet(true);
    } else {
      setShowWallet(false);
    }
  };

  const handleWalletCreate = async (e) => {
    const w = new Wallet({ passcode });
    w.create();
    setPasscode("");
  };

  const handleSubmit = () => {
    console.log("SUBMIT");
  };

  return (
    <div>
      <Header />
      <Modal
        title="Restore your wallet"
        showModal={showModal.restoreModal}
        handleModal={openModal}
        handleSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col">
            <p>
              Please enter your 12 to 24 words mnemonic to restore your wallet.
            </p>
            <textarea
              type="text"
              style={{ width: "100%", borderColor: "gray", height: 84 }}
              name="mnemonic"
              defaultValue={""}
            />
          </div>
        </div>
      </Modal>
      <Modal
        title="Setup your passcode"
        showModal={showModal.passcodeModal}
        handleModal={openModal}
      >
        <div className="row mb-5">
          <div className="col">
            <p>Choose a 6-digit passcode.</p>
            <input
              onChange={handlePasscodeChange}
              type="password"
              pattern="[0-9]*"
              inputMode="numeric"
              className="form-control verify-input passcode"
              placeholder="------"
              maxLength={6}
              autoComplete="false"
              value={passcode || ""}
            />
            <div className="text-center">
              <small className="text-danger message"></small>
            </div>
          </div>
        </div>
        {showWallet && (
          <div>
            <button
              onClick={handleWalletCreate}
              id="btnNewWallet"
              type="button"
              className="btn btn-block btn-linkedin mb-2"
            >
              <ion-icon
                name="add-circle-outline"
                className="md hydrated"
                aria-label="Create New Wallet"
              />
              Create New Wallet
            </button>
            <button
              onClick={() => openModal("restoreModal")}
              id="btnRestoreWallet"
              type="button"
              className="btn btn-block btn-bitcoin"
            >
              <ion-icon
                name="wallet-outline"
                className="md hydrated"
                aria-label="Restore Existing Wallet"
              />
              Restore Existing Wallet
            </button>
          </div>
        )}
      </Modal>
      <div id="appCapsule">
        <div id="cmpCreateWallet">
          <div className="header-large-title">
            <h1 className="title">Digital Wallet</h1>
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
                      onClick={() => openModal("passcodeModal")}
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
