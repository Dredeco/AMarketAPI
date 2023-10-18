import { Request, Response, Router } from "express";
import { productController } from "../controllers/productController";

const router = Router()

// User router
router
    .route("/products")
    .post((req: Request, res: Response) => productController.createProduct(req, res))

router
    .route("/products/:id")
    .post((req: Request, res: Response) => productController.update(req, res))

router
    .route("/products")
    .get((req: Request, res: Response) => productController.getAll(req, res))

router
    .route("/products/:id")
    .get((req: Request, res: Response) => productController.get(req, res))

module.exports = router