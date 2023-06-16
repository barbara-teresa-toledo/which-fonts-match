export const FontService = {
    getProductsData() {
      return [
        {
          id: "01",
          font1: 'Roxborough CF Bold',
          font2: 'Montserrat',
          link1: 'https://www.dfonts.org/fonts/roxborough-cf-font/',
          link2: 'https://fonts.google.com/specimen/Montserrat',
          photo: '../public/1.png'  
        },
      ];
    },

    getProducts() {
      return Promise.resolve(this.getProductsData());
    },
  };