import * as repository from "../repository/cartRepository.js";

/* 
    장바구니 상품 추가
*/
export const addcart = async (req, res) => {
    const CartData = req.body;
    const result = await repository.addcart(CartData);
    res.json(result);
    res.end();
}

/* 
    장바구니 수량 가져오기
*/
export const cartCount = async (req, res) => {
    const {userId} = req.body;
    const result = await repository.cartCount(userId);
    res.json(result);
    res.end();
}

/**
 * 장바구니 리스트 가져오기
 * @param {*} req 
 * @param {*} res 
 */
export const cartList = async (req, res) => {
    const {userId} = req.body;
    const result = await repository.cartList(userId);
    res.json(result);
    res.end();
} 

export const deleteCartSelected = async (req, res) => {
    const cidList = req.body;
    const result = await repository.deleteCartSelected(cidList);
    res.json(result);
    res.end();
}

export const deleteCartOne = async (req, res) => {
    const {cid} = req.body;
    const result = await repository.deleteCartOne(cid);
    res.json(result);
    res.end();
}