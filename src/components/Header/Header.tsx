import { useTelegram } from "../../hooks/useTelegram";
import Button from "../Button/Button";
const Header = (props: any) => {
  const { user, onClose } = useTelegram();
  return (
    <div className={"header"}>
      <Button onClick={onClose}>CLOSE</Button>
      <span className={"username"}>{user?.username}</span>
    </div>
  );
};

export default Header;
