import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read car data from CSV file
let carData = null;

function loadCarData() {
    if (carData) return carData;
    
    try {
        const csvPath = path.join(__dirname, 'uzair-car-database.csv');
        const csvContent = fs.readFileSync(csvPath, 'utf8');
        const lines = csvContent.split('\n');
        
        const makes = new Set();
        const models = new Map(); // make -> Set of models
        const allCars = [];
        
        // Skip header and process data
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line) {
                // Parse CSV line
                const parts = line.match(/(".*?"|[^,]+)(?=\s*,|\s*$)/g);
                if (parts && parts.length >= 3) {
                    const make = parts[0].replace(/"/g, '').trim();
                    const model = parts[1].replace(/"/g, '').trim();
                    const addedDate = parts[2].replace(/"/g, '').trim();
                    
                    if (make && model) {
                        makes.add(make);
                        
                        if (!models.has(make)) {
                            models.set(make, new Set());
                        }
                        models.get(make).add(model);
                        
                        allCars.push({
                            make,
                            model,
                            addedDate
                        });
                    }
                }
            }
        }
        
        carData = {
            makes: Array.from(makes).sort(),
            models: Object.fromEntries(
                Array.from(models.entries()).map(([make, modelSet]) => [
                    make,
                    Array.from(modelSet).sort()
                ])
            ),
            allCars,
            totalMakes: makes.size,
            totalModels: allCars.length
        };
        
        return carData;
    } catch (error) {
        throw new Error(`Failed to load car data: ${error.message}`);
    }
}

/**
 * Get all car makes
 * @returns {string[]} Array of car makes
 */
export function getMakes() {
    const data = loadCarData();
    return data.makes;
}

/**
 * Get all models for a specific make
 * @param {string} make - Car make
 * @returns {string[]} Array of models for the make
 */
export function getModels(make) {
    const data = loadCarData();
    return data.models[make] || [];
}

/**
 * Get all cars with makes and models
 * @returns {Array} Array of all car objects
 */
export function getAllCars() {
    const data = loadCarData();
    return data.allCars;
}

/**
 * Get statistics about the car database
 * @returns {Object} Statistics object
 */
export function getStats() {
    const data = loadCarData();
    return {
        totalMakes: data.totalMakes,
        totalModels: data.totalModels
    };
}

/**
 * Search for cars by make or model
 * @param {string} query - Search query
 * @returns {Array} Array of matching cars
 */
export function searchCars(query) {
    const data = loadCarData();
    const queryLower = query.toLowerCase();
    
    return data.allCars.filter(car => 
        car.make.toLowerCase().includes(queryLower) ||
        car.model.toLowerCase().includes(queryLower)
    );
}

/**
 * Get random car
 * @returns {Object} Random car object
 */
export function getRandomCar() {
    const data = loadCarData();
    const randomIndex = Math.floor(Math.random() * data.allCars.length);
    return data.allCars[randomIndex];
}

// Default export with all functions
export default {
    getMakes,
    getModels,
    getAllCars,
    getStats,
    searchCars,
    getRandomCar
};
