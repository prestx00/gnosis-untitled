import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "./Header";
import { Networks, networks } from "./ElementList/Networks";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [currentAccount, setAccount] = useState("");
  const [visibleDisconnect, setVisibleDisconnect] = useState(false);
  const [visibleConnect, setVisibleConnect] = useState(false);
  const [network, setNetwork] = useState("");

  useEffect(() => {
    const { ethereum } = window;

    const networkName =
      networks[window.ethereum.networkVersion as keyof Networks];
    setNetwork(networkName);

    setAccount(sessionStorage.getItem("login"));

    if (ethereum != null) {
      ethereum.on("accountsChanged", handleConnectMetamaskClick);
      ethereum.on("chainChanged", handleDisconnectMetamaskClick);
      return () => {
        ethereum.removeListener(
          "accountsChanged",
          handleDisconnectMetamaskClick
        );
        ethereum.removeListener("chainChanged", handleDisconnectMetamaskClick);
      };
    }
  }, [visibleDisconnect, visibleConnect]);

  const handleConnectMetamaskClick = async () => {
    const { ethereum } = window;
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const chainId = await ethereum.request({
        method: "eth_chainId",
      });
      if (chainId !== "0x5") {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [
            {
              chainId: process.env.targetChainId,
            },
          ],
        });
      }
      sessionStorage.setItem("login", accounts[0]);
      setAccount(accounts[0]);
      setVisibleConnect(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDisconnectMetamaskClick = async () => {
    sessionStorage.removeItem("login");
    setVisibleDisconnect(false);
  };

  return (
    <>
      <Head>
        <title>Untitled Gnosis</title>
        <meta name="description" content="Untitled Gnosis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        handleDisconnectMetamaskClick={handleDisconnectMetamaskClick}
        handleConnectMetamaskClick={handleConnectMetamaskClick}
        account={currentAccount}
        visibleConnect={visibleConnect}
        setVisibleDisconnect={setVisibleDisconnect}
        setVisibleConnect={setVisibleConnect}
        network={network}
      />
      {children}
    </>
  );
};

export default Layout;
