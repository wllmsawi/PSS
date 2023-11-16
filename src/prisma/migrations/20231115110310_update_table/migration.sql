/*
  Warnings:

  - You are about to drop the column `branchId` on the `stock` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `stock` table. All the data in the column will be lost.
  - Added the required column `branch_id` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `stock` DROP FOREIGN KEY `Stock_branchId_fkey`;

-- DropForeignKey
ALTER TABLE `stock` DROP FOREIGN KEY `Stock_productId_fkey`;

-- AlterTable
ALTER TABLE `stock` DROP COLUMN `branchId`,
    DROP COLUMN `productId`,
    ADD COLUMN `branch_id` INTEGER NOT NULL,
    ADD COLUMN `product_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
