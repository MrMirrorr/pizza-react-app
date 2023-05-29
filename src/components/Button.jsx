import classNames from 'classnames';

const Button = ({
	children,
	btnCart,
	btnOutline,
	btnAdd,
	btnCircle,
	btnMinus,
	btnPlus,
	btnPay,
	btnBack,
	onClick,
}) => {
	return (
		<button
			onClick={onClick && onClick}
			className={classNames('button', {
				'button--cart': btnCart,
				'button--outline': btnOutline,
				'button--add': btnAdd,
				'button--circle': btnCircle,
				'cart__item-count-minus': btnMinus,
				'cart__item-count-plus': btnPlus,
				'pay-btn': btnPay,
				'go-back-btn': btnBack,
			})}
		>
			{children}
		</button>
	);
};

export default Button;
