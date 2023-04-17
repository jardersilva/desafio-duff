/**
 * @swagger
 * components:
 *  schemas:
 *    TypeBeer:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: id of the type
 *        name:
 *          type: string
 *          description: name of the type
 *        temperatureMin:
 *          type: number
 *          format: float
 *          description: ideal minimum temperature for beer
 *        temperatureMax:
 *          type: number
 *          format: float
 *          description: ideal maximum temperature for beer
 *        createdAt:
 *          type: string
 *          format: date-time
 *        updatedAt:
 *          type: string
 *          format: date-time
 *
 */
/**
 * @swagger
 * components:
 *  schemas:
 *    TypeBeerBody:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: id of the type
 *        name:
 *          type: string
 *          description: name of the type
 *        temperatureMin:
 *          type: number
 *          format: float
 *          description: ideal minimum temperature for beer
 *        temperatureMax:
 *          type: number
 *          format: float
 *          description: ideal maximum temperature for beer
 *
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     CodeReturn:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: menssage
 */
/**
 * @swagger
 *  tags:
 *    name: TypesBeers
 *    description: Endpoints for TypesBeers
 */
/**
 * @swagger
 * /api/v1/typesBeers:
 *   get:
 *     summary: List all types of beers
 *     tags: [TypesBeers]
 *     parameters:
 *      - in: path
 *        name: perPage
 *      - in: path
 *        name: pageNumber
 *     responses:
 *       200:
 *         description: sucess
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TypeBeer'
 *               items:
 *                 $ref: '#/components/schemas/TypeBeer'
 */

/**
 * @swagger
 * /api/v1/typesBeers/{id}:
 *   get:
 *     summary: List a type of beer
 *     tags: [TypesBeers]
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       200:
 *         description: sucess
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TypeBeer'
 *               items:
 *                 $ref: '#/components/schemas/TypeBeer'
 *       404:
 *         description: TypeBeer not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CodeReturn'
 *               items:
 *                 $ref: '#/components/schemas/CodeReturn'
 */

/**
 * @swagger
 * /api/v1/typesBeers/{id}:
 *   delete:
 *     summary: Delete a type of beer
 *     tags: [TypesBeers]
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       200:
 *         description: sucess
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CodeReturn'
 *               items:
 *                 $ref: '#/components/schemas/CodeReturn'
 *       404:
 *         description: TypeBeer not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CodeReturn'
 *               items:
 *                 $ref: '#/components/schemas/CodeReturn'
 */

/**
 * @swagger
 * /api/v1/typesBeers}:
 *   post:
 *     summary: Create a type of beer
 *     tags: [TypesBeers]
 *     description: Create a type of beer
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Body
 *         description: TypeBeer object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/TypeBeerBody'
 *     responses:
 *       201:
 *         description: sucess
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TypeBeer'
 *               items:
 *                 $ref: '#/components/schemas/TypeBeer'
 *       400:
 *         description: Body invalid
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CodeReturn'
 *               items:
 *                 $ref: '#/components/schemas/CodeReturn'
 */

/**
 * @swagger
 * /api/v1/typesBeers/{id}:
 *   put:
 *     summary: Update a type of beer
 *     tags: [TypesBeers]
 *     description: Update a type of beer
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Body
 *         description: TypeBeer object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/TypeBeerBody'
 *     responses:
 *       200:
 *         description: sucess
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TypeBeer'
 *               items:
 *                 $ref: '#/components/schemas/TypeBeer'
 *       404:
 *         description: TypeBeer not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CodeReturn'
 *               items:
 *                 $ref: '#/components/schemas/CodeReturn'
 *
 *       400:
 *         description: Body invalid
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CodeReturn'
 *               items:
 *                 $ref: '#/components/schemas/CodeReturn'
 */
