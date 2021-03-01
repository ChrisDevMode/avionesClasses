const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }
    
    getRandomCivil() {
        let rdm = Math.floor(Math.random() * this.civilImages.length);
        return this.civilImages[rdm];
        
    }
    
    getRandomMilitary() {
        let rdm2 = Math.floor(Math.random() * this.militaryImages.length);
        return this.civilImages[rdm2];
    }
    
    getAll() {
        let newArr = [];
        newArr.push(...this.civilImages, ...this.militaryImages);

        return newArr;
    }

}

class Painter {
    constructor() {
        this.createGallery();
    }

    createGallery() {
        let section = document.createElement('section');
        document.body.appendChild(section);

        this.gallery = section;
    }

    createImageTag(imageUrl) {
        let picture = document.createElement('picture');
        let img = document.createElement('img');
        picture.appendChild(img);
            img.setAttribute('src', imageUrl);

        return picture;
    }

    paintSingleImage(imageUrl) {
        let newImage = this.createImageTag(imageUrl);
        this.gallery.appendChild(newImage);
        return newImage;
    }

    paintMultipleImages(arrayOfImages) {
        let newArr = arrayOfImages.map( (cur) => {
            this.gallery.appendChild(this.createImageTag(cur));
        });

        return newArr;
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);

const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const results = helicopters.getAll();
const painter = new Painter()

// painter.createImageTag();