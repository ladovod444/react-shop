function BasketItem(props){
	const {
		id,
		name,
		price,
		quantity,
		removeFromBasket = Function.prototype,
		increaseBasketItem = Function.prototype,
		decreaseBasketItem= Function.prototype,
		changeBasketItemQuantity= Function.prototype
	} = props;

	return <li className="collection-item">
		{name} {price} x {quantity} = {price * quantity} руб

		{/*<span className="quantity-manage">*/}
		{/*	<button onClick={() => decreaseBasketItem(id)}>-</button>*/}
		{/*	<span className="basket-quantity">{quantity}</span>*/}
		{/*	<button onClick={() => increaseBasketItem(id)}>+</button>*/}
		{/*</span>*/}
		<span className="quantity-manage">
			<button
				disabled={quantity <= 0} onClick={() => changeBasketItemQuantity(id, '-')}>-</button>
			<span className="basket-quantity">{quantity}</span>
			<button onClick={() => changeBasketItemQuantity(id, '+')}>+</button>
		</span>
		<span
			className="secondary-content"
			onClick={() => removeFromBasket(id)}
		><i className="material-icons basket-delete">close</i>
		</span>
	</li>
}

export {BasketItem}
