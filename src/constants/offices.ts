import { uuidv4 } from "src/utils/uuidv4";

import { CONFIG } from "src/config-global";

const { assetURL } = CONFIG.site;

export const _offices = ['Bangladesh'].map((office, index) => ({
    country: office,
    id: uuidv4(),
    email: 'contact@durrbar.com',
    photoUrl: `${assetURL}/assets/images/travel/travel-${index + 1}.webp`,
    address: 'Barguna Sadar, Barguna - 8700, Bangladesh',
    phoneNumber: '+880 17794-96014',
    position: [
        { lat: 22.16040802001953, lng: 90.12010955810547 },
    ][index],
}));