import { useRouter } from "next/router";

import Layout from "@/components/Layout/Layout";
import { Grid, Spacer } from "@nextui-org/react";
import HomeSafeMenu from "@/components/HomeSafe/HomeSafeMenu";
import Transactions from "@/components/HomeSafe/Sections/Transactions/Transactions";
import Setup from "@/components/HomeSafe/Sections/Setup";
import Assets from "@/components/HomeSafe/Sections/Assets";
import { AppContext } from "@/store/AppContext";
import { useContext, useEffect, useState } from "react";
import { Contract } from "ethers";
import { GnosisUntitledAbi } from "@/abi/GnosisUntitled";
import {getSafe} from "@/db/repository";
import {findNetworkById} from "@/components/SafeList/Networks";

export default function SafeDetails() {
  const { currentMenuSection } = useContext(AppContext);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [safeContract, setSafeContract] = useState<Contract>();
  const [txs, setTxs] = useState<GnosisTransaction[]>([]);
  const { query } = useRouter();
  const { connected, signer } = useContext(AppContext);
  const { currentSafe, setCurrentSafe } = useContext(AppContext);


  useEffect(() => {
    if (!connected) {
      setErrorMessage("Blockchain Wallet is not connected");
      return;
    }

    const contractAddress = query["safeId"] as string;

    if (
      contractAddress?.length != 42 ||
      contractAddress.substring(0, 2) != "0x"
    ) {
      setErrorMessage("Incorrect address");
      return;
    }

    (async () => {
      try {
        const tempContract = new Contract(
          contractAddress,
          GnosisUntitledAbi,
          signer
        );

        const txCount = Number(
          (await tempContract.getTransactionCount()) as BigInt
        );
        const tempTxs: GnosisTransaction[] = [];

        for (let i = 0; i < txCount; i++) {
          const tx = await tempContract.getTransaction(i);
          const newTx: GnosisTransaction = {
            //TODO: Get all of these from smart contract!!!
            id: i,
            to: tx[0],
            value: tx[1],
            data: tx[2],
            executed: tx[3],
            numConfirmations: tx[4],
            date: new Date(),
            type: "Value Transfer",
          };
          tempTxs.push(newTx);
        }

        setTxs(tempTxs);

        setSafeContract(tempContract);
        const safeFromDb = await getSafe(contractAddress)
        const {shortName, symbol, factoryContractAddress, name} = findNetworkById(safeFromDb.chainId)
        const {quorum, address, balance, chainId} = safeFromDb
        const countOwners = safeFromDb.signers.length
        const safe = {
          address,
          balance,
          chainId,
          quorum,
          shortName,
          symbol,
          countOwners,
          factoryContractAddress,
          networkName: name
        }
        setCurrentSafe(safe)


      } catch (e) {
        setErrorMessage("Unknown error");
      }
    })();
  }, [query, connected, signer]);


  const sectionsMap: { [key: string]: JSX.Element } = {
    Transactions: <Transactions txs={txs} />,
    Setup: <Setup />,
    Assets: <Assets />,
  };


  return (
    <Layout>
      <Grid.Container
        css={{ mt: "40px" }}
        justify="center"
        alignItems="flex-start"
      >
        <Grid xs={5} md={5} alignItems="center" justify="flex-end">
          <HomeSafeMenu safeContract={safeContract} />
        </Grid>
        <Spacer x={1.85} />
        <Grid xs={5} md={5} direction="column" justify="center">
          {sectionsMap[currentMenuSection.title]}
        </Grid>
      </Grid.Container>
    </Layout>
  );
}
