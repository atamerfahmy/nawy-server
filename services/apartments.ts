import Apartment from '../models/apartment';
import { IApartment } from '../types/apartment';


export const getAllApartments = async () => {
     return await Apartment.findAll();
}

export const getApartmentByID = async (uid: String) => {
     const apartment = await Apartment.findOne({
          where: {
               id: uid
          }
     })
     
     if (!apartment) throw new Error("Apartment not found");
     return apartment;
}

export const createApartment = async (data: IApartment) => {
     try {
          await Apartment.create({...data});
     } catch (error) {
          throw new Error('Something went wrong with the creation');
     }
}