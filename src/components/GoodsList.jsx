import {GoodsItem} from './GoodsItem'

function GoodsList(props) {
	const {goods = [], addToBasket= Function.prototype} = props;

	//console.log('goods', goods)

	return !goods.length ? <h3>Nothing here</h3> :
	 <div className="goods">
		{goods.map((good) =>
					<GoodsItem key={good.id} {...good} addToBasket={addToBasket}  />
				)
			}
		</div>
}

export {GoodsList}
