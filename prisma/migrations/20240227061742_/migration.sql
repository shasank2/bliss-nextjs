-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "category" DROP NOT NULL,
ALTER COLUMN "style" DROP NOT NULL,
ALTER COLUMN "store" DROP NOT NULL,
ALTER COLUMN "size" DROP NOT NULL,
ALTER COLUMN "inventory" DROP NOT NULL,
ALTER COLUMN "color" DROP NOT NULL,
ALTER COLUMN "price" DROP NOT NULL;