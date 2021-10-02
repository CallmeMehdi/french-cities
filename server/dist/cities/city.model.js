"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitySchema = void 0;
const mongoose = require("mongoose");
exports.CitySchema = new mongoose.Schema({
    codePostal: { type: String, required: true },
    codeCommune: { type: String, required: true },
    nomCommune: { type: String, required: true },
    libelleAcheminement: { type: String, required: true }
}, { collection: 'french-cities' });
//# sourceMappingURL=city.model.js.map