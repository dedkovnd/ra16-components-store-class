import PropTypes from 'prop-types';

export class Item {
    constructor(entity) {
        Object.assign(
            this,{
                brand: PropTypes.string,
                title: PropTypes.string,
                description: PropTypes.string,
                descriptionFull: PropTypes.string,
                price: PropTypes.number,
                currency: PropTypes.string
            },entity
        )
    }
}

// ShopItemClass.propTypes = {
//     item: PropTypes.shape({
//         brand: PropTypes.string,
//         title: PropTypes.string,
//         description: PropTypes.string,
//         descriptionFull: PropTypes.string,
//         price: PropTypes.number,
//         currency: PropTypes.string
//     })
// }