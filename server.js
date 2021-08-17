
const express = require('express')
const app = express();
const users = [];
let products =  {

items:[
 {
    id:1,
    category:"amazing",
    name:"Flirt",
    size:"X",
    type:" بیراهن مردانه",
    height:59,
    aroundChest:50,
    price:49000,
    discount:30,
    img:"https://www.banimode.com/483588-large_default/42758.jpg",
    subImg:"https://www.banimode.com/547932-large_default/47615.jpg"
}, 
{
    id:2,
    price:70000,
    category:"amazing",
    size:"XS",
    discount:47,
    aroundChest:20,
    height:20,
    type:" بیراهن مردانه",
    name:"RNS",
    img:"https://www.banimode.com/531441-large_default/46519.jpg",
    subImg:"https://www.banimode.com/531439-large_default/46519.jpg"
},

{
    id:3,
    price:80000,
    category:"amazing",
    discount:27,
    size:"Xl",
    aroundChest:20,
    height:20,
    type:" مانتو زنانه",
    name:"Eloj",
    img:"https://www.banimode.com/543778-large_default/47253.jpg",
    subImg:"https://www.banimode.com/543777-large_default/47253.jpg"
},

{
    id:4,
    price:90000,
    category:"amazing",
    discount:57,
    size:"S",
    height:74,
    type:" کت مردانه ارنیکا",
    name:"Arnika",
    img:"https://www.banimode.com/469082-large_default/41748.jpg",
    subImg:"https://www.banimode.com/469081-large_default/41748.jpg"
},
{
    id:5,
    price:95000,
    category:"amazing",
    discount:49,
    size:"M",
    height:67,
    aroundChest:12,
    type:" مانتو زنانه",
    name:"Just",
    img:"https://www.banimode.com/525653-large_default/45978.jpg",
    subImg:"https://www.banimode.com/525652-large_default/45978.jpg"
},


{
    id:6,
    price:66000,
    category:"amazing",
    discount:39,
    size:"XS",
    height:67,
    aroundChest:20,
    type:" تیشرت زنانه",
    name:"Avant",
    img:"https://www.banimode.com/523423-large_default/45845.jpg",
    subImg:"https://www.banimode.com/523422-large_default/45845.jpg"
},

{
    id:7,
    price:26000,
    category:"amazing",
    discount:50,
    size:"L",
    height:17,
    aroundChest:22,
    type:" تیشرت مردانه برندس",
    name:"Brands",
    img:"https://www.banimode.com/524668-large_default/45887.jpg",
    subImg:"https://www.banimode.com/524669-large_default/45887.jpg"
},
{
    id:8,
    price:68000,
    category:"amazing",
    discount:52,
    size:"M",
    height:87,
    aroundChest:19,
    type:" تیشرت زنانه",
    name:"Anly",
    img:"https://www.banimode.com/536424-large_default/46808.jpg",
    subImg:"https://www.banimode.com/536425-large_default/46808.jpg"
},

{
    id:9,
    name:"Baleno",
    category:"suggest",
    size:"X",
    height:37,
    aroundChest:52,
    type:" تیشرت پسرانه بالنو",
    price:49000,
    discount:30,
    img:"https://www.banimode.com/471411-large_default/41689.jpg",
    subImg:"https://www.banimode.com/471412-large_default/41689.jpg"
},
{
    id:10,
    category:"suggest",
    price:70000,
    size:"XS",
    discount:47,
    roundShip:34,
    height:66,
    waist:77,
    type:" شلوار مردانه از ان اس",
    name:"RNS",
    img:"https://www.banimode.com/548876-large_default/47684.jpg",
    subImg:"https://www.banimode.com/548875-large_default/47684.jpg"
},

{
    id:11,
    category:"suggest",
    price:80000,
    discount:27,
    aroundChest:70,
    height:10,
    size:"Xl",
    type:" مانتو زنانه الوج",
    name:"Eloj",
    img:"https://www.banimode.com/548086-large_default/47546.jpg",
    subImg:"https://www.banimode.com/548085-large_default/47546.jpg"
},

{
    id:12,
    price:90000,
    category:"suggest",
    discount:57,
    aroundChest:10,
    height:23,
    size:"S",
    type:" تیشرت مردانه ارنیکا",
    name:"Arnika",
    img:"https://www.banimode.com/551038-large_default/47887.jpg",
    subImg:"https://www.banimode.com/551037-large_default/47887.jpg"
},

{
    id:13,
    price:95000,
    category:"suggest",
    discount:49,
    aroundChest:22,
    height:56,
    size:"M",
    type:" بیراهن مردانه جاست",
    name:"Just",
    img:"https://www.banimode.com/550840-large_default/47838.jpg",
    subImg:"https://www.banimode.com/550839-large_default/47838.jpg"
},



{
    id:14,
    price:66000,
    category:"suggest",
    discount:39,
    size:"XS",
    height:74,
    type:"کت مردانه اواست",
    name:"Avant",
    img:"https://www.banimode.com/518722-large_default/45264.jpg",
    subImg:"https://www.banimode.com/522084-large_default/45264.jpg"
},
{
    id:15,
    price:26000,
    discount:50,
    category:"suggest",
    size:"L",
    aroundChest:40,
    height:60,
    type:"   تیشرت زنانه برندس",
    name:"Brands",
    img:"https://www.banimode.com/550867-large_default/47822.jpg",
    subImg:"https://www.banimode.com/550866-large_default/47822.jpg"
},
{
    id:16,
    name:"Hegro",
    category:"newset",
    size:"X",
    aroundChest:70,
    height:60,
    type:" بیرانه مردانه هوگرو",
    price:49000,
    img:"https://www.banimode.com/551398-large_default/47957.jpg",
    subImg:"https://www.banimode.com/551399-large_default/47957.jpg"
},
{
    id:17,
    price:70000,
    category:"newset",
    size:"XS",
    height:74,
    type:" کت تک مردانه",
    name:"Brands",
    img:"https://www.banimode.com/551325-large_default/47949.jpg",
    subImg:"https://www.banimode.com/551326-large_default/47949.jpg"
},

{
    id:18,
    price:80000,
    category:"newset",
    discount:27,
    size:"Xl",
    roundShip:14,
    height:96,
    waist:17,
    type:" شلوارک مردانه بی فور",
    name:"B4",
    img:"https://www.banimode.com/552258-large_default/47944.jpg",
    subImg:"https://www.banimode.com/552259-large_default/47944.jpg"
},

{
    id:19,
    price:90000,
    category:"newset",
    discount:57,
    roundShip:74,
    height:16,
    waist:17,
    size:"S",
    type:" شلوارک مردانه بی فور",
    name:"B4",
    img:"https://www.banimode.com/552264-large_default/47944.jpg",
    subImg:"https://www.banimode.com/552265-large_default/47944.jpg"
},
{
    id:20,
    name:"Mode",
    category:"newset",
    size:"X",
    height:74,
    type:" کتان زنانه",
    price:49000,
    discount:30,
    img:"https://www.banimode.com/551751-large_default/47974.jpg",
    subImg:"https://www.banimode.com/551750-large_default/47974.jpg"
},


{
    id:21,
    price:70000,
    category:"newset",
    size:"XS",
    discount:47,
    aroundChest:60,
    height:70,
    type:" تیشرت زنانه",
    name:"B4",
    img:"https://www.banimode.com/550999-large_default/47937.jpg",
    subImg:"https://www.banimode.com/551001-large_default/47937.jpg"
},
{
    id:22,
    price:80000,
    category:"newset",
    discount:27,
    size:"Xl",
    aroundChest:10,
    height:70,
    type:" تیشرت زنانه",
    name:"B4",
    img:"https://www.banimode.com/551004-large_default/47937.jpg",
    subImg:"https://www.banimode.com/551005-large_default/47937.jpg"
},

{
    id:23,
    price:90000,
    category:"newset",
    discount:57,
    size:"S",
    aroundChest:30,
    height:70,
    type:" تیشرت زنانه",
    name:"Arnika",
    img:"https://www.banimode.com/551007-large_default/47937.jpg",
    subImg:"https://www.banimode.com/551009-large_default/47937.jpg"
},
{
    id:24,
    name:"Hegro",
    category:"newsetMale",
    size:"X",
    aroundChest:60,
    height:21,
    type:" بیرانه مردانه هوگرو",
    price:49000,
    img:"https://www.banimode.com/551398-large_default/47957.jpg",
    subImg:"https://www.banimode.com/551399-large_default/47957.jpg"
},
{
    id:25,
    price:70000,
    category:"newsetMale",
    size:"XS",
    height:74,
    type:" کت تک مردانه",
    name:"Brands",
    img:"https://www.banimode.com/551325-large_default/47949.jpg",
    subImg:"https://www.banimode.com/551326-large_default/47949.jpg"
},

{
    id:26,
    price:80000,
    category:"newsetMale",
    discount:27,
    size:"Xl",
    roundShip:44,
    height:25,
    waist:657,
    type:" شلوارک مردانه بی فور",
    name:"B4",
    img:"https://www.banimode.com/552258-large_default/47944.jpg",
    subImg:"https://www.banimode.com/552259-large_default/47944.jpg"
},


{
    id:27,
    price:90000,
    category:"newsetMale",
    discount:57,
    size:"S",
    roundShip:78,
    height:12,
    waist:67,
    type:" شلوارک مردانه بی فور",
    name:"B4",
    img:"https://www.banimode.com/552264-large_default/47944.jpg",
    subImg:"https://www.banimode.com/552265-large_default/47944.jpg"
},
{
    id:28,
    name:"Mode",
    category:"newsetFamale",
    size:"X",
    height:74,
    type:" کتان زنانه",
    price:49000,
    discount:30,
    img:"https://www.banimode.com/551751-large_default/47974.jpg",
    subImg:"https://www.banimode.com/551750-large_default/47974.jpg"
},
{
    id:29,
    price:70000,
    category:"newsetFamale",
    size:"XS",
    discount:47,
    aroundChest:66,
    height:51,
    type:" تیشرت زنانه",
    name:"B4",
    img:"https://www.banimode.com/550999-large_default/47937.jpg",
    subImg:"https://www.banimode.com/551001-large_default/47937.jpg"
},

{
    id:30,
    price:80000,
    category:"newsetFamale",
    discount:27,
    size:"Xl",
    aroundChest:20,
    height:28,
    type:" تیشرت زنانه",
    name:"B4",
    img:"https://www.banimode.com/551004-large_default/47937.jpg",
    subImg:"https://www.banimode.com/551005-large_default/47937.jpg"
},
{
    id:31,
    price:90000,
    category:"newsetFamale",
    discount:57,
    size:"S",
    aroundChest:10,
    height:81,
    type:" تیشرت زنانه",
    name:"Arnika",
    img:"https://www.banimode.com/551007-large_default/47937.jpg",
    subImg:"https://www.banimode.com/551009-large_default/47937.jpg"
},
{
    id:32,
    category:"newsetBaby",
    name:"baby land",
    size:"X",
    type:" شیشه شیر",
    price:49000,
    img:"https://www.banimode.com/553492-large_default/48105.jpg",
    subImg:"https://www.banimode.com/553499-large_default/48040.jpg"
},
{
    id:33,
    name:"baby land",
    category:"newsetBaby",
    size:"XS",
    type:" شیشه شیر",
    price:79000,
    img:"https://www.banimode.com/553415-large_default/48029.jpg",
    subImg:"https://www.banimode.com/553416-large_default/48029.jpg"
},

{
        id:34,
        name:"baby land",
        category:"newsetBaby",
        size:"S",
        type:" شیشه شیر",
        price:39000,
        img:"https://www.banimode.com/553128-large_default/48026.jpg",
        subImg:"https://www.banimode.com/553233-large_default/48026.jpg"
    },

    {
        id:35,
        name:"baby land",
        category:"newsetBaby",
        size:"M",
        type:" شیشه شیر",
        price:69000,
        img:"https://www.banimode.com/553291-large_default/48025.jpg",
        subImg:"https://www.banimode.com/553292-large_default/48025.jpg"
    },

    {
        id:36,
        name:"Aroma",
        category:"maleAll",
        size:"X",
          aroundChest:62,
    height:25,
        type:" پیراهن آستین کوتاه",
        discount:27,
        price:69000,
        img:"https://www.banimode.com/530453-large_default/46581.jpg",
        subImg:"https://www.banimode.com/535785-large_default/46694.jpg",
    },
    {
        id:37,
        price:70000,
        category:"maleAll",
        size:"XS",
        discount:17,
          aroundChest:10,
    height:28,
        type:" پیراهن آستین کوتاه",
        name:"Brands",
        img:"https://www.banimode.com/542470-large_default/47179.jpg",
        subImg:"https://www.banimode.com/542471-large_default/47179.jpg"
    },

{
    id:38,
    price:80000,
    category:"maleAll",
    discount:27,
    size:"Xl",
      aroundChest:60,
    height:21,
    type:" پیراهن آستین کوتاه",
    name:"B4",
    img:"https://www.banimode.com/511742-large_default/44954.jpg",
    subImg:"https://www.banimode.com/511743-large_default/44954.jpg"
},
{
    id:39,
    price:90000,
    category:"maleAll",
    discount:57,
    size:"S",
    aroundChest:60,
    height:231,
    type:" پیراهن آستین کوتاه",
    name:"B4",
    img:"https://www.banimode.com/530160-large_default/46556.jpg",
    subImg:"https://www.banimode.com/530161-large_default/46556.jpg"
},
{
    id:40,
    name:"Aroma",
    category:"maleAll",
    size:"X",
    aroundChest:60,
    height:21,
    type:"  تیشرت مردانه",
    discount:27,
    price:90000,
    img:"https://www.banimode.com/522790-large_default/42364.jpg",
    subImg:"https://www.banimode.com/522791-large_default/42364.jpg",
},
{
    id:41,
    price:70000,
    category:"maleAll",
    size:"XS",
    discount:17,
    aroundChest:60,
    height:21,
    type:" تیشرت مردانه",
    name:"Brands",
    img:"https://www.banimode.com/516476-large_default/45191.jpg",
    subImg:"https://www.banimode.com/516477-large_default/45191.jpg"
},
{
    id:42,
    price:80000,
    category:"maleAll",
    discount:27,
    size:"Xl",
    aroundChest:60,
    height:21,
    type:" تیشرت مردانه",
    name:"B4",
    img:"https://www.banimode.com/549442-large_default/47656.jpg",
    subImg:"https://www.banimode.com/549443-large_default/47656.jpg"
},

{
    id:43,
    price:90000,
    category:"maleAll",
    discount:57,
    size:"S",
    aroundChest:60,
    height:21,
    type:" تیشرت مردانه",
    name:"B4",
    img:"https://www.banimode.com/526454-large_default/46229.jpg",
    subImg:"https://www.banimode.com/526455-large_default/46229.jpg"
},

{
    id:44,
    name:"Brands",
    category:"maleAll",
    size:"X",
    type:"  کت وشلوار مردانه",
    roundShip:34,
    height:76,
    waist:37,
    discount:27,
    price:90000,
    img:"https://www.banimode.com/540117-large_default/46989.jpg",
    subImg:"https://www.banimode.com/540120-large_default/46989.jpg",
},
{
    id:45,
    price:70000,
    category:"maleAll",
    roundShip:34,
    height:46,
    waist:88,
    size:"XS",
    discount:17,
    type:" کت وشلوار مردانه",
    name:"Brands",
    img:"https://www.banimode.com/307386-large_default/29823.jpg",
    subImg:"https://www.banimode.com/307387-large_default/29823.jpg"
},
{
    id:46,
    price:80000,
    category:"maleAll",
    discount:27,
    size:"Xl",
    height:74,
    type:" کت تک مردانه",
    name:"LRC",
    img:"https://www.banimode.com/493019-large_default/43402.jpg",
    subImg:"https://www.banimode.com/493020-large_default/43402.jpg"
},
{
    id:47,
    price:90000,
    category:"maleAll",
    discount:57,
    size:"S",
    type:"کت تک کردانه کروم",
    name:"Curom",
    img:"https://www.banimode.com/506980-large_default/44741.jpg",
    subImg:"https://www.banimode.com/506979-large_default/44741.jpg"
},









{
    id:48,
    name:"Aroma",
    category:"shirt",
    size:"X",
    aroundChest:60,
    height:21,
    type:" پیراهن آستین کوتاه",
    discount:27,
    price:69000,
    img:"https://www.banimode.com/530453-large_default/46581.jpg",
    subImg:"https://www.banimode.com/535785-large_default/46694.jpg",
},
{
    id:49,
    price:70000,
    category:"shirt",
    size:"XS",
    discount:17,
    aroundChest:60,
    height:21,
    type:" پیراهن آستین کوتاه",
    name:"Brands",
    img:"https://www.banimode.com/542470-large_default/47179.jpg",
    subImg:"https://www.banimode.com/542471-large_default/47179.jpg"
},

{
    id:50,
    price:80000,
    category:"shirt",
    discount:27,
    size:"Xl",
    aroundChest:60,
    height:21,
    type:" پیراهن آستین کوتاه",
    name:"B4",
    img:"https://www.banimode.com/511742-large_default/44954.jpg",
    subImg:"https://www.banimode.com/511743-large_default/44954.jpg"
},
{
    id:51,
    price:90000,
    category:"shirt",
    discount:57,
    size:"S",
    aroundChest:60,
    height:21,
    type:" پیراهن آستین کوتاه",
    name:"B4",
    img:"https://www.banimode.com/530160-large_default/46556.jpg",
    subImg:"https://www.banimode.com/530161-large_default/46556.jpg"
},
{
    id:52,
    name:"Aroma",
    category:"Tshirt",
    size:"X",
    type:"  تیشرت مردانه",
    aroundChest:4,
    height:21,
    discount:27,
    price:90000,
    img:"https://www.banimode.com/522790-large_default/42364.jpg",
    subImg:"https://www.banimode.com/522791-large_default/42364.jpg",
},
{
    id:53,
    name:"Aroma",
    category:"Tshirt",
    size:"X",
    type:"  تیشرت مردانه",
    aroundChest:60,
    height:31,
    discount:27,
    price:90000,
    img:"https://www.banimode.com/522790-large_default/42364.jpg",
    subImg:"https://www.banimode.com/522791-large_default/42364.jpg",
},
{
    id:54,
    price:70000,
    category:"Tshirt",
    size:"XS",
    discount:17,
    type:" تیشرت مردانه",
    aroundChest:40,
    height:21,
    name:"Brands",
    img:"https://www.banimode.com/516476-large_default/45191.jpg",
    subImg:"https://www.banimode.com/516477-large_default/45191.jpg"
},
  

{
    id:55,
    price:80000,
    category:"Tshirt",
    discount:27,
    size:"Xl",
    type:" تیشرت مردانه",
    name:"B4",
    img:"https://www.banimode.com/549442-large_default/47656.jpg",
    subImg:"https://www.banimode.com/549443-large_default/47656.jpg"
},
{
    id:56,
    price:90000,
    category:"Tshirt",
    discount:57,
    size:"S",
    aroundChest:20,
    height:21,
    type:" تیشرت مردانه",
    name:"B4",
    img:"https://www.banimode.com/526454-large_default/46229.jpg",
    subImg:"https://www.banimode.com/526455-large_default/46229.jpg"
},
{
    id:57,
    name:"Brands",
    category:"cout",
    size:"X",
    type:"  کت وشلوار مردانه",
    roundShip:74,
    height:56,
    waist:15,
    discount:27,
    price:90000,
    img:"https://www.banimode.com/540117-large_default/46989.jpg",
    subImg:"https://www.banimode.com/540120-large_default/46989.jpg",
},
{
    id:58,
    price:70000,
    category:"cout",
    size:"XS",
    discount:17,
    type:" کت وشلوار مردانه",
    roundShip:14,
    height:87,
    waist:89,
    name:"Brands",
    img:"https://www.banimode.com/307386-large_default/29823.jpg",
    subImg:"https://www.banimode.com/307387-large_default/29823.jpg"
},

{
    id:59,
    price:80000,
    category:"cout",
    discount:27,
    size:"Xl",
    height:74,
    type:" کت تک مردانه",
    name:"LRC",
    img:"https://www.banimode.com/493019-large_default/43402.jpg",
    subImg:"https://www.banimode.com/493020-large_default/43402.jpg"
},
{
    id:60,
    price:90000,
    category:"cout",
    discount:57,
    size:"S",
    height:74,
    type:"کت تک کردانه کروم",
    name:"Curom",
    img:"https://www.banimode.com/506980-large_default/44741.jpg",
    subImg:"https://www.banimode.com/506979-large_default/44741.jpg"
},
{
    id:61,
    name:"Ziboo",
    category:"famaleAll",
    size:"X",
    aroundChest:20,
    height:20,
    type:"   مانتو زمستانی زیبو",
    price:699000,
    img:"https://www.banimode.com/553573-large_default/47201.jpg",
    subImg:"https://www.banimode.com/553574-large_default/47201.jpg",
},
{
    id:62,
    price:700000,
    category:"famaleAll",
    size:"XS",
    discount:17,
    type:"   مانتو جین ان ار سی",
    name:"NRS",
    img:"https://www.banimode.com/528598-large_default/45095.jpg",
    subImg:"https://www.banimode.com/528592-large_default/45095.jpg"
},

{
    id:63,
    price:80000,
    category:"famaleAll",
    discount:27,
    size:"Xl",
    aroundChest:20,
    height:20,
    type:" مانتو زمستانی زیبو",
    name:"Ziboo",
    img:"https://www.banimode.com/554046-large_default/47265.jpg",
    subImg:"https://www.banimode.com/554041-large_default/47265.jpg"
},
{
    id:64,
    price:90000,
    category:"famaleAll",
    discount:57,
    size:"S",
    aroundChest:20,
    height:20,
    type:"   مانتو تابستانی جوتی جینس",
    name:"Jooti Jeans",
    img:"https://www.banimode.com/524089-large_default/44363.jpg",
    subImg:"https://www.banimode.com/524083-large_default/44363.jpg"
},
{
    id:65,
    name:"LC",
    category:"famaleAll",
    size:"X",
    type:"     شلوار زنانه ال سی",
    price:699000,
    img:"https://www.banimode.com/476451-large_default/42242.jpg",
    subImg:"https://www.banimode.com/476452-large_default/42242.jpg",
},
{
    id:66,
    price:700000,
    category:"famaleAll",
    size:"XS",
    discount:17,
    type:"   مانتو جین ان ار سی",
    name:"JootiJeans",
    img:"https://www.banimode.com/486981-large_default/43043.jpg",
    subImg:"https://www.banimode.com/486983-large_default/43043.jpg"
},
{
    id:67,
    price:80000,
    category:"famaleAll",
    discount:27,
    size:"Xl",
    roundShip:54,
    height:65,
    waist:33,
    type:" شلوار زنانه کیکی راکی",
    name:"Ziboo",
    img:"https://www.banimode.com/547203-large_default/47524.jpg",
    subImg:"https://www.banimode.com/547204-large_default/47524.jpg"
},


{
    id:68,
    price:90000,
    category:"famaleAll",
    discount:57,
    size:"S",
    roundShip:89,
    height:78,
    waist:43,
    type:"    شلوار زنانه جین اسویت",
    name:"Jeansweat",
    img:"https://www.banimode.com/432898-large_default/39229.jpg",
    subImg:"https://www.banimode.com/432899-large_default/39229.jpg"
},
{
    id:69,
    name:"Jour",
    category:"famaleAll",
    size:"X",
    height:33,
    waist:76,
    type:"     دامن زنانه  ژوور",
    price:699000,
    img:"https://www.banimode.com/464869-large_default/41269.jpg",
    subImg:"https://www.banimode.com/464870-large_default/41269.jpg",
},
{
    id:70,
    price:700000,
    category:"famaleAll",
    size:"XS",
    discount:17,
    height:33,
    waist:76,
    type:"   دامن زنانه سرٰه",
    name:"Serge",
    img:"https://www.banimode.com/463929-large_default/41132.jpg",
    subImg:"https://www.banimode.com/463930-large_default/41132.jpg"
},
{
    id:71,
    price:80000,
    category:"famaleAll",
    discount:27,
    size:"Xl",
     height:33,
    waist:76,
    type:" دامن زنانه  جین وست",
    name:"jeanwest",
    img:"https://www.banimode.com/514944-large_default/45430.jpg",
    subImg:"https://www.banimode.com/514945-large_default/45430.jpg"
},
{
    id:72,
    price:90000,
    category:"famaleAll",
    discount:57,
    size:"S",
    type:"    شلوار زنانه  جوتی جینس",
    name:"JootiJeans",
    img:"https://www.banimode.com/442883-large_default/39831.jpg",
    subImg:"https://www.banimode.com/442881-large_default/39831.jpg"
},
{
    id:73,
    name:"Ziboo",
    category:"manto",
    size:"X",
    aroundChest:20,
    height:20,
    type:"   مانتو زمستانی زیبو",
    price:699000,
    img:"https://www.banimode.com/553573-large_default/47201.jpg",
    subImg:"https://www.banimode.com/553574-large_default/47201.jpg",
},

{
    id:74,
    price:700000,
    category:"manto",
    size:"XS",
    discount:17,
    type:"   مانتو جین ان ار سی",
    name:"NRS",
    aroundChest:20,
    height:20,
    img:"https://www.banimode.com/528598-large_default/45095.jpg",
    subImg:"https://www.banimode.com/528592-large_default/45095.jpg"
},
{
    id:75,
    price:80000,
    category:"manto",
    discount:27,
    size:"Xl",
    type:" مانتو زمستانی زیبو",
    name:"Ziboo",
    img:"https://www.banimode.com/554046-large_default/47265.jpg",
    subImg:"https://www.banimode.com/554041-large_default/47265.jpg"
},
{
    id:76,
    price:90000,
    category:"manto",
    discount:57,
    size:"S",
    aroundChest:20,
    height:20,
    type:"   مانتو تابستانی جوتی جینس",
    name:"Jooti Jeans",
    img:"https://www.banimode.com/524089-large_default/44363.jpg",
    subImg:"https://www.banimode.com/524083-large_default/44363.jpg"
},
{
    id:77,
    name:"LC",
    category:"pants",
    size:"X",
    roundShip:14,
    height:66,
    waist:57,
    type:"     شلوار زنانه ال سی",
    price:699000,
    img:"https://www.banimode.com/476451-large_default/42242.jpg",
    subImg:"https://www.banimode.com/476452-large_default/42242.jpg",
},
{
    id:78,
    price:700000,
    category:"pants",
    size:"XS",
    discount:17,
    aroundChest:20,
    height:20,
    type:"   مانتو جین ان ار سی",
    name:"JootiJeans",
    img:"https://www.banimode.com/486981-large_default/43043.jpg",
    subImg:"https://www.banimode.com/486983-large_default/43043.jpg"
},
{
    id:79,
    price:80000,
    category:"pants",
    discount:27,
    size:"Xl",
    roundShip:22,
    height:54,
    waist:78,
    type:" شلوار زنانه کیکی راکی",
    name:"Ziboo",
    img:"https://www.banimode.com/547203-large_default/47524.jpg",
    subImg:"https://www.banimode.com/547204-large_default/47524.jpg"
},
{
    id:80,
    price:90000,
    category:"pants",
    discount:57,
    size:"S",
    roundShip:66,
    height:43,
    waist:64,
    type:"    شلوار زنانه جین اسویت",
    name:"Jeansweat",
    img:"https://www.banimode.com/432898-large_default/39229.jpg",
    subImg:"https://www.banimode.com/432899-large_default/39229.jpg"
},
{
    id:81,
    name:"Jour",
    category:"skirt",
    size:"X",
    height:33,
    waist:76,
    type:"     دامن زنانه  ژوور",
    price:699000,
    img:"https://www.banimode.com/464869-large_default/41269.jpg",
    subImg:"https://www.banimode.com/464870-large_default/41269.jpg",
},
{
    id:82,
    price:700000,
    category:"skirt",
    size:"XS",
    discount:17,
    height:33,
    waist:76,
    type:"   دامن زنانه سرٰه",
    name:"Serge",
    img:"https://www.banimode.com/463929-large_default/41132.jpg",
    subImg:"https://www.banimode.com/463930-large_default/41132.jpg"
},

{
    id:83,
    price:80000,
    category:"skirt",
    discount:27,
    size:"Xl",
    height:33,
    waist:76,
    type:" دامن زنانه  جین وست",
    name:"jeanwest",
    img:"https://www.banimode.com/514944-large_default/45430.jpg",
    subImg:"https://www.banimode.com/514945-large_default/45430.jpg"
},
{
    id:84,
    category:"skirt",
    price:90000,
    discount:57,
    roundShip:66,
    height:45,
    waist:23,
    size:"S",
    type:"    شلوار زنانه  جوتی جینس",
    name:"JootiJeans",
    img:"https://www.banimode.com/442883-large_default/39831.jpg",
    subImg:"https://www.banimode.com/442881-large_default/39831.jpg"
},
{
    id:85,
    name:"LC",
    category:"babyAll",
    size:"X",
    type:"      تیشرت بسرانه ال سی",
    price:699000,
    img:"https://www.banimode.com/467319-large_default/41455.jpg",
    subImg:"https://www.banimode.com/467320-large_default/41455.jpg",
},

{
    id:86,
    price:700000,
    category:"babyAll",
    size:"XS",
    discount:17,
    type:"     جوراب بسرانه فیورلا  ",
    name:"Fiorlla",
    img:"https://www.banimode.com/285226-large_default/27729.jpg",
    subImg:"https://www.banimode.com/285227-large_default/27729.jpg"
},
{
    id:87,
    price:80000,
    category:"babyAll",
    discount:27,
    size:"Xl",
    type:" تیشرت استین کوتاه بسرانه",
    name:"Baleno",
    img:"https://www.banimode.com/476559-large_default/41857.jpg",
    subImg:"https://www.banimode.com/476560-large_default/41857.jpg"
},

{
    id:88,
    price:90000,
    category:"babyAll",
    discount:57,
    size:"S",
    type:"   ست تیشرت وشلوار بسرانه",
    name:"Baleno",
    img:"https://www.banimode.com/483789-large_default/42816.jpg",
    subImg:"https://www.banimode.com/483790-large_default/42816.jpg"
},
{
    id:89,
    name:"jeanwest",
    category:"babyAll",
    size:"X",
    type:"   کاپشن بسرانه جین وست",
    price:699000,
    img:"https://www.banimode.com/412778-large_default/36984.jpg",
    subImg:"https://www.banimode.com/412779-large_default/36984.jpg",
},
{
    id:90,
    price:700000,
    category:"babyAll",
    size:"XS",
    discount:17,
    type:"  کاپشن بسرانه  بالنو",
    name:"Baleno",
    img:"https://www.banimode.com/329346-large_default/31681.jpg",
    subImg:"https://www.banimode.com/329347-large_default/31681.jpg"
},
{
    id:91,
    price:80000,
    category:"babyAll",
    discount:27,
    size:"Xl",
    type:"  کاپشن بسرانه  جوتی جینس",
    name:"JootiJeans",
    img:"https://www.banimode.com/329077-large_default/31746.jpg",
    subImg:"https://www.banimode.com/329078-large_default/31746.jpg"
},
{
    id:92,
    price:90000,
    category:"babyAll",
    discount:57,
    size:"S",
    type:"   کاپشن  بسرانه  جین اسویت",
    name:"jeanwest",
    img:"https://www.banimode.com/340493-large_default/32670.jpg",
    subImg:"https://www.banimode.com/340494-large_default/32670.jpg"
},
{
    id:93,
    name:"LC",
    category:"baby",
    size:"X",
    aroundChest:60,
    height:21,
    waist:45,
    type:"      تیشرت بسرانه ال سی",
    price:699000,
    img:"https://www.banimode.com/467319-large_default/41455.jpg",
    subImg:"https://www.banimode.com/467320-large_default/41455.jpg",
},
 
{
    id:94,
    price:700000,
    category:"baby",
    size:"XS",
    discount:17,
    type:"     جوراب بسرانه فیورلا  ",
    name:"Fiorlla",
    img:"https://www.banimode.com/285226-large_default/27729.jpg",
    subImg:"https://www.banimode.com/285227-large_default/27729.jpg"
},

{
    id:95,
    price:80000,
    category:"baby",
    discount:27,
    size:"Xl",
    aroundChest:33,
    height:90,
    type:" تیشرت استین کوتاه بسرانه",
    name:"Baleno",
    img:"https://www.banimode.com/476559-large_default/41857.jpg",
    subImg:"https://www.banimode.com/476560-large_default/41857.jpg"
},
{
    id:96,
    price:90000,
    category:"baby",
    discount:57,
    size:"S",
    height:45,
    type:"   ست تیشرت وشلوار بسرانه",
    name:"Baleno",
    img:"https://www.banimode.com/483789-large_default/42816.jpg",
    subImg:"https://www.banimode.com/483790-large_default/42816.jpg"
},
{
    id:97,
    name:"jeanwest",
    category:"jacket",
    size:"X",
    height:45,
    type:"   کاپشن بسرانه جین وست",
    price:699000,
    img:"https://www.banimode.com/412778-large_default/36984.jpg",
    subImg:"https://www.banimode.com/412779-large_default/36984.jpg",
},
{
    id:98,
    price:700000,
    category:"jacket",
    size:"XS",
    discount:17,
    height:45,
    type:"  کاپشن بسرانه  بالنو",
    name:"Baleno",
    img:"https://www.banimode.com/329346-large_default/31681.jpg",
    subImg:"https://www.banimode.com/329347-large_default/31681.jpg"
},
{
    id:99,
    price:80000,
    category:"jacket",
    discount:27,
    size:"Xl",
    height:45,
    type:"  کاپشن بسرانه  جوتی جینس",
    name:"JootiJeans",
    img:"https://www.banimode.com/329077-large_default/31746.jpg",
    subImg:"https://www.banimode.com/329078-large_default/31746.jpg"
},
{
    id:100,
    price:90000,
    category:"jacket",
    discount:57,
    size:"S",
    height:45,
    type:"   کاپشن  بسرانه  جین اسویت",
    name:"jeanwest",
    img:"https://www.banimode.com/340493-large_default/32670.jpg",
    subImg:"https://www.banimode.com/340494-large_default/32670.jpg"
},

{
    id:101,
    price:90000,
    category:"theWatch",
    discount:57,
    size:"تک سایز",
    type:" ساعت مچی مردانه ال سی",
    name:"LC",
    img:"https://www.banimode.com/275903-large_default/26989.jpg",
    subImg:"https://www.banimode.com/275906-large_default/26989.jpg"
},

{
    id:102,
    price:90000,
    category:"theWatch",
    discount:27,
    size:"تک سایز",
    type:" ساعت مچی مردانه  فیورلا",
    name:"Fiorlla",
    img:"https://www.banimode.com/245934-large_default/24709.jpg",
    subImg:"https://www.banimode.com/245935-large_default/24709.jpg"
},
{
    id:103,
    price:90000,
    category:"theWatch",
    discount:17,
    size:"تک سایز",
    type:" ساعت مچی مردانه  بالنو",
    name:"Baleno",
    img:"https://www.banimode.com/280968-large_default/27075.jpg",
    subImg:"https://www.banimode.com/275964-large_default/27075.jpg"
},
{
    id:104,
    price:20000,
    category:"typesClothingMale",
    discount:7,
    size:"XL ",
    height:74,
    aroundChest:34,
    type:"     پیراهن کتان مردانه بالنو",
    name:"Baleno",
    img:"https://www.banimode.com/518089-large_default/44470.jpg"        ,
    subImg:"https://www.banimode.com/518083-large_default/44470.jpg"
},
{
    id:105,
    price:22000,
    category:"typesClothingMale",
    discount:8,
    roundShip:66,
    height:87,
    waist:99,
    size:"L ",
    type:"     شلوار کتان مردانه فیورلا",
    name:"Fiorlla",
    img:"https://www.banimode.com/541133-large_default/47136.jpg"        ,
    subImg:"https://www.banimode.com/541134-large_default/47136.jpg"
},

{
    id:106,
    price:22000,
    category:"typesClothingMale",
    discount:18,
    size:"S ",
    roundShip:34,
    height:45,
    waist:67,
    type:"     شلوارک  مردانه ال سی",
    name:"LC",
    img:"https://www.banimode.com/548738-large_default/47698.jpg"        ,
    subImg:"https://www.banimode.com/548740-large_default/47698.jpg"
},


{
    id:107,
    price:25000,
    category:"typesClothingMale",
    discount:28,
    size:"M ",
    aroundChest:60,
    height:21,
    waist:77,
    type:"         تیشرت یقه گرد بالنو",
    name:"Baleno",
    img:"https://www.banimode.com/549827-large_default/47780.jpg"       ,
    subImg:"https://www.banimode.com/549828-large_default/47780.jpg"
},

{
    id:108,
    price:35000,
    category:"typesClothingSports",
    discount:28,
    size:"XS",
    type:"      ست تیشرت و شلوارک ورزشی بالنو",
    name:"Baleno",
    img:    "https://www.banimode.com/529871-large_default/46118.jpg"        ,
    subImg:"https://www.banimode.com/529872-large_default/46118.jpg"
},


{
    id:109,
    price:35000,
    category:"typesClothingSports",
    discount:68,
    size:"Xl",
    aroundChest:60,
    height:21,
    waist:66,
    type:"        سوشیرت  ورزشی ال سی",
    name:"LC",
    img:    "https://www.banimode.com/530165-large_default/46608.jpg"        ,
    subImg:"https://www.banimode.com/530166-large_default/46608.jpg"
},


{
    id:110,
    price:55000,
    category:"typesClothingSports",
    discount:68,
    size:"M",
    aroundChest:80,
    height:71,
    type:"        سوشیرت  ورزشی فیورلا ",
    name:"Fiorlla",
    img:    "https://www.banimode.com/529470-large_default/46269.jpg"      ,
    subImg:"https://www.banimode.com/529471-large_default/46269.jpg"
},


{
    id:111,
    price:65000,
    category:"typesClothingSports",
    discount:68,
    size:"XS",
    type:"        ساک ورزشی  ورزشی فیورلا ",
    name:"Fiorlla",
    img:   "https://www.banimode.com/387446-large_default/33626.jpg"      ,
    subImg:"https://www.banimode.com/387447-large_default/33626.jpg"
},
{
    id:112,
    price:75000,
    category:"typesClothingBaby",
    discount:68,
    size:"L",
    type:" کوله پشتی بچگانه ال سی",
    name:"LC",
    img:   "https://www.banimode.com/412625-large_default/36985.jpg"     ,
    subImg:"https://www.banimode.com/412626-large_default/36985.jpg"
},
{
    id:113,
    price:85000,
    category:"typesClothingBaby",
    discount:28,
    size:"XL",
    type:" ست تیشرت و شلوارک راحتی پسرانه فیورلا",
    name:"Fiorlla",
    img:   "https://www.banimode.com/532176-large_default/46829.jpg"     ,
    subImg:"https://www.banimode.com/532177-large_default/46829.jpg"
},
{
    id:114,
    price:55000,
    category:"typesClothingBaby",
    discount:48,
    size:"L",
    type:" ست تیشرت و سارافون دخترانه بالنو",
    name:"Baleno",
    img:   "https://www.banimode.com/531235-large_default/46451.jpg"    ,
    subImg:"https://www.banimode.com/531236-large_default/46451.jpg"
},

{
    id:115,
    price:75000,
    category:"typesClothingBaby",
    discount:38,
    size:"M",
    aroundChest:60,
    height:21,
    waist:34,
    type:"یراهن دخترانه برندس بالنو",
    name:"Baleno",
    img:   "https://www.banimode.com/520903-large_default/45608.jpg"   ,
    subImg:"https://www.banimode.com/520904-large_default/45608.jpg"
},

{
    id:116,
    name:"Mode",
    category:"typesFamale",
    size:"X",
    height:74,
    type:" کتان زنانه",
    price:49000,
    discount:30,
    img:"https://www.banimode.com/551751-large_default/47974.jpg",
    subImg:"https://www.banimode.com/551750-large_default/47974.jpg"
},
{
    id:117,
    price:70000,
    category:"typesFamale",
    size:"XS",
    discount:47,
    aroundChest:66,
    height:51,
    type:" تیشرت زنانه",
    name:"B4",
    img:"https://www.banimode.com/550999-large_default/47937.jpg",
    subImg:"https://www.banimode.com/551001-large_default/47937.jpg"
},

{
    id:118,
    price:80000,
    category:"typesFamale",
    discount:27,
    size:"Xl",
    aroundChest:20,
    height:28,
    type:" تیشرت زنانه",
    name:"B4",
    img:"https://www.banimode.com/551004-large_default/47937.jpg",
    subImg:"https://www.banimode.com/551005-large_default/47937.jpg"
},
{
    id:119,
    price:90000,
    category:"typesFamale",
    discount:57,
    size:"S",
    aroundChest:10,
    height:81,
    type:" تیشرت زنانه",
    name:"Arnika",
    img:"https://www.banimode.com/551007-large_default/47937.jpg",
    subImg:"https://www.banimode.com/551009-large_default/47937.jpg"
},


  {
    id:120,
    price:90000,
    category:"typesBages",
    discount:57,
    size:"43",
    soleFoot:45.5,
    type:"  کتانی  مردانه جوتی جینز",
    name:"JootiJeans",
    img: " https://www.banimode.com/468645-large_default/41855.jpg",
    subImg:"https://www.banimode.com/468647-large_default/41855.jpg"
},
{
    id:121,
    price:110000,
    category:"typesBages",
    discount:27,
    size:"46",
    soleFoot:75.5,
    type:"      صندل چرم ",
    name:"Lord",
    img:"https://www.banimode.com/508582-large_default/44598.jpg",
    subImg:"https://www.banimode.com/508584-large_default/44598.jpg"
},

{
    id:122,
    price:140000,
    category:"typesBages",
    discount:37,
    size:"46",
    soleFoot:95.5,
    type:"       کفش راحتی زنانه ",
    name:"Eloj",
    img:"https://www.banimode.com/466549-large_default/41529.jpg",
    subImg:"https://www.banimode.com/466551-large_default/41529.jpg"
},


{
    id:123,
    name:"LC",
    category:"typesTshirt",
    size:"X",
    type:"  تیشرت مردانه",
    aroundChest:4,
    height:21,
    discount:27,
    price:90000,
    img:"https://www.banimode.com/537666-large_default/45266.jpg",
    subImg:"https://www.banimode.com/537667-large_default/45266.jpg",
},
{
    id:124,
    name:"Aroma",
    category:"typesTshirt",
    size:"X",
    type:"  تیشرت مردانه",
    aroundChest:60,
    height:31,
    discount:27,
    price:90000,
    img:"https://www.banimode.com/522790-large_default/42364.jpg",
    subImg:"https://www.banimode.com/522791-large_default/42364.jpg",
},
{
    id:125,
    price:70000,
    category:"typesTshirt",
    size:"XS",
    discount:17,
    type:" تیشرت مردانه",
    aroundChest:40,
    height:21,
    name:"Brands",
    img:"https://www.banimode.com/516476-large_default/45191.jpg",
    subImg:"https://www.banimode.com/516477-large_default/45191.jpg"
},
{
    id:126,
    price:70000,
    category:"typesPerfume",
    size:"80",
    discount:17,
    type:"  ست ادوتویلت و اسبری",
    noSize:true,
    name:"LC",
    img:"https://www.banimode.com/496627-large_default/42800.jpg",
    subImg:"https://www.banimode.com/496238-large_default/42800.jpg"
},

{
    id:127,
    price:80000,
    category:"typesPerfume",
    size:"30",
    discount:17,
    type:"    پرفیوم مردانه ",
    noSize:true,
    name:"Aroma",
    img:"https://www.banimode.com/503664-large_default/44254.jpg",
    subImg:"https://www.banimode.com/503665-large_default/44254.jpg"
},
{
    id:128,
    price:120000,
    category:"typesPerfume",
    size:"90",
    discount:17,
    type:"    ادوپرفیوم مردانه ",
    noSize:true,
    name:"Aroma",
    img:"https://www.banimode.com/359999-large_default/34403.jpg",
    subImg:"https://www.banimode.com/360001-large_default/34403.jpg"
},

{
    id:128,
    price:140000,
    category:"typesGame",
    size:"تک سایز",
    discount:17,
    type:"     عروسک و بتو نوزاد ",
    noSize:true,
    name:"Aroma",
    img:  "https://www.banimode.com/340486-large_default/32717.jpg",
    subImg:"https://www.banimode.com/340487-large_default/32717.jpg"
},

{
    id:129,
    price:100000,
    category:"typesGame",
    size:"تک سایز",
    discount:67,
    type:"      مبل بادی   ",
    noSize:true,
    name:"LC",
    img:  "https://www.banimode.com/526728-large_default/46343.jpg",
    subImg:"https://www.banimode.com/526729-large_default/46343.jpg"
},
{
    id:130,
    price:170000,
    category:"typesGame",
    size:"تک سایز",
    discount:27,
    type:"       بازی فکری کابوچین   ",
    noSize:true,
    name:"Aroma",
    img:  "https://www.banimode.com/533252-large_default/46899.jpg",
    subImg:"https://www.banimode.com/533254-large_default/46899.jpg"
},

  {
    id:132,
    price:200000,
    category:"typesCard",
    size:"تک سایز",
    discount:5,
    type:"         کارت ۲۰۰ هزار تومانی   ",
    noSize:true,
    name:"Aroma",
    img:  "https://www.banimode.com/464895-large_default/36609.jpg",
    subImg:"https://www.banimode.com/429450-large_default/36609.jpg"
},

{
    id:133,
    price:30000,
    category:"typesCard",
    size:"تک سایز",
    discount:5,
    type:"         کارت ۳۰۰۰۰ هزار تومانی   ",
    noSize:true,
    name:"LC",
    img:  "https://www.banimode.com/457974-large_default/41013.jpg",
    subImg:"https://www.banimode.com/459647-large_default/41013.jpg"
},
{
    id:134,
    price:500000,
    category:"typesCard",
    size:"تک سایز",
    discount:5,
    type:"         کارت ۵۰۰ هزار تومانی   ",
    noSize:true,
    name:"LC",
    img:  "https://www.banimode.com/464830-large_default/36642.jpg",
    subImg:"https://www.banimode.com/429604-large_default/36642.jpg"
},]
};

app.get('/', (req, res) => {
  res.send('Hello World!');
})


  app.get('/api/products',(req, res) => {
    var category = req.query.category;
    res.json(products.items.filter((item)=>item.category === category));
})
app.get('/api/items',(req, res) => {
    var categoryItem = req.query.categoryItem;
    res.json(products.items.filter((item)=>item.category === categoryItem));
});

app.get('/api/productFind',(req,res)=>{
    var id = req.query.name;
    res.json(products.items.find((item)=>item.id === +id));
})

app.get('/api/register',(req,res)=>{
    var data = {
        username:req.query.username,
        email:req.query.email,
        password:req.query.password,

    }
    users.push(data)
    res.json(data);
})

app.get('/api/login',(req,res)=>{
     var user = users.find((item)=>item.email === req.query.email);
     if(user){
        res.json(user);
     }else{
         res.status(401).send({message:"!!شما ثبت نام  نکرده اید"})
     }
     
  
})

   app.listen(4000, () => {
  console.log(`Example app listening at http://localhost:${4000}`)
})