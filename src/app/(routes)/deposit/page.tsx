import Header from "./_components/header";
import BackButton from "@/components/back-button";
import Visitor from "@/components/visitor";
const DepositPage = () => {
  return (
    <div>
      <h2>Deposit Page</h2>
      <Visitor path="/deposit" />
      <Header>
        <h2>Test</h2>
        <BackButton></BackButton>
      </Header>
    </div>
  );
};

export default DepositPage;
