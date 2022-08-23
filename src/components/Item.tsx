import Button from '@material-ui/core/Button';
import './item.styles'
import {CartItemType} from '../App';
import {Wrapper} from './item.styles'

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item = (props: Props) => {
  return(<Wrapper>
    <img src={props.item.image} alt="" />
    <div>
      <h3>{props.item.title}</h3>
      <p>{props.item.description}</p>
      <h3>${props.item.price}</h3>
    </div>
    <Button onClick={() => props.handleAddToCart(props.item)}>Add to cart</Button>
  </Wrapper>)
}


export default Item;