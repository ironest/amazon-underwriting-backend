# amazon-underwriting-backend

**How to start the a working dev environment**

1. Create a `.env` file containing
   * `DB_HOST=mongodb://localhost/auw-dev`
   * `PORT=3000`

2. Run the seed file to populate the DB
   * `npm run seed`
   * Control-C when finished

3. Start express
   * `npm run dev-server`

4. Verify the existing routes:
   * `http://localhost:3000/pages`