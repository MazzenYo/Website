const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    },
    images: [{
        type: String
    }],
    price: {
        type: Number,
        default: 0
    },
    oldPrice: {
        type: Number
    },
    reviews: {
        type: Number,
        min: 0
    },
    productCode: {
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    underCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    rating: {
        type: Number,
        default: 0,
        max: 5,
        min: 0
    },
    numReviews: {
        type: Number,
        default: 0,
        min: 0
    },
    inStock: {
        type: Boolean,
        default: false,
        required: true
    }
})

productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productSchema.set('toJSON', {
    virtuals: true,
});


exports.Product = mongoose.model('Product', productSchema);
