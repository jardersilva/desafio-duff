/**
 * @swagger
 * components:
 *  schemas:
 *    Beer1:
 *      type: object
 *      properties:
 *        beerStyle:
 *          type: string
 *          description: id of the type
 *        playlist:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Playlist'

/**
 * @swagger
 * components:
 *  schemas:
 *    Playlist:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        artist
 *          type: string
 *        link:
 *          type: string
 *
/**
 * @swagger
 * components:
 *  schemas:
 *    PlayBeerReq:
 *      type: object
 *      properties:
 *        temperature:
 *          type: number
 *          format: float
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
 *    name: PlayBeer
 *    description: Endpoints for PlayBeer
 */
/**
 * @swagger
 * /api/v1/beersPlay:
 *   post:
 *     summary: View beer style  and playlist of spotify
 *     tags: [PlayBeer]
 *     description: View beer style  and playlist of spotify
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Body
 *         description: playBeer request
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/PlayBeerReq'
 *     responses:
 *       200:
 *         description: sucess
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Beer1'
 *               items:
 *                 $ref: '#/components/schemas/Beer1'
 *       400:
 *         description: Body invalid
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CodeReturn'
 *               items:
 *                 $ref: '#/components/schemas/CodeReturn'
 */
