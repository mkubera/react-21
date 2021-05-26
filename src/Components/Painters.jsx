const painters = ["Salvador Dali", "Pablo Picasso", "Jean Renoir"];

const Painters = ({ isOrdered, inputType }) => {
  let listOfPainters = painters.map((painter, idx) => (
    <li key={idx}>{painter}</li>
  ));

  return isOrdered ? <ol>{listOfPainters}</ol> : <ul>{listOfPainters}</ul>;
};

export default Painters;
