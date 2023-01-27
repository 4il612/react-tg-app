import Button from "../Button/Button";
declare const window: any;
const Header = (props: any) => {
  const tg = window.Telegram.WebApp;
  const onClose = () => {
    tg.close();
  };
  return (
    <div className={"header"}>
      <Button onClick={onClose}>CLOSE</Button>
      <span className={"username"}>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
};

export default Header;
