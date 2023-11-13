/*
  Warnings:

  - Added the required column `total_price_ppn` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `transaction` ADD COLUMN `total_price_ppn` INTEGER NOT NULL;
