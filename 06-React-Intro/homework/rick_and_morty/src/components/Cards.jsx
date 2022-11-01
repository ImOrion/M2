import Card from "./Card";

export default function Cards(props) {
	const { characters } = props;

	return (
		<div>
			{characters.map(character => (
            //  { name, gender, species, image }
				<Card
					name={character.name}
					gender={character.gender}
					species={character.species}
					image={character.image}
               		key={character.name}
               // {...character}
					onClose={() => window.alert("Emulamos que se cierra la card")}
				/>
			))}
		</div>
	);
}
