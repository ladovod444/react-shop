import {useEffect, useState} from 'react'
import {API_KEY, API_URL} from '../config'
import {Preloader} from './Preloader'
import {GoodsList} from './GoodsList'
import {Cart} from './Cart'
import {BasketList} from './BasketList'


function Shop () {

	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);
	const [order, setOrder] = useState([])
	const [isBasketShow, setBasketShow] = useState(false)

	/**
	 * Добавление товара в корзину
	 * @param item
	 */
	const addToBasket = (item) => {

		const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)
		if (itemIndex < 0) { // Если вновь добавленный товар, то
			const newItem = {
				...item,
				quantity: 1,
			}
			setOrder([...order, newItem]);
		} else {
			const newOrder = order.map((orderItem, index) => {
				if (index === itemIndex) { // Если в корзине уже есть такой товар, то увеличить его кол-во
					return {
						...orderItem,
						quantity: orderItem.quantity + 1
					}
				} else { // иначе вернуть элемент заказа
					return orderItem;
				}
			});

			// Обновить/задать состояние заказа
			setOrder(newOrder)
		}


		//console.log('order', order)
	}
	/**
	 * Удаление товара из корзины
	 * @param itemId
	 */
	const removeFromBasket = (itemId) => {
		const newOrder = order.filter(el =>el.id !== itemId)
		setOrder(newOrder);
	}

	const handleBasketShow = () => {
		setBasketShow(!isBasketShow);
	}

	const changeBasketItemQuantity = (itemId, op) => {
		const newOrder = order.map((orderItem) => {
			console.log('orderItem', orderItem)
			if (orderItem.id === itemId) { // Если в корзине уже есть такой товар, то увеличить его кол-во
				return {
					...orderItem,
					quantity: op === '+' ? orderItem.quantity + 1 : orderItem.quantity - 1
				}
			}
			else {
				return {
					...orderItem,
					quantity: orderItem.quantity
				}
			}
		});
		// Обновить/задать состояние заказа
		setOrder(newOrder)
	}

	/**
	 * Уменьшение товара в корзине
	 * @param itemId
	 */
	const decreaseBasketItem = (itemId) => {
		console.log('order=', order)
		const newOrder = order.map((orderItem) => {
			console.log('orderItem', orderItem)
			if (orderItem.id === itemId) { // Если в корзине уже есть такой товар, то увеличить его кол-во
				return {
					...orderItem,
					quantity: orderItem.quantity - 1
				}
			}
			else {
				return {
					...orderItem,
					quantity: orderItem.quantity
				}
			}
		});
		// Обновить/задать состояние заказа
		setOrder(newOrder)
	}

	/**
	 * Увеличение товара в корзине
	 * @param itemId
	 */
	const increaseBasketItem = (itemId) => {
		console.log('order=', order)
		const newOrder = order.map((orderItem) => {
			console.log('orderItem', orderItem)
			if (orderItem.id === itemId) { // Если в корзине уже есть такой товар, то увеличить его кол-во
				return {
					...orderItem,
					quantity: orderItem.quantity + 1
				}
			}
			else {
				return {
					...orderItem,
					quantity: orderItem.quantity
				}
			}
		});
		// Обновить/задать состояние заказа
		setOrder(newOrder)
	}

	const add = (id) => {

		console.log('id = ', id)
		let good_to_add = goods.filter((good) =>

			{return good.id === id}
			// console.log('good can be added', good)
			// if (good.id == id) {
			// 	return good;
			// }
		)
		console.log(good_to_add);
		// order.push(
		// 	good_to_add
		// )
		// setOrder( order )
	}

	useEffect(function getGoods() {
		fetch(
			API_URL,
			{
				headers: {
					'Authorization': API_KEY,
				}
			}
		).then(response =>
			//console.log(result)
			response.json()
		).then(data => {
			//console.log(data.shop)
			console.log(data.featured)
			//data.shop && setGoods(data.shop)
			const goodss = []
			data.featured.map((good) => {
				//good.add = add;
				good.addToBasket = addToBasket;
				goodss.push(good)

			})
			console.log('g=', goodss)
			data.featured && setGoods(goodss)
			setLoading(false)
		})

		//goods = [];
		setGoods([])
		//return
	}, [])


	return <main className="container content shop">
		<Cart quantity={order.length} handleBasketShow={handleBasketShow}  />
		{
			loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />
		}
		{
			isBasketShow && <BasketList
				order = {order}
				handleBasketShow = {handleBasketShow}
				removeFromBasket = {removeFromBasket}
				increaseBasketItem = {increaseBasketItem}
				decreaseBasketItem = {decreaseBasketItem}
				changeBasketItemQuantity = {changeBasketItemQuantity}
			/>
		}
	</main>
}

export {Shop}
