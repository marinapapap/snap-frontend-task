import styles from "../styles/Deck.module.css";

interface LastCardProps {
  lastValue: string;
  lastSuit: string;
  lastImage: string;
}

const NewCard: React.FC<LastCardProps> = ({ lastImage }) => {
  if (lastImage) {
    return (
      <div>
        <img src={lastImage}></img>
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.placeholder}>
          Previous
          <br /> Card
        </div>
      </div>
    );
  }
};

export default NewCard;
