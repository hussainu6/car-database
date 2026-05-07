import { getMakes, getModels, getAllCars, getStats, searchCars, getRandomCar } from './index.js';

console.log('🧪 Testing Uzair Car Database Package\n');

// Test 1: Basic functionality
console.log('Test 1: Basic Functions');
try {
    const makes = getMakes();
    console.log(`✅ getMakes(): ${makes.length} makes loaded`);
    
    const toyotaModels = getModels('Toyota');
    console.log(`✅ getModels('Toyota'): ${toyotaModels.length} models found`);
    
    const allCars = getAllCars();
    console.log(`✅ getAllCars(): ${allCars.length} total cars loaded`);
    
    const stats = getStats();
    console.log(`✅ getStats(): ${JSON.stringify(stats)}`);
    
} catch (error) {
    console.log(`❌ Basic functions failed: ${error.message}`);
}

// Test 2: Search functionality
console.log('\nTest 2: Search Functionality');
try {
    const searchResults = searchCars('Toyota');
    console.log(`✅ searchCars('Toyota'): ${searchResults.length} results found`);
    
    const bmwResults = searchCars('BMW');
    console.log(`✅ searchCars('BMW'): ${bmwResults.length} results found`);
    
} catch (error) {
    console.log(`❌ Search failed: ${error.message}`);
}

// Test 3: Random functionality
console.log('\nTest 3: Random Function');
try {
    const randomCar1 = getRandomCar();
    const randomCar2 = getRandomCar();
    console.log(`✅ getRandomCar(): ${randomCar1.make} ${randomCar1.model}`);
    console.log(`✅ getRandomCar(): ${randomCar2.make} ${randomCar2.model}`);
    
} catch (error) {
    console.log(`❌ Random function failed: ${error.message}`);
}

// Test 4: Edge cases
console.log('\nTest 4: Edge Cases');
try {
    const nonExistentModels = getModels('NonExistentMake');
    console.log(`✅ getModels('NonExistentMake'): ${nonExistentModels.length} models (should be 0)`);
    
    const emptySearch = searchCars('');
    console.log(`✅ searchCars(''): ${emptySearch.length} results`);
    
} catch (error) {
    console.log(`❌ Edge cases failed: ${error.message}`);
}

console.log('\n🎉 Package testing completed!');
