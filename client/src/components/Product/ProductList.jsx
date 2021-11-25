import React from 'react'
import { Link } from 'react-router-dom';
import Subcribe from './Subcribe'
import '../../style/_global.scss'
import Item from './ProductItem'
import axios from 'axios';
function ProductList() {
    const list = [
        {
            id: 1,
            category_id: 1,
            name: 'Áo Thun Cổ Tròn',
            description: 'Áo Thun Cổ Tròn Dáng Rộng Không Tay',
            price: '499000',
            rate: '5',
            'category.name': 'Áo',
            'product_images.image_url': 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/440425/item/vngoods_01_440425.jpg?width=1600&impolicy=quality_75'
        },
        {
            id: 8,
            category_id: 1,
            name: 'Áo Khoác Có Mũ Cản Gió',
            description: 'Áo hoodie giả lông cừu mịn có khả năng cản gió cực tốt. Chiều dài thân áo được cải tiến ngắn hơn một chút để kiểu dáng trông đẹp hơn.',
            price: '999000',
            rate: '5',
            'category.name': 'Áo',
            'product_images.image_url': 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/440121/item/vngoods_01_440121.jpg?width=1600&impolicy=quality_75'
        },
        {
            id: 9,
            category_id: 1,
            name: 'Áo Cardigan Giả Lông Cừu',
            description: 'Lớp lông cừu mềm mại bao bọc bạn trong sự ấm áp nhẹ nhàng. Có thể mặc như một lớp bên trong áo khoác hoặc mặc riêng.',
            price: '799000',
            rate: '4',
            'category.name': 'Áo',
            'product_images.image_url': 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/439140/item/vngoods_09_439140.jpg?width=1600&impolicy=quality_75'
        },
        {
            id: 2,
            category_id: 3,
            name: 'Áo khoác len',
            description: 'Áo khoác len màu đen',
            price: '350000',
            rate: '4',
            'category.name': 'Áo len',
            'product_images.image_url': 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/439147/item/vngoods_66_439147.jpg?width=1008&impolicy=quality_75'
        },
        {
            id: 3,
            category_id: 3,
            name: 'Áo khoác',
            description: 'Áo khoác màu đỏ',
            price: '450500',
            rate: '5',
            'category.name': 'Áo len',
            'product_images.image_url': 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/439146/item/vngoods_52_439146.jpg?width=1008&impolicy=quality_75'
        },
        {
            id: 4,
            category_id: 4,
            name: 'Quần len ngắn',
            description: 'Quần len ngắn màu xanh',
            price: '150000',
            rate: '4',
            'category.name': 'Quần len',
            'product_images.image_url': 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/435913/item/vngoods_35_435913.jpg?width=1008&impolicy=quality_75'
        },
        {
            id: 5,
            category_id: 5,
            name: 'Áo Nỉ Dài Tay',
            description: 'Một bộ sưu tập động vật đáng yêu xuất hiện trong các bộ phim của Disney!',
            price: '499000',
            rate: '5',
            'category.name': 'Áo nỉ',
            'product_images.image_url': 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/443680/item/vngoods_09_443680.jpg?width=1008&impolicy=quality_75'
        },
        {
            id: 6,
            category_id: 5,
            name: 'Áo Nỉ Siêu Co Giãn',
            description: 'Khả năng co giãn đáng kinh ngạc để tự do di chuyển. Thoải mái đến mức bạn sẽ quên rằng bạn đang mặc áo.',
            price: '799000',
            rate: '4',
            'category.name': 'Áo nỉ',
            'product_images.image_url': 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/442479/item/vngoods_04_442479.jpg?width=1008&impolicy=quality_75'
        },
        {
            id: 7,
            category_id: 5,
            name: 'Áo Nỉ Chui Đầu Dài Tay',
            description: 'Chất liệu thấm hút mồ hôi tốt để tăng cường sự thoải mái. Kiểu dáng linh hoạt vừa như quần áo mặc hàng ngày vừa như quần áo thể thao.',
            price: '799000',
            rate: '5',
            'category.name': 'Áo nỉ',
            'product_images.image_url': 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/435102/item/goods_66_435102.jpg?width=1600&impolicy=quality_75'
        }
    ]
    axios.get("http://localhost:5000/products")
    .then(res => {
        console.log(res);
    })
    return (
        <main>
            <section className="shop-section mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-5">

                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-7">
                            <div className="bg-light mb-4 px-3 pb-3 d-flex align-items-center flex-wrap">
                                <div className="mt-3">
                                    <input type="text" className="form-control" id="shop-search" placeholder="Search" />
                                </div>
                            </div>
                            <div className="row">
                                {list.map(product => <Item key={product.id} product={product}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Subcribe />
        </main>
    );
}

export default ProductList;
