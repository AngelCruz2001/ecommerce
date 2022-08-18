import { IProduct } from "./Product";
import damianyPP from '../public/damianyPP.png';

export const products: IProduct[] = [
    {
        id: "halfmoon",
        name: "Oni-Cult Anvil",
        price: 25.00,
        image: '/images/oni.png',
        description: "Whenever one or more artifacts you control leave the battlefield during your turn, create a 1/1 colorless Construct artifact creature token. This ability triggers only once each turn.",
        url: '/api/products/halfmoon'
    },
    {
        id: "dragonscale",
        name: "Voldaren Bloodcaster",
        price: 35,
        image: '/images/voldaren.png',
        description: "Whenever Voldaren Bloodcaster or another nontoken creature you control dies, create a Blood token. (It's an artifact with 1, Tap, Discard a card, Sacrifice this artifact: Draw a card.) Whenever you create a Blood token, if you control five or more Blood tokens, transform Voldaren Bloodcaster.",
        url: '/api/products/dragonscale'
    },
    {
        id: "crowntail",
        name: "Voldaren Epicure",
        price: 7.50,
        image:  '/images/epicure.png',
        description: "When Voldaren Epicure enters the battlefield, it deals 1 damage to each opponent. Create a Blood token. (It's an artifact with 1, Tap, Discard a card, Sacrifice this artifact: Draw a card.)",
        url: '/api/products/crowntail'
    },
    {
        id: "veiltail",
        name: "Sol Ring",
        price: 5.00,
        image:  '/images/solring.png',
        description: "Lost to time is the artificer's art of trapping light from a distant star in a ring of purest gold.",
        url: '/api/products/veiltail'
    }
]