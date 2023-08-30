import { HeroList } from "../components"

export const MarvelPage = () => {
    return (
        <div className="main glass-effect">
            <h1>Marvel Comics</h1>
            <hr />

            <HeroList publisher="Marvel Comics" />
        </div>
    )
}
