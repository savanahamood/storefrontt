const initialState = [
    {
        id: 1,
        category: 'Games',
        name: 'Monopoly',
        price: 1000,
        inventoryCount: 820,
        image: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000037152/fd9d11a908ae1f59021a72388cd91ed927178e33c7b4fc4a572e054c24adb3b4',
    },
    {
        id: 2,
        category: 'Games',
        name: 'Smash Bros',
        price: 1000,
        inventoryCount: 404,
        image: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000012332/ac4d1fc9824876ce756406f0525d50c57ded4b2a666f6dfe40a6ac5c3563fad9',
    },

    {
        id: 3,
        category: 'Games',
        name: 'Super Mario Bros.™ Wonder',
        price: 345,
        inventoryCount: 875,
        image: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000068688/a13441a9532b1c9e90f657ee1c67255de073707543ff6735ceb57b472faec691',
    },
    {
        id: 4,
        category: 'Games',
        name: 'Detective Pikachu™ Returns',
        price: 55,
        inventoryCount: 524,
        image: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000068693/c4b5a71815eb1817733a82d6228a624751f8f4a3fbc6c3a4f69f81be1e114454',
    },
    {
        id: 5,
        category: 'Games',
        name: 'Palia',
        price: 87,
        inventoryCount: 135,
        image: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000064806/1703cddd1c0350e504664a91fc4fa22b9dfa8c02d4f4ac3c2013470eb0b23f1a',
    },
    {
        id: 6,
        category: 'Games',
        name: 'Palia',
        price: 787,
        inventoryCount: 335,
        image: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000053751/33e5292bfdc22c68aecbc34309249e1b0c9129d03bd3df14cb097b3573d380db',
    },

    {
        id: 7,
        category: 'Electronics',
        name: 'camera',
        price: 1254,
        inventoryCount: 25,
        image: 'https://target.scene7.com/is/image/Target/GUEST_ce4775c4-ce50-4263-97af-547e10b731e3?wid=800&hei=800&qlt=80&fmt=webp',
    },
    {
        id: 8,
        category: 'Electronics',
        name: 'iPad',
        price: 178,
        inventoryCount: 100,
        image: 'https://m.media-amazon.com/images/I/71LqPGew7uL._AC_SL1500_.jpg',
    },
    {
        id: 9,
        category: 'Electronics',
        name: 'TV',
        price:584,
        inventoryCount: 412,
        image: 'https://images-cdn.ubuy.co.in/6357010973ef1e3f654cf379-sony-bravia-xr-a90k-42-4k-hdr-oled.jpg',
    },
    {
        id: 10,
        category: 'Electronics',
        name: 'Laptop',
        price: 547,
        inventoryCount: 415,
        image: 'https://m.media-amazon.com/images/I/81Gm69I-LyL._AC_SL1500_.jpg',
    },
    {
        id: 11,
        category: 'Electronics',
        name: 'Mobile',
        price: 1099.99,
        inventoryCount: 6,
        image: 'https://www.bhphotovideo.com/images/images1000x1000/canon_3616c016_eos_90d_dslr_camera_1502489.jpg',
    },

    {
        id: 12,
        category: 'Electronics',
        name: 'Huwaei Watch',
        price: 258,
        inventoryCount: 541,
        image: 'https://smartbuy-me.com/smartbuystore/medias/CAV0711ST0055.jpg?context=c21hcnRidXliMmN8aW1hZ2VzfDEwNDQzfGltYWdlL2pwZWd8aW1hZ2VzL2g3OC9oYmMvODg4Nzk2NDcyOTM3NC5qcGd8MDQwOTcyMjgyZWMyYmQ3N2U0MTIxYjI2ZjRhZjk5YTQ0ZTNkYmVlNmJiMDgwM2FkMjVkMTM2NGJlYTljZDIwOA',
    },
  ];
  
  const DECREASE_INVENTORY = 'DECREASE_INVENTORY';
  const INCREASE_INVENTORY = 'INCREASE_INVENTORY';
  
  // Action Creators
  const decreaseInventory = (productId) => ({
    type: DECREASE_INVENTORY,
    payload: productId,
  });
  
  const increaseInventory = (productId) => ({
    type: INCREASE_INVENTORY,
    payload: productId,
  });
  
  // Reducer
  const productsReducer = (state = initialState, action) => {
    let productToUpdate; // Declare the variable outside of the switch statement
    let productToIncrease; // Declare the variable outside of the switch statement
  
    switch (action.type) {
      case DECREASE_INVENTORY:
        // Find the product by ID
        productToUpdate = state.find((product) => product.id === action.payload);
  
        // Check if the product exists and its inventory count is greater than 0
        if (productToUpdate && productToUpdate.inventoryCount > 0) {
          return state.map((product) =>
            product.id === action.payload
              ? { ...product, inventoryCount: product.inventoryCount - 1 }
              : product
          );
        }
        return state; // No change if the product doesn't exist or inventory is 0
  
      case INCREASE_INVENTORY:
        // Find the product by ID
        productToIncrease = state.find((product) => product.id === action.payload);
  
        // Check if the product exists
        if (productToIncrease) {
          return state.map((product) =>
            product.id === action.payload
              ? { ...product, inventoryCount: product.inventoryCount + 1 }
              : product
          );
        }
        return state; // No change if the product doesn't exist
  
      default:
        return state;
    }
  };
  
  export { decreaseInventory, increaseInventory, productsReducer };
  