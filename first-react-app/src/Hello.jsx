function Hello() {
  let name = "Ronit";
  let fullname = () => {
    return "ronit bhupatbhai korat";
  };
  let number = 56;

  return <h1>
      Messeage {number} : my self {fullname()}
    </h1>
} 
export default Hello;
