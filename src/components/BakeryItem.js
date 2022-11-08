// TODO: create a component that displays a single bakery item

export default function BakeryItem(props) {
    const name = props.name;
    const description = props.description;
    const price = props.price;
    const image = props.image;

    return(
        <div className="items">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
            <button onClick={() => props.addToCart(name, price)}>Add To Cart</button>
            <img src={image}></img>
        </div>
    )
}
