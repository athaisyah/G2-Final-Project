-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: banking
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
-- Table structure for table `userbanking`
--

DROP TABLE IF EXISTS `userbanking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userbanking` (
  `id_userBanking` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `no_account` varchar(45) DEFAULT NULL,
  `no_phone` varchar(45) DEFAULT NULL,
  `pin` int DEFAULT NULL,
  `balance` int DEFAULT '2000000',
  `is_eBanking` varchar(45) DEFAULT 'N',
  PRIMARY KEY (`id_userBanking`),
  UNIQUE KEY `no_account_UNIQUE` (`no_account`),
  UNIQUE KEY `no_phone_UNIQUE` (`no_phone`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userbanking`
--

LOCK TABLES `userbanking` WRITE;
/*!40000 ALTER TABLE `userbanking` DISABLE KEYS */;
INSERT INTO `userbanking` VALUES (1,'Aisah','123456789','82233445566',112345,1755000,'Yes'),(2,'Samirah','234567891','83344556677',123456,4000000,'Yes'),(3,'Budi','345678912','84455667788',123456,5000000,'No'),(4,'Ani','456789123','85566778899',123456,3000000,'No'),(5,'User','567891234','86677889911',123456,2500000,'No');
/*!40000 ALTER TABLE `userbanking` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-26 22:16:06
