import BackButton from "@/components/back-button";
import Visitor from "@/components/visitor";
const Login = () => {
  return (
    <div>
      Login Page
      <Visitor path="/login" />
      <BackButton></BackButton>
    </div>
  );
};

export default Login;
