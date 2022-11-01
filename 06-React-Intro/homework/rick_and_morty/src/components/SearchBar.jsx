export default function SearchBar(props) {
	// props = { onSearch: function() }
	return (
		<div>
			<input type="search" />
			<button
				onClick={() => props.onSearch("Esto sería el ID de un personaje")}
			>
				Agregar
			</button>
		</div>
	);
}
