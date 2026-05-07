import { getMakes, getModels, getAllCars, getStats, searchCars, getRandomCar } from './index.js';

console.log('🚗 Hussa Car Database - Example Usage\n');

// Example 1: Get all makes
console.log('📋 All Car Makes:');
const makes = getMakes();
console.log(`Total makes: ${makes.length}`);
console.log('First 10 makes:', makes.slice(0, 10));
console.log('');

// Example 2: Get models for a specific make
console.log('🚙 Toyota Models:');
const toyotaModels = getModels('Toyota');
console.log(`Toyota has ${toyotaModels.length} models:`);
console.log(toyotaModels.slice(0, 10));
console.log('');

// Example 3: Get database statistics
console.log('📊 Database Statistics:');
const stats = getStats();
console.log(`Total makes: ${stats.totalMakes}`);
console.log(`Total models: ${stats.totalModels}`);
console.log('');

// Example 4: Search for cars
console.log('🔍 Search Results for "BMW":');
const bmwCars = searchCars('BMW');
console.log(`Found ${bmwCars.length} BMW cars:`);
bmwCars.slice(0, 5).forEach((car, index) => {
    console.log(`  ${index + 1}. ${car.make} ${car.model}`);
});
console.log('');

// Example 5: Get random car
console.log('🎲 Random Cars:');
for (let i = 0; i < 5; i++) {
    const randomCar = getRandomCar();
    console.log(`  ${i + 1}. ${randomCar.make} ${randomCar.model}`);
}
console.log('');

// Example 6: Get all cars (show first 5)
console.log('📝 First 5 Cars in Database:');
const allCars = getAllCars();
allCars.slice(0, 5).forEach((car, index) => {
    console.log(`  ${index + 1}. ${car.make} ${car.model} (added: ${car.addedDate})`);
});

console.log('\n✅ Example completed!');
