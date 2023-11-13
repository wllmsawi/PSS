-- AddForeignKey
ALTER TABLE `Transaction_Detail` ADD CONSTRAINT `Transaction_Detail_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
