 import p1 from '@/assets/index/1.jpg';
 import p2 from '@/assets/index/2.jpg';
 import p3 from '@/assets/index/3.png';
 import p4 from '@/assets/index/4.jpg';
import youxi from '@/assets/index/youxi.png';
import huishou from '@/assets/index/huishou.png';
import car from '@/assets/index/car.png';
import yingjian from '@/assets/index/yingjian.png';
import swipe1 from "@/assets/1.png";
import swipe2 from "@/assets/2.png";
import swipe3 from "@/assets/3.png";
import swipe4 from "@/assets/4.png";


let data = {
    user: [
        {
            id: 90,
            name: "未登录",
            phone: "",
            address: "",
            password: "",
        },
        {
            id: 91,
            name: "admin",
            phone: "12345678901",
            address: "广东省广州市天河区",
            password: "123456",
        }
    ],
    // 首页列表数据
    prods: [
        {
            id: 1,
            title: "三星",
            desc: "三星 Galaxy S23 Ultra",
            price: 4999,
            src: p1,
            shopor:"三星官方旗舰店",
            classId: 2,
            classSubid1: 1,
            classSubid2: 4,
        },
        {
            id: 2,
            title: "小米",
            desc: "小米 11 Pro",
            price: 3699,
            src: p2,
            shopor:"小米官方旗舰店",
            classId: 2,
            classSubid1: 2,
            classSubid2: 3,
        },
        {
            id: 3,
            title: "小米",
            desc: "小米 14 Ultra",
            price: 5489,
            src: p3,
            shopor:"小米官方旗舰店",
            classId: 2,
            classSubid1: 1,
            classSubid2: 4,
        },
        {
            id: 4,
            title: "三星",
            desc: "三星 Galaxy S21",
            price: 4599,
            src: p4,
            shopor:"三星官方旗舰店",
            classId: 2,
            classSubid1: 2,
            classSubid2: 4,
        },

        {
            id: 5,
            title: "迷你烤箱",
            desc: "迷你烤箱",
            price: 199,
            src: swipe1,
            shopor:"小家电专卖店",
            
        },
        {
            id: 6,
            titile: "云母",
            desc: "云母",
            price: 299,
            src: swipe2,
            shopor:"小家电专卖店",
        },
        {
            id: 7,
            title: "打印机",
            desc: "打印机",
            price: 230,
            src: swipe3,
            shopor:"小家电专卖店",
        },
        {
            id: 8,
            title: "打孔定位器",
            desc: "打孔定位器",
            price: 3,
            src: swipe4,
            shopor:"工具小店",
        }
    ],
    //分类数据 
    texts: [
        {
            id: 101,
            text: "电脑办公",
        },
        {
            id: 102,
            text: "手机"
        },
        {
            id: 103,
            text: "图书"
        },
        {
            id: 104,
            text: "游戏"
        },
        {
            id: 105,
            text: "数码配件"
        },
        {
            id: 106,
            text: "游戏娱乐"
        },
        {
            id: 107,
            text: "健身器材"
        },
        {
            id: 108,
            text: "家用电器"
        }
    ],
    // 首页图片数据
    index: [
        {
            id: 201,
            src: youxi,
            title: "游戏交易",
        },
        {
            id: 202,
            src: huishou,
            title: "高价回收"
        },
        {
            id: 203,
            src: yingjian,
            title: "淘硬件"
        },
        {
            id: 204,
            src: car,
            title: "二手车"
        },
        {
            id: 205,
            src: youxi,
            title: "游戏交易"
        }
    ]
};
// 打折
export const dataCoupon = {
    //商品便宜劵
    product:[
        {
            id:1,
            title: "8折优惠卷",
            desc: "满200元可用",
            requirePrice: 200,
            text: "平台大力补贴，尽情淘淘淘！"
        }
        ,
        {
            id:2,
            title: "9折优惠卷",
            desc: "满100元可用",
            requirePrice: 100,
            text: "平台大力补贴，尽情淘淘淘！"
        },
        {
            id:3,
            title: "7折优惠卷",
            desc: "满600元可用",
            requirePrice: 600,
            text: "平台大力补贴，尽情淘淘淘！"
        },
        {
            id:4,
            titile: "新用户8折劵",
            desc: "满100元可用",
            requirePrice: 100,
            text: "平台大力补贴，尽情淘淘淘！"
        }
    ]
};

export default data ;