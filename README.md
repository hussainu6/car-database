# Uzair Car Database

A comprehensive car database with over 2,200+ unique makes and models compiled by Uzair Hussain. Perfect for automotive applications, car search functionality, and vehicle data management.

## 🚗 Features

- **2,200+ Unique Cars**: Comprehensive collection of car makes and models
- **Easy to Use**: Simple API with multiple functions
- **Search Functionality**: Find cars by make or model
- **Statistics**: Get database statistics
- **Random Selection**: Get random car from database
- **No External Dependencies**: Pure JavaScript implementation

## 📦 Installation

```bash
npm install uzair-car-database
```

## 🔧 Usage

### ES6 Modules

```javascript
import { getMakes, getModels, getAllCars, getStats, searchCars, getRandomCar } from 'uzair-car-database';

// Get all makes
const makes = getMakes();
console.log(makes); // ['Acura', 'Alfa Romeo', 'Audi', ...]

// Get models for a specific make
const toyotaModels = getModels('Toyota');
console.log(toyotaModels); // ['4Runner', 'Avalon', 'Camry', ...]

// Get all cars
const allCars = getAllCars();
console.log(allCars); // [{ make: 'Toyota', model: 'Camry', addedDate: '2026-05-07' }, ...]

// Get database statistics
const stats = getStats();
console.log(stats); // { totalMakes: 71, totalModels: 2235 }

// Search cars
const searchResults = searchCars('Toyota');
console.log(searchResults); // All Toyota cars

// Get random car
const randomCar = getRandomCar();
console.log(randomCar); // Random car object
```

### CommonJS

```javascript
const carDB = require('uzair-car-database');

const makes = carDB.getMakes();
const models = carDB.getModels('Toyota');
const allCars = carDB.getAllCars();
const stats = carDB.getStats();
const searchResults = carDB.searchCars('BMW');
const randomCar = carDB.getRandomCar();
```

## 📊 API Reference

### `getMakes()`
Returns an array of all car makes in the database.

**Returns:** `string[]` - Array of car makes

### `getModels(make)`
Returns an array of all models for a specific make.

**Parameters:**
- `make` (string): Car make name

**Returns:** `string[]` - Array of models for the specified make

### `getAllCars()`
Returns an array of all car objects in the database.

**Returns:** `Array<{make: string, model: string, addedDate: string}>`

### `getStats()`
Returns statistics about the car database.

**Returns:** `{totalMakes: number, totalModels: number}`

### `searchCars(query)`
Searches for cars by make or model name.

**Parameters:**
- `query` (string): Search term

**Returns:** `Array<{make: string, model: string, addedDate: string}>` - Matching cars

### `getRandomCar()`
Returns a random car from the database.

**Returns:** `{make: string, model: string, addedDate: string}` - Random car object

## 📈 Database Statistics

- **Total Makes**: 71+
- **Total Models**: 2,200+
- **Data Sources**: car-info, car-models, real-world data
- **Last Updated**: 2026-05-07

## 🚗 Included Car Brands

The database includes cars from major manufacturers such as:

- **Toyota**: Camry, Corolla, RAV4, Highlander, Prius, etc.
- **Honda**: Civic, Accord, CR-V, Pilot, Odyssey, etc.
- **BMW**: 3 Series, 5 Series, X3, X5, i4, iX, etc.
- **Mercedes-Benz**: C-Class, E-Class, GLE, EQS, EQE, etc.
- **Audi**: A4, A6, Q5, Q7, e-tron, etc.
- **Tesla**: Model 3, Model Y, Model S, Model X, Cybertruck
- **Ford**: F-150, Mustang, Explorer, Bronco, etc.
- **Chevrolet**: Silverado, Tahoe, Malibu, Bolt EV, etc.
- **Hyundai**: Elantra, Sonata, Tucson, Palisade, Ioniq 5, etc.
- **Kia**: Sportage, Sorento, Telluride, EV6, etc.

And many more luxury and economy brands!

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, please open an issue on the GitHub repository.

---

**Created by Uzair Hussain** - Comprehensive car database for developers
