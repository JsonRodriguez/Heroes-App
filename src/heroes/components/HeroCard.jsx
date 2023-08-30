import { Link } from "react-router-dom";

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters ,
}) => {

    const heroeImageUrl = `/assets/heroes/${id}.jpg`;

    const longCheckText = ( characters ) => {
        if(characters.length >= 1 && characters.length <= 42){
            return characters;
        }else{
            const newCharacters = characters.substring(0,41) + '...';
            return newCharacters;
        }
    }

    return (
        <div className="col animate__animated animate__zoomIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img className="card-img" src={heroeImageUrl} alt={ superhero } />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{ alter_ego }</p>
                            {
                                (alter_ego !== characters) && (<p className="card-text">{ longCheckText(characters) }</p>)
                            }
                            <p className="card-text text-comic">
                                { first_appearance }
                            </p>

                            <Link className="btn btn-outline-primary" to={`/hero/${id}`}>
                                More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
