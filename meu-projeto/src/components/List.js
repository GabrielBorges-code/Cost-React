import Item from "./Item";

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="BMW" ano_lancamento={2021}/>
                <Item marca="Mercedes" ano_lancamento={2020}/>
                <Item marca="Audi" ano_lancamento={2022}/>
                <Item marca="Fiat" ano_lancamento={2015}/>
                <Item marca="Renault" ano_lancamento={2017}/>
                <Item/>
            </ul>
        </>
    );
}

export default List;