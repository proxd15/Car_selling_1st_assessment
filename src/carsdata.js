const carsdata = [
    
    { 
        id:1,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg",
        name: "Mazda MX-5",
        "start_production": 1989,
        "class": "Sports car Roadster"
    },
    { 
        id:2,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Kuebelwagen_1.jpg/400px-VW_Kuebelwagen_1.jpg",
        name: "Volkswagen Kübelwagen",
        "class": "Military vehicle"
    },
    { 
        id:3,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg/400px-2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg",
        name: "Porsche Cayenne",
        "start_production": 2002,
        "class": "Mid-size luxury crossover SUV"
    },
    { 
        id:4,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG/400px-Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG",
        name: "Vauxhall Chevette",
        "start_production": 1975,
        "class": "Supermini"
    },
    { 
        id:5,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Dynamixion_car_by_Buckminster_Fuller_1933_%28side_views%29.jpg/400px-Dynamixion_car_by_Buckminster_Fuller_1933_%28side_views%29.jpg",
        name: "Dymaxion car",
        "start_production": 1933,
        "class": "Concept car"
    },
    { 
        id:6,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ford_Crown_Victoria_LX.jpg/400px-Ford_Crown_Victoria_LX.jpg",
        name: "Ford Crown Victoria",
        "start_production": 1955,
        "class": "Full-size Ford"
    },
    { 
        id:7,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Plymouth_Superbird.jpg/400px-Plymouth_Superbird.jpg",
        name: "Plymouth Superbird",
        "start_production": 1970,
        "class": "Muscle car(today) and Race car(Past)"
    },
    { 
        id:8,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/2nd-Saab-9000-hatch.jpg/400px-2nd-Saab-9000-hatch.jpg",
        name: "Saab 9000",
        "start_production": 1984,
        "class": "Executive car"
    },
    { 
        id:9,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2003-2005_Pontiac_Sunfire.jpg/400px-2003-2005_Pontiac_Sunfire.jpg",
        name: "Pontiac Sunfire",
        "start_production": 1994,
        "class": "Compact"
    },
    { 
        id:10,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/1971_AMC_Javelin_SST_red_Kenosha_street.JPG/400px-1971_AMC_Javelin_SST_red_Kenosha_street.JPG",
        name: "AMC Javelin",
        "start_production": 1967,
        "class": "{ id:{ id:Unbulleted list| Pony car | Muscle car },},"
    },
    { id:11,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Jaguar_X-Type_Estate_front_20080731.jpg/400px-Jaguar_X-Type_Estate_front_20080731.jpg",
        name: "Jaguar X-Type",
        "start_production": 2001,
        "class": "Compact executive car"
    },
    { id:12,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Phaton_%282._Facelift%29_%E2%80%93_Frontansicht%2C_7._Mai_2011%2C_D%C3%BCsseldorf.jpg/400px-VW_Phaton_%282._Facelift%29_%E2%80%93_Frontansicht%2C_7._Mai_2011%2C_D%C3%BCsseldorf.jpg",
        name: "Volkswagen Phaeton",
        "start_production": 2002,
        "class": "Full-size luxury car"
    },
    { id:13,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Pontiac_G6.jpg/400px-Pontiac_G6.jpg",
        name: "Pontiac G6",
        "start_production": 2004,
        "class": "Midsize"
    },
    { id:14,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Ford500a.JPG/400px-Ford500a.JPG",
        name: "Ford Five Hundred",
        "start_production": 2004,
        "class": "Full-size"
    },
    { id:15,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/PontiacSolstice.jpg/400px-PontiacSolstice.jpg",
        name: "Pontiac Solstice",
        "start_production": 2005,
        "class": "Roadster, coupe"
    },
    { id:16,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Fiat_tipo_f.jpg/400px-Fiat_tipo_f.jpg",
        name: "Fiat Tipo",
        "start_production": 1988,
        "class": "Small family car"
    },
    { id:17,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/1985-89_Plymouth_Reliant_K_LE.png/400px-1985-89_Plymouth_Reliant_K_LE.png",
        name: "Plymouth Reliant",
        "start_production": 1981,
        "class": "Mid-size"
    },
    { id:18,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/1978_chevette.JPG/400px-1978_chevette.JPG",
        name: "Chevrolet Chevette",
        "start_production": 1975,
        "class": "Subcompact"
    },
    { id:19,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Seat_Leon_1.4_TSI_Start%26Stop_Style_%28III%29_%E2%80%93_Frontansicht%2C_10._August_2013%2C_Ratingen.jpg/400px-Seat_Leon_1.4_TSI_Start%26Stop_Style_%28III%29_%E2%80%93_Frontansicht%2C_10._August_2013%2C_Ratingen.jpg",
        name: "SEAT León",
        "class": "Small family car"
    },
    { id:20,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Chevrolet_Corsica_1994.jpg/400px-Chevrolet_Corsica_1994.jpg",
        name: "Chevrolet Corsica",
        "start_production": 1987,
        "class": "Compact car"
    },
    { id:21,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/1992_MX3_V6_24V.jpg/400px-1992_MX3_V6_24V.jpg",
        name: "Mazda MX-3",
        "start_production": 1991,
        "class": "Sport compact"
    },
    { id:22,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/2000_TVR_Tuscan_4.0_Speed_Six_by_The_Car_Spy.jpg/400px-2000_TVR_Tuscan_4.0_Speed_Six_by_The_Car_Spy.jpg",
        name: "TVR Tuscan Speed Six",
        "start_production": 1999,
        "class": "Sports car"
    },
    { id:23,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Aston_Martin_DB9_coupe_02.jpg/400px-Aston_Martin_DB9_coupe_02.jpg",
        name: "Aston Martin DB9",
        "start_production": 2004,
        "class": "Grand tourer"
    },
    { id:24,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pontiac_Catalina_front.jpg/400px-Pontiac_Catalina_front.jpg",
        name: "Pontiac Catalina",
        "start_production": 1950,
        "class": "Full-size"
    },
    { id:25,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Oldsmobile_Toronado_0003.jpg/400px-Oldsmobile_Toronado_0003.jpg",
        name: "Oldsmobile Toronado",
        "start_production": 1965,
        "class": "Full-size personal luxury car"
    },
    { id:26,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Chrysler_Cirrus_--_01-27-2012.jpg/400px-Chrysler_Cirrus_--_01-27-2012.jpg",
        name: "Chrysler Cirrus",
        "start_production": 1994,
        "class": "Mid-size"
    },
    { id:27,
        images: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/VW_Corrado_-_standard.jpg/400px-VW_Corrado_-_standard.jpg",
        name: "Volkswagen Corrado",
        "start_production": 1988,
        "class": "Sport compact"
    },
    { id:30,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Mercedes_R_350_CDI_4MATIC_Lang_%28V251%29_Facelift_front_20101017.jpg/400px-Mercedes_R_350_CDI_4MATIC_Lang_%28V251%29_Facelift_front_20101017.jpg",
        name: "Mercedes-Benz R-Class",
        "class": "Full-size CUV / Large MPV"
    },
    { id:31,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Volvo_V50_1.6_D.jpg/400px-Volvo_V50_1.6_D.jpg",
        name: "Volvo V50",
        "start_production": 2004,
        "class": "Compact / Small family car"
    },
    { id:32,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Audi_TT_Coup%C3%A9_2.0_TFSI_quattro_S-line_%288S%29_%E2%80%93_Frontansicht%2C_3._April_2015%2C_D%C3%BCsseldorf.jpg/400px-Audi_TT_Coup%C3%A9_2.0_TFSI_quattro_S-line_%288S%29_%E2%80%93_Frontansicht%2C_3._April_2015%2C_D%C3%BCsseldorf.jpg",
        name: "Audi TT",
        "class": "Sport compact Sports car"
    },
    { id:33,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/VW_Touareg_Exclusive_V6_TDI_BlueMotion_Technology_%28II%29_%E2%80%93_Frontansicht%2C_3._Juli_2013%2C_M%C3%BCnster.jpg/400px-VW_Touareg_Exclusive_V6_TDI_BlueMotion_Technology_%28II%29_%E2%80%93_Frontansicht%2C_3._Juli_2013%2C_M%C3%BCnster.jpg",
        name: "Volkswagen Touareg",
        "start_production": 2002,
        "class": "Mid-size luxury crossover SUV"
    },
    { id:34,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Red92VR4rear.jpg/400px-Red92VR4rear.jpg",
        name: "Mitsubishi GTO",
        "start_production": 1990,
        "class": "Sports car, grand tourer"
    },
    { id:35,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Cadillac_Cimarron_2_--_07-01-2009.jpg/400px-Cadillac_Cimarron_2_--_07-01-2009.jpg",
        name: "Cadillac Cimarron",
        "start_production": 1981,
        "class": "Compact"
    },
    { id:36,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/1991_Daytona_CS.JPG/400px-1991_Daytona_CS.JPG",
        name: "Dodge Daytona",
        "start_production": 1984,
        "class": "Compact"
    },
    { id:37,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Cadillac_Allante.jpg/400px-Cadillac_Allante.jpg",
        name: "Cadillac Allanté",
        "start_production": 1986,
        "class": "Luxury roadster"
    },
    { id:38,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Toyota_Avensis_III_20090706_front.JPG/400px-Toyota_Avensis_III_20090706_front.JPG",
        name: "Toyota Avensis",
        "start_production": 1997,
        "class": "Large family car"
    },
    { id:39,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Mercedes_300SL_Coupe_vr_silver_EMS.jpg/400px-Mercedes_300SL_Coupe_vr_silver_EMS.jpg",
        name: "Mercedes-Benz 300 SL",
        "start_production": 1952,
        "class": "Sports car, GT"
    },
    { id:40,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Audi_80_B1234.jpg/400px-Audi_80_B1234.jpg",
        name: "Audi 80",
        "start_production": 1997,
        "class": "Compact executive car"
    },
    { id:41,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Audi_A2_front_20071002.jpg/400px-Audi_A2_front_20071002.jpg",
        name: "Audi A2",
        "start_production": 1999,
        "class": "Supermini"
    },
    { id:42,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:43,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:44,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:45,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:46,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:47,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/1991_Daytona_CS.JPG/400px-1991_Daytona_CS.JPG",
        name: "Dodge Daytona",
        "class": "Mid-size car"
    },
    { id:48,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:49,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/2000_TVR_Tuscan_4.0_Speed_Six_by_The_Car_Spy.jpg/400px-2000_TVR_Tuscan_4.0_Speed_Six_by_The_Car_Spy.jpg",
        name: "TVR Tuscan Speed Six",
        "class": "Mid-size car"
    },
    { id:50,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:51,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:52,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:53,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/2000_TVR_Tuscan_4.0_Speed_Six_by_The_Car_Spy.jpg/400px-2000_TVR_Tuscan_4.0_Speed_Six_by_The_Car_Spy.jpg",
        name: "TVR Tuscan Speed Six",
        "class": "Mid-size car"
    },
    { id:54,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:55,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:56,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/1991_Daytona_CS.JPG/400px-1991_Daytona_CS.JPG",
        name: "Dodge Daytona",
        "class": "Mid-size car"
    },
    { id:57,
        images: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/VW_Corrado_-_standard.jpg/400px-VW_Corrado_-_standard.jpg",
        name: "Volkswagen Corrado",
        "class": "Mid-size car"
    },
    { id:58,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:59,
        images: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/VW_Corrado_-_standard.jpg/400px-VW_Corrado_-_standard.jpg",
        name: "Volkswagen Corrado",
        "class": "Mid-size car"
    },
    { id:60,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:61,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:62,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:64,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:65,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:66,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:67,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:68,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:69,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:70,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:71,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:72,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:74,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    { id:75,
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
        name: "Oldsmobile Intrigue",
        "class": "Mid-size car"
    },
    // Add more car data here
  ];
  
  export default carsdata;