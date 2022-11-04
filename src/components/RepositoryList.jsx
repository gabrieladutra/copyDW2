import { Counter } from "./Counter"
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'

const repository = {
    name: "Atividade",
    description: "Descrição da Atividade",
    link: "https://github.com/gabrieladutra/copyDW2"
}


export function RepositoryList(){
    return(
                <>
                    <RepositoryItem repository={repository}/>
                    <Counter/>
                </>
    )
}