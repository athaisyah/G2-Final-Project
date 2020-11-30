-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: server_handphone
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `handphone_bill`
--

DROP TABLE IF EXISTS `handphone_bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `handphone_bill` (
  `id_bill` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `no_handphone` varchar(45) DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `period` varchar(45) DEFAULT 'November 2020',
  `status` varchar(45) DEFAULT 'Waiting for Payment',
  `provider` varchar(45) DEFAULT NULL,
  `id_customer` int DEFAULT NULL,
  PRIMARY KEY (`id_bill`),
  UNIQUE KEY `no_handphone_UNIQUE` (`no_handphone`),
  UNIQUE KEY `id_customer_UNIQUE` (`id_customer`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `handphone_bill`
--

LOCK TABLES `handphone_bill` WRITE;
/*!40000 ALTER TABLE `handphone_bill` DISABLE KEYS */;
INSERT INTO `handphone_bill` VALUES (6,'Alika','82233445566',150000,'November 2020','Paid','XL',21),(13,'Afra G','83344556677',90000,'November 2020','Waiting for Payment','Telkomsel',31),(14,'Lisa','83344556688',90000,'November 2020','Waiting for Payment','Telkomsel',32),(17,'Pita','84455667799',75000,'November 2020','Waiting for Payment','Indosat',42),(18,'Ita','84455667700',75000,'November 2020','Waiting for Payment','Indosat',43);
/*!40000 ALTER TABLE `handphone_bill` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-26 22:16:08
