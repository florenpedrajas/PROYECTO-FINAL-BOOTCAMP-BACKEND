const  mongoose  = require("mongoose");
const Parking = require("../../src/api/parking/parking.model")

const Parkings = [
  
  {price: 5,
    adress: "Avda de Brasil, 27, 28020-Madrid",      
    busy: "false",
    size: "turismo",
    bookings: [],
    image: "https://static.leonoticias.com/www/multimedia/201903/28/media/cortadas/aparcamiento-k5tC-U7010328519825vD-624x385@Ideal.jpg",
    latitude: 40.45973188744278,
    longitude: -3.694223264790685
  },
  {price: 5,
    adress: "Calle de Gral. Margallo, 22, 28020-Madrid",      
    busy: "false",
    size: "caravana",
    bookings: [],
    image: "https://img.milanuncios.com/fg/2288/69/228869150_5.jpg?VersionId=hX2aIK2PWE2oUCU67oi_QRwTL3sBCnmG",
    latitude: 40.458355702329435,
    longitude: -3.694960142330148,
  },
  {price: 4,
    adress: "Calle de Francisco Gervás, 17, 28020-Madrid",      
    busy: "false",
    size: "furgoneta",
    bookings: [],
    image: "https://storage.googleapis.com/static.inmoweb.es/clients/236/property/840771/image/WhatsApp%20Image%202022-02-10%20at%202.55.16%20PM.jpg",
    latitude: 40.462565273322255,
    longitude: -3.694725137115054,
  },
  {price: 10,
    adress: "Calle de la Infanta Mercedes, 70, 28020-Madrid",      
    busy: "false",
    size: "camion",
    bookings: [],
    image: "https://pr1.nicelocal.es/XHyIjp8VLkg-Scb48zzVRw/1125x1500,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2eAY4yG3Jp2iODXTFv9ZwstGrbiOJPfKrJ8PHv2uOAYh3xKh38s_4FKvKHUzywcD4Q",
    latitude: 40.46060177087186,
    longitude: -3.6955615410525255,

  },

  {price: 4,
    adress: "Calle de Sor Ángela de la Cruz, 17, 28020 Madrid",      
    busy: "false",
    size: "turismo",
    bookings: [],
    image: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/02/garajes-lujo_5.jpg?itok=IQNePESQ",
    latitude: 40.46060177087186,
    longitude: -3.6955615410525255,
  },
  {price: 7,
    adress: "Calle de la Infanta Mercedes, 62, 28020 Madrid",      
    busy: "false",
    size: "caravana",
    bookings: [],
    image: "https://aparcatuautocaravana.com/wp-content/uploads/2021/08/belchite8-760x410.jpg?v=1639349820",
    latitude: 40.46092539918706,
    longitude: -3.6967625313217147,
  }, 
  {price: 5,
    adress: "Calle de Francisco Gervás, 10, 28020 Madrid",      
    busy: "false",
    size: "furgoneta",
    bookings: [],
    image: "https://img3.idealista.com/blur/WEB_DETAIL_TOP-L-L/0/id.pro.es.image.master/6c/ee/1a/868396284.jpg",
    latitude: 40.46159440740007,
    longitude: -3.69566877232656,
  },
  {price: 10,
    adress: "Calle de la Infanta Mercedes, 70, 28020-Madrid",      
    busy: "false",
    size: "camion",
    bookings: [],
    image: "https://c8.alamy.com/compes/eneg75/carretilla-o-taller-de-reparacion-de-camiones-garaje-interior-eneg75.jpg",
    latitude: 40.461448971259266,
    longitude: -3.695445167533452, 
  },

  {price: 4,
    adress: "Calle del Poeta Joan Maragall, 38, 28020 Madrid",      
    busy: "false",
    size: "turismo",
    bookings: [],
    image: "https://images.locanto.es/mobile_5333394054/mobile_Alquiler-de-Garaje-en-Salamanca_1.jpg",
    latitude: 40.46146473225235,
    longitude: -3.6949779251295785,
  },
  {price: 7,
    adress: "Calle de Huesca, 20-22, 28020 Madrid",      
    busy: "false",
    size: "moto",
    bookings: [],
    image: "https://www.aparcalia.com/Recursos/37368/IMG_20220705_170422.jpg",
    latitude: 40.46133995480377,
    longitude: -3.696006615195947, 
  },

  {price: 5,
    adress: "Calle de Sor Ángela de la Cruz, 33, 28020 Madrid",      
    busy: "false",
    size: "turismo",
    bookings: [],
    image: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/02/garajes-lujo_5.jpg?itok=IQNePESQ",
    latitude: 0.462874,
    longitude: -3.69477, 
  },
  {
    price: 10,
    adress: "Calle de Orense, 69, 28020 Madrid",      
    busy: "false",
    size: "moto",
    bookings: [],
    image: "https://static.fotocasa.es/images/anuncio/2022/08/31/164656241/2404340162.jpg?rule=web_412x257",
    latitude: 40.4582536,
    longitude: -3.6949427,
  },
    
    

  

];



mongoose.connect("mongodb+srv://root:root@cluster0.0lvrnql.mongodb.net/ValetApp?retryWrites=true&w=majority")

  .then(async () => {
    const allParking = await Parking.find().lean();
    
    if(!allParking.length) {
      console.log('[seed]: No se encuentran Parking, continuo...')
    } else {
      console.log(`[seed]: Encontrados ${allParking.length} Parking.`);
      await Parking.collection.drop();
      console.log('[seed]: Colección Parking eliminada correctamente');
    }
  })
  .catch((error) => console.log('[seed]: Error eliminando la colección -->', error))
  .then(async() => {
    await Parking.insertMany(Parkings);
    console.log('[seed]: Nuevos Parkings añadidos con éxito');
  })
  .catch((error) => console.log('[seed]: Error añadiendo los Parkings', error))
  .finally(() => mongoose.disconnect());