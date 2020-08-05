import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="footer-unlocked">
        <div className="appBottomMenu">
          <a href="fake_value" className="item">
            <div className="col">
              <ion-icon name="briefcase-outline" />
              <strong>Vault</strong>
            </div>
          </a>
          <a href="transfer.html" className="item">
            <div className="col">
              <ion-icon name="paper-plane-outline" />
              <strong>Transfer</strong>
            </div>
          </a>
          <a href="fake_value" className="item" id="btnScanner">
            <div className="col">
              <div className="action-button large">
                <ion-icon name="qr-code-outline" />
              </div>
            </div>
          </a>
          <a href="fake_value" className="item">
            <div className="col">
              <ion-icon name="receipt-outline" />
              <strong>History</strong>
            </div>
          </a>
          <a href="fake_value" className="item">
            <div className="col">
              <ion-icon name="options-outline" />
              <strong>Settings</strong>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}