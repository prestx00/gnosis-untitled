import { Card, Spacer, Row, Col, Button, Grid, Text } from "@nextui-org/react";
import { SafeElement } from "@/components";
import safes from "@/mocks/safes";
import ButtonsMenu from "./ButtonsMenu";
import AssetsCounter from "./AssetsCounter";
import NewTransactionButton from "./NewTransactionButton";
import { useContext, useEffect, useState } from "react";
import { Contract, formatEther, toBigInt } from "ethers";
import { AppContext } from "@/store/AppContext";
import ModalNewTransaction from "./SendTransaction/ModalNewTransaction";
import LinkAndCopy from "../Common/LinkAndCopy";

export default function HomeSafeMenu({
  safeContract,
}: {
  safeContract: Contract;
}) {
  const { provider } = useContext(AppContext);
  const [isVisible, setVisible] = useState(false);
  const [address, setAddress] = useState<string>();
  const [balance, setBalance] = useState<number>(0);
  const Buttons = [
    {
      id: 1,
      title: "Transactions",
      icon: "/Transactions.svg",
    },
    { id: 2, title: "Assets", icon: "/Assets.svg" },
    {
      id: 3,
      title: "Setup",
      icon: "/AddressBook.svg",
    },
  ];

  const handleClickModalTransaction = () => {
    setVisible(true);
  };

  const handleCloseModalNewTransaction = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (safeContract == null) {
      return;
    }
    (async () => {
      const tempAddress = await safeContract.getAddress();
      const safeBalance = await provider.getBalance(tempAddress);

      setBalance(safeBalance);
      setAddress(tempAddress);
    })();
  }, [safeContract]);

  return (
    <Card
      variant="bordered"
      css={{ h: "499px", mw: "421px", borderRadius: "39px" }}
    >
      <Card.Header>
        <Col>
          <SafeElement // { quorum, countOwners, address, balance, chainId }
            key={address}
            balance={balance}
            chainId={safes[0].chainId}
            address={address ?? "UNKNOWN"}
            countOwners={safes[0].countOwners}
            quorum={safes[0].quorum}

          />
          <Spacer y={0.5} />
          <Row align="center" justify="space-between">
            <AssetsCounter />
            <LinkAndCopy address={address} />
          </Row>
          <Spacer y={2} />
          <Row align="center" justify="center">
            <NewTransactionButton
              visible={isVisible}
              handler={handleClickModalTransaction}
            />
          </Row>
        </Col>
      </Card.Header>
      <Spacer y={0.5} />
      <Card.Divider />
      <Card.Body css={{ justifyContent: "center" }}>
        <Grid.Container gap={2} justify="center" alignItems="center">
          {...Buttons.map((button) => (
            <Grid key={button.id} direction="column" alignItems="center">
              <ButtonsMenu
                key={button.id}
                title={button.title}
                icon={button.icon}
              />
            </Grid>
          ))}
        </Grid.Container>
      </Card.Body>
      <ModalNewTransaction
        visible={isVisible}
        closeHandler={handleCloseModalNewTransaction}
      />
    </Card>
  );
}
