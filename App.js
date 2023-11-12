import React from "react";
import ReactDOM , {createRoot} from "react-dom/client";
import './index.css';

const Header=()=>{
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"/>
      </div>
      <div className="nav-items">
        <ul>
          <li key="nav-item-1">Home</li>
          <li key="nav-item-2">About</li>
          <li key="nav-item-3">Contact</li>
          <li key="nav-item-4">Cart</li>
        </ul>
      </div>
    </div>
  );
}

const resList=[
  {
      "info": {
          "id": "31803",
          "name": "McDonald's",
          "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
          "locality": "Magnet Mall",
          "areaName": "Bhandup West",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
          ],
          "avgRating": 4.3,
          "feeDetails": {
              "restaurantId": "31803",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 5600
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 5600
          },
          "parentId": "630",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 5.6,
              "serviceability": "SERVICEABLE",
              "slaString": "29 mins",
              "lastMileTravelString": "5.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-13 03:00:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/mcdonalds-magnet-mall-bhandup-west-mumbai-31803",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "433401",
          "name": "KFC",
          "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
          "locality": "LBS Marg",
          "areaName": "Mulund",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Burgers",
              "Biryani",
              "American",
              "Snacks",
              "Fast Food"
          ],
          "avgRating": 4,
          "feeDetails": {
              "restaurantId": "433401",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 6700
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 6700
          },
          "parentId": "547",
          "avgRatingString": "4.0",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 37,
              "lastMileTravel": 5.9,
              "serviceability": "SERVICEABLE",
              "slaString": "37 mins",
              "lastMileTravelString": "5.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-12 23:59:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹101 OFF",
              "subHeader": "ABOVE ₹999",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/kfc-lbs-marg-mulund-mumbai-433401",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "446557",
          "name": "EatFit",
          "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
          "locality": "LBS Marg",
          "areaName": "Near Deep Mandir Cinema",
          "costForTwo": "₹270 for two",
          "cuisines": [
              "Chinese",
              "Healthy Food",
              "Tandoor",
              "Pizzas",
              "North Indian",
              "Thalis",
              "Biryani"
          ],
          "avgRating": 4,
          "feeDetails": {
              "restaurantId": "446557",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4600
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4600
          },
          "parentId": "76139",
          "avgRatingString": "4.0",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 4.4,
              "serviceability": "SERVICEABLE",
              "slaString": "30 mins",
              "lastMileTravelString": "4.4 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-12 23:59:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "brand",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "brand"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "EVERY ITEM",
              "subHeader": "@ ₹149"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/eatfit-lbs-marg-near-deep-mandir-cinema-mumbai-446557",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "25553",
          "name": "Subway",
          "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
          "locality": "Bhandup West",
          "areaName": "Bhandup West",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Salads",
              "Snacks",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.1,
          "feeDetails": {
              "restaurantId": "25553",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4600
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4600
          },
          "parentId": "2",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 40,
              "lastMileTravel": 4.4,
              "serviceability": "SERVICEABLE",
              "slaString": "40 mins",
              "lastMileTravelString": "4.4 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-13 04:00:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/subway-bhandup-west-mumbai-25553",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "62969",
          "name": "LunchBox - Meals and Thalis",
          "cloudinaryImageId": "ig9khpdtki3yprefjzci",
          "locality": "Gamdevi Road",
          "areaName": "Bhandup West",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Biryani",
              "North Indian",
              "Punjabi",
              "Healthy Food",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.3,
          "feeDetails": {
              "restaurantId": "62969",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4600
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4600
          },
          "parentId": "4925",
          "avgRatingString": "4.3",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 4.7,
              "serviceability": "SERVICEABLE",
              "slaString": "34 mins",
              "lastMileTravelString": "4.7 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-12 23:59:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-gamdevi-road-bhandup-west-mumbai-62969",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "32928",
          "name": "Chaayos Chai+Snacks=Relax",
          "cloudinaryImageId": "cace805a6ba74137571d0f7ac92302b1",
          "locality": "Runwal Galleria",
          "areaName": "Bhandup West",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Bakery",
              "Beverages",
              "Chaat",
              "Desserts",
              "Fast Food",
              "Home Food",
              "Italian",
              "Maharashtrian",
              "Snacks",
              "Street Food",
              "Sweets"
          ],
          "avgRating": 4.5,
          "feeDetails": {
              "restaurantId": "32928",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4600
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4600
          },
          "parentId": "281782",
          "avgRatingString": "4.5",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "26 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-12 23:00:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-runwal-galleria-bhandup-west-mumbai-32928",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "103822",
          "name": "Starbucks Coffee",
          "cloudinaryImageId": "4df3497f1460dfd1ecd8125222f6d362",
          "locality": "Runwal Greens",
          "areaName": "Bhandup West",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Beverages",
              "Cafe",
              "Snacks",
              "Desserts",
              "Bakery",
              "Ice Cream"
          ],
          "avgRating": 4.4,
          "feeDetails": {
              "restaurantId": "103822",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 5500
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 5500
          },
          "parentId": "195515",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-12 23:30:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/starbucks-coffee-runwal-greens-bhandup-west-mumbai-103822",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "355640",
          "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
          "cloudinaryImageId": "gpp3oewslszcysvgwylx",
          "locality": "Mulund",
          "areaName": "Mulund West",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "Desserts",
              "Ice Cream",
              "Ice Cream Cakes"
          ],
          "avgRating": 4.6,
          "veg": true,
          "feeDetails": {
              "restaurantId": "355640",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3500
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3500
          },
          "parentId": "582",
          "avgRatingString": "4.6",
          "totalRatingsString": "500+",
          "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 2.8,
              "serviceability": "SERVICEABLE",
              "slaString": "28 mins",
              "lastMileTravelString": "2.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-12 21:35:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-mulund-mulund-west-mumbai-355640",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "28282",
          "name": "Chinese Wok",
          "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
          "locality": "Vishal Industries",
          "areaName": "Bhandup West",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Chinese",
              "Asian",
              "Tibetan",
              "Desserts"
          ],
          "avgRating": 3.8,
          "feeDetails": {
              "restaurantId": "28282",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4600
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4600
          },
          "parentId": "61955",
          "avgRatingString": "3.8",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "26 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-13 01:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/chinese-wok-vishal-industries-bhandup-west-mumbai-28282",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "53465",
          "name": "Natural Ice Cream",
          "cloudinaryImageId": "jmldvp1om59ktb9alwyv",
          "locality": "Building1,LBS Marg, Bhandup West",
          "areaName": "Bhandup West",
          "costForTwo": "₹150 for two",
          "cuisines": [
              "Ice Cream",
              "Desserts"
          ],
          "avgRating": 4.7,
          "veg": true,
          "feeDetails": {
              "restaurantId": "53465",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4600
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4600
          },
          "parentId": "2093",
          "avgRatingString": "4.7",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 4,
              "serviceability": "SERVICEABLE",
              "slaString": "24 mins",
              "lastMileTravelString": "4.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-12 23:59:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/natural-ice-cream-building1-lbs-marg-bhandup-west-mumbai-53465",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "19972",
          "name": "Burger King",
          "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "locality": "Rcity",
          "areaName": "Ghatkopar West",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Burgers",
              "American"
          ],
          "avgRating": 3.9,
          "feeDetails": {
              "restaurantId": "19972",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 9200
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 9200
          },
          "parentId": "166",
          "avgRatingString": "3.9",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 65,
              "lastMileTravel": 8.3,
              "serviceability": "SERVICEABLE",
              "slaString": "65 mins",
              "lastMileTravelString": "8.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-13 02:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/burger-king-rcity-ghatkopar-west-mumbai-19972",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "51059",
          "name": "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
          "cloudinaryImageId": "lwzpsqobzrh3mnfhiask",
          "locality": "Mulund West",
          "areaName": "Mulund West",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Beverages",
              "Desserts",
              "Ice Cream",
              "Waffle",
              "Bakery",
              "Healthy Food"
          ],
          "avgRating": 4.2,
          "veg": true,
          "feeDetails": {
              "restaurantId": "51059",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 5500
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 5500
          },
          "parentId": "5655",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "30 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-13 02:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/frozen-bottle-milkshakes-desserts-and-ice-cream-mulund-west-mumbai-51059",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "340130",
          "name": "Mad Over Donuts",
          "cloudinaryImageId": "cb2d8de369beca1ba66323499bcfb167",
          "locality": "Gamdevi Road",
          "areaName": "Bhandup West",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Desserts",
              "Sweets",
              "Bakery"
          ],
          "avgRating": 4.4,
          "veg": true,
          "feeDetails": {
              "restaurantId": "340130",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 5500
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 5500
          },
          "parentId": "611",
          "avgRatingString": "4.4",
          "totalRatingsString": "500+",
          "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 4.7,
              "serviceability": "SERVICEABLE",
              "slaString": "33 mins",
              "lastMileTravelString": "4.7 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-12 23:59:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/mad-over-donuts-gamdevi-road-bhandup-west-mumbai-340130",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "5170",
          "name": "Theobroma",
          "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
          "locality": "Parksite",
          "areaName": "Vikhroli West",
          "costForTwo": "₹800 for two",
          "cuisines": [
              "Bakery",
              "Desserts"
          ],
          "avgRating": 4.6,
          "feeDetails": {
              "restaurantId": "5170",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 9800
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 9800
          },
          "parentId": "1040",
          "avgRatingString": "4.6",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 40,
              "lastMileTravel": 8.4,
              "serviceability": "SERVICEABLE",
              "slaString": "40 mins",
              "lastMileTravelString": "8.4 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-13 00:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/theobroma-parksite-vikhroli-west-mumbai-5170",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "14341",
          "name": "Cafe Coffee Day",
          "cloudinaryImageId": "b70c7d23d197251b7b315b7e4d8173ae",
          "locality": "Lrishnai Appartment",
          "areaName": "Mulund East",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Beverages",
              "Cafe",
              "Snacks",
              "Desserts",
              "Burgers",
              "Ice Cream",
              "Bakery",
              "Fast Food"
          ],
          "avgRating": 4.2,
          "feeDetails": {
              "restaurantId": "14341",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4600
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4600
          },
          "parentId": "1",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 4.2,
              "serviceability": "SERVICEABLE",
              "slaString": "33 mins",
              "lastMileTravelString": "4.2 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-12 23:45:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹699",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/cafe-coffee-day-lrishnai-appartment-mulund-east-mumbai-14341",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "27414",
          "name": "Pizza Hut",
          "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
          "locality": "Thane West",
          "areaName": "Thane West",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "Pizzas"
          ],
          "avgRating": 3.6,
          "feeDetails": {
              "restaurantId": "27414",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 9600
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 9600
          },
          "parentId": "721",
          "avgRatingString": "3.6",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 58,
              "lastMileTravel": 9,
              "serviceability": "SERVICEABLE",
              "slaString": "58 mins",
              "lastMileTravelString": "9.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-12 23:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹151 OFF",
              "subHeader": "ABOVE ₹499",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/pizza-hut-thane-west-mumbai-27414",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "30340",
          "name": "Faasos - Wraps & Rolls",
          "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
          "locality": "Gamdevi Road",
          "areaName": "Bhandup West",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Kebabs",
              "Fast Food",
              "Snacks",
              "North Indian",
              "American",
              "Healthy Food",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.2,
          "feeDetails": {
              "restaurantId": "30340",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4600
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4600
          },
          "parentId": "21809",
          "avgRatingString": "4.2",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 37,
              "lastMileTravel": 4.7,
              "serviceability": "SERVICEABLE",
              "slaString": "37 mins",
              "lastMileTravelString": "4.7 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-12 23:59:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-gamdevi-road-bhandup-west-mumbai-30340",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "7880",
          "name": "FreshMenu",
          "cloudinaryImageId": "6c4de7b481d3614370e5062b2f33e7d6",
          "locality": "Powai",
          "areaName": "Vikhroli West",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Continental",
              "Chinese",
              "Oriental",
              "Asian",
              "Healthy Food",
              "Fast Food",
              "Indian",
              "Desserts"
          ],
          "avgRating": 4.1,
          "feeDetails": {
              "restaurantId": "7880",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 9200
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 9200
          },
          "parentId": "398",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 47,
              "lastMileTravel": 8.2,
              "serviceability": "SERVICEABLE",
              "slaString": "47 mins",
              "lastMileTravelString": "8.2 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-12 23:00:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "EVERY ITEM",
              "subHeader": "@ ₹129"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/freshmenu-powai-vikhroli-west-mumbai-7880",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "156396",
          "name": "The Good Bowl",
          "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
          "locality": "Gamdevi Road",
          "areaName": "Bhandup West",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Biryani",
              "North Indian",
              "Pastas",
              "Punjabi",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.2,
          "feeDetails": {
              "restaurantId": "156396",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4600
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4600
          },
          "parentId": "7918",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 42,
              "lastMileTravel": 4.7,
              "serviceability": "SERVICEABLE",
              "slaString": "42 mins",
              "lastMileTravelString": "4.7 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-12 23:59:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/the-good-bowl-gamdevi-road-bhandup-west-mumbai-156396",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "41571",
          "name": "Hangout Cakes & More",
          "cloudinaryImageId": "51f9c55884b15013b2c8582505a1ee4f",
          "locality": "Lal Bahadur Shastri Marg,Mulund",
          "areaName": "Mulund West",
          "costForTwo": "₹150 for two",
          "cuisines": [
              "Desserts",
              "Bakery"
          ],
          "avgRating": 4.3,
          "veg": true,
          "feeDetails": {
              "restaurantId": "41571",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 5700
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 5700
          },
          "parentId": "4508",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 21,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "21 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-12 23:59:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹249",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/hangout-cakes-and-more-lal-bahadur-shastri-marg-mulund-mulund-west-mumbai-41571",
          "type": "WEBLINK"
      }
  }
]
const Card=(props)=>{
  const {resData}=props;
  const {name,cuisines,avgRating}=resData?.info;
  return (
  <div className="res-card">
    <img className="img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}/>
    <h3>{name}</h3>
    <h4>{cuisines.join(", ")}</h4>
    <h5><i class="fa-solid fa-star"></i>{avgRating}</h5>
    <h5>{resData.info.sla.deliveryTime} minutes</h5>
  </div>
  );
}
const Body=()=>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
       { resList.map((rest)=>(<Card resData={rest} />))}
      </div>
    </div>
  );
};

const AppLayout=()=>{
  return(
    <>
    <Header/>
    <Body/>
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
