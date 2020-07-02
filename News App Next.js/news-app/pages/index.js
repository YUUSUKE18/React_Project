import Header from "./layout/Header";

const Index = () => {
  return (
    <>
      <Header />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItem: "center",
        }}
      >
        <h1>Welcome to News App!!</h1>
        <p>You can check English News</p>
      </main>
    </>
  );
};

export default Index;
