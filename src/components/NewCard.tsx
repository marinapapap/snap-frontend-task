interface NewCardProps {
  value: string;
  suit: string;
  image: string;
}

const NewCard: React.FC<NewCardProps> = ({ image }) => {
  if (image) {
    return (
      <div>
        <img data-testid="new-card" src={image}></img>
      </div>
    );
  } else
    return (
      <div>
        <img src="https://deckofcardsapi.com/static/img/back.png"></img>
      </div>
    );
};

export default NewCard;
