export const MoviesList = (movies) => {
    return (
        <>
            {
                movies.map(movie => (
                    <li key={movie.id}>
                        
                    </li>
                ))
            }
        </>
    )
}