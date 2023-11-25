import express from 'express';
import { createApartment, getAllApartments, getApartmentByID } from '../services/apartments';

const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
     console.log('Time: ', Date.now())
     next()
})

router.get('/create', async (req, res) => {
     try {
          await createApartment(req.body)
          return res.status(204).send();
     } catch (error) {
          return res.status(400).send({
               error: (error as Error).message
          });
     }
})

// define the home page route
router.get('/:id', async (req, res) => {
     try {
          const apartment = await getApartmentByID(req.params.id);
          return res.send(apartment);
     } catch (error) {
          return res.status(400).send({
               error: (error as Error).message
          });
     }
})
// define the about route
router.get('/', async (req, res) => {
     const apartments = await getAllApartments();
     return res.send(apartments)
})

module.exports = router