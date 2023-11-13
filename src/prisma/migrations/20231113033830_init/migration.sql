/*
  Warnings:

  - You are about to drop the `_carttotransaction_detail` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cart_id` to the `Transaction_Detail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_carttotransaction_detail` DROP FOREIGN KEY `_CartToTransaction_Detail_A_fkey`;

-- DropForeignKey
ALTER TABLE `_carttotransaction_detail` DROP FOREIGN KEY `_CartToTransaction_Detail_B_fkey`;

-- AlterTable
ALTER TABLE `transaction_detail` ADD COLUMN `cart_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_carttotransaction_detail`;

-- AddForeignKey
ALTER TABLE `Transaction_Detail` ADD CONSTRAINT `Transaction_Detail_cart_id_fkey` FOREIGN KEY (`cart_id`) REFERENCES `Cart`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
