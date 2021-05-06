import {BasketItem} from './BasketItem'

const BasketList = (props) => {
	const {order = [],
		handleBasketShow = Function.prototype,
		removeFromBasket = Function.prototype,
		increaseBasketItem = Function.prototype,
		decreaseBasketItem = Function.prototype,
		changeBasketItemQuantity = Function.prototype
	} = props;

	const totalPrice = order.reduce((sum, orderItem) => {
		return sum + orderItem.price * orderItem.quantity
	}, 0)


	return <ul className="collection basket-list">
		<li className="collection-item active">Корзина</li>
		{
			order.length ? order.map((orderItem) => {// при фигурных скобках для возврата значения нужно явно вызвать return
					return <BasketItem
						key={orderItem.id} {...orderItem}
						removeFromBasket={removeFromBasket}
						increaseBasketItem={increaseBasketItem}
						decreaseBasketItem={decreaseBasketItem}
						changeBasketItemQuantity={changeBasketItemQuantity}
					/>
				}
			) : <li className="collection-item">Корзина пуста</li>

		}
		<li className="collection-item">Общая стоимость: {totalPrice} руб.</li>
		<i className='material-icons basket-close'
			 onClick={handleBasketShow}>close</i>
	</ul>
}

export {BasketList}
