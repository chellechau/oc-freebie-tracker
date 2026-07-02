// OC Freebie Tracker — Birthday freebies & discounts (Orange County, CA)
// timing: "day" (birthday only) | "week" (window around birthday) | "month" (all birth month)
// kind:   "free" (free item, possibly with purchase) | "deal" (discount/BOGO)
// Nearly all require joining the free rewards program / email club BEFORE your birthday.
window.BIRTHDAY_DATA = [

// ---- Coffee & drinks ----
{biz:"Starbucks",offer:"Free handcrafted drink or food item on your birthday",timing:"day",req:"Starbucks Rewards; must have used the account before",oc:"Everywhere",cats:["coffee"],kind:"free"},
{biz:"Philz Coffee",offer:"Buy-one-get-one-free drink, valid 7 days starting on your birthday",timing:"week",req:"Philz app; needs at least one prior visit logged",oc:"Check app for nearest OC/LB locations",cats:["coffee"],kind:"deal"},
{biz:"Dutch Bros",offer:"Free drink of any size on your birthday",timing:"day",req:"Dutch Rewards app",oc:"Fullerton, Orange, HB + growing",cats:["coffee","drinks"],kind:"free"},
{biz:"Peet's Coffee",offer:"Free beverage during your birthday window",timing:"week",req:"Peetnik Rewards",oc:"Irvine, Costa Mesa, Newport",cats:["coffee"],kind:"free"},
{biz:"The Coffee Bean & Tea Leaf",offer:"Free birthday drink",timing:"week",req:"Rewards app",oc:"Countywide",cats:["coffee"],kind:"free"},
{biz:"Dunkin'",offer:"Birthday reward (free drink or 3x points, varies)",timing:"day",req:"Dunkin' Rewards",oc:"Countywide",cats:["coffee","donut"],kind:"free"},
{biz:"Jamba",offer:"Free small smoothie for your birthday",timing:"week",req:"Jamba Rewards",oc:"Countywide",cats:["drinks"],kind:"free"},
{biz:"Nekter Juice Bar",offer:"Free birthday drink reward (OC original, HQ Santa Ana)",timing:"week",req:"Nekter app",oc:"Countywide",cats:["drinks"],kind:"free"},
{biz:"Juice It Up!",offer:"Free birthday reward (Irvine-based chain)",timing:"week",req:"App",oc:"Countywide",cats:["drinks"],kind:"free"},
{biz:"Smoothie King",offer:"Birthday reward via app",timing:"week",req:"Healthy Rewards app",oc:"Multiple OC",cats:["drinks"],kind:"free"},
{biz:"7-Eleven",offer:"Free Slurpee (plus birthday surprise offers)",timing:"day",req:"7Rewards app",oc:"Everywhere",cats:["drinks","icecream"],kind:"free"},

// ---- Donuts, bakery & sweets ----
{biz:"Krispy Kreme",offer:"Free doughnut AND drink of choice on your birthday",timing:"day",req:"Krispy Kreme Rewards",oc:"Santa Ana, Orange, Buena Park",cats:["donut"],kind:"free"},
{biz:"Duck Donuts",offer:"Free birthday donut",timing:"week",req:"Rewards app",oc:"Check current OC locations",cats:["donut"],kind:"free"},
{biz:"Porto's Bakery",offer:"Birthday offer (% off) during your birth month via their email list; rewards program includes a birthday gift",timing:"month",req:"Email signup / Bake-at-Home Rewards; details vary",oc:"Buena Park (worth the line)",cats:["dessert","breakfast"],kind:"deal"},
{biz:"85°C Bakery Cafe",offer:"Birthday reward (free cake slice or drink, varies) — Irvine-born US HQ",timing:"month",req:"App",oc:"Irvine, Fountain Valley, Garden Grove",cats:["dessert","coffee"],kind:"free"},
{biz:"Paris Baguette",offer:"Free pastry-tier birthday reward",timing:"week",req:"PB Rewards app",oc:"Irvine, Buena Park, Fullerton + more",cats:["dessert","breakfast"],kind:"free"},
{biz:"Sprinkles Cupcakes",offer:"Free cupcake (higher loyalty tiers get more — top tier gets a baker's dozen!)",timing:"week",req:"Sprinkles Perks",oc:"Newport Beach (home of the Cupcake ATM), Brea, DTD",cats:["dessert"],kind:"free"},
{biz:"Nothing Bundt Cakes",offer:"Free Bundtlet for your birthday",timing:"week",req:"Email club",oc:"Orange, Irvine, HB, Laguna Niguel + more",cats:["dessert"],kind:"free"},
{biz:"Insomnia Cookies",offer:"Free classic cookie on your birthday",timing:"day",req:"Rewards account",oc:"Fullerton + newer locations",cats:["dessert"],kind:"free"},
{biz:"Crumbl",offer:"Birthday reward via app",timing:"day",req:"Crumbl app",oc:"Countywide",cats:["dessert"],kind:"free"},
{biz:"Great American Cookies",offer:"Free Cookie Cake slice for your birthday",timing:"week",req:"Rewards app",oc:"Check current OC mall locations",cats:["dessert"],kind:"free"},
{biz:"Wetzel's Pretzels",offer:"Free birthday pretzel (SoCal original)",timing:"week",req:"Wetzel's app",oc:"Brea, Costa Mesa, Anaheim, Westminster",cats:["snack"],kind:"free"},
{biz:"Auntie Anne's",offer:"Free pretzel birthday reward",timing:"week",req:"Rewards app",oc:"Brea Mall, MainPlace, Irvine Spectrum, Mission Viejo",cats:["snack"],kind:"free"},
{biz:"See's Candies",offer:"No formal program, but free samples are a way of life — and email club members get occasional birthday treats",timing:"month",req:"Email list",oc:"Mission Viejo, Brea, HB, Orange",cats:["dessert"],kind:"free"},

// ---- Ice cream & frozen ----
{biz:"Baskin-Robbins",offer:"Free scoop for your birthday",timing:"day",req:"Birthday Club / app",oc:"Countywide",cats:["icecream"],kind:"free"},
{biz:"Cold Stone Creamery",offer:"BOGO creation birthday reward",timing:"week",req:"My Cold Stone Club",oc:"Countywide",cats:["icecream"],kind:"deal"},
{biz:"Handel's Homemade Ice Cream",offer:"Birthday reward (free/discounted scoop)",timing:"week",req:"Sweet Rewards app",oc:"HB, Yorba Linda, Ladera Ranch, RSM",cats:["icecream"],kind:"free"},
{biz:"Yogurtland",offer:"$5 birthday reward (Irvine HQ)",timing:"week",req:"Real Rewards app",oc:"Countywide",cats:["icecream"],kind:"free"},
{biz:"Menchie's",offer:"$5 birthday reward",timing:"week",req:"mySmileage app",oc:"Foothill Ranch, Yorba Linda",cats:["icecream"],kind:"free"},
{biz:"Pinkberry",offer:"Free birthday yogurt",timing:"week",req:"Pinkcard app",oc:"Check current OC locations",cats:["icecream"],kind:"free"},
{biz:"Dairy Queen",offer:"BOGO Blizzard birthday reward",timing:"week",req:"DQ Rewards app",oc:"Orange, Santa Ana, Garden Grove, La Habra",cats:["icecream"],kind:"deal"},

// ---- Breakfast & diners ----
{biz:"Denny's",offer:"FREE Original Grand Slam on your actual birthday",timing:"day",req:"Photo ID; dine-in; participating locations",oc:"Countywide",cats:["breakfast","meal"],kind:"free"},
{biz:"IHOP",offer:"Free pancakes birthday reward",timing:"day",req:"International Bank of Pancakes rewards",oc:"Countywide",cats:["breakfast"],kind:"free"},
{biz:"Black Bear Diner",offer:"Free birthday entrée reward (varies)",timing:"week",req:"Bear Club e-club",oc:"La Habra, Orange — verify current",cats:["breakfast","meal"],kind:"free"},
{biz:"Marie Callender's",offer:"Birthday treat via e-club (free pie slice or entrée offer)",timing:"month",req:"Email club",oc:"OC-founded; multiple locations",cats:["meal","dessert"],kind:"free"},
{biz:"Polly's Pies",offer:"Birthday reward via Polly's Perks",timing:"week",req:"App/email club",oc:"Los Alamitos, Fullerton, HB, Laguna Hills",cats:["meal","dessert"],kind:"free"},
{biz:"Mimi's Café",offer:"Free birthday treat via e-club (founded in Anaheim!)",timing:"week",req:"Email club",oc:"Check current OC locations",cats:["breakfast","meal"],kind:"free"},
{biz:"Einstein Bros. Bagels",offer:"Free egg sandwich birthday reward",timing:"week",req:"Shmear Society",oc:"Irvine, Tustin, Mission Viejo",cats:["breakfast"],kind:"free"},
{biz:"Panera Bread",offer:"Free sweet treat for your birthday",timing:"week",req:"MyPanera",oc:"Countywide",cats:["dessert","breakfast"],kind:"free"},

// ---- Burgers & fast food ----
{biz:"Red Robin",offer:"FREE gourmet burger, good all birthday month",timing:"month",req:"Royalty program; small purchase may be required",oc:"Anaheim Hills, Tustin, Laguna Hills",cats:["burger"],kind:"free"},
{biz:"The Habit Burger Grill",offer:"Free Charburger birthday reward (SoCal chain)",timing:"week",req:"CharClub app",oc:"Irvine, Costa Mesa, Anaheim + more",cats:["burger"],kind:"free"},
{biz:"Farmer Boys",offer:"Free burger birthday reward",timing:"week",req:"Very Important Farmer app",oc:"Anaheim, Santa Ana, Fullerton",cats:["burger"],kind:"free"},
{biz:"Shake Shack",offer:"Free shake birthday reward",timing:"week",req:"Shack app",oc:"Irvine Spectrum, Costa Mesa (17th St)",cats:["burger","icecream"],kind:"free"},
{biz:"Carl's Jr.",offer:"Birthday reward via app (founded in Anaheim)",timing:"week",req:"My Rewards app",oc:"Countywide",cats:["burger"],kind:"free"},
{biz:"Jack in the Box",offer:"Birthday reward via app (often free tacos or dessert)",timing:"week",req:"Jack Pack app",oc:"Countywide",cats:["burger","mexican"],kind:"free"},
{biz:"Sonic Drive-In",offer:"Birthday treat reward via app",timing:"week",req:"Sonic app",oc:"Anaheim, La Habra, Lake Forest",cats:["burger","icecream"],kind:"free"},
{biz:"Portillo's",offer:"Free piece of famous chocolate cake for your birthday",timing:"week",req:"Portillo's Perks",oc:"Buena Park",cats:["dessert","meal"],kind:"free"},
{biz:"Dog Haus",offer:"Birthday reward via app",timing:"week",req:"Haus Rewards",oc:"Check current OC locations",cats:["meal"],kind:"free"},
{biz:"In-N-Out",offer:"Nothing — In-N-Out has no rewards program and never discounts. (The not-so-secret menu is free to order year-round, though.)",timing:"day",req:"Just an FYI so you don't go looking",oc:"Countywide",cats:["burger"],kind:"free"},

// ---- Chicken & wings ----
{biz:"Raising Cane's",offer:"Free Box Combo for your birthday",timing:"day",req:"Caniac Club card/app",oc:"Costa Mesa, Orange, Fullerton, Irvine",cats:["meal"],kind:"free"},
{biz:"Chick-fil-A",offer:"Birthday reward (free treat, varies by tier — often a cookie or brownie)",timing:"month",req:"Chick-fil-A One app",oc:"Countywide",cats:["dessert","meal"],kind:"free"},
{biz:"Buffalo Wild Wings",offer:"Free wings birthday reward",timing:"week",req:"Blazin' Rewards",oc:"Brea, Anaheim, Irvine, HB",cats:["meal"],kind:"free"},
{biz:"Dave's Hot Chicken",offer:"Free slider birthday reward",timing:"week",req:"App",oc:"Anaheim, Irvine, Santa Ana",cats:["meal"],kind:"free"},
{biz:"El Pollo Loco",offer:"Birthday reward via Loco Rewards (HQ Costa Mesa)",timing:"week",req:"App",oc:"Countywide",cats:["meal","mexican"],kind:"free"},

// ---- Mexican ----
{biz:"Chipotle",offer:"Free chips & guac with purchase for your birthday (HQ Newport Beach)",timing:"day",req:"Chipotle Rewards; purchase required",oc:"Countywide",cats:["mexican"],kind:"free"},
{biz:"Del Taco",offer:"Free premium shake birthday reward",timing:"week",req:"Del Yeah! Rewards",oc:"Countywide",cats:["mexican","icecream"],kind:"free"},
{biz:"Taco Bell",offer:"Free Mtn Dew Baja Blast Freeze birthday reward (HQ Irvine)",timing:"week",req:"Taco Bell Rewards",oc:"Countywide",cats:["mexican","drinks"],kind:"free"},
{biz:"Rubio's",offer:"Free birthday entrée reward",timing:"week",req:"Rubio's Rewards",oc:"Irvine, Tustin, HB, Laguna Niguel",cats:["mexican"],kind:"free"},
{biz:"Baja Fresh",offer:"Free birthday burrito",timing:"week",req:"Club Baja",oc:"Check current OC locations",cats:["mexican"],kind:"free"},

// ---- Pizza & Italian ----
{biz:"BJ's Restaurant & Brewhouse",offer:"FREE Pizookie for your birthday (HQ Huntington Beach)",timing:"week",req:"Premier Rewards",oc:"HB, Irvine, Brea, Laguna Hills",cats:["pizza","dessert"],kind:"free"},
{biz:"Blaze Pizza",offer:"Free birthday reward via app (SoCal-born)",timing:"week",req:"Blaze Rewards",oc:"Irvine, Costa Mesa, Anaheim, Brea",cats:["pizza"],kind:"free"},
{biz:"MOD Pizza",offer:"Birthday reward via app",timing:"week",req:"MOD Rewards",oc:"Tustin, Lake Forest, HB",cats:["pizza"],kind:"free"},
{biz:"Pieology",offer:"Birthday reward via app (founded in OC)",timing:"week",req:"Pie Life Rewards",oc:"Multiple OC",cats:["pizza"],kind:"free"},
{biz:"California Pizza Kitchen",offer:"Free birthday dessert",timing:"week",req:"CPK Rewards",oc:"Countywide malls",cats:["pizza","dessert"],kind:"free"},
{biz:"Buca di Beppo",offer:"Free pasta birthday reward",timing:"week",req:"eClub",oc:"Huntington Beach — verify current",cats:["meal"],kind:"free"},

// ---- Sandwiches ----
{biz:"Jersey Mike's",offer:"Free regular sub + drink for your birthday",timing:"day",req:"Shore Points app",oc:"Countywide",cats:["burger"],kind:"free"},
{biz:"Firehouse Subs",offer:"Free birthday sub reward",timing:"week",req:"Firehouse Rewards",oc:"Orange, Tustin, HB",cats:["burger"],kind:"free"},
{biz:"Subway",offer:"Birthday reward (free cookie or footlong discount)",timing:"week",req:"MVP Rewards",oc:"Countywide",cats:["burger"],kind:"free"},
{biz:"Ike's Love & Sandwiches",offer:"Free birthday sandwich with drink purchase",timing:"day",req:"Ike's app",oc:"Costa Mesa, Fullerton",cats:["burger"],kind:"free"},
{biz:"Potbelly",offer:"Free birthday perk (cookie/shake tier reward)",timing:"week",req:"Potbelly Perks",oc:"Tustin, Irvine — verify current",cats:["burger"],kind:"free"},

// ---- Sit-down & dinner ----
{biz:"Applebee's",offer:"Free birthday dessert",timing:"day",req:"Club Applebee's email",oc:"Brea, La Habra, Laguna Hills",cats:["meal","dessert"],kind:"free"},
{biz:"Chili's",offer:"Free birthday dessert",timing:"week",req:"My Chili's Rewards",oc:"Anaheim, Irvine, HB, Mission Viejo",cats:["meal","dessert"],kind:"free"},
{biz:"Olive Garden",offer:"Free birthday dessert",timing:"day",req:"eClub; dine-in",oc:"Countywide",cats:["meal","dessert"],kind:"free"},
{biz:"Outback Steakhouse",offer:"Free birthday dessert (Dine Rewards)",timing:"week",req:"Dine Rewards",oc:"Buena Park, Irvine, Laguna Hills",cats:["meal","dessert"],kind:"free"},
{biz:"Texas Roadhouse",offer:"Free appetizer or sidekick of ribs for your birthday",timing:"week",req:"Email club",oc:"Irvine — verify current",cats:["meal"],kind:"free"},
{biz:"Lazy Dog Restaurant",offer:"Birthday reward (HQ Costa Mesa)",timing:"week",req:"Lazy Dog Beer Club/email",oc:"HB, Irvine, Brea, Orange",cats:["meal"],kind:"free"},
{biz:"Benihana",offer:"$30 birthday certificate, valid your entire birthday month (dinner Mon–Thu, with $30 min purchase); kids get a free souvenir mug via Kabuki Kids",timing:"month",req:"Register for The Chef's Table (free)",oc:"Anaheim, Newport Beach",cats:["meal"],kind:"deal"},
{biz:"KPOT Korean BBQ & Hot Pot",offer:"Birthday free-meal promo (conditions apply — usually with a group of paying guests)",timing:"day",req:"Valid ID; confirm terms with location",oc:"Check current OC locations",cats:["meal"],kind:"free"},
{biz:"Gen Korean BBQ",offer:"No official birthday discount — but they bring a free pineapple plate with a candle and sing to you",timing:"day",req:"Just tell your server",oc:"Multiple OC locations",cats:["meal"],kind:"free"},
{biz:"Kei Concepts (Súp, VOX, Nếp, KIN, RÓL…)",offer:"Kei Rewards ('Kei Coins') members get perks & occasional birthday surprises — worth joining since you're regulars",timing:"month",req:"Kei Rewards app; birthday perk varies",oc:"Fountain Valley, Buena Park, Irvine, Garden Grove, South Coast Plaza",cats:["meal"],kind:"free"},

// ---- Experiences (because it's OC) ----
{biz:"Medieval Times",offer:"FREE admission for the birthday person with purchase of one full-price adult admission — valid all birth month + 7 days after",timing:"month",req:"Free Birthday Fellowship signup; proof of birthday",oc:"Buena Park castle",cats:["other","meal"],kind:"free"},
{biz:"Disneyland",offer:"Free 'Happy Birthday' button at City Hall or any shop — cast members will celebrate you all day (the closest thing to a Disney freebie)",timing:"day",req:"Park admission required, obviously",oc:"Anaheim",cats:["other"],kind:"free"},
{biz:"Dave & Buster's",offer:"Free game-play birthday reward",timing:"week",req:"Rewards app",oc:"Irvine Spectrum",cats:["other"],kind:"free"}
];
