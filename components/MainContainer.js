import A from "./A";

const MainContainer = ({ children }) => {
  return (
    <>
      <div>
        <A href="/" text="Главная" />
        <A href="/users" text="Пользователи" />
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;