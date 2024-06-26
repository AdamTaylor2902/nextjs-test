import BackButton from "@/components/back-button";
import Visitor from "@/components/visitor";

const RegisterPage = () => {
  return (
    <div>
      <h2>Register Page</h2>
      <Visitor path="/register" />
      <BackButton></BackButton>
    </div>
  );
};

export default RegisterPage;
